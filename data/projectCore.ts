/** トップで前面に出す3つの核心テーマ */
export const PROJECT_CORE_IDS = ["why-mozambique", "why-yosakoi", "goals"] as const;

export type ProjectCoreId = (typeof PROJECT_CORE_IDS)[number];
