"use client";

import Link from "next/link";
import { useEffect } from "react";

export interface Headline {
  slug: string;
  title: string;
  category: string;
}

/** "Watch Online" live-updates modal listing the latest headlines. */
export default function LiveUpdatesModal({
  headlines,
  open,
  onClose,
}: {
  headlines: Headline[];
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fade-in fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Live updates"
      onClick={onClose}
    >
      <div
        className="pop-in w-full max-w-lg overflow-hidden bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-ink px-5 py-4">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-white">
            <span aria-hidden="true" className="live-dot h-2.5 w-2.5 rounded-full bg-brand" />
            Live Updates
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close live updates"
            className="text-2xl leading-none text-white/70 transition-colors hover:text-white"
          >
            ×
          </button>
        </div>
        <ul>
          {headlines.map((headline) => (
            <li key={headline.slug} className="border-b border-line last:border-b-0">
              <Link
                href={`/blog/${headline.slug}`}
                onClick={onClose}
                className="group flex items-start gap-3 px-5 py-3.5 transition-colors hover:bg-smoke"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand"
                />
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-brand">
                    {headline.category}
                  </span>
                  <span className="block font-display font-bold leading-snug text-ink group-hover:text-brand">
                    {headline.title}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="bg-smoke px-5 py-3 text-center text-xs text-neutral-500">
          Redline live desk — headlines refresh as stories publish.
        </p>
      </div>
    </div>
  );
}
