"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { formatDate, type SearchEntry } from "@/data/posts";

/** Live search overlay: filters posts by title, excerpt, category and tags. */
export default function SearchOverlay({
  index,
  open,
  onClose,
}: {
  index: SearchEntry[];
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      const timer = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(timer);
    }
  }, [open]);

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

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return index.slice(0, 5);
    return index
      .filter((entry) =>
        [entry.title, entry.excerpt, entry.category, ...entry.tags]
          .join(" ")
          .toLowerCase()
          .includes(needle),
      )
      .slice(0, 8);
  }, [index, query]);

  if (!open) return null;

  return (
    <div
      className="fade-in fixed inset-0 z-[70] flex items-start justify-center bg-black/70 p-4 pt-[10vh] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Search articles"
      onClick={onClose}
    >
      <div
        className="pop-in w-full max-w-2xl overflow-hidden bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b-2 border-brand px-5 py-4">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 shrink-0 text-brand"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search stories, topics, tags…"
            aria-label="Search articles"
            className="w-full bg-transparent text-lg text-ink outline-none placeholder:text-neutral-400"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="shrink-0 text-2xl leading-none text-neutral-400 transition-colors hover:text-brand"
          >
            ×
          </button>
        </div>
        <div className="max-h-[55vh] overflow-y-auto">
          {results.length === 0 ? (
            <p className="px-5 py-8 text-center text-sm text-neutral-500">
              No stories match “{query}”. Try another keyword.
            </p>
          ) : (
            <ul>
              {results.map((entry) => (
                <li key={entry.slug} className="border-b border-line last:border-b-0">
                  <Link
                    href={`/blog/${entry.slug}`}
                    onClick={onClose}
                    className="group flex items-center gap-4 px-5 py-3 transition-colors hover:bg-smoke"
                  >
                    <span className="relative h-12 w-[4.5rem] shrink-0 overflow-hidden">
                      <Image
                        src={entry.image}
                        alt={entry.imageAlt}
                        fill
                        sizes="72px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-widest text-brand">
                        {entry.category}
                      </span>
                      <span className="block truncate font-display font-bold text-ink group-hover:text-brand">
                        {entry.title}
                      </span>
                      <span className="block text-xs text-neutral-500">
                        {formatDate(entry.date)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
