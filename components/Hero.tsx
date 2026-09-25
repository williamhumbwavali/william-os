"use client";

import InteractiveTerminal from "./InteractiveTerminal";

interface HeroProps {
  data: {
    headline: string;
    description: string;
    sessionStarted: string;
    terminalClosed: string;
    openProjects: string;
    viewExperience: string;
    openContact: string;
  };

  terminal: {
    closeLabel: string;
    ariaLabel: string;
    placeholder: string;
    quickLabel: string;
    home: string;
    bootScript: {
      prompt: boolean;
      text: string;
      tone?: "ink" | "muted" | "cyan" | "green" | "amber";
    }[];
  };

  onNavigate: (id: string) => void;
  terminalOpen: boolean;
  onOpenTerminal: () => void;
  onCloseTerminal: () => void;
}

export default function Hero({
  data,
  terminal,
  onNavigate,
  terminalOpen,
  onOpenTerminal,
  onCloseTerminal,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="bg-dots border-b border-line px-5 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          {data.sessionStarted}
        </span>

        <h1 className="mb-6 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
          {data.headline}
        </h1>

        <p className="mb-10 max-w-2xl font-body text-base text-muted sm:text-lg">
          {data.description}
        </p>

        {terminalOpen ? (
          <InteractiveTerminal
            onNavigate={onNavigate}
            onClose={onCloseTerminal}
            terminal={terminal}
          />
        ) : (
          <button
            onClick={onOpenTerminal}
            className="focus-ring flex w-full items-center gap-3 rounded-lg border border-dashed border-line bg-panel px-5 py-6 text-left font-mono text-sm text-muted transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            <span className="text-lg">▢</span>
            {data.terminalClosed}
          </button>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate("baza")}
            className="focus-ring rounded-md border border-cyan/40 bg-cyan/10 px-5 py-2.5 font-mono text-sm text-cyan transition-colors hover:bg-cyan/20"
          >
            {data.openProjects}
          </button>

          <button
            onClick={() => onNavigate("experience")}
            className="focus-ring rounded-md border border-line px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:border-mutedDark hover:text-ink"
          >
            {data.viewExperience}
          </button>

          <button
            onClick={() => onNavigate("contact")}
            className="focus-ring rounded-md border border-line px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:border-mutedDark hover:text-ink"
          >
            {data.openContact}
          </button>
        </div>
      </div>
    </section>
  );
}