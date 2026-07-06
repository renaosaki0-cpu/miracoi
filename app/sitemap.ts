import type { MetadataRoute } from "next";

const BASE_URL = "https://miracoi.vercel.app";

type SitemapEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const PAGES: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/project", changeFrequency: "weekly", priority: 0.9 },
  { path: "/story", changeFrequency: "monthly", priority: 0.8 },
  { path: "/support", changeFrequency: "weekly", priority: 0.8 },
  { path: "/returns", changeFrequency: "weekly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGES.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
