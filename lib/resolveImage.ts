import manifest from "@/data/imageManifest.json";
import type { ReturnAmount } from "@/data/returns";
import type { ProjectCoreId } from "@/data/projectCore";
import type { ProjectTabId } from "@/data/projectTabs";

export type ImageSlotKey =
  | "icon"
  | "hero"
  | "story"
  | "ctaBg"
  | "og"
  | "project1"
  | "project2"
  | "memberRena"
  | "memberMomoe";

export const GALLERY_SLOT_COUNT = 4;

type Manifest = {
  generatedAt?: string;
  files: string[];
  slots: Record<string, string | null | undefined>;
  gallery: string[];
  gallerySlots: (string | null)[];
  returnSlots: Record<string, string | null | undefined>;
  supporterById: Record<string, string | null | undefined>;
  supporters: string[];
  supporterSlots: (string | null)[];
};

const M = manifest as Manifest;

const FILE_SET = new Set(M.files);

/** manifest に存在するパスのみ返す（未配置・不存在は null） */
function pickExisting(path: string | null | undefined): string | null {
  if (!path || !FILE_SET.has(path)) return null;
  return path;
}

/** スロットに割り当てられた画像（なければ null → プレースホルダー） */
export function resolveImage(slot: ImageSlotKey): string | null {
  return pickExisting(M.slots[slot]);
}

/** Miracoi 団体アイコン — manifest の icon スロット */
export function resolveMiracoiIcon(): string | null {
  return pickExisting(M.slots.icon);
}

export function resolveProjectTabImage(tab: ProjectTabId | ProjectCoreId): string | null {
  return pickExisting(M.slots[`projectTab:${tab}`]);
}

/** ギャラリー — gallery1〜4 のみ、存在する画像だけ */
export function resolveGalleryImages(): string[] {
  const slots = M.gallerySlots.slice(0, GALLERY_SLOT_COUNT);
  return slots.map((src) => pickExisting(src)).filter((src): src is string => src !== null);
}

/** ギャラリー4枠（未配置は null） */
export function resolveGallerySlots(max = GALLERY_SLOT_COUNT): (string | null)[] {
  const slots = M.gallerySlots.slice(0, max);
  return Array.from({ length: max }, (_, i) => pickExisting(slots[i] ?? null));
}

/** リターン tier 画像 — return-{amount} 専用 */
export function resolveReturnImage(amount: ReturnAmount): string | null {
  return pickExisting(M.returnSlots?.[String(amount)] ?? null);
}

export function resolveSupporterImageById(id: string): string | null {
  return pickExisting(M.supporterById?.[id] ?? null);
}

/** @deprecated インデックス割り当て — resolveSupporterImageById を使用 */
export function resolveSupporterImage(index: number): string | null {
  const ids = Object.keys(M.supporterById ?? {});
  const id = ids[index - 1];
  return id ? resolveSupporterImageById(id) : null;
}

export function hasAnyImages(): boolean {
  return M.files.length > 0;
}

export function hasGalleryImages(): boolean {
  return resolveGalleryImages().length > 0;
}

export function listAvailableFiles(): string[] {
  return M.files;
}

export function isManifestImage(path: string | null | undefined): path is string {
  return typeof path === "string" && path.length > 0 && FILE_SET.has(path);
}
