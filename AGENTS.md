<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Media hosting
- All videos/images are plain files in `src/assets`, imported directly (no `.asset.json` pointers, no `cdn()` helper) so the site works on any host (GitHub + Vercel included).
- Every mp4 is re-encoded H.264 + AAC with `-movflags +faststart` (moov box first) for instant playback; keep that flag when re-encoding any new video.
- Keep portfolio storytelling sections on the homepage; the Creator Stories feature reuses the existing work media records so source videos stay unchanged and category filters remain complete.
