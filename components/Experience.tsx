import CodeFrame from "./CodeFrame";

interface ExperienceProps {
  experienceSection: {
    label: string;
    title: string;
    filename: string;
  };

  experience: {
    period: string;
    title: string;
    company: string;
    location: string;
    description: string;
    stack: string[];
  }[];
}

export default function Experience({
  experienceSection,
  experience,
}: ExperienceProps) {
  return (
    <section
      id="experience"
      className="relative scroll-mt-16 overflow-hidden border-b border-black/10 bg-dots px-5 py-16 sm:px-10 lg:px-16"
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-3">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            {experienceSection.label}
          </p>

          <span className="h-px flex-1 bg-black/10" />

          <span className="shrink-0 font-mono text-[11px] text-mutedDark">
            {experienceSection.filename}
          </span>
        </div>

        <h2 className="mb-8 font-display text-3xl font-semibold text-black">
          {experienceSection.title}
        </h2>

        <CodeFrame filename={experienceSection.filename}>
          <div className="space-y-8">
            {experience.map((item, i) => (
              <div
                key={`${item.company}-${item.title}`}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-cyan bg-white" />

                  {i < experience.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-black/10" />
                  )}
                </div>

                <div className="min-w-0 pb-2">
                  <span className="mb-1 inline-block rounded border border-black/10 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] text-cyan">
                    {item.period}
                  </span>

                  <h3 className="mt-2 font-display text-lg font-semibold text-black">
                    {item.title}
                  </h3>

                  <p className="font-mono text-xs text-muted">
                    {item.company} · {item.location}
                  </p>

                  <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-muted">
                    {item.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-black/10 bg-neutral-50 px-2 py-1 font-mono text-[10px] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CodeFrame>
      </div>
    </section>
  );
}