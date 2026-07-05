"use client";

import Image from "next/image";
import { startTransition, useCallback, useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/context";
import manifest from "@/data/imageManifest.json";
import { isValidImageSrc } from "@/lib/images";

type MiraiImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
};

function ImagePlaceholder({
  alt,
  className = "",
  fill = false,
  note,
}: {
  alt: string;
  className?: string;
  fill?: boolean;
  note?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-accent/80 via-white to-primary/10 ${className}`}
      role="img"
      aria-label={alt || "Image placeholder"}
    >
      <div
        className={`flex flex-col items-center justify-center gap-3 p-6 text-center ${
          fill ? "absolute inset-0" : "min-h-[12rem] h-full w-full"
        }`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
          <svg
            className="h-6 w-6 text-primary/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        {alt ? <p className="max-w-[200px] text-xs leading-relaxed text-subtext/70">{alt}</p> : null}
        {note ? <p className="text-[10px] font-medium tracking-wide text-subtext/50 uppercase">{note}</p> : null}
      </div>
    </div>
  );
}

const IMAGE_CACHE_VERSION = String(
  new Date((manifest as { generatedAt?: string }).generatedAt ?? 0).getTime() || Date.now(),
);

function versionedSrc(src: string): string {
  return `${src.split("?")[0]}?v=${IMAGE_CACHE_VERSION}`;
}

/**
 * /public/images から画像を読み込む。
 * src が空・未設定の場合はプレースホルダーを表示。
 */
export function MiraiImage({
  src,
  alt,
  className = "",
  imageClassName = "object-cover object-center",
  priority = false,
  fill = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: MiraiImageProps) {
  const { locale } = useLocale();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  const handleLoad = useCallback(() => {
    startTransition(() => setLoaded(true));
  }, []);

  const handleError = useCallback(() => {
    startTransition(() => setError(true));
  }, []);

  const placeholderNote =
    locale === "ja" ? "後で差し替え" : locale === "pt" ? "Substituir depois" : "Coming soon";

  if (!isValidImageSrc(src) || error) {
    return <ImagePlaceholder alt={alt} className={className} fill={fill} note={placeholderNote} />;
  }

  const imageSrc = versionedSrc(src);

  if (fill) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {!loaded && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-accent to-white" />}
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`${imageClassName} transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-accent to-white" />}
      <Image
        src={imageSrc}
        alt={alt}
        width={1200}
        height={800}
        priority={priority}
        sizes={sizes}
        className={`h-full w-full ${imageClassName} transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
