import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Petkovic Solutions",
  description:
    "Custom websites, landing pages, and lightweight AI add-ons for service businesses.",
};

const extras = [
  "Homepage messaging and structure",
  "Responsive development in Next.js",
  "Lead-focused contact flow",
  "Optional AI chatbot or FAQ support",
];

export default function ServicesPage() {
  return (
    <section className="px-6 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              Services
            </div>
            <h1
              className="mt-4 text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Focused offers that are easy to explain and easy to buy.
            </h1>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
            The service stack stays intentionally narrow. That makes the offer
            clearer, the work stronger, and the final product more useful for the
            kind of businesses you want to reach.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-7"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                0{index + 1}
              </div>
              <h2 className="mt-5 text-2xl text-[var(--text)]">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[30px] border border-[var(--line)] bg-white/[0.02] p-8">
          <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
            What can be included
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {extras.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-4 text-sm leading-7 text-[var(--muted-strong)]"
              >
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/kontakt"
            className="mt-8 inline-flex rounded-full border border-[var(--line)] bg-white/[0.04] px-5 py-3 text-sm text-white transition hover:border-[var(--accent)] hover:bg-[rgba(24,160,106,0.12)] hover:text-[var(--accent-strong)]"
          >
            Tell us what you need
          </Link>
        </div>
      </div>
    </section>
  );
}
