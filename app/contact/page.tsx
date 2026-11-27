import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Redline",
  description:
    "Contact the Redline team — story tips, corrections, advertising and general questions about the magazine.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="font-display text-sm font-bold uppercase tracking-widest text-brand">
        Contact
      </p>
      <h1 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-ink">
        Talk to Redline
      </h1>
      <span aria-hidden="true" className="mt-4 block h-1 w-16 bg-brand" />

      <p className="mt-8 text-base leading-relaxed text-neutral-700">
        The fastest way to reach us is by email. Write to us about story
        tips, corrections to published articles, advertising on Redline, or
        anything else about the magazine — we read everything that comes in.
      </p>

      <div className="mt-8 border border-line bg-smoke px-6 py-8 text-center">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-neutral-500">
          Email us at
        </p>
        <a
          href="mailto:subscribe@redlinepk.com"
          className="mt-2 block break-all font-display text-2xl font-black text-brand hover:underline sm:text-3xl"
        >
          subscribe@redlinepk.com
        </a>
        <p className="mt-3 text-sm text-neutral-500">
          For corrections, please include the headline of the story and what
          needs fixing.
        </p>
      </div>

      <div className="mt-10 space-y-5 text-base leading-relaxed text-neutral-700">
        <p>
          Prefer to hear from us instead? Subscribe to The Redline Morning
          Brief using the form below and get the five stories that matter in
          your inbox before your first coffee.
        </p>
        <p>
          For how we handle your information when you visit or subscribe,
          see our{" "}
          <a href="/privacy" className="font-semibold text-brand hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
