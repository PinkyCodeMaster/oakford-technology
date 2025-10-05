import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Suspense } from "react";
import { DivisionProvider } from "@/lib/division-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oakford.com"),
  title: {
    default: "Oakford EcoTech | Sustainable Technology Solutions",
    template: "%s | Oakford EcoTech",
  },
  description:
    "EcoTech division of Oakford Group: sustainable infrastructure, green cloud optimization, lifecycle assessments, and carbon reporting.",
  keywords: [
    "EcoTech",
    "Oakford",
    "sustainable technology",
    "green cloud",
    "carbon reporting",
    "lifecycle assessment",
  ],
  authors: [{ name: "Oakford Group" }],
  creator: "Oakford Group",
  publisher: "Oakford Group",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Oakford EcoTech | Sustainable Technology Solutions",
    description:
      "EcoTech division of Oakford Group delivering measurable environmental impact through technology.",
    siteName: "Oakford EcoTech",
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "Oakford EcoTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oakford EcoTech | Sustainable Technology Solutions",
    description:
      "EcoTech division of Oakford Group delivering measurable environmental impact through technology.",
    images: ["/og/og-default.png"],
    creator: "@oakford",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <DivisionProvider initialDivision="ecotech">{children}</DivisionProvider>
        </Suspense>
      </body>
    </html>
  );
}
