import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { getSiteUrl } from "@/lib/env";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "The Group® — Beyond a Single Identity",
    template: "%s — The Group®",
  },
  description:
    "The Group® is a collective of distinctive brands, connected by a shared vision of style, individuality, and exceptional experiences.",
  keywords: [
    "The Group",
    "moustache",
    "moustache women",
    "Delfino",
    "ipo",
    "luxury fashion",
    "digital membership",
  ],
  authors: [{ name: "The Group®" }],
  openGraph: {
    title: "The Group® — Beyond a Single Identity",
    description:
      "A collective of distinctive brands, connected by a shared vision of style, individuality, and exceptional experiences.",
    type: "website",
    locale: "en_GB",
    siteName: "The Group®",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Group® — Beyond a Single Identity",
    description:
      "A collective of distinctive brands, connected by style, individuality, and exceptional experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Group®",
  description:
    "A collective of distinctive brands, connected by a shared vision of style, individuality, and exceptional experiences.",
  brand: [
    { "@type": "Brand", name: "moustache" },
    { "@type": "Brand", name: "moustache women" },
    { "@type": "Brand", name: "Delfino" },
    { "@type": "Brand", name: "ipo" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} h-full bg-ivory antialiased`}
    >
      <body className="min-h-full bg-ivory font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
