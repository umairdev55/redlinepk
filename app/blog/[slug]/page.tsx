import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryTags from "@/components/CategoryTags";
import NativeBanner from "@/components/NativeBanner";
import PostCard from "@/components/PostCard";
import ReadingProgress from "@/components/ReadingProgress";
import Reveal from "@/components/Reveal";
import SaveButton from "@/components/SaveButton";
import SectionHeader from "@/components/SectionHeader";
import ShareButtons from "@/components/ShareButtons";
import TagPill from "@/components/TagPill";
import {
  categorySlug,
  formatDate,
  formatViews,
  getPostBySlug,
  getPrevNext,
  getRelated,
  posts,
  readTime,
  tagSlug,
} from "@/data/posts";

const SITE_URL = "https://redlinepk.com";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Story not found" };

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, ...post.tags],
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Redline",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      images: [{ url: post.image, alt: post.imageAlt, width: 1600, height: 1000 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = getRelated(post, 3);
  const { prev, next } = getPrevNext(post);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Redline",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.join(" ").split(/\s+/).length,
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl pt-8">
        <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          <Link href="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          <span aria-hidden="true" className="mx-2">›</span>
          <Link
            href={`/category/${categorySlug(post.category)}`}
            className="transition-colors hover:text-brand"
          >
            {post.category}
          </Link>
        </nav>

        <header className="mt-5">
          <CategoryTags post={post} />
          <h1 className="mt-3 font-display text-3xl font-black leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-line py-4">
            <p className="flex flex-wrap items-center gap-x-3 text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white"
                >
                  {post.author.split(" ").map((part) => part[0]).join("")}
                </span>
                <span className="font-semibold text-ink">{post.author}</span>
              </span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{readTime(post)} min read</span>
              <span aria-hidden="true">·</span>
              <span>{formatViews(post.views)} views</span>
              <span aria-hidden="true">·</span>
              <span>{post.comments} comments</span>
            </p>
            <SaveButton slug={post.slug} />
          </div>
        </header>

        <figure className="mt-8">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              loading="eager"
              fetchPriority="high"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-xs text-neutral-500">{post.imageAlt}</figcaption>
        </figure>

        <div className="article-body mt-8">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-bold uppercase tracking-widest text-neutral-500">
            Tags
          </span>
          {post.tags.map((tag) => (
            <TagPill key={tag} name={tag} href={`/category/${tagSlug(tag)}`} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-line py-5">
          <ShareButtons title={post.title} url={url} />
          <SaveButton slug={post.slug} />
        </div>

        <nav
          aria-label="Previous and next stories"
          className="mt-8 grid gap-4 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group bg-smoke p-5 ring-1 ring-line transition-all duration-300 hover:bg-ink"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                ← Newer story
              </span>
              <span className="mt-2 block font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-white">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="group bg-smoke p-5 text-right ring-1 ring-line transition-all duration-300 hover:bg-ink"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                Older story →
              </span>
              <span className="mt-2 block font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-white">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      </article>

      {/* Native Banner */}
      <div className="mt-16">
        <NativeBanner />
      </div>

      {related.length > 0 && (
        <section aria-label="Related stories" className="mt-16">
          <SectionHeader title="Related Stories" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedPost, index) => (
              <Reveal key={relatedPost.slug} delay={index * 90}>
                <PostCard post={relatedPost} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
