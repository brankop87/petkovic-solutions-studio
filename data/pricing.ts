export type PricingTier = {
  name: string;
  price: string;
  note?: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

export const pricing = {
  eyebrow: "Pricing",
  title: "Clear starting points, not surprise invoices.",
  description:
    "Every project is quoted after a short audit, so you only pay for what the work actually needs. These are honest starting points so you know the range before we talk.",
  currencyNote: "Prices in USD. UK clients: roughly the same figure in GBP.",

  tiers: [
    {
      name: "Landing page",
      price: "from $1,200",
      tagline: "One focused page built to turn interest into inquiries.",
      features: [
        "Single custom landing page",
        "Clear CTA and offer structure",
        "Contact / inquiry form",
        "Mobile-first build",
      ],
    },
    {
      name: "Business website",
      price: "from $3,000",
      note: "Typical projects land $4k–$6k with scope.",
      tagline: "A complete, credibility-building site for service businesses.",
      features: [
        "5–7 custom pages",
        "Homepage, services, about, contact",
        "Conversion-focused structure",
        "Mobile-first build + basic SEO",
      ],
      highlight: true,
      badge: "Most popular",
    },
    {
      name: "AI add-on",
      price: "from $600",
      note: "From $1,000 as a standalone build.",
      tagline: "A chatbot and lead capture that work while you sleep.",
      features: [
        "FAQ / support chatbot",
        "Lead capture flow",
        "Trained on your business",
        "Add to any website build",
      ],
    },
  ] as PricingTier[],

  footnote:
    "Final pricing depends on scope. Optional care plan — updates and hosting — from $80/mo.",

  cta: {
    label: "Request a quote",
    href: "/kontakt",
  },
};
