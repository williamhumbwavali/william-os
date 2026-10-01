import CodeFrame from "./CodeFrame";

interface SkillsProps {
  skills: {
    linguagens: string[];
    frontend: string[];
    backend: string[];
    bancosDeDados: string[];
    infraestrutura: string[];
    ferramentas: string[];
    engenharia: string[];
    devops: string[];
    marketingDigital: string[];
  };
  section: {
    label: string;
    title: string;
    labels: {
      linguagens: string;
      frontend: string;
      backend: string;
      bancosDeDados: string;
      infraestrutura: string;
      ferramentas: string;
      engenharia: string;
      devops: string;
      marketingDigital: string;
    };
  };
}

export default function Skills({
  skills,
  section,
}: SkillsProps) {
  const rows: {
    key: keyof typeof skills;
    label: string;
  }[] = [
    {
      key: "linguagens",
      label: section.labels.linguagens,
    },
    {
      key: "frontend",
      label: section.labels.frontend,
    },
    {
      key: "backend",
      label: section.labels.backend,
    },
    {
      key: "bancosDeDados",
      label: section.labels.bancosDeDados,
    },
    {
      key: "infraestrutura",
      label: section.labels.infraestrutura,
    },
    {
      key: "ferramentas",
      label: section.labels.ferramentas,
    },
    {
      key: "engenharia",
      label: section.labels.engenharia,
    },
    {
      key: "devops",
      label: section.labels.devops,
    },
    {
      key: "marketingDigital",
      label: section.labels.marketingDigital,
    },
  ];

  return (
    <section
      id="skills"
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
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            {section.label}
          </p>

          <span className="h-px flex-1 bg-black/10 dark:bg-[#20252b]" />

          <span className="font-mono text-[11px] text-mutedDark dark:text-[#66707c]">
            stack.json
          </span>
        </div>

        <h2 className="mb-8 font-display text-3xl font-semibold text-black transition-colors duration-300 dark:text-[#c9d1d9]">
          {section.title}
        </h2>

        <CodeFrame filename="stack.json">
          <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-muted dark:text-[#8b949e] sm:text-sm">
            <span className="text-black dark:text-[#c9d1d9]">
              {"{"}
            </span>
            {"\n"}

            {rows.map((row, i) => (
              <span key={row.key}>
                {"  "}

                <span className="text-cyan">
                  &quot;{row.label}&quot;
                </span>

                <span className="text-black dark:text-[#c9d1d9]">
                  : [
                </span>

                {skills[row.key].map((item, j) => (
                  <span key={item}>
                    <span className="text-amber">
                      &quot;{item}&quot;
                    </span>

                    {j < skills[row.key].length - 1
                      ? ", "
                      : ""}
                  </span>
                ))}

                <span className="text-black dark:text-[#c9d1d9]">
                  ]{i < rows.length - 1 ? "," : ""}
                </span>

                {"\n"}
              </span>
            ))}

            <span className="text-black dark:text-[#c9d1d9]">
              {"}"}
            </span>
          </pre>
        </CodeFrame>
      </div>
    </section>
  );
}