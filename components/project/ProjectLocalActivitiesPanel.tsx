"use client";

import { useLocale } from "@/lib/i18n/context";
import { ActivityIcon } from "../ui/ActivityIcon";
import { HighlightIcon, StepDownArrow } from "../ui/ProjectPanelIcons";

const CARD_ACCENTS = [
  "border-l-primary/70 bg-primary/[0.04]",
  "border-l-primary/50 bg-primary/[0.02]",
  "border-l-primary/90 bg-primary/[0.06]",
] as const;

/** 活動内容 — 現地で行う活動（3つの活動を詳しく紹介） */
export function ProjectLocalActivitiesPanel() {
  const { t } = useLocale();
  const { localActivityItems, localHighlights } = t.project.panels;
  const tab = t.project.tabs["local-activities"];

  return (
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <h3 className="text-xl font-bold tracking-tight text-text md:text-2xl">{tab.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-subtext md:text-base">{tab.description}</p>
      </header>

      <div className="mt-10 md:mt-14">
        {localActivityItems.map((item, index) => (
          <div key={item.id}>
            <article
              className={`card-surface flex flex-col gap-5 border-l-4 p-6 md:flex-row md:gap-8 md:p-8 ${CARD_ACCENTS[index] ?? CARD_ACCENTS[0]}`}
            >
              <div className="flex shrink-0 flex-row items-center gap-4 md:flex-col md:items-start md:gap-5">
                <span className="font-en text-3xl font-bold leading-none text-primary/25 md:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="icon-badge h-14 w-14 rounded-2xl">
                  <ActivityIcon id={item.id} />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="text-lg font-bold leading-snug text-text md:text-xl">{item.title}</h4>
                <div className="mt-4 space-y-3">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-[1.9] text-subtext md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>

            {index < localActivityItems.length - 1 && (
              <div className="flex justify-center py-5 md:py-6" aria-hidden>
                <StepDownArrow />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14">
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
