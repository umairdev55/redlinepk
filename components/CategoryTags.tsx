import Link from "next/link";
import { categorySlug, tagSlug, type Post } from "@/data/posts";

/** Category + tag labels shown above a post title (e.g. "NEWSBEAT - TECH"). */
export default function CategoryTags({ post }: { post: Post }) {
  const labels = [post.category, ...post.tags.filter((tag) => tag !== post.category)].slice(0, 3);
  return (
    <p className="flex flex-wrap items-center gap-x-1 text-[11px] font-bold uppercase tracking-widest text-brand">
      {labels.map((label, index) => (
        <span key={label} className="inline-flex items-center gap-1">
          {index > 0 && <span aria-hidden="true" className="text-neutral-400">-</span>}
          <Link
            href={
              label === post.category
                ? `/category/${categorySlug(label)}`
                : `/category/${tagSlug(label)}`
            }
            className="transition-colors hover:text-brand-dark hover:underline"
          >
            {label}
          </Link>
        </span>
      ))}
    </p>
  );
}
