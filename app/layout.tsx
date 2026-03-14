import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import VantaWrapper from "@/components/VantaWrapper";

export const metadata: Metadata = {
  title: "Noah Kang | OS v1.0",
  description: "Portfolio of Noah Kang, Math & CS Student at UIUC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js" strategy="beforeInteractive" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <VantaWrapper />
        {children}
      </body>
    </html>
  );
}