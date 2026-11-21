import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/posts";
import ArticleMeta from "./ArticleMeta";
import CategoryTags from "./CategoryTags";
import ReadBadge from "./ReadBadge";

/**
 * Large image card with the headline overlaid on a gradient.
 * Used for the Main News hero and the Editor's Picks lead card.
 */
export default function ImageCard({
  post,
  tall = false,
  eager = false,
}: {
  post: Post;
  tall?: boolean;
  eager?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden bg-ink shadow-md transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/25 ${
        tall ? "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px]" : "aspect-[16/10]"
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="absolute inset-0">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading={eager ? "eager" : undefined}
          fetchPriority={eager ? "high" : undefined}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"
        />
      </Link>
      <span className="absolute left-3 top-3">
        <ReadBadge post={post} />
      </span>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="pointer-events-auto">
          <CategoryTags post={post} />
        </div>
        <h3
          className={`mt-1 font-display font-bold leading-tight text-white ${
            tall ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          <Link href={`/blog/${post.slug}`} className="headline-link pointer-events-auto">
            {post.title}
          </Link>
        </h3>
        <div className="mt-2">
          <ArticleMeta post={post} light />
        </div>
      </div>
    </article>
  );
}
