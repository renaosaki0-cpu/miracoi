"use client";

import { useLocale } from "@/lib/i18n/context";
import { resolveProjectTabImage, isValidImageSrc } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { LocalActivitiesSection } from "./LocalActivitiesSection";
import { Support } from "./Support";
import { ReturnsPageContent } from "./ReturnsPageContent";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";

type ContentBlockProps = {
  title: string;
  description: string;
  quote?: string;
  points?: string[];
  note?: string;
  imageSrc?: string | null;
  bg?: "white" | "warm" | "cream";
};

function ContentBlock({
  title,
  description,
  quote,
  points,
  note,
  imageSrc,
  bg = "white",
}: ContentBlockProps) {
  const hasImage = isValidImageSrc(imageSrc);
  const bgClass =
    bg === "cream" ? "bg-section-cream" : bg === "warm" ? "bg-section-warm" : "bg-section-white";

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-main">
        <ScrollReveal>
          <article
            className={`overflow-hidden rounded-[2rem] bg-white shadow-sm md:rounded-[2.5rem] ${
              hasImage ? "lg:grid lg:grid-cols-2 lg:items-stretch" : ""
            }`}
          >
            {hasImage && (
              <div className="relative aspect-[4/3] overflow-hidden bg-accent/20 lg:aspect-auto lg:min-h-[380px]">
                <MiraiImage
                  src={imageSrc}
                  alt={title}
                  fill
                  className="h-full w-full"
                  imageClassName={layoutClass("project")}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}

            <div className={`flex flex-col justify-center p-8 md:p-10 lg:p-12 ${hasImage ? "" : "max-w-3xl"}`}>
              <h2 className="text-2xl font-bold tracking-tight text-text md:text-3xl lg:text-4xl">{title}</h2>
              <p className="mt-5 text-base leading-[1.9] text-subtext md:text-lg">{description}</p>
              {quote && (
                <blockquote className="mt-6 border-l-4 border-primary pl-5 text-lg font-medium italic text-text">
                  {quote}
                </blockquote>
              )}
              {points && points.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-subtext md:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {note && <p className="mt-6 text-xs text-subtext">{note}</p>}
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}

/** プロジェクト詳細 — 独立ページ */
export function ProjectPageContent() {
  const { t } = useLocale();
  const localActivitiesSection = t.projectPage.sections.find((s) => s.id === "local-activities");
  const originalSong = t.project.tabs["original-song"];
  const schedule = t.project.tabs.schedule;

  return (
    <>
      <section className="section-padding bg-section-warm pt-8 md:pt-12">
        <div className="container-main">
          <ScrollReveal className="max-w-4xl">
            <p className="section-label">{t.projectPage.label}</p>
            <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
              {t.projectPage.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-subtext md:text-lg">{t.projectPage.intro}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-section-white">
        <div className="container-main">
          <ScrollReveal className="mb-10 md:mb-14">
            <h2 className="text-2xl font-bold tracking-tight text-text md:text-3xl lg:text-4xl">
              {localActivitiesSection?.title ?? t.project.tabs["local-activities"].title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-[1.9] text-subtext md:text-lg">
              {localActivitiesSection?.description ?? t.project.tabs["local-activities"].description}
            </p>
          </ScrollReveal>
          <LocalActivitiesSection mode="activities" />
        </div>
      </section>

      <section className="section-padding bg-section-cream">
        <div className="container-main">
          <LocalActivitiesSection mode="schools" />
        </div>
      </section>

      <ContentBlock
        title={originalSong.title}
        description={originalSong.description}
        quote={"quote" in originalSong ? originalSong.quote : undefined}
        points={"points" in originalSong ? originalSong.points : undefined}
        imageSrc={resolveProjectTabImage("original-song")}
        bg="white"
      />

      <ContentBlock
        title={schedule.title}
        description={schedule.description}
        points={"points" in schedule ? schedule.points : undefined}
        note={"note" in schedule ? schedule.note : undefined}
        imageSrc={resolveProjectTabImage("schedule")}
        bg="cream"
      />

      <Support />
      <ReturnsPageContent standalone />
    </>
  );
}
