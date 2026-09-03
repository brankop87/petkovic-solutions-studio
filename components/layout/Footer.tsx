"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { nav, ui } from "@/data/i18n";
import { brand } from "@/data/site";

export default function Footer() {
  const { locale } = useLocale();
  const strings = ui[locale];

  return (
    <footer className="border-t border-[var(--line)] px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <div
            className="text-2xl text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {brand}
          </div>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)]">
            {strings.footerTagline}
          </p>
        </div>

        <div className="grid gap-3 text-sm text-[var(--muted-strong)] md:justify-self-end md:text-right">
          {nav.slice(0, 2).map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link[locale]}
            </Link>
          ))}
          <Link href="/kontakt" className="transition hover:text-white">
            {strings.requestAudit}
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1200px] border-t border-[var(--line)] pt-6 text-center">
        <div
          className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]"
          style={{ opacity: 0.78 }}
        >
          Petkovic Solutions
        </div>
      </div>
    </footer>
  );
}
