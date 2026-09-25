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
      className="scroll-mt-16 px-5 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          {contact.label}
        </p>

        <h2 className="mb-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
          {contact.title}
        </h2>

        <p className="mb-8 max-w-md text-[15px] leading-relaxed text-muted">
          {contact.description}
        </p>

        <CodeFrame filename="contact.md">
          <ul className="space-y-3 font-mono text-sm">
            {contact.links.map((link) => (
              <li
                key={link.label}
                className="flex flex-wrap items-baseline gap-2"
              >
                <span className="text-purple">{link.label}:</span>

                <a
                  href={link.href}
                  target={
                    link.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    link.href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  className="focus-ring text-cyan underline decoration-cyan/30 underline-offset-4 hover:decoration-cyan"
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </CodeFrame>

        <p className="mt-10 font-mono text-xs text-mutedDark">
          ©{new Date().getFullYear()} William Humbwavali. All rights reserved.
        </p>
      </div>
    </section>
  );
}