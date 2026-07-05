"use client";

import { useLocale } from "@/lib/i18n/context";
import { CTAButton } from "./ui/CTAButton";
import { CampaignCountdown } from "./CampaignCountdown";

/** 全ページ固定 — 常に「支援する」を表示 */
export function StickySupport() {
  const { t } = useLocale();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/5 bg-white/95 p-3 backdrop-blur-md sm:bottom-6 sm:left-auto sm:right-6 sm:w-auto sm:rounded-full sm:border sm:p-1.5 sm:shadow-xl sm:shadow-black/10"
      role="complementary"
      aria-label={t.nav.support}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <CampaignCountdown variant="compact" />
        <CTAButton variant="primary" size="md" className="w-full min-h-12 sm:min-h-11 sm:px-8">
          {t.nav.support}
        </CTAButton>
      </div>
    </div>
  );
}

/** 固定バー分の余白 */
export function StickySupportSpacer() {
  return <div className="h-24 sm:h-0" aria-hidden />;
}
