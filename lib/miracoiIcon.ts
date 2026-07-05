import manifest from "@/data/imageManifest.json";
import { resolveMiracoiIcon } from "@/lib/resolveImage";

const FALLBACK = "/images/miracoi-icon.png";

/** manifest 更新時刻付き — ブラウザキャッシュ対策 */
export function getMiracoiIconVersion(): string {
  const generatedAt = (manifest as { generatedAt?: string }).generatedAt;
  if (!generatedAt) return "1";
  return encodeURIComponent(generatedAt);
}

/** Miracoi 団体アイコン URL（manifest 連動 + キャッシュバスト） */
export function getMiracoiIconSrc(): string {
  const base = resolveMiracoiIcon() ?? FALLBACK;
  return `${base}?v=${getMiracoiIconVersion()}`;
}

export const MIRACOI_ICON_FALLBACK = FALLBACK;
