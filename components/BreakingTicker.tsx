"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export interface TickerItem {
  slug: string;
  title: string;
}

/** Rotating BREAKING NEWS strip. Auto-advances, pauses on hover. */
export default function BreakingTicker({ items }: { items: TickerItem[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, items.length]);

  if (items.length === 0) return null;
  const active = items[index];

  return (
    <div
      className="flex items-stretch overflow-hidden bg-smoke ring-1 ring-line"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="flex shrink-0 items-center gap-2 bg-brand px-3 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-white sm:px-4 sm:text-sm">
        <span aria-hidden="true" className="live-dot h-2 w-2 rounded-full bg-white" />
        Breaking News
      </span>
      <div className="relative flex-1 overflow-hidden">
        <Link
          key={active.slug}
          href={`/blog/${active.slug}`}
          className="ticker-item flex h-full items-center truncate px-4 text-sm font-medium text-ink transition-colors hover:text-brand"
        >
          {active.title}
        </Link>
      </div>
      <div className="flex shrink-0 items-center">
        <button
          type="button"
          aria-label="Previous headline"
          onClick={() => setIndex((index - 1 + items.length) % items.length)}
          className="flex h-full w-9 items-center justify-center text-neutral-500 transition-colors hover:bg-ink hover:text-white"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next headline"
          onClick={() => setIndex((index + 1) % items.length)}
          className="flex h-full w-9 items-center justify-center text-neutral-500 transition-colors hover:bg-ink hover:text-white"
        >
          ›
        </button>
      </div>
    </div>
  );
}
