"use client";

import { useLocale } from "@/lib/i18n/context";
import { ActivityIcon } from "../ui/ActivityIcon";
import { ScrollReveal } from "../ui/ScrollReveal";

const CARD_ACCENTS = [
  "border-l-primary/70 bg-primary/[0.04]",
  "border-l-primary/50 bg-primary/[0.02]",
  "border-l-primary/90 bg-primary/[0.06]",
] as const;

/** プロジェクトページ — 3校すべてで行う活動セクション */
export function ProjectPageActivitiesSection() {
  const { t } = useLocale();
  const { sharedActivities } = t.projectPage;

  return (
    <ScrollReveal>
      <p className="section-label">{sharedActivities.label}</p>
      <h2 className="text-2xl font-bold tracking-tight text-text md:text-3xl lg:text-4xl">
        {sharedActivities.heading}
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-[1.9] text-subtext md:text-lg">
        {sharedActivities.description}
      </p>

      <div className="mt-10 space-y-5 md:mt-14 md:space-y-6">
        {sharedActivities.items.map((item, index) => (
          <article
            key={item.id}
            className={`card-surface flex flex-col gap-4 border-l-4 p-6 md:flex-row md:gap-6 md:p-7 ${CARD_ACCENTS[index] ?? CARD_ACCENTS[0]}`}
          >
            <div className="flex shrink-0 items-center gap-4 md:flex-col md:items-start md:gap-3">
              <span className="font-en text-2xl font-bold leading-none text-primary/25 md:text-3xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="icon-badge shrink-0">
                <ActivityIcon id={item.id} />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-base font-bold leading-snug text-text md:text-lg">{item.title}</h3>
              <div className="mt-3 space-y-2">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-[1.9] text-subtext md:text-[0.9375rem]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
}
