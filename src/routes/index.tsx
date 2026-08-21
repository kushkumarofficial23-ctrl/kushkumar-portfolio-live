import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  ArrowUpRight,
  Camera,
  Gauge,
  Mail,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Video,
} from "lucide-react";

import { PhoneCard } from "@/components/portfolio/PhoneCard";
import heroUgc from "@/assets/hero-ugc.jpg";
import creatorProfile from "@/assets/creator-profile.jpg";
import workSkincare from "@/assets/work-skincare.jpg";
import workFashion from "@/assets/work-fashion.jpg";
import workBeverage from "@/assets/work-beverage.jpg";
import workTech from "@/assets/work-tech.jpg";
import workBeauty2 from "@/assets/work-beauty2.jpg";
import workFood from "@/assets/work-food.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/919000000000";
const EMAIL = "kushkumarofficial06@gmail.com";

const FILTERS = [
  "All",
  "Skincare & Beauty",
  "Fashion & Apparel",
  "Food & Beverage",
  "Tech & DTC",
] as const;

const WORK = [
  {
    image: workSkincare,
    title: "Glow Serum Routine Ad",
    tag: "Skincare Routine Ad",
    metric: "+3.8x ROAS",
    category: "Skincare & Beauty",
  },
  {
    image: workFashion,
    title: "Streetwear Drop Teaser",
    tag: "Meta & Reels Ready",
    metric: "150k+ Views",
    category: "Fashion & Apparel",
  },
  {
    image: workBeverage,
    title: "Energy Can Hook Test",
    tag: "3s Scroll-Stopper",
    metric: "Viral Hook",
    category: "Food & Beverage",
  },
  {
    image: workTech,
    title: "Earbuds Product Reveal",
    tag: "Studio Product Visual",
    metric: "+2.4x CTR",
    category: "Tech & DTC",
  },
  {
    image: workBeauty2,
    title: "Unboxing Testimonial",
    tag: "Creator-Style UGC",
    metric: "9.1% CVR",
    category: "Skincare & Beauty",
  },
  {
    image: workFood,
    title: "Smash Burger Craving Ad",
    tag: "TikTok Native Edit",
    metric: "410k+ Views",
    category: "Food & Beverage",
  },
];

const SERVICES = [
  {
    icon: Video,
    title: "AI UGC Video Production",
    body: "High-energy, authentic creator-style videos built with advanced AI workflows without hiring expensive physical talent.",
    large: true,
  },
  {
    icon: Camera,
    title: "Virtual Product Photography",
    body: "Studio-quality product shots in aesthetic lifestyle environments.",
    large: false,
  },
  {
    icon: TrendingUp,
    title: "Social Media Strategy",
    body: "Viral hook writing, content calendar orchestration, and paid ad creative testing.",
    large: false,
  },
  {
    icon: Gauge,
    title: "Speed & Scale",
    body: "Fast turnaround, A/B test variations, and platform-specific formatting.",
    large: false,
  },
];

function Index() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = useMemo(
    () => (filter === "All" ? WORK : WORK.filter((w) => w.category === filter)),
    [filter],
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    toast.success("Brief received", {
      description: "I'll get back to you within 24 hours with next steps.",
    });
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-aurora" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] grid-lines opacity-40" />

      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-lg font-extrabold tracking-tight">
          KUSH<span className="text-accent">.</span>
        </span>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#work">
            Work
          </a>
          <a className="transition-colors hover:text-foreground" href="#services">
            Services
          </a>
          <a className="transition-colors hover:text-foreground" href="#about">
            About
          </a>
          <a className="transition-colors hover:text-foreground" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-accent backdrop-blur-md glow-ring">
            <Sparkles className="h-3.5 w-3.5" />
            Available for Brand Campaigns • 2026
          </span>

          <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.03] sm:text-6xl lg:text-7xl">
            <span className="text-gradient">AI-Powered UGC Ads</span>
            <br />
            That Stop The Scroll & Scale Brands.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I create high-performing creator-style video ads, studio-grade product visuals, and
            social growth strategies that convert viewers into buyers.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow-ring"
            >
              View Selected Work
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" />
              Book a Project via WhatsApp
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ["120+", "Ads shipped"],
              ["4.2x", "Avg. ROAS"],
              ["48h", "Turnaround"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-2xl font-bold text-foreground">{k}</dt>
                <dd className="text-xs uppercase tracking-widest text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center [perspective:1400px]">
          <div className="animate-float rounded-[2.5rem] border border-border bg-surface p-3 backdrop-blur-md glow-ring transition-transform duration-700 [transform:rotateY(-14deg)_rotateX(6deg)] hover:[transform:rotateY(0deg)_rotateX(0deg)]">
            <div className="relative w-[260px] overflow-hidden rounded-[2rem] sm:w-[300px]">
              <img
                src={heroUgc}
                alt="AI-generated UGC video ad playing on a smartphone"
                width={576}
                height={1024}
                className="aspect-[9/16] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] font-semibold backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                UGC AD · 0:14
              </span>
              <div className="absolute inset-x-4 bottom-4">
                <p className="text-sm font-semibold">"I stopped scrolling because of this…"</p>
                <p className="mt-1 text-xs text-muted-foreground">Hook variant A · Reels 9:16</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Selected Work</h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Vertical-first creative built for Reels, TikTok and Meta ad accounts.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                filter === f
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border bg-surface text-muted-foreground backdrop-blur-md hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((w) => (
            <PhoneCard key={w.title} {...w} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
          Services & Capabilities
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body, large }) => (
            <div
              key={title}
              className={`glass group relative overflow-hidden p-8 transition-colors hover:border-primary ${
                large ? "lg:col-span-2 lg:row-span-2 lg:p-10" : ""
              }`}
            >
              <Icon className={`text-accent ${large ? "h-9 w-9" : "h-7 w-7"}`} />
              <h3
                className={`mt-6 font-bold ${large ? "text-3xl sm:text-4xl" : "text-xl"}`}
              >
                {title}
              </h3>
              <p
                className={`mt-3 text-muted-foreground ${large ? "max-w-lg text-base" : "text-sm"}`}
              >
                {body}
              </p>
              {large && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Hook writing", "AI actors", "Editing & captions", "Variation testing"].map(
                    (chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {chip}
                      </span>
                    ),
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="glass overflow-hidden p-3">
            <img
              src={creatorProfile}
              alt="Kush Kumar, AI UGC creator and social media marketer"
              loading="lazy"
              width={768}
              height={1024}
              className="aspect-[4/5] w-full rounded-[1.4rem] object-cover"
            />
            <div className="grid grid-cols-3 gap-2 p-4 text-center">
              {["100% Remote", "Fast Delivery", "Direct Comms"].map((s) => (
                <div key={s} className="rounded-xl border border-border py-3 text-xs font-semibold">
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
              Creative that behaves like a growth channel.
            </h2>
            <ul className="mt-8 space-y-5">
              {[
                "Ad creative engineered around hooks, retention and conversion — not just pretty visuals.",
                "AI workflows replace casting, shoot days and studio rentals, cutting production cost dramatically.",
                "Every concept ships in multiple variations so your media buyer always has fresh angles to test.",
                "Platform-native formatting for Reels, TikTok, Shorts and Meta placements out of the box.",
              ].map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <p className="text-muted-foreground">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="glass grid gap-12 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Let's build your next top-performing ad campaign.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Share your product and goal — you'll get a creative direction and timeline back.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 rounded-2xl border border-border px-5 py-4 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border px-5 py-4 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp — quick reply
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              name="name"
              placeholder="Your name"
              className="w-full rounded-2xl border border-border bg-background/40 px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <input
              required
              name="link"
              placeholder="Brand website / product link"
              className="w-full rounded-2xl border border-border bg-background/40 px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <textarea
              required
              name="goal"
              rows={4}
              placeholder="Project goal"
              className="w-full resize-none rounded-2xl border border-border bg-background/40 px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <select
              required
              name="budget"
              defaultValue=""
              className="w-full rounded-2xl border border-border bg-background/40 px-5 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
            >
              <option value="" disabled>
                Budget range
              </option>
              <option value="500">$500 – $1,000</option>
              <option value="1000">$1,000 – $3,000</option>
              <option value="3000">$3,000 – $7,000</option>
              <option value="7000">$7,000+</option>
            </select>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow-ring"
            >
              Send Project Brief
            </button>
          </form>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-12 text-xs text-muted-foreground">
        © 2026 Kush Kumar — AI UGC Creator & Social Media Marketer
      </footer>
    </main>
  );
}
