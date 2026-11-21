"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { SearchEntry } from "@/data/posts";
import { AdSlot } from "./AdSlot";
import LiveUpdatesModal, { type Headline } from "./LiveUpdatesModal";
import SearchOverlay from "./SearchOverlay";
import TagPill from "./TagPill";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Business", href: "/category/business" },
  { label: "Sports", href: "/category/sports" },
  { label: "Newsbeat", href: "/category/newsbeat" },
  { label: "Stories", href: "/category/stories" },
  { label: "All Demos", href: "/#latest" },
];

const SOCIALS = [
  { label: "Facebook", path: "M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5Z" },
  { label: "X (Twitter)", path: "M17.8 4h2.7l-6 6.8L21.5 20h-5.6l-4.3-5.6L6.6 20H3.9l6.4-7.3L3.6 4H9.3l3.9 5.1L17.8 4Zm-1 14.4h1.5L8.6 5.5H7L16.8 18.4Z" },
  { label: "YouTube", path: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" },
  { label: "Instagram", path: "M12 8.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Zm0-2.1a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm6.9-.3a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0ZM12 4.2c2.5 0 2.8 0 3.8.1 2.7.1 3.9 1.4 4 4 .1 1 .1 1.3.1 3.7s0 2.8-.1 3.8c-.1 2.6-1.3 3.9-4 4-1 .1-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.7-.1-3.9-1.4-4-4C4.1 14.8 4.1 14.5 4.1 12s0-2.8.1-3.8c.1-2.6 1.3-3.9 4-4 1-.1 1.3-.1 3.8-.1ZM12 2.5c-2.6 0-2.9 0-3.9.1-3.3.2-5.2 2-5.4 5.4 0 1-.1 1.3-.1 4s0 3 .1 4c.2 3.4 2.1 5.2 5.4 5.4 1 .1 1.3.1 3.9.1s2.9 0 3.9-.1c3.3-.2 5.2-2 5.4-5.4.1-1 .1-1.3.1-4s0-3-.1-4c-.2-3.4-2.1-5.2-5.4-5.4-1-.1-1.3-.1-3.9-.1Z" },
  { label: "LinkedIn", path: "M6.9 8.6H4V20h2.9V8.6ZM5.4 7.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Zm6.1 6.6c0-1 .5-1.7 1.6-1.7 1 0 1.5.7 1.5 1.7V20h2.9v-6.6c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5 1-3 1.6V8.6H7.8V20h2.9v-6.2h.8Z" },
];

/**
 * Site header: date/social top bar, red masthead, black nav with search and
 * WATCH ONLINE, plus the Popular Tags row. All data arrives via props from
 * the server layout (computed from data/posts.ts).
 */
export default function Header({
  tags,
  searchIndex,
  headlines,
}: {
  tags: { name: string; href: string }[];
  searchIndex: SearchEntry[];
  headlines: Headline[];
}) {
  const [today, setToday] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [liveOpen, setLiveOpen] = useState(false);

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    );
  }, []);

  return (
    <header>
      {/* Top bar */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-neutral-500 sm:px-6">
          <time dateTime={today} className="font-medium" suppressHydrationWarning>
            {today || " "}
          </time>
          <nav aria-label="Social links" className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="text-neutral-500 transition-colors hover:text-brand"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Masthead */}
      <div className="bg-brand">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 sm:px-6 xl:flex-row xl:items-center xl:justify-between xl:gap-6 xl:py-8">
          <Link href="/" className="shrink-0 text-white" aria-label="Redline home">
            <span className="font-display text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl">
              Redline<span className="text-ink">.</span>
            </span>
            <span className="mt-1 block text-xs font-medium uppercase tracking-[0.25em] text-white/80">
              News, stories &amp; sharp analysis
            </span>
          </Link>
          {/* Masthead banner: 728x90 on xl screens, 320x50 below */}
          <div className="hidden shrink-0 xl:block">
            <AdSlot size="728x90" tone="dark" />
          </div>
          <div className="xl:hidden">
            <AdSlot size="320x50" tone="dark" />
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <div className="sticky top-0 z-50 bg-ink shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <nav aria-label="Primary" className="nav-scroll flex items-center gap-1 overflow-x-auto">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`whitespace-nowrap px-3 py-3.5 font-display text-sm font-bold uppercase tracking-wide transition-colors sm:px-4 ${
                  index === 0
                    ? "bg-brand text-white"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search articles"
              className="flex h-11 w-11 items-center justify-center text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setLiveOpen(true)}
              className="ml-1 hidden items-center gap-2 bg-brand px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark sm:inline-flex"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M8 5.5v13l11-6.5-11-6.5Z" />
              </svg>
              Watch Online
            </button>
          </div>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6">
          <span className="mr-1 text-xs font-bold uppercase tracking-widest text-neutral-500">
            Popular Tags
          </span>
          {tags.map((tag) => (
            <TagPill key={tag.name} name={tag.name} href={tag.href} />
          ))}
        </div>
      </div>

      <SearchOverlay index={searchIndex} open={searchOpen} onClose={() => setSearchOpen(false)} />
      <LiveUpdatesModal headlines={headlines} open={liveOpen} onClose={() => setLiveOpen(false)} />
    </header>
  );
}
