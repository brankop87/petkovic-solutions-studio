"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { ui } from "@/data/i18n";

export default function LanguageSwitcher() {
  const { locale } = useLocale();
  const strings = ui[locale];
  const pathname = usePathname() || "/";
  const router = useRouter();

  // Toggle between the EN (root) and SR ("/sr") URL for the current page.
  const target =
    locale === "sr"
      ? pathname.replace(/^\/sr/, "") || "/"
      : pathname === "/"
        ? "/sr"
        : `/sr${pathname}`;

  return (
    <button
      type="button"
      onClick={() => router.push(target)}
      aria-label={strings.switchAria}
      className="rounded-full border border-[var(--line)] bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--muted-strong)] transition hover:border-[var(--accent)] hover:text-white"
    >
      {strings.switchLabel}
    </button>
  );
}
