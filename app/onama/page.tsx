import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Petkovic Solutions",
  description:
    "Petkovic Solutions is a boutique web studio focused on websites and landing pages for service businesses.",
};

const principles = [
  "Clarity beats noise. A visitor should understand the offer fast.",
  "Credibility matters. Design has to make the business feel trustworthy.",
  "Follow-through matters. Good service does not end after launch.",
];

export default function AboutPage() {
  return (
    <section className="px-6 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-xl">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
            About
          </div>

          <h1
            className="mt-4 text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            A small studio with a direct, hands-on way of working.
          </h1>

          <p className="mt-8 text-lg leading-8 text-[var(--muted)]">
            Petkovic Solutions builds websites and landing pages for service
            businesses that need better positioning, a stronger first impression,
            and a clearer path to inquiries.
          </p>

          <p className="mt-6 text-base leading-8 text-[var(--muted)]">
            The goal is not to feel like a big agency. The goal is to be useful,
            responsive, and reliable from the first conversation to the final
            handoff.
          </p>
        </div>

        <div className="grid gap-5">
          {principles.map((principle, index) => (
            <div
              key={principle}
              className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-7"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                Principle 0{index + 1}
              </div>
              <p className="mt-4 text-xl leading-8 text-[var(--text)]">
                {principle}
              </p>
            </div>
          ))}

          <div className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(24,160,106,0.12),rgba(233,199,157,0.05),rgba(255,255,255,0.02))] p-7">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              Best fit clients
            </div>
            <p className="mt-4 text-base leading-8 text-[var(--muted-strong)]">
              Service businesses, local brands, and founder-led companies that
              know their current website is holding them back.
            </p>

            <Link
              href="/kontakt"
              className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#06110d] transition hover:bg-[var(--accent-hover)]"
            >
              Request a free website audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
