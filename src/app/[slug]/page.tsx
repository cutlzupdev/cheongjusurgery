import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { extractLinksFromContent, type ArticleSource } from "@/lib/api";
import "../prose.css";

type ApiPost = {
  _id: string;
  title: string;
  slug?: string;
  description?: string;
  content: string;
  author: string;
  authorTitle?: string;
  site: string;
  publishedAt?: string;
  createdAt?: string;
  hashtags?: string[];
  sources?: ArticleSource[] | null;
  status: "draft" | "published";
};

async function fetchPost(slug: string): Promise<ApiPost | null> {
  const base = process.env.VITE_HOME_SERVER_BASE_URL;
  const siteKey = process.env.VITE_SITE_KEY ?? "winwin";
  if (!base) return null;
  try {
    const res = await fetch(`${base}/api/public/news/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { success: boolean; data?: ApiPost };
    if (!json.success || !json.data) return null;
    const item = json.data;
    const allowed = item.site === siteKey || item.site === "common";
    if (item.status !== "published" || !allowed) return null;
    return item;
  } catch {
    return null;
  }
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) return {};
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  const postSlug = post.slug ?? post._id;
  const description =
    post.description?.trim() ||
    post.content.replace(/[#*_>`]/g, "").replace(/\n+/g, " ").trim().slice(0, 160);
  return {
    title: { absolute: `${post.title} — 윈윈정형외과` },
    description,
    alternates: { canonical: `/${postSlug}` },
    openGraph: {
      title: post.title,
      description,
      url: `${siteUrl}/${postSlug}`,
      type: "article",
      publishedTime: post.publishedAt ?? post.createdAt,
    },
  };
}

function formatDate(value?: string): string {
  if (!value) return "";
  const d = new Date(value);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Seoul",
  });
}

function normalizeMarkdownStrong(content: string): string {
  return content.replace(/\*\*[ \t]+(?=\S)/g, "**");
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  const postSlug = post.slug ?? post._id;
  const date = formatDate(post.publishedAt ?? post.createdAt);

  const resolvedSources: ArticleSource[] =
    post.sources && post.sources.length > 0
      ? post.sources
      : extractLinksFromContent(post.content);

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}/${postSlug}`,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt ?? post.createdAt,
    dateModified: post.publishedAt ?? post.createdAt,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "MedicalOrganization",
      "@id": `${siteUrl}/`,
      name: "윈윈정형외과 수술재활센터",
    },
    inLanguage: "ko-KR",
  };

  if (resolvedSources.length > 0) {
    articleSchema.isBasedOn = resolvedSources
      .filter((s) => s.name || s.url)
      .map((s) => ({
        "@type": s.type || "WebSite",
        name: s.name,
        ...(s.url && { url: s.url }),
      }));
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <nav
            className="flex items-center gap-2 text-sm text-win-text-gray mb-6"
            aria-label="breadcrumb"
          >
            <Link href="/" className="hover:text-win-navy">홈</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-win-navy">소식</Link>
            <span>/</span>
            <span className="text-win-navy font-semibold line-clamp-1">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            {post.hashtags?.[0] && (
              <span className="badge bg-win-sky-light text-win-sky">
                {post.hashtags[0]}
              </span>
            )}
            {date && (
              <time dateTime={post.publishedAt ?? post.createdAt} className="text-sm text-win-text-gray">
                {date}
              </time>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-win-text-dark leading-tight mb-8">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-win-text-dark prose-a:text-win-sky prose-strong:text-win-text-dark geo-speakable">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {normalizeMarkdownStrong(post.content)}
            </ReactMarkdown>
          </div>

          <div className="mt-12 p-8 bg-win-bg rounded-2xl border border-blue-100 text-center">
            <h3 className="text-xl font-black text-win-text-dark mb-3">
              전문의 상담이 필요하신가요?
            </h3>
            <p className="text-win-text-gray font-medium mb-6">
              정확한 진단이 빠른 치료의 시작입니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://map.naver.com/p/entry/place/1475298812"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-win-navy hover:bg-win-navy-hover text-white px-8 py-3 rounded-full font-bold transition-colors shadow-win"
              >
                <i className="ph-bold ph-calendar-check mr-2" /> 진료 예약
              </Link>
              <a
                href="tel:+82437157591"
                className="bg-white border-2 border-win-sky text-win-navy px-8 py-3 rounded-full font-bold"
              >
                <i className="ph-bold ph-phone mr-2" /> 043-715-7591
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
