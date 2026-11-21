# Redline

A premium, production-level news & stories blogging website built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**. Editorial red/black/white magazine design with breaking-news ticker, Editor's Picks, Main News hero, Trending Now, Featured Posts, Express Posts and a filterable Latest Stories grid.

**Live domain:** https://redlinepk.com

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## How to add a new blog (one file only)

Every blog on the site lives in **one file**: [`data/posts.ts`](data/posts.ts).

1. Open `data/posts.ts`.
2. Copy any existing post object in the `posts` array and paste it as a new entry.
3. Change the values:
   - `slug` — unique URL slug (e.g. `"my-new-story"` → `/blog/my-new-story`)
   - `title`, `excerpt`, `content` (one string per paragraph — full article text)
   - `category` — one of Business, Sports, Newsbeat, Stories, Tech, World, Health, Science (or a new one — category pages are generated automatically)
   - `tags` — array of tag names (tag pages are generated automatically)
   - `author`, `date` (ISO `yyyy-mm-dd`), `views`, `comments`
   - `image` — **exactly one** cover photo URL (remote images only)
   - `imageAlt` — descriptive alt text for SEO/accessibility
   - Flags (optional): `editorsPick`, `featured`, `trending`, `breaking`, `mainNews`
4. Save. Everything else is computed from this file: home sections, search, category/tag pages, read times, dates, sitemap, footer recent posts and counts.

No other file needs to change. Rebuild/redeploy and the new post appears everywhere.

## Project structure

```
app/
  layout.tsx              Root layout: fonts, SEO metadata, header/footer
  page.tsx                Home: ticker, hero, featured, express, latest
  blog/[slug]/page.tsx    Article page (JSON-LD, progress bar, save, share)
  category/[slug]/page.tsx  Category & tag listings
  sitemap.ts / robots.ts  Generated from data/posts.ts
  not-found.tsx           Branded 404
components/               Reusable UI components (PostCard, ImageCard, RowPost,
                          TextPost, TrendingItem, SectionHeader, ArticleMeta,
                          CategoryTags, TagPill, FilterChip, ReadBadge, Header,
                          BreakingTicker, SearchOverlay, LiveUpdatesModal,
                          LatestStories, NewsletterBand, Footer, Reveal, …)
data/
  posts.ts                ★ ALL blogs live here — single source of truth
```

## Features

- Live search across titles, excerpts, categories and tags
- Category/tag filtering with Load More on the home page
- Reading progress bar, save-story (localStorage), share buttons, prev/next, related posts
- Breaking-news ticker + "Watch Online" live-updates modal
- Premium animations: scroll-reveal, image zoom, card lift, animated headline underlines (all disabled under `prefers-reduced-motion`)
- SEO: metadata templates, Open Graph, Twitter cards, BlogPosting JSON-LD, sitemap.xml, robots.txt, semantic HTML

## Deploy on Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), choose **Add New → Project** and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy, then add the custom domain **redlinepk.com** under Project → Settings → Domains and point your DNS as instructed.

## Notes

- Remote images are served from `images.unsplash.com` (allowed in `next.config.ts`). No binary assets are stored in the repo.
- All values (dates, read times, counts, categories, tags) are computed from `data/posts.ts` at build time — there is no database to manage.
