import Link from "next/link";
import { Locale } from "@/data/i18n";
import { pricing } from "@/data/pricing";

export default function Pricing({ locale }: { locale: Locale }) {
  const content = pricing[locale];

  return (
    <section id="pricing" className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
            {content.eyebrow}
          </div>

          <h2
            className="mt-3 text-4xl leading-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {content.title}
          </h2>

          <p className="mt-6 text-sm leading-8 text-[var(--muted)] sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {content.tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.highlight
                  ? "relative flex flex-col rounded-[30px] border border-[rgba(24,160,106,0.45)] bg-[linear-gradient(135deg,rgba(24,160,106,0.14),rgba(233,199,157,0.05),rgba(255,255,255,0.02))] p-8 shadow-[var(--shadow)]"
                  : "relative flex flex-col rounded-[30px] border border-[var(--line)] bg-[var(--surface)] p-8"
              }
            >
              {tier.badge && (
                <div className="absolute right-7 top-8 rounded-full border border-[var(--line)] bg-[rgba(24,160,106,0.12)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                  {tier.badge}
                </div>
              )}

              <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                {tier.name}
              </div>

              <div
                className="mt-5 text-3xl leading-none"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {tier.price}
              </div>

              {tier.note && (
                <div className="mt-2 text-xs leading-6 text-[var(--muted)]">
                  {tier.note}
                </div>
              )}

              <p className="mt-5 text-sm leading-7 text-[var(--muted-strong)]">
                {tier.tagline}
              </p>

              <ul className="mt-7 grid gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <Link
                  href={content.cta.href}
                  className={
                    tier.highlight
                      ? "inline-flex rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-[#06110d] transition hover:bg-[var(--accent-hover)]"
                      : "inline-flex rounded-full border border-[var(--line)] bg-white/[0.03] px-6 py-2.5 text-sm text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
                  }
                >
                  {content.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs leading-6 text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>{content.footnote}</span>
          <span className="text-[var(--muted)]/80">{content.currencyNote}</span>
        </div>
      </div>
    </section>
  );
}
