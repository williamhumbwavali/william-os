import CodeFrame from "./CodeFrame";
import { highlightDescription } from "./Hero";

interface AboutProps {
  about: {
    label: string;
    title: string;
    paragraphs: string[];
  };
}

export default function About({ about }: AboutProps) {
  return (
    <section
      id="about"
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
            {about.label}
          </p>

          <span className="h-px flex-1 bg-black/10 dark:bg-[#20252b]" />

          <span className="shrink-0 font-mono text-[11px] text-mutedDark dark:text-[#66707c]">
            bio.md
          </span>
        </div>

        <h2 className="mb-8 font-display text-3xl font-semibold text-black transition-colors duration-300 dark:text-[#c9d1d9]">
          {about.title}
        </h2>

        <CodeFrame filename="bio.md">
          <div className="space-y-5 font-body text-[15px] leading-relaxed text-muted dark:text-[#8b949e]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {highlightDescription(paragraph)}
              </p>
            ))}
          </div>
        </CodeFrame>
      </div>
    </section>
  );
}