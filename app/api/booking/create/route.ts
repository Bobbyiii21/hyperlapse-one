import {
  checkSlug,
  demoEnabled,
  options,
  responseError,
  BookingError,
} from "@/lib/booking/config";
import { busyRanges, calendar } from "@/lib/booking/google";
import { generateSlots } from "@/lib/booking/slots";
import { bookingSchema } from "@/lib/booking/validation";
import { serializeICS, CalendarEvent } from "@/lib/booking/ics";
import { digest, rateLimit, reserve, redis } from "@/lib/booking/store";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  try {
    if (Number(request.headers.get("content-length") ?? 0) > 20000)
      throw new BookingError(413, "Request is too large.");
    const reader = request.body?.getReader();
    if (!reader) throw new BookingError(400, "Missing request body");
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 20000) {
        await reader.cancel();
        throw new BookingError(413, "Request is too large.");
      }
      chunks.push(value);
    }
    const body = Buffer.concat(chunks).toString("utf8");
    let raw: unknown;
    try {
      raw = JSON.parse(body);
    } catch {
      throw new BookingError(400, "Invalid JSON");
    }
    checkSlug((raw as { slug?: unknown } | null)?.slug);
    const demo = demoEnabled();
    await rateLimit(request, demo);
    if (
      typeof (raw as { website?: unknown }).website === "string" &&
      (raw as { website: string }).website
    )
      return Response.json({ ok: true });
    const parsed = bookingSchema.safeParse(raw);
    if (!parsed.success)
      throw new BookingError(
        400,
        "Check your event details. Only a single timed reservation is supported; recurrence, all-day, cancelled and transparent events are not allowed.",
      );
    const input = parsed.data;
    const start = Date.parse(input.start),
      end = Date.parse(input.end),
      now = Date.now();
    if (
      !generateSlots(start, end, [], now, options()).some(
        (s) => Date.parse(s.start) === start && Date.parse(s.end) === end,
      )
    )
      throw new BookingError(
        400,
        "Choose an available slot within booking hours and the booking window.",
      );
    if (!demo) {
      calendar();
      redis();
      if (!process.env.BOOKING_ORGANIZER_EMAIL)
        throw new BookingError(503, "Booking organizer is not configured.");
    }
    const organizer = demo
      ? "preview@example.com"
      : process.env.BOOKING_ORGANIZER_EMAIL!;
    const attendees = Array.from(new Set([input.email, ...input.attendees]));
    const slotHash = digest(
      `${process.env.GOOGLE_CALENDAR_ID ?? "demo"}:${start}:${end}`,
    );
    const eventId = `b${slotHash}`;
    const owner = digest(JSON.stringify(input));
    const e: CalendarEvent = {
      ...input,
      uid: `${eventId}@hyperlapse`,
      organizer,
      attendees,
      description: `Requested by ${input.name}\n${input.description ?? ""}`,
      rrule: undefined,
      rdate: undefined,
      exdate: undefined,
    };
    // Serialize before claiming: malformed organizer/config must not consume a slot.
    let ics = serializeICS(e);
    await reserve(
      `booking:slot:${slotHash}`,
      owner,
      Math.ceil(end / 1000) + 86400,
      demo,
    );
    if (!demo) {
      const { api, id } = calendar();
      // Slot-derived Google ID makes retries and even simultaneous inserts idempotent.
      let existing;
      try {
        existing = (await api.events.get({ calendarId: id, eventId })).data;
      } catch (error) {
        if ((error as { code?: number }).code !== 404) throw error;
      }
      if (existing) {
        if (
          existing.status === "cancelled" ||
          existing.extendedProperties?.private?.bookingOwner !== owner
        )
          throw new BookingError(
            409,
            "This reservation needs manual confirmation.",
          );
      } else {
        const busy = await busyRanges(input.start, input.end);
        if (
          busy.some(
            (b) => start < Date.parse(b.end) && end > Date.parse(b.start),
          )
        )
          throw new BookingError(
            409,
            "This time is no longer available. Choose another slot.",
          );
        try {
          existing = (
            await api.events.insert({
              calendarId: id,
              sendUpdates: "all",
              requestBody: {
                id: eventId,
                summary: input.summary,
                description:
                  e.description +
                  (input.url ? `\n${input.url}` : "") +
                  (input.comment ? `\n${input.comment}` : ""),
                location: input.location,
                start: {
                  dateTime: new Date(start).toISOString(),
                  timeZone: "UTC",
                },
                end: { dateTime: new Date(end).toISOString(), timeZone: "UTC" },
                attendees: attendees.map((email) => ({ email })),
                status: "confirmed",
                visibility: "private",
                transparency: "opaque",
                guestsCanInviteOthers: false,
                guestsCanModify: false,
                guestsCanSeeOtherGuests: false,
                extendedProperties: { private: { bookingOwner: owner } },
                reminders: {
                  useDefault: false,
                  overrides: input.alarm
                    ? [
                        {
                          method:
                            input.alarm.action === "EMAIL" ? "email" : "popup",
                          minutes: input.alarm.minutes,
                        },
                      ]
                    : [],
                },
              },
            })
          ).data;
        } catch (error) {
          if ((error as { code?: number }).code !== 409) throw error;
          existing = (await api.events.get({ calendarId: id, eventId })).data;
          if (
            existing.status === "cancelled" ||
            existing.extendedProperties?.private?.bookingOwner !== owner
          )
            throw new BookingError(
              409,
              "This reservation needs manual confirmation.",
            );
        }
      }
      if (existing?.iCalUID)
        ics = serializeICS({ ...e, uid: existing.iCalUID });
    }
    return Response.json(
      { ok: true, eventId, ics, demo },
      {
        headers: {
          "Cache-Control": "no-store",
          "X-Robots-Tag": "noindex, nofollow",
        },
      },
    );
  } catch (e) {
    return responseError(e);
  }
}
