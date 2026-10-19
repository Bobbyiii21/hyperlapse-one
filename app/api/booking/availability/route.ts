import {
  checkSlug,
  demoEnabled,
  options,
  responseError,
  BookingError,
} from "@/lib/booking/config";
import { z } from "zod";
import { busyRanges } from "@/lib/booking/google";
import { generateSlots, ZONE } from "@/lib/booking/slots";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  try {
    const q = new URL(request.url).searchParams;
    checkSlug(q.get("slug"));
    const iso = z.iso.datetime({ offset: true });
    if (
      !iso.safeParse(q.get("from")).success ||
      !iso.safeParse(q.get("to")).success
    )
      throw new BookingError(400, "Use ISO date-times with a UTC offset.");
    const from = Date.parse(q.get("from")!),
      to = Date.parse(q.get("to")!);
    if (
      !Number.isFinite(from) ||
      !Number.isFinite(to) ||
      to <= from ||
      to - from > 60 * 86400000
    )
      throw new BookingError(
        400,
        "Provide a valid date window of at most 60 days.",
      );
    const demo = demoEnabled(),
      o = options(),
      now = Date.now();
    const queryFrom = Math.max(from, now),
      queryTo = Math.min(to, now + o.horizonDays * 86400000);
    const busy =
      demo || queryTo <= queryFrom
        ? []
        : await busyRanges(
            new Date(queryFrom).toISOString(),
            new Date(queryTo).toISOString(),
          );
    return Response.json(
      {
        busy,
        slots: generateSlots(from, to, busy, now, o),
        timeZone: ZONE,
        demo,
        slotMinutes: o.minutes,
      },
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
