"use client";

import { useEffect, useState } from "react";
import { FUNDING } from "@/data/funding";
import { getCampaignCountdown, type CampaignCountdownDetail } from "@/lib/campaignCountdown";

/** 1秒ごとに更新するクラファン残り時間 */
export function useCampaignCountdown(): CampaignCountdownDetail {
  const [countdown, setCountdown] = useState(() =>
    getCampaignCountdown(FUNDING.campaignStart, FUNDING.campaignEnd),
  );

  useEffect(() => {
    const update = () => setCountdown(getCampaignCountdown(FUNDING.campaignStart, FUNDING.campaignEnd));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return countdown;
}
