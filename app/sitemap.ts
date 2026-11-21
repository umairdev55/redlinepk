import type { MetadataRoute } from "next";
import { getAllPosts, getCategories, getTags } from "@/data/posts";

const SITE_URL = "https://redlinepk.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latestDate = posts[0]?.date ?? "2026-01-01";

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = getCategories().map((category) => ({
    url: `${SITE_URL}/category/${category.slug}`,
    lastModified: latestDate,
    changeFrequency: "daily",
    priority: 0.7,
  }));

  const tagEntries: MetadataRoute.Sitemap = getTags().map((tag) => ({
    url: `${SITE_URL}/category/${tag.slug}`,
    lastModified: latestDate,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: latestDate,
      changeFrequency: "daily",
      priority: 1,
    },
    ...postEntries,
    ...categoryEntries,
    ...tagEntries,
  ];
}
