import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "@/lib/locale-server";
import { pages } from "@/data/pages";

export const metadata: Metadata = {
  title: "About | Petkovic Solutions",
  description:
    "Petkovic Solutions is a boutique web studio focused on websites and landing pages for service businesses.",
};

export default async function AboutPage() {
  const locale = await getLocale();
  const t = pages[locale].about;

  return (
    <section className="px-6 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-xl">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
            {t.eyebrow}
          </div>

          <h1
            className="mt-4 text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}
          </h1>

          <p className="mt-8 text-lg leading-8 text-[var(--muted)]">{t.lead}</p>

          <p className="mt-6 text-base leading-8 text-[var(--muted)]">{t.lead2}</p>
        </div>

        <div className="grid gap-5">
          {t.principles.map((principle, index) => (
            <div
              key={principle}
              className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-7"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                {t.principleWord} 0{index + 1}
              </div>
              <p className="mt-4 text-xl leading-8 text-[var(--text)]">{principle}</p>
            </div>
          ))}

          <div className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(24,160,106,0.12),rgba(233,199,157,0.05),rgba(255,255,255,0.02))] p-7">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              {t.bestFitLabel}
            </div>
            <p className="mt-4 text-base leading-8 text-[var(--muted-strong)]">
              {t.bestFitBody}
            </p>

            <Link
              href="/kontakt"
              className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#06110d] transition hover:bg-[var(--accent-hover)]"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
