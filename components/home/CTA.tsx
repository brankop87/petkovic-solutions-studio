import Link from "next/link";
import { siteData } from "@/data/site";

export default function CTA() {
  const { cta } = siteData;

  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[980px] rounded-[34px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(24,160,106,0.12),rgba(233,199,157,0.05),rgba(255,255,255,0.02))] p-10 shadow-[var(--shadow)] sm:p-14">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
            {cta.eyebrow}
          </div>

          <h2
            className="mt-5 text-4xl leading-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {cta.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">
            {cta.description}
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/kontakt"
            className="inline-flex rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-[#06110d] transition hover:bg-[var(--accent-hover)]"
          >
            {cta.primaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
