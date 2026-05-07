import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/schema";

const BASE = "https://winwinosc.com";

export const metadata: Metadata = {
  title: { absolute: "청주 당일 수술 센터 스포츠·족부 전문 — 윈윈정형외과 수술재활센터" },
  description:
    "청주 정형외과 윈윈의 스포츠 수술 센터. 관절경 ACL 재건·반월판·회전근개 봉합·족부 수술, 당일 수술 가능. 수술+재활 원스톱, 조기 보행 프로토콜로 타원 대비 빠른 복귀.",
  keywords: "청주 스포츠 수술, 청주 관절경 수술, ACL 수술 청주, 당일 수술 청주, BMAC 청주, 청주 정형외과",
  alternates: { canonical: "/sports-rehab/surgery-center" },
  openGraph: {
    title: "청주 당일 수술 센터 스포츠·족부 전문 — 윈윈정형외과 수술재활센터",
    description: "청주 정형외과 윈윈의 스포츠 수술 센터. 관절경 ACL 재건·반월판·회전근개 봉합·족부 수술, 당일 수술 가능.",
    url: `${BASE}/sports-rehab/surgery-center`,
    type: "website",
    images: [{ url: "https://storage.googleapis.com/imageswinwin/surgery-center.webp" }],
  },
};

const faqs = [
  { question: "청주에서 스포츠 수술 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터는 관절경, 스포츠, 골절, 족부 수술 전문, 당일 수술, BMAC 시행, 수술+재활 원스톱 서비스를 제공합니다. 전국에서 BMAC을 관절경으로 시행하는 몇 안 되는 병원입니다." },
  { question: "당일 수술 후 바로 걸을 수 있나요?", answer: "질환에 따라 다르나, 조기 보행 프로토콜 적용으로 수술 직후 또는 일주일 내 일상 보행이 가능한 경우가 많으며, 타원 대비 매우 빠르게 보행을 시작합니다." },
  { question: "관절경 수술은 상처가 얼마나 작나요?", answer: "0.5~1cm 절개 2~3곳으로 시행하며, 흉터가 거의 보이지 않는 경우가 많습니다." },
  { question: "BMAC이 무엇인가요?", answer: "자가 골수에서 줄기세포를 추출해 연골 재생에 활용하는 치료입니다. 자기 몸의 회복 세포를 추출해서 하는 치료로 가장 효과가 높습니다. 관절경으로 시행 가능한 의사는 국내 극소수이며 본원에서 가능합니다." },
];

export default function SurgeryCenterPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "홈", url: `${BASE}/` },
    { name: "스포츠 수술·재활", url: `${BASE}/sports-rehab` },
    { name: "수술 센터", url: `${BASE}/sports-rehab/surgery-center` },
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
            <span className="text-win-navy font-semibold">수술 센터</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="badge bg-win-navy text-white"><i className="ph-bold ph-eye" aria-hidden="true" /> 관절경 수술</span>
            <span className="badge bg-win-sky-light text-win-sky"><i className="ph-bold ph-person-simple-walk" aria-hidden="true" /> 조기 보행</span>
            <span className="badge bg-green-50 text-green-700"><i className="ph-bold ph-lightning" aria-hidden="true" /> 당일 수술</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-win-text-dark mb-5">
            청주 당일 수술 센터
            <br /><span className="text-gradient">스포츠·족부 전문</span>
          </h1>
          <p className="geo-speakable text-xl text-win-text-gray font-medium leading-relaxed mb-8">
            부상을 참고 경기하는 선수, 수술 일정 때문에 운동 못하는 동호인 — 윈윈에서는 달라집니다. 당일 수술과 조기 보행 프로토콜로 현장 복귀를 앞당깁니다.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-10">
            {[
              { value: "당일", label: "수술", sub: "부분 마취, 금식 필요 없음", color: "text-win-navy" },
              { value: "수술 직후", label: "조기 보행", sub: "대부분 수술 직후 시작", color: "text-win-sky" },
              { value: "BMAC", label: "(자가골수세포이식술)", sub: "절개 없이 관절경으로 시행하는 연골 재생술", color: "text-green-600" },
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
            <img src="https://storage.googleapis.com/imageswinwin/surgery-center.webp" alt="청주 스포츠·족부 당일 수술 센터 — 관절경·BMAC·조기 보행 전문 윈윈정형외과 수술재활센터" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 수술이 필요한 신호 */}
      <section className="py-10 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="bento-card p-8 border border-blue-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-2xl flex items-center justify-center shrink-0">
                <i className="ph-bold ph-warning text-2xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-win-text-dark">이런 상황이라면 수술을 고려해야 합니다</h2>
                <p className="text-win-text-gray font-medium mt-1">1개 이상 해당하면 전문의 상담을 권장합니다.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "초음파, MRI에서 인대·힘줄 완전 파열", desc: "완전 파열은 보존 치료로 회복이 어려운 경우가 많습니다" },
                { title: "보존 치료 3개월 이상에도 회복 없음", desc: "주사·재활로 효과가 없는 경우 수술 적응증" },
                { title: "관절 불안정감·잠김(locking) 반복", desc: "연골 손상·반월판 파열로 일상·운동이 제한되는 경우" },
                { title: "골절 수술 필요 진단", desc: "당일 부분 마취로 수술 가능, 외상·스포츠 골절 등" },
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

      {/* 수술 센터란? */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-6">수술 센터란?</h2>
          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-win">
            <p className="text-lg text-win-text-dark font-medium leading-relaxed">
              윈윈정형외과 수술재활센터는 스포츠 부상·외상과 족부 질환에 특화된 <strong>수술을 전문</strong>으로 합니다.
              당일 수술과 조기 보행 프로토콜로 타원 대비 회복 기간을 단축하며, 수술 후 재활까지 원내에서 순차적으로 진행합니다.
              청주를 비롯한 충북 지역 스포츠 인구가 빠른 복귀를 위해 찾는 스포츠 수술 전문 센터입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 대학병원급 무균 수술 센터 */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="badge bg-win-navy text-white mb-3"><i className="ph-bold ph-shield-check" aria-hidden="true" /> 무균 수술 환경</span>
            <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-2 mt-2">대학병원급 무균 수술 센터</h2>
            <p className="text-win-text-gray font-medium">4중 공기 정화 시스템으로 수술실 내부를 철저히 무균 상태로 유지합니다.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "ph-wind", title: "해파필터", sub: "(Hepa Filter)", desc: "수술실 내부로 유입되는 공기 중 세균과 바이러스를 정화해 무균 상태를 유지합니다.", dark: false },
              { icon: "ph-arrows-down-up", title: "라미나 플로우", sub: "(Laminar Flow)", desc: "층류 공조 시스템으로 온도·습도를 일정하게 유지하고 미세먼지를 효과적으로 배출합니다.", dark: false },
              { icon: "ph-thermometer", title: "최신 향온항습기", sub: "", desc: "정밀 공조 시스템으로 수술 내내 최적의 온도와 습도를 자동 유지합니다.", dark: false },
              { icon: "ph-lock-key", title: "양압시설 완비", sub: "", desc: "수술 중 내부를 양압으로 유지해 외부 오염 공기의 침입을 원천 봉쇄합니다.", dark: true },
            ].map((item) => (
              <div key={item.title} className={`bento-card p-7 border border-blue-100 flex flex-col${item.dark ? " bg-win-navy text-white" : ""}`}>
                <div className={`w-12 h-12 ${item.dark ? "bg-white/15 text-win-sky" : "bg-win-sky-light text-win-sky"} rounded-xl flex items-center justify-center mb-4 shrink-0`}>
                  <i className={`ph-bold ${item.icon} text-2xl`} aria-hidden="true" />
                </div>
                <p className={`font-black text-base mb-1 ${item.dark ? "text-white" : "text-win-navy"}`}>
                  {item.title}
                  {item.sub && <span className={`text-sm font-semibold ml-1 ${item.dark ? "text-gray-300" : "text-win-text-gray"}`}>{item.sub}</span>}
                </p>
                <p className={`text-sm font-medium leading-relaxed ${item.dark ? "text-gray-300" : "text-gray-500"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 수술 가능 분야 */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-2">수술 가능 분야</h2>
            <p className="text-win-text-gray font-medium">발목과 발의 모든 수술부터 사지 골절, 스포츠 손상 전반에 대한 수술과 치료, 재활을 모두 다룹니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bento-card p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center shrink-0">
                  <i className="ph-bold ph-person-simple-run text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-win-sky bg-win-sky-light px-2 py-0.5 rounded-full">무릎</span>
                  <h3 className="text-xl font-black text-win-text-dark mt-1">무릎 관절경 수술</h3>
                </div>
              </div>
              <p className="text-gray-600 font-medium text-base leading-relaxed">전·후방십자인대(ACL/PCL) 재건, 반월판 봉합·절제, 관절경 BMAC 연골 재생</p>
            </div>
            <div className="bento-card p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0 text-2xl">
                  💪
                </div>
                <div>
                  <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">어깨</span>
                  <h3 className="text-xl font-black text-win-text-dark mt-1">어깨 관절경 수술</h3>
                </div>
              </div>
              <p className="text-gray-600 font-medium text-base leading-relaxed">회전근개 관절경 봉합, 반복성 탈구·반카르트 복원술</p>
            </div>
            <div className="bento-card p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center shrink-0">
                  <i className="ph-bold ph-sneaker text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-purple-500 bg-purple-50 px-2 py-0.5 rounded-full">족부·발목</span>
                  <h3 className="text-xl font-black text-win-text-dark mt-1">족부·발목 수술</h3>
                </div>
              </div>
              <p className="text-gray-600 font-medium text-base leading-relaxed">무지외반증 MICA·MITA·DCMO 교정, 아킬레스건 봉합, 발목 골절 내고정, 인대 봉합술, 인공 관절, 유합술 등</p>
            </div>
            <div className="bento-card p-8 bg-win-navy text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/15 text-win-sky rounded-xl flex items-center justify-center shrink-0">
                  <i className="ph-bold ph-first-aid-kit text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-win-navy bg-win-sky px-2 py-0.5 rounded-full">외상·골절</span>
                  <h3 className="text-xl font-black text-white mt-1">외상·골절 수술</h3>
                </div>
              </div>
              <p className="text-gray-200 font-medium text-base leading-relaxed">손가락 손목 골절 내고정, 하지 모든 골절, 힘줄 봉합, 스포츠 골절 — 부분 마취·당일 수술 가능</p>
            </div>
          </div>
        </div>
      </section>

      {/* 치료 방법 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-10">치료 방법</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bento-card p-7 border border-blue-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center">
                  <i className="ph-bold ph-first-aid text-xl" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-win-text-dark">비수술 치료 — 수술 전 반드시 시도</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: "재생주사 / PRP", desc: "힘줄·인대 재생, 수술 없이 회복 가능한 경우 우선 적용" },
                  { title: "체외충격파 (ESWT)", desc: "힘줄 혈류 개선, 만성 힘줄염·건병증" },
                  { title: "재활치료", desc: "근력 강화·관절 안정화, 불안정성 보완" },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-2xl bg-win-bg border border-blue-50">
                    <p className="font-black text-win-navy mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bento-card p-7 bg-win-navy text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white/15 text-win-sky rounded-xl flex items-center justify-center">
                  <i className="ph-bold ph-knife text-xl" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black">수술 치료</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                {[
                  { title: "관절경 수술", sub: "0.5~1cm 절개 2~3곳" },
                  { title: "BMAC (자가골수세포이식술)", sub: "관절경을 통한 연골 재생 치료" },
                  { title: "닥터포디", sub: "인대·힘줄 재생 강화" },
                  { title: "골절 내고정술", sub: "부분 마취 가능" },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-2xl bg-white/10 text-center">
                    <p className="font-black text-win-sky text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-gray-300">{item.sub}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-sm text-gray-200">
                <p className="font-black text-win-sky mb-1.5">✓ 모든 수술 공통</p>
                당일 수술 가능 (적합 질환) · 부분 마취
              </div>
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
              <p className="text-win-sky text-xs font-bold uppercase tracking-wide mb-2">전국 관절경 BMAC 전문</p>
              <h3 className="text-xl font-black mb-3">BMAC 수술 가능</h3>
              <p className="text-gray-300 text-base font-medium leading-relaxed">전국에서 관절경으로 BMAC을 시행하는 의사는 극소수. 본원 박은수 원장이 직접 집도합니다.</p>
            </div>
            <div className="bento-card p-8 border border-blue-100">
              <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center mb-5">
                <i className="ph-bold ph-lightning text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-win-text-dark mb-3">당일 수술·조기 보행</h3>
              <p className="text-gray-600 text-base font-medium leading-relaxed">짧은 입원, 빠른 회복. 당일 퇴원 원칙, 조기 보행으로 타원 대비 2~3배 빠른 복귀.</p>
            </div>
            <div className="bento-card p-8 border border-blue-100">
              <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center mb-5">
                <i className="ph-bold ph-arrows-merge text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-win-text-dark mb-3">수술+재활 원스톱</h3>
              <p className="text-gray-600 text-base font-medium leading-relaxed">수술 집도의와 재활팀이 같은 건물 5층. 집도의가 재활 진행 상황을 직접 확인하고 조정합니다.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { initial: "P", info: "P님 (29세, 청주 흥덕구)", review: "축구 중 발목인대를 완전히 다쳤는데 다른 병원 예약이 수개월 뒤였습니다. 윈윈에서 당일 수술을 결정하고 빠른 재활 덕분에 팀에 복귀했습니다. 결정을 빨리 한 게 시즌을 지켰다고 생각합니다." },
              { initial: "L", info: "L님 (44세, 청주 서원구)", review: "무릎 연골 손상과 반월판 파열을 동시에 진단받아 두 병원을 돌았는데, 윈윈에서 관절경으로 두 부위를 한 번에 수술받고 3개월 재활 후 일상에 복귀했습니다." },
            ].map((r) => (
              <div key={r.initial} className="bento-card p-7 border border-blue-50 bg-win-bg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-win-sky-light text-win-sky rounded-full flex items-center justify-center font-black text-sm shrink-0">{r.initial}</div>
                  <div>
                    <p className="font-black text-win-text-dark text-sm">{r.info}</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[1,2,3,4,5].map(i => <i key={i} className="ph-fill ph-star text-yellow-400 text-xs" />)}
                    </div>
                  </div>
                  <span className="ml-auto text-xs text-gray-400">네이버 예약 후기</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 수술 후 회복 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-2">수술 후 회복 과정</h2>
          <p className="text-win-text-gray font-medium mb-10">MBO 기준. 수술 방법·질환에 따라 차이가 있습니다.</p>

          {/* Desktop horizontal timeline */}
          <div className="hidden md:grid grid-cols-5 gap-0 relative">
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-win-sky to-win-navy" />
            {[
              { badge: "당일", sub: "수술", style: "bg-win-navy text-white shadow-win", label: "재활 시작", detail: "부종·통증 조절" },
              { badge: "2주", sub: "수술", style: "bg-win-sky text-white shadow-sky", label: "보행 정상", detail: "관절 가동 시작" },
              { badge: "6주", sub: "수술", style: "bg-white text-win-navy border-2 border-win-sky shadow-win", label: "가동 범위 회복", detail: "근력 훈련 시작" },
              { badge: "3개월", sub: "수술", style: "bg-white text-win-navy border-2 border-win-sky shadow-win", label: "근력 재건", detail: "기능 훈련" },
              { badge: "6~8개월", sub: "수술", style: "bg-gradient-win text-white shadow-sky", label: "스포츠 복귀", detail: "테스트 통과" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center px-2">
                <div className={`w-16 h-16 ${s.style} rounded-2xl flex flex-col items-center justify-center mb-4 z-10`}>
                  <p className="text-[10px] font-bold">{s.sub}</p>
                  <p className="text-base font-black">{s.badge}</p>
                </div>
                <p className="text-sm font-bold text-win-text-dark mb-1">{s.label}</p>
                <p className="text-xs text-gray-500">{s.detail}</p>
              </div>
            ))}
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-3">
            {[
              { badge: "당일", style: "bg-win-navy text-white", label: "재활 시작", detail: "부종·통증 조절, 관절 가동 시작" },
              { badge: "6주", style: "bg-win-sky text-white", label: "근력 강화", detail: "가동 범위 회복, 균형 훈련" },
              { badge: "6~8개월", style: "bg-gradient-win text-white", label: "스포츠 복귀", detail: "메디컬 테스트 통과 후 현장 복귀" },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-blue-100">
                <div className={`w-14 h-14 ${s.style} rounded-xl flex flex-col items-center justify-center shrink-0`}>
                  <p className="text-[9px] font-bold">수술</p>
                  <p className="text-sm font-black">{s.badge}</p>
                </div>
                <div className="pt-1">
                  <p className="font-bold text-win-text-dark">{s.label}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-win-text-dark mb-8">자주 묻는 질문</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bento-card p-0 border border-blue-100 group">
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
      <section className="py-10 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-black text-win-text-dark mb-5">함께 보면 좋은 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/sports-rehab/rehabilitation", label: "재활치료", desc: "수술 후 재활 프로그램" },
              { href: "/sports-rehab/prp-iv", label: "재생주사·회복수액", desc: "PRP·수액 컨디셔닝" },
              { href: "/knee/acl-pcl", label: "십자인대 손상", desc: "ACL·PCL 재건술" },
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
