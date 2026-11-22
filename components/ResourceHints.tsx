/**
 * Preconnect + dns-prefetch for the ad hosts so their scripts
 * connect faster. Literal <link> tags — React hoists them to <head>.
 */
export default function ResourceHints() {
  return (
    <>
      <link rel="preconnect" href="https://bauval.org" />
      <link rel="dns-prefetch" href="https://bauval.org" />
      <link rel="preconnect" href="https://abscloud.org" />
      <link rel="dns-prefetch" href="https://abscloud.org" />
    </>
  );
}
