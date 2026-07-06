/** スロット別 — 顔が切れにくいトリミング位置 */
export const IMAGE_LAYOUT = {
  hero: "object-cover object-[center_38%]",
  story: "object-contain object-center",
  storyLearning: "object-cover object-center",
  ctaBg: "object-cover object-center",
  member: "object-cover object-[center_22%]",
  supporter: "object-cover object-[center_20%]",
  projectGoals: "object-cover object-[center_42%]",
  /** 地図・文字入り説明画像 — 全体表示 */
  projectExplain: "object-contain object-center",
  galleryHero: "object-cover object-[center_40%]",
  galleryPortrait: "object-cover object-top",
  galleryWide: "object-cover object-center",
  project: "object-cover object-[center_35%]",
} as const;

export type ImageLayoutKey = keyof typeof IMAGE_LAYOUT;

export function layoutClass(key: ImageLayoutKey): string {
  return IMAGE_LAYOUT[key];
}

/** 「このプロジェクトで実現したいこと」— 横長フレーム（16:9 → 2:1 → 21:9） */
export const GOALS_IMAGE_FRAME =
  "relative w-full shrink-0 overflow-hidden aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9]";

/** 説明画像（地図・文字）— トリミングせず全体表示 */
export const EXPLAIN_IMAGE_FRAME =
  "relative min-h-[360px] overflow-hidden bg-[#f7f3ec] sm:min-h-[440px] lg:min-h-[560px]";
