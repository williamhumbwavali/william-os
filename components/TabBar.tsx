"use client";

import { useEffect, useState } from "react";

interface TabBarProps {
  activeId: string;
  onNavigate: (id: string) => void;
  terminalOpen: boolean;
  onToggleTerminal: () => void;

  ui: {
    locale: "pt-PT" | "en-US";
    terminal: string;
    openTerminal: string;
    closeTerminal: string;
    language: string;
  };

  files: {
    id: string;
    label: string;
    ext: string;
  }[];

  extColor: Record<string, string>;
}

export default function TabBar({
  activeId,
  onNavigate,
  terminalOpen,
  onToggleTerminal,
  ui,
  files,
  extColor,
}: TabBarProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString(ui.locale, {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    update();

    const id = setInterval(update, 15000);

    return () => clearInterval(id);
  }, [ui.locale]);

  const changeLocale = (newLocale: "pt-PT" | "en-US") => {
    if (newLocale === ui.locale) return;

    localStorage.setItem("locale", newLocale);

    window.location.href = newLocale === "en-US" ? "/en" : "/";
  };

  return (
    <div className="sticky top-0 z-30 border-b border-line bg-base/90 backdrop-blur">
      <div className="flex items-center">
        {/* Tabs */}
        <div className="flex flex-1 items-center overflow-x-auto no-scrollbar">
          {/* whOS */}
          <div className="flex shrink-0 items-center gap-2 border-r border-line px-4 py-3 font-mono text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-cyan" />
            whOS
          </div>

          {/* Files */}
          {files.map((file) => {
            const active = activeId === file.id;

            return (
              <button
                key={file.id}
                onClick={() => onNavigate(file.id)}
                className={`focus-ring flex shrink-0 items-center gap-2 border-r border-line px-4 py-3 font-mono text-xs transition-colors ${
                  active
                    ? "bg-panel text-ink"
                    : "text-muted hover:bg-panelAlt hover:text-ink"
                }`}
              >
                <span className={extColor[file.ext]}>●</span>

                {file.label}
              </button>
            );
          })}
        </div>

        {/* Terminal */}
        <button
          onClick={onToggleTerminal}
          aria-pressed={terminalOpen}
          title={
            terminalOpen ? ui.closeTerminal : ui.openTerminal
          }
          className={`focus-ring flex shrink-0 items-center gap-2 border-l border-line px-4 py-3 font-mono text-xs transition-colors ${
            terminalOpen
              ? "text-cyan"
              : "text-muted hover:text-ink"
          }`}
        >
          <span>&gt;_</span>

          <span className="hidden sm:inline">
            {ui.terminal}
          </span>
        </button>

        {/* Language + Time */}
        <div className="hidden shrink-0 items-center gap-3 border-l border-line px-4 py-2.5 sm:flex">
          <div className="relative">
            <select
              value={ui.locale}
              onChange={(event) =>
                changeLocale(
                  event.target.value as "pt-PT" | "en-US"
                )
              }
              aria-label={ui.language}
              className="
                appearance-none
                cursor-pointer
                rounded-md
                border
                border-white/10
                bg-white/5
                py-1.5
                pl-2.5
                pr-7
                font-mono
                text-[11px]
                text-muted
                outline-none
                backdrop-blur-md
                transition
                hover:bg-white/10
                focus:border-white/20
                focus:bg-white/10
              "
            >
              <option value="pt-PT">PT</option>
              <option value="en-US">EN</option>
            </select>

            {/* Chevron */}
            <svg
              className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Clock */}
          <span className="font-mono text-xs text-muted">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}