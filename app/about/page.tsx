import type { Metadata } from "next";
import Link from "next/link";
import { getCategories } from "@/data/posts";

export const metadata: Metadata = {
  title: "About Redline",
  description:
    "Redline is an independent news and stories magazine covering business, sport, technology, science and the people behind the headlines — reported clearly, published daily.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const categories = getCategories();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="font-display text-sm font-bold uppercase tracking-widest text-brand">
        About
      </p>
      <h1 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-ink">
        News, stories &amp; sharp analysis
      </h1>
      <span aria-hidden="true" className="mt-4 block h-1 w-16 bg-brand" />

      <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-700">
        <p>
          Redline is an independent news and stories magazine. We cover
          business, sport, technology, science and the people behind the
          headlines — reported clearly, published daily, and written for
          readers who want the full picture without the noise.
        </p>
        <p>
          Every story on Redline is published in one place and organised by
          topic, so you can follow the subjects you care about and discover
          the ones you did not know you needed. New stories appear on the
          front page first, and the latest from each desk is always one tap
          away.
        </p>
      </div>

      <h2 className="mt-12 font-display text-xl font-bold uppercase tracking-wide text-ink">
        What we cover
      </h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/category/${category.slug}`}
              className="flex items-center justify-between border border-line px-4 py-3 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <span>{category.name}</span>
              <span className="text-xs font-normal normal-case text-neutral-500">
                {category.count} {category.count === 1 ? "story" : "stories"}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12 space-y-5 text-base leading-relaxed text-neutral-700">
        <p>
          Want the five stories that matter in your inbox before your first
          coffee? Subscribe to The Redline Morning Brief using the form
          below, or follow new stories as they publish through our{" "}
          <Link href="/rss.xml" className="font-semibold text-brand hover:underline">
            RSS feed
          </Link>
          .
        </p>
        <p>
          Spotted an error, or have a story we should cover?{" "}
          <Link href="/contact" className="font-semibold text-brand hover:underline">
            Get in touch
          </Link>{" "}
          — corrections and tips are always welcome.
        </p>
      </div>
    </div>
  );
}
