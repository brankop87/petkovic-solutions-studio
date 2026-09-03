import { Locale } from "@/data/i18n";

type PagesContent = {
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    lead2: string;
    principleWord: string;
    principles: string[];
    bestFitLabel: string;
    bestFitBody: string;
    cta: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    includeLabel: string;
    extras: string[];
    cta: string;
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    conceptDirections: string;
    conceptNote: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    directEmailLabel: string;
    helpsLabel: string;
    helpsBody: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sending: string;
    submit: string;
    success: string;
    error: string;
  };
};

export const pages: Record<Locale, PagesContent> = {
  en: {
    about: {
      eyebrow: "About",
      title: "A small studio with a direct, hands-on way of working.",
      lead: "Petkovic Solutions builds websites and landing pages for service businesses that need better positioning, a stronger first impression, and a clearer path to inquiries.",
      lead2:
        "The goal is not to feel like a big agency. The goal is to be useful, responsive, and reliable from the first conversation to the final handoff.",
      principleWord: "Principle",
      principles: [
        "Clarity beats noise. A visitor should understand the offer fast.",
        "Credibility matters. Design has to make the business feel trustworthy.",
        "Follow-through matters. Good service does not end after launch.",
      ],
      bestFitLabel: "Best fit clients",
      bestFitBody:
        "Service businesses, local brands, and founder-led companies that know their current website is holding them back.",
      cta: "Request a free website audit",
    },
    services: {
      eyebrow: "Services",
      title: "Focused offers that are easy to explain and easy to buy.",
      intro:
        "The service stack stays intentionally narrow. That makes the offer clearer, the work stronger, and the final product more useful for the kind of businesses you want to reach.",
      includeLabel: "What can be included",
      extras: [
        "Homepage messaging and structure",
        "Responsive development in Next.js",
        "Lead-focused contact flow",
        "Optional AI chatbot or FAQ support",
      ],
      cta: "Tell us what you need",
    },
    work: {
      eyebrow: "Work",
      title: "Stronger project framing, stronger studio perception.",
      intro:
        "Projects should not read like gallery cards. They should explain what needed to improve, what the work focused on, and why the final result matters for the business.",
      conceptDirections: "Concept directions",
      conceptNote: "Useful for showing range, but clearly separated from live work",
    },
    contact: {
      eyebrow: "Contact",
      title: "Start with a free website audit.",
      lead: "Send your current website, landing page, or offer details. The goal is to identify the biggest credibility and conversion gaps before any build starts.",
      directEmailLabel: "Direct email",
      helpsLabel: "What helps most",
      helpsBody:
        "Your website link, your niche, what feels weak right now, and what kind of leads or clients you want more of.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder:
        "Tell us about your business, current site, and what you want to improve.",
      sending: "Sending...",
      submit: "Request audit",
      success: "Message sent successfully.",
      error: "Something went wrong. Please try again.",
    },
  },

  sr: {
    about: {
      eyebrow: "O nama",
      title: "Mali studio sa direktnim, praktičnim načinom rada.",
      lead: "Petkovic Solutions pravi sajtove i landing stranice za uslužne biznise kojima treba bolje pozicioniranje, jači prvi utisak i jasniji put do upita.",
      lead2:
        "Cilj nije da deluje kao velika agencija. Cilj je da budemo korisni, dostupni i pouzdani od prvog razgovora do konačne predaje.",
      principleWord: "Princip",
      principles: [
        "Jasnoća pobeđuje buku. Posetilac treba brzo da razume ponudu.",
        "Poverenje je bitno. Dizajn mora da učini da biznis deluje pouzdano.",
        "Doslednost je bitna. Dobra usluga se ne završava objavom.",
      ],
      bestFitLabel: "Kome najviše odgovara",
      bestFitBody:
        "Uslužni biznisi, lokalni brendovi i firme koje vodi osnivač, a znaju da ih trenutni sajt koči.",
      cta: "Zatraži besplatan pregled sajta",
    },
    services: {
      eyebrow: "Usluge",
      title: "Fokusirane ponude koje je lako objasniti i lako kupiti.",
      intro:
        "Spisak usluga je namerno uzak. To čini ponudu jasnijom, rad jačim, a krajnji proizvod korisnijim za biznise koje želiš da dosegneš.",
      includeLabel: "Šta može biti uključeno",
      extras: [
        "Poruka i struktura početne strane",
        "Responzivna izrada u Next.js-u",
        "Kontakt tok fokusiran na upite",
        "Opcioni AI chatbot ili podrška za česta pitanja",
      ],
      cta: "Reci nam šta ti treba",
    },
    work: {
      eyebrow: "Radovi",
      title: "Jače predstavljanje projekata, jači utisak o studiju.",
      intro:
        "Projekti ne treba da izgledaju kao galerijske kartice. Treba da objasne šta je trebalo poboljšati, na šta je rad bio fokusiran i zašto je krajnji rezultat važan za biznis.",
      conceptDirections: "Konceptni smerovi",
      conceptNote: "Korisno za prikaz raspona, ali jasno odvojeno od živih radova",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Počni od besplatnog pregleda sajta.",
      lead: "Pošalji svoj trenutni sajt, landing stranicu ili detalje ponude. Cilj je da nađemo najveće propuste u poverenju i konverziji pre nego što izrada počne.",
      directEmailLabel: "Direktan mejl",
      helpsLabel: "Šta najviše pomaže",
      helpsBody:
        "Link sajta, tvoja niša, šta ti trenutno deluje slabo i kakve upite ili klijente želiš više.",
      namePlaceholder: "Tvoje ime",
      emailPlaceholder: "Tvoj mejl",
      messagePlaceholder:
        "Reci nam o svom biznisu, trenutnom sajtu i šta želiš da poboljšaš.",
      sending: "Šalje se...",
      submit: "Zatraži pregled",
      success: "Poruka je uspešno poslata.",
      error: "Nešto nije u redu. Pokušaj ponovo.",
    },
  },
};
