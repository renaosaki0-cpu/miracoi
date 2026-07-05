/**
 * 活動の記録 — Instagram連携用メタデータ
 *
 * 記録を追加するとき:
 * 1. この配列に { imageSlot, instagramUrl } を追加
 * 2. locales/ja.ts・en.ts・pt.ts の gallery.records に同じ順で
 *    { title, date, body, alt } を追加
 * 3. public/images/gallery/ に画像を配置（imageSlot 0 = gallery1.jpg）
 */
export type ActivityRecordMeta = {
  /** gallery1 = 0, gallery2 = 1 … */
  imageSlot: number;
  instagramUrl: string;
};

export const ACTIVITY_RECORDS_META: ActivityRecordMeta[] = [
  {
    imageSlot: 0,
    instagramUrl: "https://www.instagram.com/p/DZ1tu6qoLUa/?igsh=MWRsc3hvcXMzOWJmcA==",
  },
];
