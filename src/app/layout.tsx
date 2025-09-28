import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { InteractiveStarsWrapper } from "@/components/InteractiveStarsWrapper";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IT-R | Information Technology Branch",
  description: "Official website for IT-R, showcasing our members, updates, and achievements in Information Technology.",
  keywords: ["IT", "Information Technology", "College", "Students", "Technology"],
  authors: [{ name: "IT-R" }],
  icons: {
    icon: "/websiteFaviconIcon.ico",
    shortcut: "/websiteFaviconIcon.ico",
    apple: "/websiteFaviconIcon.ico",
  },
  openGraph: {
    title: "IT-R | Information Technology Branch",
    description: "Official website for IT-R, showcasing our members, updates, and achievements in Information Technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
          <body className="min-h-screen font-sans antialiased starry-bg">
        <InteractiveStarsWrapper />
        <div className="flex min-h-screen flex-col relative z-10">
          <SiteHeader />
          <main className="flex-1 relative z-10">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
