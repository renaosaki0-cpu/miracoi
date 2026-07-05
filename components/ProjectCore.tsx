"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import { PROJECT_CORE_IDS, type ProjectCoreId } from "@/data/projectCore";
import { resolveProjectTabImage } from "@/lib/images";
import { EXPLAIN_IMAGE_FRAME, GOALS_IMAGE_FRAME, layoutClass } from "@/lib/imageLayout";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";

const CORE_NUMBERS: Record<ProjectCoreId, string> = {
  "why-mozambique": "01",
  "why-yosakoi": "02",
  goals: "03",
};

function CoreTextContent({ id }: { id: ProjectCoreId }) {
  const { t } = useLocale();
  const content = t.project.tabs[id];

  return (
    <>
      <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
        {CORE_NUMBERS[id]}
      </p>
      <h3 className="text-2xl font-bold leading-snug text-text sm:text-3xl md:text-4xl lg:text-[2.5rem]">
        {content.title}
      </h3>
      <p className="mt-5 text-base leading-[1.95] text-subtext md:text-lg">{content.description}</p>

      {"quote" in content && content.quote && (
        <blockquote className="mt-6 border-l-4 border-primary pl-5 text-lg font-semibold italic leading-relaxed text-text md:text-xl">
          「{content.quote}」
        </blockquote>
      )}

      {"points" in content && content.points && (
        <ul className="mt-7 space-y-3">
          {content.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-text md:text-base">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              {point}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

/** なぜモザンビーク / なぜよさこい / 実現したいこと — トップで大きく見せる */
export function ProjectCore() {
  const { t } = useLocale();

  return (
    <section id="why" className="section-padding bg-section-white">
      <div className="container-main">
        <ScrollReveal className="mb-10 text-center md:mb-14">
          <p className="section-label">{t.projectCore.label}</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {t.projectCore.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-subtext md:text-lg">
            {t.projectCore.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-12 md:mb-16">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {PROJECT_CORE_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-primary/20 bg-accent/40 px-4 py-2.5 text-xs font-semibold text-text transition-colors hover:border-primary hover:bg-primary hover:text-white sm:px-5 sm:text-sm"
              >
                {t.project.tabs[id].title}
              </a>
            ))}
          </div>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-24 lg:space-y-28">
          {PROJECT_CORE_IDS.map((id, index) => {
            const content = t.project.tabs[id];
            const reversed = index % 2 === 1;
            const isGoals = id === "goals";
            const isExplain = id === "why-mozambique";

            return (
              <ScrollReveal key={id} delay={index * 0.04}>
                <article
                  id={id}
                  className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-accent/35 shadow-sm ring-1 ring-accent/50 md:rounded-[2.5rem]"
                >
                  {isGoals ? (
                    <div className="flex flex-col">
                      <div className={GOALS_IMAGE_FRAME}>
                        <MiraiImage
                          src={resolveProjectTabImage(id)}
                          alt={content.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                          className="h-full w-full"
                          imageClassName={layoutClass("projectGoals")}
                          priority={index === 0}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                      </div>
                      <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 xl:p-14">
                        <CoreTextContent id={id} />
                      </div>
                    </div>
                  ) : (
                    <div className={`grid lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                      <div
                        className={
                          isExplain
                            ? EXPLAIN_IMAGE_FRAME
                            : "relative min-h-[280px] overflow-hidden bg-accent/25 sm:min-h-[360px] lg:min-h-[520px]"
                        }
                      >
                        <MiraiImage
                          src={resolveProjectTabImage(id)}
                          alt={content.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="h-full w-full"
                          imageClassName={layoutClass(isExplain ? "projectExplain" : "project")}
                          priority={index === 0}
                        />
                        {!isExplain && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/20 lg:via-transparent lg:to-transparent" />
                            <p className="absolute bottom-5 left-5 font-en text-5xl font-bold tracking-tight text-white/90 md:text-6xl">
                              {CORE_NUMBERS[id]}
                            </p>
                          </>
                        )}
                      </div>

                      <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 xl:p-14">
                        <CoreTextContent id={id} />
                      </div>
                    </div>
                  )}
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mt-12 text-center md:mt-16">
          <Link
            href="/project"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
          >
            {t.projectCore.cta}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
