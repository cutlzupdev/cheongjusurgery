import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getNewsArticle, getAllNewsSlugs } from "@/lib/news";
import { getDoctorById, getDoctorJsonLd } from "@/lib/doctors";
import { getBreadcrumbJsonLd, getArticleJsonLd } from "@/lib/schema";
import "../../prose.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return {};
  return {
    title: { absolute: article.metaTitle },
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: article.canonicalPath },
    robots: { index: true, follow: true },
    openGraph: {
      title: { absolute: article.metaTitle },
      description: article.metaDescription,
      url: `https://winwinosc.com${article.canonicalPath}`,
      type: "article",
      images: article.image ? [{ url: article.image }] : undefined,
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) notFound();

  const doctor = getDoctorById(article.authorDoctorId);
  const doctorSchema = doctor ? getDoctorJsonLd(doctor) : null;

  const breadcrumb = getBreadcrumbJsonLd([
    { name: "홈", url: "https://winwinosc.com/" },
    { name: "소식", url: "https://winwinosc.com/news" },
    { name: article.title, url: `https://winwinosc.com${article.canonicalPath}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": ["Article", "MedicalWebPage"],
    "@id": `https://winwinosc.com${article.canonicalPath}`,
    headline: article.title,
    description: article.metaDescription,
    about: {
      "@type": "MedicalCondition",
      name: article.category,
    },
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: "ko-KR",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://winwinosc.com/#website",
    },
    publisher: {
      "@type": "MedicalOrganization",
      "@id": "https://winwinosc.com/",
      name: "윈윈정형외과 수술재활센터",
    },
    author: doctor
      ? {
          "@type": "Physician",
          "@id": `https://winwinosc.com/about/doctors/${doctor.id}`,
          name: doctor.name,
          jobTitle: `${doctor.specialty} ${doctor.title}`,
          image: doctor.image,
          sameAs: doctor.sameAs,
          worksFor: {
            "@type": "MedicalOrganization",
            "@id": "https://winwinosc.com/",
          },
        }
      : undefined,
    mainEntityOfPage: `https://winwinosc.com${article.canonicalPath}`,
    articleSection: article.category,
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".geo-speakable"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {doctorSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
        />
      )}

      <article className="pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-win-text-gray mb-6"
            aria-label="breadcrumb"
          >
            <Link href="/" className="hover:text-win-navy">
              홈
            </Link>
            <span>/</span>
            <span className="text-win-navy font-semibold">소식</span>
          </nav>

          {/* Category + Date */}
          <div className="flex items-center gap-3 mb-4">
            <span className="badge bg-win-sky-light text-win-sky">
              {article.category}
            </span>
            <time
              dateTime={article.datePublished}
              className="text-sm text-win-text-gray"
            >
              {article.datePublished}
            </time>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-win-text-dark leading-tight mb-6">
            {article.title}
          </h1>

          {/* Author */}
          {doctor && (
            <div className="flex items-center gap-4 mb-8 p-4 bg-win-bg rounded-2xl border border-blue-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-win overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={doctor.image}
                  alt={`${doctor.name} ${doctor.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-win-text-dark">
                  {doctor.name} {doctor.title}
                </p>
                <p className="text-sm text-win-text-gray">{doctor.specialty}</p>
              </div>
            </div>
          )}

          {/* Hero Image */}
          {article.image && (
            <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-win mb-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, i) => (
              <p
                key={i}
                className={`text-lg text-gray-700 font-medium leading-relaxed mb-6 ${
                  i === 0 ? "geo-speakable" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
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
