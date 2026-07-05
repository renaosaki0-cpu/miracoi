/** 活動内容セクション — 現地で行う3テーマのみ */
export const PROJECT_TAB_IDS = ["local-activities", "original-song", "schedule"] as const;

export type ProjectTabId = (typeof PROJECT_TAB_IDS)[number];

/** 画像は imageManifest.json の projectTab:* スロットから resolveProjectTabImage() で解決 */

/** 77万円の内訳 — Supportセクションの円グラフ用 */
export const BUDGET_AMOUNTS = {
  travel: 480000,
  stay: 90000,
  goods: 60740,
  fees: 139260,
} as const;

export const BUDGET_TOTAL = 770000;

export const BUDGET_KEYS = ["travel", "stay", "goods", "fees"] as const;

/** 表示用の割合（READYFOR 内訳） */
export const BUDGET_PCT: Record<(typeof BUDGET_KEYS)[number], number> = {
  travel: 62,
  stay: 12,
  goods: 8,
  fees: 18,
};
