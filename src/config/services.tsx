import {
  Megaphone,
  Target,
  Search,
  Globe,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { ServiceKey } from "./client";

export type ServiceMeta = {
  key: ServiceKey;
  label: string;
  short: string;
  route: string;
  icon: LucideIcon;
  accent: string;
  headline: string;
  subhead: string;
  ecosystemRole: string;
  problem: string;
  solution: string;
  pillars: { title: string; body: string }[];
  deliverables: string[];
  imageUrl: string;
  processVideo?: { title: string; description: string; url: string };
};

export const SERVICES: Record<ServiceKey, ServiceMeta> = {
  organicSocial: {
    key: "organicSocial",
    label: "Organic Social Media",
    short: "Organic Social",
    route: "/organic-social",
    icon: Megaphone,
    accent: "from-coral to-gold-500",
    headline: "The slow burn that builds the brand",
    subhead:
      "Daily content, community, and culture-building that turns followers into a fanbase ready to convert.",
    ecosystemRole:
      "Top of funnel: entertain, inform, and humanize. Builds the audience your ads will eventually retarget and your website will capture.",
    problem:
      "Sporadic posts, generic captions, and dead engagement. The feed looks like a chore instead of a brand.",
    solution:
      "A real social engine: monthly content calendars, on-site shoots, trend-driven Reels, and community management that compounds over months, not days.",
    pillars: [
      {
        title: "Native Content That Earns Attention",
        body: "Reels, carousels, Stories, and TikToks shot on location. Real food, real staff, real atmosphere. Never stock.",
      },
      {
        title: "Community Management",
        body: "Comments, DMs, and tags answered within hours. Every interaction becomes a relationship-building moment.",
      },
      {
        title: "Cultural Calendar",
        body: "Built around food holidays, local events, seasonal menus, and trending audio so the brand rides the wave instead of fighting it.",
      },
      {
        title: "Monthly Read-Outs",
        body: "Reach, engagement, follower growth, and best-performing content broken down by channel, translated into next month's plan.",
      },
    ],
    deliverables: [
      "20+ posts per brand per month across IG and TikTok",
      "8+ Reels per brand per month",
      "Daily Stories with on-brand templates",
      "On-location content shoot every six weeks",
      "Community management within a four-hour response window",
      "Monthly performance report with strategic recommendations",
    ],
    imageUrl: "/images/bts-shoot.jpeg",
    processVideo: {
      title: "What happens when you hire us",
      description:
        "A behind-the-scenes look at exactly how a Button Up Media content shoot runs, from pre-production planning through final delivery.",
      url: "/videos/how-we-work.mp4",
    },
  },

  paidSocial: {
    key: "paidSocial",
    label: "Paid Social Advertising",
    short: "Paid Social",
    route: "/paid-social",
    icon: Target,
    accent: "from-teal to-gold-500",
    headline: "The fast lane to conversions",
    subhead:
      "Conversion-focused Meta and TikTok campaigns that turn cold scrollers into reservations within days.",
    ecosystemRole:
      "Direct response: the trackable, fast-moving channel. Catches warm audiences from organic and converts them on the website.",
    problem:
      "Boosting random posts and hoping. No tracking, no audiences, no idea what's actually working. Spend evaporates without proof of return.",
    solution:
      "Full-funnel paid social on Meta and TikTok: prospecting, retargeting, and conversion campaigns powered by pixel-tracked audiences and creative built specifically for the feed.",
    pillars: [
      {
        title: "Conversion-Native Creative",
        body: "Ads built for stop-scroll, designed to drive reservations and orders, not vanity metrics.",
      },
      {
        title: "Audience Strategy",
        body: "Lookalikes from the guest list, geo-targeted prospecting, and warm retargeting funnels that move people from awareness to booking.",
      },
      {
        title: "Pixel & CAPI Tracking",
        body: "Meta Pixel and Conversions API setup with full event tracking so every reservation, order, and form fill is attributed.",
      },
      {
        title: "Weekly Optimization",
        body: "Daily monitoring, weekly creative refreshes, and budget shifts toward whatever's converting cheapest right now.",
      },
    ],
    deliverables: [
      "Meta and TikTok campaigns built and managed",
      "10+ ad creatives per brand per month, refreshed weekly",
      "Meta Pixel + Conversions API setup",
      "Custom and lookalike audiences from guest data",
      "Real-time dashboard with cost-per-reservation tracking",
      "Weekly optimization calls with the strategist",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
  },

  googleAds: {
    key: "googleAds",
    label: "Google Ads",
    short: "Google Ads",
    route: "/google-ads",
    icon: Search,
    accent: "from-gold-400 to-gold-600",
    headline: "Catch guests at the moment of decision",
    subhead:
      "Search, Performance Max, and YouTube campaigns that show up the second a guest types in 'best brunch near me.'",
    ecosystemRole:
      "Pure intent capture. The high-conversion channel that fields the guests who already know what they want.",
    problem:
      "Competitors are bidding on the brand name, and high-intent searches are sending guests to whoever pays for the click.",
    solution:
      "Branded defense, high-intent prospecting, and Performance Max campaigns that show up across Search, Maps, YouTube, and Display, wherever the guest is researching.",
    pillars: [
      {
        title: "Branded Search Defense",
        body: "Bid on brand terms so competitors can't intercept guests who already know who you are.",
      },
      {
        title: "High-Intent Keywords",
        body: "Date night, occasion dining, cuisine and city, and 'near me' queries, captured at the exact moment of decision.",
      },
      {
        title: "Performance Max & YouTube",
        body: "AI-driven campaigns spanning Search, Maps, Display, and YouTube. One campaign, every surface.",
      },
      {
        title: "Call & Reservation Tracking",
        body: "Every click tied to a reservation, call, or visit so the spend ties back to revenue.",
      },
    ],
    deliverables: [
      "Branded + non-branded Search campaigns per brand",
      "Performance Max campaign with curated assets",
      "Local Service Ads where applicable",
      "Conversion tracking for reservations, calls, and forms",
      "Negative keyword maintenance to eliminate wasted spend",
      "Monthly performance and budget allocation review",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1600&q=80",
  },

  websiteCreation: {
    key: "websiteCreation",
    label: "Website Creation",
    short: "Website",
    route: "/website",
    icon: Globe,
    accent: "from-gold-500 to-coral",
    headline: "The conversion point everything points to",
    subhead:
      "Custom-built, mobile-first sites that turn ad clicks and social followers into reservations and orders.",
    ecosystemRole:
      "The destination. Every other channel sends traffic here, so this is where the revenue lands or leaks.",
    problem:
      "A slow, dated site that buries the menu and makes booking a chore. On mobile, where most traffic lives, it falls apart.",
    solution:
      "A custom site per brand: fast, beautiful, mobile-first, and built around the conversion actions that matter: reservations, orders, and inquiries.",
    pillars: [
      {
        title: "Mobile-First Design",
        body: "Every layout starts on a phone. Tap-friendly menus, one-thumb reservation flow, and instant load times.",
      },
      {
        title: "SEO & AEO Ready",
        body: "Schema markup, structured data, and clean URLs so Google and AI search engines can recommend the brand by name.",
      },
      {
        title: "Reservation & Ordering Wired In",
        body: "OpenTable, Resy, Toast, Square integrated so guests book without leaving the site.",
      },
      {
        title: "Easy to Maintain",
        body: "A simple CMS so the team can update menus, hours, and events without calling a developer.",
      },
    ],
    deliverables: [
      "Custom design and build per brand",
      "Mobile-first responsive layouts",
      "Menu pages with full SEO and schema markup",
      "Reservation, online ordering, and events integrations",
      "Analytics + Meta Pixel + Google Tag Manager pre-installed",
      "CMS training and 30 days of post-launch support",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80",
  },

  seo: {
    key: "seo",
    label: "Search Engine Optimization",
    short: "SEO",
    route: "/seo",
    icon: TrendingUp,
    accent: "from-teal to-gold-400",
    headline: "Be the answer when guests search",
    subhead:
      "On-page, technical, local, and AI search optimization that puts the brand at the top of every search that matters.",
    ecosystemRole:
      "Compounding free traffic. Slow to start, undefeated long-term. The channel that keeps paying after spend stops.",
    problem:
      "Guests search 'best brunch in [city]' and find a competitor, even though the food is better here. Menus aren't indexed, local listings are stale, and AI assistants don't know this brand exists.",
    solution:
      "A multi-layered program: technical fixes, on-page optimization for every menu and dish, local SEO across Google Business Profile, and content that earns rankings on the searches that drive covers.",
    pillars: [
      {
        title: "Technical SEO",
        body: "Site speed, crawlability, schema markup, and Core Web Vitals fixed once and monitored monthly.",
      },
      {
        title: "Local SEO + GBP",
        body: "Google Business Profile optimization, review generation, and local citations to dominate the map pack in every market.",
      },
      {
        title: "On-Page & Content",
        body: "Menu pages, location pages, occasion pages, and city guides that own the long tail.",
      },
      {
        title: "AEO: Answer Engine Optimization",
        body: "Structured content so ChatGPT, Perplexity, and Google AI Overviews can recommend the brand by name when guests ask.",
      },
    ],
    deliverables: [
      "Full technical audit and remediation",
      "GBP optimization for every location",
      "10+ optimized location and occasion pages per brand",
      "Monthly content production aligned to keyword strategy",
      "Review generation and reputation management",
      "Monthly rank tracking and revenue attribution report",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
};

export const SERVICE_ORDER: ServiceKey[] = [
  "organicSocial",
  "paidSocial",
  "googleAds",
  "websiteCreation",
  "seo",
];
