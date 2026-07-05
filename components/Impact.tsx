"use client";

import { useLocale } from "@/lib/i18n/context";
import { ScrollReveal } from "./ui/ScrollReveal";

/** 数字で見るMiracoi — Apple風の大きな数字 */
export function Impact() {
  const { t } = useLocale();

  return (
    <section id="impact" className="section-padding bg-white">
      <div className="container-main">
        <ScrollReveal className="mb-14 text-center md:mb-20 lg:mb-24">
          <p className="mb-3 text-xs font-medium tracking-[0.25em] text-primary uppercase md:text-sm">
            {t.impact.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
            {t.impact.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-subtext md:text-base">{t.impact.description}</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
          {t.impact.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.06}>
              <div className="flex flex-col items-center justify-center rounded-3xl bg-[#fafafa] px-4 py-10 text-center md:px-6 md:py-14 lg:py-16">
                <p className="font-en text-5xl font-semibold leading-none tracking-tight text-text sm:text-6xl md:text-7xl lg:text-8xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-en text-lg font-medium text-primary sm:text-xl md:text-2xl">
                  {stat.unit}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-subtext sm:text-sm md:mt-5">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
