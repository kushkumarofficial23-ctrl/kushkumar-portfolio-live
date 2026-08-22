/**
 * Media (videos/images) lives on Lovable's CDN and is referenced in the repo by
 * `.asset.json` pointer files whose `url` is a root-relative path
 * (`/__l5e/assets-v1/...`). That path is only served by Lovable hosting.
 *
 * When the same repo is deployed elsewhere (Vercel, Netlify, GitHub Pages) the
 * relative path 404s and media appears blank. `cdn()` rewrites those paths to
 * the absolute Lovable URL on any non-Lovable host.
 */
const CDN_ORIGIN = "https://project--22a117ad-163b-4a12-ad7d-b0ec32b4fb0d.lovable.app";

function isLovableHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".lovable.app") ||
    hostname.endsWith(".lovableproject.com")
  );
}

export function cdn(url: string): string {
  if (!url.startsWith("/__l5e/")) return url;
  if (typeof window === "undefined") return url;
  if (isLovableHost(window.location.hostname)) return url;
  return CDN_ORIGIN + url;
}
