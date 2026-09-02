"use client";

import { useEffect, useRef, useState } from "react";
import BootScreen from "@/components/BootScreen";
import Sidebar from "@/components/Sidebar";
import TabBar from "@/components/TabBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { projects } from "@/lib/data";
import WindowManager from "@/components/WindowManager";
import Experience from "@/components/Experience";

const SECTION_IDS = [
  "about",
  "lithe",
  "baza",
  "rialse",
  "bvf",
  "skills",
  "education",
  "contact",
];

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [activeId, setActiveId] = useState("about");
  const [terminalOpen, setTerminalOpen] = useState(true);
  const observing = useRef(false);

  useEffect(() => {
    if (observing.current) return;
    observing.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  const handleToggleTerminal = () => {
    if (terminalOpen) {
      setTerminalOpen(false);
    } else {
      setTerminalOpen(true);
      handleNavigate("hero");
    }
  };

  return (
    <>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}
      <div className="flex min-h-screen">
        <Sidebar activeId={activeId} onNavigate={handleNavigate} />
        <div className="min-w-0 flex-1">
          <TabBar
            activeId={activeId}
            onNavigate={handleNavigate}
            terminalOpen={terminalOpen}
            onToggleTerminal={handleToggleTerminal}
          />
          <main>
            <Hero
              onNavigate={handleNavigate}
              terminalOpen={terminalOpen}
              onOpenTerminal={() => setTerminalOpen(true)}
              onCloseTerminal={() => setTerminalOpen(false)}
            />
            <About />
            <Experience />
            
            {projects.map((project, i) => (
              <ProjectSection key={project.id} project={project} index={i + 1} />
            ))}
            <Skills />
            <Education />
            <Contact />
          </main>
        </div>
      </div>
      <WindowManager onNavigate={handleNavigate} />
    </>
  );
}
