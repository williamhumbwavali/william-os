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
      className={`overflow-hidden rounded-lg border border-black/10 bg-white ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-black/10 bg-neutral-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/70" />

        <span className="ml-3 font-mono text-xs text-neutral-500">
          {filename}
        </span>
      </div>

      <div className="p-5 sm:p-7">
        {children}
      </div>
    </div>
  );
}