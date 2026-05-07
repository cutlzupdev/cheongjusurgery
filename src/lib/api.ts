const base = () => process.env.VITE_HOME_SERVER_BASE_URL ?? "";
const siteKey = () => process.env.VITE_SITE_KEY ?? "winwin";

export type ArticleSource = { type: string; name: string; url: string };

export function extractLinksFromContent(
  content: string,
  maxLinks = 2,
): ArticleSource[] {
  const found: { index: number; url: string; name: string }[] = [];

  const htmlRe = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m: RegExpExecArray | null;
  while ((m = htmlRe.exec(content)) !== null) {
    const url = m[1];
    if (/^https?:\/\//.test(url)) {
      const name = m[2].replace(/<[^>]+>/g, "").trim() || url;
      found.push({ index: m.index, url, name });
    }
  }

  const mdRe = /(?<!!)\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  while ((m = mdRe.exec(content)) !== null) {
    found.push({ index: m.index, url: m[2], name: m[1].trim() || m[2] });
  }

  const bareRe = /(?<![("'=])(https?:\/\/[^\s<>"')\]]+)/g;
  while ((m = bareRe.exec(content)) !== null) {
    found.push({ index: m.index, url: m[1], name: m[1] });
  }

  found.sort((a, b) => a.index - b.index);
  const seen = new Set<string>();
  const last: ArticleSource[] = [];
  for (let i = found.length - 1; i >= 0 && last.length < maxLinks; i--) {
    if (!seen.has(found[i].url)) {
      seen.add(found[i].url);
      last.unshift({ type: "WebSite", name: found[i].name, url: found[i].url });
    }
  }
  return last;
}

export type SiteConfig = {
  indexNowKey: string;
};

export async function fetchSiteConfig(): Promise<SiteConfig | null> {
  const b = base();
  if (!b) return null;

  try {
    const res = await fetch(`${b}/api/public/site-config?site=${siteKey()}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;

    const json = (await res.json()) as {
      success: boolean;
      data?: { indexNowKey?: string } | null;
    };
    if (!json.success || !json.data) return null;

    return {
      indexNowKey: json.data.indexNowKey ?? "",
    };
  } catch {
    return null;
  }
}
