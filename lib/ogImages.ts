import manifest from "@/data/imageManifest.json";

type Manifest = {
  files: string[];
  slots: Record<string, string | null | undefined>;
};

const M = manifest as Manifest;
const FILE_SET = new Set(M.files);

function pickExisting(path: string | null | undefined): string | undefined {
  if (!path || !FILE_SET.has(path)) return undefined;
  return path;
}

/** OGP用 — manifest に存在する画像のみ（なければ undefined） */
export function getOgImageMetadata(): { url: string; width: number; height: number; alt: string }[] | undefined {
  const src = pickExisting(M.slots.og) ?? pickExisting(M.slots.hero);
  if (!src) return undefined;
  return [{ url: src, width: 1200, height: 630, alt: "Miracoi" }];
}

export function getOgImageUrls(): string[] | undefined {
  const images = getOgImageMetadata();
  return images?.map((img) => img.url);
}
