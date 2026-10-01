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
  const [isDark, setIsDark] = useState(true);

  const reduced = useRef(false);

  useEffect(() => {
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);

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
        Math.min(
          bootLog.length - 1,
          current + 1
        )
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
      className={`
        fixed inset-0 z-[100]
        flex flex-col items-center justify-center
        transition-opacity duration-300
        ${isDark
          ? "bg-[#090a0a] text-[#c9d1d9]"
          : "bg-white text-black"
        }
        ${fading
          ? "pointer-events-none opacity-0"
          : "opacity-100"
        }
      `}
      aria-hidden="true"
    >
      <div
        className={`
          w-72
          font-mono text-xs
          sm:w-80
          ${isDark
            ? "text-[#66707c]"
            : "text-neutral-500"
          }
        `}
      >
        {/* Brand */}
        <div
          className={`
            mb-6
            flex items-center gap-2
            ${isDark
              ? "text-white"
              : "text-neutral-950"
            }
          `}
        >
          <span className="text-cyan">
            ■
          </span>

          <span
            className={`
    text-base font-semibold tracking-wide
    ${isDark ? "text-white" : "text-neutral-950"}
  `}
          >
            whEnv
          </span>
        </div>

        {/* Progress */}
        <div
          className={`
            mb-4
            h-1.5 w-full
            overflow-hidden
            rounded-full
            ${isDark
              ? "bg-[#20252b]"
              : "bg-neutral-200"
            }
          `}
        >
          <div
            className="
              h-full
              rounded-full
              bg-cyan
              transition-[width]
              duration-200
              ease-out
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        {/* Boot log */}
        <div className="space-y-1">
          {bootLog
            .slice(0, logIndex + 1)
            .map((line, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                <span className="text-green">
                  ✓
                </span>

                <span>
                  {line}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}