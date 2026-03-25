import { siteData } from "@/data/site";

const steps = [
  {
    title: "Audit and positioning",
    description:
      "We start with the offer, the audience, and the gaps in your current presentation before touching visuals.",
  },
  {
    title: "Structure and build",
    description:
      "We shape the page around trust, clarity, and action so the site does more than just look modern.",
  },
  {
    title: "Launch and refine",
    description:
      "After launch, the site stays easy to update and ready for outreach, ads, or future additions.",
  },
];

export default function WhyUs() {
  const { process } = siteData;

  return (
    <section id="process" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {process.eyebrow}
            </div>

            <h2
              className="mt-3 text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {process.title}
            </h2>

            <p className="mt-6 text-sm leading-8 text-[var(--muted)] sm:text-base">
              {process.description}
            </p>
          </div>

          <div className="grid gap-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                      Step 0{index + 1}
                    </div>
                    <h3 className="mt-4 text-2xl">{step.title}</h3>
                  </div>

                  <div className="rounded-full border border-[var(--line)] bg-[rgba(24,160,106,0.08)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                    Senior signal
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
