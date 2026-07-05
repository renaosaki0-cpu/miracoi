"use client";

import { useLocale } from "@/lib/i18n/context";
import {
  BUDGET_AMOUNTS,
  BUDGET_KEYS,
  BUDGET_PCT,
  BUDGET_TOTAL,
} from "@/data/projectTabs";
import { ScrollReveal } from "./ui/ScrollReveal";

/** Miracoi — 白・ベージュ・ティール */
const SEGMENT_COLORS = ["#2aa198", "#45b8ae", "#8ed9d2", "#d4c4a8"] as const;

const CHART_SIZE = 240;
const STROKE = 44;
const RADIUS = (CHART_SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type Segment = {
  key: (typeof BUDGET_KEYS)[number];
  amount: number;
  pct: number;
  pctLabel: number;
  color: string;
  label: string;
};

function DonutChart({
  segments,
  amountLine,
  suffixLine,
}: {
  segments: Segment[];
  amountLine: string;
  suffixLine: string;
}) {
  let offset = 0;
  const cx = CHART_SIZE / 2;
  const cy = CHART_SIZE / 2;

  return (
    <svg
      width={CHART_SIZE}
      height={CHART_SIZE}
      viewBox={`0 0 ${CHART_SIZE} ${CHART_SIZE}`}
      className="mx-auto drop-shadow-sm"
      role="img"
      aria-hidden
    >
      <circle cx={cx} cy={cy} r={RADIUS} fill="none" stroke="#e8dcc8" strokeWidth={STROKE} opacity={0.35} />
      {segments.map((segment) => {
        const dash = segment.pct * CIRCUMFERENCE;
        const gap = CIRCUMFERENCE - dash;
        const strokeDashoffset = -offset * CIRCUMFERENCE;
        offset += segment.pct;

        return (
          <circle
            key={segment.key}
            cx={cx}
            cy={cy}
            r={RADIUS}
            fill="none"
            stroke={segment.color}
            strokeWidth={STROKE}
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="butt"
            transform={`rotate(-90 ${cx} ${cy})`}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={RADIUS - STROKE / 2 - 2} fill="white" />
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
        <tspan x={cx} dy="-0.35em" className="fill-primary text-[15px] font-bold sm:text-base">
          {amountLine}
        </tspan>
        <tspan x={cx} dy="1.35em" className="fill-subtext text-[11px] font-medium sm:text-xs">
          {suffixLine}
        </tspan>
      </text>
    </svg>
  );
}

/** 77万円の内訳 — ドーナツ型円グラフ（4枚カードなし） */
export function BudgetPieChart() {
  const { t, locale } = useLocale();

  const formatAmount = (n: number) =>
    n.toLocaleString(locale === "ja" ? "ja-JP" : locale === "pt" ? "pt-PT" : "en-US");

  const segments: Segment[] = BUDGET_KEYS.map((key, i) => ({
    key,
    amount: BUDGET_AMOUNTS[key],
    pct: BUDGET_AMOUNTS[key] / BUDGET_TOTAL,
    pctLabel: BUDGET_PCT[key],
    color: SEGMENT_COLORS[i],
    label: t.support.budgetItems[i].label,
  }));

  const amountLine = `${formatAmount(BUDGET_TOTAL)}${t.support.yen}`;
  const suffixLine = t.support.budgetTotalSuffix;

  return (
    <ScrollReveal>
      <div
        className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-accent bg-accent/25 shadow-sm md:rounded-[2.5rem]"
        aria-label={t.support.budgetChartLabel}
      >
        <div className="bg-white/95 p-6 sm:p-8 md:p-10">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
            <div className="flex w-full shrink-0 justify-center md:w-auto md:flex-1">
              <DonutChart segments={segments} amountLine={amountLine} suffixLine={suffixLine} />
            </div>

            {/* 凡例 — スマホでは下（カードではなくリスト） */}
            <ul className="w-full flex-1 space-y-4 md:space-y-5">
              {segments.map((segment) => (
                <li key={segment.key} className="flex items-center gap-3 sm:gap-4">
                  <span
                    className="h-4 w-4 shrink-0 rounded-full"
                    style={{ backgroundColor: segment.color }}
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-text sm:text-base">{segment.label}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-en text-sm font-bold text-primary sm:text-base">
                      {formatAmount(segment.amount)}
                      <span className="ml-0.5 text-xs font-medium text-subtext">{t.support.yen}</span>
                    </p>
                    <p className="font-en text-xs text-subtext sm:text-sm">({segment.pctLabel}%)</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
