import Link from "next/link";
import { readTime, type Post } from "@/data/posts";
import ArticleMeta from "./ArticleMeta";
import CategoryTags from "./CategoryTags";

/** Text-only post item (no photo) used under the Editor's Picks lead card. */
export default function TextPost({ post }: { post: Post }) {
  return (
    <article className="group border-b border-line pb-4 last:border-b-0 last:pb-0">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
        {readTime(post)} min read
      </p>
      <CategoryTags post={post} />
      <h3 className="mt-1 font-display text-lg font-bold leading-snug text-ink">
        <Link href={`/blog/${post.slug}`} className="headline-link">
          {post.title}
        </Link>
      </h3>
      <div className="mt-1.5">
        <ArticleMeta post={post} />
      </div>
    </article>
  );
}
