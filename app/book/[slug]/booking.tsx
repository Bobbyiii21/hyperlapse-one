"use client";
import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Accordion,
  AccordionItem,
  Select,
  SelectItem,
} from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import type { Range } from "@/lib/booking/slots";
const labelDay = (s: string) =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date(s));
const labelTime = (s: string) =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(s));
export default function Booking({ slug }: { slug: string }) {
  const [localZone, setLocalZone] = useState("UTC");
  const [slots, setSlots] = useState<Range[]>([]),
    [day, setDay] = useState(""),
    [selected, setSelected] = useState<Range>(),
    [error, setError] = useState(""),
    [loading, setLoading] = useState(true),
    [sending, setSending] = useState(false),
    [demo, setDemo] = useState(false),
    [result, setResult] = useState<{ ics: string; demo: boolean }>(),
    [refresh, setRefresh] = useState(0);
  useEffect(() => {
    const abort = new AbortController();
    const from = new Date(),
      to = new Date(from.getTime() + 60 * 86400000);
    fetch(
      `/api/booking/availability?${new URLSearchParams({ slug, from: from.toISOString(), to: to.toISOString() })}`,
      { signal: abort.signal, cache: "no-store" },
    )
      .then(async (r) => {
        const data = await r.json();
        setLocalZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
        if (!r.ok) throw new Error(data.error);
        setSlots(data.slots);
        setDemo(data.demo);
        setDay(data.slots[0] ? labelDay(data.slots[0].start) : "");
      })
      .catch((e) => {
        if (e.name !== "AbortError") setError(e.message);
      })
      .finally(() => {
        if (!abort.signal.aborted) setLoading(false);
      });
    return () => abort.abort();
  }, [slug, refresh]);
  const days = Array.from(new Set(slots.map((s) => labelDay(s.start))));
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected) return;
    setSending(true);
    setError("");
    const form = event.currentTarget,
      fd = new FormData(form),
      value = (key: string) => String(fd.get(key) ?? "").trim(),
      list = (key: string) =>
        value(key)
          .split(/[\n,]/)
          .map((x) => x.trim())
          .filter(Boolean);
    // Keep this key on retries; a changed payload is intentionally rejected for a claimed slot.
    const requestId = form.dataset.requestId ?? crypto.randomUUID();
    form.dataset.requestId = requestId;
    const optional = (key: string) => value(key) || undefined;
    const payload = {
      slug,
      requestId,
      ...selected,
      website: value("website"),
      name: value("name"),
      email: value("email"),
      summary: value("summary"),
      description: optional("description"),
      location: optional("location"),
      url: optional("url"),
      attendees: list("attendees"),
      comment: optional("comment"),
      categories: list("categories"),
      priority: Number(value("priority") || 0),
      classification: value("classification") || "PRIVATE",
      attachments: list("attachments"),
      geo:
        value("latitude") !== "" && value("longitude") !== ""
          ? [Number(value("latitude")), Number(value("longitude"))]
          : undefined,
      alarm: value("alarm")
        ? {
            minutes: Number(value("alarm")),
            action: value("alarmAction") || "DISPLAY",
            attendees:
              value("alarmAction") === "EMAIL"
                ? list("alarmAttendees")
                : undefined,
          }
        : undefined,
    };
    try {
      const response = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      if (data.ics) setResult(data);
      else setError("Please reload and try again.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to book. Try again.");
    } finally {
      setSending(false);
    }
  }
  function download() {
    if (!result) return;
    const url = URL.createObjectURL(
      new Blob([result.ics], { type: "text/calendar;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "bobby-booking.ics";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 pb-24 pt-32 text-white">
      <p className="mb-4 text-xs uppercase tracking-[.3em] text-default-500">
        BY INVITATION · BOBBY R. STEPHENS III
      </p>
      <h1 className={title({ size: "lg" })}>
        {result ? "You’re on the calendar." : "Let’s make time."}
      </h1>
      <p className={subtitle()}>
        {result
          ? result.demo
            ? "Preview complete. No invitation was sent."
            : "Your invitation is on its way. Save a calendar copy below."
          : "Pick a time, share what’s on your mind, and I’ll see you there."}
      </p>
      {demo && (
        <p
          role="status"
          className="my-6 rounded-xl border border-yellow-700 p-4 text-yellow-300"
        >
          Demo preview — sample availability only. No calendar events or
          invitations will be created.
        </p>
      )}
      {error && (
        <div
          role="alert"
          className="my-6 rounded-xl border border-red-800 p-4 text-red-300"
        >
          {error}{" "}
          {!selected && (
            <Button
              size="sm"
              variant="light"
              onPress={() => {
                setLoading(true);
                setError("");
                setRefresh((x) => x + 1);
              }}
            >
              Retry
            </Button>
          )}
        </div>
      )}
      {result ? (
        <section className="mt-10 rounded-2xl border border-white/20 p-8">
          <p className="mb-6">
            {selected &&
              `${labelDay(selected.start)}, ${labelTime(selected.start)}–${labelTime(selected.end)} ${localZone}`}
          </p>
          <Button className="bg-white text-black" onPress={download}>
            Download calendar (.ics)
          </Button>
        </section>
      ) : (
        <>
          <section
            className="mt-10 border-t border-white/20 pt-8"
            aria-label="Availability"
          >
            <h2 className="mb-2 text-xl font-semibold">
              01 / Choose your time
            </h2>
            <p className="mb-6 text-sm text-default-500">
              Times shown in your timezone: {localZone}. Only free/busy
              availability is shared.
            </p>
            {loading ? (
              <p role="status">Loading availability…</p>
            ) : !slots.length && !error ? (
              <p>
                No times available in the booking window. Please check back
                later.
              </p>
            ) : (
              <>
                <div
                  className="flex gap-2 overflow-x-auto pb-4"
                  aria-label="Available days"
                >
                  {days.map((d) => (
                    <Button
                      key={d}
                      variant={day === d ? "solid" : "bordered"}
                      className={
                        day === d
                          ? "shrink-0 bg-white text-black"
                          : "shrink-0 border-white/20 text-white"
                      }
                      isDisabled={sending}
                      aria-pressed={day === d}
                      onPress={() => {
                        setDay(d);
                        setSelected(undefined);
                      }}
                    >
                      {labelDay(
                        slots.find((s) => labelDay(s.start) === d)!.start,
                      )}
                    </Button>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {slots
                    .filter((s) => labelDay(s.start) === day)
                    .map((s) => (
                      <Button
                        key={s.start}
                        variant="bordered"
                        isDisabled={sending}
                        aria-pressed={selected?.start === s.start}
                        className={
                          selected?.start === s.start
                            ? "bg-white text-black"
                            : "border-white/20 text-white"
                        }
                        onPress={() => setSelected(s)}
                      >
                        {labelTime(s.start)}
                      </Button>
                    ))}
                </div>
              </>
            )}
          </section>
          {selected && (
            <form
              onSubmit={submit}
              className="mt-10 space-y-5 border-t border-white/20 pt-8"
            >
              <h2 className="text-xl font-semibold">02 / The details</h2>
              <p className="text-default-500">
                {labelDay(selected.start)} · {labelTime(selected.start)}–
                {labelTime(selected.end)} {localZone}
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  isRequired
                  name="name"
                  label="Your name"
                  maxLength={100}
                />
                <Input
                  isRequired
                  name="email"
                  type="email"
                  label="Email for your invitation"
                  maxLength={254}
                />
              </div>
              <Input
                isRequired
                name="summary"
                label="What are we meeting about?"
                maxLength={200}
              />
              <Textarea
                name="description"
                label="Anything I should know?"
                maxLength={2000}
              />
              <Input
                name="location"
                label="Location or meeting link"
                maxLength={300}
              />
              <div className="hidden" aria-hidden="true">
                <input name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <Accordion>
                <AccordionItem
                  key="advanced"
                  title="Advanced calendar details"
                  subtitle="Guests, reminders, and calendar export properties"
                >
                  <div className="space-y-5 pb-5">
                    <Input
                      name="attendees"
                      label="Additional guest emails (comma separated, up to 5)"
                    />
                    <Input name="url" type="url" label="Event URL" />
                    <Input
                      name="categories"
                      label="Categories (comma separated)"
                    />
                    <Textarea name="comment" label="Comment" maxLength={2000} />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input
                        name="priority"
                        type="number"
                        min={0}
                        max={9}
                        defaultValue="0"
                        label="Priority (0 unset, 1 high, 9 low)"
                      />
                      <Select
                        name="classification"
                        label="Calendar export privacy"
                        defaultSelectedKeys={["PRIVATE"]}
                      >
                        <SelectItem key="PRIVATE">Private</SelectItem>
                        <SelectItem key="CONFIDENTIAL">Confidential</SelectItem>
                      </Select>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input
                        name="latitude"
                        type="number"
                        step="any"
                        min={-90}
                        max={90}
                        label="Latitude"
                      />
                      <Input
                        name="longitude"
                        type="number"
                        step="any"
                        min={-180}
                        max={180}
                        label="Longitude"
                      />
                    </div>
                    <Textarea
                      name="attachments"
                      label="Attachment URLs (one per line, up to 3)"
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input
                        name="alarm"
                        type="number"
                        min={0}
                        max={10080}
                        label="Reminder (minutes before)"
                      />
                      <Select
                        name="alarmAction"
                        label="Reminder type"
                        defaultSelectedKeys={["DISPLAY"]}
                      >
                        <SelectItem key="DISPLAY">Display</SelectItem>
                        <SelectItem key="EMAIL">Email</SelectItem>
                      </Select>
                    </div>
                    <Input
                      name="alarmAttendees"
                      label="Email reminder recipients (required for email export)"
                    />
                    <p className="text-sm leading-6 text-default-500">
                      This reserves one timed slot: confirmed and busy. All-day
                      events and recurrence (RRULE, RDATE, EXDATE) require
                      contacting Bobby so every occurrence can be checked.
                      Organizer, UID, DTSTAMP, and SEQUENCE are assigned
                      automatically. Priority, categories, coordinates,
                      attachments, privacy, and custom alarm recipients apply to
                      your downloaded ICS. Google reminders apply to Bobby’s
                      calendar; guest apps control their own reminders. Extra
                      guests receive real invitations.
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
              <Button
                type="submit"
                isLoading={sending}
                className="w-full bg-white text-black sm:w-auto"
              >
                {demo ? "Preview booking" : "Send invitation"}
              </Button>
              <p className="text-xs text-default-500">
                Availability is checked again when you submit. This direct link
                is private; please don’t share it publicly.
              </p>
            </form>
          )}
        </>
      )}
    </main>
  );
}
