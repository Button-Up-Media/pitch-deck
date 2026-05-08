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
    headline: "You have to earn someone's care.",
    subhead:
      "95% trust-building content, 5% conversion. That's the ratio that turns followers into guests.",
    ecosystemRole:
      "Top of funnel: earns attention and affinity. Builds an audience that trusts you, likes you, and is ready to act when the time comes.",
    problem:
      "Most restaurants treat social like a billboard: posting events, pushing products, telling people how great they are. Nobody engages. That approach earns scrolls, not loyalty.",
    solution:
      "We flip the ratio. 95% of content earns trust by entertaining, educating, and showing real people in real moments. The other 5% converts, but only because the audience already cares.",
    pillars: [
      {
        title: "Earn Trust First",
        body: "Our goal on social is not to sell. It's to build an audience that trusts you, finds influence from your wisdom or humor, and genuinely likes you. Only then are they interested in the next thing you share.",
      },
      {
        title: "Top Funnel Content (95%)",
        body: "Entertaining, likable, educational content with marketing sprinkled in, never as the topic. Reels, TikToks, and carousels that grow the following and keep it engaged.",
      },
      {
        title: "Stories That Convert (50/50)",
        body: "Stories run a different playbook: 50% conversion-focused content with direct CTAs, 50% social proof that makes people feel like they're missing out. This is where FOMO drives action.",
      },
      {
        title: "Social Proof & Community",
        body: "Reposting real people dining, tagging, and sharing their experience. No conversion links needed. Real people enjoying the experience says more than any ad ever could.",
      },
    ],
    deliverables: [
      "20+ posts per brand per month across IG and TikTok",
      "8+ Reels per brand per month",
      "Daily Stories with conversion and social proof mix",
      "On-location content shoot every six weeks",
      "Community management within a four-hour response window",
      "Monthly performance report with strategic recommendations",
    ],
    imageUrl: "/images/bts-shoot.jpeg",
    processVideo: {
      title: "What happens when you hire us",
      description:
        "A step-by-step look at how a Button Up Media content shoot runs, from planning through delivery.",
      url: "/videos/how-we-work.mp4",
    },
  },

  paidSocial: {
    key: "paidSocial",
    label: "Paid Advertising",
    short: "Paid Ads",
    route: "/paid-advertising",
    icon: Target,
    accent: "from-teal to-gold-500",
    headline: "When you need customers this week, advertising is the fastest lever.",
    subhead:
      "Conversion-focused campaigns across Google, Meta, and TikTok that capture people actively deciding where to eat.",
    ecosystemRole:
      "Direct response: captures high-intent guests through search and puts your restaurant in front of ready-to-act audiences on social. The fastest channel to fill seats.",
    problem:
      "Boosting random posts and hoping. Running Google Ads with keywords too broad, targeting too wide, and no conversion tracking. Spend evaporates without proof of return.",
    solution:
      "Full-funnel advertising: Google Ads capture people searching 'best brunch near me' right now, while Meta and TikTok ads warm up the next wave. Every dollar tracked to a reservation, call, or inquiry.",
    pillars: [
      {
        title: "Google Ads: Capture Intent",
        body: "When someone searches 'Italian restaurant near me,' they decide in minutes. We bid on cuisine keywords, occasion targeting, geo-fencing, and brand protection to be there at the moment of decision.",
      },
      {
        title: "Meta & TikTok Ads: Create Demand",
        body: "Social ads put your restaurant in front of the right audience before they search. Local awareness, event promos, retargeting past visitors, and lead generation for private events.",
      },
      {
        title: "Retargeting & Local Discovery",
        body: "Website visitors, video viewers, and ad engagers get followed up with precision. Maps placement and local pack ads drive foot traffic from people already nearby.",
      },
      {
        title: "ROI Reporting in Plain English",
        body: "Every conversion type tracked: reservations, calls, directions, online orders. Monthly reports show impressions, clicks, conversions, cost per conversion, and ROAS.",
      },
    ],
    deliverables: [
      "Google Ads campaigns: branded defense, high-intent keywords, Performance Max",
      "Meta and TikTok campaigns built and managed",
      "Retargeting campaigns across all platforms",
      "Local Discovery and Maps advertising",
      "Conversion tracking for reservations, calls, and forms",
      "Monthly ROI report with full ROAS visibility",
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
    label: "Website & SEO",
    short: "Website + SEO",
    route: "/website",
    icon: Globe,
    accent: "from-gold-500 to-coral",
    headline: "The conversion point that also gets found.",
    subhead:
      "Custom-built, mobile-first sites designed for conversions, backed by local SEO that puts you at the top of every search that matters.",
    ecosystemRole:
      "The destination and the discovery engine. Every other channel sends traffic here, and SEO ensures new guests find you directly. This is where revenue lands.",
    problem:
      "A slow, dated site that buries the menu and makes booking a chore. On top of that, guests search 'best brunch in [city]' and find a competitor because the site isn't optimized and local listings are stale.",
    solution:
      "A fast, beautiful, mobile-first site built around conversions: reservations, orders, and inquiries. Paired with local SEO, Google Business Profile optimization, and structured data so Google and AI search engines recommend you by name.",
    pillars: [
      {
        title: "Mobile-First, Conversion-First",
        body: "Every layout starts on a phone. Tap-friendly menus, one-thumb reservation flow, instant load times. OpenTable, Resy, Toast integrated so guests book without leaving the site.",
      },
      {
        title: "Local SEO & Google Business Profile",
        body: "GBP optimization, review generation, local citations, and consistent listings across every directory. 44% of clicks go to the top 3 map results. We get you there.",
      },
      {
        title: "On-Page SEO & Structured Data",
        body: "Schema markup, clean URLs, and optimized menu pages so Google indexes every dish. AI search engines like ChatGPT and Perplexity can recommend you by name.",
      },
      {
        title: "Technical Performance & Monitoring",
        body: "Core Web Vitals, site speed, crawlability fixed once and monitored monthly. Plus ongoing content production aligned to keyword strategy.",
      },
    ],
    deliverables: [
      "Custom website design and build per brand",
      "Mobile-first responsive layouts with reservation/ordering integrations",
      "Full technical SEO audit and remediation",
      "Google Business Profile optimization per location",
      "On-page SEO for all menu and location pages",
      "Schema markup and structured data implementation",
      "Monthly rank tracking and performance report",
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
