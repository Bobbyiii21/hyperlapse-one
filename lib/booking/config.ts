import "server-only";
export class BookingError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}
export function checkSlug(slug: unknown) {
  if (!process.env.BOOKING_SLUG || slug !== process.env.BOOKING_SLUG)
    throw new BookingError(404, "Not found");
}
export function demoEnabled() {
  if (process.env.BOOKING_DEMO_MODE !== "true") return false;
  // NODE_ENV=production is also used by next build/start in isolated previews.
  if (
    process.env.BOOKING_DEPLOYMENT !== "preview" ||
    process.env.VERCEL_ENV === "production"
  )
    throw new BookingError(
      503,
      "Demo is restricted to explicitly isolated preview deployments",
    );
  return true;
}
export function options() {
  function num(key: string, fallback: number, min: number, max: number) {
    const n = Number(process.env[key] ?? fallback);
    if (!Number.isInteger(n) || n < min || n > max)
      throw new BookingError(503, "Invalid booking configuration");
    return n;
  }
  const o = {
    startHour: num("BOOKING_START_HOUR", 10, 0, 23),
    endHour: num("BOOKING_END_HOUR", 18, 1, 24),
    minutes: num("BOOKING_SLOT_MINUTES", 30, 15, 120),
    leadHours: num("BOOKING_LEAD_HOURS", 24, 0, 720),
    horizonDays: num("BOOKING_HORIZON_DAYS", 21, 1, 60),
  };
  if (o.endHour <= o.startHour)
    throw new BookingError(503, "Invalid booking hours");
  return o;
}
export function responseError(e: unknown) {
  if (e instanceof BookingError)
    return Response.json(
      { error: e.message },
      { status: e.status, headers: { "Cache-Control": "no-store" } },
    );
  console.error("Booking operation failed");
  return Response.json(
    { error: "Booking is temporarily unavailable. Please try again later." },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}
