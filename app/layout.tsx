import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import Navbar from "./navbar";
import Footer from "./footer";
import Telemetry from "./telemetry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hyperlapse",
  description: "The official website of The Hyperlapse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} animate-fade-in`}>
        <Providers>
          <Navbar />
          {children}
          <Telemetry />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
