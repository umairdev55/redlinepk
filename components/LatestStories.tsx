"use client";

import { useMemo, useState } from "react";
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
}: {
  posts: Post[];
  categories: string[];
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
            <Reveal key={post.slug} delay={(index % 4) * 90}>
              <PostCard post={post} />
            </Reveal>
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
