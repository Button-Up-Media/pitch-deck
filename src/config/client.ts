/**
 * THE ONLY FILE YOU NEED TO EDIT TO CREATE A NEW PITCH DECK.
 *
 * Workflow per client:
 *   1. Update `client` with the client's details + the problems you uncovered
 *      in the discovery call
 *   2. Add/remove brands in `brands` (supports 1, 2, 3+)
 *   3. Toggle services on/off based on what's being pitched
 *   4. Set per-service prices on the Value slide
 *   5. Set bundle pricing (or leave null to render blank lines)
 */

export type Brand = {
  name: string;
  city: string;
  cuisine: string;
  imageUrl: string;
};

export type ServiceKey =
  | "organicSocial"
  | "paidSocial"
  | "googleAds"
  | "websiteCreation"
  | "seo";

export type ServiceConfig = {
  enabled: boolean;
  monthlyPrice: number;
};

/** Two common starting points for the kind of clients we work with. */
export type ClientPath = "wordOfMouth" | "burnedByPriorAgency" | "custom";

/** What the client actually wants their marketing to do. */
export type GrowthGoal = "acquisition" | "brandValidity" | "retention";

export type Config = {
  client: {
    name: string;
    shortName: string;
    industry: string;
    preparedFor: string;
    decisionDate: string;
    /** Where the client is starting from (drives the Opportunities page) */
    path: ClientPath;
    /** What outcome they actually care about most */
    primaryGoal: GrowthGoal;
  };
  agency: {
    name: string;
    tagline: string;
    contactEmail: string;
    contactPhone: string;
    /** Hero stats — shown on the cover. Edit per pitch if needed. */
    stats: { value: string; label: string }[];
  };
  brands: Brand[];
  services: Record<ServiceKey, ServiceConfig>;
  bundle: {
    enabled: boolean;
    monthlyPrice: number | null;
    setupFee: number | null;
    contractMonths: number | null;
  };
};

export const config: Config = {
  client: {
    name: "Client Restaurant Group",
    shortName: "Client",
    industry: "Hospitality",
    preparedFor: "Client Leadership Team",
    decisionDate: "Q3 2026",
    path: "wordOfMouth",
    primaryGoal: "acquisition",
  },

  agency: {
    name: "Button Up Media",
    tagline: "Marketing built for hospitality",
    contactEmail: "hello@buttonupmedia.com",
    contactPhone: "(555) 123-4567",
    stats: [
      { value: "50+", label: "Restaurants Served" },
      { value: "80M+", label: "Social Media Views" },
      { value: "12X", label: "Avg Return on Ad Spend" },
      { value: "90%", label: "Client Retention" },
    ],
  },

  brands: [
    {
      name: "Brand One",
      city: "Primary Market",
      cuisine: "Modern American",
      imageUrl:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "Brand Two",
      city: "Secondary Market",
      cuisine: "Coastal Kitchen",
      imageUrl:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
    },
  ],

  services: {
    organicSocial: { enabled: true, monthlyPrice: 2500 },
    paidSocial: { enabled: true, monthlyPrice: 3500 },
    googleAds: { enabled: false, monthlyPrice: 3000 },
    websiteCreation: { enabled: true, monthlyPrice: 0 },
    seo: { enabled: false, monthlyPrice: 2000 },
  },

  bundle: {
    enabled: true,
    monthlyPrice: null,
    setupFee: null,
    contractMonths: 6,
  },
};
