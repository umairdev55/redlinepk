import BreakingTicker from "@/components/BreakingTicker";
import ImageCard from "@/components/ImageCard";
import LatestStories from "@/components/LatestStories";
import NativeBanner from "@/components/NativeBanner";
import PostCard from "@/components/PostCard";
import Reveal from "@/components/Reveal";
import RowPost from "@/components/RowPost";
import SectionHeader from "@/components/SectionHeader";
import TextPost from "@/components/TextPost";
import TrendingItem from "@/components/TrendingItem";
import {
  getAllPosts,
  getBreaking,
  getCategories,
  getEditorsPicks,
  getFeatured,
  getMainNews,
  getTrending,
} from "@/data/posts";

export default function HomePage() {
  const allPosts = getAllPosts();
  const mainNews = getMainNews();
  const editorsPicks = getEditorsPicks();
  const trending = getTrending(7);
  const featured = getFeatured();
  const breaking = getBreaking().map((post) => ({ slug: post.slug, title: post.title }));

  // Express sections draw from the remaining recent posts (newest first).
  const expressBig = allPosts[4];
  const expressRows = allPosts.slice(5, 8);
  const expressGrid = allPosts.slice(8, 14);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* Breaking news ticker */}
      <div className="mt-5">
        <BreakingTicker items={breaking} />
      </div>

      {/* Hero: Editor's Picks / Main News / Trending Now */}
      <section
        aria-label="Top stories"
        className="mt-8 grid gap-8 lg:grid-cols-12"
      >
        <div className="lg:col-span-3">
          <SectionHeader title="Editor's Picks" />
          <div className="flex flex-col gap-5">
            {editorsPicks[0] && (
              <Reveal>
                <ImageCard post={editorsPicks[0]} />
              </Reveal>
            )}
            {editorsPicks.slice(1).map((post, index) => (
              <Reveal key={post.slug} delay={index * 100}>
                <TextPost post={post} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <SectionHeader title="Main News" />
          <Reveal delay={80} className="h-full">
            <ImageCard post={mainNews} tall eager />
          </Reveal>
        </div>

        <div className="lg:col-span-4">
          <SectionHeader title="Trending Now" />
          <div>
            {trending.map((post, index) => (
              <Reveal key={post.slug} delay={index * 60}>
                <TrendingItem post={post} rank={index + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Native Banner */}
      <div className="mt-14">
        <NativeBanner />
      </div>

      {/* Featured Posts */}
      <section aria-label="Featured posts" className="mt-14">
        <SectionHeader title="Featured Posts" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((post, index) => (
            <Reveal key={post.slug} delay={index * 90}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Express Posts */}
      <section aria-label="Express posts" className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeader title="Express Posts 1" />
          <div className="flex flex-col gap-6">
            {expressBig && (
              <Reveal>
                <ImageCard post={expressBig} />
              </Reveal>
            )}
            {expressRows.map((post, index) => (
              <Reveal key={post.slug} delay={index * 80}>
                <RowPost post={post} />
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader title="Express Posts 2" />
          <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
            {expressGrid.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 2) * 80}>
                <RowPost post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Stories */}
      <div className="mt-14">
        <LatestStories
          posts={allPosts}
          categories={getCategories().map((category) => category.name)}
        />
      </div>
    </div>
  );
}
