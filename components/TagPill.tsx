import Link from "next/link";

/** Pill-shaped tag link used in the Popular Tags row and footer. */
export default function TagPill({
  name,
  href,
  dark = false,
}: {
  name: string;
  href: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "border-white/25 text-white hover:border-brand hover:bg-brand"
          : "border-line bg-white text-neutral-700 hover:border-brand hover:bg-brand hover:text-white"
      }`}
    >
      {name}
    </Link>
  );
}
