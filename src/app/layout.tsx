import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getOrganizationJsonLd,
  getWebSiteJsonLd,
  getFounderPersonJsonLd,
} from "@/lib/schema";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.subset.woff2",
  display: "swap",
  variable: "--font-pretendard",
  weight: "100 900",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Apple SD Gothic Neo",
    "Malgun Gothic",
    "Noto Sans KR",
    "sans-serif",
  ],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: "윈윈정형외과 | 수술센터, 스포츠 재활 관절·척추 수술 전문",
    template: "%s — 윈윈정형외과",
  },
  description:
    "청주 윈윈정형외과는 K리그·KLPGA·핸드볼 H리그 공식 주치의 병원으로, 스포츠 재활·족부 특화·관절·척추 비수술·수술을 전문으로 합니다. 프로 선수부터 생활 스포츠인까지 수술·재활 원스톱.",
  keywords:
    "윈윈정형외과, 청주정형외과, 무릎연골손상, 십자인대손상, 퇴행성관절염, 골절, 회전근개파열, 관절염, 충돌증후군, 오십견, 석회성건염, 힘줄파열, 테니스엘보, 골프엘보, 물혹, 터널증후군, 박리성골연골염, 결절종, 거북목, 목디스크, 방사통, 근막통증, 협착증, 허리디스크, 요통, 척추, 류마티스, 통풍, 무지외반증, 족저근막염, 지간신경종, 지방층증후군, 편평족, 부주상골, 아킬레스건염, 발목인대파열, 단지증, 내향성발톱, 족부특화클리닉, 수술센터, 스포츠재활, 운동센터, 선수치료, 비수술치료",
  authors: [{ name: "윈윈정형외과" }],
  applicationName: "청주 윈윈정형외과",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    siteName: "윈윈정형외과",
    type: "website",
    url: "https://winwinosc.com/",
    locale: "ko_KR",
    title: "윈윈정형외과 | 수술센터, 스포츠 재활 관절·척추 수술 전문",
    description:
      "청주 윈윈정형외과는 K리그·KLPGA·핸드볼 H리그 공식 주치의 병원으로, 스포츠 재활·족부 특화·관절·척추 비수술·수술을 전문으로 합니다.",
    images: [
      {
        url: "https://cdn.imweb.me/upload/S202508114593b3da74fc0/bdf658caa85f4.png",
        width: 1200,
        height: 627,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "윈윈정형외과 | 수술센터, 스포츠 재활 관절·척추 수술 전문",
    description:
      "청주 윈윈정형외과 — K리그·KLPGA 공식 주치의. 스포츠 재활·족부 특화·관절·척추 수술 전문.",
    images: ["https://cdn.imweb.me/upload/S202508114593b3da74fc0/bdf658caa85f4.png"],
  },
  icons: {
    icon: [
      { url: "https://cdn.imweb.me/thumbnail/20250811/e4fb8b9aab2d6.png", sizes: "196x196", type: "image/png" },
    ],
    apple: [
      { url: "https://cdn.imweb.me/thumbnail/20250811/8d83986bf6131.png", sizes: "152x152" },
    ],
  },
  metadataBase: new URL("https://winwinosc.com"),
  alternates: {
    canonical: "/",
  },
  other: {
    "msvalidate.01": "",
    "nate:title": "윈윈정형외과 | 수술센터, 스포츠 재활 관절·척추 수술 전문",
    "nate:site_name": "윈윈정형외과",
    "nate:description": "청주 윈윈정형외과 — K리그·KLPGA 공식 주치의. 스포츠 재활·족부 특화·관절·척추 수술 전문.",
    "nate:keywords": "윈윈정형외과, 청주정형외과, 무릎연골손상, 십자인대손상, 퇴행성관절염, 골절, 회전근개파열, 족부특화클리닉, 스포츠재활, 선수치료",
    "msapplication-TileImage": "https://cdn.imweb.me/thumbnail/20250811/c15b0d2978168.png",
    "msapplication-square310x310logo": "https://cdn.imweb.me/thumbnail/20250811/118b0876d76ff.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = getOrganizationJsonLd();
  const webJsonLd = getWebSiteJsonLd();
  const founderJsonLd = getFounderPersonJsonLd();

  return (
    <html lang="ko" className={`scroll-smooth ${pretendard.variable}`}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="윈윈정형외과 수술재활센터"
          href="/rss.xml"
        />
        <link rel="preconnect" href="https://storage.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.imweb.me" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Phosphor-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Phosphor-Fill.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webJsonLd) }}
        />
        {founderJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }}
          />
        )}
      </head>
      <body className={`${pretendard.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-YHESTVY9YZ" />
    </html>
  );
}
