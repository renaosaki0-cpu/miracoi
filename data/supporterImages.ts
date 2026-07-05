/** 応援者 id → 画像ファイル slug（supporter-{slug}.jpg / .png） */
export const SUPPORTER_IMAGE_SLUG: Record<string, string> = {
  tanabe: "masashige", // 田辺将繁
  morita: "teppei", // 森田鉄平
  takemitsu: "ren", // 武満蓮
  matsui: "daiki", // 松井大輝
  ujiihara: "chie", // 氏原千恵
  huang: "hua", // 黄華
  tanaka: "emiko", // 田中恵美子
  zhang: "kohei", // 張嵩平
  hayakawa: "yosuke", // 早川陽介
  cai: "jun", // 蔡ジュン
  hibi: "yusuke", // 日比裕介
  kyakumoto: "makiko", // 客本牧子
  sato: "hiroyuki", // 佐藤裕幸
  doji: "yudai", // 土師雄大
  tadaki: "yoshie", // 只木良枝
  seo: "hiroshi", // 妹尾日呂志
  jorden: "rashaad", // Rashaad Jorden
};

/** slug の別名（優先順）— ファイル名の揺れ吸収 */
export const SUPPORTER_SLUG_ALIASES: Record<string, string[]> = {
  seo: ["hiroshi", "kohei"],
  zhang: ["kohei", "zhang", "songping"],
};

export const SUPPORTER_IMAGE_DIR = "/images/supporters";

export function supporterImagePath(slug: string): string {
  return `${SUPPORTER_IMAGE_DIR}/supporter-${slug}.jpg`;
};
