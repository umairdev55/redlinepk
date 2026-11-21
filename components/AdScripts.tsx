"use client";

import Script from "next/script";

/**
 * Site-wide Adsterra scripts (Popunder + SocialBar), loaded once in the
 * root layout. Renders nothing visible.
 */
export default function AdScripts() {
  return (
    <>
      <Script
        src="https://abscloud.org/1/e4c43f726ab5fd01514eddf7f3676d05"
        strategy="afterInteractive"
        data-cfasync="false"
      />
      <Script
        src="https://bauval.org/14/73d33e4740ae2c8c9241c0812bc806ff"
        strategy="afterInteractive"
        data-cfasync="false"
      />
    </>
  );
}
