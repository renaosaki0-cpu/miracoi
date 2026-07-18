"use client";

import { useLocale } from "@/lib/i18n/context";
import { resolveProjectTabImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CTAButton } from "./ui/CTAButton";

/** 活動概要 — 詳細は READYFOR へ */
export function ProjectSummary() {
  const { t } = useLocale();
  const summary = t.projectSummary;

  return (
    <section id="project" className="section-padding bg-section-white">
      <div className="container-main">
        <ScrollReveal className="mb-10 max-w-2xl md:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-4xl">{summary.title}</h2>
          <p className="mt-4 text-base leading-[1.9] text-subtext md:text-lg">{summary.description}</p>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg shadow-black/[0.06] ring-1 ring-accent/60">
              <MiraiImage
                src={resolveProjectTabImage("goals")}
                alt={summary.title}
                fill
                className="h-full w-full"
                imageClassName={layoutClass("projectGoals")}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <ul className="space-y-4">
              {summary.points.map((point) => (
                <li key={point} className="flex gap-3 text-base leading-relaxed text-text">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-subtext">{summary.readyforNote}</p>
            <div className="mt-6">
              <CTAButton variant="primary" size="lg" className="w-full min-h-12 sm:w-auto">
                {summary.cta}
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
