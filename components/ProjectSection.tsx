import { Project } from "@/lib/data";

const accentMap: Record<
  Project["accent"],
  {
    text: string;
    border: string;
    bg: string;
  }
> = {
  cyan: {
    text: "text-cyan",
    border: "border-cyan/30",
    bg: "bg-white",
  },
  purple: {
    text: "text-purple",
    border: "border-purple/30",
    bg: "bg-white",
  },
  amber: {
    text: "text-amber",
    border: "border-amber/30",
    bg: "bg-white",
  },
  green: {
    text: "text-green",
    border: "border-green/30",
    bg: "bg-white",
  },
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
      className="relative scroll-mt-16 overflow-hidden border-b border-black/10 bg-dots px-5 py-16 sm:px-10 lg:px-16"
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-3">
          <p
            className={`font-mono text-xs uppercase tracking-[0.2em] ${accent.text}`}
          >
            projects/
            {project.id === "lithe"
              ? "lithe-php"
              : project.id === "bvf"
                ? "bvf"
                : project.id}
            /
          </p>

          <span className="h-px flex-1 bg-black/10" />

          <span
            className={`font-mono text-sm ${accent.text}`}
          >
            {num}
          </span>
        </div>

        <div className="mb-8">
          <h2 className="font-display text-3xl font-semibold text-black sm:text-4xl">
            {project.name}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Cover */}
          <div className="lg:col-span-3">
            <div
              className={`overflow-hidden rounded-lg border ${accent.border} bg-white shadow-sm`}
            >
              <img
                src={project.cover}
                alt={`Mockup ilustrativo de ${project.name}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <p
              className={`mb-3 text-sm ${accent.text}`}
            >
              {project.tagline}
            </p>

            <p className="mb-6 text-[15px] leading-relaxed text-muted">
              {project.description}
            </p>

            {/* Stats */}
            {project.stats && (
              <div className="mb-6 grid grid-cols-2 gap-3">
                {project.stats.map((s) => (
                  <div
                    key={s.label}
                    className={`rounded-md border ${accent.border} ${accent.bg} px-3 py-2.5`}
                  >
                    <div
                      className={`text-base text-gray-700`}
                    >
                      {s.value}
                    </div>

                    <div className="font-mono text-[11px] text-mutedDark">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Stack */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-black/10 bg-white px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Links */}
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