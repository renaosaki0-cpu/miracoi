"use client";

import { useLocale } from "@/lib/i18n/context";
import { useCampaignCountdown } from "@/lib/useCampaignCountdown";
import type { CampaignPhase } from "@/lib/campaignCountdown";

type CampaignCountdownProps = {
  variant?: "banner" | "compact";
};

function formatCountdownText(
  locale: string,
  status: CampaignPhase,
  label: string,
  days: number,
  hours: number,
  daysUnit: string,
  daysUntilStartUnit: string,
  hoursUnit: string,
): string {
  const daySuffix = status === "upcoming" ? daysUntilStartUnit : daysUnit;

  if (days > 0) {
    return `${label}${days}${daySuffix}`;
  }
  if (hours > 0) {
    return `${label}${hours}${hoursUnit}`;
  }
  return locale === "ja" ? `${label}まもなく終了！` : `${label}Ending soon!`;
}

function CountdownDisplay({
  days,
  hours,
  label,
  status,
  size = "lg",
}: {
  days: number;
  hours: number;
  label: string;
  status: CampaignPhase;
  size?: "lg" | "sm";
}) {
  const { locale, t } = useLocale();
  const text = formatCountdownText(
    locale,
    status,
    label,
    days,
    hours,
    t.support.countdownDays,
    t.support.countdownDaysUntilStart,
    t.support.countdownHours,
  );
  const large = size === "lg";

  return (
    <p
      className={`font-en font-bold leading-snug tracking-tight ${
        large ? "text-3xl sm:text-4xl md:text-5xl" : "text-sm sm:text-base"
      }`}
    >
      {text}
    </p>
  );
}

/** クラファン残り時間 — Support バナー / 固定バー */
export function CampaignCountdown({ variant = "banner" }: CampaignCountdownProps) {
  const { t } = useLocale();
  const { status, days, hours } = useCampaignCountdown();

  if (status === "ended") {
    if (variant === "compact") return null;
    return (
      <div className="mb-6 rounded-2xl bg-subtext/10 px-6 py-5 text-center">
        <p className="text-lg font-bold text-subtext">{t.support.countdownEnded}</p>
      </div>
    );
  }

  const label = status === "upcoming" ? t.support.countdownUntilStart : t.support.countdownRemaining;

  if (variant === "compact") {
    return (
      <p className="text-center text-sm font-semibold text-primary sm:text-left">
        <CountdownDisplay days={days} hours={hours} label={label} status={status} size="sm" />
      </p>
    );
  }

  return (
    <div className="mb-6 rounded-2xl bg-primary px-6 py-5 text-center text-white shadow-sm">
      <CountdownDisplay days={days} hours={hours} label={label} status={status} size="lg" />
    </div>
  );
}
