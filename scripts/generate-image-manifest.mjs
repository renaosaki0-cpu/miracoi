#!/usr/bin/env node
/**
 * public/images を走査し、存在する写真だけをスロットへ自動割り当て。
 * npm run dev / build の前に実行されます。
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const IMAGES_ROOT = path.join(ROOT, "public", "images");
const OUT = path.join(ROOT, "data", "imageManifest.json");

const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;
const GALLERY_COUNT = 4;
const RETURN_AMOUNTS = [3000, 5000, 10000, 30000, 50000, 100000, 140000];

/** data/supporterImages.ts と同期 — 応援者 id → ファイル slug */
const SUPPORTER_IMAGE_SLUG = {
  tanabe: "masashige",
  morita: "teppei",
  takemitsu: "ren",
  matsui: "daiki",
  ujiihara: "chie",
  huang: "hua",
  tanaka: "emiko",
  hayakawa: "yosuke",
  cai: "jun",
  hibi: "yusuke",
  kyakumoto: "makiko",
  sato: "hiroyuki",
  doji: "yudai",
  tadaki: "yoshie",
  seo: "hiroshi",
  jorden: "rashaad",
  zhang: "kohei",
};

/** slug の別名（優先順）— ファイル名の揺れ吸収 */
const SUPPORTER_SLUG_ALIASES = {
  seo: ["hiroshi", "kohei"],
  zhang: ["kohei", "zhang", "songping"],
};

/** プロジェクトタブ — ファイル名優先、なければ gallery5〜8（gallery/ または project/） */
const PROJECT_TAB_CANDIDATES = {
  "why-mozambique": ["why-mozambique", "why_mozambique"],
  "why-yosakoi": ["why-yosakoi", "why_yosakoi"],
  goals: ["project-vision", "project_vision", "project-goals", "project_goals", "goals"],
  "local-activities": ["local-activities", "local_activities", "gallery5"],
  "original-song": ["original-song", "original_song", "gallery6"],
  schedule: ["schedule", "gallery7"],
  vision: ["vision", "gallery8"],
};

/** @param {string} dir */
function walkImages(dir, base = IMAGES_ROOT) {
  /** @type {string[]} */
  const files = [];
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith(".")) continue;
    if (entry.isDirectory()) {
      files.push(...walkImages(full, base));
    } else if (IMAGE_EXT.test(entry.name)) {
      const rel = path.relative(path.join(ROOT, "public"), full).split(path.sep).join("/");
      files.push(`/${rel}`);
    }
  }
  return files.sort();
}

/** @param {string} p */
function baseName(p) {
  return path.basename(p).replace(IMAGE_EXT, "").toLowerCase();
}

/** @param {string} file */
function isReturnFile(file) {
  return /^return[-_]?\d+$|^tier[-_]?\d+$/.test(baseName(file));
}

/** @param {string} file */
function isSupporterFile(file) {
  return /\/supporters\/supporter-/i.test(file) || /^supporter-/i.test(baseName(file));
}

/** @param {string} file — スロット自動割当から除外 */
function isReservedFile(file, { allowIcon = false } = {}) {
  const b = baseName(file);
  if (!allowIcon && /^miracoi-icon$/i.test(b)) return true;
  if (/^project-vision$/i.test(b)) return true;
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(b)) return true;
  return false;
}

/** gallery1〜8 — /images/gallery/ または /images/project/（更新日時が新しい方を優先） */
function findGalleryFile(files, index, used) {
  const names = [`gallery${index}`, `gallery-${index}`, `gallery_${index}`];
  for (const name of names) {
    const matches = files.filter((f) => {
      if (used.has(f) || isReservedFile(f)) return false;
      if (baseName(f) !== name) return false;
      return /\/gallery\//i.test(f) || /\/project\//i.test(f);
    });
    if (matches.length === 0) continue;

    matches.sort((a, b) => {
      const mtime = (p) => fs.statSync(path.join(ROOT, "public", p.slice(1))).mtimeMs;
      return mtime(b) - mtime(a);
    });
    return matches[0];
  }
  return null;
}

/**
 * @param {string[]} files
 * @param {(string | RegExp)[]} candidates
 * @param {Set<string>} used
 * @param {{ allowUsed?: boolean; allowIcon?: boolean }} options
 */
function pick(files, candidates, used, options = {}) {
  const { allowUsed = false, allowIcon = false } = options;
  for (const c of candidates) {
    const found = files.find((f) => {
      if (!allowUsed && used.has(f)) return false;
      if (isReservedFile(f, { allowIcon })) return false;
      const b = baseName(f);
      if (typeof c === "string") return b === c.toLowerCase();
      return c.test(b) || c.test(f.toLowerCase());
    });
    if (found) {
      if (!allowUsed) used.add(found);
      return found;
    }
  }
  return null;
}

/** @param {string[]} files */
function pickMiracoiIcon(files) {
  const matches = files.filter((f) => /^miracoi-icon$/i.test(baseName(f)));
  if (matches.length === 0) return null;

  matches.sort((a, b) => {
    const mtime = (p) => fs.statSync(path.join(ROOT, "public", p.slice(1))).mtimeMs;
    return mtime(b) - mtime(a);
  });

  return syncMiracoiIconAssets(matches[0]);
}

/** 正規パスへ統一し、Next.js favicon / apple-touch-icon も同期 */
function syncMiracoiIconAssets(sourceUrl) {
  const canonicalRel = "/images/miracoi-icon.png";
  const canonicalAbs = path.join(IMAGES_ROOT, "miracoi-icon.png");
  const sourceAbs = path.join(ROOT, "public", sourceUrl.slice(1));

  if (!fs.existsSync(sourceAbs)) return null;

  fs.copyFileSync(sourceAbs, canonicalAbs);

  const appDir = path.join(ROOT, "app");
  fs.mkdirSync(appDir, { recursive: true });
  fs.copyFileSync(canonicalAbs, path.join(appDir, "icon.png"));
  fs.copyFileSync(canonicalAbs, path.join(appDir, "apple-icon.png"));

  return canonicalRel;
}

/** @param {string[]} files @param {string[]} slugs */
function findSupporterPath(files, slugs) {
  for (const slug of slugs) {
    const target = `supporter-${slug.toLowerCase()}`;
    const found = files.find((f) => /\/supporters\//i.test(f) && baseName(f) === target);
    if (found) return found;
    // /images/supporters/ 直下以外（例: /images/supporter-chie.jpg）も許容
    const rootMatch = files.find((f) => !/\/gallery\//i.test(f) && baseName(f) === target);
    if (rootMatch) return rootMatch;
  }
  return null;
}

/** @param {string[]} files */
function buildSupporterById(files) {
  /** @type {Record<string, string | null>} */
  const supporterById = {};

  for (const [id, slug] of Object.entries(SUPPORTER_IMAGE_SLUG)) {
    const slugs = SUPPORTER_SLUG_ALIASES[id] ?? [slug];
    supporterById[id] = findSupporterPath(files, slugs);
  }

  return supporterById;
}

/** @param {string[]} files */
function buildManifest(files) {
  const used = new Set();
  const supporterById = buildSupporterById(files);
  for (const path of Object.values(supporterById)) {
    if (path) used.add(path);
  }

  /** @type {Record<string, string | null>} */
  const slots = {};

  const assign = (key, candidates, options) => {
    slots[key] = pick(files, candidates, used, options);
  };

  slots.icon = pickMiracoiIcon(files);
  if (slots.icon) used.add(slots.icon);

  assign("hero", ["hero", /^hero-/]);
  assign("story", ["story", /^story-/]);
  assign("storyLearning", ["sewing-workshop", "sewing_workshop"]);
  assign("ctaBg", ["cta-bg", "cta", "cta_bg"]);
  assign("og", ["og-image", "og", "og_image"]);
  assign("memberRena", ["member-rena", "member_rena", "rena", "ozaki", "ozaki-rena", "rena-ozaki"]);
  assign("memberMomoe", ["member-momoe", "member_momoe", "momoe", "yasunaga", "hoyo", "hoyo_mm3"]);

  for (const [tab, candidates] of Object.entries(PROJECT_TAB_CANDIDATES)) {
    if (tab === "goals") continue;
    assign(`projectTab:${tab}`, candidates);
  }

  assign("project1", ["project1", "project-1", "why-mozambique"], { allowUsed: true });
  assign("project2", ["project2", "project-2", "why-yosakoi"], { allowUsed: true });

  /** @type {(string | null)[]} — gallery1〜4（活動の記録） */
  const gallery = [];
  for (let i = 1; i <= GALLERY_COUNT; i++) {
    const found = findGalleryFile(files, i, used);
    gallery.push(found);
    if (found) used.add(found);
  }

  /** projectTab 用 gallery5〜8 — gallery/ または project/ から再取得 */
  for (const [tab, candidates] of Object.entries(PROJECT_TAB_CANDIDATES)) {
    const galleryMatch = candidates.find((c) => typeof c === "string" && /^gallery\d+$/.test(c));
    if (galleryMatch) {
      const index = Number.parseInt(galleryMatch.replace("gallery", ""), 10);
      const found = findGalleryFile(files, index, used);
      if (found) {
        slots[`projectTab:${tab}`] = found;
        used.add(found);
      }
    }
  }

  /** @type {Record<string, string | null>} */
  const returnSlots = {};
  for (const amount of RETURN_AMOUNTS) {
    returnSlots[String(amount)] = pick(
      files,
      [`return-${amount}`, `return_${amount}`, `return${amount}`, `tier-${amount}`, `tier_${amount}`],
      used,
    );
  }

  /** @type {(string | null)[]} — レガシー（未使用） */
  const supporters = [];

  const remaining = files.filter((f) => !used.has(f) && !isReturnFile(f) && !isSupporterFile(f) && !isReservedFile(f));

  for (const file of remaining) {
    const b = baseName(file);
    if (/hero|top|main|cover|kv/.test(b) && !slots.hero) {
      slots.hero = file;
      used.add(file);
      continue;
    }
    if (/story|promise|origin/.test(b) && !slots.story) {
      slots.story = file;
      used.add(file);
      continue;
    }
    if (/rena|ozaki/.test(b) && !slots.memberRena) {
      slots.memberRena = file;
      used.add(file);
      continue;
    }
    if (/momoe|yasunaga|hoyo/.test(b) && !slots.memberMomoe) {
      slots.memberMomoe = file;
      used.add(file);
      continue;
    }
  }

  if (!slots.hero) {
    const firstGallery = gallery.find(Boolean);
    if (firstGallery) slots.hero = firstGallery;
  }

  /** project-vision — 「このプロジェクトで実現したいこと」(goals) 専用 */
  const projectVision = files.find((f) => baseName(f) === "project-vision");
  if (projectVision) {
    slots["projectTab:goals"] = projectVision;
    used.add(projectVision);
  }

  return {
    generatedAt: new Date().toISOString(),
    files,
    slots,
    gallery: gallery.filter(Boolean),
    gallerySlots: gallery,
    returnSlots,
    supporterById,
    supporters: Object.values(supporterById).filter(Boolean),
    supporterSlots: [],
  };
}

const files = walkImages(IMAGES_ROOT);
const manifest = buildManifest(files);

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`[images] ${files.length} file(s) → ${OUT}`);
