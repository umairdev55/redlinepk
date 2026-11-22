"use client";

/**
 * Responsive 16:9 video embed for article bodies.
 *
 * Accepts a YouTube URL in any common form (watch, youtu.be, embed,
 * shorts, live) and converts it to the standard embed URL. Any other
 * URL is used as the iframe src directly.
 */
export default function VideoEmbed({ url, title }: { url: string; title: string }) {
  const src = toEmbedUrl(url);
  return (
    <div className="my-8 aspect-video w-full overflow-hidden rounded-md bg-ink">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full border-0"
      />
    </div>
  );
}

function toEmbedUrl(url: string): string {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : url;
}

function getYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "").replace(/^m\./, "");
    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return isValidId(id) ? id : null;
    }
    if (host === "youtube.com" || host === "youtube-nocookie.com") {
      if (parsed.pathname === "/watch") {
        const id = parsed.searchParams.get("v");
        return isValidId(id) ? id : null;
      }
      const match = parsed.pathname.match(/^\/(?:embed|shorts|live|v)\/([^/?#]+)/);
      if (match && isValidId(match[1])) return match[1];
    }
  } catch {
    return null;
  }
  return null;
}

function isValidId(id: string | null | undefined): id is string {
  return typeof id === "string" && /^[A-Za-z0-9_-]{6,}$/.test(id);
}
