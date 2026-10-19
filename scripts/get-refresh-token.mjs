import { google } from "googleapis";
import { createServer } from "node:http";
import { randomBytes, timingSafeEqual } from "node:crypto";
const redirect = "http://127.0.0.1:53682/oauth2callback";
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET)
  throw new Error("Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET");
const oauth = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  redirect,
);
const state = randomBytes(32).toString("hex");
const server = createServer(async (req, res) => {
  const url = new URL(req.url, redirect);
  const received = url.searchParams.get("state") ?? "";
  if (
    url.pathname !== "/oauth2callback" ||
    received.length !== state.length ||
    !timingSafeEqual(Buffer.from(received), Buffer.from(state))
  ) {
    res.writeHead(400).end("Invalid OAuth state");
    return;
  }
  try {
    const code = url.searchParams.get("code");
    if (!code) throw new Error("Authorization denied");
    const { tokens } = await oauth.getToken(code);
    if (!tokens.refresh_token)
      throw new Error(
        "No refresh token. Revoke prior app access and retry with consent.",
      );
    // Deliberate output for the operator only. Never commit or paste this token into an issue.
    console.log(
      "Store securely as GOOGLE_REFRESH_TOKEN:\n" + tokens.refresh_token,
    );
    res.end("Authorization complete. Return to your terminal.");
  } catch {
    res.writeHead(400).end("Authorization failed. Retry in the terminal.");
  } finally {
    server.close();
  }
});
server.listen(53682, "127.0.0.1", () =>
  console.log(
    "Open this URL in your own browser (run this one-time script on your trusted machine):\n" +
      oauth.generateAuthUrl({
        access_type: "offline",
        prompt: "consent",
        state,
        scope: [
          "https://www.googleapis.com/auth/calendar.events",
          "https://www.googleapis.com/auth/calendar.freebusy",
        ],
      }),
  ),
);
server.setTimeout(300000);
setTimeout(() => {
  server.close();
}, 300000).unref();
