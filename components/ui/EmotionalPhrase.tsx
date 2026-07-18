"use client";

import { useLocale } from "@/lib/i18n/context";

type EmotionalPhraseProps = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "span";
};

/**
 * Miracoi の手書きフォントは、短い感情的なフレーズにのみ使用する。
 * 日本語ロケール以外や未読込時は、太字・字間調整のフォールバックへ自然に切り替わる。
 */
export function EmotionalPhrase({ children, className = "", as = "p" }: EmotionalPhraseProps) {
  const { locale } = useLocale();
  const Tag = as;
  const fontClass = locale === "ja" ? "font-handwritten" : "font-semibold tracking-tight";

  return <Tag className={`${fontClass} ${className}`}>{children}</Tag>;
}
