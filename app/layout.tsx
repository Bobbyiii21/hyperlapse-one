import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react"
import { Providers } from "./providers";
import Navbar from "./navbar";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/react"

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
     <html lang="en" className='dark'>
      <body className="animate-fade-in">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Analytics/>
      </body>
    </html>
  );
}
