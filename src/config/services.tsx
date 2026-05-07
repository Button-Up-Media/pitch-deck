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
  problem: string;
  solution: string;
  pillars: { title: string; body: string }[];
  deliverables: string[];
  imageUrl: string;
};

export const SERVICES: Record<ServiceKey, ServiceMeta> = {
  organicSocial: {
    key: "organicSocial",
    label: "Organic Social Media",
    short: "Organic Social",
    route: "/organic-social",
    icon: Megaphone,
    accent: "from-pink-400 to-rose-500",
    headline: "Show up where guests are scrolling",
    subhead:
      "Daily content, community management, and a brand voice that turns followers into regulars.",
    problem:
      "Sporadic posts, generic captions, and zero engagement. Your feed looks like an afterthought, and competitors with better content are stealing mindshare.",
    solution:
      "A full-service organic social engine: monthly content calendars, on-site shoots, real-time community management, and trend-driven Reels that keep every brand top of mind.",
    pillars: [
      {
        title: "Content That Looks Native",
        body: "Reels, Stories, carousels, and static posts shot on location. Real food, real staff, real atmosphere — never stock.",
      },
      {
        title: "Community Management",
        body: "Comments, DMs, and tags answered within hours. Every guest interaction becomes a relationship-building moment.",
      },
      {
        title: "Trend & Cultural Calendar",
        body: "Built around food holidays, local events, seasonal menus, and trending audio so you ride the wave instead of fighting it.",
      },
      {
        title: "Monthly Reporting",
        body: "Reach, engagement, follower growth, and best-performing content broken down per brand and per channel.",
      },
    ],
    deliverables: [
      "20+ posts per brand per month across IG and TikTok",
      "8+ Reels per brand per month",
      "Daily Stories with on-brand templates",
      "On-location content shoot every 6 weeks",
      "Community management within 4-hour response window",
      "Monthly performance report with strategic recommendations",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
  },

  paidSocial: {
    key: "paidSocial",
    label: "Paid Social Advertising",
    short: "Paid Social",
    route: "/paid-social",
    icon: Target,
    accent: "from-violet-400 to-purple-500",
    headline: "Put dollars behind the diners most likely to book",
    subhead:
      "Conversion-focused Meta and TikTok campaigns that turn cold scrollers into reservations.",
    problem:
      "Boosting random posts and hoping. No tracking, no audiences, no idea what's actually driving covers. Ad spend evaporates without proof of ROI.",
    solution:
      "Full-funnel paid social on Meta and TikTok: prospecting, retargeting, and conversion campaigns powered by pixel-tracked audiences and creative built for the feed.",
    pillars: [
      {
        title: "Conversion-Optimized Creatives",
        body: "Ad-native videos and images built for stop-scroll. Designed to drive reservations, online orders, and event bookings — not vanity metrics.",
      },
      {
        title: "Audience Strategy",
        body: "Lookalikes from your guest list, geo-targeted prospecting, and warm retargeting funnels that move guests from awareness to booking.",
      },
      {
        title: "Pixel & Conversion Tracking",
        body: "Meta Pixel and CAPI implementation with full event tracking so every reservation, order, and form fill is attributed.",
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
      "Custom and lookalike audiences built from guest data",
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
    accent: "from-amber-400 to-orange-500",
    headline: "Capture guests at the moment they're searching",
    subhead:
      "Search, Performance Max, and YouTube campaigns that catch high-intent diners ready to book tonight.",
    problem:
      "Competitors are bidding on your brand name. High-intent searches like 'best brunch near me' send guests to whoever pays for the click — and that's not you.",
    solution:
      "Branded search defense, high-intent prospecting, and Performance Max campaigns that show up across Search, Maps, YouTube, and Display — wherever the guest is researching.",
    pillars: [
      {
        title: "Branded Search Defense",
        body: "Bid on your own brand terms so competitors can't intercept guests who already know your name.",
      },
      {
        title: "High-Intent Keyword Strategy",
        body: "Date night, occasion dining, cuisine + city, and 'near me' queries — captured at the exact moment of decision.",
      },
      {
        title: "Performance Max & YouTube",
        body: "Automated Google AI campaigns spanning Search, Maps, Display, and YouTube. One campaign, every surface.",
      },
      {
        title: "Call & Reservation Tracking",
        body: "Every click tied back to a reservation, call, or visit so you see exactly which keywords drove revenue.",
      },
    ],
    deliverables: [
      "Branded + non-branded Search campaigns per brand",
      "Performance Max campaign with curated assets",
      "Google Maps Local Service Ads where applicable",
      "Conversion tracking for reservations, calls, and form fills",
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
    accent: "from-cyan-400 to-blue-500",
    headline: "A website that loads fast and converts faster",
    subhead:
      "Custom-designed, mobile-first sites built to drive reservations, orders, and event inquiries.",
    problem:
      "A slow, dated site that buries the menu and makes reservations a chore. On mobile, where 80% of traffic lives, it falls apart.",
    solution:
      "A custom website per brand — fast, beautiful, mobile-first, with reservations, online ordering, and event inquiry flows built to convert.",
    pillars: [
      {
        title: "Mobile-First Design",
        body: "Every layout starts on a phone. Tap-friendly menus, one-thumb reservation flow, and instant load times even on 4G.",
      },
      {
        title: "Reservation & Ordering Integrations",
        body: "OpenTable, Resy, Toast, Square — wired in cleanly so guests book without leaving your site.",
      },
      {
        title: "SEO-Ready Architecture",
        body: "Schema markup, structured data, fast Core Web Vitals, and clean URLs so Google indexes every menu, dish, and location page.",
      },
      {
        title: "Easy to Update",
        body: "A simple CMS so your team can update menus, hours, and events without calling a developer.",
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
    accent: "from-emerald-300 to-teal-500",
    headline: "Be the obvious answer when guests search",
    subhead:
      "On-page, technical, and local SEO that puts your menus at the top of Google for the searches that matter.",
    problem:
      "Guests search 'best brunch in [city]' and get a competitor — even though your food is better. Your menus aren't indexed, your local listings are stale, and Google has no idea you exist.",
    solution:
      "A multi-layered SEO program: technical fixes, on-page optimization for every menu and dish, local SEO across Google Business Profile, and content that earns rankings on the searches that drive covers.",
    pillars: [
      {
        title: "Technical SEO",
        body: "Site speed, crawlability, schema markup, and Core Web Vitals. The plumbing fixed once and monitored monthly.",
      },
      {
        title: "Local SEO & Google Business Profile",
        body: "GBP optimization, review generation, and local citations so you dominate the map pack in every market you operate in.",
      },
      {
        title: "On-Page & Content",
        body: "Menu page optimization, location pages, occasion pages (brunch, date night, private dining), and city guides that own the long tail.",
      },
      {
        title: "Reporting That Reads Plain English",
        body: "Rank tracking, organic traffic, and revenue attribution — explained in dollars and covers, not just impressions.",
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
