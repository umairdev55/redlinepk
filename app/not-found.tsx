import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="font-display text-7xl font-black text-brand sm:text-8xl">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-ink">
        This story has moved on
      </h1>
      <p className="mt-2 max-w-md text-sm text-neutral-500">
        The page you are looking for does not exist or has been moved. Head back
        to the front page for the latest from Redline.
      </p>
      <Link
        href="/"
        className="mt-8 bg-brand px-8 py-3 font-display text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
      >
        Back to Home
      </Link>
    </div>
  );
}
