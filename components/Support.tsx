"use client";

import { useLocale } from "@/lib/i18n/context";
import { FUNDING } from "@/data/funding";
import { formatCampaignPeriod } from "@/lib/formatCampaignPeriod";
import {
  getDisplayFunding,
  getFundingProgressPercent,
} from "@/lib/campaignCountdown";
import { useCampaignCountdown } from "@/lib/useCampaignCountdown";
import { BudgetPieChart } from "./BudgetPieChart";
import { CampaignCountdown } from "./CampaignCountdown";
import { ScrollReveal } from "./ui/ScrollReveal";

/** 支援金の使い道 — 進捗 + 77万円内訳（円グラフ） */
export function Support() {
  const { t, locale } = useLocale();
  const { goalAmount, currentAmount, supporterCount, campaignStart, campaignEnd } = FUNDING;
  const { status } = useCampaignCountdown();
  const { currentAmount: displayAmount, supporterCount: displaySupporters } = getDisplayFunding(
    status,
    currentAmount,
    supporterCount,
  );
  const progress = getFundingProgressPercent(displayAmount, goalAmount, status);
  const remaining = goalAmount - displayAmount;
  const campaignPeriod = formatCampaignPeriod(locale, campaignStart, campaignEnd);

  const formatYen = (n: number) =>
    n.toLocaleString(locale === "ja" ? "ja-JP" : locale === "pt" ? "pt-PT" : "en-US") + t.support.yen;

  return (
    <section id="support" className="section-padding bg-section-white">
      <div className="container-main">
        <ScrollReveal className="mb-8 text-center md:mb-12">
          <p className="section-label">{t.support.label}</p>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-4xl lg:text-5xl">
            {t.support.usage}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-subtext md:text-base">
            {t.support.description}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto mb-10 max-w-2xl rounded-2xl border border-black/[0.06] bg-[#fafafa] p-6 md:mb-12 md:rounded-3xl md:p-8">
            <CampaignCountdown variant="banner" />
            <p className="mb-5 text-center text-sm text-subtext">
              <span className="font-medium text-text">{t.support.period}</span>
              <span className="mx-2 text-subtext/40" aria-hidden>
                |
              </span>
              <span className="font-en">{campaignPeriod}</span>
            </p>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs text-subtext">{t.support.current}</p>
                <p className="font-en text-3xl font-bold text-primary sm:text-4xl">{formatYen(displayAmount)}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-subtext">{t.support.goal}</p>
                <p className="font-en text-lg font-semibold text-text sm:text-xl">{formatYen(goalAmount)}</p>
              </div>
            </div>
            <div className="mb-3 h-2 overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full bg-primary transition-all duration-1000"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={Math.round(progress)}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <p className="mb-4 text-center text-base font-semibold text-text sm:text-lg">
              {status === "upcoming" ? (
                <span className="text-subtext">{t.support.beforeStartNote}</span>
              ) : status === "ended" ? (
                <span className="text-subtext">{t.support.countdownEnded}</span>
              ) : remaining <= 0 ? (
                <span className="text-primary">{t.support.goalAchieved}</span>
              ) : t.support.goalRemaining.amountFirst ? (
                <>
                  <span className="font-en text-xl text-primary sm:text-2xl">{formatYen(remaining)}</span>
                  {t.support.goalRemaining.after}
                </>
              ) : (
                <>
                  {t.support.goalRemaining.before}
                  <span className="mx-1 font-en text-xl text-primary sm:text-2xl">{formatYen(remaining)}</span>
                  {t.support.goalRemaining.after}
                </>
              )}
            </p>
            <div className="flex justify-end text-xs text-subtext">
              <span>
                {displaySupporters} {t.support.people}
              </span>
            </div>
          </div>
        </ScrollReveal>

        <BudgetPieChart />
      </div>
    </section>
  );
}
