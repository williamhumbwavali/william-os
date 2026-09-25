"use client";

import React from "react";
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

export function highlightDescription(text: string) {
  const terms = [
    {
      value: "React Native",
      className: "text-blue-600",
    },
    {
      value: "Software Developer",
      className: "text-cyan",
    },
    {
      value: "software open source",
      className: "text-emerald-600",
    },
    {
      value: "Bando CMS",
      className: "text-cyan",
    },
    {
      value: "Next.js",
      className: "text-violet-600",
    },
    {
      value: "NestJS",
      className: "text-rose-600",
    },
    {
      value: "Njila",
      className: "text-rose-600",
    },
    {
      value: "React",
      className: "text-sky-600",
    },
    {
      value: "Lithe",
      className: "text-violet-700",
    },
    {
      value: "Baza",
      className: "text-black",
    },
    {
      value: "Rialse",
      className: "text-green",
    },
    {
      value: "terminal",
      className: "text-cyan-600",
    },

    {
      value: "PHP",
      className: "text-purple",
    },
    {
      value: "JavaScript/TypeScript",
      className: "text-amber",
    },
  ];

  // Termos maiores primeiro para evitar conflitos.
  const sortedTerms = [...terms].sort(
    (a, b) => b.value.length - a.value.length
  );

  const escapeRegex = (value: string) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const pattern = new RegExp(
    `(${sortedTerms
      .map((term) => escapeRegex(term.value))
      .join("|")})`,
    "gi"
  );

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const match = sortedTerms.find(
      (term) =>
        term.value.toLowerCase() === part.toLowerCase()
    );

    if (!match) {
      return (
        <React.Fragment key={index}>
          {part}
        </React.Fragment>
      );
    }

    return (
      <span
        key={index}
        className={match.className}
      >
        {part}
      </span>
    );
  });
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
      className="relative scroll-mt-16 overflow-hidden border-b border-black/10 bg-dots px-5 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-3">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            portfolio
          </p>

          <span className="h-px flex-1 bg-black/10" />

          <span className="shrink-0 font-mono text-[11px] text-mutedDark">
            page.tsx
          </span>
        </div>

        <h1 className="mb-6 font-display text-4xl font-semibold leading-[1.1] text-black sm:text-5xl">
          {data.headline}
        </h1>

        <p className="mb-10 max-w-2xl font-body text-base text-muted sm:text-lg">
          {highlightDescription(data.description)}
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
            className="focus-ring flex w-full items-center gap-3 rounded-lg border border-dashed border-black/20 bg-neutral-50 px-5 py-6 text-left font-mono text-sm text-muted transition-colors hover:border-cyan/40 hover:text-cyan"
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
            className="focus-ring bg-white rounded-md border border-black/20 px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:border-mutedDark hover:text-black"
          >
            {data.viewExperience}
          </button>

          <button
            onClick={() => onNavigate("contact")}
            className="focus-ring bg-white rounded-md border border-black/20 px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:border-mutedDark hover:text-black"
          >
            {data.openContact}
          </button>
        </div>
      </div>
    </section>
  );
}