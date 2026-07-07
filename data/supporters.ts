import { resolveSupporterImageById } from "@/lib/images";

export type SupporterId =
  | "tanabe"
  | "morita"
  | "takemitsu"
  | "matsui"
  | "ujiihara"
  | "huang"
  | "tanaka"
  | "zhang"
  | "hayakawa"
  | "cai"
  | "hibi"
  | "kyakumoto"
  | "sato"
  | "doji"
  | "tadaki"
  | "seo"
  | "jorden";

/** 肩書・所属の役職が高い順（日本語キーワード基準で固定） */
export const SUPPORTER_ORDER: SupporterId[] = [
  "sato",
  "cai",
  "jorden",
  "tanaka",
  "kyakumoto",
  "morita",
  "seo",
  "hibi",
  "ujiihara",
  "huang",
  "hayakawa",
  "takemitsu",
  "matsui",
  "tanabe",
  "tadaki",
  "zhang",
  "doji",
];

export type Supporter = {
  id: SupporterId;
  name: string;
  title: string;
  message: string;
  image: string | null;
};

export type SupporterContent = Pick<Supporter, "name" | "title" | "message">;

export function buildSupporters(items: Record<string, SupporterContent>): Supporter[] {
  return SUPPORTER_ORDER.map((id) => ({
    id,
    name: items[id].name,
    title: items[id].title,
    message: items[id].message,
    image: resolveSupporterImageById(id),
  }));
}
