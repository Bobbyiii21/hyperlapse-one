import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react"
import { Providers } from "./providers";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HyperLapse",
  description: "Experience the HyperLapse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
          <Navbar />
        </Providers>
      </body>
    </html>
  );
}
