"use client";

import Link from "next/link";
import { layoutClass } from "@/lib/imageLayout";
import type { ActivityRecordItem } from "@/lib/buildActivityRecords";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";

const GRID_BY_COUNT: Record<number, string[]> = {
  2: ["col-span-2 md:col-span-7", "col-span-2 md:col-span-5"],
  3: ["col-span-2 md:col-span-8 md:row-span-2", "col-span-1 md:col-span-4", "col-span-1 md:col-span-4"],
  4: [
    "col-span-2 md:col-span-8 md:row-span-2",
    "col-span-1 md:col-span-4",
    "col-span-1 md:col-span-4",
    "col-span-2 md:col-span-4",
  ],
};

const IMAGE_CLASS_BY_INDEX = [
  "aspect-[4/3] w-full md:aspect-[16/10] md:min-h-[440px]",
  "aspect-square w-full md:aspect-[4/5] md:min-h-[220px]",
  "aspect-square w-full md:aspect-[4/5] md:min-h-[220px]",
  "aspect-[2/1] w-full md:aspect-[16/9]",
] as const;

const LAYOUT_BY_INDEX = ["galleryHero", "galleryPortrait", "galleryPortrait", "galleryWide"] as const;

type ActivityRecordListProps = {
  items: ActivityRecordItem[];
  onSelect: (index: number) => void;
  viewOnInstagram: string;
  readMore: string;
  /** 一覧ページでは記事レイアウトをやや広く */
  variant?: "section" | "page";
  /** プレビュー時、残り件数がある場合のリンク先 */
  showViewMore?: boolean;
  viewMoreLabel?: string;
};

function InstagramLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:bg-primary/90"
      onClick={(e) => e.stopPropagation()}
    >
      <InstagramIcon />
      {label}
    </a>
  );
}

/** 1件 — 記事風レイアウト（大きな写真 + 本文） */
function ActivityRecordArticle({
  item,
  onSelect,
  viewOnInstagram,
  variant,
}: {
  item: ActivityRecordItem;
  onSelect: () => void;
  viewOnInstagram: string;
  variant: "section" | "page";
}) {
  const isPage = variant === "page";

  return (
    <ScrollReveal>
      <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-accent/50 md:rounded-3xl">
        <button
          type="button"
          onClick={onSelect}
          className="group relative block w-full overflow-hidden text-left"
          aria-label={item.record.title}
        >
          <MiraiImage
            src={item.imageSrc}
            alt={item.record.alt}
            className={`w-full transition-transform duration-700 group-hover:scale-[1.01] ${
              isPage ? "aspect-[4/3] md:aspect-[21/9] md:min-h-[480px]" : "aspect-[4/3] md:aspect-[2/1] md:min-h-[400px]"
            }`}
            imageClassName={layoutClass("galleryHero")}
            sizes="(max-width: 768px) 100vw, 960px"
          />
          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />
        </button>

        <div className={`mx-auto ${isPage ? "max-w-3xl px-6 py-8 md:px-10 md:py-12" : "max-w-2xl px-5 py-7 md:px-8 md:py-10"}`}>
          <p className="font-en text-sm font-medium tracking-wider text-primary">{item.record.date}</p>
          <h3 className="mt-3 text-xl font-bold leading-snug text-text sm:text-2xl md:text-3xl">{item.record.title}</h3>
          <p className="mt-5 text-sm leading-[1.9] text-subtext md:text-base">{item.record.body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <InstagramLink href={item.meta.instagramUrl} label={viewOnInstagram} />
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

/** 2件以上 — グリッドカード（クリックでモーダル） */
function ActivityRecordGrid({
  items,
  onSelect,
  readMore,
}: {
  items: ActivityRecordItem[];
  onSelect: (index: number) => void;
  readMore: string;
}) {
  const gridClasses = GRID_BY_COUNT[Math.min(items.length, 4)] ?? GRID_BY_COUNT[4];

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-12 md:gap-4">
      {items.map((item, i) => (
        <ScrollReveal key={item.record.title} delay={i * 0.06} className={gridClasses[i] ?? "col-span-1"}>
          <button
            type="button"
            onClick={() => onSelect(i)}
            className="group relative h-full w-full overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-accent/60 transition hover:shadow-md hover:ring-primary/30 md:rounded-3xl"
          >
            <MiraiImage
              src={item.imageSrc}
              alt={item.record.alt}
              className={`transition-transform duration-700 group-hover:scale-[1.02] ${IMAGE_CLASS_BY_INDEX[i] ?? "aspect-[4/3] w-full"}`}
              imageClassName={layoutClass(LAYOUT_BY_INDEX[i] ?? "galleryWide")}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#222]/70 via-[#222]/10 to-transparent opacity-90 transition group-hover:from-primary/80" />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5">
              <p className="font-en text-[10px] font-medium tracking-wider text-white/80 sm:text-xs">{item.record.date}</p>
              <p className="mt-1 line-clamp-2 text-xs font-semibold leading-snug text-white sm:text-sm md:text-base">
                {item.record.title}
              </p>
              <p className="mt-2 text-[10px] font-medium text-white/70 sm:text-xs">{readMore}</p>
            </div>
          </button>
        </ScrollReveal>
      ))}
    </div>
  );
}

/** 活動の記録 — 件数に応じてレイアウト切替 */
export function ActivityRecordList({
  items,
  onSelect,
  viewOnInstagram,
  readMore,
  variant = "section",
  showViewMore = false,
  viewMoreLabel,
}: ActivityRecordListProps) {
  if (items.length === 0) return null;

  return (
    <>
      {items.length === 1 ? (
        <ActivityRecordArticle
          item={items[0]}
          onSelect={() => onSelect(0)}
          viewOnInstagram={viewOnInstagram}
          variant={variant}
        />
      ) : (
        <ActivityRecordGrid items={items} onSelect={onSelect} readMore={readMore} />
      )}

      {showViewMore && viewMoreLabel && (
        <ScrollReveal className="mt-10 text-center md:mt-12">
          <Link
            href="/gallery"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/30 bg-white px-8 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
          >
            {viewMoreLabel}
          </Link>
        </ScrollReveal>
      )}
    </>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
