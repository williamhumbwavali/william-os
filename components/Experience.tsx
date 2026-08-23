import CodeFrame from "./CodeFrame";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-b border-line px-5 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          work/experience.md
        </p>

        <h2 className="mb-8 font-display text-3xl font-semibold text-ink">
          Experiência
        </h2>

        <CodeFrame filename="experience.md">
          <div className="space-y-8">
            {experience.map((item, i) => (
              <div key={`${item.company}-${item.title}`} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-cyan bg-base" />

                  {i < experience.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-line" />
                  )}
                </div>

                <div className="pb-2">
                  <span className="mb-1 inline-block rounded border border-line bg-panelAlt px-2 py-0.5 font-mono text-[11px] text-cyan">
                    {item.period}
                  </span>

                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">
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
                        className="rounded border border-line bg-panelAlt px-2 py-1 font-mono text-[10px] text-muted"
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