type Props = {
  src: string;
  title: string;
  tag: string;
  metric: string;
  media?: "video" | "image";
};

export function VideoCard({ src, title, tag, metric, media = "video" }: Props) {
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
      </div>
    </article>
  );
}
