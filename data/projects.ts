import { Locale } from "@/data/i18n";

export type ProjectType = "Live" | "Concept";

export type Project = {
  name: string;
  description: string;
  href: string;
  type: ProjectType;
  niche: string;
  image: string;
  challenge: string;
  focus: string;
  outcome: string;
  deliverables: string[];
};

export const projects: Record<Locale, Project[]> = {
  en: [
    {
      name: "Noor Beauty Center",
      description:
        "Live beauty website designed to feel premium, credible, and conversion-oriented from the first screen.",
      href: "https://noor-beauty-center.vercel.app/",
      type: "Live",
      niche: "Beauty / Med Spa Style",
      image: "/images/projects/noor.png",
      challenge:
        "Create a polished first impression for a beauty business where trust, taste, and presentation directly affect perceived value.",
      focus: "Premium visual tone, cleaner service presentation, and a softer path toward booking intent.",
      outcome:
        "A more refined and client-facing brand presence that looks ready for paid traffic, social traffic, and direct referrals.",
      deliverables: ["Homepage direction", "Service sections", "Trust-focused UI"],
    },
    {
      name: "Marko Prevoznik",
      description:
        "Live local-service website with a clearer offer, stronger trust signals, and a more credible business presentation.",
      href: "https://marko-prevoznik.vercel.app/",
      type: "Live",
      niche: "Transport / Local Services",
      image: "/images/projects/marko-prevoznik.png",
      challenge:
        "Make a practical local-service business feel more organized, serious, and easier to contact without overdesigning it.",
      focus: "Offer clarity, stronger hierarchy, direct CTA placement, and a layout that supports fast decision-making.",
      outcome:
        "A more credible service-business website that communicates trust faster and makes outreach traffic less likely to bounce.",
      deliverables: ["Landing structure", "Offer clarity", "Conversion-first CTA flow"],
    },
    {
      name: "The Cannon",
      description:
        "Live content blog with early organic visits, built as a sharper editorial platform for Arsenal stories and matchday reading.",
      href: "https://arsenal.petkovicsolutions.com/",
      type: "Live",
      niche: "Content / SEO",
      image: "/images/projects/the-cannon.svg",
      challenge:
        "Create a content-led website that feels more like a focused editorial product than a basic blog archive.",
      focus:
        "Readable story hierarchy, stronger category navigation, recurring article structure, and a visual tone built for repeat visits.",
      outcome:
        "An owned content platform that started attracting real visits early, showing how useful content can support long-term visibility and trust.",
      deliverables: ["Editorial structure", "SEO-friendly content layout", "Early traffic proof"],
    },
    {
      name: "Meridian Properties",
      description:
        "Concept direction for a premium real-estate brand focused on presentation, hierarchy, and perceived value.",
      href: "/demos/demo-realestate.html",
      type: "Concept",
      niche: "Real Estate",
      image: "/images/projects/meridian-properties.png",
      challenge:
        "Explore how a real-estate brand can feel more expensive and structured without relying on generic luxury clichés.",
      focus: "Hierarchy, whitespace, restrained typography, and a more editorial property-brand feel.",
      outcome: "A concept that shows range in premium positioning and high-value presentation.",
      deliverables: ["Visual direction", "Premium layout", "Concept UI system"],
    },
    {
      name: "APEX Fitness",
      description:
        "Concept landing experience for a fitness brand with stronger energy, contrast, and offer-driven sections.",
      href: "/demos/demo-gym.html",
      type: "Concept",
      niche: "Fitness",
      image: "/images/projects/apex-fitness.png",
      challenge:
        "Push a fitness concept toward a bolder conversion style without making it feel messy or over-stimulated.",
      focus: "Sharper contrast, stronger momentum, and sections built around action instead of decoration.",
      outcome: "A concept that shows the ability to shift tone by niche while keeping the site purposeful.",
      deliverables: ["High-energy concept", "Offer-led sections", "Visual contrast system"],
    },
  ],

  sr: [
    {
      name: "Noor Beauty Center",
      description:
        "Živ sajt za salon lepote, osmišljen da deluje premium, ubedljivo i usmereno ka konverziji od prvog ekrana.",
      href: "https://noor-beauty-center.vercel.app/",
      type: "Live",
      niche: "Lepota / Med Spa",
      image: "/images/projects/noor.png",
      challenge:
        "Napraviti uglađen prvi utisak za biznis u lepoti, gde poverenje, ukus i prezentacija direktno utiču na percepciju vrednosti.",
      focus: "Premium vizuelni ton, čistija prezentacija usluga i blaži put ka zakazivanju.",
      outcome:
        "Prefinjeniji brend nastup spreman za plaćeni saobraćaj, društvene mreže i direktne preporuke.",
      deliverables: ["Smer početne strane", "Sekcije usluga", "UI fokusiran na poverenje"],
    },
    {
      name: "Marko Prevoznik",
      description:
        "Živ sajt lokalne usluge sa jasnijom ponudom, jačim signalima poverenja i ubedljivijom prezentacijom biznisa.",
      href: "https://marko-prevoznik.vercel.app/",
      type: "Live",
      niche: "Transport / Lokalne usluge",
      image: "/images/projects/marko-prevoznik.png",
      challenge:
        "Da praktičan lokalni biznis deluje organizovanije, ozbiljnije i lakše za kontakt, bez preteranog dizajna.",
      focus: "Jasnoća ponude, jača hijerarhija, direktan poziv na akciju i raspored koji podržava brzu odluku.",
      outcome:
        "Ubedljiviji sajt uslužnog biznisa koji brže gradi poverenje i smanjuje odlazak posetilaca.",
      deliverables: ["Struktura landing strane", "Jasnoća ponude", "Tok poziva na akciju usmeren na konverziju"],
    },
    {
      name: "The Cannon",
      description:
        "Živ blog sa sadržajem i ranim organskim posetama, napravljen kao oštrija uređivačka platforma za priče o Arsenalu i čitanje na dan utakmice.",
      href: "https://arsenal.petkovicsolutions.com/",
      type: "Live",
      niche: "Sadržaj / SEO",
      image: "/images/projects/the-cannon.svg",
      challenge:
        "Napraviti sajt vođen sadržajem koji deluje kao fokusiran uređivački proizvod, a ne obična arhiva blogova.",
      focus:
        "Čitljiva hijerarhija priča, jača navigacija po kategorijama, ponovljiva struktura članaka i vizuelni ton za ponovne posete.",
      outcome:
        "Sopstvena platforma za sadržaj koja je rano počela da privlači prave posete, pokazujući kako koristan sadržaj gradi dugoročnu vidljivost i poverenje.",
      deliverables: ["Uređivačka struktura", "SEO-prijateljski raspored sadržaja", "Dokaz rane posećenosti"],
    },
    {
      name: "Meridian Properties",
      description:
        "Konceptni smer za premium brend nekretnina, fokusiran na prezentaciju, hijerarhiju i percepciju vrednosti.",
      href: "/demos/demo-realestate.html",
      type: "Concept",
      niche: "Nekretnine",
      image: "/images/projects/meridian-properties.png",
      challenge:
        "Istražiti kako brend nekretnina može delovati skuplje i struktuiranije bez oslanjanja na generičke klišee luksuza.",
      focus: "Hijerarhija, prazan prostor, suzdržana tipografija i uređivački osećaj brenda nekretnina.",
      outcome: "Koncept koji pokazuje raspon u premium pozicioniranju i prezentaciji visoke vrednosti.",
      deliverables: ["Vizuelni smer", "Premium raspored", "Konceptni UI sistem"],
    },
    {
      name: "APEX Fitness",
      description:
        "Konceptna landing stranica za fitnes brend sa više energije, kontrasta i sekcija vođenih ponudom.",
      href: "/demos/demo-gym.html",
      type: "Concept",
      niche: "Fitnes",
      image: "/images/projects/apex-fitness.png",
      challenge:
        "Pomeriti fitnes koncept ka smelijem konverzionom stilu, a da ne deluje haotično ili prenatrpano.",
      focus: "Oštriji kontrast, jači zamah i sekcije građene oko akcije umesto dekoracije.",
      outcome: "Koncept koji pokazuje sposobnost menjanja tona po niši, uz zadržavanje svrhe sajta.",
      deliverables: ["Koncept visoke energije", "Sekcije vođene ponudom", "Sistem vizuelnog kontrasta"],
    },
  ],
};

export const projectsSection: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    live: string;
    challenge: string;
    focus: string;
    outcome: string;
    conceptDirections: string;
    conceptNote: string;
    concept: string;
  }
> = {
  en: {
    eyebrow: "Selected work",
    title: "Real client work, framed with more intention.",
    intro:
      "Premium perception comes from how the work is presented, not just from how it looks. The strongest signal here is balance and control.",
    live: "Live",
    challenge: "Challenge",
    focus: "Focus",
    outcome: "Outcome",
    conceptDirections: "Concept directions",
    conceptNote: "Visual range, clearly separated from live client work",
    concept: "Concept",
  },
  sr: {
    eyebrow: "Izabrani radovi",
    title: "Rad za prave klijente, predstavljen sa više namere.",
    intro:
      "Premium utisak dolazi od toga kako je rad predstavljen, ne samo kako izgleda. Najjači signal ovde su ravnoteža i kontrola.",
    live: "Uživo",
    challenge: "Izazov",
    focus: "Fokus",
    outcome: "Rezultat",
    conceptDirections: "Konceptni smerovi",
    conceptNote: "Vizuelni raspon, jasno odvojen od radova za prave klijente",
    concept: "Koncept",
  },
};
