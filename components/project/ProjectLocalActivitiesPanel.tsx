"use client";

import { useLocale } from "@/lib/i18n/context";
import { HighlightIcon, StepDownArrow, StepIcon } from "../ui/ProjectPanelIcons";

/** 活動内容 — 現地で行う活動（3STEP） */
export function ProjectLocalActivitiesPanel() {
  const { t } = useLocale();
  const { activityItems } = t.projectPage.localActivities;
  const { localHighlights } = t.project.panels;
  const tab = t.project.tabs["local-activities"];

  return (
    <div className="mx-auto max-w-2xl">
      <header className="text-center">
        <h3 className="text-xl font-bold tracking-tight text-text md:text-2xl">{tab.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-subtext md:text-base">{tab.description}</p>
      </header>

      <div className="mt-12 md:mt-16">
        {activityItems.map((step, index) => (
          <div key={step.id}>
            <article className="card-surface flex flex-col items-center gap-5 p-8 text-center md:flex-row md:gap-8 md:p-10 md:text-left">
              <div className="flex shrink-0 flex-col items-center gap-4 md:items-start">
                <span className="font-en text-3xl font-bold leading-none text-primary/25 md:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="icon-badge h-14 w-14 rounded-2xl">
                  <StepIcon id={step.id} />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-lg font-bold text-text md:text-xl">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-subtext md:text-base">{step.description}</p>
              </div>
            </article>

            {index < activityItems.length - 1 && (
              <div className="flex justify-center py-5 md:py-6" aria-hidden>
                <StepDownArrow />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16">
        {localHighlights.map((item) => (
          <div
            key={item.id}
            className="card-surface flex items-center gap-4 border border-primary/10 p-5 md:p-6"
          >
            <div className="icon-badge shrink-0">
              <HighlightIcon id={item.id} />
            </div>
            <p className="text-sm font-semibold text-text md:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
