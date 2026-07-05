"use client";

import { useLocale } from "@/lib/i18n/context";

/** 活動内容 — 活動スケジュール（縦タイムライン） */
export function ProjectSchedulePanel() {
  const { t } = useLocale();
  const tab = t.project.tabs.schedule;
  const { scheduleItems } = t.project.panels;

  return (
    <div className="mx-auto max-w-xl">
      <header className="mb-10 text-center md:mb-12">
        <h3 className="text-xl font-bold tracking-tight text-text md:text-2xl">{tab.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-subtext md:text-base">{tab.description}</p>
      </header>

      <div className="relative">
        <div
          className="absolute bottom-4 left-[0.4375rem] top-4 w-px bg-primary/30 md:left-[0.5rem]"
          aria-hidden
        />

        <ol className="space-y-0">
          {scheduleItems.map((item, index) => (
            <li key={item.date} className="relative flex gap-5 pb-8 last:pb-0 md:gap-6 md:pb-10">
              <div className="relative z-10 mt-1.5 flex shrink-0 flex-col items-center">
                <span className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-white md:h-3 md:w-3" />
              </div>

              <div className="min-w-0 flex-1">
                <time className="font-en text-base font-bold text-primary md:text-lg">{item.date}</time>
                <p className="mt-1 text-base font-medium leading-snug text-text md:text-lg">{item.label}</p>
              </div>

              {index < scheduleItems.length - 1 && (
                <div
                  className="pointer-events-none absolute left-[0.4375rem] top-6 h-[calc(100%-0.5rem)] w-px md:left-[0.5rem]"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </div>

      {tab.note && <p className="mt-8 text-center text-xs text-subtext md:mt-10">{tab.note}</p>}
    </div>
  );
}
