"use client";

import { useLocale } from "@/lib/i18n/context";
import { FUNDING } from "@/data/funding";
import { getDisplayFunding, getFundingProgressPercent } from "@/lib/campaignCountdown";
import { useCampaignCountdown } from "@/lib/useCampaignCountdown";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CTAButton } from "./ui/CTAButton";

type ProgressProps = {
  compact?: boolean;
};

/** クラファン進捗 — FUNDING の数字を変更するだけで反映 */
export function Progress({ compact = false }: ProgressProps) {
  const { t, locale } = useLocale();
  const { goalAmount, currentAmount, supporterCount } = FUNDING;
  const { status } = useCampaignCountdown();
  const { currentAmount: displayAmount, supporterCount: displaySupporters } = getDisplayFunding(
    status,
    currentAmount,
    supporterCount,
  );
  const progress = getFundingProgressPercent(displayAmount, goalAmount, status);
  const remaining = goalAmount - displayAmount;

  const formatYen = (n: number) =>
    n.toLocaleString(locale === "ja" ? "ja-JP" : locale === "pt" ? "pt-PT" : "en-US") + t.progress.yen;

  return (
    <section id="progress" className={`${compact ? "py-0" : "section-padding bg-white"}`}>
      <div className="container-main">
        {!compact && (
          <ScrollReveal className="mb-10 text-center md:mb-14">
            <p className="mb-2 text-xs font-medium tracking-[0.25em] text-primary uppercase md:text-sm">
              {t.progress.label}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
              {t.progress.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-subtext md:text-base">{t.progress.description}</p>
          </ScrollReveal>
        )}

        <ScrollReveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-black/[0.06] bg-[#fafafa] p-6 shadow-sm sm:p-8 md:p-10">
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              <div>
                <p className="text-xs font-medium text-subtext md:text-sm">{t.progress.current}</p>
                <p className="mt-1 font-en text-4xl font-semibold tracking-tight text-primary sm:text-5xl md:text-6xl">
                  {formatYen(displayAmount)}
                </p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs font-medium text-subtext md:text-sm">{t.progress.goal}</p>
                <p className="mt-1 font-en text-2xl font-semibold text-text sm:text-3xl">
                  {formatYen(goalAmount)}
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-8">
              <div className="mb-2 flex justify-between text-xs text-subtext md:text-sm">
                <span>{t.progress.rate}</span>
                <span className="font-en font-semibold text-primary">{Math.round(progress)}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white md:h-3">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                  role="progressbar"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-between gap-3 text-xs text-subtext md:text-sm">
              <span>
                {t.progress.remaining} <strong className="font-en text-text">{formatYen(remaining)}</strong>
              </span>
              <span>
                <strong className="font-en text-text">{displaySupporters}</strong> {t.progress.people}
              </span>
            </div>

            {!compact && (
              <div className="mt-8 text-center">
                <CTAButton variant="primary" size="lg" className="w-full min-h-12 sm:w-auto sm:min-w-[260px]">
                  {t.progress.cta}
                </CTAButton>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
