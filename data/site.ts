/**
 * Single source of truth for the site's public URL.
 *
 * Live site is https://redlinepk.vercel.app — no custom domain.
 * Set NEXT_PUBLIC_SITE_URL in Vercel only if the live URL ever changes.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://redlinepk.vercel.app";

export const SITE_NAME = "Redline";
