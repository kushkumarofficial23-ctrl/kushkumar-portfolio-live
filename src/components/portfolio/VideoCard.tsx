import { useRef } from "react";
import { cdn } from "@/lib/cdn";

type Props = {
  src: string;
  title: string;
  tag: string;
  metric: string;
  lens?: string;
  media?: "video" | "image";
};

export function VideoCard({ src: rawSrc, title, tag, metric, lens, media = "video" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const src = cdn(rawSrc);

  return (
    <article className="cinema-card cinema-card-hover group overflow-hidden p-2 transition-transform duration-500 hover:-translate-y-2">
      <div
        className="relative overflow-hidden rounded-[1.6rem]"
        style={{ transform: "translateZ(0)" }}
      >
        {media === "image" ? (
          <img
            src={src}
            alt={title}
            loading="lazy"
            className="aspect-[9/16] w-full bg-background object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <video
            ref={ref}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            controls
            className="aspect-[9/16] w-full bg-background object-cover"
          />
        )}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/70 to-transparent" />

        <span className="mono-tag pointer-events-none absolute right-3 top-3 rounded-full border border-gold/30 bg-background/75 px-3 py-1.5 text-gold backdrop-blur-md">
          {metric}
        </span>
        <span className="mono-tag pointer-events-none absolute left-3 top-3 inline-block max-w-[70%] rounded-full border border-border bg-background/75 px-3 py-1.5 text-muted-foreground backdrop-blur-md">
          {tag}
        </span>
        {lens && (
          <span className="mono-tag pointer-events-none absolute inset-x-3 bottom-3 rounded-lg border border-border bg-background/70 px-2.5 py-1.5 text-center text-amber-glow backdrop-blur-md">
            {lens}
          </span>
        )}
      </div>
      <h3 className="px-3 pb-1 pt-3 text-sm font-bold leading-tight text-foreground">{title}</h3>
      <div className="mono-tag px-3 pb-3 pt-0.5 text-muted-foreground">
        {media === "image" ? "Campaign Plate" : "Commercial 9:16"}
      </div>
    </article>
  );
}
