"use client";

import { useLocale } from "@/lib/i18n/context";
import { useCampaignCountdown } from "@/lib/useCampaignCountdown";

type CampaignCountdownProps = {
  variant?: "banner" | "compact";
};

function CountdownUnits({
  days,
  hours,
  size = "lg",
}: {
  days: number;
  hours: number;
  size?: "lg" | "sm";
}) {
  const { t } = useLocale();
  const large = size === "lg";

  return (
    <p className={`font-en font-bold leading-none tracking-tight ${large ? "text-5xl sm:text-6xl" : "text-base"}`}>
      {days}
      <span className={`font-bold ${large ? "ml-1.5 text-2xl sm:text-3xl" : "ml-0.5 text-sm"}`}>
        {t.support.countdownDays}
      </span>
      {(days > 0 || hours > 0) && (
        <>
          <span className={`mx-2 font-normal text-white/60 ${large ? "text-2xl sm:text-3xl" : "text-sm"}`}> </span>
          {hours}
          <span className={`font-bold ${large ? "ml-1 text-xl sm:text-2xl" : "ml-0.5 text-sm"}`}>
            {t.support.countdownHours}
          </span>
        </>
      )}
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
        {label}{" "}
        <span className="font-en text-base">
          {days}
          {t.support.countdownDays}
          {hours > 0 && (
            <>
              {hours}
              {t.support.countdownHours}
            </>
          )}
        </span>
      </p>
    );
  }

  return (
    <div className="mb-6 rounded-2xl bg-primary px-6 py-5 text-center text-white shadow-sm">
      <p className="text-sm font-medium text-white/85">{label}</p>
      <div className="mt-1">
        <CountdownUnits days={days} hours={hours} size="lg" />
      </div>
    </div>
  );
}
