"use client";

import { useLocale } from "@/lib/i18n/context";
import { resolveImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CTAButton } from "./ui/CTAButton";

export function Story() {
  const { t } = useLocale();

  return (
    <section id="story" className="section-padding bg-section-warm">
      <div className="container-main">
        <ScrollReveal className="mb-8 md:mb-10 lg:mb-12">
          <p className="section-label">{t.story.label}</p>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-4xl lg:text-5xl">
            {t.story.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-subtext md:mt-4 md:text-base lg:text-lg">
            {t.story.description}
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[11fr_9fr] lg:items-stretch lg:gap-14 xl:gap-16">
          <ScrollReveal className="h-full">
            <div className="story-image-frame h-full min-h-[320px] rounded-[2rem] shadow-xl shadow-black/[0.06] ring-1 ring-accent/60 sm:min-h-[400px] md:rounded-[2.5rem] lg:min-h-[520px] xl:min-h-[560px]">
              <MiraiImage
                src={resolveImage("story")}
                alt={t.story.title}
                fill
                className="h-full w-full"
                imageClassName={layoutClass("story")}
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </ScrollReveal>
          <div className="flex flex-col justify-center space-y-8">
            <ScrollReveal delay={0.1}>
              <p className="text-lg italic leading-relaxed text-primary md:text-xl">{t.story.quote}</p>
            </ScrollReveal>
            {[t.story.p1, t.story.p2, t.story.p3].map((p, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.05}>
                <p className="text-base leading-[2] text-subtext md:text-lg">{p}</p>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.35}>
              <p className="rounded-2xl bg-accent/80 p-6 text-base leading-relaxed text-text md:p-8 md:text-lg">
                {t.story.highlight}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <CTAButton variant="primary" className="w-full min-h-12 sm:w-auto">
                {t.story.cta}
              </CTAButton>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal className="mt-16 md:mt-20 lg:mt-24">
          <figure className="mx-auto max-w-3xl px-2 sm:px-6 md:px-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl shadow-black/[0.06] ring-1 ring-accent/60 sm:aspect-[3/2] md:rounded-[2.5rem]">
              <MiraiImage
                src={resolveImage("storyLearning")}
                alt={t.story.learningPhoto.alt}
                fill
                className="h-full w-full"
                imageClassName={layoutClass("storyLearning")}
                sizes="(max-width: 768px) 100vw, 48rem"
              />
            </div>
            <figcaption className="mt-5 text-center text-sm leading-relaxed text-subtext md:mt-6 md:text-base">
              {t.story.learningPhoto.caption}
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
