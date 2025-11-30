import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Google Ads Local Lead Generation Service | Qualified Leads That Book Jobs",
    template: "%s | Google Ads Lead Gen",
  },
  description: "Stop wasting ad spend on clicks that don't convert. Get qualified local leads that actually book jobs through industry-specific, conversion-optimized Google Ads campaigns.",
  keywords: ["Google Ads", "local lead generation", "PPC management", "local service businesses", "lead generation"],
  authors: [{ name: "Google Ads Lead Gen" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Google Ads Lead Gen",
    title: "Google Ads Local Lead Generation Service | Qualified Leads That Book Jobs",
    description: "Stop wasting ad spend on clicks that don't convert. Get qualified local leads that actually book jobs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Local Lead Generation Service",
    description: "Get qualified local leads that actually book jobs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
