import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Booking from "./booking";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book time with Bobby",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!process.env.BOOKING_SLUG || slug !== process.env.BOOKING_SLUG)
    notFound();
  return <Booking slug={slug} />;
}
