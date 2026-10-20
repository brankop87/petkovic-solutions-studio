"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { nav, ui, localePath } from "@/data/i18n";
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
            <Link key={link.href} href={localePath(link.href, locale)} className="transition hover:text-white">
              {link[locale]}
            </Link>
          ))}
          <Link href={localePath("/kontakt", locale)} className="transition hover:text-white">
            {strings.requestAudit}
          </Link>

          <div className="mt-2 flex gap-5 md:justify-end">
            <a
              href="https://www.instagram.com/petkovicsolutions"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-[var(--muted)] transition hover:text-white"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572095033149"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-[var(--muted)] transition hover:text-white"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/petkovic-solutions"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--muted)] transition hover:text-white"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
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
