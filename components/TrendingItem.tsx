import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/posts";

/** Numbered trending item with a small thumbnail (Trending Now 1–7). */
export default function TrendingItem({
  post,
  rank,
}: {
  post: Post;
  rank: number;
}) {
  return (
    <article className="group flex items-center gap-3 border-b border-line py-3 last:border-b-0">
      <span
        aria-hidden="true"
        className="flex h-7 w-7 shrink-0 items-center justify-center bg-brand font-display text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110"
      >
        {rank}
      </span>
      <Link
        href={`/blog/${post.slug}`}
        className="relative h-14 w-20 shrink-0 overflow-hidden"
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="80px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </Link>
      <h3 className="font-display text-[15px] font-bold leading-snug text-ink">
        <Link href={`/blog/${post.slug}`} className="headline-link">
          {post.title}
        </Link>
      </h3>
    </article>
  );
}
