import { fetchSiteConfig } from "@/lib/api";

export async function GET() {
  const config = await fetchSiteConfig();
  const key = config?.indexNowKey ?? "";

  if (!key) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(key, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
