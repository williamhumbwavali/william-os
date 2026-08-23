"use client";

import { useCallback, useEffect, useState } from "react";
import AppWindow from "./AppWindow";
import Dock, { DOCK_APPS } from "./Dock";

type WindowManagerProps = {
  onNavigate: (id: string) => void;
};

export default function WindowManager({
  onNavigate,
}: WindowManagerProps) {
  const [openApps, setOpenApps] = useState<string[]>([]);
  const [activeApp, setActiveApp] = useState<string | null>(null);

  const openApp = useCallback((id: string) => {
    setOpenApps((current) => {
      if (current.includes(id)) {
        return current;
      }

      return [...current, id];
    });

    setActiveApp(id);
  }, []);

  const closeApp = useCallback((id: string) => {
    setOpenApps((current) =>
      current.filter((app) => app !== id)
    );

    setActiveApp((current) =>
      current === id ? null : current
    );
  }, []);

  const minimizeApp = useCallback(() => {
    setActiveApp(null);
  }, []);

  useEffect(() => {
    const handleOpenApp = (event: Event) => {
      const customEvent = event as CustomEvent<{
        id?: string;
      }>;

      const id = customEvent.detail?.id;

      if (!id) {
        return;
      }

      openApp(id);
    };

    window.addEventListener(
      "portfolio:open-app",
      handleOpenApp
    );

    return () => {
      window.removeEventListener(
        "portfolio:open-app",
        handleOpenApp
      );
    };
  }, [openApp]);

  const active = DOCK_APPS.find(
    (app) => app.id === activeApp
  );

  return (
    <>
      {/* Baza / Lithe */}
      {active && (
        <AppWindow
          title={`${active.id}.app`}
          appName={active.name}
          onClose={() => closeApp(active.id)}
          onMinimize={minimizeApp}
        >
          <AppContent
            id={active.id}
            name={active.name}
            onNavigate={onNavigate}
            onClose={() => closeApp(active.id)}
          />
        </AppWindow>
      )}

      {/* Dock */}
      <Dock
        apps={DOCK_APPS}
        onOpenTerminal={() => {
          document
            .getElementById("terminal")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
        }}
      />
    </>
  );
}

type AppContentProps = {
  id: string;
  name: string;
  onNavigate: (id: string) => void;
  onClose: () => void;
};

function AppContent({
  id,
  name,
  onNavigate,
  onClose,
}: AppContentProps) {
  return (
    <div className="bg-dots min-h-full p-6 sm:p-10">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            {id}.app
          </span>

          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {name}
          </h1>
        </div>

        <div className="rounded-xl border border-line bg-panel p-5">
          <div className="font-mono text-xs text-muted">
            portfolio@system:~$
          </div>

          <div className="mt-2 font-mono text-sm text-cyan">
            open ./{id}
          </div>

          <div className="mt-5 border-t border-line pt-5 font-body text-sm leading-7 text-muted">
            Application loaded successfully.
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            onClose();
            onNavigate(id);
          }}
          className="
            mt-6
            rounded-md
            border
            border-cyan/40
            bg-cyan/10
            px-5
            py-2.5
            font-mono
            text-sm
            text-cyan
            transition-colors
            hover:bg-cyan/20
          "
        >
          $ open full section
        </button>

      </div>
    </div>
  );
}