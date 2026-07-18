"use client";

import { useLocale } from "@/lib/i18n/context";
import { MEMBER_ORDER, type MemberId } from "@/locales/memberProfiles";
import { resolveImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { EmotionalPhrase } from "./ui/EmotionalPhrase";
import { FounderCard } from "./ui/FounderCard";
import { ReadyforCTA } from "./ui/ReadyforCTA";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionHeading } from "./ui/SectionHeading";

const MEMBER_IMAGE: Record<MemberId, "memberRena" | "memberMomoe"> = {
  ozaki: "memberRena",
  yasunaga: "memberMomoe",
};

/** 尾﨑・安永それぞれの元画像に合わせたトリミング — 「頭・肩・胸元」の editorial framing で統一 */
const MEMBER_IMAGE_CLASS: Record<MemberId, string> = {
  ozaki: layoutClass("founderOzaki"),
  yasunaga: layoutClass("founderYasunaga"),
};

const FOUNDER_STORY: Record<MemberId, "p1" | "p2"> = {
  yasunaga: "p1",
  ozaki: "p2",
};

/** 共同代表2人の想い — 均等な2カード + 共有ステートメント */
export function Story() {
  const { t } = useLocale();

  return (
    <section id="story" className="section-padding scroll-mt-20 bg-section-warm md:scroll-mt-24">
      <div className="container-main max-w-5xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            label={t.story.label}
            title={t.story.title}
            lead={t.story.intro}
            className="mb-10 md:mb-12"
          />
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {MEMBER_ORDER.map((memberId, i) => {
            const profile = t.members.profiles[memberId];
            const storyText = t.story[FOUNDER_STORY[memberId]];

            return (
              <ScrollReveal key={memberId} delay={i * 0.08} className="h-full">
                <FounderCard
                  role={profile.role}
                  name={profile.name}
                  story={storyText}
                  imageSrc={resolveImage(MEMBER_IMAGE[memberId])}
                  imageAlt={profile.name}
                  imageClassName={MEMBER_IMAGE_CLASS[memberId]}
                />
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mt-10 md:mt-14" delay={0.15}>
          <div className="mx-auto max-w-2xl rounded-[2rem] bg-accent/50 px-6 py-8 text-center ring-1 ring-accent/80 md:px-10 md:py-10">
            <EmotionalPhrase as="p" className="text-2xl leading-snug text-text sm:text-[1.75rem]">
              {t.story.sharedVision.emphasis}
            </EmotionalPhrase>
            <p className="mx-auto mt-5 max-w-lg text-base leading-[1.9] text-subtext">{t.story.sharedVision.body}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8 text-center md:mt-10" delay={0.2}>
          <ReadyforCTA size="md">{t.story.cta}</ReadyforCTA>
        </ScrollReveal>
      </div>
    </section>
  );
}
