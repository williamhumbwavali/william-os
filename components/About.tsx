import CodeFrame from "./CodeFrame";

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
      className="scroll-mt-16 border-b border-line px-5 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          {about.label}
        </p>

        <h2 className="mb-8 font-display text-3xl font-semibold text-ink">
          {about.title}
        </h2>

        <CodeFrame filename="bio.md">
          <div className="space-y-5 font-body text-[15px] leading-relaxed text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </CodeFrame>
      </div>
    </section>
  );
}