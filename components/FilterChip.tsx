"use client";

/** Category filter chip used by the Latest Stories grid. */
export default function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
        active
          ? "bg-brand text-white shadow-md shadow-brand/30"
          : "bg-smoke text-neutral-600 hover:bg-ink hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
