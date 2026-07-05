"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";
import { PROJECT_TAB_IDS, type ProjectTabId } from "@/data/projectTabs";
import { ProjectLocalActivitiesPanel } from "./project/ProjectLocalActivitiesPanel";
import { ProjectOriginalSongPanel } from "./project/ProjectOriginalSongPanel";
import { ProjectSchedulePanel } from "./project/ProjectSchedulePanel";
import { ScrollReveal } from "./ui/ScrollReveal";

const PANELS: Record<ProjectTabId, () => ReactNode> = {
  "local-activities": () => <ProjectLocalActivitiesPanel />,
  "original-song": () => <ProjectOriginalSongPanel />,
  schedule: () => <ProjectSchedulePanel />,
};

/** 活動内容 — 現地で行う3テーマ（写真なし・説明重視） */
export function Project() {
  const { t } = useLocale();
  const [active, setActive] = useState<ProjectTabId>("local-activities");
  const Panel = PANELS[active];

  return (
    <section id="project" className="section-padding bg-section-cream">
      <div className="container-main">
        <ScrollReveal className="mb-10 md:mb-14">
          <p className="section-label">{t.project.label}</p>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-4xl lg:text-5xl">
            {t.project.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-subtext md:text-lg">{t.project.description}</p>
        </ScrollReveal>

        <div className="mb-8 -mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:mb-10 md:px-0">
          <div className="flex min-w-max gap-2 md:flex-wrap md:min-w-0">
            {PROJECT_TAB_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setActive(id)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-medium transition-all duration-300 sm:text-sm ${
                  active === id
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white text-subtext hover:bg-white/90 hover:text-text"
                }`}
              >
                {t.project.tabs[id].title}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="card-surface overflow-hidden p-8 md:p-12 lg:p-16"
          >
            <Panel />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
