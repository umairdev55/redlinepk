import { formatDate, type Post } from "@/data/posts";

/** Author / date / comment-count byline shown under post titles. */
export default function ArticleMeta({
  post,
  light = false,
}: {
  post: Post;
  light?: boolean;
}) {
  const muted = light ? "text-white/80" : "text-neutral-500";
  return (
    <p className={`flex flex-wrap items-center gap-x-2 text-xs ${muted}`}>
      <span className={`font-semibold ${light ? "text-white" : "text-neutral-700"}`}>
        {post.author}
      </span>
      <span aria-hidden="true">·</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden="true">·</span>
      <span className="inline-flex items-center gap-1">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
            strokeLinejoin="round"
          />
        </svg>
        {post.comments}
      </span>
    </p>
  );
}
