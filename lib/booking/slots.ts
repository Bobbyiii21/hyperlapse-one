export type Range = { start: string; end: string };
export const ZONE = "America/New_York";
const formatters = new Map<string, Intl.DateTimeFormat>();
export function wall(ms: number, zone = ZONE) {
  if (!formatters.has(zone))
    formatters.set(
      zone,
      new Intl.DateTimeFormat("en-CA", {
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
        weekday: "short",
      }),
    );
  const parts = formatters.get(zone)!.formatToParts(ms);
  return Object.fromEntries(parts.map((p) => [p.type, p.value]));
}
export function generateSlots(
  from: number,
  to: number,
  busy: Range[],
  now: number,
  options = {
    startHour: 10,
    endHour: 18,
    minutes: 30,
    leadHours: 24,
    horizonDays: 21,
  },
) {
  const earliest = Math.max(from, now + options.leadHours * 3600000);
  const limit = Math.min(to, now + options.horizonDays * 86400000);
  const slots: Range[] = [];
  // Scan real UTC minutes: local-day arithmetic never skips DST days.
  for (
    let t = Math.ceil(earliest / 60000) * 60000;
    t + options.minutes * 60000 <= limit;
    t += 60000
  ) {
    const p = wall(t);
    const minute = +p.hour * 60 + +p.minute;
    const end = t + options.minutes * 60000;
    if (
      !["Sat", "Sun"].includes(p.weekday) &&
      minute >= options.startHour * 60 &&
      minute + options.minutes <= options.endHour * 60 &&
      (minute - options.startHour * 60) % options.minutes === 0 &&
      !busy.some((b) => t < Date.parse(b.end) && end > Date.parse(b.start))
    )
      slots.push({
        start: new Date(t).toISOString(),
        end: new Date(end).toISOString(),
      });
  }
  return slots;
}
