## Media hosting
- All videos/images are plain files in `src/assets`, imported directly (no `.asset.json` pointers, no `cdn()` helper) so the site works on any host (GitHub + Vercel included).
- Every mp4 is re-encoded H.264 + AAC with `-movflags +faststart` (moov box first) for instant playback; keep that flag when re-encoding any new video.
- Keep portfolio storytelling sections on the homepage; the Creator Stories feature reuses the existing work media records so source videos stay unchanged and category filters remain complete.
- Keep global styling and semantic theme tokens in `src/styles.css`, mapped through Tailwind v4 `@theme inline` so shared UI remains theme-aware.
