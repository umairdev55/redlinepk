import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/posts";
import ArticleMeta from "./ArticleMeta";
import CategoryTags from "./CategoryTags";
import ReadBadge from "./ReadBadge";

/**
 * Standard blog card: cover photo with read-time badge, category labels,
 * title and byline. Used by Featured Posts, Latest Stories and category pages.
 */
export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden bg-white shadow-sm ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span className="absolute bottom-2 left-2">
          <ReadBadge post={post} />
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <CategoryTags post={post} />
        <h3 className="font-display text-lg font-bold leading-snug text-ink">
          <Link href={`/blog/${post.slug}`} className="headline-link">
            {post.title}
          </Link>
        </h3>
        <div className="mt-auto pt-2">
          <ArticleMeta post={post} />
        </div>
      </div>
    </article>
  );
}
