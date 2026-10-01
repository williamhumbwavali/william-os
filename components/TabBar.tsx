"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

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

  const { isDark, toggleTheme } = useTheme();

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

  const changeLocale = (
    newLocale: "pt-PT" | "en-US"
  ) => {
    if (newLocale === ui.locale) return;

    localStorage.setItem("locale", newLocale);

    window.location.href =
      newLocale === "en-US" ? "/en" : "/";
  };

  const fallbackColors: Record<string, string> = {
    ts: "text-blue-500",
    tsx: "text-cyan-500",
    js: "text-yellow-500",
    jsx: "text-yellow-500",
    php: "text-purple-500",
    json: "text-amber-500",
    md: "text-green-500",
    css: "text-pink-500",
    html: "text-orange-500",
    sql: "text-indigo-500",
    py: "text-blue-600",
  };

  return (
    <div className="sticky top-0 z-30 border-b border-black/10 bg-white/90 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#090a0a]">
      <div className="flex items-center">
        {/* Tabs */}
        <div className="flex flex-1 items-center overflow-x-auto no-scrollbar">
          {/* whOS */}
          <div className="flex shrink-0 items-center gap-2 border-r border-black/10 px-4 py-3 font-mono text-xs text-muted dark:border-white/10">
            <span className="h-2 w-2 rounded-full bg-cyan" />
            whEnv
          </div>

          {/* Files */}
          {files.map((file) => {
            const active = activeId === file.id;

            const color =
              extColor[file.ext] ??
              fallbackColors[file.ext] ??
              "text-neutral-400";

            return (
              <button
                key={file.id}
                onClick={() => onNavigate(file.id)}
                className={`focus-ring flex shrink-0 items-center gap-2 border-r border-black/10 px-4 py-3 font-mono text-xs transition-colors dark:border-white/10 ${
                  active
                    ? "bg-neutral-100 text-neutral-950 dark:bg-white/[0.06] dark:text-white"
                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-950 dark:text-neutral-500 dark:hover:bg-white/[0.03] dark:hover:text-white"
                }`}
              >
                <span className={color}>●</span>
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
            terminalOpen
              ? ui.closeTerminal
              : ui.openTerminal
          }
          className={`focus-ring flex shrink-0 items-center gap-2 border-l border-black/10 px-4 py-3 font-mono text-xs transition-colors dark:border-white/10 ${
            terminalOpen
              ? "text-cyan-600 dark:text-cyan-400"
              : "text-neutral-500 hover:text-neutral-950 dark:hover:text-white"
          }`}
        >
          <span>&gt;_</span>

          <span className="hidden sm:inline">
            {ui.terminal}
          </span>
        </button>

        {/* Theme + Language + Time */}
        <div className="hidden shrink-0 items-center gap-3 border-l border-black/10 px-4 py-2.5 sm:flex dark:border-white/10">
          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              isDark
                ? "Light mode"
                : "Dark mode"
            }
            className="flex h-7 w-7 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-black/5 hover:text-neutral-950 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {isDark ? (
              /* Sun */
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.25"
                />

                <path
                  d="M8 1.5V3M8 13V14.5M14.5 8H13M3 8H1.5M12.6 3.4L11.55 4.45M4.45 11.55L3.4 12.6M12.6 12.6L11.55 11.55M4.45 4.45L3.4 3.4"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              /* Moon */
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M13.5 9.8A5.8 5.8 0 0 1 6.2 2.5a5.8 5.8 0 1 0 7.3 7.3Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {/* Language */}
          <div className="relative">
            <select
              value={ui.locale}
              onChange={(event) =>
                changeLocale(
                  event.target.value as
                    | "pt-PT"
                    | "en-US"
                )
              }
              aria-label={ui.language}
              className="
                cursor-pointer
                appearance-none
                rounded-md
                border
                border-black/10
                bg-neutral-100
                py-1.5
                pl-2.5
                pr-7
                font-mono
                text-[11px]
                text-neutral-600
                outline-none
                transition
                hover:bg-neutral-200
                focus:border-black/20
                focus:bg-neutral-100
                dark:border-white/10
                dark:bg-white/[0.05]
                dark:text-neutral-400
                dark:hover:bg-white/[0.08]
                dark:focus:border-white/20
                dark:focus:bg-white/[0.08]
              "
            >
              <option value="pt-PT">PT</option>
              <option value="en-US">EN</option>
            </select>

            {/* Chevron */}
            <svg
              className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-neutral-400"
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
          <span className="font-mono text-xs text-neutral-500">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}