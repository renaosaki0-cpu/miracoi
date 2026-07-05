"use client";

import { useLocale } from "@/lib/i18n/context";
import { ActivityIcon } from "./ui/ActivityIcon";
import { ScrollReveal } from "./ui/ScrollReveal";

type LocalActivitiesSectionProps = {
  embedded?: boolean;
  /** 表示するブロック */
  mode?: "all" | "activities" | "schools";
};

/** 現地活動 — 活動内容は1回、学校はテキストカードで紹介 */
export function LocalActivitiesSection({ embedded = false, mode = "all" }: LocalActivitiesSectionProps) {
  const { t } = useLocale();
  const { localActivities, schools } = t.projectPage;

  const showActivities = mode === "all" || mode === "activities";
  const showSchools = mode === "all" || mode === "schools";

  return (
    <div className={embedded ? "space-y-10 md:space-y-12" : "space-y-14 md:space-y-16"}>
      {showActivities && (
        <ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {localActivities.activityItems.map((item) => (
              <article key={item.id} className="card-surface flex h-full flex-col gap-4 p-6 md:p-7">
                <div className="icon-badge shrink-0">
                  <ActivityIcon id={item.id} />
                </div>
                <div>
                  <h4 className="text-base font-bold leading-snug text-text md:text-lg">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-subtext md:text-[0.9375rem]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      )}

      {showSchools && (
        <ScrollReveal>
          <div className={`${showActivities ? "pt-2 md:pt-4" : ""} ${embedded ? "mb-8" : "mb-10 md:mb-12"}`}>
            <p className="section-label">{localActivities.schoolsLabel}</p>
            <h3 className="text-xl font-bold tracking-tight text-text sm:text-2xl md:text-3xl">
              {localActivities.schoolsHeading}
            </h3>
            {localActivities.schoolsSubheading && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-subtext md:text-base">
                {localActivities.schoolsSubheading}
              </p>
            )}
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {schools.map((school, i) => (
              <article
                key={school.id}
                className="card-surface flex h-full flex-col border-l-4 border-l-primary/40 p-6 md:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-en text-2xl font-bold leading-none text-primary/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-en text-xs font-semibold text-primary">
                    {school.date}
                  </span>
                </div>
                <p className="mt-5 text-xs font-semibold tracking-wide text-primary uppercase">{school.place}</p>
                <h4 className="mt-2 text-lg font-bold leading-snug text-text md:text-xl">{school.name}</h4>
                {school.note && (
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-subtext md:text-[0.9375rem]">{school.note}</p>
                )}
              </article>
            ))}
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
