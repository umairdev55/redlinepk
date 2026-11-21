"use client";

import Script from "next/script";

/**
 * Adsterra ad integration for Redline.
 *
 * All six iframe banners share Adsterra's global `atOptions` variable, so
 * each unit is rendered inside its own isolated <iframe srcDoc> document —
 * the atOptions config and the invoke script live inside that document and
 * can never clash with other units on the same page.
 */

export const AD_UNITS = {
  "160x300": { key: "a9c5c85617866ffc4f37ad75b13e1bcd", width: 160, height: 300 },
  "160x600": { key: "97dd2579b391df23204e51a0a377d76f", width: 160, height: 600 },
  "300x250": { key: "3fcd307da8c1c762321cec7a651a6b93", width: 300, height: 250 },
  "320x50": { key: "45fc5813abb04560df8a694756dddcfe", width: 320, height: 50 },
  "468x60": { key: "eb9bb71f96aa55308a7704b216b5111d", width: 468, height: 60 },
  "728x90": { key: "26e19317ada3cc44baa0da3a3189e5fd", width: 728, height: 90 },
} as const;

export type AdSize = keyof typeof AD_UNITS;

type AdUnit = (typeof AD_UNITS)[AdSize];

/** Build the isolated document that hosts one Adsterra banner. */
function bannerSrcDoc(unit: AdUnit) {
  return (
    "<!DOCTYPE html><html><head><meta charset=\"utf-8\">" +
    "<style>html,body{margin:0;padding:0;overflow:hidden;background:transparent}</style>" +
    "</head><body>" +
    `<script>atOptions = {'key' : '${unit.key}','format' : 'iframe','height' : ${unit.height},'width' : ${unit.width},'params' : {}};</script>` +
    `<script src="https://bauval.org/22/${unit.key}"></script>` +
    "</body></html>"
  );
}

type AdSlotProps = {
  size: AdSize;
  /** Show the tiny "ADVERTISEMENT" label above the unit. Default true. */
  label?: boolean;
  /** Label colour: "light" on white backgrounds, "dark" on the red masthead. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * One reusable Adsterra banner slot. The wrapper reserves the exact pixel
 * space of the unit so the page never shifts while the ad loads.
 */
export function AdSlot({ size, label = true, tone = "light", className = "" }: AdSlotProps) {
  const unit = AD_UNITS[size];
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {label && (
        <span
          className={`mb-1 text-center text-[10px] font-medium uppercase tracking-[0.2em] ${
            tone === "dark" ? "text-white/60" : "text-neutral-400"
          }`}
        >
          Advertisement
        </span>
      )}
      <div
        className="max-w-full overflow-hidden"
        style={{ width: unit.width, height: unit.height }}
      >
        <iframe
          title="Advertisement"
          srcDoc={bannerSrcDoc(unit)}
          width={unit.width}
          height={unit.height}
          loading="lazy"
          scrolling="no"
          frameBorder={0}
          style={{ border: 0, display: "block" }}
        />
      </div>
    </div>
  );
}

const NATIVE_CONTAINER_ID = "container-cc02a1c28ef63b45e56309e62a9d785e";
const NATIVE_SCRIPT_SRC = "https://bauval.org/21/cc02a1c28ef63b45e56309e62a9d785e";

/**
 * Adsterra Native Banner (4 images in a row by default). The container id
 * must be unique, so render at most one instance per page.
 */
export function NativeBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="mb-1 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
        Sponsored
      </span>
      <div id={NATIVE_CONTAINER_ID} className="w-full" />
      <Script
        async
        data-cfasync="false"
        src={NATIVE_SCRIPT_SRC}
        strategy="afterInteractive"
      />
    </div>
  );
}

/** Adsterra Smartlink — used for discreet "Sponsored" text links. */
export const SMARTLINK_URL = "https://araplhn.org/4/a4e58de5bc969177823ba6e792a51e71";

export function SmartlinkText({ className = "" }: { className?: string }) {
  return (
    <a
      href={SMARTLINK_URL}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={className}
    >
      Sponsored
    </a>
  );
}
