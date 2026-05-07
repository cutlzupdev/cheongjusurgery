import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";
import { getCondition, getConditionsByCategory } from "@/lib/conditions";
import { getDoctorById, getDoctorJsonLd } from "@/lib/doctors";
import {
  getBreadcrumbJsonLd,
  getMedicalConditionJsonLd,
  getFaqJsonLd,
  getArticleJsonLd,
} from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getConditionsByCategory("knee").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = getCondition("knee", slug);
  if (!condition) return {};
  return {
    title: { absolute: condition.metaTitle },
    description: condition.metaDescription,
    keywords: condition.keywords,
    alternates: { canonical: condition.canonicalPath },
    openGraph: {
      title: { absolute: condition.metaTitle },
      description: condition.metaDescription,
      url: `https://winwinosc.com${condition.canonicalPath}`,
      type: "article",
    },
  };
}

export default async function KneeConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = getCondition("knee", slug);
  if (!condition) notFound();

  const doctor = getDoctorById(condition.doctorId);
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "홈", url: "https://winwinosc.com/" },
    { name: condition.categoryLabel, url: `https://winwinosc.com/${condition.category}` },
    { name: condition.titleShort, url: `https://winwinosc.com${condition.canonicalPath}` },
  ]);
  const medicalCondition = getMedicalConditionJsonLd(condition.medicalCondition);
  const faq = getFaqJsonLd(condition.faqs);
  const article = getArticleJsonLd({
    headline: condition.metaTitle,
    description: condition.metaDescription,
    url: `https://winwinosc.com${condition.canonicalPath}`,
    datePublished: condition.datePublished,
    dateModified: condition.dateModified,
    authorDoctorId: condition.doctorId,
    section: condition.categoryLabel,
  });
  const doctorSchema = doctor ? getDoctorJsonLd(doctor) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalCondition) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      {doctorSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }} />}
      <ConditionPage condition={condition} />
    </>
  );
}
