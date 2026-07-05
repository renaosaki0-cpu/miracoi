"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import { SITE } from "@/lib/constants";
import { RETURN_TIERS, type ReturnTierMeta } from "@/data/returns";
import { resolveReturnImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";

type ReturnsPageContentProps = {
  standalone?: boolean;
};

type ReturnVariant = "withReturn" | "noReturn";

function formatYenAmount(value: number, locale: string) {
  return value.toLocaleString(locale === "ja" ? "ja-JP" : locale === "pt" ? "pt-PT" : "en-US");
}

const CARD_SHELL =
  "group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_4px_24px_rgba(34,34,34,0.06)] ring-1 ring-black/[0.04] transition-shadow duration-300 hover:shadow-[0_10px_36px_rgba(34,34,34,0.1)]";

const SUPPORT_BUTTON =
  "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-white shadow-sm shadow-primary/15 transition-colors duration-300 group-hover:bg-[#2ebdb3] active:scale-[0.99]";

function ReturnImage({ src, alt }: { src: string | null; alt: string }) {
  return (
    <div className="relative h-40 shrink-0 overflow-hidden bg-[#f7f3ec] sm:h-44">
      <MiraiImage
        src={src}
        alt={alt}
        fill
        className="h-full w-full"
        imageClassName={layoutClass("project")}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
    </div>
  );
}

function ReturnCard({ tier, index }: { tier: ReturnTierMeta; index: number }) {
  const { t, locale } = useLocale();
  const [variant, setVariant] = useState<ReturnVariant>("withReturn");

  const pageItem = t.returnsPage.items[tier.id];
  if (!pageItem) return null;

  const isNoReturn = variant === "noReturn" && tier.hasNoReturnOption;
  const imageSrc = resolveReturnImage(tier.amount);
  const title = isNoReturn ? t.returns.bCourse.title : pageItem.title;

  return (
    <ScrollReveal delay={index * 0.04} className="h-full">
      <article className={`${CARD_SHELL} min-h-[420px]`}>
        <ReturnImage src={imageSrc} alt={title} />

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="font-en text-[2rem] font-bold leading-none tracking-tight text-primary sm:text-[2.15rem]">
            {formatYenAmount(tier.amount, locale)}
            <span className="ml-1.5 text-sm font-medium text-subtext">{t.support.yen}</span>
          </p>

          {tier.hasNoReturnOption && (
            <div
              className="mt-4 flex rounded-full bg-accent/70 p-1"
              role="tablist"
              aria-label={t.returns.tabWithReturn}
            >
              <button
                type="button"
                role="tab"
                aria-selected={!isNoReturn}
                onClick={() => setVariant("withReturn")}
                className={`flex-1 rounded-full px-2 py-2 text-[11px] font-semibold transition-all sm:px-3 sm:text-xs ${
                  !isNoReturn ? "bg-white text-primary shadow-sm" : "text-subtext hover:text-text"
                }`}
              >
                {t.returns.tabWithReturn}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={isNoReturn}
                onClick={() => setVariant("noReturn")}
                className={`flex-1 rounded-full px-2 py-2 text-[11px] font-semibold transition-all sm:px-3 sm:text-xs ${
                  isNoReturn ? "bg-white text-primary shadow-sm" : "text-subtext hover:text-text"
                }`}
              >
                {t.returns.tabNoReturn}
              </button>
            </div>
          )}

          <h3 className="mt-4 text-base font-bold leading-snug text-text sm:text-lg">{title}</h3>

          {isNoReturn ? (
            <p className="mt-3 flex-1 text-sm leading-relaxed text-subtext">{t.returns.bCourse.description}</p>
          ) : (
            <>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-subtext line-clamp-3">{pageItem.description}</p>
              {pageItem.impact && (
                <p className="mt-3 text-xs leading-relaxed text-primary/85">{pageItem.impact}</p>
              )}
            </>
          )}

          <div className="mt-auto pt-6">
            <Link
              href={SITE.readyforUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={SUPPORT_BUTTON}
            >
              {t.returnsPage.support}
            </Link>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

/** リターン紹介 — 金額順の均一グリッド */
export function ReturnsPageContent({ standalone = false }: ReturnsPageContentProps) {
  const { t } = useLocale();

  return (
    <section
      id="returns"
      className={`section-padding ${standalone ? "min-h-[60vh] bg-section-warm" : "bg-section-cream"}`}
    >
      <div className="container-main">
        <ScrollReveal className="mb-10 text-center md:mb-14">
          <p className="section-label">{t.returnsPage.label}</p>
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
            {t.returnsPage.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-subtext md:mt-5 md:text-base">
            {t.returnsPage.description}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {RETURN_TIERS.map((tier, i) => (
            <ReturnCard key={tier.id} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
