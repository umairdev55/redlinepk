"use client";

import { useState, type FormEvent } from "react";

/** Newsletter signup band with a local "subscribed" confirmation state. */
export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (email.trim()) setDone(true);
  };

  return (
    <section aria-label="Newsletter" className="bg-brand">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="font-display text-2xl font-black uppercase tracking-wide text-white sm:text-3xl">
            The Redline Morning Brief
          </h2>
          <p className="mt-1 text-sm text-white/85">
            The five stories that matter, in your inbox before your first coffee.
          </p>
        </div>
        {done ? (
          <p className="pop-in bg-white px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-brand">
            You are on the list — welcome to Redline.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="flex w-full max-w-md">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="w-full bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-neutral-400"
            />
            <button
              type="submit"
              className="shrink-0 bg-ink px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-black"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
