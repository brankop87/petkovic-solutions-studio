import type { Metadata } from "next";
import Image from "next/image";
import { getLocale } from "@/lib/locale-server";
import { projects, projectsSection } from "@/data/projects";
import { pages } from "@/data/pages";

export const metadata: Metadata = {
  title: "Work | Petkovic Solutions",
  description:
    "Live client work and concept directions across beauty, transport, content, real estate, and fitness.",
};

export default async function ProjectsPage() {
  const locale = await getLocale();
  const t = pages[locale].work;
  const labels = projectsSection[locale];
  const list = projects[locale];
  const liveProjects = list.filter((project) => project.type === "Live");
  const conceptProjects = list.filter((project) => project.type === "Concept");

  return (
    <section className="px-6 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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
          </div>

          <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">{t.intro}</p>
        </div>

        <div className="mt-14 space-y-16">
          {liveProjects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-8 rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-5 transition duration-300 hover:border-[var(--accent)] lg:grid-cols-[1.02fr_0.98fr] lg:p-6"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[26px] border border-[var(--line)]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
              </div>

              <div className="flex flex-col justify-between gap-6 p-2 sm:p-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[var(--line)] bg-[rgba(24,160,106,0.14)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                      {labels.live}
                    </span>
                    <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                      {project.niche}
                    </span>
                  </div>

                  <h2
                    className="mt-4 text-4xl leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.name}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[22px] border border-[var(--line)] bg-white/[0.02] p-5">
                    <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                      {labels.challenge}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[22px] border border-[var(--line)] bg-white/[0.02] p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                        {labels.focus}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                        {project.focus}
                      </p>
                    </div>

                    <div className="rounded-[22px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(24,160,106,0.12),rgba(233,199,157,0.05),rgba(255,255,255,0.02))] p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                        {labels.outcome}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--line)] bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted-strong)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-[30px] border border-[var(--line)] bg-white/[0.02] p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted-strong)]">
              {t.conceptDirections}
            </div>
            <div className="text-sm text-[var(--muted)]">{t.conceptNote}</div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {conceptProjects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                className="group overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface-soft)] transition duration-300 hover:border-[var(--accent)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[var(--line)] bg-[rgba(24,160,106,0.08)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                      {labels.concept}
                    </span>
                    <span className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                      {project.niche}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl text-[var(--text)]">{project.name}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {project.challenge}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--line)] bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted-strong)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
