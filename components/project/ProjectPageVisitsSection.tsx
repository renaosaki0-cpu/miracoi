"use client";

import { useLocale } from "@/lib/i18n/context";
import { ScrollReveal } from "../ui/ScrollReveal";

/** プロジェクトページ — 訪問先セクション */
export function ProjectPageVisitsSection() {
  const { t } = useLocale();
  const { visits, schools } = t.projectPage;

  return (
    <ScrollReveal>
      <p className="section-label">{visits.label}</p>
      <h2 className="text-2xl font-bold tracking-tight text-text md:text-3xl lg:text-4xl">{visits.heading}</h2>
      <p className="mt-5 max-w-3xl text-base leading-[1.9] text-subtext md:text-lg">{visits.description}</p>

      <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
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
            <h3 className="mt-2 text-lg font-bold leading-snug text-text md:text-xl">{school.name}</h3>
            {school.note && (
              <p className="mt-4 flex-1 text-sm leading-relaxed text-subtext md:text-[0.9375rem]">{school.note}</p>
            )}
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
}
