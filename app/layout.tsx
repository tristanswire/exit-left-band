import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// TODO: Add og-image.jpg, favicon.ico, and apple-touch-icon.png
// to /public before deploying

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://exitleftband.com"
  ),
  title: {
    default: "Exit Left | DFW Cover Band",
    template: "%s | Exit Left",
  },
  description:
    "Exit Left is a high-energy cover band based in Dallas-Fort Worth, TX. " +
    "Available for private parties, corporate events, weddings, and " +
    "festivals across the DFW metroplex and beyond.",
  keywords: [
    "Exit Left",
    "DFW cover band",
    "Dallas cover band",
    "Fort Worth cover band",
    "corporate event band Dallas",
    "wedding band DFW",
    "private party band Texas",
    "live band for hire DFW",
    "rock cover band Dallas",
  ],
  authors: [{ name: "Exit Left Band" }],
  creator: "Exit Left Band",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Exit Left Band",
    title: "Exit Left | DFW Cover Band",
    description:
      "High-energy cover band based in DFW, TX. Available for private " +
      "parties, corporate events, weddings, and festivals.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Exit Left Band",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exit Left | DFW Cover Band",
    description:
      "High-energy cover band based in DFW, TX. Available for private " +
      "parties, corporate events, weddings, and festivals.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Exit Left",
  description:
    "High-energy cover band based in Dallas-Fort Worth, TX available " +
    "for private parties, corporate events, weddings, and festivals.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://exitleftband.com",
  genre: "Rock",
  foundingLocation: {
    "@type": "Place",
    name: "Dallas-Fort Worth, TX",
  },
  sameAs: [
    "https://www.facebook.com/exitleftbanddallas/",
    "https://www.youtube.com/@ExitLeftBandDallas",
    "https://www.instagram.com/exitleftbanddallas/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
