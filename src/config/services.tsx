import {
  Megaphone,
  Target,
  Search,
  Globe,
  Settings,
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
  /** Use [__] as a placeholder marker — rendered as a highlighted blank on the Value slide */
  deliverables: string[];
  imageUrl: string;
  /** "deviceMockup" renders a CSS laptop+phone hero instead of an image */
  heroVariant?: "deviceMockup";
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
      "[__] posts per brand per month across IG, TikTok, and Facebook",
      "[__] Reels per brand per month",
      "[__] Stories per month with conversion and social proof mix",
      "On-location content shoots — [__] per month",
      "Daily community management",
      "Performance reporting with strategic recommendations",
    ],
    imageUrl: "/images/bts-shoot.jpeg",
    processVideo: {
      title: "What happens when you hire us",
      description:
        "A step-by-step look at how a Button Up Media content shoot runs, from planning through delivery.",
      url: "/videos/how-we-work.mp4",
    },
  },

  googleAds: {
    key: "googleAds",
    label: "Google Ads",
    short: "Google Ads",
    route: "/google-ads",
    icon: Search,
    accent: "from-gold-400 to-gold-600",
    headline: "Catch guests the moment they decide.",
    subhead:
      "Search campaigns that put your restaurant at the top when someone types 'best brunch near me'—and track every click back to a reservation.",
    ecosystemRole:
      "Pure intent capture. The highest-conversion channel: fields guests who've already decided they want to go out and are choosing between options right now.",
    problem:
      "Competitors bidding on your brand name. High-intent searches sending guests to whoever pays the click. Campaigns too broad to measure, budget disappearing with nothing to show for it.",
    solution:
      "Branded defense, high-intent keyword campaigns, and Performance Max across Search, Maps, and YouTube. A poorly managed $5,000 campaign loses money. A well-optimized $1,500 campaign generates significant ROI. We run the second kind.",
    pillars: [
      {
        title: "Branded Search Defense",
        body: "Bid on your own brand terms so competitors can't intercept guests who already know your name. Every search for your restaurant should land on your site.",
      },
      {
        title: "Cuisine & Occasion Keywords",
        body: "Date night, private events, 'near me' queries, and cuisine-specific searches—captured at the exact moment of decision. These are people ready to book in minutes.",
      },
      {
        title: "Performance Max & Maps",
        body: "AI-driven campaigns that span Search, Maps, Display, and YouTube from a single campaign structure. One setup, every surface where guests are making decisions.",
      },
      {
        title: "Revenue-First Reporting",
        body: "Every click tied to a reservation, call, or direction request. Monthly ROAS report shows impressions, conversions, cost per conversion, and revenue tracked. No vanity metrics.",
      },
    ],
    deliverables: [
      "Google Ads campaigns: branded defense, high-intent keywords, Performance Max",
      "Local Discovery and Maps advertising",
      "Conversion tracking for reservations, calls, and forms",
      "Monthly ROI report with full ROAS visibility",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1600&q=80",
  },

  paidSocial: {
    key: "paidSocial",
    label: "Social Ads",
    short: "Social Ads",
    route: "/social-ads",
    icon: Target,
    accent: "from-teal to-gold-500",
    headline: "Put your restaurant in front of who's ready to book.",
    subhead:
      "Meta and TikTok campaigns that create demand—reaching the right local audience before they even start searching.",
    ecosystemRole:
      "Demand creation: builds awareness and intent before a guest ever searches. Works with organic content to retarget warm audiences and close the loop on private event inquiries.",
    problem:
      "Boosted posts with no targeting precision, no conversion tracking, and no optimization. Spend evaporates and there's no visibility into what it produced.",
    solution:
      "Full-funnel Meta and TikTok campaigns: local awareness, event promos, retargeting past visitors, and lead generation for private dining. Social ads don't capture demand—they create it. Every dollar tracked to a reservation or inquiry.",
    pillars: [
      {
        title: "Local Awareness & Discovery",
        body: "Put the restaurant in front of the right audience in the right radius. Location-based targeting on Meta and TikTok that builds brand awareness before guests start searching.",
      },
      {
        title: "Event & Seasonal Campaigns",
        body: "Holiday promos, special menus, and private dining campaigns timed to peak demand. The right creative, the right audience, the right window.",
      },
      {
        title: "Retargeting Past Visitors",
        body: "Website visitors, video viewers, and Instagram engagers get followed up with precision. People who already know you are far more likely to book—retargeting converts that warm intent.",
      },
      {
        title: "Private Events Lead Generation",
        body: "Form-based campaigns on Meta that capture private event inquiries directly—name, date, party size, contact—delivered as leads before they consider a competitor.",
      },
    ],
    deliverables: [
      "Meta and TikTok campaigns built and managed",
      "Conversion tracking for reservations and inquiries",
      "Monthly ROI report with full ROAS visibility",
    ],
    imageUrl: "/images/dining-scene.jpg",
  },

  websiteCreation: {
    key: "websiteCreation",
    label: "Website & SEO",
    short: "Website + SEO",
    route: "/website",
    icon: Globe,
    accent: "from-gold-500 to-coral",
    headline: "Found first. Built to convert.",
    subhead:
      "A mobile-first site designed around reservations and orders—backed by local SEO and AEO that puts you at the top of Google and AI search.",
    ecosystemRole:
      "The destination and the discovery engine. Every other channel sends traffic here, while SEO and AEO ensure new guests find you directly. This is where conversions land.",
    problem:
      "A slow, dated site that buries the menu and makes booking a chore. Guests search 'best brunch in [city]' and find a competitor—because the site isn't optimized, local listings are stale, and AI assistants don't know the restaurant exists.",
    solution:
      "A fast, beautiful, mobile-first site built around conversions: reservations, orders, and inquiries. Paired with local SEO, Google Business Profile optimization, and structured data so Google and AI search engines like ChatGPT and Perplexity recommend you by name.",
    pillars: [
      {
        title: "Mobile-First, Conversion-First",
        body: "Every layout starts on a phone. Tap-friendly menus, one-thumb reservation flow, instant load times. OpenTable, Resy, and Toast integrated so guests book without leaving the site.",
      },
      {
        title: "Local SEO & Google Business Profile",
        body: "GBP optimization, review generation, local citations, and consistent listings across every directory. 44% of clicks go to the top 3 map results. We get you there.",
      },
      {
        title: "Answer Engine Optimization (AEO)",
        body: "Structured content so Google AI Overviews, ChatGPT, and Perplexity recommend the brand by name when guests ask 'best [cuisine] near me.' The new frontier of restaurant discovery.",
      },
      {
        title: "Technical Performance & On-Page SEO",
        body: "Schema markup, Core Web Vitals, and optimized menu and location pages so Google indexes every dish. 15–20% average annual sales increase for restaurants that invest in SEO.",
      },
    ],
    deliverables: [
      "Custom website design and build, mobile-first and conversion-focused",
      "Built with SEO and AEO so you rank on Google and get recommended by AI (ChatGPT, Perplexity)",
      "Google Business Profile optimization per location",
      "On-page SEO for all menu and location pages",
      "[__] batch revisions included",
    ],
    imageUrl: "",
    heroVariant: "deviceMockup",
  },

  websiteManagement: {
    key: "websiteManagement",
    label: "Website Management",
    short: "Web Management",
    route: "/website-management",
    icon: Settings,
    accent: "from-gold-500 to-coral",
    headline: "Your site, always current.",
    subhead:
      "Landing pages for every ad campaign, batch revision cycles, and ongoing monitoring so the site never falls behind.",
    ecosystemRole:
      "The ongoing layer that keeps the website working as hard as your ads. Landing pages built specifically for each campaign dramatically improve ad performance.",
    problem:
      "Ad campaigns sending traffic to a generic homepage that wasn't built for the offer. Site updates piling up with no process to get them done efficiently.",
    solution:
      "Dedicated landing pages for every campaign so ads convert instead of leaking. Batch-format revision cycles for any changes the team needs—no single-ticket nickel-and-diming.",
    pillars: [
      {
        title: "Campaign Landing Pages",
        body: "Every Google or social ad campaign gets a dedicated landing page built and optimized for that specific offer. Generic homepages kill ad performance—purpose-built pages convert.",
      },
      {
        title: "Batch Change Cycles",
        body: "Compile everything your team needs updated—copy, photos, menus, hours—into a single list. That's one batch. Delivered on a predictable schedule, no scope creep.",
      },
      {
        title: "Ongoing Performance Monitoring",
        body: "Core Web Vitals, uptime, and conversion rate tracked monthly. If something breaks or slips, it's caught and fixed before it costs you reservations.",
      },
      {
        title: "Integrated with Ads",
        body: "Website Management and Google Ads work as one unit. Every new campaign starts with a landing page. Every landing page is built with conversion tracking wired in from day one.",
      },
    ],
    deliverables: [
      "Landing pages built for every Google and social ad campaign",
      "[__] batch changes per month",
      "Any updates delivered in a consolidated batch—submit one list, get everything done",
      "Ongoing site performance and uptime monitoring",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
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
  "googleAds",
  "paidSocial",
  "websiteCreation",
  "websiteManagement",
  "seo",
];
