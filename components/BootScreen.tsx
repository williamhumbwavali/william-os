"use client";

import { useEffect, useRef, useState } from "react";

interface BootScreenProps {
  onDone: () => void;
  bootLog: string[];
}

export default function BootScreen({
  onDone,
  bootLog,
}: BootScreenProps) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced.current) {
      const fadeTimer = setTimeout(() => {
        setFading(true);

        const doneTimer = setTimeout(onDone, 150);

        return () => clearTimeout(doneTimer);
      }, 150);

      return () => clearTimeout(fadeTimer);
    }

    const step = 100 / bootLog.length;

    const interval = setInterval(() => {
      setProgress((current) => {
        const next = Math.min(100, current + step);
        return next;
      });

      setLogIndex((current) =>
        Math.min(bootLog.length - 1, current + 1)
      );
    }, 260);

    return () => clearInterval(interval);
  }, [bootLog, onDone]);

  useEffect(() => {
    if (progress < 100 || fading) return;

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 260);

    const doneTimer = setTimeout(() => {
      onDone();
    }, 610);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [progress, fading, onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base transition-opacity duration-300 ${
        fading
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="w-72 font-mono text-xs text-muted sm:w-80">
        <div className="mb-6 flex items-center gap-2 text-ink">
          <span className="text-cyan">■</span>

          <span className="text-base font-semibold tracking-wide">
            whOS
          </span>
        </div>

        <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-cyan transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-1">
          {bootLog
            .slice(0, logIndex + 1)
            .map((line, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                <span className="text-green">✓</span>
                <span>{line}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}