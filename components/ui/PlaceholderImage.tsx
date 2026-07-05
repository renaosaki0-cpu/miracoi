"use client";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * プレースホルダー画像 — /public/images または /public/supporters のパスを指定。
 * 実画像が未配置の場合はグラデーション背景を表示。
 */
export function PlaceholderImage({
  src,
  alt,
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-accent via-white to-primary/10 ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* 実画像差し替え時: <Image src={src} alt={alt} fill className="object-cover" /> */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
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
          <p className="text-xs text-subtext/60 font-medium">{alt}</p>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-0"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        onLoad={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.parentElement
            ?.querySelector("[role='img'] > div:first-child")
            ?.classList.add("hidden");
        }}
      />
    </div>
  );
}
