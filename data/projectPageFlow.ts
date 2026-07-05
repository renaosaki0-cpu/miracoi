/** プロジェクトページ — 表示順 */
export const PROJECT_PAGE_FLOW = ["local-activities", "schools", "original-song", "schedule"] as const;

export type ProjectPageFlowId = (typeof PROJECT_PAGE_FLOW)[number];
