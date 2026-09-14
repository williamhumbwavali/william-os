import CodeFrame from "./CodeFrame";

const links = [
  { label: "GitHub", value: "github.com/williamhumbwavali", href: "https://github.com/williamhumbwavali", todo: false },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/williamhumbwavali",
    href: "https://www.linkedin.com/in/williamhumbwavali/",
    todo: false,
  },
  { label: "Email", value: "williamhumbwavali@gmail.com", href: "mailto:williamhumbwavali@gmail.com" },
  { label: "Baza", value: "bazaja.vercel.app", href: "https://bazaja.vercel.app/", todo: false },
  { label: "Lithe", value: "lithephp.vercel.app/", href: "https://lithephp.vercel.app/", todo: false },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-5 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          contact.md
        </p>
        <h2 className="mb-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Vamos falar
        </h2>
        <p className="mb-8 max-w-md text-[15px] leading-relaxed text-muted">
          Se procuras alguém que constrói do zero, resolve problemas reais e
          entrega — é aqui.
        </p>

        <CodeFrame filename="contact.md">
          <ul className="space-y-3 font-mono text-sm">
            {links.map((l) => (
              <li key={l.label} className="flex flex-wrap items-baseline gap-2">
                <span className="text-purple">{l.label}:</span>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="focus-ring text-cyan underline decoration-cyan/30 underline-offset-4 hover:decoration-cyan"
                >
                  {l.value}
                </a>
                {l.todo && (
                  <span className="text-mutedDark">// TODO: atualizar</span>
                )}
              </li>
            ))}
          </ul>
        </CodeFrame>

        <p className="mt-10 font-mono text-xs text-mutedDark">
          ©{new Date().getFullYear()}  William Humbwavali. All rights reserved.
        </p>
      </div>
    </section>
  );
}
