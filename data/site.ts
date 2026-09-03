import { Locale } from "@/data/i18n";

// Locale-independent
export const brand = "Petkovic Solutions";
export const contact = { email: "info@petkovicsolutions.com" };

type SiteContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    card: {
      label: string;
      title: string;
      body: string;
      reviewedLabel: string;
      reviewedBody: string;
      bestFitLabel: string;
      bestFitBody: string;
    };
  };
  proof: string[];
  services: { eyebrow: string; title: string; description: string };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    stepWord: string;
    steps: { title: string; description: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    hero: {
      eyebrow: "Boutique web studio for service businesses",
      title: "Websites and landing pages built to win more qualified inquiries.",
      subtitle:
        "We help service businesses look sharper online, earn trust faster, and turn more visitors into real leads.",
      primaryCta: "Get a free website audit",
      secondaryCta: "See live work",
      card: {
        label: "What the audit covers",
        title: "Clear fixes before you commit to a full rebuild.",
        body: "The first pass is not about style alone. It is about finding the credibility gaps, weak sections, and missed conversion points that hold the site back.",
        reviewedLabel: "What gets reviewed",
        reviewedBody:
          "Positioning, trust signals, CTA flow, offer clarity, mobile structure, and overall first impression.",
        bestFitLabel: "Best fit",
        bestFitBody:
          "Service businesses that already have traffic, referrals, or outreach, but need a stronger online presentation.",
      },
    },
    proof: [
      "Live work in beauty and local services",
      "Clear positioning, copy direction and conversion structure",
      "Optional AI add-ons for lead capture and FAQ handling",
    ],
    services: {
      eyebrow: "What we offer",
      title: "A focused offer that is easy to understand and easy to buy.",
      description:
        "We keep the offer narrow on purpose: strong websites, high-intent landing pages, and lightweight AI tools that support the sales flow instead of distracting from it.",
    },
    process: {
      eyebrow: "How we work",
      title: "A small, hands-on process built for speed and clarity.",
      description:
        "Clients do not need a complicated agency experience. They need a clear plan, good execution, and someone who follows through.",
      stepWord: "Step",
      steps: [
        {
          title: "Audit and positioning",
          description:
            "We start with the offer, the audience, and the gaps in your current presentation before touching visuals.",
        },
        {
          title: "Structure and build",
          description:
            "We shape the page around trust, clarity, and action so the site does more than just look modern.",
        },
        {
          title: "Launch and refine",
          description:
            "After launch, the site stays easy to update and ready for outreach, ads, or future additions.",
        },
      ],
    },
    cta: {
      eyebrow: "Start with clarity",
      title: "Get a direct website audit before you commit to a full build.",
      description:
        "We review your current site or outreach page, point out the biggest credibility and conversion issues, and recommend the fastest path to a stronger version.",
      primaryCta: "Request your audit",
      secondaryCta: "Email us",
    },
  },

  sr: {
    hero: {
      eyebrow: "Boutique web studio za uslužne biznise",
      title: "Sajtovi i landing stranice napravljeni da donesu više ozbiljnih upita.",
      subtitle:
        "Pomažemo uslužnim biznisima da izgledaju ozbiljnije, brže steknu poverenje i pretvore više posetilaca u prave upite.",
      primaryCta: "Besplatan pregled sajta",
      secondaryCta: "Pogledaj radove",
      card: {
        label: "Šta pregled obuhvata",
        title: "Jasne ispravke pre nego što uložiš u kompletnu izradu.",
        body: "Prvi prolaz nije samo o izgledu. Cilj je da nađemo gde gubiš poverenje, koje sekcije ne rade i gde ti izmiču upiti.",
        reviewedLabel: "Šta se pregleda",
        reviewedBody:
          "Pozicioniranje, signali poverenja, tok poziva na akciju, jasnoća ponude, mobilna struktura i celokupni prvi utisak.",
        bestFitLabel: "Kome najviše koristi",
        bestFitBody:
          "Uslužnim biznisima koji već imaju posetioce, preporuke ili kampanje, ali im treba ubedljiviji nastup na internetu.",
      },
    },
    proof: [
      "Živi radovi u lepoti i lokalnim uslugama",
      "Jasno pozicioniranje, smer teksta i konverziona struktura",
      "Opcioni AI dodaci za prikupljanje upita i odgovaranje na česta pitanja",
    ],
    services: {
      eyebrow: "Šta nudimo",
      title: "Fokusirana ponuda koju je lako razumeti i lako kupiti.",
      description:
        "Namerno držimo ponudu uskom: jaki sajtovi, landing stranice sa jasnom namerom i laki AI alati koji podržavaju prodaju umesto da odvlače pažnju.",
    },
    process: {
      eyebrow: "Kako radimo",
      title: "Mali, praktičan proces napravljen za brzinu i jasnoću.",
      description:
        "Klijentima ne treba komplikovano agencijsko iskustvo. Treba im jasan plan, dobra izrada i neko ko dovede posao do kraja.",
      stepWord: "Korak",
      steps: [
        {
          title: "Pregled i pozicioniranje",
          description:
            "Počinjemo od ponude, publike i propusta u tvom trenutnom nastupu, pre nego što diramo vizuelni deo.",
        },
        {
          title: "Struktura i izrada",
          description:
            "Oblikujemo stranicu oko poverenja, jasnoće i akcije, da sajt radi više od toga da samo izgleda moderno.",
        },
        {
          title: "Objava i doterivanje",
          description:
            "Posle objave, sajt ostaje lak za izmene i spreman za kampanje, oglase ili buduće dodatke.",
        },
      ],
    },
    cta: {
      eyebrow: "Počni od jasnoće",
      title: "Zatraži direktan pregled sajta pre nego što uložiš u kompletnu izradu.",
      description:
        "Pregledamo tvoj postojeći sajt ili stranicu, ukažemo na najveće probleme sa poverenjem i konverzijom i preporučimo najbrži put do jače verzije.",
      primaryCta: "Zatraži pregled",
      secondaryCta: "Pošalji mejl",
    },
  },
};
