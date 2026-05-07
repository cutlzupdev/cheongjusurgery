import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { doctors, getDoctorById, getDoctorJsonLd } from "@/lib/doctors";
import { getBreadcrumbJsonLd } from "@/lib/schema";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return doctors.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const doctor = getDoctorById(id);
  if (!doctor) return {};
  return {
    title: { absolute: `${doctor.name} ${doctor.title} — ${doctor.specialty} | 윈윈정형외과` },
    description: doctor.description,
    alternates: { canonical: `/about/doctors/${doctor.id}` },
    openGraph: {
      title: `${doctor.name} ${doctor.title} — ${doctor.specialty}`,
      description: doctor.description,
      url: `https://winwinosc.com/about/doctors/${doctor.id}`,
      type: "profile",
      images: [{ url: doctor.image }],
    },
  };
}

export default async function DoctorDetailPage({ params }: Props) {
  const { id } = await params;
  const doctor = getDoctorById(id);
  if (!doctor) notFound();

  const breadcrumb = getBreadcrumbJsonLd([
    { name: "홈", url: "https://winwinosc.com/" },
    { name: "의료진", url: "https://winwinosc.com/about/doctors" },
    { name: `${doctor.name} ${doctor.title}`, url: `https://winwinosc.com/about/doctors/${doctor.id}` },
  ]);
  const doctorSchema = getDoctorJsonLd(doctor);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }} />

      <article className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-win-text-gray mb-8" aria-label="breadcrumb">
            <Link href="/" className="hover:text-win-navy">홈</Link>
            <span>/</span>
            <span>의료진</span>
            <span>/</span>
            <span className="text-win-navy font-semibold">{doctor.name} {doctor.title}</span>
          </nav>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-win overflow-hidden shrink-0 shadow-sky">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={doctor.image} alt={`${doctor.name} ${doctor.title}`} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-3xl md:text-4xl font-black text-win-text-dark">{doctor.name}</h1>
                <span className="badge bg-win-navy text-white text-sm">{doctor.title}</span>
              </div>
              <p className="text-xl text-win-sky font-bold mb-4">{doctor.specialty}</p>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">{doctor.description}</p>

              {/* Credentials */}
              <ul className="space-y-2">
                {doctor.credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm font-medium text-win-text-dark">
                    <i className="ph-bold ph-check-circle text-win-sky mt-0.5" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            {doctor.education && doctor.education.length > 0 && (
              <div className="bento-card p-7 border border-blue-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center">
                    <i className="ph-bold ph-graduation-cap text-xl" />
                  </div>
                  <h2 className="text-lg font-black text-win-text-dark">학력</h2>
                </div>
                <ul className="space-y-3">
                  {doctor.education.map((edu) => (
                    <li key={edu} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                      <i className="ph-bold ph-dot-outline text-win-sky mt-0.5 shrink-0" /> {edu}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Career */}
            {doctor.career && doctor.career.length > 0 && (
              <div className="bento-card p-7 border border-blue-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center">
                    <i className="ph-bold ph-briefcase text-xl" />
                  </div>
                  <h2 className="text-lg font-black text-win-text-dark">경력</h2>
                </div>
                <ul className="space-y-3">
                  {doctor.career.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                      <i className="ph-bold ph-dot-outline text-win-sky mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Publications */}
            {doctor.publications && doctor.publications.length > 0 && (
              <div className="bento-card p-7 border border-blue-100 md:col-span-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                    <i className="ph-bold ph-article text-xl" />
                  </div>
                  <h2 className="text-lg font-black text-win-text-dark">논문 및 연구</h2>
                </div>
                <ul className="space-y-4">
                  {doctor.publications.map((pub) => (
                    <li key={pub.url} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <i className="ph-bold ph-file-text text-purple-500 mt-0.5 text-lg shrink-0" />
                      <div>
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-win-text-dark text-sm hover:text-win-navy transition-colors"
                        >
                          {pub.title}
                        </a>
                        <p className="text-xs text-gray-500 mt-1">
                          PubMed &middot;{" "}
                          <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                            원문 보기
                          </a>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Activities */}
            {doctor.activities && doctor.activities.length > 0 && (
              <div className="bento-card p-7 border border-blue-100 md:col-span-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                    <i className="ph-bold ph-trophy text-xl" />
                  </div>
                  <h2 className="text-lg font-black text-win-text-dark">학회 / 주요 활동</h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {doctor.activities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                      <i className="ph-bold ph-dot-outline text-orange-500 mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-black text-win-text-dark mb-4">
              {doctor.name} {doctor.title}에게 직접 상담받으세요
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://map.naver.com/p/entry/place/1475298812"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-win-navy hover:bg-win-navy-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-colors shadow-win"
              >
                <i className="ph-bold ph-calendar-check mr-2" /> 진료 예약하기
              </Link>
              <a
                href="tel:+82437157591"
                className="bg-white border-2 border-win-sky text-win-navy px-10 py-4 rounded-full font-bold text-lg"
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
