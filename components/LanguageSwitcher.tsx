"use client";

import { useLocale } from "@/lib/i18n/context";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/locales/types";

type LanguageSwitcherProps = {
  /** モバイルメニューなど、ラベルを常に表示する */
  showLabel?: boolean;
  /** ヘッダー黒背景など */
  theme?: "light" | "dark";
  className?: string;
};

/** 言語選択 — 日本語 / English / Português（デフォルト: 日本語） */
export function LanguageSwitcher({ showLabel = false, theme = "light", className = "" }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLocale();
  const isDark = theme === "dark";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <label
        htmlFor="miracoi-locale"
        className={`shrink-0 text-xs font-medium ${isDark ? "text-white/70" : "text-subtext"} ${showLabel ? "" : "sr-only"}`}
      >
        {t.nav.language}
      </label>
      <select
        id="miracoi-locale"
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className={`h-9 min-w-[7.5rem] cursor-pointer rounded-full border px-3 text-xs font-medium shadow-sm outline-none transition focus:ring-2 sm:min-w-[8.5rem] sm:px-4 sm:text-sm ${
          isDark
            ? "border-white/15 bg-white/10 text-white focus:border-primary focus:ring-primary/30"
            : "border-black/10 bg-white/90 text-text focus:border-primary focus:ring-primary/20"
        }`}
        aria-label={t.nav.languageSelect}
      >
        {LOCALES.map((loc) => (
          <option key={loc} value={loc}>
            {LOCALE_LABELS[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
