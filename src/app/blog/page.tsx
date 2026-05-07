import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "소식 — 윈윈정형외과",
  description: "윈윈정형외과의 최신 소식과 의료 정보를 확인하세요.",
  alternates: { canonical: "/blog" },
};

type ApiPost = {
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

async function fetchPosts(): Promise<ApiPost[]> {
  const base = process.env.VITE_HOME_SERVER_BASE_URL;
  const siteKey = process.env.VITE_SITE_KEY ?? "winwin";
  if (!base) return [];
  try {
    const res = await fetch(
      `${base}/api/public/news?site=${siteKey}&page=1&limit=20`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) return [];
    const json = (await res.json()) as {
      success: boolean;
      data?: { items?: ApiPost[] };
    };
    return json.success && json.data?.items ? json.data.items : [];
  } catch {
    return [];
  }
}

function formatDate(value?: string): string {
  if (!value) return "";
  const d = new Date(value);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
}

function excerpt(post: ApiPost): string {
  return (
    post.description?.trim() ||
    post.content
      .replace(/[#*_>`\[\]]/g, "")
      .replace(/\n+/g, " ")
      .trim()
      .slice(0, 120)
  );
}

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <main className="pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-win-text-dark mb-2">소식</h1>
        <p className="text-win-text-gray font-medium mb-10">
          윈윈정형외과의 최신 소식과 의료 정보
        </p>

        {posts.length === 0 ? (
          <p className="text-win-text-gray text-center py-20">
            등록된 소식이 없습니다.
          </p>
        ) : (
          <ul className="flex flex-col gap-6">
            {posts.map((post) => {
              const slug = post.slug ?? post._id;
              const date = formatDate(post.publishedAt ?? post.createdAt);
              return (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    className="block p-6 rounded-2xl bg-win-bg border border-blue-100 hover:border-win-sky transition-colors shadow-win"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {post.hashtags?.[0] && (
                        <span className="badge bg-win-sky-light text-win-sky text-xs">
                          {post.hashtags[0]}
                        </span>
                      )}
                      {date && (
                        <time className="text-sm text-win-text-gray">{date}</time>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-win-text-dark mb-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-win-text-gray font-medium text-sm line-clamp-2">
                      {excerpt(post)}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
