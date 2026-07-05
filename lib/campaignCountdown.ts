export type CampaignPhase = "upcoming" | "active" | "ended";

export type CampaignCountdownDetail = {
  status: CampaignPhase;
  days: number;
  hours: number;
  minutes: number;
};

const MS_PER_MINUTE = 60_000;
const MS_PER_HOUR = 3_600_000;
const MS_PER_DAY = 86_400_000;

function splitRemaining(ms: number): Pick<CampaignCountdownDetail, "days" | "hours" | "minutes"> {
  const safe = Math.max(0, ms);
  const days = Math.floor(safe / MS_PER_DAY);
  const hours = Math.floor((safe % MS_PER_DAY) / MS_PER_HOUR);
  const minutes = Math.floor((safe % MS_PER_HOUR) / MS_PER_MINUTE);
  return { days, hours, minutes };
}

/** クラウドファンディングのフェーズと残り時間（JSTの開始・終了時刻基準） */
export function getCampaignCountdown(
  startIso: string,
  endIso: string,
  now = new Date(),
): CampaignCountdownDetail {
  const start = new Date(startIso);
  const end = new Date(endIso);

  if (now >= end) {
    return { status: "ended", days: 0, hours: 0, minutes: 0 };
  }

  if (now < start) {
    return { status: "upcoming", ...splitRemaining(start.getTime() - now.getTime()) };
  }

  return { status: "active", ...splitRemaining(end.getTime() - now.getTime()) };
}

/** 開催中のみ READYFOR の支援数字を表示 */
export function getDisplayFunding(
  phase: CampaignPhase,
  currentAmount: number,
  supporterCount: number,
): { currentAmount: number; supporterCount: number } {
  if (phase === "active") {
    return { currentAmount, supporterCount };
  }
  return { currentAmount: 0, supporterCount: 0 };
}

/** 達成率（開始前・0円は 0%、最小幅なし） */
export function getFundingProgressPercent(currentAmount: number, goalAmount: number, phase: CampaignPhase): number {
  if (phase !== "active" || currentAmount <= 0) return 0;
  return Math.min((currentAmount / goalAmount) * 100, 100);
}
