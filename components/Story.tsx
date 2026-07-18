"use client";

import { useLocale } from "@/lib/i18n/context";
import { MEMBER_ORDER, type MemberId } from "@/locales/memberProfiles";
import { resolveImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { CTAButton } from "./ui/CTAButton";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";

const MEMBER_IMAGE: Record<MemberId, "memberRena" | "memberMomoe"> = {
  ozaki: "memberRena",
  yasunaga: "memberMomoe",
};

const FOUNDER_STORY: Record<MemberId, "p1" | "p2"> = {
  yasunaga: "p1",
  ozaki: "p2",
};

export function Story() {
  const { t, locale } = useLocale();
  const handwritten = locale === "ja" ? "font-handwritten" : "";

  return (
    <section id="story" className="section-padding scroll-mt-20 bg-section-warm md:scroll-mt-24">
      <div className="container-main max-w-5xl">
        <ScrollReveal className="mb-10 text-center md:mb-12">
          <p className="section-label">{t.story.label}</p>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-4xl">{t.story.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-subtext">{t.story.description}</p>
        </ScrollReveal>

        <ScrollReveal className="mb-10 text-center md:mb-12" delay={0.05}>
          <p className={`text-2xl leading-snug text-primary sm:text-[1.75rem] ${handwritten || "font-semibold tracking-tight"}`}>
            {t.story.turningPoint}
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {MEMBER_ORDER.map((memberId, i) => {
            const profile = t.members.profiles[memberId];
            const storyText = t.story[FOUNDER_STORY[memberId]];

            return (
              <ScrollReveal key={memberId} delay={i * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/[0.04]">
                  <div className="overflow-hidden">
                    <MiraiImage
                      src={resolveImage(MEMBER_IMAGE[memberId])}
                      alt={profile.name}
                      className="aspect-[4/5] w-full"
                      imageClassName={layoutClass("member")}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className="text-sm font-medium text-primary">{profile.role}</p>
                    <h3 className="mt-1 text-xl font-bold text-text md:text-2xl">{profile.name}</h3>
                    <p className="mt-4 flex-1 text-base leading-[1.9] text-subtext">{storyText}</p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mt-10 md:mt-14" delay={0.15}>
          <div className="mx-auto max-w-2xl rounded-[2rem] bg-accent/50 px-6 py-8 text-center ring-1 ring-accent/80 md:px-10 md:py-10">
            <p
              className={`text-xl leading-snug text-text sm:text-2xl md:text-[1.65rem] ${
                locale === "ja" ? "font-handwritten" : "font-semibold tracking-tight"
              }`}
            >
              {t.story.sharedVision.line1}
              <br />
              {t.story.sharedVision.line2}
            </p>
            <p className="mx-auto mt-5 max-w-lg text-base leading-[1.9] text-subtext">{t.story.sharedVision.body}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8 text-center md:mt-10" delay={0.2}>
          <CTAButton variant="primary" size="md" className="w-full min-h-12 sm:w-auto">
            {t.story.cta}
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
