"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import { SITE } from "@/lib/constants";
import { buildSupporters, type Supporter } from "@/data/supporters";
import { layoutClass } from "@/lib/imageLayout";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CTAButton } from "./ui/CTAButton";

const PREVIEW_COUNT = 6;

type SupportersProps = {
  standalone?: boolean;
};

function SupporterCard({ supporter, index }: { supporter: Supporter; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.03, 0.3) }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-accent/20 sm:aspect-[4/3]">
        <MiraiImage
          src={supporter.image}
          alt={supporter.name}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="h-full w-full"
          imageClassName={layoutClass("supporter")}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium leading-relaxed text-primary">{supporter.title}</p>
        <h3 className="mt-1 text-base font-bold tracking-tight text-text sm:text-lg">{supporter.name}</h3>
        <p className="mt-3 text-sm leading-[1.85] text-subtext">{supporter.message}</p>
      </div>
    </motion.article>
  );
}

/** 応援メッセージ — 縦並び（モバイル1列 / デスクトップ2列） */
export function Supporters({ standalone = false }: SupportersProps) {
  const { t } = useLocale();
  const supporters = buildSupporters(t.supporters.items);
  const visibleSupporters = standalone ? supporters : supporters.slice(0, PREVIEW_COUNT);

  return (
    <section
      id="supporters"
      className={`section-padding overflow-x-hidden ${
        standalone ? "min-h-[60vh] bg-section-white" : "bg-section-cream"
      }`}
    >
      <div className="container-main">
        <ScrollReveal className="mb-10 text-center md:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-4xl">
            {t.supporters.title}
          </h2>
          <p className="mt-3 text-sm text-subtext md:text-base">
            <span className="font-en text-lg font-bold text-primary">{supporters.length}</span>
            {t.supporters.descriptionCount}
          </p>
        </ScrollReveal>

        {standalone && (
          <ScrollReveal className="mb-10">
            <div className="mx-auto max-w-2xl rounded-2xl border border-accent/60 bg-white/80 p-6 text-center shadow-sm md:p-8">
              <h3 className="text-lg font-bold text-text">{t.supporters.submitTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-subtext">{t.supporters.submitDescription}</p>
              <div className="mt-5">
                <CTAButton
                  href={SITE.supportMessageFormUrl}
                  external
                  variant="outline"
                  size="md"
                  className="w-full min-h-11 sm:w-auto"
                >
                  {t.supporters.submitButton}
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        )}

        <ul className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-2">
          {visibleSupporters.map((s, i) => (
            <li key={s.id}>
              <SupporterCard supporter={s} index={i} />
            </li>
          ))}
        </ul>

        {!standalone && supporters.length > PREVIEW_COUNT && (
          <ScrollReveal className="mt-8 text-center">
            <Link
              href="/supporters"
              className="inline-flex min-h-11 items-center rounded-full border-2 border-primary px-6 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              {t.supporters.viewAll}
            </Link>
          </ScrollReveal>
        )}

        <ScrollReveal className="mt-10 text-center md:mt-12">
          <CTAButton variant="primary" size="lg" className="w-full min-h-12 sm:w-auto sm:min-w-[280px]">
            {t.supporters.ctaSupport}
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
