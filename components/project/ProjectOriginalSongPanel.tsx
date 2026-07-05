"use client";

import { useLocale } from "@/lib/i18n/context";
import { FlowDownArrow, SongFlowIcon } from "../ui/ProjectPanelIcons";

/** 活動内容 — オリジナル楽曲について */
export function ProjectOriginalSongPanel() {
  const { t } = useLocale();
  const tab = t.project.tabs["original-song"];
  const { songFlow, songSummary } = t.project.panels;

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="mx-auto w-full max-w-md lg:max-w-none">
        {songFlow.map((step, index) => (
          <div key={step.id}>
            <div className="card-surface flex items-center gap-4 border border-primary/10 p-5 md:p-6">
              <div className="icon-badge shrink-0">
                <SongFlowIcon id={step.id} />
              </div>
              <p className="text-sm font-semibold text-text md:text-base">{step.label}</p>
            </div>

            {index < songFlow.length - 1 && (
              <div className="flex justify-center py-3 md:py-4" aria-hidden>
                <FlowDownArrow />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center lg:pl-4">
        <h3 className="text-xl font-bold tracking-tight text-text md:text-2xl">{tab.title}</h3>
        <p className="mt-4 text-sm leading-[1.9] text-subtext md:text-base">{songSummary}</p>
      </div>
    </div>
  );
}
