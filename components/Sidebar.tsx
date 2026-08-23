"use client";

import { files, extColor } from "@/lib/data";

const FolderIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path
      d="M1.5 3.5a1 1 0 0 1 1-1h3.6l1.2 1.4h6.2a1 1 0 0 1 1 1v7.6a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9Z"
      fill="#E8B04B"
      fillOpacity="0.85"
    />
  </svg>
);

const DotIcon = ({ colorClass }: { colorClass: string }) => (
  <span className={`inline-block h-1.5 w-1.5 rounded-full ${colorClass}`} />
);

export default function Sidebar({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  const groups: { label: string; ids: string[] }[] = [
    {
      label: "about",
      ids: ["about"],
    },
    {
      label: "experience",
      ids: ["experience"],
    },
    {
      label: "projects",
      ids: ["lithe", "baza", "rialse", "music"],
    },
    {
      label: "skills",
      ids: ["skills"],
    },
    {
      label: "education",
      ids: ["education"],
    },
  ];
  const rootFile = files.find((f) => f.id === "contact")!;

  return (
    <aside className="hidden lg:flex sticky top-0 h-screen w-64 shrink-0 flex-col border-r border-line bg-panelAlt">
      <div className="flex items-center gap-2 px-4 py-4 border-b border-line">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
        <span className="ml-2 font-mono text-xs text-muted">portfolio/</span>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 py-4 font-mono text-[13px]">
        {groups.map((group) => (
          <div key={group.label} className="mb-1">
            <div className="flex items-center gap-1.5 px-2 py-1.5 text-muted">
              <FolderIcon />
              <span>{group.label}/</span>
            </div>
            <div className="ml-4 border-l border-lineSoft pl-3">
              {group.ids.map((id) => {
                const file = files.find((f) => f.id === id)!;
                const active = activeId === id;
                return (
                  <button
                    key={id}
                    onClick={() => onNavigate(id)}
                    className={`focus-ring flex w-full items-center gap-2 rounded px-2 py-1.5 text-left transition-colors ${active
                        ? "bg-line/60 text-ink"
                        : "text-muted hover:bg-line/30 hover:text-ink"
                      }`}
                  >
                    <DotIcon colorClass={active ? "bg-cyan" : "bg-mutedDark"} />
                    <span className={active ? extColor[file.ext] : ""}>
                      {file.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        <div className="mt-2 border-t border-lineSoft pt-2">
          <button
            onClick={() => onNavigate("contact")}
            className={`focus-ring flex w-full items-center gap-2 rounded px-2 py-1.5 text-left transition-colors ${activeId === "contact"
                ? "bg-line/60 text-ink"
                : "text-muted hover:bg-line/30 hover:text-ink"
              }`}
          >
            <DotIcon colorClass={activeId === "contact" ? "bg-cyan" : "bg-mutedDark"} />
            <span className={activeId === "contact" ? extColor[rootFile.ext] : ""}>
              {rootFile.label}
            </span>
          </button>
        </div>
      </nav>
      <div className="border-t border-line px-4 py-3 font-mono text-[11px] text-mutedDark">
        main · UTF-8 · LF
      </div>
    </aside>
  );
}
