import "server-only";
import { google } from "googleapis";
import { BookingError } from "./config";
import type { Range } from "./slots";
export function calendar() {
  const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN,
    GOOGLE_CALENDAR_ID,
  } = process.env;
  if (
    !GOOGLE_CLIENT_ID ||
    !GOOGLE_CLIENT_SECRET ||
    !GOOGLE_REFRESH_TOKEN ||
    !GOOGLE_CALENDAR_ID
  )
    throw new BookingError(503, "Calendar booking is not configured yet.");
  const auth = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
  auth.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });
  return {
    api: google.calendar({ version: "v3", auth }),
    id: GOOGLE_CALENDAR_ID,
  };
}
export async function busyRanges(from: string, to: string): Promise<Range[]> {
  const { api, id } = calendar();
  const result = await api.freebusy.query({
    requestBody: { timeMin: from, timeMax: to, items: [{ id }] },
  });
  const c = result.data.calendars?.[id];
  if (!c || c.errors?.length)
    throw new BookingError(
      503,
      "Calendar availability is temporarily unavailable.",
    );
  return (c.busy ?? []).map((b) => {
    if (!b.start || !b.end) throw new Error("Invalid calendar response");
    return { start: b.start, end: b.end };
  });
}
