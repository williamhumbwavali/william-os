import { Project } from "@/lib/data";

const accentMap: Record<Project["accent"], { text: string; border: string; bg: string }> = {
  cyan: { text: "text-cyan", border: "border-cyan/30", bg: "bg-cyan/10" },
  purple: { text: "text-purple", border: "border-purple/30", bg: "bg-purple/10" },
  amber: { text: "text-amber", border: "border-amber/30", bg: "bg-amber/10" },
  green: { text: "text-green", border: "border-green/30", bg: "bg-green/10" },
};

export default function ProjectSection({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const accent = accentMap[project.accent];
  const num = String(index).padStart(2, "0");

  return (
    <section
      id={project.fileId}
      className="scroll-mt-16 border-b border-line px-5 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <p className={`mb-2 font-mono text-xs uppercase tracking-[0.2em] ${accent.text}`}>
          projects/{project.id === "lithe" ? "lithe-php" : project.id === "music" ? "music-app" : project.id}
          /
        </p>
        <div className="mb-8 flex items-baseline gap-3">
          <span className={`font-mono text-sm ${accent.text}`}>{num}</span>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {project.name}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div
              className={`overflow-hidden rounded-lg border ${accent.border} bg-panel`}
            >
              <img
                src={project.cover}
                alt={`Mockup ilustrativo de ${project.name}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className={`mb-3 font-mono text-sm ${accent.text}`}>{project.tagline}</p>
            <p className="mb-6 text-[15px] leading-relaxed text-muted">
              {project.description}
            </p>

            {project.stats && (
              <div className="mb-6 grid grid-cols-2 gap-3">
                {project.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-md border border-line bg-panelAlt px-3 py-2.5"
                  >
                    <div className="font-mono text-base text-ink">{s.value}</div>
                    <div className="font-mono text-[11px] text-mutedDark">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-line bg-panelAlt px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`focus-ring rounded-md border ${accent.border} ${accent.bg} px-4 py-2 font-mono text-sm ${accent.text} transition-transform hover:scale-[1.02]`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
