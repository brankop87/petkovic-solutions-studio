import type { Metadata } from "next";
import { getLocale } from "@/lib/locale-server";
import { contact } from "@/data/site";
import { pages } from "@/data/pages";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free website audit. We review your current site and point out the biggest credibility and conversion gaps.",
};

export default async function ContactPage() {
  const locale = await getLocale();
  const t = pages[locale].contact;

  return (
    <section className="px-6 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.88fr_1.12fr]">
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

          <p className="mt-8 text-base leading-8 text-[var(--muted)]">{t.lead}</p>

          <div className="mt-8 rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-7">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              {t.directEmailLabel}
            </div>
            <a
              className="mt-3 block text-lg text-[var(--accent-strong)] transition hover:text-white"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>

            <div className="mt-6 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              {t.helpsLabel}
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{t.helpsBody}</p>
          </div>
        </div>

        <ContactForm t={t} />
      </div>
    </section>
  );
}
