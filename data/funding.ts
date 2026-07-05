import { SITE } from "@/lib/constants";

/** 支援進捗 — 数字だけ変更すればサイト全体に反映 */
export const FUNDING = {
  goalAmount: SITE.goalAmount,
  /** TODO: READYFOR API連携時に更新 */
  currentAmount: 0,
  supporterCount: 0,
  /** クラウドファンディング開催期間（JST） */
  campaignStart: "2026-07-12T23:00:00+09:00",
  campaignEnd: "2026-09-04T23:00:00+09:00",
} as const;
