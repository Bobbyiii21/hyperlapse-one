import "server-only";
import { Redis } from "@upstash/redis";
import { createHash } from "node:crypto";
import { BookingError } from "./config";
import { isIP } from "node:net";
export const digest = (s: string) =>
  createHash("sha256").update(s).digest("hex");
const memory = new Map<string, { value: string; expires: number }>();
export function redis() {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  )
    throw new BookingError(503, "Booking coordination is not configured yet.");
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}
export async function rateLimit(request: Request, demo: boolean) {
  // Default shared bucket is safe. Only opt in when the deployment strips and
  // overwrites this header at its trusted edge (documented in BOOKING_SETUP).
  let ip = "shared";
  if (
    process.env.BOOKING_TRUST_VERCEL_IP === "true" &&
    process.env.VERCEL === "1"
  ) {
    const value = request.headers.get("x-vercel-forwarded-for") ?? "";
    if (isIP(value)) ip = value;
  }
  const key = `booking:rate:${digest(ip)}:${Math.floor(Date.now() / 600000)}`;
  if (demo) {
    const old = memory.get(key);
    const n = old && old.expires > Date.now() ? Number(old.value) + 1 : 1;
    memory.set(key, { value: String(n), expires: Date.now() + 600000 });
    if (n > 10)
      throw new BookingError(
        429,
        "Too many attempts. Try again in ten minutes.",
      );
    return;
  }
  const r = redis();
  const n = await r.eval<[], number>(
    "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return n",
    [key],
    [],
  );
  if (n > 10)
    throw new BookingError(429, "Too many attempts. Try again in ten minutes.");
}
export async function reserve(
  key: string,
  owner: string,
  expires: number,
  demo: boolean,
) {
  if (demo) {
    // No await between check and set: atomic within this isolated preview process.
    const old = memory.get(key);
    if (old && old.expires > Date.now()) {
      if (old.value !== owner)
        throw new BookingError(
          409,
          "This slot has already been reserved. Choose another time.",
        );
      return;
    }
    memory.set(key, { value: owner, expires: expires * 1000 });
    return;
  }
  const r = redis();
  const acquired = await r.set(key, owner, { nx: true, exat: expires });
  if (!acquired && (await r.get<string>(key)) !== owner)
    throw new BookingError(
      409,
      "This slot has already been reserved. Choose another time.",
    );
}
