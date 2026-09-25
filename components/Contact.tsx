import CodeFrame from "./CodeFrame";

interface ContactProps {
  contact: {
    label: string;
    title: string;
    description: string;
    links: {
      label: string;
      value: string;
      href: string;
    }[];
  };
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section
      id="contact"
      className="relative scroll-mt-16 overflow-hidden border-b border-black/10 bg-dots px-5 py-20 sm:px-10 lg:px-16"
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            {contact.label}
          </p>

          <span className="h-px flex-1 bg-black/10" />

          <span className="font-mono text-[11px] text-mutedDark">
            contact.md
          </span>
        </div>

        <h2 className="mb-4 font-display text-3xl font-semibold text-black sm:text-4xl">
          {contact.title}
        </h2>

        <p className="mb-8 max-w-md text-[15px] leading-relaxed text-muted">
          {contact.description}
        </p>

        <CodeFrame filename="contact.md">
          <ul className="space-y-3 font-mono text-sm">
            {contact.links.map((link) => {
              const external = link.href.startsWith("http");

              return (
                <li
                  key={link.label}
                  className="flex flex-wrap items-baseline gap-2"
                >
                  <span className="text-purple">
                    {link.label}:
                  </span>

                  <a
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="focus-ring text-cyan underline decoration-cyan/30 underline-offset-4 transition-colors hover:decoration-cyan"
                  >
                    {link.value}
                  </a>
                </li>
              );
            })}
          </ul>
        </CodeFrame>

        <p className="mt-10 font-mono text-xs text-mutedDark">
          ©{new Date().getFullYear()} William Humbwavali. All rights reserved.
        </p>
      </div>
    </section>
  );
}