"use client";

import Script from "next/script";

/**
 * Google Analytics 4.
 *
 * Enabled only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set (Vercel →
 * Project Settings → Environment Variables, then redeploy). Without it the
 * component renders nothing and loads no scripts, so the site works
 * exactly as before. Get the ID from analytics.google.com → Admin →
 * Data Streams → your web stream (format: G-XXXXXXXXXX).
 */
export default function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
