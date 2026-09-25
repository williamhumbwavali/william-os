"use client";

import { useEffect, useRef, useState } from "react";

import {
  runCommand,
  toneClass,
  OutputLine,
} from "@/lib/terminal-commands";

type HistoryLine = OutputLine & {
  kind: "input" | "output";
};

type BootLine = {
  prompt: boolean;
  text: string;
  tone?: OutputLine["tone"];
};

interface InteractiveTerminalProps {
  onNavigate: (id: string) => void;
  onClose: () => void;
  terminal: {
    closeLabel: string;
    ariaLabel: string;
    placeholder: string;
    quickLabel: string;
    home: string;
    bootScript: BootLine[];
  };
}

const QUICK_COMMANDS = [
  "help",
  "whoami",
  "experience",
  "projects",
  "skills",
  "contact",
];

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default function InteractiveTerminal({
  onNavigate,
  onClose,
  terminal,
}: InteractiveTerminalProps) {
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [input, setInput] = useState("");
  const [booting, setBooting] = useState(true);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number | null>(
    null
  );

  const busyRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      for (const line of terminal.bootScript) {
        if (cancelled) return;

        setHistory((current) => [
          ...current,
          {
            kind: line.prompt ? "input" : "output",
            text: "",
            tone: line.tone ?? "ink",
          },
        ]);

        for (let c = 0; c <= line.text.length; c++) {
          if (cancelled) return;

          const partial = line.text.slice(0, c);

          setHistory((current) => {
            const copy = [...current];

            copy[copy.length - 1] = {
              kind: line.prompt ? "input" : "output",
              text: partial,
              tone: line.tone ?? "ink",
            };

            return copy;
          });

          await sleep(line.prompt ? 42 : 10);
        }

        await sleep(220);
      }

      if (!cancelled) {
        setBooting(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [terminal.bootScript]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
    });
  }, [history, booting]);

  function execute(raw: string) {
    const result = runCommand(raw);

    setHistory((current) => [
      ...current,
      {
        kind: "input",
        text: raw,
        tone: "ink",
      },
      ...result.lines.map((line) => ({
        kind: "output" as const,
        ...line,
      })),
    ]);

    if (result.action === "clear") {
      setHistory([]);
    }

    if (result.navigateTo) {
      onNavigate(result.navigateTo);
    }

    if (result.action === "close") {
      setTimeout(onClose, 500);
    }
  }

  async function typeCommand(command: string) {
    if (busyRef.current || booting) return;

    busyRef.current = true;
    setInput("");

    for (let i = 0; i <= command.length; i++) {
      setInput(command.slice(0, i));
      await sleep(28);
    }

    await sleep(160);

    execute(command);

    setInput("");

    setCmdHistory((current) => [...current, command]);
    setHistoryPointer(null);

    busyRef.current = false;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!input.trim() || booting) return;

    execute(input);

    setCmdHistory((current) => [...current, input]);
    setHistoryPointer(null);
    setInput("");
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (cmdHistory.length === 0) return;

      const nextPointer =
        historyPointer === null
          ? cmdHistory.length - 1
          : Math.max(0, historyPointer - 1);

      setHistoryPointer(nextPointer);
      setInput(cmdHistory[nextPointer]);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (historyPointer === null) return;

      const nextPointer = historyPointer + 1;

      if (nextPointer >= cmdHistory.length) {
        setHistoryPointer(null);
        setInput("");
      } else {
        setHistoryPointer(nextPointer);
        setInput(cmdHistory[nextPointer]);
      }
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
      {/* Window header */}
      <div className="flex items-center gap-2 border-b border-black/10 bg-neutral-50 px-4 py-2.5">
        <button
          onClick={onClose}
          aria-label={terminal.closeLabel}
          className="focus-ring h-2.5 w-2.5 rounded-full bg-red transition-transform hover:scale-125"
        />

        <span className="h-2.5 w-2.5 rounded-full bg-amber" />

        <span className="h-2.5 w-2.5 rounded-full bg-green" />

        <span className="ml-3 font-mono text-xs text-muted">
          {terminal.home}
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="max-h-[360px] cursor-text overflow-y-auto bg-white p-5 font-mono text-[13px] leading-relaxed sm:p-6 sm:text-sm"
      >
        {history.map((line, index) =>
          line.kind === "input" ? (
            <div key={index} className="flex gap-2">
              <span className="shrink-0 text-green">
                ➜
              </span>

              <span className="shrink-0 text-purple">
                ~
              </span>

              <span className="text-gray-300">
                {line.text}
              </span>
            </div>
          ) : (
            <div
              key={index}
              className={`whitespace-pre-wrap pl-6 ${toneClass(
                line.tone
              )}`}
            >
              {line.text}
            </div>
          )
        )}

        {!booting && (
          <form
            onSubmit={handleSubmit}
            className="mt-1 flex gap-2"
          >
            <span className="shrink-0 text-green">
              ➜
            </span>

            <span className="shrink-0 text-purple">
              ~
            </span>

            <input
              ref={inputRef}
              value={input}
              id="terminal"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              aria-label={terminal.ariaLabel}
              placeholder={terminal.placeholder}
              className="w-full bg-transparent text-gray-300 caret-cyan outline-none placeholder:text-mutedDark"
            />
          </form>
        )}

        {booting && (
          <span className="ml-6 animate-blink text-gray-300">
            ▍
          </span>
        )}
      </div>

      {/* Quick commands */}
      <div className="flex flex-wrap items-center gap-2 border-t border-black/10 bg-neutral-50 px-4 py-3">
        <span className="font-mono text-[11px] text-mutedDark">
          {terminal.quickLabel}
        </span>

        {QUICK_COMMANDS.map((command) => (
          <button
            key={command}
            onClick={() => typeCommand(command)}
            disabled={booting}
            className="focus-ring rounded border border-black/10 bg-white px-2.5 py-1 font-mono text-[11px] text-cyan transition-colors hover:border-cyan/40 hover:bg-cyan/10 disabled:opacity-40"
          >
            {command}
          </button>
        ))}
      </div>
    </div>
  );
}