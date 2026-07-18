"use client";

import type { HomeNarrativeActivitiesSection, HomeNarrativeSection } from "@/locales/types";
import { useLocale } from "@/lib/i18n/context";
import { resolveImage, resolveProjectTabImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { EmotionalPhrase } from "./ui/EmotionalPhrase";
import { ProjectActivityCard } from "./ui/ProjectActivityCard";
import { ReadyforCTA } from "./ui/ReadyforCTA";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionHeading } from "./ui/SectionHeading";

type ProseSectionProps = {
  id: string;
  section: HomeNarrativeSection;
  imageSrc: string | null;
  imageAlt: string;
  imageLayout: string;
  reversed?: boolean;
  bgClass: string;
};

function ProseSection({
  id,
  section,
  imageSrc,
  imageAlt,
  imageLayout,
  reversed = false,
  bgClass,
}: ProseSectionProps) {
  return (
    <section id={id} className={`section-padding scroll-mt-20 md:scroll-mt-24 ${bgClass}`}>
      <div className="container-main max-w-5xl">
        <div
          className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${
            reversed ? "lg:[direction:rtl]" : ""
          }`}
        >
          <ScrollReveal className="lg:[direction:ltr]">
            <div className="overflow-hidden rounded-[2rem] shadow-sm ring-1 ring-black/[0.04]">
              <MiraiImage
                src={imageSrc}
                alt={imageAlt}
                className="aspect-[4/3] w-full lg:aspect-[5/4]"
                imageClassName={imageLayout}
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="lg:[direction:ltr]">
            <SectionHeading label={section.label} title={section.title} />
            <div className="mt-5 space-y-3">
              {section.lines.map((line) => (
                <p key={line} className="text-base leading-[1.9] text-subtext">
                  {line}
                </p>
              ))}
            </div>
            {section.emphasis ? (
              <EmotionalPhrase as="p" className="mt-5 text-xl leading-snug text-primary sm:text-2xl">
                {section.emphasis}
              </EmotionalPhrase>
            ) : null}
            <div className="mt-8">
              <ReadyforCTA size="md">{section.cta}</ReadyforCTA>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

type ActivitiesSectionProps = {
  id: string;
  section: HomeNarrativeActivitiesSection;
  images: { src: string | null; alt: string; imageClassName?: string }[];
  bgClass: string;
};

function ActivitiesSection({ id, section, images, bgClass }: ActivitiesSectionProps) {
  return (
    <section id={id} className={`section-padding scroll-mt-20 md:scroll-mt-24 ${bgClass}`}>
      <div className="container-main max-w-5xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            label={section.label}
            title={section.title}
            lead={section.intro}
            className="mb-10 md:mb-12"
          />
        </ScrollReveal>

        <ul className="grid gap-6 lg:grid-cols-3">
          {section.activities.map((activity, i) => (
            <ScrollReveal key={activity.title} delay={i * 0.08} className="h-full">
              <ProjectActivityCard
                index={i + 1}
                title={activity.title}
                description={activity.description}
                imageSrc={images[i]?.src ?? null}
                imageAlt={images[i]?.alt ?? activity.title}
                imageClassName={images[i]?.imageClassName}
              />
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal className="mt-10 text-center md:mt-12" delay={0.15}>
          <EmotionalPhrase as="p" className="text-xl leading-snug text-primary sm:text-2xl">
            {section.emphasis}
          </EmotionalPhrase>
          <div className="mt-6">
            <ReadyforCTA size="md">{section.cta}</ReadyforCTA>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/** Miracoiとは — 最初の物語ブロック */
export function WhoWeAre() {
  const { t } = useLocale();

  return (
    <ProseSection
      id="about"
      section={t.home.whoWeAre}
      imageSrc={resolveProjectTabImage("why-yosakoi")}
      imageAlt={t.home.whoWeAre.title}
      imageLayout={layoutClass("project")}
      bgClass="bg-section-cream"
    />
  );
}

/** なぜ始めたのか、モザンビークで行うこと、帰国後につなげたい未来 — 共同代表2人の想いの前後をつなぐ物語 */
export function HomeNarrativeSections() {
  const { t } = useLocale();

  return (
    <>
      <ProseSection
        id="why"
        section={t.home.whyStarted}
        imageSrc={resolveProjectTabImage("why-mozambique")}
        imageAlt={t.home.whyStarted.title}
        imageLayout={layoutClass("projectExplain")}
        reversed
        bgClass="bg-section-white"
      />
      <ActivitiesSection
        id="project"
        section={t.home.project}
        images={[
          { src: resolveProjectTabImage("goals"), alt: t.home.project.activities[0]?.title ?? "" },
          {
            src: resolveImage("storyLearning"),
            alt: t.home.project.activities[1]?.title ?? "",
            imageClassName: layoutClass("storyLearning"),
          },
          {
            src: resolveProjectTabImage("original-song"),
            alt: t.home.project.activities[2]?.title ?? "",
          },
        ]}
        bgClass="bg-section-warm"
      />
      {/*
        TODO(images): 「帰国後につなげたい未来」に本当にふさわしい実写がまだありません。
        現在は現地訪問前の日本国内での報告・準備の様子（gallery7）を仮で使用しています。
        理想的には、帰国後の報告会・学校訪問でモザンビークの子どもたちの映像や手紙を紹介している様子、
        オンライン交流の様子、または現地の子どもたちと今後の再会を約束している写真などに差し替えてください。
      */}
      <ProseSection
        id="after"
        section={t.home.afterProject}
        imageSrc={resolveProjectTabImage("schedule")}
        imageAlt={t.home.afterProject.title}
        imageLayout={layoutClass("project")}
        bgClass="bg-section-cream"
      />
    </>
  );
}
