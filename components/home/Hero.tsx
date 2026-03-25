import Link from "next/link";
import { siteData } from "@/data/site";

export default function Hero() {
  const { hero, proof } = siteData;

  return (
    <section className="px-6 pb-24 pt-32 sm:px-8 lg:px-10 lg:pb-32 lg:pt-40">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-[var(--line)] bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
            {hero.eyebrow}
          </div>

          <h1
            className="mt-8 max-w-5xl text-5xl leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-[5.7rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {hero.title}
          </h1>

          <p className="mt-9 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-[1.15rem]">
            {hero.subtitle}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-[#06110d] transition hover:bg-[var(--accent-hover)]"
            >
              {hero.primaryCta}
            </Link>

            <a
              href="#work"
              className="rounded-full border border-[var(--line)] bg-white/[0.02] px-7 py-3 text-sm text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:max-w-xl">
            {proof.slice(0, 2).map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm leading-7 text-[var(--muted-strong)]"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:pt-4">
          <div className="rounded-[34px] border border-[var(--line)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] backdrop-blur">
            <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Featured positioning note
            </div>

            <div
              className="mt-5 text-3xl leading-tight sm:text-[2.15rem]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              The site should feel selective, not generic.
            </div>

            <p className="mt-5 max-w-xl text-sm leading-8 text-[var(--muted)]">
              Strong service-business sites do not need to say everything. They
              need to communicate trust, positioning, and next action with more
              control and less noise.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[var(--line)] bg-[var(--surface-soft)] p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  Clarity first
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                  Visitors should understand the offer and trust level almost immediately.
                </p>
              </div>

              <div className="rounded-[24px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(24,160,106,0.12),rgba(233,199,157,0.05),rgba(255,255,255,0.01))] p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  Best fit
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                  Beauty, local services, transport, real estate, and other trust-sensitive niches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
