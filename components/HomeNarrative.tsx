"use client";

import type { HomeNarrativeIdeasSection, HomeNarrativeSection } from "@/locales/types";
import { useLocale } from "@/lib/i18n/context";
import { resolveImage, resolveProjectTabImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { CTAButton } from "./ui/CTAButton";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";

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
  const { locale } = useLocale();
  const handwritten = locale === "ja" ? "font-handwritten" : "";

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
            <p className="section-label">{section.label}</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-[2rem]">
              {section.title}
            </h2>
            <div className="mt-5 space-y-3">
              {section.lines.map((line) => (
                <p key={line} className="text-base leading-[1.9] text-subtext">
                  {line}
                </p>
              ))}
            </div>
            {section.emphasis && (
              <p className={`mt-5 text-xl leading-snug text-primary sm:text-2xl ${handwritten || "font-semibold tracking-tight"}`}>
                {section.emphasis}
              </p>
            )}
            <div className="mt-8">
              <CTAButton variant="primary" size="md" className="w-full min-h-12 sm:w-auto">
                {section.cta}
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

type IdeasSectionProps = {
  section: HomeNarrativeIdeasSection;
  imageSrc: string | null;
  imageAlt: string;
  bgClass: string;
};

function IdeasSection({ section, imageSrc, imageAlt, bgClass }: IdeasSectionProps) {
  return (
    <section id="hope" className={`section-padding ${bgClass}`}>
      <div className="container-main max-w-5xl">
        <ScrollReveal className="mb-8 text-center md:mb-10">
          <p className="section-label">{section.label}</p>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-[2rem]">{section.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-[1.9] text-subtext">{section.intro}</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-[2rem] shadow-sm ring-1 ring-black/[0.04]">
            <MiraiImage
              src={imageSrc}
              alt={imageAlt}
              className="aspect-[16/9] w-full sm:aspect-[21/9]"
              imageClassName={layoutClass("projectGoals")}
              sizes="(max-width: 768px) 100vw, 960px"
            />
          </div>
        </ScrollReveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3 md:mt-10">
          {section.ideas.map((idea, i) => (
            <ScrollReveal key={idea} delay={i * 0.06}>
              <li className="flex h-full flex-col rounded-[1.5rem] bg-white/85 px-5 py-6 text-center shadow-sm ring-1 ring-black/[0.04] md:px-6 md:py-8">
                <span className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <p className="text-base font-bold leading-snug text-text md:text-lg">{idea}</p>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal className="mt-8 text-center md:mt-10">
          <CTAButton variant="primary" size="md" className="w-full min-h-12 sm:w-auto">
            {section.cta}
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}

/** Who we are — first narrative block on the homepage */
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

/** Mozambique, hope, difference, and after — narrative blocks after the founders' story */
export function HomeNarrativeSections() {
  const { t } = useLocale();

  return (
    <>
      <ProseSection
        id="mozambique"
        section={t.home.whyMozambique}
        imageSrc={resolveProjectTabImage("why-mozambique")}
        imageAlt={t.home.whyMozambique.title}
        imageLayout={layoutClass("projectExplain")}
        reversed
        bgClass="bg-section-white"
      />
      <IdeasSection
        section={t.home.whatWeHope}
        imageSrc={resolveProjectTabImage("goals")}
        imageAlt={t.home.whatWeHope.title}
        bgClass="bg-section-warm"
      />
      <ProseSection
        id="difference"
        section={t.home.whatMakesDifferent}
        imageSrc={resolveImage("storyLearning")}
        imageAlt={t.home.whatMakesDifferent.title}
        imageLayout={layoutClass("storyLearning")}
        reversed
        bgClass="bg-section-cream"
      />
      <ProseSection
        id="after"
        section={t.home.afterProject}
        imageSrc={resolveProjectTabImage("local-activities")}
        imageAlt={t.home.afterProject.title}
        imageLayout={layoutClass("project")}
        bgClass="bg-section-white"
      />
    </>
  );
}
