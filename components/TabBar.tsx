"use client";

import { useEffect, useState } from "react";
import { files, extColor } from "@/lib/data";

export default function TabBar({
  activeId,
  onNavigate,
  terminalOpen,
  onToggleTerminal,
}: {
  activeId: string;
  onNavigate: (id: string) => void;
  terminalOpen: boolean;
  onToggleTerminal: () => void;
}) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })
      );
    update();
    const id = setInterval(update, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="sticky top-0 z-30 border-b border-line bg-base/90 backdrop-blur">
      <div className="flex items-center">
        <div className="flex flex-1 items-center overflow-x-auto no-scrollbar">
          <div className="flex shrink-0 items-center gap-2 border-r border-line px-4 py-3 font-mono text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-cyan" />
            whOS
          </div>
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

        <button
          onClick={onToggleTerminal}
          aria-pressed={terminalOpen}
          title={terminalOpen ? "Fechar terminal" : "Abrir terminal"}
          className={`focus-ring flex shrink-0 items-center gap-2 border-l border-line px-4 py-3 font-mono text-xs transition-colors ${
            terminalOpen ? "text-cyan" : "text-muted hover:text-ink"
          }`}
        >
          <span>&gt;_</span>
          <span className="hidden sm:inline">terminal</span>
        </button>
        <div className="hidden shrink-0 items-center border-l border-line px-4 py-3 font-mono text-xs text-muted sm:flex">
          {time}
        </div>
      </div>
    </div>
  );
}
