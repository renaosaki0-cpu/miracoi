"use client";

import { useLocale } from "@/lib/i18n/context";
import { PostReturnIcon } from "../ui/ProjectPanelIcons";
import { ScrollReveal } from "../ui/ScrollReveal";

/** プロジェクトページ — 活動スケジュール（いつ・どこへのみ） */
export function ProjectPageScheduleSection() {
  const { t } = useLocale();
  const { scheduleSection } = t.projectPage;

  return (
    <ScrollReveal>
      <p className="section-label">{scheduleSection.label}</p>
      <h2 className="text-2xl font-bold tracking-tight text-text md:text-3xl lg:text-4xl">
        {scheduleSection.heading}
      </h2>

      <div className="relative mt-10 md:mt-14">
        <div
          className="absolute bottom-4 left-[0.4375rem] top-4 w-px bg-primary/30 md:left-[0.5625rem]"
          aria-hidden
        />

        <ol className="space-y-0">
          {scheduleSection.items.map((item) => (
            <li key={item.date} className="relative flex gap-5 pb-8 last:pb-0 md:gap-6 md:pb-10">
              <div className="relative z-10 mt-1.5 flex shrink-0 flex-col items-center">
                <span className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-white md:h-3 md:w-3" />
              </div>

              <div className="min-w-0 flex-1">
                <time className="text-base font-bold text-text md:text-lg">{item.date}</time>
                <p className="mt-1 text-sm leading-relaxed text-subtext md:text-base">{item.title}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <article className="card-surface mt-10 border border-primary/10 p-6 md:mt-14 md:p-8">
        <h3 className="text-base font-bold text-text md:text-lg">{scheduleSection.postReturnTitle}</h3>
        <ul className="mt-5 space-y-3">
          {scheduleSection.postReturnItems.map((item) => (
            <li key={item.id} className="flex items-center gap-4">
              <div className="icon-badge shrink-0">
                <PostReturnIcon id={item.id} />
              </div>
              <p className="text-sm font-semibold text-text md:text-base">{item.label}</p>
            </li>
          ))}
        </ul>
      </article>

      <p className="mt-8 text-center text-xs text-subtext md:mt-10">{scheduleSection.note}</p>
    </ScrollReveal>
  );
}
