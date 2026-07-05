"use client";

import { useLocale } from "@/lib/i18n/context";
import { ScrollReveal } from "./ui/ScrollReveal";

/** 活動スケジュール — タイムライン形式 */
export function Schedule() {
  const { t } = useLocale();

  return (
    <section id="schedule" className="section-padding bg-white">
      <div className="container-main max-w-3xl">
        <ScrollReveal className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs font-medium tracking-[0.25em] text-primary uppercase md:text-sm">
            {t.schedule.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
            {t.schedule.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-subtext md:mt-5 md:text-base">
            {t.schedule.description}
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* 縦ライン */}
          <div
            className="absolute bottom-0 left-[1.125rem] top-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-6"
            aria-hidden
          />

          <ol className="space-y-0">
            {t.schedule.items.map((item, index) => (
              <ScrollReveal key={item.date} delay={index * 0.06}>
                <li className="relative flex gap-6 pb-10 last:pb-0 md:gap-8 md:pb-12">
                  {/* ドット */}
                  <div className="relative z-10 flex shrink-0 flex-col items-center">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-white md:h-12 md:w-12">
                      <span className="font-en text-xs font-bold text-primary md:text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 pt-0.5 md:pt-1">
                    <time className="font-en text-sm font-semibold text-primary md:text-base">{item.date}</time>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-subtext/80 md:text-sm">
                      {item.place}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text md:text-base md:leading-[1.85]">
                      {item.activity}
                    </p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>

        <ScrollReveal className="mt-8 md:mt-10">
          <p className="text-center text-xs text-subtext">{t.schedule.note}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
