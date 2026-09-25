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
      className="relative scroll-mt-16 overflow-hidden border-b border-black/10 bg-dots px-5 py-16 sm:px-10 lg:px-16"
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-3">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            {about.label}
          </p>

          <span className="h-px flex-1 bg-black/10" />

          <span className="shrink-0 font-mono text-[11px] text-mutedDark">
            bio.md
          </span>
        </div>

        <h2 className="mb-8 font-display text-3xl font-semibold text-black">
          {about.title}
        </h2>

        <CodeFrame filename="bio.md">
          <div className="space-y-5 font-body text-[15px] leading-relaxed text-muted">
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