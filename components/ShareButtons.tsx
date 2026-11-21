"use client";

import { useState } from "react";

/** Share buttons: X, Facebook, WhatsApp and copy-link. */
export default function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const buttonClass =
    "flex h-10 w-10 items-center justify-center bg-ink text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand";

  return (
    <div className="flex items-center gap-2" aria-label="Share this story">
      <span className="mr-1 text-xs font-bold uppercase tracking-widest text-neutral-500">
        Share
      </span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={buttonClass}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M17.8 4h2.7l-6 6.8L21.5 20h-5.6l-4.3-5.6L6.6 20H3.9l6.4-7.3L3.6 4H9.3l3.9 5.1L17.8 4Zm-1 14.4h1.5L8.6 5.5H7L16.8 18.4Z" />
        </svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className={buttonClass}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5Z" />
        </svg>
      </a>
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className={buttonClass}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm4.4 12.6c-.2.5-1.1 1-1.5 1-.4.1-.9.2-3-.6-2.5-1-4.1-3.6-4.2-3.8-.1-.2-1-1.4-1-2.6s.6-1.8.9-2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.1.3.7 1.2 1.6 2 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4 0 .1 0 .6-.2 1.1Z" />
        </svg>
      </a>
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        className={buttonClass}
      >
        {copied ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 14a5 5 0 0 0 7.1 0l2.8-2.8a5 5 0 0 0-7-7.1L11.5 5.5" strokeLinecap="round" />
            <path d="M14 10a5 5 0 0 0-7.1 0L4.1 12.8a5 5 0 0 0 7 7.1l1.4-1.4" strokeLinecap="round" />
          </svg>
        )}
      </button>
      {copied && <span className="text-xs font-semibold text-brand">Link copied</span>}
    </div>
  );
}
