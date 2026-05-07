import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/schema";

const BASE = "https://winwinosc.com";

export const metadata: Metadata = {
  title: { absolute: "청주 프로구단 팀닥터 — K리그 충북청주FC·H리그 핸드볼·KLPGA 협력 윈윈정형외과" },
  description:
    "청주 정형외과 윈윈의 팀닥터 경험. KLPGA·KGA·충북청주FC·H리그 핸드볼·클라이밍 세계선수권 협력 병원. 선수 및 팀 케어 프로그램, 현장 경험으로 검증된 스포츠 의학.",
  keywords: "청주 스포츠 의학, 청주 팀닥터, 충북청주FC 주치의, KLPGA 의무지원, 청주 정형외과",
  alternates: { canonical: "/sports-rehab/pro-team" },
  openGraph: {
    title: "청주 프로구단 팀닥터 — K리그 충북청주FC·H리그 핸드볼·KLPGA 협력 윈윈정형외과",
    description: "청주 정형외과 윈윈의 팀닥터 경험. KLPGA·KGA·충북청주FC·H리그 핸드볼·클라이밍 세계선수권 협력 병원.",
    url: `${BASE}/sports-rehab/pro-team`,
    type: "website",
    images: [{ url: "https://storage.googleapis.com/imageswinwin/pro-team.webp" }],
  },
};

const faqs = [
  { question: "청주에서 스포츠 의학 전문 팀닥터 진료를 받을 수 있나요?", answer: "윈윈정형외과 수술재활센터는 충북청주FC·KLPGA 팀닥터 경험을 갖춘 박은수 원장이 선수 및 팀 케어를 담당합니다. 일반 동호인도 동일 수준의 진료를 받을 수 있습니다." },
  { question: "팀닥터 계약이나 단체 의무 지원 문의는 어떻게 하나요?", answer: "대표전화 043-715-7591 또는 수술예약 010-5785-7591로 문의하시면 됩니다." },
  { question: "일반 운동 동호인도 팀닥터 수준의 진료를 받을 수 있나요?", answer: "가능합니다. 선수와 동일한 치료와 재활 프로그램을 이용할 수 있습니다. 종목과 부상 상황을 고려한 맞춤 진료를 제공합니다." },
  { question: "메디컬 테스트는 어떻게 이루어지나요?", answer: "관절 가동 범위, 근력 대칭도, 기능 동작 평가로 구성됩니다. 재활 계획 수립과 복귀 기준 설정의 객관적 기준 도구입니다." },
  { question: "시즌 중 부상이 생기면 얼마나 빨리 진료받을 수 있나요?", answer: "선수 우선 예약으로 당일 진료·수술 결정이 가능합니다. 긴급 시 010-5785-7591로 연락하세요." },
];

function renderAnswerWithPhoneLinks(text: string) {
  const phonePattern = /^\d{2,3}-\d{3,4}-\d{4}$/;
  const parts = text.split(/(\d{2,3}-\d{3,4}-\d{4})/g);
  return parts.map((part, idx) => {
    if (phonePattern.test(part)) {
      const href = `tel:+82${part.replace(/-/g, "").replace(/^0/, "")}`;
      return (
        <a key={idx} href={href} className="text-win-sky font-bold">
          {part}
        </a>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

const partners = [
  { name: "KLPGA · KGA", desc: "한국여자프로골프 의무지원", emoji: "⛳" },
  { name: "충북청주FC", desc: "팀닥터", emoji: "⚽" },
  { name: "H리그 핸드볼 지정 병원", desc: "지정 병원", emoji: "🤾" },
  { name: "클라이밍 세계선수권", desc: "공식 의무 지원", emoji: "🧗" },
  { name: "세종복사꽃마라톤", desc: "대회 의무 지원", emoji: "🏃" },
  { name: "무심천 마라톤 대회", desc: "대회 의무 지원", emoji: "🏃" },
  { name: "블랙야크 트레일러닝", desc: "클럽데이·부모산 대회", emoji: "🏔️" },
];

export default function ProTeamPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "홈", url: `${BASE}/` },
    { name: "스포츠 수술·재활", url: `${BASE}/sports-rehab` },
    { name: "프로구단 주치의", url: `${BASE}/sports-rehab/pro-team` },
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
            <span className="text-win-navy font-semibold">프로구단 주치의</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="badge bg-win-navy text-white"><i className="ph-bold ph-trophy" aria-hidden="true" /> 팀닥터 경험</span>
            <span className="badge bg-win-sky-light text-win-sky"><i className="ph-bold ph-medal" aria-hidden="true" /> 스포츠 재활 전문</span>
            <span className="badge bg-green-50 text-green-700"><i className="ph-bold ph-users" aria-hidden="true" /> 선수·팀 케어</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-win-text-dark mb-5">
            청주 프로구단 주치의
            <br /><span className="text-gradient">K리그·KLPGA·핸드볼 협력 병원</span>
          </h1>
          <p className="geo-speakable text-xl text-win-text-gray font-medium leading-relaxed mb-8">
            프로 선수에게 적용한 수술·재활 노하우가 그대로 여러분의 치료에 쓰입니다. 현장에서 검증된 스포츠 의학으로 빠른 복귀를 돕겠습니다.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-10">
            {[
              { value: "KLPGA", label: "공식 의무지원", sub: "KGA 포함", color: "text-win-navy" },
              { value: "충북청주FC", label: "팀닥터", sub: "축구 전문 현장 경험", color: "text-win-sky" },
              { value: "5+", label: "협력 종목·대회", sub: "클라이밍·마라톤 등", color: "text-green-600" },
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
            <img src="https://storage.googleapis.com/imageswinwin/pro-team.webp" alt="청주 프로구단 주치의 — K리그 충북청주FC·KLPGA 골프 협력 스포츠 의학 전문 윈윈정형외과 수술재활센터" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 팀닥터가 필요한 순간 */}
      <section className="py-10 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="bento-card p-8 border border-blue-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-2xl flex items-center justify-center shrink-0">
                <i className="ph-bold ph-question text-2xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-win-text-dark">팀닥터의 경험으로 치료하세요</h2>
                <p className="text-win-text-gray font-medium mt-1">1개 이상 해당하면 상담을 권장합니다.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "시즌 중 부상 — 빠른 복귀 판단 필요", desc: "수술 여부·복귀 시점을 빠르게 결정해야 하는 경우" },
                { title: "경기 전·후 컨디셔닝 관리", desc: "주사·수액 처방으로 경기 성과와 회복을 최적화" },
                { title: "선수 건강 검진·메디컬 테스트", desc: "시즌 전·후 컨디션 점검, 부상 위험 조기 발굴" },
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

      {/* 프로구단 주치의란? */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-6">프로구단 주치의란?</h2>
          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-win">
            <p className="text-lg text-win-text-dark font-medium leading-relaxed">
              윈윈정형외과 수술재활센터는 KLPGA·KGA·충북청주FC 팀닥터, 클라이밍 세계선수권, 세종복사꽃마라톤 등 <strong>다양한 종목의 공식 의무 지원</strong>을 담당하고 있습니다.
              현장 경험을 바탕으로 부상 예방부터 빠른 복귀까지 선수 맞춤 의료 서비스를 제공합니다.
              청주를 거점으로 충북권 스포츠 의학의 중심 역할을 수행하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 협력 구단·대회 */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-2">협력 구단·대회</h2>
            <p className="text-win-text-gray font-medium">다양한 종목 현장에서 쌓은 실전 경험이 진료의 차별화입니다.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map((p) => (
              <div key={p.name} className="bento-card p-6 border border-blue-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center shrink-0 text-2xl">{p.emoji}</div>
                <div>
                  <p className="font-black text-win-text-dark">{p.name}</p>
                  <p className="text-sm text-gray-500">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 종목 무관, 선수 중심 프로그램 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-10">종목 무관, 선수 중심 프로그램</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bento-card p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center">
                  <i className="ph-bold ph-user text-xl" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-win-text-dark">개인 선수 케어</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { title: "우선 예약·당일 진료", sub: "시즌 중 부상 발생 시 당일 진료·수술 결정 가능" },
                  { title: "메디컬 테스트", sub: "신체 능력·기능 평가, 개인별 재활 계획 수립" },
                  { title: "재생주사 / 회복수액", sub: "경기 일정 맞춤 컨디셔닝, PRP·수액 병행" },
                  { title: "시즌 중·비시즌 분리 재활", sub: "가동 제한 최소화 재활 vs 비시즌 집중 재활" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-b-0 last:pb-0">
                    <i className="ph-bold ph-check-circle text-win-sky mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-win-text-dark text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bento-card p-8 bg-win-navy text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white/15 text-win-sky rounded-xl flex items-center justify-center">
                  <i className="ph-bold ph-users-three text-xl" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black">팀 전체 케어</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { title: "경기·대회 현장 의무 지원", sub: "경기장 현장 상주 또는 비상 대응" },
                  { title: "팀 선수 정기 건강 검진", sub: "시즌 전·후 컨디션 점검, 부상 위험 선수 조기 발굴" },
                  { title: "부상 예방 프로그램", sub: "트레이닝 스태프 협력, 취약 부위 강화 운동 처방" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 pb-3 border-b border-white/10 last:border-b-0 last:pb-0">
                    <i className="ph-bold ph-check text-win-sky mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-sm">{item.title}</p>
                      <p className="text-xs text-gray-300 mt-0.5">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-white/10 text-sm text-gray-300">
                팀 케어 문의 : <a href="tel:01057857591" className="text-win-sky font-bold hover:underline">010-5785-7591</a>
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
              <p className="text-win-sky text-xs font-bold uppercase tracking-wide mb-2">충북권 유일 팀닥터 거점</p>
              <h3 className="text-xl font-black mb-3">실전 팀닥터 경험</h3>
              <p className="text-gray-300 text-base font-medium leading-relaxed">충북권에서 프로 스포츠 팀닥터 경험을 갖춘 정형외과 센터. 경기 중 부상 판단력은 진료실에서만 길러지지 않습니다.</p>
            </div>
            <div className="bento-card p-8 border border-blue-100">
              <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center mb-5">
                <i className="ph-bold ph-arrows-merge text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-win-text-dark mb-3">부상부터 복귀까지 원스톱</h3>
              <p className="text-gray-600 text-base font-medium leading-relaxed">부상 발생 → 진단 → 수술 → 재활까지 담당 의사가 직접 연결. 타원 의뢰·전원 없이 한 곳에서 완결됩니다.</p>
            </div>
            <div className="bento-card p-8 border border-blue-100">
              <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center mb-5">
                <i className="ph-bold ph-person-simple-run text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-win-text-dark mb-3">동호인도 선수처럼</h3>
              <p className="text-gray-600 text-base font-medium leading-relaxed">일반 동호인도 프로 선수와 동일한 메디컬 테스트·재활 프로그램을 이용할 수 있습니다.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { initial: "P", info: "P님 (22세 축구선수, 청주)", review: "충북청주FC 경기 중 발목 부상으로 박은수 원장을 만났습니다. 당일 검사 및 MRI 판독 후 빠르게 수술 여부를 결정 받고, 당일 수술 후 재활 3개월 만에 팀에 복귀했습니다. 팀닥터가 아니었다면 몇 주가 더 걸렸을 거라고 생각합니다." },
              { initial: "L", info: "L님 (35세 KLPGA 선수, 청주)", review: "투어 시즌 중 어깨 통증이 심해졌는데 수술하면 시즌이 끝날 상황이었습니다. 박은수 원장이 주사+재활 처방을 내려 시즌을 완주했고, 비시즌에 재활로 마무리해 다음 시즌엔 통증 없이 출전했습니다." },
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

      {/* 선수 케어 프로세스 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-win-text-dark mb-2">선수 및 팀 케어 프로세스</h2>
          <p className="text-win-text-gray font-medium mb-8">부상 발생부터 현장 복귀까지 한 팀이 담당합니다.</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8">
            {[
              { sub: "현장 응급", label: "부상 발생", dark: true },
              { sub: "정밀 검사", label: "메디컬 테스트", sky: true },
              { sub: "전문의 판단", label: "치료 방향", plain: true },
              { sub: "원스톱 진행", label: "비수술, 수술, 재활", plain: true },
              { sub: "기준 통과", label: "복귀 테스트", plain: true },
              { sub: "시즌 합류", label: "현장 복귀", gradient: true },
            ].map((s) => (
              <div key={s.label} className={`p-4 rounded-2xl text-center ${s.dark ? "bg-win-navy text-white" : s.sky ? "bg-win-sky-light border border-win-sky/20" : s.gradient ? "bg-gradient-win text-white" : "bg-win-bg border border-blue-100"}`}>
                <p className="text-xs font-bold text-win-sky mb-1">{s.sub}</p>
                <p className={`font-black text-sm ${s.dark || s.gradient ? "text-white" : "text-win-text-dark"}`}>{s.label}</p>
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
              <details key={i} className="bento-card p-0 border border-blue-100">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-win-text-dark">
                  {faq.question}
                  <i className="ph-bold ph-plus faq-icon text-win-sky shrink-0 ml-4" aria-hidden="true" />
                </summary>
                <p className="px-6 pb-6 text-gray-600 font-medium leading-relaxed">{renderAnswerWithPhoneLinks(faq.answer)}</p>
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
              { href: "/sports-rehab/surgery-center", label: "수술 센터", desc: "당일 수술 전문" },
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
