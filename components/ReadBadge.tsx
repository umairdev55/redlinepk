import { readTime, type Post } from "@/data/posts";

/** Small "2 min read" badge shown over a post image. */
export default function ReadBadge({ post }: { post: Post }) {
  return (
    <span className="inline-flex items-center gap-1 bg-black/75 px-2 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-3 w-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </svg>
      {readTime(post)} min read
    </span>
  );
}
