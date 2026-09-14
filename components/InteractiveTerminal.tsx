"use client";

import { useEffect, useRef, useState } from "react";
import { runCommand, toneClass, OutputLine } from "@/lib/terminal-commands";

type HistoryLine = OutputLine & { kind: "input" | "output" };
type BootLine = { prompt: boolean; text: string; tone?: OutputLine["tone"] };

const BOOT_SCRIPT: BootLine[] = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "William Humbwavali", tone: "ink" },
  {
    prompt: false,
    text: "> Full-Stack Software Engineer · Luanda, Angola",
    tone: "muted",
  },
  { prompt: true, text: "cat focus.txt" },
  {
    prompt: false,
    text: "Construo produtos digitais, sistemas e negócios — do zero à produção.",
    tone: "muted",
  },
  { prompt: true, text: "ls ./projects" },
  {
    prompt: false,
    text: "lithe-php/  bando/  baza/  rialse/  bvf/",
    tone: "cyan",
  },
];

const QUICK_COMMANDS = [
  "help",
  "whoami",
  "experience",
  "projects",
  "skills",
  "contact",
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function InteractiveTerminal({
  onNavigate,
  onClose,
}: {
  onNavigate: (id: string) => void;
  onClose: () => void;
}) {
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [input, setInput] = useState("");
  const [booting, setBooting] = useState(true);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number | null>(null);

  const busyRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Boot sequence: types out the intro script line by line, char by char.
  useEffect(() => {
    let cancelled = false;

    (async () => {
      for (const line of BOOT_SCRIPT) {
        setHistory((h) => [
          ...h,
          {
            kind: line.prompt ? "input" : "output",
            text: "",
            tone: line.tone ?? "ink",
          },
        ]);

        for (let c = 0; c <= line.text.length; c++) {
          if (cancelled) return;

          const partial = line.text.slice(0, c);

          setHistory((h) => {
            const copy = [...h];

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

      if (!cancelled) setBooting(false);
    })();

    return () => {
      cancelled = true;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
    });
  }, [history, booting]);

  useEffect(() => {
    if (!booting) inputRef.current?.focus();
  }, [booting]);

  function execute(raw: string) {
    const result = runCommand(raw);

    setHistory((h) => [
      ...h,
      { kind: "input", text: raw, tone: "ink" },
      ...result.lines.map((l) => ({
        kind: "output" as const,
        ...l,
      })),
    ]);

    if (result.action === "clear") setHistory([]);

    if (result.navigateTo) onNavigate(result.navigateTo);

    if (result.action === "close") {
      setTimeout(onClose, 500);
    }
  }

  async function typeCommand(cmd: string) {
    if (busyRef.current || booting) return;

    busyRef.current = true;
    setInput("");

    for (let i = 0; i <= cmd.length; i++) {
      setInput(cmd.slice(0, i));
      await sleep(28);
    }

    await sleep(160);

    execute(cmd);
    setInput("");

    setCmdHistory((h) => [...h, cmd]);
    setHistoryPointer(null);
    busyRef.current = false;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!input.trim() || booting) return;

    execute(input);
    setCmdHistory((h) => [...h, input]);
    setHistoryPointer(null);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (cmdHistory.length === 0) return;

      const nextPointer =
        historyPointer === null
          ? cmdHistory.length - 1
          : Math.max(0, historyPointer - 1);

      setHistoryPointer(nextPointer);
      setInput(cmdHistory[nextPointer]);
    } else if (e.key === "ArrowDown") {
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
    <div className="rounded-lg border border-line bg-panel overflow-hidden">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5 bg-panelAlt">
        <button
          onClick={onClose}
          aria-label="Fechar terminal"
          className="focus-ring h-2.5 w-2.5 rounded-full bg-red/70 transition-transform hover:scale-125"
        />

        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />

        <span className="h-2.5 w-2.5 rounded-full bg-green/70" />

        <span className="ml-3 font-mono text-xs text-muted">
          ~/william — zsh
        </span>
      </div>

      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="max-h-[360px] overflow-y-auto p-5 sm:p-6 font-mono text-[13px] leading-relaxed sm:text-sm cursor-text"
      >
        {history.map((line, i) =>
          line.kind === "input" ? (
            <div key={i} className="flex gap-2">
              <span className="shrink-0 text-green">➜</span>

              <span className="shrink-0 text-purple">~</span>

              <span className="text-ink">{line.text}</span>
            </div>
          ) : (
            <div
              key={i}
              className={`whitespace-pre-wrap pl-6 ${toneClass(line.tone)}`}
            >
              {line.text}
            </div>
          )
        )}

        {!booting && (
          <form onSubmit={handleSubmit} className="mt-1 flex gap-2">
            <span className="shrink-0 text-green">➜</span>

            <span className="shrink-0 text-purple">~</span>

            <input
              ref={inputRef}
              value={input}
              id="terminal"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              aria-label="Escreve um comando do terminal"
              placeholder="escreve um comando... (tenta: help)"
              className="w-full bg-transparent text-ink caret-cyan outline-none placeholder:text-mutedDark"
            />
          </form>
        )}

        {booting && (
          <span className="ml-6 animate-blink text-ink">▍</span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-line bg-panelAlt px-4 py-3">
        <span className="font-mono text-[11px] text-mutedDark">
          novo por aqui? experimenta:
        </span>

        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            onClick={() => typeCommand(cmd)}
            disabled={booting}
            className="focus-ring rounded border border-line bg-panel px-2.5 py-1 font-mono text-[11px] text-cyan transition-colors hover:border-cyan/40 hover:bg-cyan/10 disabled:opacity-40"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}