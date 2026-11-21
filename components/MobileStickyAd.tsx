"use client";

import { useEffect, useState } from "react";
import { AdSlot } from "./AdSlot";

const STORAGE_KEY = "redline-mobile-ad-closed";

/**
 * Slim 320x50 sticky bottom bar, mobile only (hidden at lg and up).
 * The close button hides it for the rest of the browsing session.
 */
export default function MobileStickyAd() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.sessionStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const close = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Session storage unavailable — hiding for this page view is enough.
    }
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center lg:hidden">
      <div className="relative bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(0,0,0,0.15)]">
        <button
          type="button"
          onClick={close}
          aria-label="Close advertisement"
          className="absolute -top-6 right-0 flex h-6 w-6 items-center justify-center bg-ink/80 text-base leading-none text-white"
        >
          ×
        </button>
        <AdSlot size="320x50" label={false} />
      </div>
    </div>
  );
}
