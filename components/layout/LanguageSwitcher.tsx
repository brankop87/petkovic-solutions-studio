"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { ui } from "@/data/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const strings = ui[locale];

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "en" ? "sr" : "en")}
      aria-label={strings.switchAria}
      className="rounded-full border border-[var(--line)] bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--muted-strong)] transition hover:border-[var(--accent)] hover:text-white"
    >
      {strings.switchLabel}
    </button>
  );
}
