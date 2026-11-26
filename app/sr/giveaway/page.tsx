import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { localePath } from "@/data/i18n";
import { siteContent } from "@/data/site";
import { giveaway, instagramHandle, instagramUrl, type GiveawayBlock } from "@/data/giveaway";
import Reveal from "@/components/motion/Reveal";

// Strana postoji samo na srpskom, pa NE koristi metaFor(): on bi dodao
// hreflang ka /giveaway, a engleske verzije nema (vodio bi u 404).
export const metadata: Metadata = {
  title: giveaway.meta.title,
  description: giveaway.meta.description,
  alternates: { canonical: "/sr/giveaway" },
  openGraph: {
    title: giveaway.meta.title,
    description: giveaway.meta.description,
    url: "/sr/giveaway",
    locale: "sr_RS",
  },
  twitter: {
    title: giveaway.meta.title,
    description: giveaway.meta.description,
  },
};

// Pretvara svako pominjanje Instagram naloga (@handle ili instagram.com/...)
// u tekstu u link ka profilu.
const instagramToken = new RegExp(
  `(${instagramHandle}|instagram\\.com/${instagramHandle.slice(1)})`,
);

function withInstagramLink(text: string): ReactNode {
  return text.split(instagramToken).map((part, index) =>
    index % 2 === 1 ? (
      <a
        key={index}
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--accent-strong)] underline decoration-[var(--line)] underline-offset-4 transition hover:text-white"
      >
        {part}
      </a>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

const listClass =
  "mt-3 space-y-2 pl-5 text-[15px] leading-8 text-[var(--muted-strong)] marker:text-[var(--accent)]";

function RuleBlock({ block }: { block: GiveawayBlock }) {
  if (block.type === "p") {
    return (
      <p className="mt-3 text-[15px] leading-8 text-[var(--muted-strong)]">
        {withInstagramLink(block.text)}
      </p>
    );
  }

  const items = block.items.map((item) => <li key={item}>{withInstagramLink(item)}</li>);
  return block.type === "ol" ? (
    <ol className={`${listClass} list-decimal`}>{items}</ol>
  ) : (
    <ul className={`${listClass} list-disc`}>{items}</ul>
  );
}

export default function GiveawayPage() {
  const { hero, steps, rules, cta } = giveaway;
  const site = siteContent.sr;

  return (
    <>
      <section className="px-6 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {hero.eyebrow}
            </div>
            <h1
              className="mt-4 text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {hero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {withInstagramLink(hero.subtitle)}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
            {steps.eyebrow}
          </h2>

          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            {steps.items.map((step, index) => (
              <li key={step}>
                <Reveal
                  direction="up"
                  delay={index * 0.08}
                  className="h-full rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-7"
                >
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-2xl leading-snug text-[var(--text)]">
                    {withInstagramLink(step)}
                  </h3>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1200px] rounded-[30px] border border-[var(--line)] bg-white/[0.02] p-7 sm:p-10">
          <h2
            className="text-3xl leading-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {rules.eyebrow}
          </h2>

          <div className="mt-8 max-w-[820px] divide-y divide-[var(--line)]">
            {rules.items.map((rule) => (
              <div key={rule.title} className="py-7 first:pt-0 last:pb-0">
                <h3 className="text-xl text-[var(--text)]">{rule.title}</h3>
                {rule.blocks.map((block, index) => (
                  <RuleBlock key={index} block={block} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-28">
        <Reveal
          direction="up"
          className="mx-auto max-w-[980px] rounded-[34px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(24,160,106,0.12),rgba(233,199,157,0.05),rgba(255,255,255,0.02))] p-8 shadow-[var(--shadow)] sm:p-14"
        >
          <h2
            className="text-4xl leading-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {cta.title}
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={localePath("/projekti", "sr")}
              className="inline-flex rounded-full border border-[var(--line)] bg-white/[0.04] px-7 py-3 text-sm text-white transition hover:border-[var(--accent)] hover:bg-[rgba(24,160,106,0.12)] hover:text-[var(--accent-strong)]"
            >
              {site.hero.secondaryCta}
            </Link>
            <Link
              href={`${localePath("/kontakt", "sr")}?tema=ponuda`}
              className="inline-flex rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-[#06110d] transition hover:bg-[var(--accent-hover)]"
            >
              {cta.quoteLabel}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
