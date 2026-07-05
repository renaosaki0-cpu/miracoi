"use client";

import { useCallback, useState } from "react";
import { useLocale } from "@/lib/i18n/context";
import { buildActivityRecords } from "@/lib/buildActivityRecords";
import { ActivityRecordList } from "./ActivityRecordList";
import { ActivityRecordModal } from "./ActivityRecordModal";
import { GalleryComingSoon } from "./GalleryComingSoon";
import { ScrollReveal } from "./ui/ScrollReveal";

/** 最近の活動 — 一覧ページ */
export function GalleryPageContent() {
  const { t } = useLocale();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = buildActivityRecords(t.gallery.records);

  const handleOpenRecord = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  if (items.length === 0) return null;

  const modalOpen = activeIndex !== null;
  const activeItem = modalOpen ? items[activeIndex] : null;

  return (
    <>
      <section className="section-padding bg-section-white pt-8 md:pt-12">
        <div className="container-main">
          <ScrollReveal className="mb-8 border-b border-accent/50 pb-8 md:mb-10 md:pb-10">
            <p className="section-label">{t.gallery.label}</p>
            <h1 className="text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">{t.gallery.title}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-subtext md:mt-4 md:text-base">
              {t.gallery.description}
            </p>
          </ScrollReveal>

          <ScrollReveal className="mb-6 md:mb-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-subtext uppercase">{t.gallery.reportsLabel}</p>
          </ScrollReveal>

          <ActivityRecordList
            items={items}
            onSelect={handleOpenRecord}
            viewOnInstagram={t.gallery.viewOnInstagram}
            readMore={t.gallery.readMore}
            variant="page"
          />

          <GalleryComingSoon />
        </div>
      </section>

      <ActivityRecordModal
        open={modalOpen && activeItem !== null}
        onClose={handleCloseModal}
        imageSrc={activeItem?.imageSrc ?? null}
        title={activeItem?.record.title ?? ""}
        date={activeItem?.record.date ?? ""}
        body={activeItem?.record.body ?? ""}
        alt={activeItem?.record.alt ?? ""}
        instagramUrl={activeItem?.meta.instagramUrl ?? ""}
        instagramLabel={t.gallery.viewOnInstagram}
        closeLabel={t.gallery.closeModal}
      />
    </>
  );
}
