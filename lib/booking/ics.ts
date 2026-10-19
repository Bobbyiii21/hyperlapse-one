export type CalendarEvent = {
  uid: string;
  start: string;
  end: string;
  summary: string;
  description?: string;
  location?: string;
  url?: string;
  organizer: string;
  attendees: string[];
  allDay?: boolean;
  rrule?: string;
  rdate?: string[];
  exdate?: string[];
  status?: "CONFIRMED" | "TENTATIVE" | "CANCELLED";
  classification?: "PUBLIC" | "PRIVATE" | "CONFIDENTIAL";
  transparency?: "OPAQUE" | "TRANSPARENT";
  priority?: number;
  categories?: string[];
  geo?: [number, number];
  attachments?: string[];
  comment?: string;
  alarm?: {
    minutes: number;
    action: "DISPLAY" | "EMAIL";
    attendees?: string[];
  };
  sequence?: number;
};
const text = (s: string) =>
  s
    .replace(/\\/g, "\\\\")
    .replace(/\r\n|\r|\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
function raw(s: string) {
  if (/[\r\n\u0000-\u001f\u007f]/.test(s))
    throw new Error("Invalid calendar property");
  return s;
}
function mail(s: string) {
  if (
    !/^[a-zA-Z0-9.!#$%&'*+\-/=?^_`{|}~]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)
  )
    throw new Error("Invalid calendar email");
  return `mailto:${s}`;
}
export function fold(line: string) {
  const rows: string[] = [];
  let row = "";
  let bytes = 0;
  for (const char of line) {
    const n = new TextEncoder().encode(char).length;
    if (bytes + n > 75) {
      rows.push(row);
      row = " ";
      bytes = 1;
    }
    row += char;
    bytes += n;
  }
  rows.push(row);
  return rows.join("\r\n");
}
function date(s: string) {
  return new Date(s)
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
}
function day(s: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) throw new Error("Invalid calendar date");
  return s.replaceAll("-", "");
}
export function serializeICS(e: CalendarEvent, now = new Date()) {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Hyperlapse//Private Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];
  lines.push(
    "BEGIN:VEVENT",
    `UID:${raw(e.uid)}`,
    `DTSTAMP:${now
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "")}`,
    `SEQUENCE:${e.sequence ?? 0}`,
    `SUMMARY:${text(e.summary)}`,
  );
  const param = e.allDay ? ";VALUE=DATE" : "";
  const format = e.allDay ? day : date;
  lines.push(
    `DTSTART${param}:${format(e.start)}`,
    `DTEND${param}:${format(e.end)}`,
    `ORGANIZER:${mail(e.organizer)}`,
    ...e.attendees.map((a) => `ATTENDEE;RSVP=TRUE:${mail(a)}`),
  );
  for (const [key, value] of Object.entries({
    DESCRIPTION: e.description,
    LOCATION: e.location,
    COMMENT: e.comment,
  }))
    if (value) lines.push(`${key}:${text(value)}`);
  for (const [key, value] of Object.entries({
    URL: e.url,
    STATUS: e.status,
    CLASS: e.classification,
    TRANSP: e.transparency,
    RRULE: e.rrule,
  }))
    if (value) lines.push(`${key}:${raw(value)}`);
  if (e.priority !== undefined) lines.push(`PRIORITY:${e.priority}`);
  if (e.categories?.length)
    lines.push(`CATEGORIES:${e.categories.map(text).join(",")}`);
  if (e.geo) lines.push(`GEO:${e.geo.join(";")}`);
  for (const a of e.attachments ?? []) lines.push(`ATTACH;VALUE=URI:${raw(a)}`);
  for (const [key, values] of [
    ["RDATE", e.rdate],
    ["EXDATE", e.exdate],
  ] as const)
    if (values?.length)
      lines.push(`${key}${param}:${values.map(format).join(",")}`);
  if (e.alarm) {
    lines.push(
      "BEGIN:VALARM",
      `TRIGGER:-PT${e.alarm.minutes}M`,
      `ACTION:${e.alarm.action}`,
      `DESCRIPTION:${text(e.summary)}`,
    );
    if (e.alarm.action === "EMAIL")
      lines.push(
        `SUMMARY:${text(e.summary)}`,
        ...(e.alarm.attendees ?? e.attendees).map((a) => `ATTENDEE:${mail(a)}`),
      );
    lines.push("END:VALARM");
  }
  lines.push("END:VEVENT", "END:VCALENDAR");
  return lines.map(fold).join("\r\n") + "\r\n";
}
