/**
 * THE ONLY FILE YOU NEED TO EDIT TO CREATE A NEW PITCH DECK.
 *
 * Workflow:
 *   1. Update `client` with the new client's details.
 *   2. Add/remove brands in `brands` (supports 1, 2, 3, or more).
 *   3. Toggle `enabled: true/false` on each service to match the discovery call.
 *   4. Toggle `bundle.enabled` if pitching the all-in-one package.
 *   5. Adjust pricing in `scope` to match the proposal.
 */

export type Brand = {
  name: string;
  tagline: string;
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
    preparedBy: string;
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
    monthlyPrice: number;
    savings: number;
  };
  scope: {
    setupFee: number;
    contractMonths: number;
    startDate: string;
  };
};

export const config: Config = {
  client: {
    name: "Client Restaurant Group",
    shortName: "Client",
    industry: "Hospitality",
    preparedFor: "Client Leadership Team",
    preparedBy: "Button Up Media",
    decisionDate: "Q3 2026",
  },

  agency: {
    name: "Button Up Media",
    tagline: "Marketing built for hospitality",
    contactEmail: "hello@buttonupmedia.com",
    contactPhone: "(555) 123-4567",
  },

  // Add or remove brands freely. Template renders 1, 2, 3+ brands.
  brands: [
    {
      name: "Brand One",
      tagline: "Signature dining experience",
      city: "Primary Market",
      cuisine: "Modern American",
      imageUrl:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "Brand Two",
      tagline: "Casual everyday concept",
      city: "Secondary Market",
      cuisine: "Coastal Kitchen",
      imageUrl:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
    },
  ],

  // Toggle services on/off depending on what was discussed in the discovery call.
  services: {
    organicSocial: { enabled: true, monthlyPrice: 2500 },
    paidSocial: { enabled: true, monthlyPrice: 3500 },
    googleAds: { enabled: false, monthlyPrice: 3000 },
    websiteCreation: { enabled: true, monthlyPrice: 0 },
    seo: { enabled: false, monthlyPrice: 2000 },
  },

  // Bundle = Organic Social + Paid Ads + Website. Three-channel package.
  bundle: {
    enabled: true,
    monthlyPrice: 6500,
    savings: 1500,
  },

  scope: {
    setupFee: 5000,
    contractMonths: 6,
    startDate: "30 days from signature",
  },
};
