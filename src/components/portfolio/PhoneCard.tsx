type Props = {
  image: string;
  title: string;
  tag: string;
  metric: string;
};

export function PhoneCard({ image, title, tag, metric }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface p-2 backdrop-blur-md transition-transform duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden rounded-[1.6rem]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={576}
          height={1024}
          className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <span className="absolute right-3 top-3 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-md">
          {metric}
        </span>

        <div className="absolute inset-x-3 bottom-3">
          <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground backdrop-blur-md">
            {tag}
          </span>
          <h3 className="mt-2 text-lg font-bold leading-tight text-foreground">{title}</h3>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 glow-ring" />
    </article>
  );
}
