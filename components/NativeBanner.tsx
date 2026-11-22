"use client";

import Script from "next/script";

/**
 * Adsterra Native Banner (4:1 widget).
 *
 * The container id must appear exactly once per page — render this
 * component at most once in any single page.
 */
export default function NativeBanner({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
        Sponsored
      </p>
      <div id="container-cc02a1c28ef63b45e56309e62a9d785e" />
      <Script
        src="https://bauval.org/21/cc02a1c28ef63b45e56309e62a9d785e"
        strategy="afterInteractive"
        data-cfasync="false"
      />
    </div>
  );
}
