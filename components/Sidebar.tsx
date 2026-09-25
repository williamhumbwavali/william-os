"use client";

const FolderIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"

  >

    <path

      d="M1.5 3.5a1 1 0 0 1 1-1h3.6l1.2 1.4h6.2a1 1 0 0 1 1 1v7.6a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9Z"
      fill="#E8B04B"
      fillOpacity="0.85"
    />

  </svg>
);

const DotIcon = ({
  colorClass,
}: {
  colorClass: string;
}) => (
  <span
    className={`inline-block h-1.5 w-1.5 rounded-full ${colorClass}`}
  />
);

interface SidebarProps {
  activeId: string;
  onNavigate: (id: string) => void;
  files: {
    id: string;
    label: string;
    ext: string;
  }[];
  extColor: Record<string, string>;
}

export default function Sidebar({
  activeId,
  onNavigate,
  files,
  extColor,
}: SidebarProps) {
  const groups: {
    label: string;
    ids: string[];
  }[] = [
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
        ids: [
          "baza",
          "bvf",
          "lithe",
          "bando",
          "rialse",
        ],
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

  const rootFile = files.find(
    (file) => file.id === "contact"
  );

  if (!rootFile) return null;

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-black/10 bg-neutral-50 lg:flex">
      <div className="flex items-center gap-2 border-b border-black/10 px-4 py-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
        <span className="ml-2 font-mono text-xs text-muted">
          portfolio/
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 font-mono text-[13px]">
        {groups.map((group) => (
          <div
            key={group.label}
            className="mb-1"
          >
            {/* Folder */}
            <div className="flex items-center gap-1.5 px-2 py-1.5 text-neutral-500">
              <FolderIcon />

              <span>
                {group.label}/
              </span>
            </div>

            {/* Files */}
            <div className="ml-4 border-l border-black/10 pl-3">
              {group.ids.map((id) => {
                const file = files.find(
                  (file) => file.id === id
                );

                if (!file) return null;

                const active = activeId === id;

                return (
                  <button
                    key={id}
                    onClick={() => onNavigate(id)}
                    className={`focus-ring flex w-full items-center gap-2 rounded px-2 py-1.5 text-left transition-colors ${active
                      ? "bg-neutral-200/70 text-neutral-950"
                      : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950"
                      }`}
                  >
                    <DotIcon
                      colorClass={
                        active
                          ? "bg-cyan-500"
                          : "bg-neutral-300"
                      }
                    />

                    <span
                      className={
                        active
                          ? extColor[file.ext]
                          : ""
                      }
                    >
                      {file.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact */}
        <div className="mt-2 border-t border-black/10 pt-2">
          <button
            onClick={() => onNavigate("contact")}
            className={`focus-ring flex w-full items-center gap-2 rounded px-2 py-1.5 text-left transition-colors ${activeId === "contact"
              ? "bg-neutral-200/70 text-neutral-950"
              : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950"
              }`}
          >
            <DotIcon
              colorClass={
                activeId === "contact"
                  ? "bg-cyan-500"
                  : "bg-neutral-300"
              }
            />

            <span
              className={
                activeId === "contact"
                  ? extColor[rootFile.ext]
                  : ""
              }
            >
              {rootFile.label}
            </span>
          </button>
        </div>
      </nav>

      {/* Status */}
      <div className="border-t border-black/10 px-4 py-3 font-mono text-[11px] text-neutral-400">
        main · UTF-8 · LF
      </div>
    </aside>

  );
}
