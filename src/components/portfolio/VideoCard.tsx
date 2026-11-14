import { useRef } from "react";

type Props = {
  src: string;
  title: string;
  tag: string;
  metric: string;
  media?: "video" | "image";
};

export function VideoCard({ src, title, tag, metric, lens, media = "video" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <article className="cinema-card group overflow-hidden transition-transform duration-500 hover:-translate-y-1">
      <div className="relative overflow-hidden">
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

      </div>
      <div className="p-4">
        <h3 className="font-sans text-base font-semibold leading-snug text-foreground">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 border-t border-border pt-3">
          <span className="mono-tag text-primary">{tag}</span>
          <span className="mono-tag text-muted-foreground">{metric}</span>
        </div>
        <div className="mono-tag mt-2 text-muted-foreground">
          {media === "image" ? "Campaign still" : "Vertical commercial"}
        </div>
      </div>
    </article>
  );
}
