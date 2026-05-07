import type { MetadataRoute } from "next";
import { conditions } from "@/lib/conditions";
import { newsArticles } from "@/lib/news";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type ServerPost = {
  slug?: string;
  _id: string;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
};

async function fetchServerNewsSlugs(): Promise<ServerPost[]> {
  const base = process.env.VITE_HOME_SERVER_BASE_URL;
  const siteKey = process.env.VITE_SITE_KEY ?? "winwin";
  if (!base) return [];
  try {
    const res = await fetch(
      `${base}/api/public/news?site=${siteKey}&page=1&limit=100`,
      { cache: "no-store" },
    );
    if (!res.ok) return [];
    const json = (await res.json()) as {
      success: boolean;
      data?: { items?: ServerPost[] };
    };
    return json.success && json.data?.items ? json.data.items : [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://winwinosc.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date("2026-04-10"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/sports-rehab/surgery-center`, lastModified: new Date("2026-04-10"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/sports-rehab/pro-team`, lastModified: new Date("2026-04-10"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/sports-rehab/prp-iv`, lastModified: new Date("2026-04-10"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/sports-rehab/rehabilitation`, lastModified: new Date("2026-04-10"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about/clinic`, lastModified: new Date("2026-04-10"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about/doctors`, lastModified: new Date("2026-04-10"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
  ];

  const conditionPages: MetadataRoute.Sitemap = conditions.map((c) => ({
    url: `${baseUrl}${c.canonicalPath}`,
    lastModified: new Date(c.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticNewsPages: MetadataRoute.Sitemap = newsArticles.map((a) => ({
    url: `${baseUrl}${a.canonicalPath}`,
    lastModified: new Date(a.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const serverPosts = await fetchServerNewsSlugs();
  const serverNewsPages: MetadataRoute.Sitemap = serverPosts.map((p) => ({
    url: `${baseUrl}/${p.slug ?? p._id}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt ?? p.createdAt ?? Date.now()),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...conditionPages, ...staticNewsPages, ...serverNewsPages];
}
