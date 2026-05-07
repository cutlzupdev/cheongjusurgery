import { conditions } from "@/lib/conditions";
import { newsArticles } from "@/lib/news";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type ServerPost = {
  _id: string;
  title: string;
  slug?: string;
  description?: string;
  content: string;
  author: string;
  publishedAt?: string;
  createdAt?: string;
  hashtags?: string[];
};

async function fetchServerNews(baseUrl: string): Promise<string[]> {
  const apiBase = process.env.VITE_HOME_SERVER_BASE_URL;
  const siteKey = process.env.VITE_SITE_KEY ?? "winwin";
  if (!apiBase) return [];
  try {
    const res = await fetch(
      `${apiBase}/api/public/news?site=${siteKey}&page=1&limit=30`,
      { cache: "no-store" },
    );
    if (!res.ok) return [];
    const json = (await res.json()) as {
      success: boolean;
      data?: { items?: ServerPost[] };
    };
    if (!json.success || !json.data?.items) return [];
    return json.data.items.map((p) => {
      const slug = p.slug ?? p._id;
      const desc =
        p.description?.trim() ||
        p.content.replace(/[#*_>`\[\]]/g, "").replace(/\n+/g, " ").trim().slice(0, 200);
      const pubDate = p.publishedAt ?? p.createdAt;
      const category = p.hashtags?.[0] ?? "소식";
      return `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${baseUrl}/${slug}</link>
      <guid isPermaLink="true">${baseUrl}/${slug}</guid>
      <description><![CDATA[${desc}]]></description>
${pubDate ? `      <pubDate>${new Date(pubDate).toUTCString()}</pubDate>` : ""}
      <category>${category}</category>
      <author>${p.author}</author>
    </item>`;
    });
  } catch {
    return [];
  }
}

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://winwinosc.com";

  const staticNewsItems = newsArticles.map(
    (a) => `    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${baseUrl}${a.canonicalPath}</link>
      <guid isPermaLink="true">${baseUrl}${a.canonicalPath}</guid>
      <description><![CDATA[${a.metaDescription}]]></description>
      <pubDate>${new Date(a.datePublished).toUTCString()}</pubDate>
      <category>${a.category}</category>
      <author>윈윈정형외과</author>
    </item>`,
  );

  const conditionItems = conditions.map(
    (c) => `    <item>
      <title><![CDATA[${c.metaTitle}]]></title>
      <link>${baseUrl}${c.canonicalPath}</link>
      <guid isPermaLink="true">${baseUrl}${c.canonicalPath}</guid>
      <description><![CDATA[${c.metaDescription}]]></description>
      <pubDate>${new Date(c.datePublished).toUTCString()}</pubDate>
      <category>${c.categoryLabel}</category>
      <author>윈윈정형외과</author>
    </item>`,
  );

  const serverNewsItems = await fetchServerNews(baseUrl);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>윈윈정형외과 수술재활센터</title>
    <link>${baseUrl}</link>
    <description>청주 윈윈정형외과 — K리그·KLPGA 공식 주치의. 스포츠 재활·족부 특화·관절·척추 수술 전문. 질환 정보와 병원 소식을 전합니다.</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://cdn.imweb.me/upload/S202508114593b3da74fc0/bdf658caa85f4.png</url>
      <title>윈윈정형외과 수술재활센터</title>
      <link>${baseUrl}</link>
    </image>
${serverNewsItems.join("\n")}
${staticNewsItems.join("\n")}
${conditionItems.join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
