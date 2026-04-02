import type { Metadata } from "next";

type SearchParamValue = string | string[] | undefined;

type DemoPageProps = {
  searchParams?: Promise<Record<string, SearchParamValue>>;
};

type DemoContent = {
  business: string;
  city: string;
  phone: string;
  address: string;
  niche: string;
  variant: string;
  headline: string;
  subheadline: string;
  cta: string;
  services: string[];
  reviews: string[];
};

export const metadata: Metadata = {
  title: "Client Demo | Petkovic Solutions",
  description: "Private demo page generated for client outreach.",
  robots: {
    index: false,
    follow: false,
  },
};

function readParam(value: SearchParamValue, fallback: string) {
  if (Array.isArray(value)) {
    return value[0] ?? fallback;
  }

  return value ?? fallback;
}

function readList(value: SearchParamValue, fallback: string[]) {
  const source = Array.isArray(value) ? value[0] : value;

  if (!source) {
    return fallback;
  }

  const items = source
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);

  return items.length ? items : fallback;
}

function buildDemoContent(params: Record<string, SearchParamValue>): DemoContent {
  const business = readParam(params.name, "General Mechanics");
  const city = readParam(params.city, "Austin, Texas");
  const phone = readParam(params.phone, "(713) 668-4388");
  const address = readParam(params.address, "5521 Sample Street, Austin, TX");
  const niche = readParam(params.niche, "Auto Repair");
  const variant = readParam(params.variant, "local-service");
  const headline = readParam(
    params.headline,
    `A clearer website for ${business} that turns local visitors into more calls.`,
  );
  const subheadline = readParam(
    params.subheadline,
    `This demo shows how ${business} could look with stronger trust signals, cleaner service presentation, and a more direct path to contact.`,
  );
  const cta = readParam(params.cta, "Request a website audit");
  const services = readList(params.services, [
    "Diagnostics and check engine support",
    "Brake service and safety inspections",
    "Oil changes and routine maintenance",
    "Engine repair and drivability issues",
  ]);
  const reviews = readList(params.reviews, [
    `"Fast, honest, and easy to work with from the first call."`,
    `"The site should make trust obvious before someone even visits the shop."`,
    `"A stronger first impression can help more local traffic turn into real leads."`,
  ]);

  return {
    business,
    city,
    phone,
    address,
    niche,
    variant,
    headline,
    subheadline,
    cta,
    services,
    reviews,
  };
}

function getVariantStyles(variant: string) {
  switch (variant) {
    case "beauty":
      return {
        badgeTone: "text-[#f0c9d6]",
        badgeBg: "bg-[rgba(48,26,34,0.82)]",
        badgeBorder: "border-[rgba(240,201,214,0.18)]",
        cardTone: "text-[#ffdfe8]",
        accentGlow: "from-[rgba(221,135,168,0.18)] to-transparent",
      };
    case "clinic":
      return {
        badgeTone: "text-[#c6e7ff]",
        badgeBg: "bg-[rgba(20,35,46,0.8)]",
        badgeBorder: "border-[rgba(117,178,220,0.2)]",
        cardTone: "text-[#d9efff]",
        accentGlow: "from-[rgba(84,154,208,0.16)] to-transparent",
      };
    default:
      return {
        badgeTone: "text-[var(--accent-warm)]",
        badgeBg: "bg-[rgba(18,28,33,0.72)]",
        badgeBorder: "border-[var(--line)]",
        cardTone: "text-[var(--accent-strong)]",
        accentGlow: "from-[rgba(24,160,106,0.14)] to-transparent",
      };
  }
}

export default async function DemoPage({ searchParams }: DemoPageProps) {
  const params = (await searchParams) ?? {};
  const content = buildDemoContent(params);
  const variantStyles = getVariantStyles(content.variant);

  return (
    <main className="min-h-screen px-6 pb-24 pt-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div
            className="text-sm tracking-tight text-white sm:text-base"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Petkovic <span className="text-[var(--accent)]">Solutions</span>
          </div>

          <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
            Client-facing preview
          </div>
        </div>
      </div>

      <section className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="max-w-3xl">
          <div
            className={`inline-flex items-center rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.24em] ${variantStyles.badgeTone} ${variantStyles.badgeBg} ${variantStyles.badgeBorder}`}
          >
            Demo concept for {content.business}
          </div>

          <h1
            className="mt-6 text-5xl leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {content.headline}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-strong)]">
            {content.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${content.phone}`}
              className="rounded-full bg-[var(--accent)] px-6 py-4 text-sm font-semibold text-[#06110d] transition hover:bg-[var(--accent-hover)]"
            >
              Call {content.business}
            </a>
            <a
              href="/kontakt"
              className="rounded-full border border-[var(--line)] bg-[rgba(15,21,26,0.58)] px-6 py-4 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-white"
            >
              {content.cta}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            <span className="rounded-full border border-[var(--line)] px-4 py-2">
              {content.niche}
            </span>
            <span className="rounded-full border border-[var(--line)] px-4 py-2">
              {content.city}
            </span>
            <span className="rounded-full border border-[var(--line)] px-4 py-2">
              Conversion-focused
            </span>
          </div>
        </div>

        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[var(--shadow)]">
          <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            Why this demo works
          </div>

          <div className="mt-5 grid gap-4">
            <div className="rounded-[24px] border border-[var(--line)] bg-[var(--surface-soft)] p-5">
              <div className={`text-sm font-semibold ${variantStyles.cardTone}`}>
                Stronger local trust
              </div>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                The first screen immediately explains what the business does, where it operates, and how a visitor
                should contact it.
              </p>
            </div>

            <div className="rounded-[24px] border border-[var(--line)] bg-[var(--surface-soft)] p-5">
              <div className={`text-sm font-semibold ${variantStyles.cardTone}`}>
                Cleaner service structure
              </div>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                Instead of a generic brochure page, the offer is presented in a way that feels easier to scan and more
                credible for paid traffic or local search.
              </p>
            </div>

            <div className="rounded-[24px] border border-[var(--line)] bg-[var(--surface-soft)] p-5">
              <div className={`text-sm font-semibold ${variantStyles.cardTone}`}>
                Better conversion path
              </div>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                The CTA direction is clearer, so visitors are more likely to call or ask for service without friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-[1200px] gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-7">
          <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            Service preview
          </div>

          <h2
            className="mt-4 text-4xl leading-[1] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Services presented with more clarity.
          </h2>

          <div className="mt-8 grid gap-4">
            {content.services.map((service) => (
              <div
                key={service}
                className="rounded-[24px] border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-5 text-sm leading-7 text-[var(--muted-strong)]"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-[32px] border border-[var(--line)] bg-gradient-to-br ${variantStyles.accentGlow} bg-[var(--surface)] p-7`}>
          <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            Trust preview
          </div>

          <h2
            className="mt-4 text-4xl leading-[1] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The business feels more established from the first visit.
          </h2>

          <div className="mt-8 grid gap-4">
            {content.reviews.map((review, index) => (
              <div
                key={`${review}-${index}`}
                className="rounded-[24px] border border-[var(--line)] bg-[var(--surface-soft)] p-5"
              >
                <div className={`text-xs uppercase tracking-[0.22em] ${variantStyles.badgeTone}`}>
                  Trust signal {index + 1}
                </div>
                <p className="mt-3 text-base leading-8 text-[var(--muted-strong)]">{review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[1200px] rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Contact block preview
            </div>

            <h2
              className="mt-4 text-4xl leading-[1] tracking-[-0.04em] sm:text-5xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Built to make reaching {content.business} feel easy.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">
              This section is where local visitors should feel confident enough to call, book, or ask a question right
              away.
            </p>
          </div>

          <div className="rounded-[28px] border border-[var(--line)] bg-[var(--surface-soft)] p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              {content.business}
            </div>
            <div className="mt-3 text-2xl font-semibold text-[var(--text)]">{content.phone}</div>
            <div className="mt-2 text-sm leading-7 text-[var(--muted)]">{content.address}</div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${content.phone}`}
                className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#06110d] transition hover:bg-[var(--accent-hover)]"
              >
                Call now
              </a>
              <a
                href="/kontakt"
                className="rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-white"
              >
                Request this style
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-16 max-w-[1200px] border-t border-[var(--line)] pt-6 text-left">
        <div className="text-[10px] uppercase tracking-[0.26em] text-[var(--muted)]">
          Private outreach demo by Petkovic Solutions
        </div>
      </div>
    </main>
  );
}
