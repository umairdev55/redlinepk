import Link from "next/link";

/** Pill-shaped tag link used in the Popular Tags row and footer. */
export default function TagPill({
  name,
  href,
  dark = false,
  active = false,
}: {
  name: string;
  href: string;
  dark?: boolean;
  /** Highlight when the current route is this tag/category page. */
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
        active
          ? "border-brand bg-brand text-white"
          : dark
            ? "border-white/25 text-white hover:border-brand hover:bg-brand"
            : "border-line bg-white text-neutral-700 hover:border-brand hover:bg-brand hover:text-white"
      }`}
    >
      {name}
    </Link>
  );
}
