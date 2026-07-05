/** 画像パス — imageManifest.json 経由で存在するファイルのみ返す */

import manifest from "@/data/imageManifest.json";

export {
  resolveImage,
  resolveMiracoiIcon,
  resolveProjectTabImage,
  resolveGalleryImages,
  resolveGallerySlots,
  resolveReturnImage,
  resolveSupporterImage,
  resolveSupporterImageById,
  hasAnyImages,
  hasGalleryImages,
  listAvailableFiles,
  isManifestImage,
} from "@/lib/resolveImage";

export { getMiracoiIconSrc, getMiracoiIconVersion, MIRACOI_ICON_FALLBACK } from "@/lib/miracoiIcon";

export type { ImageSlotKey } from "@/lib/resolveImage";

const MANIFEST_FILES = new Set((manifest as { files: string[] }).files);

/** manifest に存在するファイルのみ有効（クエリ付き URL も可） */
export function isValidImageSrc(src: string | null | undefined): src is string {
  if (typeof src !== "string" || src.trim().length === 0) return false;
  const base = src.split("?")[0];
  return MANIFEST_FILES.has(base);
}
