// Run after npm run build. Isolated demo only: never sends real invites.
import { spawn } from "node:child_process";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
const port = "3173",
  base = `http://127.0.0.1:${port}`,
  slug = "smoke-" + randomUUID();
const server = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "start",
    "--hostname",
    "127.0.0.1",
    "--port",
    port,
  ],
  {
    env: {
      ...process.env,
      BOOKING_SLUG: slug,
      BOOKING_DEMO_MODE: "true",
      BOOKING_DEPLOYMENT: "preview",
      VERCEL_ENV: "preview",
      GOOGLE_CLIENT_ID: "",
      GOOGLE_CLIENT_SECRET: "",
      GOOGLE_REFRESH_TOKEN: "",
      UPSTASH_REDIS_REST_URL: "",
      UPSTASH_REDIS_REST_TOKEN: "",
    },
    stdio: ["ignore", "pipe", "pipe"],
  },
);
let log = "";
server.stdout.on("data", (x) => (log += x));
server.stderr.on("data", (x) => (log += x));
const pause = (ms) => new Promise((r) => setTimeout(r, ms));
try {
  let ready = false;
  for (let i = 0; i < 100; i++) {
    try {
      await fetch(base);
      ready = true;
      break;
    } catch {
      await pause(100);
    }
  }
  assert.ok(ready, log);
  const q = new URLSearchParams({
    slug,
    from: new Date().toISOString(),
    to: new Date(Date.now() + 21 * 86400000).toISOString(),
  });
  const availability = await fetch(`${base}/api/booking/availability?${q}`);
  assert.equal(availability.status, 200);
  const data = await availability.json();
  assert.equal(data.demo, true);
  assert.ok(data.slots.length);
  assert.deepEqual(
    Object.keys(data).sort(),
    ["busy", "demo", "slotMinutes", "slots", "timeZone"].sort(),
  );
  const page = await fetch(`${base}/book/${slug}`);
  assert.equal(page.status, 200);
  const html = await page.text();
  assert.match(html, /noindex/);
  assert.match(html, /no-referrer/);
  assert.equal((await fetch(`${base}/book/wrong`)).status, 404);
  assert.equal(
    (
      await fetch(
        `${base}/api/booking/availability?${q.toString().replace(slug, "wrong")}`,
      )
    ).status,
    404,
  );
  assert.equal(
    (
      await fetch(
        `${base}/api/booking/availability?slug=${slug}&from=bad&to=bad`,
      )
    ).status,
    400,
  );
  const post = (payload) =>
    fetch(`${base}/api/booking/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  const payload = {
    slug,
    requestId: randomUUID(),
    ...data.slots[0],
    name: "Preview Guest",
    email: "guest@example.com",
    summary: "Cloud smoke test",
  };
  const first = await post(payload);
  assert.equal(first.status, 200);
  const booked = await first.json();
  assert.equal(booked.ok, true);
  assert.equal(booked.demo, true);
  assert.match(booked.ics, /DTSTART:\d{8}T\d{6}Z/);
  assert.ok(
    booked.ics.includes(
      "DTSTART:" + payload.start.replace(/[-:]/g, "").replace(/\.\d{3}/, ""),
    ),
  );
  assert.equal((await post(payload)).status, 200);
  assert.equal(
    (await post({ ...payload, requestId: randomUUID() })).status,
    409,
  );
  assert.equal((await post({ ...payload, allDay: true })).status, 400);
  const concurrent = await Promise.all([
    post({ ...payload, ...data.slots[1], requestId: randomUUID() }),
    post({ ...payload, ...data.slots[1], requestId: randomUUID() }),
  ]);
  assert.deepEqual(concurrent.map((x) => x.status).sort(), [200, 409]);
  const honeypot = await post({ slug, website: "bot" });
  assert.deepEqual(await honeypot.json(), { ok: true });
  await post({ ...payload, requestId: randomUUID() });
  await post({ ...payload, requestId: randomUUID() });
  await post({ ...payload, requestId: randomUUID() });
  assert.equal((await post(payload)).status, 429);
  console.log(
    "Production HTTP smoke passed: demo before credentials, page metadata/404, availability, UTC ICS, idempotent retry, conflict, concurrent claim, invalid input, honeypot and rate limit.",
  );
} finally {
  server.kill("SIGTERM");
}

// Verify server-side deployment guards using credential-free child servers.
for (const [checkPort, demoMode, deployment, vercelEnv, expected] of [
  ["3174", "true", "preview", "production", /Demo is restricted/],
  ["3175", "false", "production", "production", /not configured/],
]) {
  const child = spawn(
    process.execPath,
    [
      "node_modules/next/dist/bin/next",
      "start",
      "--hostname",
      "127.0.0.1",
      "--port",
      checkPort,
    ],
    {
      env: {
        ...process.env,
        BOOKING_SLUG: slug,
        BOOKING_DEMO_MODE: demoMode,
        BOOKING_DEPLOYMENT: deployment,
        VERCEL_ENV: vercelEnv,
        GOOGLE_CLIENT_ID: "",
        GOOGLE_CLIENT_SECRET: "",
        GOOGLE_REFRESH_TOKEN: "",
        UPSTASH_REDIS_REST_URL: "",
        UPSTASH_REDIS_REST_TOKEN: "",
      },
      stdio: "ignore",
    },
  );
  try {
    const url = `http://127.0.0.1:${checkPort}`;
    let ready = false;
    for (let i = 0; i < 100; i++) {
      try {
        await fetch(url);
        ready = true;
        break;
      } catch {
        await pause(100);
      }
    }
    assert.ok(ready, "Guard test server did not start");
    const query = new URLSearchParams({
      slug,
      from: new Date().toISOString(),
      to: new Date(Date.now() + 86400000 * 2).toISOString(),
    });
    const response = await fetch(`${url}/api/booking/availability?${query}`);
    assert.equal(response.status, 503);
    assert.match((await response.json()).error, expected);
  } finally {
    child.kill("SIGTERM");
  }
}
console.log(
  "Production demo prohibition and graceful unconfigured-calendar checks passed.",
);
