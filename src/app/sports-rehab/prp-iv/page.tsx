import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/schema";

const BASE = "https://winwinosc.com";

export const metadata: Metadata = {
  title: { absolute: "청주 재생주사·PRP·회복수액 — 힘줄 재생·컨디셔닝 윈윈정형외과 수술재활센터" },
  description:
    "청주 정형외과 윈윈에서 PRP 재생주사·회복수액 치료. 힘줄염·인대 손상 비수술 치료, 경기 후 빠른 컨디션 회복. 전문의 직접 시행, 충북권 내 시행 가능 병원 드묾.",
  keywords: "청주 PRP 주사, 청주 재생주사, 청주 회복수액, 힘줄염 비수술, PRP 정형외과 청주, 청주 정형외과",
  alternates: { canonical: "/sports-rehab/prp-iv" },
  openGraph: {
    title: "청주 재생주사·PRP·회복수액 — 힘줄 재생·컨디셔닝 윈윈정형외과",
    description: "청주 정형외과 윈윈에서 PRP 재생주사·회복수액 치료. 힘줄염·인대 손상 비수술 치료.",
    url: `${BASE}/sports-rehab/prp-iv`,
    type: "website",
    images: [{ url: "https://storage.googleapis.com/imageswinwin/prp-iv.webp" }],
  },
};

const faqs = [
  { question: "청주에서 PRP 주사 맞을 수 있는 정형외과가 있나요?", answer: "윈윈정형외과 수술재활센터에서 전문의가 직접 시행합니다. 충북권에서 PRP 주사를 원내 직접 시행하는 정형외과는 드뭅니다." },
  { question: "PRP는 힘줄 파열에 정말 효과가 있나요?", answer: "부분 파열·힘줄염에서 효과적입니다. 완전 파열은 수술을 고려해야 하며, 파열 범위 확인 후 적합성을 판단합니다." },
  { question: "회복수액은 얼마나 자주 맞아야 하나요?", answer: "시즌 중 주 1~2회, 비시즌 월 1~2회를 권장합니다. 경기 전날 1회만으로도 컨디션 개선 효과가 있습니다." },
  { question: "PRP 주사는 아픈가요?", answer: "통증은 일반 주사와 같은 수준이며, 1~2일 정도 열감이 있을 수 있습니다." },
  { question: "수술 전후에도 PRP·회복수액을 받을 수 있나요?", answer: "가능합니다. 수술 전 조직 준비, 수술 후 회복 촉진에 모두 활용할 수 있습니다." },
];

export default function PrpIvPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "홈", url: `${BASE}/` },
    { name: "스포츠 수술·재활", url: `${BASE}/sports-rehab` },
    { name: "재생주사·회복수액", url: `${BASE}/sports-rehab/prp-iv` },
  ]);
  const faqSchema = getFaqJsonLd(faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-win-bg">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-win-text-gray mb-6" aria-label="breadcrumb">
            <Link href="/" className="hover:text-win-navy">홈</Link>
            <span>/</span>
            <span>스포츠 수술·재활</span>
            <span>/</span>
            <span className="text-win-navy font-semibold">재생주사·회복수액</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="badge bg-win-navy text-white"><i className="ph-bold ph-drop" aria-hidden="true" /> PRP 치료</span>
            <span className="badge bg-win-sky-light text-win-sky"><i className="ph-bold ph-shield-check" aria-hidden="true" /> 비수술 우선</span>
            <span className="badge bg-green-50 text-green-700"><i className="ph-bold ph-person-simple-run" aria-hidden="true" /> 선수 컨디셔닝</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-win-text-dark mb-5">
            청주 재생주사·회복수액
            <br /><span className="text-gradient">PRP 재생 · 수액 컨디셔닝</span>
          </h1>
          <p className="geo-speakable text-xl text-win-text-gray font-medium leading-relaxed mb-8">
            힘줄염·인대 손상 비수술 치료와 경기 후 빠른 컨디션 회복. 충북권에서 PRP·재생주사를 전문의가 직접 시행하는 드문 병원입니다.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-10">
            {[
              { value: "원내", label: "전문의 직접 시행", sub: "외주·위탁 없음", color: "text-win-navy" },
              { value: "1~3회", label: "PRP 권장 횟수", sub: "효과 발현 2~4주", color: "text-win-sky" },
              { value: "30~60분", label: "회복수액 시술", sub: "당일 운동 복귀 가능", color: "text-green-600" },
            ].map((s) => (
              <div key={s.label} className="bento-card p-5 text-center border border-blue-50">
                <p className={`text-xl md:text-2xl font-black ${s.color} mb-1`}>{s.value}</p>
                <p className="text-sm font-bold text-gray-600">{s.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="aspect-[16/7] overflow-hidden rounded-[2rem] shadow-win-hover bg-gradient-to-br from-blue-50 to-sky-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://storage.googleapis.com/imageswinwin/prp-iv.webp" alt="청주 PRP 재생주사 회복수액 윈윈정형외과" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 추천 대상 */}
      <section className="py-10 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="bento-card p-8 border border-blue-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-2xl flex items-center justify-center shrink-0">
                <i className="ph-bold ph-question text-2xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-win-text-dark">이런 분께 추천합니다</h2>
                <p className="text-win-text-gray font-medium mt-1">1개 이상 해당하면 진료를 권장합니다.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "힘줄염·인대 손상, 수술은 원하지 않는다", desc: "비수술로 재생·회복을 원하는 경우" },
                { title: "주사 효과가 오래 가지 않아 근본 재생이 필요", desc: "성장인자 기반 조직 재생 촉진" },
                { title: "경기·훈련 후 극심한 피로·근육통 반복", desc: "회복수액으로 30~60분 만에 컨디션 회복" },
                { title: "수술 후 회복을 앞당기고 싶다", desc: "수술 전·후 조직 준비 및 회복 촉진" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <i className="ph-bold ph-check-circle text-win-sky text-xl mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-win-text-dark">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 치료 정의 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-6">재생주사·회복수액이란?</h2>
          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-win">
            <p className="text-lg text-win-text-dark font-medium leading-relaxed">
              재생주사는 손상된 조직의 자연 회복을 촉진하는 주사 치료로, <strong>자가 혈장 치료 (PRP)</strong>이 대표적입니다.
              회복수액은 비타민·미네랄·아미노산을 정맥으로 직접 공급해 피로 회복과 면역 기능을 높이는 치료입니다.
              청주를 비롯한 스포츠 활동 인구와 선수들이 수술 없이 회복하거나 경기력을 유지하기 위해 선택하는 전문 치료입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 치료 종류 */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-2">치료 종류</h2>
            <p className="text-win-text-gray font-medium">목적과 상황에 따라 단독 또는 병행 처방됩니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* PRP — 핵심 치료 (navy) */}
            <div className="bento-card p-8 bg-win-navy text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/15 text-win-sky rounded-xl flex items-center justify-center shrink-0">
                  <i className="ph-bold ph-drop text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-win-navy bg-win-sky px-2 py-0.5 rounded-full">핵심 치료</span>
                  <h3 className="text-xl font-black text-white mt-1">PRP 주사</h3>
                </div>
              </div>
              <p className="text-gray-200 font-medium text-base leading-relaxed mb-4">자가혈 10~30mL 채혈 → 원심분리 → 병변 정밀 주사. 성장인자(PDGF, TGF-β, IGF) 고농도로 조직 재생 신호 촉진.</p>
              <div className="flex flex-wrap gap-2">
                {["힘줄염·건병증", "인대 부분 파열", "관절염 초기", "근육 부상"].map((t) => (
                  <span key={t} className="px-2 py-1 bg-white/15 rounded-lg text-xs font-bold">{t}</span>
                ))}
              </div>
            </div>

            {/* 재생주사 — 재생 강화 (sky) */}
            <div className="bento-card p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center shrink-0">
                  <i className="ph-bold ph-test-tube text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-win-sky bg-win-sky-light px-2 py-0.5 rounded-full">재생 강화</span>
                  <h3 className="text-xl font-black text-win-text-dark mt-1">재생주사</h3>
                </div>
              </div>
              <p className="text-gray-600 font-medium text-base leading-relaxed mb-4">힘줄·인대 손상 부위 조직 재생 환경 조성. 연골 재생 지지, 만성 염증 억제 효과.</p>
              <div className="flex flex-wrap gap-2">
                {["만성 힘줄염", "연골 보호", "PRP 병행"].map((t) => (
                  <span key={t} className="px-2 py-1 bg-win-bg border border-blue-100 rounded-lg text-xs font-bold text-win-navy">{t}</span>
                ))}
              </div>
            </div>

            {/* 회복수액 — 선수 컨디셔닝 (green) */}
            <div className="bento-card p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                  <i className="ph-bold ph-lightning text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">선수 컨디셔닝</span>
                  <h3 className="text-xl font-black text-win-text-dark mt-1">회복수액</h3>
                </div>
              </div>
              <p className="text-gray-600 font-medium text-base leading-relaxed mb-4">고농도 비타민C·마그네슘·아미노산 정맥 공급. 경기 후 산화 스트레스 해소, 30~60분 시술.</p>
              <div className="flex flex-wrap gap-2">
                {["경기 전·후", "훈련 과부하", "면역 저하"].map((t) => (
                  <span key={t} className="px-2 py-1 bg-win-bg border border-blue-100 rounded-lg text-xs font-bold text-win-navy">{t}</span>
                ))}
              </div>
            </div>

            {/* 콜라겐 주사 — 힘줄 보호 (purple) */}
            <div className="bento-card p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center shrink-0">
                  <i className="ph-bold ph-shield-check text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-purple-500 bg-purple-50 px-2 py-0.5 rounded-full">힘줄 보호</span>
                  <h3 className="text-xl font-black text-win-text-dark mt-1">콜라겐 주사</h3>
                </div>
              </div>
              <p className="text-gray-600 font-medium text-base leading-relaxed mb-4">힘줄 강도 회복·보호. 만성 힘줄 손상에 재생주사와 병행 처방.</p>
              <div className="flex flex-wrap gap-2">
                {["만성 힘줄 손상", "힘줄 강도 회복"].map((t) => (
                  <span key={t} className="px-2 py-1 bg-win-bg border border-blue-100 rounded-lg text-xs font-bold text-win-navy">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 치료 상세 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-10">치료 상세</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PRP 프로세스 */}
            <div className="bento-card p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center">
                  <i className="ph-bold ph-drop text-xl" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-win-text-dark">
                  PRP 치료 과정 <span className="text-sm font-semibold text-win-sky">· 당일 30분 이내 시행</span>
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-5">
                <div className="p-3 rounded-2xl bg-win-navy text-white text-center">
                  <p className="text-[10px] font-bold text-win-sky">Step 1</p>
                  <p className="font-black text-sm mt-0.5">채혈</p>
                  <p className="text-[10px] text-gray-300">10~30mL</p>
                </div>
                <div className="p-3 rounded-2xl bg-win-sky-light border border-win-sky/20 text-center">
                  <p className="text-[10px] font-bold text-win-sky">Step 2</p>
                  <p className="font-black text-win-text-dark text-sm mt-0.5">원심분리</p>
                  <p className="text-[10px] text-gray-400">혈소판 농축</p>
                </div>
                <div className="p-3 rounded-2xl bg-gradient-win text-white text-center">
                  <p className="text-[10px] font-bold text-win-sky">Step 3</p>
                  <p className="font-black text-sm mt-0.5">정밀 주사</p>
                  <p className="text-[10px] text-gray-200">병변 부위</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <i className="ph-bold ph-check text-win-sky shrink-0" aria-hidden="true" />
                  <span className="text-gray-600">자가혈 사용 — 알레르기·거부반응 없음</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ph-bold ph-check text-win-sky shrink-0" aria-hidden="true" />
                  <span className="text-gray-600">권장 횟수: 1~3회, 효과 발현 2~4주</span>
                </li>
              </ul>
            </div>

            {/* 회복수액 */}
            <div className="bento-card p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                  <i className="ph-bold ph-lightning text-xl" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-win-text-dark">회복수액 처방</h3>
              </div>
              <div className="p-4 rounded-2xl bg-win-bg border border-blue-50 mb-4">
                <p className="text-xs font-bold text-win-navy mb-2">주요 성분</p>
                <div className="flex flex-wrap gap-1.5">
                  {["고농도 비타민C", "마그네슘", "아미노산", "미네랄 복합"].map((t) => (
                    <span key={t} className="px-2 py-1 bg-white border border-blue-100 rounded-lg text-xs font-bold text-win-navy">{t}</span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  "경기 후 산화 스트레스 해소",
                  "30~60분 시술, 당일 운동 복귀 가능",
                  "권장: 시즌 중 주 1~2회, 경기 전날 1회도 효과적",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <i className="ph-bold ph-check text-green-500 shrink-0" aria-hidden="true" />
                    <span className="text-gray-600">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 왜 윈윈 + 후기 */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-10">왜 윈윈정형외과인가?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bento-card p-8 bg-win-navy text-white">
              <div className="w-12 h-12 bg-white/15 text-win-sky rounded-xl flex items-center justify-center mb-5">
                <i className="ph-bold ph-medal text-2xl" aria-hidden="true" />
              </div>
              <p className="text-win-sky text-xs font-bold uppercase tracking-wide mb-2">충북권 PRP 직접 시행</p>
              <h3 className="text-xl font-black mb-3">원내 완결 시스템</h3>
              <p className="text-gray-300 text-base font-medium leading-relaxed">충북권에서 PRP를 직접 시행하는 정형외과는 드뭅니다. 외주·위탁 없이 전문의가 채혈부터 주사까지 원내에서 완결합니다.</p>
            </div>
            <div className="bento-card p-8 border border-blue-100">
              <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center mb-5">
                <i className="ph-bold ph-sliders text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-win-text-dark mb-3">선수 맞춤 수액 처방</h3>
              <p className="text-gray-600 text-base font-medium leading-relaxed">경기 일정·훈련량에 맞춰 성분 조합을 조절합니다. 일반 링거와는 다른 스포츠 특화 처방입니다.</p>
            </div>
            <div className="bento-card p-8 border border-blue-100">
              <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center mb-5">
                <i className="ph-bold ph-arrows-merge text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-win-text-dark mb-3">주사+재활 연계</h3>
              <p className="text-gray-600 text-base font-medium leading-relaxed">재생주사 치료 후 바로 재활 프로그램 연결. 재생과 기능 회복을 동시에 진행해 회복 기간을 단축합니다.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { initial: "P", name: "P님 (38세, 청주 흥덕구)", text: "야구 동호회 활동 중 어깨 힘줄염으로 3개월 넘게 통증이 지속됐습니다. 수술이 두려워 버텼는데, PRP 주사 2회와 재활을 병행한 결과 4개월 만에 수술 없이 운동에 복귀했습니다." },
              { initial: "L", name: "L님 (26세, 청주 서원구)", text: "마라톤 훈련 중 극도의 피로와 근육통이 반복됐습니다. 회복수액을 4~5회 받고 훈련 강도가 정상으로 돌아와 대회 준비를 이어갈 수 있었습니다." },
            ].map((r) => (
              <div key={r.initial} className="bento-card p-7 border border-blue-50 bg-win-bg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-win-sky-light text-win-sky rounded-full flex items-center justify-center font-black text-sm shrink-0">{r.initial}</div>
                  <div>
                    <p className="font-black text-win-text-dark text-sm">{r.name}</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <i key={s} className="ph-fill ph-star text-yellow-400 text-xs" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                  <span className="ml-auto text-xs text-gray-400">네이버 예약 후기</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 치료 타임라인 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-2">치료 타임라인</h2>
          <p className="text-win-text-gray font-medium mb-8">PRP 주사 기준 일반적인 치료 일정입니다.</p>
          <div className="bento-card p-7 border border-blue-100 mb-5">
            <p className="text-sm font-bold text-win-text-gray mb-4">PRP 주사 기준</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-win-sky-light border border-win-sky/20 text-center">
                <p className="text-xs font-bold text-win-sky mb-1">1~3회</p>
                <p className="font-black text-win-text-dark text-sm">염증 억제, 통증 감소</p>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-win text-white text-center">
                <p className="text-xs font-bold text-win-sky mb-1">3~6회</p>
                <p className="font-black text-sm">재생 및 강화</p>
              </div>
              <div className="p-4 rounded-2xl bg-win-bg border border-blue-100 text-center">
                <p className="text-xs font-bold text-win-sky mb-1">2회</p>
                <p className="font-black text-win-text-dark text-sm">강화 주사</p>
              </div>
              <div className="p-4 rounded-2xl bg-win-navy text-white text-center">
                <p className="text-xs font-bold text-win-sky mb-1">~2개월</p>
                <p className="font-black text-sm">복귀 평가</p>
              </div>
            </div>
          </div>
          <div className="bento-card p-6 border border-blue-100">
            <p className="text-sm font-bold text-win-text-gray mb-3">회복수액 기준</p>
            <div className="grid grid-cols-4 gap-3">
              <div className="text-center p-3 rounded-xl bg-win-bg">
                <p className="text-xs font-bold text-win-sky">1회</p>
                <p className="text-sm font-bold text-win-text-dark mt-1">피로 완화</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-win-bg">
                <p className="text-xs font-bold text-win-sky">3회</p>
                <p className="text-sm font-bold text-win-text-dark mt-1">컨디션 회복</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-win-bg">
                <p className="text-xs font-bold text-win-sky">5회</p>
                <p className="text-sm font-bold text-win-text-dark mt-1">유지·강화</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-green-50">
                <p className="text-xs font-bold text-green-600">이후</p>
                <p className="text-sm font-bold text-win-text-dark mt-1">선택적 추가</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-2">자주 묻는 질문</h2>
          <p className="text-win-text-gray font-medium mb-10">재생주사·회복수액에 대해 가장 많이 묻는 질문입니다.</p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bento-card p-0 border border-blue-100">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-win-text-dark">
                  {faq.question}
                  <i className="ph-bold ph-plus faq-icon text-win-sky shrink-0 ml-4" aria-hidden="true" />
                </summary>
                <p className="px-6 pb-6 text-gray-600 font-medium leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 관련 링크 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-win-text-dark mb-8">함께 보면 좋은 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: "/sports-rehab/rehabilitation", icon: "ph-heartbeat", label: "재활치료", desc: "주사+재활 연계" },
              { href: "/sports-rehab/surgery-center", icon: "ph-knife", label: "수술 센터", desc: "비수술 한계 시" },
              { href: "/shoulder/rotator-cuff", icon: "ph-person", label: "회전근개 파열", desc: "PRP 주요 적응증" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="bento-card p-6 flex items-center gap-4 hover:border-win-sky border border-transparent group"
              >
                <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center shrink-0 group-hover:bg-win-sky group-hover:text-white transition-colors">
                  <i className={`ph-bold ${l.icon} text-xl`} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-black text-win-text-dark group-hover:text-win-navy transition-colors">{l.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{l.desc}</p>
                </div>
                <i className="ph-bold ph-arrow-right text-gray-300 group-hover:text-win-sky ml-auto transition-colors" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
