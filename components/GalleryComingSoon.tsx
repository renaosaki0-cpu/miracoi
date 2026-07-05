"use client";

import { useLocale } from "@/lib/i18n/context";
import { ScrollReveal } from "./ui/ScrollReveal";

const COMING_SOON_CARD_COUNT = 4;

function ClockIcon() {
  return (
    <svg className="h-5 w-5 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

/** 活動記録 — 順次公開カード群（内容未定の統一プレースホルダー） */
export function GalleryComingSoon() {
  const { t } = useLocale();
  const { comingSoon } = t.gallery;

  return (
    <div className="mt-14 border-t border-accent/50 pt-10 md:mt-16 md:pt-12">
      <ScrollReveal className="mb-6 md:mb-8">
        <p className="section-label">{comingSoon.badge}</p>
        <h3 className="text-lg font-bold tracking-tight text-text md:text-xl">{comingSoon.sectionTitle}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-subtext md:text-base">{comingSoon.lead}</p>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {Array.from({ length: COMING_SOON_CARD_COUNT }, (_, i) => (
          <ScrollReveal key={i} delay={i * 0.05} className="h-full">
            <article className="card-surface flex h-full flex-col overflow-hidden opacity-95 transition hover:opacity-100">
              <div className="relative flex aspect-[4/3] items-center justify-center bg-[#f7f3ec]">
                <div className="icon-badge h-11 w-11 border border-primary/10 bg-white/80">
                  <ClockIcon />
                </div>
                <span className="absolute left-2.5 top-2.5 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary shadow-sm sm:left-3 sm:top-3 sm:px-2.5 sm:text-[10px]">
                  {comingSoon.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center p-4 text-center sm:p-5">
                <h4 className="text-sm font-bold leading-snug text-text sm:text-base">{comingSoon.cardTitle}</h4>
                <p className="mt-2 text-xs text-subtext">{comingSoon.cardNote}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-8 md:mt-10">
        <p className="text-sm text-subtext md:text-base">{comingSoon.closing}</p>
      </ScrollReveal>
    </div>
  );
}
