import { getAllPosts } from "@/data/posts";
import { SITE_NAME, SITE_URL } from "@/data/site";

/** RSS 2.0 feed of all stories, newest first. Generated from data/posts.ts. */

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const posts = getAllPosts();
  const lastBuildDate = new Date(
    `${posts[0]?.date ?? "2026-01-01"}T00:00:00Z`,
  ).toUTCString();

  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(`${post.date}T00:00:00Z`).toUTCString();
      return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${escapeXml(link)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(link)}</guid>`,
        `      <description>${escapeXml(post.excerpt)}</description>`,
        `      <category>${escapeXml(post.category)}</category>`,
        `      <pubDate>${pubDate}</pubDate>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    "  <channel>",
    `    <title>${escapeXml(SITE_NAME)} — News, Stories &amp; Sharp Analysis</title>`,
    `    <link>${escapeXml(SITE_URL)}</link>`,
    "    <description>Tech, AI and business — explained clearly, published daily.</description>",
    "    <language>en-us</language>",
    `    <lastBuildDate>${lastBuildDate}</lastBuildDate>`,
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
