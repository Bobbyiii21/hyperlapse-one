# Booking verification

Cloud checkout: fresh clone of `Bobbyiii21/hyperlapse-one`, branch created from main `fa67def9ff02656268063f03537a17470469e565`. A later fetch confirmed main had not changed. No unpushed local work was imported.

- Node 24.19.0 / npm 11.9.0.
- Clean `npm ci`: passed; installed 729 packages from the committed lockfile.
- Next.js 16.4.2, React 19, HeroUI 2.7.11 with theme 2.4.17, Tailwind 3.4.19. The HeroUI versions are pinned because newer v2 themes require Tailwind 4.
- `npm run typecheck` (`tsc --noEmit`): passed.
- `npm run build` (Next 16 Turbopack, system TLS certificates enabled): passed; booking page and API routes are dynamic.
- `npm test`: 7 tests passed (DST transitions in both directions, midnight h23, weekdays/weekends, lead/end/window bounds, busy overlap, UTC exports, advanced properties, UTF-8 folding, text/raw-property injection, email alarm attendees, schema restrictions, standalone all-day/recurrence serializer semantics).
- `npm run test:booking:http`: passed against the production build in isolated demo child servers. Verified successful booking/UTC ICS, missing credentials do not break demo, page metadata, invalid slug 404, invalid query/input, idempotent retry, distinct-owner conflict, two simultaneous same-slot submissions yielding 200/409, honeypot fake success, 429 rate limiting, production demo prohibition, and graceful live-calendar-not-configured 503.
- `npm run lint`: zero errors; 56 existing unused-import/image warnings remain in portfolio/course content. Small pre-existing const/entity errors were corrected to make the new ESLint command usable; the existing navbar anchor behavior is preserved via a scoped rule exception.
- `git diff --check`: passed.
- Full `npm audit`: 7 high findings, zero critical/moderate/low. `npm audit --omit=dev`: 5 high findings. All trace to unresolved braces 3.0.3 in the CSS/glob tooling chain; details and compatibility decisions are in BOOKING_SETUP.md. The patched selector parser is overridden to 7.1.6 and the full CSS build passed.

Browser visual verification was attempted using the cloud browser, but it could not reach the build server in the command sandbox's isolated network namespace (`ERR_CONNECTION_REFUSED`). HTTP tests run the server/client together in the same sandbox and passed. Do not treat this as a completed visual inspection.

No real calendar invitations were sent. Live Google OAuth and durable Redis require deployment configuration; the live Google/Redis integration has not been exercised against Bobby's accounts. Redis reservation logic is designed for cross-instance atomicity; the concurrent HTTP test exercises the preview in-process adapter. Google Calendar cannot atomically exclude simultaneous events created by unrelated external writers; see the documented limits.
