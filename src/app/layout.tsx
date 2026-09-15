import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { nexora, siteUrl } from "@/data/nexora";
import { Navbar } from "@/components/nexora/Navbar";
import { Footer } from "@/components/nexora/Footer";
import { ScrollToTop } from "@/components/nexora/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const SITE_URL = siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nexora (NEXORA) | Ethereum ERC-20 Digital Asset",
    template: "%s | Nexora (NEXORA)",
  },
  description: nexora.description,
  applicationName: "Nexora",
  keywords: [
    "Nexora",
    "NEXORA",
    "Ethereum",
    "ERC-20",
    "Uniswap",
    "digital asset",
    "decentralized",
    "Web3",
    "blockchain",
  ],
  authors: [{ name: "Nexora" }],
  creator: "Nexora",
  publisher: "Nexora",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/brand/nexora-logo.svg", type: "image/svg+xml" },
      { url: "/brand/nexora-logo-icon.png", type: "image/png", sizes: "1024x1024" },
    ],
    apple: [{ url: "/brand/nexora-logo-icon.png", sizes: "1024x1024" }],
    shortcut: ["/brand/nexora-logo.svg"],
  },
  openGraph: {
    title: "Nexora (NEXORA) | Ethereum ERC-20 Digital Asset",
    description: nexora.description,
    url: SITE_URL,
    siteName: "Nexora",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og/og-image.png",
        width: 1344,
        height: 768,
        alt: "Nexora — Ethereum ERC-20 Digital Asset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora (NEXORA) | Ethereum ERC-20 Digital Asset",
    description: nexora.description,
    images: ["/og/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#050A14",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nexora",
  alternateName: "NEXORA",
  url: SITE_URL,
  description: nexora.description,
  inLanguage: "en-US",
  about: {
    "@type": "Thing",
    name: "Nexora (NEXORA) — Ethereum ERC-20 digital asset",
    description:
      "An Ethereum ERC-20 digital asset with a publicly verifiable smart contract and a live NEXORA/WETH market on Uniswap V2.",
  },
  potentialAction: {
    "@type": "ReadAction",
    target: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {/* Skip link for keyboard / screen-reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-near-black"
        >
          Skip to content
        </a>
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
