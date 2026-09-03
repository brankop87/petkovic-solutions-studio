import { Locale } from "@/data/i18n";

export type Service = { title: string; description: string };

export const services: Record<Locale, Service[]> = {
  en: [
    {
      title: "Custom websites",
      description:
        "Clean, trust-building websites for service businesses that need a stronger first impression and a clearer offer.",
    },
    {
      title: "Landing pages",
      description:
        "Focused pages built for outreach, ads, or specific offers where the only goal is to turn interest into inquiries.",
    },
    {
      title: "AI add-ons",
      description:
        "Simple chatbot and FAQ flows that help qualify leads, answer common questions, and reduce friction in the contact process.",
    },
  ],
  sr: [
    {
      title: "Sajtovi po meri",
      description:
        "Čisti sajtovi koji grade poverenje, za uslužne biznise kojima treba jači prvi utisak i jasnija ponuda.",
    },
    {
      title: "Landing stranice",
      description:
        "Fokusirane stranice za kampanje, oglase ili konkretnu ponudu, gde je jedini cilj da se interesovanje pretvori u upit.",
    },
    {
      title: "AI dodaci",
      description:
        "Jednostavan chatbot i tok čestih pitanja koji pomažu da se kvalifikuju upiti, odgovori na uobičajena pitanja i olakša kontakt.",
    },
  ],
};

export const servicesLabels: Record<Locale, { coreOffer: string }> = {
  en: { coreOffer: "Core offer" },
  sr: { coreOffer: "Osnovna ponuda" },
};
