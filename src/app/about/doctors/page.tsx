import type { Metadata } from "next";
import Link from "next/link";
import { doctors } from "@/lib/doctors";
import { getBreadcrumbJsonLd } from "@/lib/schema";

const BASE = "https://winwinosc.com";

export const metadata: Metadata = {
  title: { absolute: "청주 윈윈정형외과 의료진 소개 — 족부·무릎·어깨·척추 전문의" },
  description:
    "청주 윈윈정형외과 수술재활센터 의료진 소개. 족부·발목 전문의 박은수, 무릎·어깨 스포츠 전문의 곽규완, 척추·통증 전문의 김민경. 전문의가 직접 집도합니다.",
  keywords: "윈윈정형외과 의사, 청주 정형외과 전문의, 박은수 원장, 곽규완 원장, 김민경 원장",
  alternates: { canonical: "/about/doctors" },
  openGraph: {
    title: "청주 윈윈정형외과 의료진 소개 — 족부·무릎·어깨·척추 전문의",
    description: "청주 윈윈정형외과 수술재활센터 의료진 소개. 족부·발목·무릎·어깨·척추 전문의 3인이 직접 집도합니다.",
    url: `${BASE}/about/doctors`,
    type: "website",
  },
};

export default function DoctorsListPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "홈", url: `${BASE}/` },
    { name: "병원·의료진", url: `${BASE}/about` },
    { name: "의료진 소개", url: `${BASE}/about/doctors` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* HERO */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-win-bg">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-win-text-gray mb-6" aria-label="breadcrumb">
            <Link href="/" className="hover:text-win-navy">홈</Link>
            <span>/</span>
            <span>병원·의료진</span>
            <span>/</span>
            <span className="text-win-navy font-semibold">의료진 소개</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="badge bg-win-navy text-white"><i className="ph-bold ph-stethoscope" aria-hidden="true" /> 수술 전문의</span>
            <span className="badge bg-win-sky-light text-win-sky"><i className="ph-bold ph-heartbeat" aria-hidden="true" /> 비수술·재활 전담</span>
            <span className="badge bg-yellow-50 text-yellow-700"><i className="ph-bold ph-trophy" aria-hidden="true" /> 팀닥터 경험</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-win-text-dark mb-5">
            청주 윈윈정형외과 의료진
            <br /><span className="text-gradient">수술·비수술·재활 전문 3인 체제</span>
          </h1>
          <p className="text-xl text-win-text-gray font-medium leading-relaxed mb-8">
            수술이 필요한 환자, 비수술 치료를 원하는 환자, 재활이 필요한 환자 — 각 단계를 전담하는 원장이 따로 있습니다.
            처음부터 끝까지 담당 원장이 직접 관리합니다.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-10">
            {[
              { value: "3인", label: "협진 의료진", color: "text-win-navy" },
              { value: "BMAC", label: "관절경으로 치료 : 국내 극소수 집도", color: "text-win-sky" },
              { value: "팀닥터", label: "K리그·H리그·KLPGA", color: "text-win-navy" },
            ].map((s) => (
              <div key={s.label} className="bento-card p-5 text-center border border-blue-50">
                <p className={`text-2xl md:text-3xl font-black ${s.color} mb-1`}>{s.value}</p>
                <p className="text-xs text-win-text-gray font-medium">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://map.naver.com/p/entry/place/1475298812"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-win-navy text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 shadow-win hover:opacity-90 transition-opacity"
            >
              <i className="ph-bold ph-calendar-check" aria-hidden="true" /> 진료 예약하기
            </a>
            <a
              href="tel:+82437157591"
              className="border-2 border-win-sky text-win-sky px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-win-sky-light transition-colors"
            >
              <i className="ph-bold ph-phone" aria-hidden="true" /> 043-715-7591
            </a>
          </div>
        </div>
      </section>

      {/* 어떤 원장에게 가야 할까? */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-3">어떤 원장에게 가야 할까?</h2>
          <p className="text-win-text-gray mb-10">진료 목적에 맞는 원장을 안내해 드립니다.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "ph-scissors", color: "text-win-navy", border: "border-win-navy", title: "수술이 필요하다는 진단을 받았다", to: "박은수 원장", sub: "무지외반 변형, 스포츠 손상, 골절, 인대 파열 전담 수술" },
              { icon: "ph-drop", color: "text-win-sky", border: "border-win-sky", title: "수술 없이 주사·재활로 치료하고 싶다", to: "곽규완·김민경 원장", sub: "PRP·재생주사·ESWT·재활치료 처방 전담" },
              { icon: "ph-person-simple-run", color: "text-win-navy", border: "border-win-navy", title: "스포츠 재활·컨디셔닝 프로그램이 필요하다", to: "세 원장 모두 가능", sub: "종목·복귀 목표에 맞는 원장이 담당" },
              { icon: "ph-activity", color: "text-purple-500", border: "border-purple-400", title: "만성통증·척추 비수술 치료가 필요하다", to: "곽규완·김민경 원장", sub: "SNRB·MBB 척추 비수술, 만성통증 관리 전담" },
              { icon: "ph-pill", color: "text-orange-500", border: "border-orange-400", title: "류마티스·통풍을 비수술로 관리하고 싶다", to: "박은수·곽규완·김민경 원장 모두", sub: "내과적 관리와 정형외과 치료 병행" },
              { icon: "ph-arrows-counter-clockwise", color: "text-green-500", border: "border-green-400", title: "수술 후 재활이 필요하다", to: "박은수·곽규완·김민경 원장 모두", sub: "모든 의료진이 진행 상황을 공유하며 관리" },
            ].map((item) => (
              <div key={item.title} className={`bento-card p-6 flex items-start gap-4 border-l-4 ${item.border}`}>
                <i className={`ph-bold ${item.icon} ${item.color} text-2xl shrink-0 mt-0.5`} aria-hidden="true" />
                <div>
                  <p className="font-bold text-win-text-dark mb-1">{item.title}</p>
                  <p className="text-sm text-win-text-gray mb-2">→ <strong>{item.to}</strong></p>
                  <p className="text-xs text-win-text-gray">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 의료진 목록 */}
      <section className="py-10 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto space-y-8">
          {doctors.map((doctor) => (
            <Link
              key={doctor.id}
              href={`/about/doctors/${doctor.id}`}
              className="bento-card p-8 flex flex-col md:flex-row gap-8 hover:shadow-win-hover transition-all block"
            >
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden bg-gradient-win shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={doctor.image} alt={`${doctor.name} ${doctor.title}`} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="text-2xl md:text-3xl font-black text-win-text-dark">{doctor.name}</h2>
                  <span className="badge bg-win-navy text-white">{doctor.title}</span>
                </div>
                <p className="text-win-sky font-bold text-lg mb-4">{doctor.specialty}</p>
                <p className="text-gray-600 font-medium leading-relaxed mb-5 text-sm">{doctor.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {doctor.credentials.slice(0, 4).map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm font-medium text-win-text-dark">
                      <i className="ph-bold ph-check-circle text-win-sky mt-0.5 shrink-0" aria-hidden="true" /> {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-win-sky text-sm font-bold">자세한 약력 보기 <i className="ph-bold ph-arrow-right" aria-hidden="true" /></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 전문의 직접 집도 원칙 */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-win-text-dark mb-8">전문의 직접 집도 원칙</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "ph-user-check", title: "전원 전문의 직접 집도", desc: "인턴·전공의에게 위임하지 않습니다. 진단부터 수술·재활까지 담당 전문의가 직접 시행합니다." },
              { icon: "ph-medal", title: "한국 100대 명의", desc: "한국 100대 명의에 선정된 검증된 전문의가 직접 집도합니다." },
              { icon: "ph-trophy", title: "프로구단 주치의 경험", desc: "K리그·KLPGA·핸드볼 H리그 공식 주치의 경험이 모든 환자에게 적용됩니다." },
            ].map((d) => (
              <div key={d.title} className="bento-card p-7">
                <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-2xl flex items-center justify-center mb-4">
                  <i className={`ph-bold ${d.icon} text-2xl`} aria-hidden="true" />
                </div>
                <h3 className="font-black text-win-text-dark mb-2">{d.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 관련 링크 */}
      <section className="py-10 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-black text-win-text-dark mb-5">함께 보면 좋은 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/about/clinic", label: "병원 소개", desc: "시설·층별 안내" },
              { href: "/sports-rehab/surgery-center", label: "수술 센터", desc: "당일 수술 전문" },
              { href: "/sports-rehab/pro-team", label: "프로구단 주치의", desc: "팀닥터 경험" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bento-card p-5 flex items-center gap-3 hover:shadow-win-hover transition-all">
                <i className="ph-bold ph-arrow-right text-win-sky text-xl shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-black text-win-text-dark text-sm">{l.label}</p>
                  <p className="text-xs text-gray-500">{l.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
