"use client";

import Image from "next/image";
import { Terminal } from "lucide-react";
import { useState } from "react";

export type DockApp = {
  id: string;
  name: string;
  icon: string;
  type: "image";
  href: string;
};

type DockProps = {
  apps: DockApp[];
  onOpenTerminal: () => void;
};

export const DOCK_APPS: DockApp[] = [
  {
    id: "baza",
    name: "Baza",
    icon: "/baza.png",
    type: "image",
    href: "https://bazaja.vercel.app",
  },
  {
    id: "lithe",
    name: "Lithe",
    icon: "/lithecore.png",
    type: "image",
    href: "https://pt-lithephp.vercel.app",
  },
];

export default function Dock({
  apps,
  onOpenTerminal,
}: DockProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleOpen = (app: DockApp) => {
    window.open(
      app.href,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <aside className="fixed bottom-5 right-5 z-[90]">
      <div
        onMouseLeave={() => setHoveredId(null)}
        className="
          relative
          flex
          flex-col
          items-center
          gap-2
          rounded-[24px]
          border
          border-white/[0.10]
          bg-white/[0.035]
          px-2.5
          py-2.5
          backdrop-blur-2xl
          backdrop-saturate-150
        "
      >
        {/* Glass highlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[24px]
          "
        />

        {/* Top reflection */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-4
            top-0
            h-px
          "
        />

        {/* Terminal */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setHoveredId("terminal")}
        >
          {/* Tooltip */}
          <div
            className={`
              pointer-events-none
              absolute
              right-[calc(100%+12px)]
              top-1/2
              -translate-y-1/2
              whitespace-nowrap
              rounded-lg
              border
              border-white/[0.10]
              bg-black/50
              px-3
              py-1.5
              font-mono
              text-[11px]
              text-white
              backdrop-blur-xl
              transition-all
              duration-150
              ${hoveredId === "terminal"
                ? "translate-x-0 opacity-100"
                : "translate-x-2 opacity-0"
              }
            `}
          >
            Terminal
          </div>

          <button
            type="button"
            aria-label="Focar no Terminal"
            onClick={onOpenTerminal}
            className="
    group
    relative
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-[16px]
    bg-[#090909]
    text-cyan
    transition-transform
    duration-200
    hover:scale-105
  "
          >
            <Terminal
              size={25}
              strokeWidth={1.7}
              className="transition-transform group-hover:scale-110"
            />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px w-8 bg-white/[0.08]" />

        {/* Apps */}
        {apps.map((app) => {
          const isHovered = hoveredId === app.id;

          return (
            <div
              key={app.id}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredId(app.id)}
            >
              {/* Tooltip */}
              <div
                className={`
                  pointer-events-none
                  absolute
                  right-[calc(100%+12px)]
                  top-1/2
                  -translate-y-1/2
                  whitespace-nowrap
                  rounded-lg
                  border
                  border-white/[0.10]
                  bg-black/50
                  px-3
                  py-1.5
                  font-mono
                  text-[11px]
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-150
                  ${isHovered
                    ? "translate-x-0 opacity-100"
                    : "translate-x-2 opacity-0"
                  }
                `}
              >
                {app.name}
              </div>

              <button
                type="button"
                aria-label={`Abrir ${app.name}`}
                onClick={() => handleOpen(app)}
                className="
                  group
                  relative
                  h-14
                  w-14
                  shrink-0
                  rounded-[16px]
                  outline-none
                  transition-transform
                  duration-200
                  ease-out
                  hover:scale-105
                  focus-visible:ring-2
                  focus-visible:ring-cyan/60
                "
              >
                {/* Glow */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    -inset-1
                    rounded-[19px]
                    bg-cyan/[0.10]
                    opacity-0
                    blur-lg
                    transition-opacity
                    duration-200
                  "
                />

                {/* Icon */}
                <span
                  className="
                    relative
                    block
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[16px]
                  "
                >
                  <Image
                    src={app.icon}
                    alt={app.name}
                    fill
                    sizes="56px"
                    priority
                    draggable={false}
                    className="
                      select-none
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-[1.04]
                    "
                  />

                  {/* Reflection */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[16px]
                    "
                  />

                  {/* Border */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[16px]
                      ring-1
                      ring-inset
                      ring-white/[0.18]
                    "
                  />
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
}