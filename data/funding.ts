import { SITE } from "@/lib/constants";

/** 支援進捗 — 数字だけ変更すればサイト全体に反映 */
export const FUNDING = {
  goalAmount: SITE.goalAmount,
  /** TODO: READYFOR API連携時に更新 */
  currentAmount: 0,
  supporterCount: 0,
  campaignStart: SITE.campaign.start,
  campaignEnd: SITE.campaign.end,
} as const;
