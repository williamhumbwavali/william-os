import { ReactNode } from "react";

export default function CodeFrame({
  filename,
  children,
  className = "",
}: {
  filename: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-line bg-panel overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5 bg-panelAlt">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
        <span className="ml-3 font-mono text-xs text-muted">{filename}</span>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  );
}
