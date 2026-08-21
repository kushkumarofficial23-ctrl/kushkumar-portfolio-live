import { useRef } from "react";

type Props = {
  src: string;
  title: string;
  tag: string;
  metric: string;
};

export function VideoCard({ src, title, tag, metric }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <article
      className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface p-2 backdrop-blur-md transition-transform duration-500 hover:-translate-y-2"
      onMouseEnter={() => void ref.current?.play()}
      onMouseLeave={() => ref.current?.pause()}
    >
      <div className="relative overflow-hidden rounded-[1.6rem]">
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
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/70 to-transparent" />

        <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-md">
          {metric}
        </span>
        <span className="pointer-events-none absolute left-3 top-3 inline-block rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground backdrop-blur-md">
          {tag}
        </span>
      </div>
      <h3 className="px-3 pb-2 pt-3 text-sm font-bold leading-tight text-foreground">{title}</h3>
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 glow-ring" />
    </article>
  );
}
