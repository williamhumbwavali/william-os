"use client";

import InteractiveTerminal from "./InteractiveTerminal";

export default function Hero({
  onNavigate,
  terminalOpen,
  onOpenTerminal,
  onCloseTerminal,
}: {
  onNavigate: (id: string) => void;
  terminalOpen: boolean;
  onOpenTerminal: () => void;
  onCloseTerminal: () => void;
}) {
  return (
    <section
      id="hero"
      className="bg-dots border-b border-line px-5 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          portfolio.exe — sessão iniciada
        </span>
        <h1 className="mb-6 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
          Eu escrevo o código que outros vão construir em cima.
        </h1>
        <p className="mb-10 max-w-xl font-body text-base text-muted sm:text-lg">
          Construo sistemas e produtos digitais que saem do terminal
          e chegam ao mundo real. O terminal abaixo é real:
          explora os comandos, abre os projetos e vê o que foi construído.
        </p>

        {terminalOpen ? (
          <InteractiveTerminal onNavigate={onNavigate} onClose={onCloseTerminal} />
        ) : (
          <button
            onClick={onOpenTerminal}
            className="focus-ring flex w-full items-center gap-3 rounded-lg border border-dashed border-line bg-panel px-5 py-6 text-left font-mono text-sm text-muted transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            <span className="text-lg">▢</span>
            terminal.app — fechado. clica para abrir.
          </button>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate("lithe")}
            className="focus-ring rounded-md border border-cyan/40 bg-cyan/10 px-5 py-2.5 font-mono text-sm text-cyan transition-colors hover:bg-cyan/20"
          >
            $ open ./projects
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="focus-ring rounded-md border border-line px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:border-mutedDark hover:text-ink"
          >
            $ open contact.md
          </button>
        </div>
      </div>
    </section>
  );
}
