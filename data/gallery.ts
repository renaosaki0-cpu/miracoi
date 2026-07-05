/** ギャラリー — gallery1〜4 のみ（存在する写真だけ） */
import { GALLERY_SLOT_COUNT, resolveGalleryImages, resolveGallerySlots } from "@/lib/resolveImage";

export const GALLERY_COUNT = GALLERY_SLOT_COUNT;

/** 配置済みの gallery 画像のみ */
export const GALLERY_IMAGES = resolveGalleryImages();

/** gallery1〜4 スロット（未配置は null） */
export const GALLERY_SLOTS = resolveGallerySlots(GALLERY_COUNT);
