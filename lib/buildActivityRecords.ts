import { ACTIVITY_RECORDS_META } from "@/data/activityRecords";
import { GALLERY_SLOTS } from "@/data/gallery";
import type { Dictionary } from "@/locales/types";

export type ActivityRecordItem = {
  meta: (typeof ACTIVITY_RECORDS_META)[number];
  record: Dictionary["gallery"]["records"][number];
  imageSrc: string | null;
};

/** ACTIVITY_RECORDS_META と locales の records を結合（件数はデータ追加で自動増加） */
export function buildActivityRecords(records: Dictionary["gallery"]["records"]): ActivityRecordItem[] {
  return ACTIVITY_RECORDS_META.map((meta, i) => ({
    meta,
    record: records[i],
    imageSrc: GALLERY_SLOTS[meta.imageSlot] ?? null,
  })).filter((item): item is ActivityRecordItem => Boolean(item.record));
}
