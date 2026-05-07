import type { Metadata } from "next";
import Link from "next/link";
import { getOrganizationJsonLd, getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/schema";

const BASE = "https://winwinosc.com";

export const metadata: Metadata = {
  title: { absolute: "청주 윈윈정형외과 수술재활센터 — 족부·무릎·어깨·스포츠 수술·재활 전문" },
  description:
    "청주 정형외과 윈윈수술재활센터 소개. 족부·발목·무릎·어깨·골절·스포츠 수술·재활 원스톱. 당일 수술·조기 보행·PRP 전 부위·관절경 BMAC. 4~5층 전문 시설, 3인 의료진.",
  keywords: "청주 정형외과, 윈윈정형외과, 청주 수술 병원, 청주 재활 병원, 족부 전문 정형외과, 당일 수술, 스포츠 재활",
  alternates: { canonical: "/about/clinic" },
  openGraph: {
    title: "청주 윈윈정형외과 수술재활센터 — 족부·무릎·어깨·스포츠 수술·재활 전문",
    description: "청주 정형외과 윈윈수술재활센터 소개. 족부·발목·무릎·어깨·골절·스포츠 수술·재활 원스톱.",
    url: `${BASE}/about/clinic`,
    type: "website",
    images: [{ url: "https://storage.googleapis.com/imageswinwin/winwin-surgery.webp" }],
  },
};

const faqs = [
  { question: "청주에서 수술과 재활을 함께 받을 수 있는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터는 4~5층에 수술실·회복실·재활센터를 모두 갖추고 있으며, 수술 집도의와 재활팀이 같은 건물에서 연속 케어를 제공합니다. 청주에서 수술 후 타 기관 이송 없이 재활까지 완결할 수 있는 전문 수술재활센터입니다." },
  { question: "어떤 질환을 진료하나요?", answer: "족부·발목·무릎·어깨·골절·척추·스포츠 부상 전반을 진료합니다. 비수술 치료(PRP·재생주사·ESWT)부터 당일 수술, 수술 후 재활까지 원스톱으로 제공합니다." },
  { question: "예약 없이 방문 가능한가요?", answer: "방문은 가능하지만 대기가 발생할 수 있습니다. 대표전화 043-715-7591로 예약하시면 대기 시간을 최소화할 수 있습니다." },
  { question: "수술 후 입원이 반드시 필요한가요?", answer: "질환·수술 종류에 따라 다릅니다. 부분 마취 적용 질환에서는 당일 퇴원이 가능하며, 입원이 필요한 경우 5층 병실을 이용할 수 있습니다. 진료 시 담당 원장이 안내해 드립니다." },
  { question: "주차가 가능한가요?", answer: "하이마트 건물 주차장을 이용할 수 있습니다. 자세한 사항은 방문 전 병원(043-715-7591)으로 문의해 주세요." },
];

export default function ClinicPage() {
  const org = getOrganizationJsonLd();
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "홈", url: `${BASE}/` },
    { name: "병원·의료진", url: `${BASE}/about` },
    { name: "병원 소개", url: `${BASE}/about/clinic` },
  ]);
  const faqSchema = getFaqJsonLd(faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-win-bg">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-win-text-gray mb-6" aria-label="breadcrumb">
            <Link href="/" className="hover:text-win-navy">홈</Link>
            <span>/</span>
            <span>병원·의료진</span>
            <span>/</span>
            <span className="text-win-navy font-semibold">병원 소개</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="badge bg-win-navy text-white"><i className="ph-bold ph-arrows-merge" aria-hidden="true" /> 수술·재활 원스톱</span>
            <span className="badge bg-win-sky-light text-win-sky"><i className="ph-bold ph-lightning" aria-hidden="true" /> 당일 수술 가능</span>
            <span className="badge bg-green-50 text-green-700"><i className="ph-bold ph-drop" aria-hidden="true" /> PRP 전 부위</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-win-text-dark mb-5">
            청주 윈윈정형외과
            <br /><span className="text-gradient">수술재활센터</span>
          </h1>
          <p className="geo-speakable text-xl text-win-text-gray font-medium leading-relaxed mb-10">
            족부·발목·무릎·어깨·척추·골절 전문의 3인이 직접 집도합니다. 당일 수술, PRP 전 부위, 관절경 BMAC, 스포츠 재활 원스톱. 충북권에서 이 모든 것을 한 병원에서 제공하는 곳은 드뭅니다.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-10">
            {[
              { value: "4~5층", label: "전용 시설", sub: "수술·재활·물리치료", color: "text-win-navy" },
              { value: "3인", label: "전문 의료진", sub: "전문의 직접 집도", color: "text-win-sky" },
              { value: "당일", label: "수술·퇴원 가능", sub: "부분 마취·금식 불필요", color: "text-win-navy" },
            ].map((s) => (
              <div key={s.label} className="bento-card p-5 text-center border border-blue-50">
                <p className={`text-2xl md:text-3xl font-black ${s.color} mb-1`}>{s.value}</p>
                <p className="text-sm font-bold text-gray-600">{s.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이런 점이 마음에 드셨다는 분들이 많습니다 */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-3">이런 점이 마음에 드셨다는 분들이 많습니다</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            {[
              { icon: "ph-arrows-merge", iconBg: "bg-win-sky-light", iconColor: "text-win-sky", title: "수술과 재활을 한 병원에서", desc: "수술 후 타 기관 이송 없이 같은 건물에서 재활까지 완결" },
              { icon: "ph-lightning", iconBg: "bg-win-sky-light", iconColor: "text-win-sky", title: "당일 수술, 바로 일상 복귀", desc: "오래 입원하지 않고 당일 수술 후 빠른 일상 복귀 원하는 분" },
              { icon: "ph-drop", iconBg: "bg-green-50", iconColor: "text-green-500", title: "PRP·재생주사 제대로 받고 싶다", desc: "어깨·무릎·발목·힘줄 등 전 부위 PRP 시행 가능" },
              { icon: "ph-trophy", iconBg: "bg-win-sky-light", iconColor: "text-win-sky", title: "KLPGA·충북청주FC 팀닥터 수준", desc: "프로 스포츠 선수와 동일한 수준의 수술·재활 케어" },
              { icon: "ph-microscope", iconBg: "bg-purple-50", iconColor: "text-purple-500", title: "관절경 BMAC 연골 재생", desc: "국내 시행 가능 의사 극소수인 BMAC 수술 집도 가능" },
              { icon: "ph-person-simple-run", iconBg: "bg-orange-50", iconColor: "text-orange-500", title: "족부·발목·스포츠 전문 치료", desc: "무지외반증·아킬레스건·발목 인대 등 족부·스포츠 부상 전문" },
            ].map((item) => (
              <div key={item.title} className="bento-card p-6 flex items-start gap-4">
                <div className={`w-12 h-12 ${item.iconBg} ${item.iconColor} rounded-2xl flex items-center justify-center shrink-0`}>
                  <i className={`ph-bold ${item.icon} text-2xl`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-black text-win-text-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 윈윈정형외과 수술재활센터란? */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-8">윈윈정형외과 수술재활센터란?</h2>
          <div className="bento-card p-8 border border-blue-50">
            <p className="text-lg text-win-text-dark leading-relaxed mb-4">
              윈윈정형외과 수술재활센터는 충북 청주시 흥덕구에 위치한 족부·발목·무릎·어깨·골절·스포츠 전문 정형외과입니다.
            </p>
            <p className="text-win-text-gray leading-relaxed mb-4">
              당일 수술, 조기 보행 프로토콜, PRP·BMAC 등 재생 치료와 스포츠 재활을 원스톱으로 제공합니다. 청주에서 수술부터 재활까지 끊김 없이 받을 수 있는 전문 수술재활센터입니다.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-blue-50">
              {[
                { title: "족부·발목", sub: "무지외반증·아킬레스건" },
                { title: "무릎·어깨", sub: "관절경·인대 수술", sky: true },
                { title: "골절·외상", sub: "당일 수술 가능" },
                { title: "스포츠 재활", sub: "5층 전용 재활 공간", sky: true },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <p className={`text-xl font-black ${item.sky ? "text-win-sky" : "text-win-navy"}`}>{item.title}</p>
                  <p className="text-xs text-win-text-gray mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 층별 시설 안내 */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-3">층별 시설 안내</h2>
          <p className="text-win-text-gray mb-10">진단부터 수술, 재활까지 한 건물에서 완결됩니다.</p>
          <div className="flex flex-col gap-5">
            {/* 4F */}
            <div className="bento-card p-8 border border-blue-50">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-win-navy flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-xl">4F</span>
                </div>
                <div>
                  <p className="font-black text-xl text-win-text-dark">외래·치료</p>
                  <p className="text-sm text-win-text-gray">진료·검사·비수술 치료</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["정형외과 진료실", "마취통증의학과", "물리치료실", "주사치료실"].map(item => (
                  <div key={item} className="bg-win-bg rounded-xl p-3 text-center">
                    <p className="text-sm font-semibold text-win-text-dark">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* 5F */}
            <div className="bento-card p-8 border border-blue-50">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-win-sky flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-xl">5F</span>
                </div>
                <div>
                  <p className="font-black text-xl text-win-text-dark">수술·재활</p>
                  <p className="text-sm text-win-text-gray">수술·입원·집중 재활</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["무균 전용 수술실", "회복실", "입원실(병실)", "집중 재활치료실"].map(item => (
                  <div key={item} className="bg-win-sky-light rounded-xl p-3 text-center">
                    <p className="text-sm font-semibold text-win-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* 5F 야외 */}
            <div className="bento-card p-8 border border-green-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shrink-0">
                  <i className="ph-bold ph-tree text-white text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-black text-xl text-win-text-dark">5층 야외 테라스</p>
                  <p className="text-sm text-win-text-gray">스포츠 재활 기능 훈련 전용 공간</p>
                </div>
              </div>
              <p className="text-win-text-gray text-sm">민첩성 훈련, 점프·착지 훈련, 종목별 동작 훈련 등 현장 복귀 직전 단계 기능 훈련을 야외에서 진행합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 차별화 서비스 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-10">핵심 차별화 서비스</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "ph-lightning", color: "text-win-sky", title: "당일 수술", desc: "부분 마취 적용 질환에서 당일 퇴원 가능. 타원 2~3일 입원 대비 직장인·선수의 시간 손실을 최소화합니다." },
              { icon: "ph-person-simple-walk", color: "text-win-sky", title: "조기 보행 프로토콜", desc: "타원 6주 보행 목표 대비 본원 2~3주 보행 목표. 수술 직후부터 재활팀이 연계해 빠른 기능 회복을 유도합니다." },
              { icon: "ph-drop", color: "text-green-500", title: "PRP 전 부위 시행", desc: "자가혈 PRP 주사를 어깨·무릎·발목·힘줄 등 전 부위에 시행합니다. 충북권 내에서도 드문 서비스입니다." },
              { icon: "ph-microscope", color: "text-purple-600", title: "관절경 BMAC", desc: "골수 줄기세포를 활용한 연골 재생 수술. 관절경으로 시행 가능한 의사가 국내에서도 극소수입니다." },
              { icon: "ph-sneaker", color: "text-orange-500", title: "닥터포디 깔창", desc: "인대·힘줄 재생 강화를 돕는 자체 개발 보조 치료 깔창. 수술 후 재활 효과를 높입니다." },
              { icon: "ph-trophy", color: "text-yellow-500", title: "프로구단 주치의 경험", desc: "KLPGA·KGA·충북청주FC·클라이밍 세계선수권 공식 의무 지원. 엘리트 선수 수준의 치료를 일반 환자에게도 제공합니다." },
            ].map((item) => (
              <div key={item.title} className="bento-card p-7">
                <div className="flex items-center gap-3 mb-3">
                  <i className={`ph-bold ${item.icon} ${item.color} text-2xl`} aria-hidden="true" />
                  <p className="font-black text-lg text-win-text-dark">{item.title}</p>
                </div>
                <p className="text-win-text-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 왜 윈윈정형외과인가? + 후기 */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-10">왜 윈윈정형외과인가?</h2>
          <div className="flex flex-col gap-5 mb-12">
            {[
              { num: "01", numColor: "text-win-sky", border: "border-win-sky", title: "수술+재활 원스톱 — 치료 공백 없음", desc: "진단·수술·재활을 한 건물에서 진행합니다. 타원 의뢰·전원 없이 완결되어 치료 공백이 없습니다. 수술 집도의와 재활팀이 진행 상황을 실시간 공유합니다." },
              { num: "02", numColor: "text-win-navy", border: "border-win-navy", title: "당일 수술, 2~3주 조기 보행 목표", desc: "타원 2~3일 입원 vs 본원 당일 퇴원(적합 질환). 타원 6주 보행 vs 본원 2~3주 보행 목표. 직장인과 선수 모두 빠른 복귀가 가능합니다." },
              { num: "03", numColor: "text-green-500", border: "border-green-400", title: "충북권 스포츠 수술·재활 전문 센터", desc: "충북권에서 BMAC·PRP 전 부위를 한 곳에서 제공하는 몇 안 되는 병원입니다. 프로구단 팀닥터 임상 경험을 갖춘 의료진이 직접 진료합니다." },
            ].map((item) => (
              <div key={item.num} className={`bento-card p-7 border-l-4 ${item.border}`}>
                <div className="flex items-start gap-4">
                  <span className={`text-3xl font-black ${item.numColor} shrink-0`}>{item.num}</span>
                  <div>
                    <p className="font-black text-xl text-win-text-dark mb-2">{item.title}</p>
                    <p className="text-win-text-gray font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* 환자 후기 */}
          <h3 className="text-2xl font-black text-win-text-dark mb-6">환자 후기</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { initial: "P", avatarBg: "bg-win-navy", avatarText: "text-white", name: "P님 (51세 여성)", condition: "무릎 관절염 수술", review: "다른 병원에서는 수술 후 재활을 별도 센터로 안내해 번거로웠는데, 윈윈에서는 수술 다음 날부터 같은 건물에서 재활을 시작했어요. 3개월 만에 계단을 혼자 오르내릴 수 있게 됐습니다. 한 곳에서 다 해결할 수 있어서 정말 편했습니다." },
              { initial: "P", avatarBg: "bg-win-sky", avatarText: "text-white", name: "P님 (33세 남성)", condition: "발목 골절 수술", review: "발목 골절 수술인데 입원 일정이 걱정됐어요. 당일 수술·당일 퇴원으로 진행했고 다음 날부터 목발로 출퇴근했습니다. 2주 뒤 보행이 가능해졌고, 직장을 오래 쉬지 않아도 됐습니다. 빠른 회복에 정말 만족합니다." },
            ].map((r, i) => (
              <div key={i} className="bento-card p-7 bg-win-bg">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${r.avatarBg} ${r.avatarText} rounded-full flex items-center justify-center font-black text-sm shrink-0`}>{r.initial}</div>
                  <div>
                    <p className="font-bold text-win-text-dark">{r.name}</p>
                    <p className="text-xs text-win-text-gray">{r.condition}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[1,2,3,4,5].map(n => <i key={n} className="ph-fill ph-star text-yellow-400 text-sm" />)}
                  </div>
                </div>
                <p className="text-sm text-win-text-gray leading-relaxed">{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진료 시간·오시는 길 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-10">진료 시간 · 오시는 길</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 진료 시간 */}
            <div className="bento-card p-8">
              <h3 className="text-xl font-black text-win-text-dark mb-6 flex items-center gap-2">
                <i className="ph-bold ph-clock text-win-sky" aria-hidden="true" /> 진료 시간
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-win-text-dark">평일 (월~금)</span>
                  <div className="text-right">
                    <p className="font-bold text-win-navy">08:30 ~ 18:00</p>
                    <p className="text-xs text-win-text-gray">점심 12:30 ~ 14:00</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-win-text-dark">토요일</span>
                  <div className="text-right">
                    <p className="font-bold text-win-navy">08:30 ~ 13:00</p>
                    <p className="text-xs text-win-text-gray">점심 시간 없음</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-win-text-gray">일요일·공휴일</span>
                  <span className="text-win-text-gray font-medium">휴진</span>
                </div>
              </div>
            </div>
            {/* 오시는 길 */}
            <div className="bento-card p-8">
              <h3 className="text-xl font-black text-win-text-dark mb-6 flex items-center gap-2">
                <i className="ph-bold ph-map-pin text-win-sky" aria-hidden="true" /> 오시는 길
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs text-win-text-gray font-medium mb-1">주소</p>
                  <p className="font-semibold text-win-text-dark">충북 청주시 흥덕구 강서로 126 하이마트 4~5층</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-win-text-gray font-medium mb-1">대표전화</p>
                    <a href="tel:+82437157591" className="font-bold text-win-navy hover:opacity-80 transition-opacity">043-715-7591</a>
                  </div>
                  <div>
                    <p className="text-xs text-win-text-gray font-medium mb-1">수술 예약</p>
                    <a href="tel:+821057857591" className="font-bold text-win-sky hover:opacity-80 transition-opacity">010-5785-7591</a>
                  </div>
                </div>
                <a
                  href="https://map.naver.com/p/entry/place/1475298812"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-win-navy text-white px-5 py-3 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <i className="ph-bold ph-navigation-arrow" aria-hidden="true" /> 네이버 지도에서 찾기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-10">자주 묻는 질문</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bento-card group">
                <summary className="flex justify-between items-center p-7 cursor-pointer outline-none font-bold text-win-text-dark">
                  <span className="pr-4">{faq.question}</span>
                  <i className="ph-bold ph-plus faq-icon text-win-sky shrink-0 text-xl" aria-hidden="true" />
                </summary>
                <div className="px-7 pb-7 text-win-text-gray leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 관련 링크 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-win-text-dark mb-8">함께 보면 좋은 페이지</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { href: "/about/doctors", icon: "ph-user-circle", iconColor: "text-win-navy", label: "의료진 소개", desc: "박은수·곽규완·김민경 원장 전문 분야 안내" },
              { href: "/sports-rehab/surgery-center", icon: "ph-first-aid", iconColor: "text-win-sky", label: "수술 센터", desc: "당일 수술·BMAC 시스템 안내" },
              { href: "/sports-rehab/rehabilitation", icon: "ph-heartbeat", iconColor: "text-win-sky", label: "스포츠 재활치료", desc: "5층 전용 재활센터·메디컬 테스트·복귀 프로그램" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bento-card p-6 block group">
                <i className={`ph-bold ${l.icon} ${l.iconColor} text-3xl mb-3`} aria-hidden="true" />
                <p className="font-bold text-win-text-dark group-hover:text-win-navy transition-colors mb-1">{l.label}</p>
                <p className="text-sm text-win-text-gray">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
