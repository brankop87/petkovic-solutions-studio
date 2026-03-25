import { services } from "@/data/services";
import { siteData } from "@/data/site";

export default function ServicesPreview() {
  const { services: servicesSection } = siteData;
  const [primary, ...secondary] = services;

  return (
    <section id="services" className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {servicesSection.eyebrow}
            </div>

            <h2
              className="mt-3 text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {servicesSection.title}
            </h2>

            <p className="mt-6 text-sm leading-8 text-[var(--muted)] sm:text-base">
              {servicesSection.description}
            </p>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[30px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(24,160,106,0.12),rgba(233,199,157,0.05),rgba(255,255,255,0.02))] p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                Core offer
              </div>
              <h3 className="mt-4 text-3xl leading-tight">{primary.title}</h3>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--muted-strong)]">
                {primary.description}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {secondary.map((service, index) => (
                <div
                  key={service.title}
                  className="rounded-[26px] border border-[var(--line)] bg-[var(--surface)] p-7"
                >
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                    0{index + 2}
                  </div>
                  <h3 className="mt-5 text-2xl">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
