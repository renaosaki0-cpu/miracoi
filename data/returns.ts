/** リターン tier — READYFOR #171875 */
export const RETURN_AMOUNTS = [3000, 5000, 10000, 30000, 50000, 100000, 140000] as const;

export type ReturnAmount = (typeof RETURN_AMOUNTS)[number];

export const RETURN_TIER_IDS = RETURN_AMOUNTS.map((a) => `tier-${a}`) as [
  "tier-3000",
  "tier-5000",
  "tier-10000",
  "tier-30000",
  "tier-50000",
  "tier-100000",
  "tier-140000",
];

export type ReturnTierId = (typeof RETURN_TIER_IDS)[number];

/** Bプラン（リターン不要）を表示する金額 */
export const B_PLAN_AMOUNTS: ReturnAmount[] = [5000, 10000, 30000, 50000, 100000];

export type ReturnTierMeta = {
  id: ReturnTierId;
  amount: ReturnAmount;
  hasNoReturnOption: boolean;
};

export const RETURN_TIERS: ReturnTierMeta[] = [
  { id: "tier-3000", amount: 3000, hasNoReturnOption: false },
  { id: "tier-5000", amount: 5000, hasNoReturnOption: true },
  { id: "tier-10000", amount: 10000, hasNoReturnOption: true },
  { id: "tier-30000", amount: 30000, hasNoReturnOption: true },
  { id: "tier-50000", amount: 50000, hasNoReturnOption: true },
  { id: "tier-100000", amount: 100000, hasNoReturnOption: true },
  { id: "tier-140000", amount: 140000, hasNoReturnOption: false },
];
