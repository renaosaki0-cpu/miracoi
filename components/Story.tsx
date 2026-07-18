"use client";

import { useLocale } from "@/lib/i18n/context";
import { resolveImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CTAButton } from "./ui/CTAButton";

export function Story() {
  const { t, locale } = useLocale();
  const handwritten = locale === "ja" ? "font-handwritten" : "";

  return (
    <section id="story" className="section-padding bg-section-warm">
      <div className="container-main max-w-4xl">
        <ScrollReveal className="mb-8 text-center md:mb-10">
          <h2 className={`text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-4xl ${handwritten}`}>
            {t.story.title}
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10">
          <ScrollReveal>
            <div className="story-image-frame aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lg shadow-black/[0.06] ring-1 ring-accent/60 sm:aspect-[3/4]">
              <MiraiImage
                src={resolveImage("story")}
                alt={t.story.title}
                fill
                className="h-full w-full"
                imageClassName={layoutClass("story")}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.05}>
              <p className={`text-lg leading-relaxed text-primary md:text-xl ${handwritten}`}>{t.story.quote}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base leading-[1.95] text-subtext">{t.story.p1}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base leading-[1.95] text-subtext">{t.story.p3}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p
                className={`rounded-2xl bg-accent/70 px-5 py-4 text-base leading-relaxed text-text md:px-6 md:py-5 ${
                  locale === "ja" ? "font-handwritten text-lg md:text-xl" : "font-medium"
                }`}
              >
                {t.story.highlight}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <CTAButton variant="primary" className="w-full min-h-12 sm:w-auto">
                {t.story.cta}
              </CTAButton>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
