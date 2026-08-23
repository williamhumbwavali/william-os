"use client";

import { useEffect, useRef, useState } from "react";

const BOOT_LOG = [
  "a carregar whOS v1.0...",
  "a montar /about",
  "a montar /projects (lithe-php, baza, rialse, music-app)",
  "a iniciar terminal interativo...",
  "pronto.",
];

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced.current) {
      const t = setTimeout(() => {
        setFading(true);
        setTimeout(onDone, 150);
      }, 150);
      return () => clearTimeout(t);
    }

    const step = 100 / BOOT_LOG.length;
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + step);
        return next;
      });
      setLogIndex((i) => Math.min(BOOT_LOG.length - 1, i + 1));
    }, 260);

    return () => clearInterval(interval);
  }, [onDone]);

  useEffect(() => {
    if (progress >= 100 && !fading) {
      const t = setTimeout(() => {
        setFading(true);
        setTimeout(onDone, 350);
      }, 260);
      return () => clearTimeout(t);
    }
  }, [progress, fading, onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base transition-opacity duration-300 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="w-72 font-mono text-xs text-muted sm:w-80">
        <div className="mb-6 flex items-center gap-2 text-ink">
          <span className="text-cyan">■</span>
          <span className="text-base font-semibold tracking-wide">whOS</span>
        </div>
        <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-cyan transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="space-y-1">
          {BOOT_LOG.slice(0, logIndex + 1).map((line, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-green">✓</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
