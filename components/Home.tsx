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
import Experience from "@/components/Experience";
import WindowManager from "./WindowManager";

const SECTION_IDS = [
    "about",
    "experience",
    "lithe",
    "baza",
    "rialse",
    "bvf",
    "skills",
    "education",
    "contact",
];

interface HomeProps {
    data: {
        site: any;
        about: any;
        projects: any[];
        skillsSection: any;
        skills: any;
        experienceSection: any;
        experience: any[];
        education: any;
        timeline: any[];
        contact: any;
        files: any;
        extColor: any;
        ui: any;
        bootLog: any;
        terminal: any;
    };
}

export default function Home({ data }: HomeProps) {
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
            {
                rootMargin: "-40% 0px -55% 0px",
                threshold: 0,
            }
        );

        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);

            if (el) {
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    const handleNavigate = (id: string) => {
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            setActiveId(id);
        }
    };

    const handleToggleTerminal = () => {
        if (terminalOpen) {
            setTerminalOpen(false);
            return;
        }

        setTerminalOpen(true);
        handleNavigate("hero");
    };

    return (
        <>
            {!booted && (
                <BootScreen
                    bootLog={data.bootLog}
                    onDone={() => setBooted(true)}
                />
            )}

            <div className="min-h-screen bg-white text-neutral-950">
                <div className="flex min-h-screen">
                    <Sidebar
                        activeId={activeId}
                        onNavigate={handleNavigate}
                        files={data.files}
                        extColor={data.extColor}
                    />

                    <div className="min-w-0 flex-1">
                        <TabBar
                            activeId={activeId}
                            onNavigate={handleNavigate}
                            terminalOpen={terminalOpen}
                            onToggleTerminal={handleToggleTerminal}
                            ui={data.ui}
                            files={data.files}
                            extColor={data.extColor}
                        />

                        <main>
                            <Hero
                                data={data.site}
                                terminal={data.terminal}
                                onNavigate={handleNavigate}
                                terminalOpen={terminalOpen}
                                onOpenTerminal={() =>
                                    setTerminalOpen(true)
                                }
                                onCloseTerminal={() =>
                                    setTerminalOpen(false)
                                }
                            />

                            <About about={data.about} />

                            <Experience
                                experienceSection={
                                    data.experienceSection
                                }
                                experience={data.experience}
                            />

                            {data.projects.map((project, i) => (
                                <ProjectSection
                                    key={project.id}
                                    project={project}
                                    index={i + 1}
                                />
                            ))}

                            <Skills
                                section={data.skillsSection}
                                skills={data.skills}
                            />

                            <Education
                                education={data.education}
                                timeline={data.timeline}
                            />

                            <Contact contact={data.contact} />
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
