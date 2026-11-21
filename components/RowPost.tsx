import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/posts";
import ArticleMeta from "./ArticleMeta";
import CategoryTags from "./CategoryTags";

/** Compact horizontal post row: thumbnail left, text right. Used in Express Posts. */
export default function RowPost({ post }: { post: Post }) {
  return (
    <article className="group flex gap-4">
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden sm:w-36"
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="144px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </Link>
      <div className="flex min-w-0 flex-col gap-1.5">
        <CategoryTags post={post} />
        <h3 className="font-display text-base font-bold leading-snug text-ink sm:text-lg">
          <Link href={`/blog/${post.slug}`} className="headline-link">
            {post.title}
          </Link>
        </h3>
        <ArticleMeta post={post} />
      </div>
    </article>
  );
}
