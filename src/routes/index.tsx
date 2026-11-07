import { createFileRoute } from "@tanstack/react-router";
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
      { title: "Kush Kumar — Performance Creative Studio & Hybrid Virtual Production Lab" },
      {
        name: "description",
        content:
          "Turn your existing studio photos into 3 high-converting 9:16 video ads in 48 hours. 100% real product lock, zero inventory shipping, from ₹3,499.",
      },
      {
        property: "og:title",
        content: "Kush Kumar — Performance Creative Studio & Hybrid Virtual Production Lab",
      },
      {
        property: "og:description",
        content:
          "3 scroll-stopping 9:16 commercial video ads from your existing studio photos — delivered in 48 hours with 100% real product fidelity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* Existing contact details kept 100% intact */
const WHATSAPP = "https://wa.me/917073777605";
const EMAIL = "kushkumarofficial06@gmail.com";
const PHONE_DISPLAY = "+91 70737 77605";
const PHONE_TEL = "tel:+917073777605";

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
    title: "Acne Care Testimonial",
    tag: "LIP-SYNC BOOKEND HOOK",
    metric: "9.1% CVR ARCHITECTURE",
    lens: "3800K Studio Key",
    category: "Skincare & Beauty",
  },
  {
    src: vLeaf,
    title: "Natural Skincare Cinematic",
    tag: "85MM MACRO TEXTURE LOCK",
    metric: "4000K STUDIO FILM",
    lens: "ARRI Alexa 85mm Macro",
    category: "Skincare & Beauty",
  },
  {
    src: vPolo,
    title: "Polo Shirt Lookbook",
    tag: "100% GARMENT WEAVE LOCK",
    metric: "+2.4x CTR LOOKBOOK",
    lens: "3800K Studio Key",
    category: "Fashion & Apparel",
  },
  {
    src: vJewelry,
    title: "Palace Jewellery Campaign",
    tag: "HERITAGE HALLMARK & STONE LOCK",
    metric: "ROYAL CAMPAIGN FILM",
    lens: "ARRI Alexa 85mm Macro",
    category: "Jewellery & Luxury",
  },
  {
    src: vIceCream,
    title: "Caramel Ice Cream Pour",
    tag: "HIGH-SPEED SENSORY MACRO",
    metric: "3S CRAVING HOOK",
    lens: "1/1000s High-Speed Plate",
    category: "Food & Beverage",
  },
  {
    src: vPizza,
    title: "Chef Chicken Pizza Ad",
    tag: "COMMERCIAL TABLETOP B-ROLL",
    metric: "410k+ ORGANIC & PAID REACH",
    lens: "3800K Studio Key",
    category: "Food & Beverage",
  },
  {
    src: vSoda,
    title: "Soda Splash Ad",
    tag: "1/4000s FLUID PHYSICS",
    metric: "3S SCROLL-STOPPER",
    lens: "1/4000s High-Speed Plate",
    category: "Food & Beverage",
  },
  {
    src: vCafe,
    title: "Cafe Vibes Reel",
    tag: "AMBIENT FOLEY & PACING",
    metric: "+3.1x LOCAL REACH",
    lens: "24mm Gimbal Motion",
    category: "Food & Beverage",
  },
  {
    src: vDrink,
    title: "Pink Drink Review",
    tag: "VOICE-NOTE B-ROLL HYBRID",
    metric: "+3.8x ROAS ANGLE",
    lens: "3800K Studio Key",
    category: "Food & Beverage",
  },
  {
    src: vIntro,
    title: "Brand Introduction Spot",
    tag: "FOUNDER-DIRECT HOOK",
    metric: "STUDIO COMMERCIAL GRADE",
    lens: "3800K Studio Key",
    category: "Introduction",
  },
  {
    src: vCream,
    title: "Skincare Crème Studio Spot",
    tag: "ZERO-DRIFT PACKAGING LOCK",
    metric: "LUXURY PEDESTAL FILM",
    lens: "ARRI Alexa 85mm Macro",
    category: "Skincare & Beauty",
  },
  {
    src: vAlley,
    title: "Streetwear Alley Walk",
    tag: "24MM GIMBAL MOTION",
    metric: "TRUE-TO-SAMPLE DRAPE",
    lens: "24mm Gimbal Motion",
    category: "Fashion & Apparel",
  },
  {
    src: vStorefront,
    title: "Aerial Storefront Reveal",
    tag: "SPATIAL LOCATION HOOK",
    metric: "FOOTFALL CONVERSION AD",
    lens: "Aerial Drone Plate",
    category: "Local Business & Storefront",
  },
  {
    src: vWatch,
    title: "Luxury Wristwatch Reveal",
    tag: "CHRONOGRAPH BEZEL MACRO",
    metric: "CHIAROSCURO RIM LIGHT",
    lens: "ARRI Alexa 85mm Macro",
    category: "Jewellery & Luxury",
  },
  {
    src: iSkin,
    title: "Glass Skin Close-Up",
    tag: "MICRO-PORE OPTICAL PORTRAIT",
    metric: "HERO CAMPAIGN STILL",
    lens: "3800K Studio Key",
    media: "image" as const,
    category: "Skincare & Beauty",
  },
  {
    src: iJewellery,
    title: "Kundan Set on Velvet Bust",
    tag: "100% KUNDAN & ZARI LOCK",
    metric: "HERITAGE JEWELLERY PLATE",
    lens: "ARRI Alexa 85mm Macro",
    media: "image" as const,
    category: "Jewellery & Luxury",
  },
  {
    src: iTshirt,
    title: "Premium Tee Poster",
    tag: "FABRIC GSM & STITCH LOCK",
    metric: "EDITORIAL CAMPAIGN STILL",
    lens: "3800K Studio Key",
    media: "image" as const,
    category: "Fashion & Apparel",
  },
  {
    src: iBelieve,
    title: "Believe Loungewear Lookbook",
    tag: "VIRTUAL STUDIO PRODUCTION",
    metric: "MULTI-ANGLE LOOKBOOK",
    lens: "Virtual Studio Plate",
    media: "image" as const,
    category: "Fashion & Apparel",
  },
  {
    src: imgSkincare,
    title: "Serum Ritual Frame",
    tag: "BOTANICAL INGREDIENT PLATE",
    metric: "AMBER GLASS REFRACTION",
    lens: "ARRI Alexa 85mm Macro",
    media: "image" as const,
    category: "Skincare & Beauty",
  },
  {
    src: imgBeauty2,
    title: "Beauty Glow Concept",
    tag: "3800K GOLDEN HOUR KEY",
    metric: "NATURAL DERMAL TEXTURE",
    lens: "3800K Studio Key",
    media: "image" as const,
    category: "Skincare & Beauty",
  },
  {
    src: imgFashion,
    title: "Apparel Street Concept",
    tag: "DAYLIGHT EDITORIAL PLATE",
    metric: "EXACT PATTERN LOCK",
    lens: "Daylight Editorial Plate",
    media: "image" as const,
    category: "Fashion & Apparel",
  },
  {
    src: imgBeverage,
    title: "Beverage Splash Still",
    tag: "HIGH-SPEED LIQUID MACRO",
    metric: "LABEL TYPOGRAPHY LOCK",
    lens: "1/4000s High-Speed Plate",
    media: "image" as const,
    category: "Food & Beverage",
  },
  {
    src: imgFood,
    title: "Food Craving Still",
    tag: "ARTISANAL PLATING MACRO",
    metric: "SENSORY HOOK STILL",
    lens: "ARRI Alexa 85mm Macro",
    media: "image" as const,
    category: "Food & Beverage",
  },
  {
    src: imgTech,
    title: "Gadget Hero Still",
    tag: "ANODIZED HARDWARE MACRO",
    metric: "STUDIO RIM LIGHTING",
    lens: "3800K Studio Key",
    media: "image" as const,
    category: "Tech & Gadgets",
  },
  {
    src: vTea,
    title: "Taj Mahal Tea Testimonial",
    tag: "LIP-SYNC BOOKEND HOOK",
    metric: "FMCG TESTIMONIAL FILM",
    lens: "3800K Studio Key",
    category: "Food & Beverage",
  },
  {
    src: vOats,
    title: "Protein Oats UGC Review",
    tag: "FOUNDER-STYLE UGC HOOK",
    metric: "KITCHEN DEMO PLATE",
    lens: "24mm Gimbal Motion",
    category: "Food & Beverage",
  },
  {
    src: vKurtaWalk,
    title: "Heritage Kurta Walk",
    tag: "100% GARMENT WEAVE LOCK",
    metric: "HERITAGE WALK FILM",
    lens: "24mm Gimbal Motion",
    category: "Fashion & Apparel",
  },
  {
    src: vChikankariHanger,
    title: "Chikankari Hanger Reveal",
    tag: "CHIKANKARI EMBROIDERY LOCK",
    metric: "SHOWROOM DRAPE FILM",
    lens: "3800K Studio Key",
    category: "Fashion & Apparel",
  },
  {
    src: vChikankariMacro,
    title: "Chikankari Embroidery Macro",
    tag: "85MM MACRO EMBROIDERY LOCK",
    metric: "STITCH-LEVEL PROOF PLATE",
    lens: "ARRI Alexa 85mm Macro",
    category: "Fashion & Apparel",
  },
  {
    src: vKurtaModel,
    title: "Maroon Kurta Showcase",
    tag: "VIRTUAL STUDIO PRODUCTION",
    metric: "MODEL SHOWCASE FILM",
    lens: "3800K Studio Key",
    category: "Fashion & Apparel",
  },
  {
    src: vWhey,
    title: "Gold Whey Gym Reveal",
    tag: "ZERO-DRIFT PACKAGING LOCK",
    metric: "SMOKE RIG REVEAL FILM",
    lens: "3800K Studio Key",
    category: "Food & Beverage",
  },
  {
    src: vF1,
    title: "Hyperspeed F1 Track Plate",
    tag: "HYPERSPEED TRACK CAMERA PLATE",
    metric: "MOTORSPORT NIGHT FILM",
    lens: "Telephoto Track Follow",
    category: "Local Business & Storefront",
  },
  {
    src: iAttar,
    title: "Al Abrar Attar Duo",
    tag: "GOLD CAP & LABEL TYPOGRAPHY LOCK",
    metric: "HERITAGE FRAGRANCE PLATE",
    lens: "3800K Studio Key",
    media: "image" as const,
    category: "Attar & Fragrance",
  },
];

const CREATOR_STORIES = WORK.filter(
  ({ category, title }) =>
    category === "Introduction" || /testimonial|review/i.test(title),
);

const HERO_PILLS = [
  { icon: Lock, text: "100% Real Product, Zari & Label Lock" },
  { icon: Camera, text: "85mm Macro Optical Physics (Zero Uncanny Look)" },
  { icon: Timer, text: "48-Hour Flat Turnaround" },
  { icon: Box, text: "Zero Physical Sample Shipping" },
];

const HERO_METRICS = [
  ["100% REAL PRODUCT LOCK", "Zero Print, Zari, or Label Distortion"],
  ["3 HOOK VARIATIONS / SKU", "Built to Beat Meta Creative Fatigue"],
  ["48-HOUR DELIVERY", "Directly From Your Existing Website Photos"],
  ["80% COST REDUCTION", "Vs. ₹50,000+ Physical Studio Reshoots"],
];

const TIMELINE = [
  {
    time: "0:00–0:04",
    label: "LIP-SYNC BOOKEND HOOK",
    detail: "28–35% Thumb-Stop Pattern Interrupt",
  },
  {
    time: "0:04–0:24",
    label: "85MM MACRO PRODUCT PROOF",
    detail: "100% Real Weave, Stone & Packaging Lock + Voice Note",
  },
  {
    time: "0:24–0:30",
    label: "DIRECT CONVERSION CTA",
    detail: "Engineered for Meta Advantage+ & Reels ROAS",
  },
] as const;

const CAPABILITIES = [
  {
    icon: Clapperboard,
    title: "48-Hour 3-Ad Conversion Validation Batch",
    body: "3 complete 9:16 commercial video ads testing 3 distinct hook archetypes (Skeptical Comparison, Visual Problem-Agitate, ASMR Sensory Craving) built from your existing product photos.",
    large: true,
    image: virtualStudio,
  },
  {
    icon: Layers,
    title: "100% Real Product & Textile Lock Architecture",
    body: "Dual-keyframe optical locking ensures complex Banarasi/Chikankari weaves, Kundan/925 silver filigree, and skincare typography never morph or drift across frames.",
    large: false,
    image: sareeHeritage,
  },
  {
    icon: Mic,
    title: "Lip-Sync Bookend + 85mm Macro B-Roll Direction",
    body: "On-camera spoken hook (0:00–0:03.5) cuts into hyper-detailed 85mm macro product proof under a continuous founder/consumer voice note (0:03.5–0:24) and a direct conversion sign-off (0:24–0:30).",
    large: false,
  },
  {
    icon: Camera,
    title: "4-Plate Commercial Product Staging",
    body: "Studio pedestal, raw botanical/material ingredient staging, lifestyle model integration, and heritage architectural environments in 4K resolution.",
    large: false,
    wide: true,
    image: kundanSilver,
  },
];

const VERTICALS = [
  "1. Ethnic Wear, Sarees & Handlooms",
  "2. Heritage Jewellery & 925 Silver",
  "3. Clinical Skincare, Haircare & Attars",
  "4. Gourmet Food, Specialty Coffee & Festive Gifting",
];

const DIAGNOSIS = [
  {
    title: "The ₹40,000–₹80,000 Physical Studio Trap",
    body: "Independent D2C founders across Ethnic Wear & Handlooms, 925 Silver & Heritage Jewellery, Clinical Skincare & Attars, and Artisanal Food/Gifting routinely spend ₹40,000 to ₹80,000 ($3,500+) per studio day on models, photographers, stylists, and lighting. Yet a physical studio only gives you static catalog lookbook photos or a single slow-panning reel with zero 3-second psychological hooks. Within 5 days on Meta Ads, creative fatigue hits and your new arrivals sit at '0 reviews'.",
  },
  {
    title: "Why Cheap 'AI Generators' & Retainer Agencies Fail You",
    body: "Self-serve generator tools warp your product's zari border, mutate bottle labels mid-clip, and produce uncanny rubbery jaw movement that destroys brand trust. Meanwhile, traditional marketing agencies lock you into ₹30,000+/month retainers for 3 months just to send recycled Canva graphics.",
  },
  {
    title: "The Kush Kumar Hybrid Virtual Production Solution",
    body: "Led by Kush Kumar, our studio acts as your external Algorithmic Creative Testing Sandbox. You send us 2–3 existing studio or smartphone photos of your hero SKU on WhatsApp — zero physical shipping required. Using our Dual-Keyframe Optical Lock and Lip-Sync Bookend + 85mm Macro B-Roll architecture, we preserve 100% of your authentic weave, stone hallmark, and packaging typography, delivering 3 scroll-stopping 9:16 video ads in 48 hours.",
  },
];

const COMPARISON = {
  columns: [
    "Comparison Metric",
    "Physical Photography Studio (₹40k–₹80k / $3.5k+)",
    "Traditional Marketing Agency (₹25k–₹45k/mo)",
    "Kush Kumar Hybrid Lab",
  ],
  rows: [
    [
      "Upfront Cost & Risk",
      "₹40,000–₹80,000 per shoot day (studio rent, model, MUA)",
      "₹30,000+/mo fixed retainer + 3-month lock-in",
      "₹3,499 / $36.85 3-Ad Validation Batch — Zero lock-in risk",
    ],
    [
      "Deliverable Output",
      "Static lookbook photos or 1 slow reel with zero hook testing",
      "Slow static Canva graphics & recycled templates",
      "3 Custom 9:16 Video Ads with 3 distinct 3-second psychological hooks",
    ],
    [
      "Turnaround Speed",
      "2 to 3 weeks (shipping samples, booking, retouching)",
      "10 to 14 days per campaign revision cycle",
      "48 Hours Flat — built directly from your existing website/studio photos",
    ],
    [
      "Product & Craft Fidelity",
      "High in still photos, frozen in 1 lighting setup",
      "Crops or distorts product details in generic templates",
      "100% Real Product Lock (exact zari weave, stone hallmark, bottle label)",
    ],
    [
      "Founder Access",
      "Photographer exits after file delivery; zero ad strategy",
      "Managed by junior account executives",
      "Direct 2-Minute Strategy Call with Kush Kumar",
    ],
  ],
};

type Currency = "INR" | "USD";

const TIERS = [
  {
    name: "48-Hour 3-Ad Validation Batch",
    badge: "TEST FIRST, SCALE SECOND",
    popular: true,
    price: { INR: "₹3,499", USD: "$36.85" },
    note: "One-Time Validation Batch (No Retainer Lock-In)",
    features: [
      "3 × Custom 9:16 Vertical Commercial Video Ads (20s–30s)",
      "3 Distinct 3-Second Psychological Hooks for Meta A/B Testing",
      "100% Real Product, Weave, Stone & Label Fidelity Lock",
      "Lip-Sync Bookend + 85mm Macro B-Roll + Synchronized Foley & Captions",
      "Delivered in 48 Hours Flat from 2–3 Smartphone or Website Photos",
      "Bonus: Free 5-Second Visual Hook Preview Before You Scale",
    ],
    cta: "Claim 48-Hour Validation Batch →",
  },
  {
    name: "Starter Creative Testing Sprint",
    badge: null,
    popular: false,
    price: { INR: "₹18,000", USD: "$189.58" },
    note: "2 Hero Concepts + 4 Modular Hooks (6 Ad Assets Total)",
    features: [
      "2 Complete Hero Video Concepts + 4 Modular 3-Second Hook Variations (6 Ad Assets Total)",
      "4-Plate 4K Virtual Studio Product Photoshoot (Studio, Ingredient, In-Use, Lifestyle)",
      "Hinglish or English Direct-Response Script & Voiceover Engineering",
      "Delivered in 48–72 Hours",
    ],
    cta: "Book Starter Testing Sprint →",
  },
  {
    name: "Monthly Performance Creative Retainer",
    badge: null,
    popular: false,
    price: { INR: "₹35,000/mo", USD: "$368.63/mo" },
    note: "Replaces ₹50,000–₹80,000/mo in physical studio shoots",
    features: [
      "15 Custom 9:16 Commercial Video Ads Every Month",
      "Continuous Weekly Hook Refresh to Eliminate Meta Ad Fatigue",
      "Priority 48-Hour Turnaround Across New Launches & Festive Drops",
      "Direct Founder-to-Founder WhatsApp/Slack Comms Channel",
    ],
    cta: "Apply for Monthly Retainer →",
  },
];

const NAV_LINKS = [
  ["Work", "#work"],
  ["Creator Stories", "#stories"],
  ["Approach", "#services"],
  ["About", "#about"],
  ["Pricing", "#pricing"],
  ["Contact", "#contact"],
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
    <main className="editorial-page relative min-h-screen overflow-x-hidden bg-background">

      {/* Sticky 3D Glass Navigation */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8 lg:px-12">
          <div className="shrink-0">
            <p className="font-display text-2xl font-bold uppercase">
              <span className="text-foreground">Kush Kumar</span>
            </p>
            <p className="hidden text-xs text-muted-foreground sm:block">
              Independent creative studio
            </p>
          </div>

          <nav aria-label="Main navigation" className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-xs text-muted-foreground sm:gap-x-5 sm:text-sm">
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} className="transition-colors hover:text-primary" href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Editorial cover */}
      <section className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-8 px-5 pb-14 pt-10 sm:px-8 md:grid-cols-[1fr_0.8fr] md:gap-12 md:px-12 md:pb-20 md:pt-14">
        <div className="relative z-10 md:py-10">
          <Reveal>
            <span className="mono-tag inline-flex items-center gap-2 border-l-2 border-primary pl-3 text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Independent creative studio · Made for founder-led brands
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 font-display text-6xl font-normal leading-[0.92] sm:text-7xl lg:text-8xl">
              KUSH
              <br />
              <span className="text-primary">KUMAR</span>
            </h1>
            <p className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
              Your products, told in motion.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Turn your existing studio photos into three high-converting 9:16 video ads in 48
              hours. Garment weave, jewellery hallmark, and packaging detail stay at the heart of
              every frame.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#work" className="btn-gold inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5">
                Explore selected work <ArrowDown className="h-4 w-4" />
              </a>
              <a href="#pricing" className="inline-flex items-center gap-2 border border-foreground/25 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
                48-hour, 3-ad batch <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-border pt-5 sm:grid-cols-4">
            {HERO_METRICS.map(([label, text]) => (
              <div key={label}>
                <p className="mono-tag text-primary">{label}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <Reveal delay={0.1} className="relative mx-auto w-full max-w-[520px] md:max-w-none">
          <div className="relative overflow-hidden bg-secondary">
            <img
              src={heroUgc}
              alt="Kush Kumar presenting a product in a campaign-style portrait"
              width={576}
              height={1024}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-center md:aspect-[4/5]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent px-5 pb-5 pt-20 text-background">
              <p className="mono-tag">The studio, in motion</p>
              <p className="mt-2 font-display text-2xl">From product detail to campaign film.</p>
            </div>
          </div>
          <p className="mt-2 flex justify-between text-[0.65rem] uppercase text-muted-foreground">
            <span>Performance creative</span><span>01 / 06</span>
          </p>
        </Reveal>
      </section>

      {/* Selected Work */}
      <section id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="mono-tag text-gold">Verified Commercial Output • 9:16 Vertical-First</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Selected Commercial & Hybrid Production Work
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Every piece is engineered for Meta Ads Manager, Instagram Reels, and YouTube Shorts
              with strict optical lens physics, tactile foley audio, and 3-second hook retention.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`mono-tag rounded-full border px-4 py-2 transition-colors ${
                filter === f
                  ? "border-transparent btn-gold font-bold"
                  : "border-border bg-surface text-muted-foreground backdrop-blur-md hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((w) => (
            <VideoCard key={w.title} {...w} />
          ))}
        </div>
      </section>

      {/* Services — Hybrid Architecture */}
      <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="mono-tag text-gold">Core Studio Capabilities</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            Hybrid Virtual Production Architecture
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map(({ icon: Icon, title, body, large, wide, image }, i) => (
            <Reveal key={title} delay={i * 0.07} className={large ? "lg:col-span-2 lg:row-span-2" : wide ? "lg:col-span-2" : ""}>
              <Tilt className="h-full" max={6}>
                <div className="cinema-card cinema-card-hover group flex h-full flex-col overflow-hidden p-8">
                  {image && (
                    <div className="mb-6 overflow-hidden rounded-[1.4rem]">
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
                  <Icon className={`text-gold ${large ? "h-9 w-9" : "h-7 w-7"}`} />
                  <h3 className={`mt-6 font-bold ${large ? "text-3xl sm:text-4xl" : "text-xl"}`}>
                    {title}
                  </h3>
                  <p
                    className={`mt-3 text-muted-foreground ${large ? "max-w-lg text-base" : "text-sm"}`}
                  >
                    {body}
                  </p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        {/* 4 Core Verticals Badge Strip */}
        <Reveal delay={0.1}>
          <div className="glass mt-10 flex flex-wrap items-center justify-center gap-3 p-6">
            <p className="mono-tag w-full text-center text-muted-foreground">
              Core D2C & Festive Verticals
            </p>
            {VERTICALS.map((v) => (
              <span
                key={v}
                className="mono-tag rounded-full border border-gold/30 bg-surface px-4 py-2 text-gold"
              >
                {v}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* About & Problem-First Diagnosis */}
      <section id="why" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="mono-tag text-gold">About Kush Kumar • The D2C Studio-Spend Paradox</p>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Why Craft-First D2C Brands Bleed Budget on Physical Studio Shoots — And How Our Hybrid
            Lab Fixes It in 48 Hours.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {DIAGNOSIS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <Tilt className="h-full" max={6}>
                <div className="cinema-card cinema-card-hover h-full p-8">
                  <p className="mono-tag text-gold">Diagnosis {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-lg font-bold leading-snug">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        {/* Interactive 3D Comparison Matrix */}
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-x-auto rounded-[2rem]">
            <table className="w-full min-w-[900px] border-separate border-spacing-1.5 text-left text-sm">
              <thead>
                <tr>
                  {COMPARISON.columns.map((c, i) => (
                    <th
                      key={c}
                      className={`p-4 text-xs font-semibold uppercase tracking-wide ${
                        i === 3
                          ? "rounded-2xl border border-gold/50 bg-surface text-gold gold-ring"
                          : "text-muted-foreground"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`p-4 align-top leading-relaxed ${
                          ci === 0
                            ? "font-semibold text-foreground"
                            : ci === 3
                              ? "rounded-2xl border border-gold/50 bg-surface text-foreground"
                              : "text-muted-foreground"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* Pricing & Validation */}
      <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="text-center">
            <p className="mono-tag text-gold">Transparent Pricing • Trojan Horse Validation Batch</p>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-extrabold sm:text-4xl">
              Test Before You Scale. No Retainer Lock-In.
            </h2>
            <div className="mt-7 inline-flex rounded-full border border-border bg-surface p-1 backdrop-blur-md">
              {(["INR", "USD"] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`mono-tag rounded-full px-5 py-2 transition-colors ${
                    currency === c ? "btn-gold font-bold" : "text-muted-foreground hover:text-gold"
                  }`}
                >
                  {c === "INR" ? "₹ India D2C" : "$ International D2C"}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <Tilt className="h-full" max={6}>
                <div
                  className={`cinema-card relative flex h-full flex-col p-8 ${
                    t.popular ? "border-gold/60 gold-ring" : ""
                  }`}
                >
                  {t.badge && (
                    <span className="mono-tag absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full btn-gold px-4 py-1.5 font-bold">
                      {t.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold leading-snug">{t.name}</h3>
                  <p className="mt-4 font-display text-4xl font-extrabold">
                    <span className="text-gold-gradient">{t.price[currency]}</span>
                  </p>
                  <p className="mono-tag mt-2 text-muted-foreground">{t.note}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                      t.popular ? "btn-gold gold-ring" : "glass text-foreground hover:text-gold"
                    }`}
                  >
                    {t.cta}
                  </a>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact — 2-Minute Founder Call */}
      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="glass grid gap-12 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Ready to Beat Your Static Catalog Ads in 48 Hours?
              </h2>
              <p className="mt-5 text-muted-foreground">
                Share your product and goal — you'll get a creative direction and timeline back.
              </p>

              {/* Direct 2-Minute Call Banner */}
              <div className="mt-8 rounded-2xl border border-gold/40 bg-surface p-5 gold-ring">
                <p className="text-sm leading-relaxed text-foreground">
                  Prefer a fast founder-to-founder chat? Send 2–3 photos of your #1 bestseller SKU
                  on WhatsApp or hop on a direct 2-minute call with Kush Kumar (
                  <a href={PHONE_TEL} className="font-semibold text-gold hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                  ) — we'll map out your 3 custom hook angles on the spot.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 rounded-2xl border border-border px-5 py-4 text-sm transition-colors hover:border-gold hover:text-gold"
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL}
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border px-5 py-4 text-sm transition-colors hover:border-gold hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp — quick reply
                </a>
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-3 rounded-2xl border border-border px-5 py-4 text-sm transition-colors hover:border-gold hover:text-gold"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY} — direct 2-minute founder call
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                name="name"
                placeholder="Your name"
                className="w-full rounded-2xl border border-border bg-background/40 px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
              />
              <input
                required
                name="link"
                placeholder="Brand website / product link"
                className="w-full rounded-2xl border border-border bg-background/40 px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
              />
              <textarea
                required
                name="goal"
                rows={4}
                placeholder="Project goal"
                className="w-full resize-none rounded-2xl border border-border bg-background/40 px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
              />
              <select
                required
                name="budget"
                defaultValue=""
                className="w-full rounded-2xl border border-border bg-background/40 px-5 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-gold"
              >
                <option value="" disabled>
                  Budget / Package Selection
                </option>
                <option value="validation">₹3,499 / $36.85 — 48-Hour 3-Ad Validation Batch</option>
                <option value="sprint">₹18,000 / $189.58 — Starter Creative Testing Sprint</option>
                <option value="retainer">
                  ₹35,000/mo / $368.63/mo — 15-Ad Monthly Retainer
                </option>
                <option value="custom">Custom Multi-SKU Festive Campaign</option>
              </select>
              <button
                type="submit"
                className="btn-gold w-full rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:-translate-y-0.5 gold-ring"
              >
                Send Project Brief
              </button>
            </form>
          </div>
        </Reveal>
      </section>

      <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-12 text-center text-xs text-muted-foreground">
        © 2026 Kush Kumar — Performance Creative Studio & Hybrid Virtual Production Lab. All
        Rights Reserved.
      </footer>
    </main>
  );
}
