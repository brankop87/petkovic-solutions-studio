import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  const liveProjects = projects.filter((project) => project.type === "Live");
  const conceptProjects = projects.filter((project) => project.type === "Concept");

  return (
    <section id="work" className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              Selected work
            </div>

            <h2
              className="mt-3 text-4xl leading-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Real client work, framed with more intention.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Premium perception comes from how the work is presented, not just
            from how it looks. The strongest signal here is balance and control.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {liveProjects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-6 rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-5 transition duration-300 hover:border-[var(--accent)] lg:p-6"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--surface-soft)]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1014]/30 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[var(--line)] bg-[rgba(24,160,106,0.14)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                    Live
                  </span>
                  <span className="rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                    {project.niche}
                  </span>
                </div>
              </div>

              <div className="grid gap-4 px-2 sm:px-3">
                <div>
                  <h3
                    className="text-3xl leading-tight sm:text-[2.3rem]"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {project.name}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
                    {project.description}
                  </p>
                </div>

                <div className="rounded-[22px] border border-[var(--line)] bg-white/[0.02] p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                    Challenge
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                    {project.challenge}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[22px] border border-[var(--line)] bg-white/[0.02] p-5">
                    <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                      Focus
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                      {project.focus}
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(24,160,106,0.12),rgba(233,199,157,0.05),rgba(255,255,255,0.02))] p-5">
                    <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                      Outcome
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-[30px] border border-[var(--line)] bg-white/[0.02] p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted-strong)]">
              Concept directions
            </div>
            <div className="text-sm text-[var(--muted)]">
              Visual range, clearly separated from live client work
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {conceptProjects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                className="group overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--surface-soft)] transition duration-300 hover:border-[var(--accent)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[var(--surface-soft)]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[var(--line)] bg-[rgba(24,160,106,0.08)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                      Concept
                    </span>
                    <span className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                      {project.niche}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl leading-tight">{project.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {project.focus}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
