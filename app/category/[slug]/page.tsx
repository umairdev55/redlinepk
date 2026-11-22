import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import NativeBanner from "@/components/NativeBanner";
import PostCard from "@/components/PostCard";
import Reveal from "@/components/Reveal";
import {
  getAllPosts,
  getCategories,
  getCategoryBySlug,
  getPostsByCategory,
  getTags,
} from "@/data/posts";

const SITE_URL = "https://redlinepk.com";

/** Resolve a slug to either a category or a tag listing. */
function resolveListing(slug: string) {
  const category = getCategoryBySlug(slug);
  if (category) {
    return {
      kind: "Category" as const,
      name: category.name,
      posts: getPostsByCategory(category.name),
    };
  }
  const tag = getTags().find((candidate) => candidate.slug === slug);
  if (tag) {
    return {
      kind: "Tag" as const,
      name: tag.name,
      posts: getAllPosts().filter((post) => post.tags.includes(tag.name)),
    };
  }
  return undefined;
}

export function generateStaticParams() {
  const categorySlugs = getCategories().map((category) => ({ slug: category.slug }));
  const tagSlugs = getTags().map((tag) => ({ slug: tag.slug }));
  const seen = new Set<string>();
  return [...categorySlugs, ...tagSlugs].filter(({ slug }) => {
    if (seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = resolveListing(slug);
  if (!listing) return { title: "Not found" };

  const title = `${listing.name} News & Stories`;
  const description = `The latest ${listing.name} stories, analysis and features from Redline — ${listing.posts.length} articles and counting.`;
  const url = `${SITE_URL}/category/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${title} | Redline`,
      description,
      url,
      siteName: "Redline",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Redline`,
      description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = resolveListing(slug);
  if (!listing) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <header className="mt-8 border-b-2 border-ink pb-6">
        <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          <Link href="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          <span aria-hidden="true" className="mx-2">›</span>
          <span>{listing.kind}</span>
        </nav>
        <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-5xl">
          {listing.name}
        </h1>
        <span aria-hidden="true" className="mt-3 block h-1 w-20 bg-brand" />
        <p className="mt-3 text-sm text-neutral-500">
          {listing.posts.length} {listing.posts.length === 1 ? "story" : "stories"} in{" "}
          {listing.name}
        </p>
      </header>

      {listing.posts.length === 0 ? (
        <p className="py-16 text-center text-neutral-500">
          No stories here yet — check back soon.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {listing.posts.map((post, index) => (
            <Fragment key={post.slug}>
              <Reveal delay={(index % 4) * 90}>
                <PostCard post={post} />
              </Reveal>
              {(index === 3 ||
                (listing.posts.length < 4 &&
                  index === listing.posts.length - 1)) && (
                <div className="sm:col-span-2 lg:col-span-4">
                  <NativeBanner />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
