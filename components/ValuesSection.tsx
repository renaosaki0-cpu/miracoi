"use client";

import { useLocale } from "@/lib/i18n/context";
import { ScrollReveal } from "./ui/ScrollReveal";

/** 私たちが大切にしていること — ミッション/ビジョン/バリュー表記なし */
export function ValuesSection() {
  const { t } = useLocale();

  return (
    <section id="values" className="section-padding bg-section-cream">
      <div className="container-main max-w-3xl">
        <ScrollReveal className="mb-10 text-center md:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-4xl">{t.mission.title}</h2>
          {t.mission.description && (
            <p className="mt-4 text-base leading-relaxed text-subtext">{t.mission.description}</p>
          )}
        </ScrollReveal>

        <ul className="space-y-6 md:space-y-8">
          {t.mission.cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.06}>
              <li className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-black/[0.04] md:p-8">
                <h3 className="text-lg font-bold text-text md:text-xl">{card.title}</h3>
                <p className="mt-3 text-sm leading-[1.9] text-subtext md:text-base">{card.description}</p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
