"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import { SITE } from "@/lib/constants";
import { supporters, type Supporter } from "@/data/supporters";
import { layoutClass } from "@/lib/imageLayout";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CTAButton } from "./ui/CTAButton";

const PREVIEW_COUNT = 4;

type SupportersProps = {
  standalone?: boolean;
};

function SupporterCard({
  supporter,
  standalone,
  index,
}: {
  supporter: Supporter;
  standalone: boolean;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className={`flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-sm transition-shadow hover:shadow-lg ${
        standalone ? "w-[min(88vw,340px)] shrink-0 snap-center sm:w-[340px]" : ""
      }`}
    >
      <div className="relative h-[280px] w-full overflow-hidden bg-accent/20 sm:h-[300px] md:h-[320px] lg:h-[340px]">
        <MiraiImage
          src={supporter.image}
          alt={supporter.name}
          fill
          sizes={standalone ? "340px" : "(max-width: 640px) 100vw, 50vw"}
          className="h-full w-full"
          imageClassName={layoutClass("supporter")}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-xs font-medium leading-relaxed text-primary">{supporter.title}</p>
        <h3 className="mt-1 text-xl font-bold tracking-tight text-text sm:text-[1.35rem]">{supporter.name}</h3>
        <p className={`mt-4 text-sm leading-[1.85] text-subtext ${standalone ? "" : "line-clamp-5"}`}>
          {supporter.message}
        </p>
      </div>
    </motion.article>
  );
}

/** 応援メッセージ — 大きな顔写真 + カード */
export function Supporters({ standalone = false }: SupportersProps) {
  const { t } = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);
  const visibleSupporters = standalone ? supporters : supporters.slice(0, PREVIEW_COUNT);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" });
  };

  return (
    <section
      id="supporters"
      className={`section-padding ${standalone ? "min-h-[60vh] bg-section-white" : "bg-section-warm"}`}
    >
      <div className="container-main">
        <ScrollReveal className="mb-10 text-center md:mb-14">
          <p className="mb-2 text-xs font-medium tracking-[0.25em] text-primary uppercase md:text-sm">
            {t.supporters.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
            {t.supporters.title}
          </h2>
          <p className="mt-4 text-sm text-subtext md:mt-5 md:text-base">
            <span className="font-en text-lg font-bold text-primary">{supporters.length}</span>
            {t.supporters.descriptionCount}
          </p>
        </ScrollReveal>

        {standalone && (
          <ScrollReveal className="mb-10 md:mb-12">
            <div className="mx-auto max-w-2xl rounded-3xl border border-accent/60 bg-gradient-to-br from-white via-[#faf8f5] to-accent/40 p-6 text-center shadow-sm sm:p-8 md:p-10">
              <h3 className="text-xl font-bold tracking-tight text-text sm:text-2xl">{t.supporters.submitTitle}</h3>
              <p className="mt-4 text-sm leading-[1.9] text-subtext sm:text-base">{t.supporters.submitDescription}</p>
              <div className="mt-6 sm:mt-8">
                <CTAButton
                  href={SITE.supportMessageFormUrl}
                  external
                  variant="primary"
                  size="lg"
                  className="w-full min-h-12 shadow-lg shadow-primary/30 sm:w-auto sm:min-w-[260px]"
                >
                  {t.supporters.submitButton}
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        )}

        <div className="relative">
          {standalone && (
            <>
              <button
                type="button"
                onClick={() => scroll("left")}
                className="absolute -left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/5 bg-white shadow-lg md:flex"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="absolute -right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/5 bg-white shadow-lg md:flex"
                aria-label="Next"
              >
                →
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className={
              standalone
                ? "flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:gap-5 md:px-0"
                : "grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
            }
            style={standalone ? { scrollbarWidth: "none" } : undefined}
          >
            {visibleSupporters.map((s, i) => (
              <SupporterCard key={s.id} supporter={s} standalone={standalone} index={i} />
            ))}
          </div>
        </div>

        {!standalone && (
          <ScrollReveal className="mt-10 text-center md:mt-12">
            <Link
              href="/supporters"
              className="inline-flex min-h-11 items-center rounded-full border-2 border-primary px-8 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              {t.supporters.readMore}
            </Link>
          </ScrollReveal>
        )}

        <ScrollReveal className={`text-center ${standalone ? "mt-16" : "mt-12"}`}>
          <CTAButton variant="primary" size="lg" className="mt-6 min-h-12 sm:min-w-[240px]">
            {t.supporters.ctaSupport}
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
