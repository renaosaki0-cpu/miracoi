"use client";

import { useLocale } from "@/lib/i18n/context";
import { PostReturnIcon } from "../ui/ProjectPanelIcons";

/** 活動内容 — 活動スケジュール（いつ・どこでのみ表示） */
export function ProjectSchedulePanel() {
  const { t } = useLocale();
  const tab = t.project.tabs.schedule;
  const { scheduleDateRange, scheduleItems, postReturnTitle, postReturnItems } = t.project.panels;

  return (
    <div className="mx-auto max-w-2xl space-y-10 md:space-y-14">
      <header className="text-center">
        <h3 className="text-xl font-bold tracking-tight text-text md:text-2xl">{tab.title}</h3>
        <p className="mt-3 font-en text-base font-bold text-primary md:text-lg">{scheduleDateRange}</p>
        <p className="mt-3 text-sm leading-relaxed text-subtext md:text-base">{tab.description}</p>
      </header>

      <div className="relative">
        <div
          className="absolute bottom-4 left-[0.4375rem] top-4 w-px bg-primary/30 md:left-[0.5625rem]"
          aria-hidden
        />

        <ol className="space-y-0">
          {scheduleItems.map((item) => (
            <li key={item.date} className="relative flex gap-5 pb-8 last:pb-0 md:gap-6 md:pb-10">
              <div className="relative z-10 mt-1.5 flex shrink-0 flex-col items-center">
                <span className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-white md:h-3 md:w-3" />
              </div>

              <div className="min-w-0 flex-1">
                <time className="text-base font-bold text-text md:text-lg">{item.date}</time>
                {item.title && (
                  <p className="mt-1 text-base font-medium leading-snug text-subtext md:text-lg">{item.title}</p>
                )}
                {item.details && item.details.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-2 text-sm leading-relaxed text-subtext md:text-base">
                        <span className="shrink-0 text-primary" aria-hidden>
                          ・
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <article className="card-surface border border-primary/10 p-6 md:p-8">
        <h4 className="text-base font-bold text-text md:text-lg">{postReturnTitle}</h4>
        <ul className="mt-5 space-y-3">
          {postReturnItems.map((item) => (
            <li key={item.id} className="flex items-center gap-4">
              <div className="icon-badge shrink-0">
                <PostReturnIcon id={item.id} />
              </div>
              <p className="text-sm font-semibold text-text md:text-base">{item.label}</p>
            </li>
          ))}
        </ul>
      </article>

      {tab.note && <p className="text-center text-xs text-subtext">{tab.note}</p>}
    </div>
  );
}
