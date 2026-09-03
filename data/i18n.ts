export type Locale = "en" | "sr";

export const locales: Locale[] = ["en", "sr"];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "locale";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "sr";
}

// Navigation: hrefs are shared, labels per locale.
export const nav: { href: string; en: string; sr: string }[] = [
  { href: "/#work", en: "Work", sr: "Radovi" },
  { href: "/#services", en: "Services", sr: "Usluge" },
  { href: "/#pricing", en: "Pricing", sr: "Cene" },
  { href: "/#process", en: "Process", sr: "Proces" },
];

// Small shared UI strings (chrome). Section content lives in its own data files.
export const ui: Record<
  Locale,
  { requestAudit: string; openMenu: string; switchLabel: string; switchAria: string; footerTagline: string }
> = {
  en: {
    requestAudit: "Request audit",
    openMenu: "Open menu",
    switchLabel: "SR",
    switchAria: "Prebaci na srpski",
    footerTagline:
      "Websites and landing pages for service businesses that need a more credible online presence.",
  },
  sr: {
    requestAudit: "Zatraži audit",
    openMenu: "Otvori meni",
    switchLabel: "EN",
    switchAria: "Switch to English",
    footerTagline:
      "Sajtovi i landing stranice za uslužne biznise kojima treba ubedljiviji nastup na internetu.",
  },
};
