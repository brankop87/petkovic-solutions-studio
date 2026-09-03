import { Locale } from "@/data/i18n";

export type PricingTier = {
  name: string;
  price: string;
  note?: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

type PricingContent = {
  eyebrow: string;
  title: string;
  description: string;
  currencyNote: string;
  tiers: PricingTier[];
  footnote: string;
  cta: { label: string; href: string };
};

export const pricing: Record<Locale, PricingContent> = {
  en: {
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
    ],
    footnote:
      "Final pricing depends on scope. Optional care plan — updates and hosting — from $80/mo.",
    cta: { label: "Request a quote", href: "/kontakt" },
  },

  sr: {
    eyebrow: "Cene",
    title: "Jasne polazne cene, bez iznenađenja na računu.",
    description:
      "Svaki projekat se procenjuje posle kratkog pregleda, pa plaćaš samo ono što posao stvarno zahteva. Ovo su poštene polazne cene da znaš okvir pre razgovora.",
    currencyNote: "Cene u evrima. Konačna cena zavisi od obima.",
    tiers: [
      {
        name: "Landing stranica",
        price: "od €400",
        tagline: "Jedna fokusirana strana koja pretvara interesovanje u upite.",
        features: [
          "Jedna landing strana po meri",
          "Jasna struktura poziva na akciju",
          "Kontakt / upit forma",
          "Mobile-first izrada",
        ],
      },
      {
        name: "Sajt za biznis",
        price: "od €900",
        note: "Tipični projekti padnu €1.100–1.500 sa obimom.",
        tagline: "Kompletan sajt koji gradi poverenje, za uslužne biznise.",
        features: [
          "5–7 strana po meri",
          "Početna, usluge, o nama, kontakt",
          "Struktura fokusirana na konverziju",
          "Mobile-first + osnovni SEO",
        ],
        highlight: true,
        badge: "Najpopularnije",
      },
      {
        name: "AI dodatak",
        price: "od €250",
        note: "Od €500 kao samostalna izrada.",
        tagline: "Chatbot i prikupljanje upita koji rade dok spavaš.",
        features: [
          "Chatbot za česta pitanja / podršku",
          "Tok za prikupljanje upita",
          "Obučen za tvoj biznis",
          "Dodaje se uz bilo koju izradu",
        ],
      },
    ],
    footnote:
      "Konačna cena zavisi od obima. Opciono održavanje — izmene i hosting — od €30/mes.",
    cta: { label: "Zatraži ponudu", href: "/kontakt" },
  },
};
