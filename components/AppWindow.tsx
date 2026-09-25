"use client";

import { ReactNode, useEffect } from "react";
import { Maximize2, Minus } from "lucide-react";

type AppWindowProps = {
  title: string;
  appName?: string;
  children: ReactNode;
  onClose: () => void;
  onMinimize?: () => void;
};

export default function AppWindow({
  title,
  appName,
  children,
  onClose,
  onMinimize,
}: AppWindowProps) {
  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "w"
      ) {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-3 pb-28 pt-16 sm:px-8">
      {/* Background */}
      <button
        type="button"
        aria-label="Fechar janela"
        onClick={onClose}
        className="
          absolute
          inset-0
          cursor-default
          bg-black/30
          backdrop-blur-[3px]
        "
      />

      {/* Window */}
      <div
        className="
          relative
          flex
          h-[min(720px,calc(100vh-9rem))]
          w-full
          max-w-5xl
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#111]/95
          backdrop-blur-2xl
          animate-window-in
        "
      >
        {/* Traffic bar */}
        <header
          className="
            relative
            flex
            h-12
            shrink-0
            items-center
            border-b
            border-white/10
            bg-white/[0.025]
            px-4
          "
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            {/* Close */}
            <button
              type="button"
              aria-label="Fechar"
              onClick={onClose}
              className="
                group
                flex
                h-3
                w-3
                items-center
                justify-center
                rounded-full
                bg-[#ff5f57]
                transition-transform
                hover:scale-110
              "
            >
              <span className="text-[7px] font-bold text-cyan/60 opacity-0">
                ×
              </span>
            </button>

            {/* Minimize */}
            <button
              type="button"
              aria-label="Minimizar"
              onClick={onMinimize}
              className="
                group
                flex
                h-3
                w-3
                items-center
                justify-center
                rounded-full
                bg-[#febc2e]
                transition-transform
                hover:scale-110
              "
            >
              <Minus
                size={7}
                strokeWidth={3}
                className="text-cyan/60 opacity-0 "
              />
            </button>

            {/* Maximize */}
            <button
              type="button"
              aria-label="Maximizar"
              className="
                group
                flex
                h-3
                w-3
                items-center
                justify-center
                rounded-full
                bg-[#28c840]
                transition-transform
                hover:scale-110
              "
            >
              <Maximize2
                size={6}
                strokeWidth={3}
                className="text-cyan/60 opacity-0"
              />
            </button>
          </div>

          {/* Center title */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              flex
              -translate-x-1/2
              items-center
              gap-2
            "
          >
            <span className="font-mono text-xs text-muted">
              {appName ?? title}
            </span>
          </div>

          {/* Right metadata */}
          <div className="ml-auto hidden font-mono text-[9px] uppercase tracking-wider text-muted/40 sm:block">
            {title}
          </div>
        </header>

        {/* Content */}
        <main className="min-h-0 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}