import { Locale } from "@/data/i18n";

export type ChatOption = { label: string; emoji: string };

type ChatbotContent = {
  greetingQ: string;
  services: ChatOption[];
  budgetKicker: string;
  budgetQ: string;
  budgets: ChatOption[];
  contactKicker: string;
  contactQ: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  sending: string;
  send: string;
  error: string;
  thanks: string;
  thanksBody: string;
  startOver: string;
  close: string;
  openChat: string;
};

export const chatbot: Record<Locale, ChatbotContent> = {
  en: {
    greetingQ: "Hey! What brings you here today?",
    services: [
      { label: "Website", emoji: "🌐" },
      { label: "Chatbot", emoji: "🤖" },
      { label: "App", emoji: "📱" },
      { label: "Something else", emoji: "✨" },
    ],
    budgetKicker: "Great choice!",
    budgetQ: "What's your approximate budget?",
    budgets: [
      { label: "Under $1,000", emoji: "💡" },
      { label: "$1,000 – $3,000", emoji: "🚀" },
      { label: "$3,000 – $10,000", emoji: "🔥" },
      { label: "$10,000+", emoji: "💎" },
    ],
    contactKicker: "Almost there!",
    contactQ: "Where should we reach you?",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    sending: "Sending…",
    send: "Send →",
    error: "Something went wrong. Please try again.",
    thanks: "Thanks",
    thanksBody:
      "We got your message and we'll be in touch soon. Looking forward to working with you!",
    startOver: "Start over",
    close: "Close",
    openChat: "Open chat",
  },
  sr: {
    greetingQ: "Ćao! Šta te dovodi ovde?",
    services: [
      { label: "Sajt", emoji: "🌐" },
      { label: "Chatbot", emoji: "🤖" },
      { label: "Aplikacija", emoji: "📱" },
      { label: "Nešto drugo", emoji: "✨" },
    ],
    budgetKicker: "Odličan izbor!",
    budgetQ: "Koliki ti je otprilike budžet?",
    budgets: [
      { label: "Do €500", emoji: "💡" },
      { label: "€500 – €1.500", emoji: "🚀" },
      { label: "€1.500 – €5.000", emoji: "🔥" },
      { label: "€5.000+", emoji: "💎" },
    ],
    contactKicker: "Skoro pa gotovo!",
    contactQ: "Gde da te kontaktiramo?",
    namePlaceholder: "Tvoje ime",
    emailPlaceholder: "Tvoj mejl",
    sending: "Šalje se…",
    send: "Pošalji →",
    error: "Nešto nije u redu. Pokušaj ponovo.",
    thanks: "Hvala",
    thanksBody:
      "Primili smo tvoju poruku i javljamo se uskoro. Radujemo se saradnji!",
    startOver: "Počni ponovo",
    close: "Zatvori",
    openChat: "Otvori chat",
  },
};
