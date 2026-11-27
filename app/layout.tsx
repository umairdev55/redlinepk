import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import AdScripts from "@/components/AdScripts";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsletterBand from "@/components/NewsletterBand";
import PushNotifications from "@/components/PushNotifications";
import ResourceHints from "@/components/ResourceHints";
import { getAllPosts, getSearchIndex, getTags } from "@/data/posts";
import { SITE_URL } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Redline — News, Stories & Sharp Analysis",
    template: "%s | Redline",
  },
  description:
    "Redline is an independent news and stories magazine covering business, sport, technology, science and the people behind the headlines — reported clearly, published daily.",
  keywords: [
    "Redline",
    "news",
    "business news",
    "sports news",
    "technology",
    "science",
    "stories",
    "digital products",
  ],
  authors: [{ name: "Redline" }],
  creator: "Redline",
  publisher: "Redline",
  openGraph: {
    type: "website",
    siteName: "Redline",
    title: "Redline — News, Stories & Sharp Analysis",
    description:
      "Business, sport, technology, science and the people behind the headlines — reported clearly, published daily.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redline — News, Stories & Sharp Analysis",
    description:
      "Business, sport, technology, science and the people behind the headlines — reported clearly, published daily.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  // Google Search Console verification tag — rendered only when
  // NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION is set (see .env.example).
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Redline",
  url: SITE_URL,
  description:
    "Independent news and stories magazine covering business, sport, technology, science and the people behind the headlines.",
  publisher: {
    "@type": "Organization",
    name: "Redline",
    url: SITE_URL,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const popularTags = getTags()
    .slice(0, 7)
    .map((tag) => ({ name: tag.name, href: `/category/${tag.slug}` }));
  const headlines = getAllPosts()
    .slice(0, 5)
    .map((post) => ({ slug: post.slug, title: post.title, category: post.category }));

  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-ink">
        <ResourceHints />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header
          tags={popularTags}
          searchIndex={getSearchIndex()}
          headlines={headlines}
        />
        <main className="flex-1">{children}</main>
        <NewsletterBand />
        <Footer />
        <AdScripts />
        <Analytics />
        <PushNotifications />
      </body>
    </html>
  );
}
