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
      className: "text-blue-600 dark:text-blue-400",
    },
    {
      value: "Software Developer",
      className: "text-black dark:text-[#e6edf3]",
    },
    {
      value: "software open source",
      className: "text-emerald-600 dark:text-emerald-400",
    },
    {
      value: "Bando CMS",
      className: "text-black dark:text-[#e6edf3]",
    },
    {
      value: "Next.js",
      className: "text-violet-600 dark:text-violet-400",
    },
    {
      value: "NestJS",
      className: "text-rose-600 dark:text-rose-400",
    },
    {
      value: "Njila",
      className: "text-black dark:text-[#e6edf3]",
    },
    {
      value: "React",
      className: "text-sky-600 dark:text-sky-400",
    },
    {
      value: "Lithe",
      className: "text-black dark:text-[#e6edf3]",
    },
    {
      value: "Baza",
      className: "text-black dark:text-[#e6edf3]",
    },
    {
      value: "Rialse",
      className: "text-black dark:text-[#e6edf3]",
    },
    {
      value: "terminal",
      className: "text-cyan-600 dark:text-cyan-400",
    },
    {
      value: "PHP",
      className: "text-purple dark:text-purple-400",
    },
    {
      value: "JavaScript/TypeScript",
      className: "text-amber dark:text-amber-400",
    },
    {
      value: "JavaScript",
      className: "text-amber dark:text-amber-400",
    },
    {
      value: "TypeScript",
      className: "text-amber dark:text-amber-400",
    },
  ];

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
      className="
        relative
        scroll-mt-16
        overflow-hidden
        border-b
        border-black/10
        bg-white
        px-5
        py-16
        transition-colors
        duration-300
        dark:border-white/[0.07]
        dark:bg-[#090a0a]
        sm:px-10
        sm:py-24
        lg:px-16
      "
    >
      {/* Dots */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-dots
          opacity-100
        "
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <p
            className="
              shrink-0
              font-mono
              text-xs
              uppercase
              tracking-[0.2em]
              text-black
              dark:text-[#c9d1d9]
            "
          >
            portfolio
          </p>

          <span
            className="
              h-px
              flex-1
              bg-black/10
              dark:bg-white/[0.07]
            "
          />

          <span
            className="
              shrink-0
              font-mono
              text-[11px]
              text-mutedDark
              dark:text-[#66707c]
            "
          >
            page.tsx
          </span>
        </div>

        {/* Headline */}
        <h1
          className="
    mb-6
    font-display
    text-4xl
    font-semibold
    leading-[1.1]
    tracking-[-0.025em]
    text-[#17191d]
    transition-colors
    dark:text-[#b8bec6]
    sm:text-5xl
  "
        >
          {data.headline}
        </h1>

        {/* Description */}
        <p
          className="
            mb-10
            max-w-2xl
            font-body
            text-base
            leading-relaxed
            text-muted
            transition-colors
            dark:text-[#8b949e]
            sm:text-lg
          "
        >
          {highlightDescription(data.description)}
        </p>

        {/* Terminal */}
        {terminalOpen ? (
          <InteractiveTerminal
            onNavigate={onNavigate}
            onClose={onCloseTerminal}
            terminal={terminal}
          />
        ) : (
          <button
            onClick={onOpenTerminal}
            className="
              focus-ring
              flex
              w-full
              items-center
              gap-3
              rounded-lg
              border
              border-dashed
              border-black/20
              bg-neutral-50
              px-5
              py-6
              text-left
              font-mono
              text-sm
              text-muted
              transition-all
              hover:border-cyan/40
              hover:text-cyan
              dark:border-[#20252b]
              dark:bg-[#0d0f0f]
              dark:text-[#7d8792]
              dark:hover:border-cyan/30
              dark:hover:bg-[#101313]
              dark:hover:text-cyan-400
            "
          >
            <span
              className="
                text-lg
                text-neutral-500
                dark:text-[#626b75]
              "
            >
              ▢
            </span>

            {data.terminalClosed}
          </button>
        )}

        {/* Actions */}
        <div className="mt-10 flex flex-wrap gap-3">
          {/* Projects */}
          <button
            onClick={() => onNavigate("baza")}
            className="
              focus-ring
              rounded-md
              border
              border-black/10
              bg-black/[0.06]
              px-5
              py-2.5
              font-mono
              text-sm
              text-black
              transition-all
              hover:bg-black/[0.10]
              dark:border-[#242a30]
              dark:bg-[#151818]
              dark:text-[#d8dee4]
              dark:hover:border-[#30373d]
              dark:hover:bg-[#191c1c]
            "
          >
            {data.openProjects}
          </button>

          {/* Experience */}
          <button
            onClick={() => onNavigate("experience")}
            className="
              focus-ring
              rounded-md
              border
              border-black/20
              bg-white
              px-5
              py-2.5
              font-mono
              text-sm
              text-muted
              transition-all
              hover:border-mutedDark
              hover:text-black
              dark:border-[#20252b]
              dark:bg-[#0d0f0f]
              dark:text-[#858e98]
              dark:hover:border-[#343b42]
              dark:hover:bg-[#121515]
              dark:hover:text-[#d8dee4]
            "
          >
            {data.viewExperience}
          </button>

          {/* Contact */}
          <button
            onClick={() => onNavigate("contact")}
            className="
              focus-ring
              rounded-md
              border
              border-black/20
              bg-white
              px-5
              py-2.5
              font-mono
              text-sm
              text-muted
              transition-all
              hover:border-mutedDark
              hover:text-black
              dark:border-[#20252b]
              dark:bg-[#0d0f0f]
              dark:text-[#858e98]
              dark:hover:border-[#343b42]
              dark:hover:bg-[#121515]
              dark:hover:text-[#d8dee4]
            "
          >
            {data.openContact}
          </button>
        </div>
      </div>
    </section>
  );
}