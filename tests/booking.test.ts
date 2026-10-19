import { test } from "node:test";
import assert from "node:assert/strict";
import { generateSlots, wall } from "../lib/booking/slots";
import { serializeICS, fold, CalendarEvent } from "../lib/booking/ics";
import { bookingSchema } from "../lib/booking/validation";
const ms = Date.parse;
const opts = {
  startHour: 10,
  endHour: 18,
  minutes: 30,
  leadHours: 0,
  horizonDays: 60,
};
test("weekday morning is afternoon UTC and respects partial window", () => {
  const slots = generateSlots(
    ms("2026-10-20T14:00Z"),
    ms("2026-10-20T15:00Z"),
    [],
    ms("2026-10-19T00:00Z"),
    opts,
  );
  assert.equal(slots.length, 2);
  assert.equal(slots[0].start, "2026-10-20T14:00:00.000Z");
  assert.equal(wall(ms(slots[0].start)).hour, "10");
  assert.equal(
    generateSlots(
      ms("2026-10-20T14:01Z"),
      ms("2026-10-20T15:00Z"),
      [],
      ms("2026-10-19T00:00Z"),
      opts,
    ).length,
    1,
  );
});
test("weekends, busy overlaps, lead time and end bounds", () => {
  assert.equal(
    generateSlots(
      ms("2026-10-24T00:00Z"),
      ms("2026-10-26T00:00Z"),
      [],
      ms("2026-10-23T00:00Z"),
      opts,
    ).length,
    0,
  );
  const start = ms("2026-10-20T14:00Z"),
    end = ms("2026-10-20T15:00Z");
  assert.equal(
    generateSlots(
      start,
      end,
      [{ start: "2026-10-20T14:29Z", end: "2026-10-20T14:31Z" }],
      start,
      opts,
    ).length,
    0,
  );
  assert.equal(
    generateSlots(start, end, [], start, { ...opts, leadHours: 24 }).length,
    0,
  );
  assert.equal(generateSlots(start, end - 1, [], start, opts).length, 1);
});
test("spring and fall DST maintain local hours without skipping days", () => {
  for (const [before, after, utcHour] of [
    ["2026-03-06", "2026-03-09", "14"],
    ["2026-10-30", "2026-11-02", "15"],
  ]) {
    const slots = generateSlots(
      ms(before + "T00:00Z"),
      ms(after + "T23:59Z"),
      [],
      ms(before + "T00:00Z"),
      opts,
    );
    assert.equal(slots.length, 32);
    assert.equal(slots[16].start, after + "T" + utcHour + ":00:00.000Z");
  }
});
const event: CalendarEvent = {
  uid: "test@example.com",
  summary: "Meeting",
  start: "2026-10-20T14:00Z",
  end: "2026-10-20T14:30Z",
  organizer: "owner@example.com",
  attendees: ["guest@example.com"],
};
test("ICS UTC, escaping, UTF8 folding and email attendees", () => {
  const ics = serializeICS({
    ...event,
    summary: "é😀".repeat(100) + "\r\nATTENDEE:evil",
    description: "a,b;c\\d\nnext",
    alarm: {
      minutes: 15,
      action: "EMAIL",
      attendees: ["one@example.com", "two@example.com"],
    },
  });
  assert.match(ics, /DTSTART:20261020T140000Z/);
  assert.ok(!ics.includes("TZID"));
  for (const line of ics.split("\r\n"))
    assert.ok(Buffer.byteLength(line) <= 75);
  const unfolded = ics.replace(/\r\n /g, "");
  assert.match(unfolded, /\\nATTENDEE:evil/);
  assert.ok(!unfolded.includes("\r\nATTENDEE:evil"));
  assert.match(
    unfolded,
    /ATTENDEE:mailto:one@example.com\r\nATTENDEE:mailto:two@example.com/,
  );
  assert.throws(() => serializeICS({ ...event, url: "https://test\r\nX:bad" }));
  assert.throws(() =>
    serializeICS({ ...event, attendees: ["bad\n@example.com"] }),
  );
  assert.equal(fold("é".repeat(50)).replace(/\r\n /g, ""), "é".repeat(50));
});
test("serializer supports all-day exclusive end and recurrence export", () => {
  const ics = serializeICS({
    ...event,
    allDay: true,
    start: "2026-10-20",
    end: "2026-10-21",
    rrule: "FREQ=DAILY;COUNT=2",
    rdate: ["2026-10-23"],
    exdate: ["2026-10-21"],
  });
  assert.match(ics, /DTEND;VALUE=DATE:20261021/);
  assert.match(ics, /RDATE;VALUE=DATE:20261023/);
  assert.ok(!ics.includes("VTIMEZONE"));
});
test("live validation blocks unchecked recurrence, arbitrary status, injection and URI protocols", () => {
  const valid = {
    slug: "secret",
    requestId: "33fe8267-7c76-4f3d-969f-4d7cc3c317cf",
    start: "2026-10-20T14:00:00Z",
    end: "2026-10-20T14:30:00Z",
    name: "Guest",
    email: "guest@example.com",
    summary: "Hello",
  };
  assert.ok(bookingSchema.safeParse(valid).success);
  for (const extra of [
    { allDay: true },
    { rrule: "FREQ=DAILY" },
    { status: "CANCELLED" },
    { transparency: "TRANSPARENT" },
    { url: "javascript:alert(1)" },
    { email: "x@example.com\r\nX:evil" },
    { organizer: "evil@example.com" },
  ])
    assert.ok(!bookingSchema.safeParse({ ...valid, ...extra }).success);
});

test("midnight wall clock is hour 00 and advanced export fields round trip", () => {
  assert.equal(wall(ms("2026-10-20T04:00:00Z")).hour, "00");
  const ics = serializeICS({
    ...event,
    description: "Notes",
    location: "Atlanta",
    url: "https://example.com",
    comment: "a,b;c",
    priority: 1,
    categories: ["One", "Two, Three"],
    geo: [33.7, -84.4],
    attachments: ["https://example.com/file.pdf"],
    status: "CONFIRMED",
    classification: "PRIVATE",
    transparency: "OPAQUE",
    rrule: "FREQ=WEEKLY;COUNT=2",
    rdate: ["2026-10-27T14:00Z"],
    exdate: ["2026-11-03T15:00Z"],
    alarm: { action: "DISPLAY", minutes: 30 },
  }).replace(/\r\n /g, "");
  for (const property of [
    "LOCATION:Atlanta",
    "URL:https://example.com",
    "PRIORITY:1",
    "CATEGORIES:One,Two\\, Three",
    "GEO:33.7;-84.4",
    "ATTACH;VALUE=URI:https://example.com/file.pdf",
    "STATUS:CONFIRMED",
    "CLASS:PRIVATE",
    "TRANSP:OPAQUE",
    "RDATE:20261027T140000Z",
    "EXDATE:20261103T150000Z",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
  ])
    assert.ok(ics.includes(property), property);
});
