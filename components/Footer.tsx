import Image from "next/image";
import Link from "next/link";
import {
  categorySlug,
  formatDate,
  getAllPosts,
  getCategories,
  getTags,
} from "@/data/posts";
import TagPill from "./TagPill";

/** Site footer: About, Recent Posts, Categories, Tags and copyright. */
export default function Footer() {
  const recent = getAllPosts().slice(0, 4);
  const categories = getCategories();
  const tags = getTags().slice(0, 10);

  return (
    <footer className="mt-16 bg-ink text-neutral-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <Link href="/" className="font-display text-3xl font-black uppercase text-white">
            Redline<span className="text-brand">.</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            Redline is a tech magazine covering AI tools, software,
            cybersecurity, web hosting and business technology —
            practical guides and clear analysis.
          </p>
          <p className="mt-4 text-sm text-neutral-400">
            Subscribe:{" "}
            <a href="mailto:subscribe@redlinepk.com" className="text-white hover:text-brand">
              subscribe@redlinepk.com
            </a>
          </p>
        </div>

        <nav aria-label="Recent posts">
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            Recent Posts
          </h3>
          <span aria-hidden="true" className="mt-2 block h-0.5 w-10 bg-brand" />
          <ul className="mt-5 space-y-4">
            {recent.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group flex items-center gap-3">
                  <span className="relative h-12 w-16 shrink-0 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="64px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </span>
                  <span>
                    <span className="block font-display text-sm font-bold leading-snug text-white group-hover:text-brand">
                      {post.title}
                    </span>
                    <time dateTime={post.date} className="text-xs text-neutral-500">
                      {formatDate(post.date)}
                    </time>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Categories">
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            Categories
          </h3>
          <span aria-hidden="true" className="mt-2 block h-0.5 w-10 bg-brand" />
          <ul className="mt-5 space-y-2.5 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  className="flex items-center justify-between transition-colors hover:text-brand"
                >
                  <span>{category.name}</span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">
                    {category.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            Tags
          </h3>
          <span aria-hidden="true" className="mt-2 block h-0.5 w-10 bg-brand" />
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TagPill key={tag.slug} name={tag.name} href={`/category/${categorySlug(tag.name)}`} dark />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-neutral-500 sm:flex-row sm:px-6">
          <p>© 2026 Redline. All rights reserved.</p>
          <nav aria-label="Site" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/about" className="transition-colors hover:text-brand">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-brand">
              Contact
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-brand">
              Privacy Policy
            </Link>
            <a href="/rss.xml" className="transition-colors hover:text-brand">
              RSS
            </a>
          </nav>
          <p>
            Built with Next.js · <span className="text-neutral-300">redlinepk.vercel.app</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
