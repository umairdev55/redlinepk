"use client";

import { Fragment, useMemo, useState, type ReactNode } from "react";
import type { Post } from "@/data/posts";
import FilterChip from "./FilterChip";
import PostCard from "./PostCard";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const PAGE_SIZE = 8;

/** Latest Stories: category-filterable grid with Load More. */
export default function LatestStories({
  posts,
  categories,
  inFeedAd,
}: {
  posts: Post[];
  categories: string[];
  /** Optional ad rendered full-width inside the grid after the first row. */
  inFeedAd?: ReactNode;
}) {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((post) => post.category === active)),
    [posts, active],
  );

  const shown = filtered.slice(0, visible);

  return (
    <section id="latest" aria-label="Latest stories" className="scroll-mt-24">
      <SectionHeader title="Latest Stories" />
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {["All", ...categories].map((category) => (
          <FilterChip
            key={category}
            label={category}
            active={active === category}
            onClick={() => {
              setActive(category);
              setVisible(PAGE_SIZE);
            }}
          />
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="py-10 text-center text-neutral-500">
          No stories in this category yet.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((post, index) => (
            <Fragment key={post.slug}>
              <Reveal delay={(index % 4) * 90}>
                <PostCard post={post} />
              </Reveal>
              {inFeedAd &&
                (index === 3 || (index === shown.length - 1 && shown.length < 4)) && (
                  <div className="flex justify-center sm:col-span-2 lg:col-span-4">
                    {inFeedAd}
                  </div>
                )}
            </Fragment>
          ))}
        </div>
      )}

      {visible < filtered.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisible((count) => count + PAGE_SIZE)}
            className="bg-ink px-8 py-3 font-display text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand"
          >
            Load More Stories
          </button>
          <p className="mt-3 text-xs text-neutral-500">
            Showing {shown.length} of {filtered.length} stories
          </p>
        </div>
      )}
    </section>
  );
}
