import CodeFrame from "./CodeFrame";

interface EducationProps {
  education: {
    label: string;
    title: string;
    filename: string;
  };
  timeline: {
    period: string;
    title: string;
    place: string;
    description: string;
  }[];
}

export default function Education({
  education,
  timeline,
}: EducationProps) {
  return (
    <section
      id="education"
      className="
        relative scroll-mt-16 overflow-hidden
        border-b border-black/10
        bg-white
        px-5 py-16
        transition-colors duration-300
        dark:border-white/[0.07]
        dark:bg-[#090a0a]
        sm:px-10
        lg:px-16
      "
    >
      {/* Background dots */}
      <div className="pointer-events-none absolute inset-0 bg-dots" />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-3">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            {education.label}
          </p>

          <span className="h-px flex-1 bg-black/10 dark:bg-[#20252b]" />

          <span className="shrink-0 font-mono text-[11px] text-mutedDark dark:text-[#66707c]">
            {education.filename}
          </span>
        </div>

        <h2 className="mb-8 font-display text-3xl font-semibold text-black transition-colors duration-300 dark:text-[#c9d1d9]">
          {education.title}
        </h2>

        <CodeFrame filename={education.filename}>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={`${item.period}-${item.title}`}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-cyan bg-white dark:bg-[#0d0f0f]" />

                  {i < timeline.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-black/10 dark:bg-[#20252b]" />
                  )}
                </div>

                <div className="min-w-0 pb-2">
                  <span
                    className="
                      mb-1 inline-block rounded
                      border border-black/10
                      bg-neutral-50
                      px-2 py-0.5
                      font-mono text-[11px] text-cyan
                      dark:border-[#242a30]
                      dark:bg-[#151818]
                    "
                  >
                    {item.period}
                  </span>

                  <h3 className="mt-2 font-display text-lg font-semibold text-black dark:text-[#c9d1d9]">
                    {item.title}
                  </h3>

                  <p className="font-mono text-xs text-muted dark:text-[#737d88]">
                    {item.place}
                  </p>

                  <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-muted dark:text-[#8b949e]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CodeFrame>
      </div>
    </section>
  );
}