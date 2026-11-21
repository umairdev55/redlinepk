"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "redline-saved-stories";

/** Save-story bookmark button persisted in localStorage. */
export default function SaveButton({ slug }: { slug: string }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as string[];
      setSaved(stored.includes(slug));
    } catch {
      setSaved(false);
    }
  }, [slug]);

  const toggle = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as string[];
      const next = saved
        ? stored.filter((item) => item !== slug)
        : [...stored, slug];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setSaved(!saved);
    } catch {
      setSaved(!saved);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={saved}
      className={`inline-flex items-center gap-2 px-4 py-2 font-display text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
        saved
          ? "bg-brand text-white"
          : "bg-smoke text-ink ring-1 ring-line hover:bg-ink hover:text-white"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill={saved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 3h12v18l-6-4.5L6 21V3Z" strokeLinejoin="round" />
      </svg>
      {saved ? "Saved" : "Save Story"}
    </button>
  );
}
