import Link from "next/link";

/** Editorial section heading with the red underline accent from the reference design. */
export default function SectionHeader({
  title,
  href,
  light = false,
}: {
  title: string;
  href?: string;
  light?: boolean;
}) {
  const heading = (
    <h2
      className={`font-display text-xl font-bold uppercase tracking-wide sm:text-2xl ${
        light ? "text-white" : "text-ink"
      }`}
    >
      {title}
    </h2>
  );

  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        {href ? (
          <Link href={href} className="transition-colors hover:text-brand">
            {heading}
          </Link>
        ) : (
          heading
        )}
        <span aria-hidden="true" className="mt-2 block h-1 w-14 bg-brand" />
      </div>
      {href && (
        <Link
          href={href}
          className="hidden shrink-0 text-xs font-bold uppercase tracking-widest text-brand transition-colors hover:text-brand-dark sm:block"
        >
          View all →
        </Link>
      )}
    </div>
  );
}
