import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowDown,
  ArrowUpRight,
  Box,
  Camera,
  Clapperboard,
  Layers,
  Lock,
  Mail,
  MessageCircle,
  Mic,
  Phone,
  Sparkles,
  Timer,
} from "lucide-react";

import heroUgc from "@/assets/hero-ugc.jpg";
import creatorProfile from "@/assets/creator-profile.jpg";
import { VideoCard } from "@/components/portfolio/VideoCard";
import { Reveal, Tilt } from "@/components/portfolio/motion";
import sareeHeritage from "@/assets/saree_heritage.jpg";
import kundanSilver from "@/assets/kundan_silver.jpg";
import virtualStudio from "@/assets/virtual_studio_render.jpg";
import vIceCream from "@/assets/0821.mp4";
import vAcne from "@/assets/0821_1.mp4";
import vLeaf from "@/assets/0821_2.mp4";
import vIntro from "@/assets/0821_3.mp4";
import vSoda from "@/assets/soda_ad.mp4";
import vCafe from "@/assets/cafe_ad_2.mp4";
import vDrink from "@/assets/smaple_ad.mp4";
import vJewelry from "@/assets/jewelry_palace.mp4";
import vPizza from "@/assets/chef_pizza.mp4";
import vPolo from "@/assets/polo_shirt.mp4";
import vCream from "@/assets/skincare_cream.mp4";
import vAlley from "@/assets/alley_fashion.mp4";
import vStorefront from "@/assets/storefront_aerial.mp4";
import vWatch from "@/assets/luxury_watch.mp4";
import iTshirt from "@/assets/premium_tshirt.png";
import iBelieve from "@/assets/believe_set.png";
import iSkin from "@/assets/skin_closeup.jpg";
import iJewellery from "@/assets/jewellery_bust.jpg";
import imgSkincare from "@/assets/work-skincare.jpg";
import imgFashion from "@/assets/work-fashion.jpg";
import imgBeverage from "@/assets/work-beverage.jpg";
import imgTech from "@/assets/work-tech.jpg";
import imgBeauty2 from "@/assets/work-beauty2.jpg";
import imgFood from "@/assets/work-food.jpg";
import vTea from "@/assets/tea_testimonial.mp4";
import vOats from "@/assets/oats_review.mp4";
import vKurtaWalk from "@/assets/kurta_heritage_walk.mp4";
import vChikankariHanger from "@/assets/chikankari_hanger.mp4";
import vChikankariMacro from "@/assets/chikankari_macro.mp4";
import vKurtaModel from "@/assets/kurta_model.mp4";
import vWhey from "@/assets/whey_gold_gym.mp4";
import vF1 from "@/assets/f1_hyperspeed_track.mp4";
import iAttar from "@/assets/attar_bottles_abrar.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kush Kumar — 48-Hour Commercial Studio" },
      {
        name: "description",
        content:
          "Turn 2–3 existing product photos into three considered 9:16 commercial films in 48 hours. A Jaipur creative studio for founder-led D2C brands.",
      },
      {
        property: "og:title",
        content: "Kush Kumar — 48-Hour Commercial Studio",
      },
      {
        property: "og:description",
        content:
          "A founder-led Jaipur studio turning existing product photography into polished vertical campaign films, delivered in 48 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* Existing contact details kept 100% intact */
const FILTERS = [
  "All",
  "Skincare & Beauty",
  "Fashion & Apparel",
  "Food & Beverage",
  "Jewellery & Luxury",
  "Attar & Fragrance",
  "Local Business & Storefront",
  "Tech & Gadgets",
  "Introduction",
] as const;

const WORK = [
  {
    src: vAcne,
    title: "Clinical Acne Routine — Customer Story Ad",
    tag: "Problem-Solution Hook",
    metric: "Skincare D2C · 9:16 Reels Ad",
    category: "Skincare & Beauty",
  },
  {
    src: vLeaf,
    title: "Botanical Face Oil — Texture & Absorption Film",
    tag: "Sensory Texture Hook",
    metric: "Clean Beauty · 9:16 Brand Film",
    category: "Skincare & Beauty",
  },
  {
    src: vPolo,
    title: "Piqué Cotton Polo — Fit & Collar Structure Film",
    tag: "True-to-Sample Weave",
    metric: "Menswear D2C · 9:16 Lookbook Ad",
    category: "Fashion & Apparel",
  },
  {
    src: vJewelry,
    title: "Heritage Polki & Kundan Bridal Suite — Palace Film",
    tag: "Exact Stone & Meenakari",
    metric: "Fine Jewellery · 9:16 Festive Spot",
    category: "Jewellery & Luxury",
  },
  {
    src: vIceCream,
    title: "Artisanal Salted Caramel Gelato — 3s Craving Hook",
    tag: "ASMR Craving Hook",
    metric: "Gourmet Dessert · 9:16 Reels Ad",
    category: "Food & Beverage",
  },
  {
    src: vPizza,
    title: "Wood-Fired Artisanal Pizza — Oven-to-Table Spot",
    tag: "Oven-to-Table Story",
    metric: "QSR & Dining · 9:16 Tabletop Ad",
    category: "Food & Beverage",
  },
  {
    src: vSoda,
    title: "Craft Botanical Soda — Ice & Citrus Pour Ad",
    tag: "Visual Pattern Interrupt",
    metric: "Beverage D2C · 9:16 Reels Ad",
    category: "Food & Beverage",
  },
  {
    src: vCafe,
    title: "Specialty Coffee Roastery — Morning Pour-Over Reel",
    tag: "Morning Ritual",
    metric: "Hospitality · 9:16 Reels Spot",
    category: "Food & Beverage",
  },
  {
    src: vDrink,
    title: "Berry Collagen Wellness Drink — Creator Taste-Test Ad",
    tag: "Spoken Hook + Product Proof",
    metric: "Wellness D2C · 9:16 Conversion Ad",
    category: "Food & Beverage",
  },
  {
    src: vIntro,
    title: "D2C Founder Story — Direct-to-Camera Brand Manifesto",
    tag: "Founder Story",
    metric: "Brand Launch · 9:16 Story Spot",
    category: "Introduction",
  },
  {
    src: vCream,
    title: "Barrier Repair Night Crème — Pedestal Commercial",
    tag: "Product Detail",
    metric: "Clinical Skincare · 9:16 Product Film",
    category: "Skincare & Beauty",
  },
  {
    src: vAlley,
    title: "Heavyweight 240 GSM Streetwear Tee — Urban Motion Ad",
    tag: "Natural Fabric Drape",
    metric: "Apparel Drop · 9:16 Reels Ad",
    category: "Fashion & Apparel",
  },
  {
    src: vStorefront,
    title: "Flagship Showroom Launch — Drone-to-Doorway Reveal",
    tag: "Storefront Reveal",
    metric: "Retail Flagship · 9:16 Location Ad",
    category: "Local Business & Storefront",
  },
  {
    src: vWatch,
    title: "Automatic Chronograph — Brushed Steel & Dial Close-Up",
    tag: "Dial & Case Detail",
    metric: "Luxury Horology · 9:16 Product Spot",
    category: "Jewellery & Luxury",
  },
  {
    src: iSkin,
    title: "Hydra-Glow Serum — Natural Skin Finish Keyframe",
    tag: "Natural Skin Finish",
    metric: "Beauty Campaign Still",
    media: "image" as const,
    category: "Skincare & Beauty",
  },
  {
    src: iJewellery,
    title: "Bridal Kundan & Pearl Choker — Velvet Display Still",
    tag: "Stone-Setting Detail",
    metric: "Bridal Jewellery Still",
    media: "image" as const,
    category: "Jewellery & Luxury",
  },
  {
    src: iTshirt,
    title: "Supima Cotton Essentials — Ribbed Collar & GSM Still",
    tag: "Stitch-Level Detail",
    metric: "Apparel Keyframe",
    media: "image" as const,
    category: "Fashion & Apparel",
  },
  {
    src: iBelieve,
    title: "Believe Co-Ord Loungewear — Multi-Angle Lookbook",
    tag: "Print & Fit Detail",
    metric: "Fashion Lookbook Still",
    media: "image" as const,
    category: "Fashion & Apparel",
  },
  {
    src: imgSkincare,
    title: "Botanical Apothecary Dropper — Amber Glass Still",
    tag: "Amber Glass Detail",
    metric: "Skincare Campaign Still",
    media: "image" as const,
    category: "Skincare & Beauty",
  },
  {
    src: imgBeauty2,
    title: "Saffron & Kumkumadi Elixir — Golden Hour Campaign Still",
    tag: "Warm Daylight Portrait",
    metric: "Ayurvedic Beauty Still",
    media: "image" as const,
    category: "Skincare & Beauty",
  },
  {
    src: imgFashion,
    title: "Contemporary Menswear — Outdoor Editorial Still",
    tag: "Outdoor Editorial",
    metric: "Apparel Campaign Still",
    media: "image" as const,
    category: "Fashion & Apparel",
  },
  {
    src: imgBeverage,
    title: "Sparkling Fruit Tonic — High-Speed Condensation Still",
    tag: "Label & Condensation",
    metric: "Beverage Hero Still",
    media: "image" as const,
    category: "Food & Beverage",
  },
  {
    src: imgFood,
    title: "Gourmet Dessert Plating — Texture & Glaze Hero Still",
    tag: "Dessert Plating",
    metric: "Food & Beverage Campaign Still",
    media: "image" as const,
    category: "Food & Beverage",
  },
  {
    src: imgTech,
    title: "Matte-Black Audio Hardware — Industrial Design Still",
    tag: "Industrial Design Detail",
    metric: "Consumer Tech Still",
    media: "image" as const,
    category: "Tech & Gadgets",
  },
  {
    src: vTea,
    title: "Heritage Assam Tea — Morning Cup & Aroma Story Ad",
    tag: "Household Story Hook",
    metric: "FMCG & Beverage · 9:16 Reels Ad",
    category: "Food & Beverage",
  },
  {
    src: vOats,
    title: "High-Protein Breakfast Oats — Kitchen Prep Ad",
    tag: "Morning Routine",
    metric: "Food & Wellness · 9:16 Spot",
    category: "Food & Beverage",
  },
  {
    src: vKurtaWalk,
    title: "Heritage Festive Kurta Walk",
    tag: "Festive Motion",
    metric: "Fashion & Apparel · 9:16 Film",
    category: "Fashion & Apparel",
  },
  {
    src: vChikankariHanger,
    title: "Lucknowi Chikankari Drape Reveal",
    tag: "Embroidery & Drape",
    metric: "Fashion & Apparel · 9:16 Film",
    category: "Fashion & Apparel",
  },
  {
    src: vChikankariMacro,
    title: "Chikankari Threadwork Macro Proof",
    tag: "Threadwork Detail",
    metric: "Fashion & Apparel · 9:16 Film",
    category: "Fashion & Apparel",
  },
  {
    src: vKurtaModel,
    title: "Festive Maroon Kurta Studio Film",
    tag: "Festive Lookbook",
    metric: "Fashion & Apparel · 9:16 Film",
    category: "Fashion & Apparel",
  },
  {
    src: vWhey,
    title: "Gold Whey Isolate — Gym Smoke Reveal",
    tag: "Training-Day Story",
    metric: "Food & Beverage · 9:16 Film",
    category: "Food & Beverage",
  },
  {
    src: vF1,
    title: "Night Circuit Motorsport Commercial",
    tag: "Night Circuit",
    metric: "Local Business & Storefront · 9:16 Film",
    category: "Local Business & Storefront",
  },
  {
    src: iAttar,
    title: "Al Abrar Artisanal Attar Duo — Cut-Glass & Gold Cap Campaign",
    tag: "Bottle & Label Detail",
    metric: "Luxury Fragrance Still",
    media: "image" as const,
    category: "Attar & Fragrance",
  },
];

const CREATOR_STORIES = WORK.filter(
  ({ category, title }) => category === "Introduction" || /story ad|taste-test ad|morning cup|kitchen prep/i.test(title),
);

const CAPABILITIES = [
  {
    icon: Clapperboard,
    number: "01",
    title: "Three distinct openings for every product",
    body: "A problem-led start, a sensory detail, and a customer or founder point of view—three ways into the same story, ready to test.",
    large: true,
    image: virtualStudio,
  },
  {
    icon: Lock,
    number: "02",
    title: "Product details stay in focus",
    body: "Fabric, jewellery settings, bottle labels, and packaging remain true to the references you share.",
    image: sareeHeritage,
  },
  {
    icon: Mic,
    number: "03",
    title: "A story with a beginning and a reason to act",
    body: "A spoken opening leads into close product details, natural voice direction, and a clear closing invitation.",
    image: kundanSilver,
  },
  {
    icon: Layers,
    number: "04",
    title: "Ready for the way people watch",
    body: "Vertical-first films with considered pacing, captions, sound, and versions suited to Reels, Shorts, and paid social.",
  },
];

const WORKFLOW = [
  ["01", "Share the product", "Send 2–3 existing product photos and a link to your brand or best-selling item."],
  ["02", "Shape the story", "We agree the audience, three opening angles, and the product details that matter most."],
  ["03", "Receive your films", "Your first three vertical ads arrive within 48 hours for review and a focused revision pass."],
] as const;

const DIAGNOSIS = [
  {
    title: "The physical-shoot spend",
    body: "A studio day can mean coordinating samples, couriers, models, stylists, and a location—then receiving static images or a single cut with no opening-angle plan. The process is hard to repeat when a new launch needs fresh creative.",
  },
  {
    title: "The self-serve or agency trade-off",
    body: "Generic templates can miss the very details that make a product yours. Larger retainers can bring a longer commitment and a slower production cycle when you need new creative quickly.",
  },
  {
    title: "A smaller, focused studio alternative",
    body: "Share existing product photos, then work directly with Kush to shape three different opening angles and receive three vertical ads in 48 hours—without shipping stock or taking on a retainer.",
  },
];

const COMPARISON = {
  columns: ["What matters", "Physical studio", "Traditional agency", "Kush Kumar Studio"],
  rows: [
    ["Upfront cost & commitment", "₹40,000–₹80,000 per shoot day", "₹30,000+/mo; often a multi-month commitment", "₹3,499 one-time validation batch; no retainer lock-in"],
    ["What you receive", "Static catalog photos or one slow reel", "Campaign templates and agency-managed delivery", "3 custom 9:16 video ads with 3 distinct opening hooks"],
    ["Turnaround", "Often 2–3 weeks with booking and shipping", "Typically 10–14 days per campaign cycle", "48 hours from existing product photos"],
    ["Product detail", "Strong in stills, within one physical setup", "Depends on the supplied template and crop", "Your fabric, stone setting, and label details stay central"],
    ["Who you work with", "Photographer at shoot and file handoff", "Account or campaign team", "Direct founder-to-founder collaboration with Kush"],
  ],
};

const TIERS = [
  {
    name: "48-Hour 3-Ad Validation Batch",
    badge: "TEST FIRST, SCALE SECOND",
    popular: true,
    price: { INR: "₹3,499", USD: "$36.85" },
    note: "One-time batch · No retainer lock-in",
    features: [
      "3 custom 9:16 vertical commercial video ads (20–30 seconds)",
      "3 distinct opening hooks for Meta testing",
      "Product, fabric, stone, and label details kept true to your references",
      "Spoken hook, close-up product proof, voice direction, sound, and captions",
      "Delivered within 48 hours from 2–3 existing product photos",
      "Commercial usage for Meta, Reels, Shorts, and TikTok",
    ],
    cta: "Start the validation batch",
  },
  {
    name: "Starter Creative Testing Sprint",
    badge: null,
    popular: false,
    price: { INR: "₹18,000", USD: "$189.58" },
    note: "2 hero concepts + 4 modular hooks · 6 ad assets",
    features: [
      "2 complete hero video concepts with 4 modular hook variations",
      "4-plate product still set: studio, ingredient, in-use, and lifestyle",
      "English, Hinglish, or Hindi script and voice direction",
      "Delivered within 48–72 hours",
    ],
    cta: "Choose the starter sprint",
  },
  {
    name: "Monthly Performance Creative Retainer",
    badge: null,
    popular: false,
    price: { INR: "₹35,000/mo", USD: "$368.63/mo" },
    note: "Ongoing creative production · Monthly",
    features: [
      "15 custom 9:16 commercial video ads each month",
      "Weekly opening-hook refreshes",
      "Priority 48-hour turnaround for launches and festive drops",
      "Direct founder communication with Kush",
    ],
    cta: "Discuss a monthly retainer",
  },
];

const FAQS = [
  ["Do I need to courier product samples?", "No. Clear website or phone photos of your product are enough to get started."],
  ["Will my packaging, logo, fabric border, or stone setting change?", "Your references guide the work. We keep the exact product details in focus and review them before delivery."],
  ["How does the ₹3,499 48-hour batch work?", "Share photos of one hero product. We shape three opening angles, produce three vertical video ads, and deliver the first pass within 48 hours."],
  ["Can you make ads in Hindi, Marathi, Hinglish, or English?", "Yes. Script and voice direction can be shaped for English, Hindi, Hinglish, or Marathi audiences."],
  ["Are revisions included?", "The validation batch includes a focused revision pass for pacing, captions, voice direction, or the opening framing."],
] as const;

type Currency = "INR" | "USD";
const WHATSAPP = "https://wa.me/917073777605";
const EMAIL = "kushkumarofficial06@gmail.com";
const PHONE_DISPLAY = "+91 70737 77605";
const PHONE_TEL = "tel:+917073777605";

const NAV_LINKS = [
  ["Selected Work", "#work"],
  ["Creator Stories", "#stories"],
  ["How Delivery Works", "#services"],
  ["Why Shoots Fail", "#why"],
  ["Pricing", "#pricing"],
  ["Founder Note", "#founder"],
] as const;

function Index() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [currency, setCurrency] = useState<Currency>("INR");
  const visible = useMemo(
    () => (filter === "All" ? WORK : WORK.filter((w) => w.category === filter)),
    [filter],
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    toast.success("Brief received", {
      description: "Kush will get back to you within 24 hours with next steps.",
    });
  }

  return (
    <main className="editorial-page min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="shrink-0 leading-tight" aria-label="Kush Kumar home">
            <span className="font-display text-2xl">Kush Kumar</span>
            <span className="mt-1 block text-[0.68rem] text-muted-foreground">D2C Video Ad & Commercial Studio · Jaipur, India</span>
          </a>
          <nav aria-label="Main navigation" className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-xs text-muted-foreground sm:text-sm">
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} className="transition-colors hover:text-primary" href={href}>{label}</a>
            ))}
          </nav>
          <div className="flex w-full items-center justify-between gap-3 border-t border-border pt-3 lg:w-auto lg:border-0 lg:pt-0">
            <span className="mono-tag flex items-center gap-2 text-muted-foreground"><span className="live-dot h-2 w-2 rounded-full" />Jaipur · Working worldwide</span>
            <Button asChild size="sm" className="rounded-sm bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#pricing">Book a 48h batch <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-16 pt-12 sm:px-8 md:grid-cols-[1.08fr_0.92fr] md:gap-14 md:px-12 md:pb-24 md:pt-16">
        <p className="md:col-span-2 text-center font-display text-4xl text-primary sm:text-5xl">KUSH KUMAR</p>
        <div className="relative z-10">
          <p className="mono-tag inline-flex items-center gap-2 border-l border-primary pl-3 text-primary"><Sparkles aria-hidden="true" className="h-3.5 w-3.5" />For founder-led D2C brands · No product shipping</p>
          <h1 className="mt-7 max-w-3xl font-sans text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Turn 2–3 existing product photos into <em className="font-display font-normal text-primary">3 scroll-stopping 9:16 video ads</em> in 48 hours.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
            Skip weeks coordinating models, studios, and couriers. Share the photos you already have; we keep your fabric weave, jewellery setting, and packaging typography at the heart of vertical ads made for the first three seconds.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="h-auto rounded-sm bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              <a href="#pricing">Start the 48-hour batch ({currency === "INR" ? "₹3,499" : "$36.85"}) <ArrowUpRight aria-hidden="true" /></a>
            </Button>
            <Button asChild variant="outline" className="h-auto rounded-sm border-border bg-transparent px-5 py-3.5 text-sm">
              <a href="#work">View the commercial archive <ArrowDown aria-hidden="true" /></a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
            {["True-to-reference product details", "3 opening angles per product", "48-hour first delivery", "No inventory shipping"].map((item) => <span key={item} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" />{item}</span>)}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px] md:max-w-none">
          <figure className="relative overflow-hidden border border-border bg-card">
            <img
              src={heroUgc}
              alt="Kush Kumar presenting a product in a campaign-style portrait"
              width={576}
              height={1024}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-center md:aspect-[4/5]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent px-5 pb-5 pt-20 text-background">
              <p className="mono-tag">Independent creative direction · Jaipur, India</p>
              <p className="mt-2 font-display text-2xl">From product detail to campaign film.</p>
            </figcaption>
          </figure>
          <div className="mt-4 grid grid-cols-3 divide-x divide-border border-y border-border">
            {[
              ["0:00–0:03.5", "The scroll-stopper hook"],
              ["0:03.5–0:24", "True-to-sample proof"],
              ["0:24–0:30", "Direct conversion close"],
            ].map(([time, label]) => <div key={time} className="px-3 py-3"><p className="mono-tag text-primary">{time}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{label}</p></div>)}
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-border bg-card/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mono-tag text-primary">01 / Selected commercial archive · 9:16 vertical & campaign stills</p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl leading-tight sm:text-5xl">Ads built to stop the thumb—and keep every thread, stone, and label real.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">A working archive across product films, campaign stills, and on-camera stories. Choose a vertical and press play.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter work by category">
            {FILTERS.map((f) => (
              <Button key={f} type="button" size="sm" variant={filter === f ? "default" : "outline"} aria-pressed={filter === f} onClick={() => setFilter(f)} className={filter === f ? "rounded-sm bg-primary text-primary-foreground" : "rounded-sm border-border bg-transparent text-muted-foreground hover:text-foreground"}>{f}</Button>
            ))}
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((w) => <VideoCard key={w.title} {...w} />)}
          </div>
        </div>
      </section>

      <section id="stories" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mono-tag text-primary">People, in their own voice</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Creator Stories</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">A dedicated edit of testimonials, reviews, and founder introductions from the existing archive. Real voices lead; product details follow.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CREATOR_STORIES.map((item) => <VideoCard key={`story-${item.title}`} {...item} />)}
        </div>
      </section>

      <section id="services" className="border-y border-border bg-card/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mono-tag text-primary">02 / How delivery works · From product photo to live ad</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">No courier delays. No shoot-day choreography. Just considered commercial creative.</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map(({ icon: Icon, number, title, body, large, image }, i) => (
              <Reveal key={number} delay={i * 0.06}>
                <article className={`cinema-card h-full p-5 sm:p-6 ${large ? "lg:col-span-1" : ""}`}>
                  {image && (
                    <div className="mb-5 overflow-hidden border border-border">
                      <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                          large ? "aspect-[16/9]" : "aspect-[16/7]"
                        }`}
                      />
                    </div>
                  )}
                  <p className="mono-tag text-primary">{number} / Studio practice</p>
                  <Icon aria-hidden="true" className="mt-4 h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-sans text-lg font-semibold leading-snug">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 border-t border-border pt-6">
            <p className="mono-tag text-muted-foreground">A straightforward three-step process</p>
            <ol className="mt-6 grid gap-6 md:grid-cols-3">
              {WORKFLOW.map(([number, title, body]) => <li key={number} className="border-l border-primary/50 pl-5"><p className="mono-tag text-primary">{number} / Step</p><h3 className="mt-2 font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section id="why" className="editorial-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="mono-tag text-primary">03 / The D2C studio-spend paradox</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl leading-tight sm:text-5xl">Why independent brands struggle to keep creative moving—and a more focused way to make it.</h2>
          <div className="mt-10 grid gap-0 border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
            {DIAGNOSIS.map((item, i) => <article key={item.title} className="py-6 md:px-6 md:first:pl-0 md:last:pr-0"><p className="mono-tag text-primary">0{i + 1} / Field note</p><h3 className="mt-3 font-display text-2xl leading-snug">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p></article>)}
          </div>
          <div className="mt-14">
            <p className="mono-tag text-primary">A practical comparison</p>
            <div className="mt-4 overflow-x-auto border-y border-border">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead><tr>{COMPARISON.columns.map((col, i) => <th key={col} className={`border-b border-border px-4 py-4 align-bottom font-semibold ${i === 3 ? "text-primary" : "text-muted-foreground"}`}>{col}</th>)}</tr></thead>
                <tbody>{COMPARISON.rows.map((row) => <tr key={row[0]} className="border-b border-border last:border-0">{row.map((cell, i) => <td key={i} className={`px-4 py-4 align-top leading-6 ${i === 0 ? "font-semibold" : i === 3 ? "font-medium" : "text-muted-foreground"}`}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="founder" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        <div>
          <p className="mono-tag text-primary">04 / Direct founder accountability</p>
          <p className="mt-4 font-display text-4xl leading-tight sm:text-5xl">“You work directly with me—not a hand-off.”</p>
        </div>
        <div className="lg:border-l lg:border-border lg:pl-10">
          <p className="text-base leading-8 text-muted-foreground">Hi, I’m Kush Kumar, creative director and founder in Jaipur. I built this studio for independent D2C brands across ethnic wear, jewellery, skincare, attars, and specialty food—brands looking for thoughtful commercial creative without a long shoot cycle. For every validation batch, I shape the opening angles, review product details, and share progress with you directly.</p>
          <div className="mt-7 grid gap-3 border-t border-border pt-5 text-sm sm:grid-cols-2">
            <a className="transition-colors hover:text-primary" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp · {PHONE_DISPLAY}</a>
            <a className="transition-colors hover:text-primary" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span className="text-muted-foreground">Jaipur, Rajasthan · Working with D2C brands worldwide</span>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-y border-border bg-card/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><p className="mono-tag text-primary">05 / Transparent pricing</p><h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Test first. Scale second.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">Choose a focused first batch or ongoing creative support. No retainer is required to start.</p></div>
            <div className="inline-flex border border-border p-1" aria-label="Select pricing currency">
              {(["INR", "USD"] as Currency[]).map((c) => <Button key={c} type="button" size="sm" variant={currency === c ? "default" : "ghost"} aria-pressed={currency === c} onClick={() => setCurrency(c)} className={currency === c ? "rounded-sm bg-primary text-primary-foreground" : "rounded-sm text-muted-foreground"}>{c === "INR" ? "₹ India" : "$ International"}</Button>)}
            </div>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {TIERS.map((tier, i) => <Reveal key={tier.name} delay={i * 0.06}><article className={`cinema-card flex h-full flex-col p-6 sm:p-7 ${tier.popular ? "border-primary/70" : ""}`}>
              {tier.badge && <span className="mono-tag mb-4 w-fit border-b border-primary pb-2 text-primary">{tier.badge}</span>}
              <h3 className="font-sans text-lg font-semibold leading-snug">{tier.name}</h3>
              <p className="mt-5 font-display text-4xl"><span className="text-primary">{tier.price[currency]}</span></p>
              <p className="mono-tag mt-2 text-muted-foreground">{tier.note}</p>
              <ul className="mt-6 flex-1 space-y-3">{tier.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{feature}</li>)}</ul>
              <Button asChild className={`mt-8 h-auto rounded-sm px-5 py-3.5 ${tier.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-border bg-transparent text-foreground hover:border-primary"}`} variant={tier.popular ? "default" : "outline"}><a href="#contact">{tier.cta} <ArrowUpRight aria-hidden="true" /></a></Button>
            </article></Reveal>)}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
        <div><p className="mono-tag text-primary">A few useful answers</p><h2 className="mt-3 font-display text-4xl">Before we begin</h2></div>
        <div className="divide-y divide-border border-y border-border">{FAQS.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:hidden">{question}<span className="font-mono text-primary" aria-hidden="true">+</span></summary><p className="max-w-2xl pt-3 text-sm leading-7 text-muted-foreground">{answer}</p></details>)}</div>
      </section>

      <section id="contact" className="border-t border-border bg-card/40 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="mono-tag text-primary">06 / Project brief</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Ready to give your next product story a better first three seconds?</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">Share your product and goal. You’ll hear directly from Kush with a proposed direction and timeline.</p>
            <div className="mt-8 space-y-3 border-t border-border pt-5">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 border-b border-border py-3 text-sm transition-colors hover:text-primary"><Mail aria-hidden="true" className="h-4 w-4" />{EMAIL}</a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-3 border-b border-border py-3 text-sm transition-colors hover:text-primary"><MessageCircle aria-hidden="true" className="h-4 w-4" />WhatsApp · {PHONE_DISPLAY}</a>
              <a href={PHONE_TEL} className="flex items-center gap-3 border-b border-border py-3 text-sm transition-colors hover:text-primary"><Phone aria-hidden="true" className="h-4 w-4" />Call · {PHONE_DISPLAY}</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <label className="block"><span className="mono-tag text-muted-foreground">Your name</span><input required name="name" placeholder="Name" className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" /></label>
            <label className="block"><span className="mono-tag text-muted-foreground">Brand or product link</span><input required name="link" placeholder="Website / product URL" className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" /></label>
            <label className="block"><span className="mono-tag text-muted-foreground">What are you looking to make?</span><textarea required name="goal" rows={4} placeholder="Product, audience, and campaign goal" className="mt-2 w-full resize-y rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" /></label>
            <label className="block"><span className="mono-tag text-muted-foreground">Package</span><select required name="budget" defaultValue="" className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"><option value="" disabled>Select a package</option><option value="validation">{currency === "INR" ? "₹3,499" : "$36.85"} — 48-hour 3-ad validation batch</option><option value="sprint">{currency === "INR" ? "₹18,000" : "$189.58"} — Starter 6-ad testing sprint</option><option value="retainer">{currency === "INR" ? "₹35,000/mo" : "$368.63/mo"} — 15-ad monthly retainer</option><option value="custom">Custom multi-SKU festive campaign</option></select></label>
            <Button type="submit" className="h-auto w-full rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Send project brief <ArrowUpRight aria-hidden="true" /></Button>
          </form>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-xs text-muted-foreground sm:px-8 lg:px-12">
        <span>© 2026 Kush Kumar · D2C Video Ad & Commercial Studio</span>
      </footer>
    </main>
  );
}
