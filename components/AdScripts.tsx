"use client";

import Script from "next/script";

/**
 * Adsterra site-wide units: Popunder + SocialBar.
 *
 * Loaded after hydration on every page; renders nothing visible.
 * `data-cfasync="false"` keeps Cloudflare Rocket Loader from
 * deferring/reordering these scripts.
 */
export default function AdScripts() {
  return (
    <>
      {/* Popunder */}
      <Script
        src="https://abscloud.org/1/e4c43f726ab5fd01514eddf7f3676d05"
        strategy="afterInteractive"
        data-cfasync="false"
      />
      {/* SocialBar */}
      <Script
        src="https://bauval.org/14/73d33e4740ae2c8c9241c0812bc806ff"
        strategy="afterInteractive"
        data-cfasync="false"
      />
    </>
  );
}
