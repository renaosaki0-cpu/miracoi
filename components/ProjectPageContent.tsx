"use client";

import { useLocale } from "@/lib/i18n/context";
import { ProjectPageActivitiesSection } from "./project/ProjectPageActivitiesSection";
import { ProjectPageScheduleSection } from "./project/ProjectPageScheduleSection";
import { ProjectPageVisitsSection } from "./project/ProjectPageVisitsSection";
import { Support } from "./Support";
import { ReturnsPageContent } from "./ReturnsPageContent";
import { ScrollReveal } from "./ui/ScrollReveal";

/** プロジェクト詳細 — 独立ページ */
export function ProjectPageContent() {
  const { t } = useLocale();

  return (
    <>
      <section className="section-padding bg-section-warm pt-8 md:pt-12">
        <div className="container-main">
          <ScrollReveal className="max-w-4xl">
            <p className="section-label">{t.projectPage.label}</p>
            <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
              {t.projectPage.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-subtext md:text-lg">{t.projectPage.intro}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-section-white">
        <div className="container-main">
          <ProjectPageVisitsSection />
        </div>
      </section>

      <section className="section-padding bg-section-cream">
        <div className="container-main">
          <ProjectPageActivitiesSection />
        </div>
      </section>

      <section className="section-padding bg-section-white">
        <div className="container-main max-w-3xl">
          <ProjectPageScheduleSection />
        </div>
      </section>

      <Support />
      <ReturnsPageContent standalone />
    </>
  );
}
