"use client";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function Telemetry() {
  const pathname = usePathname();
  if (pathname.startsWith("/book/")) return null;
  // Existing SDKs may survive client navigation. Recheck the current URL when
  // each event is dispatched so the bearer path never enters telemetry.
  return (
    <>
      <Analytics
        beforeSend={(event) =>
          window.location.pathname.startsWith("/book/") ? null : event
        }
      />
      <SpeedInsights
        beforeSend={(event) =>
          window.location.pathname.startsWith("/book/") ? null : event
        }
      />
    </>
  );
}
