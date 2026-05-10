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
  heroVariant?: "deviceMockup" | "deviceSplit" | "googleAdsSerp";
  /** Visual treatment for the pillars section — defaults to numbered cards */
  pillarLayout?: "numbered" | "grid" | "stack" | "flow";
  /** If false, this service does not get its own page/nav entry but still shows on Value slide */
  standalone?: boolean;
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
      "Mostly trust-building content. A little conversion. That's the ratio that turns followers into guests.",
    ecosystemRole:
      "Top of funnel: earns attention and affinity. Builds an audience that trusts you, likes you, and is ready to act when the time comes.",
    problem:
      "Most restaurants treat social like a billboard: posting events, pushing products, telling people how great they are. Nobody engages. That approach earns scrolls, not loyalty.",
    solution:
      "We flip the ratio. The vast majority of content earns trust by entertaining, educating, and showing real people in real moments. The smaller share converts—but only because the audience already cares.",
    pillarLayout: "grid",
    pillars: [
      {
        title: "Earn Trust First",
        body: "Our goal on social is not to sell. It's to build an audience that trusts you, finds influence from your wisdom or humor, and genuinely likes you. Only then are they interested in the next thing you share.",
      },
      {
        title: "Top-Funnel Content",
        body: "Entertaining, likable, educational content with marketing sprinkled in—never as the topic. Reels, TikToks, and carousels that grow the following and keep it engaged.",
      },
      {
        title: "Stories That Convert",
        body: "Stories run a different playbook: a balance of conversion-focused content with direct CTAs and social proof that makes people feel like they're missing out. This is where FOMO drives action.",
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
    headline: "Someone nearby is searching. Are you there?",
    subhead:
      "Restaurants operate on shorter decision cycles than any other industry. Someone searching 'Italian restaurant near me' decides in minutes—not days. Google Ads puts you in front of that person at the exact moment they choose.",
    ecosystemRole:
      "The highest-intent channel in the program. Google Ads captures guests who have already decided to go out—they're just choosing between you and a competitor. This is the fastest path to a reservation.",
    problem:
      "Most restaurant campaigns fail for one of three reasons: keywords too broad, targeting too wide, or zero conversion tracking. Budget evaporates and there's nothing to show for it. Meanwhile, competitors are actively bidding on your brand name—intercepting guests who already know you.",
    solution:
      "Every campaign answers three questions: who is the customer, what action do we want, and what does success look like in dollars. The proof: in 2025, Button Up Media drove $3.5M+ in tracked revenue across 5 restaurant properties on under $46,000 of total ad spend—roughly a 12X return. A poorly run $5,000 campaign loses money. A well-optimized $1,500 campaign generates significant ROI. We run the second kind.",
    pillars: [
      {
        title: "Search Intent Capture",
        body: "These guests aren't passively scrolling—they're deciding where to eat in the next hour. We bid on the cuisine, occasion, and 'near me' queries that signal active intent, plus brand defense so competitors can't intercept guests already searching for you.",
      },
      {
        title: "Campaign Structure",
        body: "Cuisine keywords, occasion targeting (date night, private events, brunch), geo-fencing the trade area, day-part bid adjustments for peak booking windows, and Performance Max to reach guests across Search, Maps, YouTube, and Display from a single campaign.",
      },
      {
        title: "Conversion Tracking",
        body: "Every reservation form, event inquiry, phone call, and direction request is tracked and assigned a dollar value. We don't optimize toward clicks—we optimize toward revenue. Every campaign decision answers one question: did it generate covers?",
      },
      {
        title: "Ongoing Optimization",
        body: "Daily monitoring, pausing underperformers, A/B testing creative and copy, and shifting budget to what's working. The difference between a money-losing campaign and a 12X ROAS campaign is rarely strategy—it's execution. This is where it gets made.",
      },
    ],
    deliverables: [
      "Google Ads campaigns: branded defense, high-intent keywords, Performance Max",
      "Local Discovery and Maps advertising",
      "Conversion tracking for reservations, calls, and forms",
      "Monthly ROI report with full ROAS visibility",
    ],
    imageUrl: "",
    heroVariant: "googleAdsSerp",
    pillarLayout: "stack",
  },

  paidSocial: {
    key: "paidSocial",
    label: "Social Ads",
    short: "Social Ads",
    route: "/social-ads",
    icon: Target,
    accent: "from-teal to-gold-500",
    headline: "The smart add-on, once Google is running.",
    subhead:
      "Social ads work hardest when there's already a warm audience to talk to. Layer them on top of Google to retarget the guests who searched, clicked, and almost booked.",
    ecosystemRole:
      "Retargeting layer. Feeds off the warm audiences Google Ads generates—website visitors, video viewers, and ad engagers who showed intent but didn't act. This is the second layer in the paid stack, not the first.",
    problem:
      "Running Meta and TikTok ads to a cold audience burns budget fast. Most restaurants try social ads first, target a generic local radius, and wonder why it doesn't convert. The math just doesn't work when the audience has never heard of you.",
    solution:
      "We run social as the warm retargeting layer. Someone searched on Google, clicked your ad, browsed the menu, and left without booking. Now they see your best content on Instagram. They see a reservation reminder on TikTok. That warm audience converts at a fraction of the cost of cold targeting—because the work of generating intent already happened on Google.",
    pillars: [
      {
        title: "Local Awareness & Demand Creation",
        body: "Put the restaurant in front of the right audience in the right radius before they start searching. Location-based targeting on Meta and TikTok builds brand awareness and desire—so when they do search, they already know your name.",
      },
      {
        title: "Retargeting: Bridge from Google to Booking",
        body: "Someone searches on Google, clicks your ad, browses the menu, and leaves without booking. Social retargeting follows up—showing them your best content, your best offer, or a simple reminder. This is where Google and social ads create compounding returns.",
      },
      {
        title: "Event & Seasonal Campaigns",
        body: "Holiday promos, Mother's Day, private dining, and seasonal menus—timed to peak demand with targeted creative. Our standout result: Rusty Pelican Miami Mother's Day campaign, 155 conversions at $3.06 cost per acquisition.",
      },
      {
        title: "Private Events Lead Generation",
        body: "Form-based campaigns on Meta that capture private event inquiries directly—name, date, party size, contact info—delivered as qualified leads before they consider a competitor. The highest-value conversion a restaurant ad can produce.",
      },
    ],
    deliverables: [
      "Meta and TikTok campaigns built and managed",
      "Conversion tracking for reservations and inquiries",
      "Monthly ROI report with full ROAS visibility",
    ],
    imageUrl: "/images/download-2.jpg",
    pillarLayout: "flow",
  },

  websiteCreation: {
    key: "websiteCreation",
    label: "Website",
    short: "Website",
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
    heroVariant: "deviceSplit",
    pillarLayout: "grid",
  },

  websiteManagement: {
    key: "websiteManagement",
    label: "Website Management",
    short: "Web Management",
    route: "/website-management",
    icon: Settings,
    accent: "from-gold-500 to-coral",
    standalone: false,
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
