/**
 * THE ONLY FILE YOU NEED TO EDIT TO CREATE A NEW PITCH DECK.
 *
 * Workflow per client:
 *   1. Update `client` with the new client's details
 *   2. Add/remove brands in `brands` (supports 1, 2, 3+ brands)
 *   3. On each service set `enabled: true/false` based on the discovery call
 *   4. Set per-service prices in `monthlyPrice` (used on the Value slide)
 *   5. Set bundle pricing fields (or leave at 0 to fill in by hand later)
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

export type Config = {
  client: {
    name: string;
    shortName: string;
    industry: string;
    preparedFor: string;
    decisionDate: string;
  };
  agency: {
    name: string;
    tagline: string;
    contactEmail: string;
    contactPhone: string;
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
  },

  agency: {
    name: "Button Up Media",
    tagline: "Marketing built for hospitality",
    contactEmail: "hello@buttonupmedia.com",
    contactPhone: "(555) 123-4567",
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

  // Toggle services on/off depending on what was discussed in the discovery call.
  // monthlyPrice is shown on the Value slide. Set to 0 to leave it blank.
  services: {
    organicSocial: { enabled: true, monthlyPrice: 2500 },
    paidSocial: { enabled: true, monthlyPrice: 3500 },
    googleAds: { enabled: false, monthlyPrice: 3000 },
    websiteCreation: { enabled: true, monthlyPrice: 0 },
    seo: { enabled: false, monthlyPrice: 2000 },
  },

  // Bundle = "all-in-one" pitch on the final slide.
  // Leave any field as null to render a blank line for the salesperson to fill in.
  bundle: {
    enabled: true,
    monthlyPrice: null,
    setupFee: null,
    contractMonths: 6,
  },
};
