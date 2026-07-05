"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";
import { RETURN_TIERS, type ReturnTierId, type ReturnTierMeta } from "@/data/returns";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CTAButton } from "./ui/CTAButton";

type ReturnVariant = "withReturn" | "noReturn";

function formatAmount(amount: number, locale: string) {
  return amount.toLocaleString(locale === "ja" ? "ja-JP" : locale === "pt" ? "pt-PT" : "en-US");
}

type ReturnCardProps = {
  tier: ReturnTierMeta;
  expanded: boolean;
  variant: ReturnVariant;
  onToggle: () => void;
  onVariantChange: (variant: ReturnVariant) => void;
};

function ReturnCard({ tier, expanded, variant, onToggle, onVariantChange }: ReturnCardProps) {
  const { t, locale } = useLocale();
  const content = t.returns.items[tier.id];
  if (!content) return null;
  const isNoReturn = variant === "noReturn";
  const title = isNoReturn ? t.returns.bCourse.title : content.title;
  const benefits = isNoReturn ? [] : content.benefits;
  const details = isNoReturn ? t.returns.bCourse.description : content.details;

  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-white transition-shadow duration-300 ${
        expanded
          ? "border-primary/30 shadow-xl shadow-primary/10"
          : "border-black/[0.06] shadow-md shadow-black/[0.04] hover:shadow-xl hover:shadow-black/[0.08]"
      }`}
    >
      {/* 金額ヘッダー */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/40 to-white px-6 py-8 sm:px-8">
        <p className="font-en text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {formatAmount(tier.amount, locale)}
            <span className="ml-1 text-base font-medium text-subtext">{t.support.yen}</span>
          </p>
        </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold leading-snug text-text sm:text-xl">{title}</h3>

        {/* リターンあり / Bコース タブ */}
        {tier.hasNoReturnOption && (
          <div
            className="mt-4 flex rounded-full bg-accent/70 p-1"
            role="tablist"
            aria-label={t.returns.tabWithReturn}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              role="tab"
              aria-selected={!isNoReturn}
              onClick={() => onVariantChange("withReturn")}
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
              onClick={() => onVariantChange("noReturn")}
              className={`flex-1 rounded-full px-2 py-2 text-[11px] font-semibold transition-all sm:px-3 sm:text-xs ${
                isNoReturn ? "bg-white text-primary shadow-sm" : "text-subtext hover:text-text"
              }`}
            >
              {t.returns.tabNoReturn}
            </button>
          </div>
        )}

        {/* 特典リスト / Bコース説明 */}
        {isNoReturn ? (
          <p className="mt-4 text-sm leading-relaxed text-subtext">{t.returns.bCourse.description}</p>
        ) : (
          <ul className="mt-4 space-y-2.5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-2.5 text-sm leading-relaxed text-subtext">
                <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-2.5 w-2.5 text-primary" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path
                      d="M2.5 6l2.5 2.5 4.5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        )}

        {/* アコーディオン詳細 */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key={`${tier.id}-${variant}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-2xl border border-accent bg-accent/30 p-4">
                <p className="text-sm leading-relaxed text-text">{details}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* アクション */}
        <div className="mt-auto flex flex-col gap-2.5 pt-5" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={onToggle}
            className="w-full rounded-full border border-black/10 py-2.5 text-sm font-semibold text-text transition-colors hover:border-primary/30 hover:bg-accent/40"
            aria-expanded={expanded}
          >
            {expanded ? t.returns.closeDetails : t.returns.viewDetails}
          </button>
          <CTAButton variant="primary" size="md" className="w-full min-h-11">
            {t.returns.support}
          </CTAButton>
        </div>
      </div>
    </motion.article>
  );
}

/** 支援リターン — 横スクロールカード + アコーディオン */
export function Returns() {
  const { t } = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<ReturnTierId | null>(null);
  const [variants, setVariants] = useState<Record<ReturnTierId, ReturnVariant>>(() =>
    Object.fromEntries(RETURN_TIERS.map((tier) => [tier.id, "withReturn"])) as Record<
      ReturnTierId,
      ReturnVariant
    >,
  );

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("article")?.clientWidth ?? 320;
    el.scrollBy({ left: dir === "left" ? -(cardWidth + 20) : cardWidth + 20, behavior: "smooth" });
  };

  return (
    <section id="returns" className="section-padding bg-white">
      <div className="container-main">
        <ScrollReveal className="mb-8 md:mb-10">
          <p className="mb-2 text-xs font-medium tracking-[0.2em] text-primary uppercase md:mb-3 md:text-sm">
            {t.returns.label}
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-4xl lg:text-5xl">
            {t.returns.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-subtext md:mt-5 md:text-base">
            {t.returns.description}
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* デスクトップ用スクロールボタン */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute -left-3 top-[42%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/5 bg-white shadow-lg transition hover:shadow-xl lg:flex"
            aria-label="Previous"
          >
            <svg className="h-5 w-5 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute -right-3 top-[42%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/5 bg-white shadow-lg transition hover:shadow-xl lg:flex"
            aria-label="Next"
          >
            <svg className="h-5 w-5 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="returns-scroll flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pt-1 -mx-4 px-4 sm:-mx-0 sm:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {RETURN_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="returns-card-wrap shrink-0 snap-center"
                onClick={() => setExpandedId((prev) => (prev === tier.id ? null : tier.id))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpandedId((prev) => (prev === tier.id ? null : tier.id));
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={expandedId === tier.id}
              >
                <ReturnCard
                  tier={tier}
                  expanded={expandedId === tier.id}
                  variant={variants[tier.id]}
                  onToggle={() => setExpandedId((prev) => (prev === tier.id ? null : tier.id))}
                  onVariantChange={(v) => setVariants((prev) => ({ ...prev, [tier.id]: v }))}
                />
              </div>
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-subtext lg:hidden">{t.returns.scrollHint}</p>
        </div>
      </div>
    </section>
  );
}
