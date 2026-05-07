import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/schema";

const BASE = "https://winwinosc.com";

export const metadata: Metadata = {
  title: { absolute: "청주 스포츠 재활치료 — 수술 후 재활부터 스포츠 복귀까지 윈윈정형외과 수술재활센터" },
  description:
    "청주 정형외과 윈윈의 스포츠 재활센터. 수술 후 재활·메디컬 테스트·기능 훈련·컨디셔닝 프로그램. 4·5층 전용 재활 공간, 수술 집도의와 재활팀이 같은 건물에서 연속 케어.",
  keywords: "청주 스포츠 재활, 청주 재활치료, 스포츠 재활 청주, 수술 후 재활, 메디컬 테스트, ACL 재활, 청주 정형외과",
  alternates: { canonical: "/sports-rehab/rehabilitation" },
  openGraph: {
    title: "청주 스포츠 재활치료 — 수술 후 재활부터 스포츠 복귀까지 윈윈정형외과 수술재활센터",
    description:
      "청주 정형외과 윈윈의 스포츠 재활센터. 수술 후 재활·메디컬 테스트·기능 훈련·컨디셔닝 프로그램. 4·5층 전용 재활 공간, 수술 집도의와 재활팀이 같은 건물에서 연속 케어.",
    url: `${BASE}/sports-rehab/rehabilitation`,
    type: "website",
    images: [{ url: "https://storage.googleapis.com/imageswinwin/winwin-surgery.webp" }],
  },
};

const faqs = [
  {
    question: "청주에서 스포츠 재활 잘 하는 병원은 어디인가요?",
    answer:
      "윈윈정형외과 수술재활센터는 4층 물리치료실과 5층 전용 재활 공간·야외 테라스 기능 훈련장을 갖추고, 수술 집도의와 재활팀이 같은 건물에서 연속 케어를 제공합니다. 메디컬 테스트 기반 과학적 재활로 청주·충북권 스포츠 재활 전문 병원으로 자리잡고 있습니다.",
  },
  {
    question: "다른 병원에서 수술받았는데 재활만 받을 수 있나요?",
    answer:
      "가능합니다. 수술 기록·MRI를 지참하시면 바로 메디컬 테스트 후 재활을 시작할 수 있습니다. 중간 점검 상담도 가능합니다.",
  },
  {
    question: "선수가 아닌 일반 동호인도 받을 수 있나요?",
    answer:
      "가능합니다. 직장인 동호인부터 아마추어 선수까지 동일 프로그램을 운영합니다. 복귀 목표 종목과 시기를 말씀해주시면 맞춤 설계해드립니다.",
  },
  {
    question: "메디컬 테스트는 어떻게 예약하나요?",
    answer: "043-715-7591로 예약하시면 됩니다.",
  },
  {
    question: "수술 없이 재활만으로도 스포츠 복귀가 가능한가요?",
    answer:
      "가능합니다. 부분 파열·경도 손상·근육 부상 등에서 비수술 재활 복귀 사례가 다수 있습니다. 메디컬 테스트로 가능 여부를 객관적으로 판단해드립니다.",
  },
];

const therapists = [
  { name: "이진수", img: "https://cdn.imweb.me/thumbnail/20251115/34cfa5b43b653.jpg" },
  { name: "이준행", img: "https://cdn.imweb.me/thumbnail/20251115/ca31fb07c0614.jpg" },
  { name: "김민재", img: "https://cdn.imweb.me/thumbnail/20260209/471b5a068d14e.jpg" },
  { name: "엄해강", img: "https://cdn.imweb.me/thumbnail/20260318/395fcbd059741.jpg" },
  { name: "손진우", img: "https://cdn.imweb.me/thumbnail/20251115/1fde14105a6f0.jpg" },
  { name: "하연주", img: "https://cdn.imweb.me/thumbnail/20251115/73118c5a19be6.jpg" },
  { name: "남창섭", img: "https://cdn.imweb.me/thumbnail/20260209/ea9db08fbee87.jpg" },
];

export default function RehabilitationPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "홈", url: `${BASE}/` },
    { name: "스포츠 수술·재활", url: `${BASE}/sports-rehab` },
    { name: "재활치료", url: `${BASE}/sports-rehab/rehabilitation` },
  ]);
  const faqSchema = getFaqJsonLd(faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-win-bg">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="badge bg-win-navy text-white">
              <i className="ph-bold ph-heartbeat" aria-hidden="true" /> 스포츠 재활 전문
            </span>
            <span className="badge bg-win-sky-light text-win-sky">
              <i className="ph-bold ph-person-simple-run" aria-hidden="true" /> 재활치료
            </span>
            <span className="badge bg-green-50 text-green-700">
              <i className="ph-bold ph-chart-bar" aria-hidden="true" /> 메디컬 테스트
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-win-text-dark mb-5">
            청주 스포츠 재활치료
            <br />
            <span className="text-gradient">수술 후 재활부터 복귀까지</span>
          </h1>

          <p className="text-xl text-win-text-gray font-medium leading-relaxed mb-8">
            수술을 잘 해도 재활을 제대로 하지 않으면 복귀할 수 없습니다.
            <br />
            윈윈 스포츠 재활센터는 부상 직후부터 경기 복귀까지, 목표 복귀 시점에 맞춘 과학적 재활 프로그램을 운영합니다.
            <br />
            4층 전용 재활 공간 / 5층 야외 테라스 기능 훈련장에서 수술 집도의·재활팀이 함께 관리합니다.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10">
            <div className="bento-card p-5 text-center border border-blue-50">
              <p className="text-3xl font-black text-win-navy mb-1">4·5층</p>
              <p className="text-sm font-bold text-gray-600">전용 재활 공간</p>
              <p className="text-xs text-gray-400 mt-0.5">물리치료실 + 야외 테라스</p>
            </div>
            <div className="bento-card p-5 text-center border border-blue-50">
              <p className="text-3xl font-black text-win-sky mb-1">
                6~8<span className="text-lg">개월</span>
              </p>
              <p className="text-sm font-bold text-gray-600">ACL 복귀 목표</p>
              <p className="text-xs text-gray-400 mt-0.5">타원 평균 9~12개월 대비</p>
            </div>
          </div>

          <div className="aspect-[16/7] overflow-hidden rounded-[2rem] shadow-win-hover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://storage.googleapis.com/imageswinwin/rehabilitation.webp"
              alt="청주 스포츠 재활치료 전문 센터 — 수술 후 재활부터 스포츠 복귀까지 의료진·재활팀이 함께하는 윈윈정형외과 수술재활센터"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 재활 전문 의료진 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="badge bg-win-navy text-white mb-3">
              <i className="ph-bold ph-users-three" aria-hidden="true" /> 재활 전문 의료진
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-2 mt-2">재활 전담팀 소개</h2>
            <p className="text-win-text-gray font-medium">올림픽·국가대표 현장 경험을 갖춘 전문 치료사들이 직접 담당합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 강흠덕 본부장 */}
            <div className="bento-card p-8 border border-blue-100">
              <div className="flex flex-col items-center text-center mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://storage.googleapis.com/imageswinwin/sportscenter_director_kang_heumdeok.jpg"
                  alt="강흠덕 본부장"
                  className="w-36 h-36 rounded-2xl object-cover mb-4"
                />
                <p className="text-win-sky text-xs font-bold uppercase tracking-wide mb-1">스포츠센터 본부장</p>
                <h3 className="text-xl font-black text-win-text-dark">강흠덕</h3>
              </div>
              <div className="mb-4">
                <p className="text-xs font-black text-win-navy uppercase tracking-wide mb-2">학력</p>
                <ul className="space-y-1.5 text-sm text-gray-600 font-medium">
                  {["신구대학교 물리치료 전공", "용인대학교 체육학과", "용인대학교 일반대학원 체육학"].map((e) => (
                    <li key={e} className="flex items-start gap-2">
                      <i className="ph-bold ph-graduation-cap text-win-sky mt-0.5 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-xs font-black text-win-navy uppercase tracking-wide mb-2">주요 경력</p>
                <ul className="space-y-1.5 text-sm text-gray-600 font-medium">
                  {[
                    { text: "(주) 스포츠투아이 트레이닝 센터장", cur: true },
                    { text: "(전) 다병원 도수운동치료센터장", cur: false },
                    { text: "(주) 대한선수트레이닝 연구소장", cur: false },
                    { text: "(전) 국립중앙의료원 근무", cur: false },
                    { text: "(전) 두산베어스 프로야구단 근무", cur: false },
                    { text: "(전) 수원과학대학교 겸임교수", cur: false },
                    { text: "(현) 한국체육학회 회원", cur: false },
                    { text: "(전) 대한장애인체육회 전문체육위원", cur: false },
                    { text: "(전) 대한스포츠의학회 부회장", cur: false },
                  ].map((e) => (
                    <li key={e.text} className="flex items-start gap-2">
                      <i className={`ph-bold ph-check ${e.cur ? "text-win-sky" : "text-gray-300"} mt-0.5 shrink-0`} />
                      {e.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-win-navy text-xs font-black mb-2">국가대표 · 국제대회</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-win-navy text-white text-xs font-bold px-2.5 py-1 rounded-full">2009 WBC 국가대표</span>
                  <span className="bg-win-navy text-white text-xs font-bold px-2.5 py-1 rounded-full">2008 베이징 올림픽</span>
                  <span className="bg-win-sky-light text-win-sky text-xs font-bold px-2.5 py-1 rounded-full">1987 세계유도선수권</span>
                </div>
              </div>
            </div>

            {/* 김진택 센터장 */}
            <div className="bento-card p-8 bg-win-navy text-white">
              <div className="flex flex-col items-center text-center mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://storage.googleapis.com/imageswinwin/sportscenter_director_kim_jintaek.jpg"
                  alt="김진택 센터장"
                  className="w-36 h-36 rounded-2xl object-cover mb-4"
                />
                <p className="text-win-sky text-xs font-bold uppercase tracking-wide mb-1">스포츠센터장</p>
                <h3 className="text-xl font-black text-white">김진택</h3>
              </div>
              <div className="mb-4">
                <p className="text-win-sky text-xs font-black uppercase tracking-wide mb-2">학력 · 자격</p>
                <ul className="space-y-1.5 text-sm text-gray-300 font-medium">
                  {["대전대학교 물리치료학 박사 수료", "국제올림픽위원회(IOC) 스포츠물리치료사"].map((e) => (
                    <li key={e} className="flex items-start gap-2">
                      <i className="ph-bold ph-graduation-cap text-win-sky mt-0.5 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-win-sky text-xs font-black uppercase tracking-wide mb-2">현직</p>
                <ul className="space-y-1.5 text-sm text-gray-300 font-medium">
                  {[
                    "대전대학교 물리치료학과 겸임교수",
                    "대전대학교 보건의료대학원 스포츠물리치료 실습교수",
                    "대한양궁협회 의무분과위원",
                    "대한컬링연맹 의무분과위원",
                  ].map((e) => (
                    <li key={e} className="flex items-start gap-2">
                      <i className="ph-bold ph-check text-win-sky mt-0.5 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-win-sky text-xs font-black uppercase tracking-wide mb-2">주요 경력</p>
                <ul className="space-y-1.5 text-sm text-gray-300 font-medium">
                  {[
                    "(전) 국가대표정형외과 교육팀장",
                    "양궁대표팀 전담 트레이너 (2010–2020)",
                    "(전) 대한카누연맹 청소년대표팀 물리치료사",
                    "(전) 바디작 퍼스널트레이닝 센터 물리치료사",
                  ].map((e) => (
                    <li key={e} className="flex items-start gap-2">
                      <i className="ph-bold ph-check text-white/40 mt-0.5 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-win-sky text-xs font-black mb-2">국가대표 · 국제대회</p>
                <div className="flex flex-wrap gap-1.5">
                  {["2024 파리 올림픽", "2016 리우 올림픽", "2012 런던 올림픽"].map((e) => (
                    <span key={e} className="bg-win-sky/20 text-win-sky text-xs font-bold px-2.5 py-1 rounded-full">
                      {e}
                    </span>
                  ))}
                  {["아시안게임 2회", "세계선수권 5회"].map((e) => (
                    <span key={e} className="bg-white/15 text-gray-300 text-xs font-bold px-2.5 py-1 rounded-full">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-win-text-gray mb-4 uppercase tracking-wide">전담 치료사</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {therapists.map((t) => (
                <div key={t.name} className="bento-card p-5 border border-blue-100 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.img}
                    alt={`${t.name} 물리치료사`}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
                  />
                  <p className="font-black text-win-text-dark text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">물리치료사</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 이런 상황이라면 */}
      <section className="py-10 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="bento-card p-8 border border-blue-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-2xl flex items-center justify-center shrink-0">
                <i className="ph-bold ph-question text-2xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-win-text-dark">이런 상황이라면 스포츠 재활을 받으세요</h2>
                <p className="text-win-text-gray font-medium mt-1">1개 이상 해당하면 상담을 권장합니다.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "수술 후 재활 병원을 못 찾겠다", desc: "수술 후 재활이 필요한데 어디서 받을지 모르는 경우" },
                { title: "타원 수술 후 재활만 전문적으로", desc: "다른 병원에서 수술했지만 재활만 전문적으로 받고 싶은 경우" },
                { title: "재활 후 복귀했지만 재부상 반복", desc: "복귀 후에도 같은 부위 재부상이 계속되는 경우" },
                { title: "퍼포먼스 향상·부상 예방이 필요", desc: "부상 없이도 컨디셔닝 훈련이나 메디컬 테스트를 받고 싶은 경우" },
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

      {/* 스포츠 재활이란? */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-6">스포츠 재활이란?</h2>
          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-win mb-6">
            <p className="text-lg text-win-text-dark font-medium leading-relaxed">
              스포츠 재활은 부상 또는 수술 후 신체 기능을 회복하고{" "}
              <strong>최고 퍼포먼스로 복귀하는 전문화된 치료 과정</strong>입니다. 단순 물리치료와 달리, 종목별 동작
              분석·기능 훈련·메디컬 테스트·부상 예방 컨디셔닝을 포함합니다. 청주 윈윈정형외과 4·5층 스포츠 재활센터에서는
              야외 테라스를 활용한 기능 훈련까지 원내에서 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 재활 프로그램 4종 */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-2">재활 프로그램</h2>
            <p className="text-win-text-gray font-medium">목표와 상황에 따라 4가지 프로그램 중 맞춤 설계됩니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* 수술 후 재활 */}
            <div className="bento-card p-8 border border-blue-100 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center shrink-0">
                  <i className="ph-bold ph-bandaids text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-win-sky bg-win-sky-light px-2 py-0.5 rounded-full">
                    수술 환자
                  </span>
                  <h3 className="text-xl font-black text-win-text-dark mt-1">수술 후 재활</h3>
                </div>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed text-base mb-4">
                수술 직후부터 단계별로 관절 가동, 근력 재건, 복귀 기준 테스트까지 연속 케어합니다. 집도의가 직접 재활 진행
                상황을 확인하고 조정합니다.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-50">
                <p className="text-sm font-bold text-gray-400">주요 대상</p>
                <p className="text-sm text-gray-500 mt-1">
                  ACL·PCL·반월판·회전근개·아킬레스건·발목 인대·골절 수술 후 환자
                </p>
              </div>
            </div>

            {/* 스포츠 손상 재활 */}
            <div className="bento-card p-8 border border-blue-100 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <i className="ph-bold ph-person-simple-run text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                    부상 선수·동호인
                  </span>
                  <h3 className="text-xl font-black text-win-text-dark mt-1">스포츠 손상 재활</h3>
                </div>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed text-base mb-4">
                부위별 맞춤 치료로 기능을 회복하고 복귀 목표 시점을 설정합니다. 종목 특성에 맞춘 동작 훈련으로 실전 복귀를
                준비합니다.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-50">
                <p className="text-sm font-bold text-gray-400">주요 대상</p>
                <p className="text-sm text-gray-500 mt-1">염좌·타박·근육 부상 선수 및 아마추어 동호인</p>
              </div>
            </div>

            {/* 퍼포먼스 컨디셔닝 */}
            <div className="bento-card p-8 border border-blue-100 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center shrink-0">
                  <i className="ph-bold ph-barbell text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-purple-500 bg-purple-50 px-2 py-0.5 rounded-full">
                    건강한 선수·동호인
                  </span>
                  <h3 className="text-xl font-black text-win-text-dark mt-1">퍼포먼스 컨디셔닝</h3>
                </div>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed text-base mb-4">
                현재 부상 없이도 체력·민첩성·폭발력 향상과 부상 예방을 위한 과학적 훈련 프로그램입니다. 야외 테라스에서 기능
                훈련까지 진행합니다.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-50">
                <p className="text-sm font-bold text-gray-400">주요 대상</p>
                <p className="text-sm text-gray-500 mt-1">시즌 전 컨디셔닝이 필요한 아마추어·동호인 선수</p>
              </div>
            </div>

            {/* 메디컬 테스트 */}
            <div className="bento-card p-8 bg-win-navy text-white flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-white/15 text-win-sky rounded-xl flex items-center justify-center shrink-0">
                  <i className="ph-bold ph-chart-bar text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-win-navy bg-win-sky px-2 py-0.5 rounded-full">전 대상</span>
                  <h3 className="text-xl font-black text-white mt-1">메디컬 테스트</h3>
                </div>
              </div>
              <p className="text-gray-200 font-medium leading-relaxed text-base mb-4">
                재활의 시작점이자 복귀 기준 판정의 근거. 관절 가동 범위, 근력 대칭도, 고유감각 기능, 기능 동작 패턴을 수치로
                평가합니다.
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-sm font-bold text-gray-400">활용 시점</p>
                <p className="text-sm text-gray-300 mt-1">재활 시작 전 평가 / 복귀 가능 여부 판정(clearance)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 재활 치료 상세 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-2">재활 치료 상세</h2>
            <p className="text-win-text-gray font-medium">메디컬 테스트 기반으로 설계되는 단계별 재활 프로세스입니다.</p>
          </div>

          <div className="bento-card p-7 border border-blue-100 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center">
                <i className="ph-bold ph-chart-bar text-xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-win-text-dark">메디컬 테스트 — 평가 항목</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["관절 가동 범위", "근력 대칭도", "고유감각 기능", "기능 동작 테스트"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-win-bg border border-blue-100 rounded-xl text-sm font-bold text-win-navy"
                >
                  {t}
                </span>
              ))}
              <span className="px-3 py-1.5 bg-win-navy text-white rounded-xl text-sm font-bold">
                복귀 기준 Clearance
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-3 font-medium">
              수치 기반 복귀 가능 여부 판정 — &ldquo;괜찮을 것 같다&rdquo;가 아닌 객관적 수치로 결정합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 왜 윈윈인가? */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-10">왜 윈윈정형외과인가?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bento-card p-8 bg-win-navy text-white">
              <div className="w-12 h-12 bg-white/15 text-win-sky rounded-xl flex items-center justify-center mb-5">
                <i className="ph-bold ph-medal text-2xl" aria-hidden="true" />
              </div>
              <p className="text-win-sky text-xs font-bold uppercase tracking-wide mb-2">충북권 스포츠 재활 전문</p>
              <h3 className="text-xl font-black mb-3">수술·재활 원스톱</h3>
              <p className="text-gray-300 text-base font-medium leading-relaxed">
                충북권에서 수술과 재활을 같은 건물에서 연속으로 진행할 수 있는 곳은 드뭅니다. 집도 원장이 재활 진행 상황을
                직접 확인하고 조정합니다.
              </p>
            </div>

            <div className="bento-card p-8 border border-blue-100">
              <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center mb-5">
                <i className="ph-bold ph-target text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-win-text-dark mb-3">목표 복귀 시점 기반 설계</h3>
              <p className="text-gray-600 text-base font-medium leading-relaxed">
                &ldquo;언제 복귀가 목표인가&rdquo;에서 시작해 역산한 재활 일정. 막연한 회복 대신 수치·기간 기준으로
                제시합니다. ACL 수술 후 타원 평균 9~12개월 vs 본원 집중 재활 <strong>6~8개월 목표</strong>.
              </p>
            </div>

            <div className="bento-card p-8 border border-blue-100">
              <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center mb-5">
                <i className="ph-bold ph-users-three text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-win-text-dark mb-3">전문 의료진 직접 케어</h3>
              <p className="text-gray-600 text-base font-medium leading-relaxed">
                박은수 원장(수술 후 재활 연계·복귀 기준 최종 확인), 곽규완 원장·김민경 원장(스포츠 재활 비수술 진료·재활
                관리)이 함께 합니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                init: "P",
                who: "P님 (24세, 청주 흥덕구)",
                text: "타 병원에서 ACL 재건 수술 후 6개월 재활을 받았는데도 복귀 기준을 통과하지 못했습니다. 윈윈으로 옮겨서 메디컬 테스트를 다시 받았더니 근력 불균형이 발견됐고, 맞춤 재활 2개월 만에 팀에 복귀할 수 있었습니다. 재활도 병원 선택이 중요하다는 걸 실감했습니다.",
              },
              {
                init: "L",
                who: "L님 (42세, 청주 서원구)",
                text: "무릎 수술 후 타원 재활을 받았는데 계단에서 여전히 통증이 남았습니다. 윈윈 메디컬 테스트에서 대퇴사두근 근력 불균형이 확인됐고, 3개월 맞춤 재활 후 계단을 자유롭게 오르내릴 수 있게 됐습니다. 수술만큼 재활도 중요하더라고요.",
              },
            ].map((r) => (
              <div key={r.init} className="bento-card p-7 border border-blue-50 bg-win-bg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-win-sky-light text-win-sky rounded-full flex items-center justify-center font-black text-sm shrink-0">
                    {r.init}
                  </div>
                  <div>
                    <p className="font-black text-win-text-dark text-sm">{r.who}</p>
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

      {/* 재활 타임라인 */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-2">재활 타임라인</h2>
          <p className="text-win-text-gray font-medium mb-10">
            아래는 ACL 수술 기준 일반적인 재활 일정입니다. 질환·수술 방법에 따라 다를 수 있습니다.
          </p>

          {/* Desktop Timeline */}
          <div className="hidden md:grid grid-cols-5 gap-0 relative mb-12">
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-win-sky to-win-navy" />
            {[
              { tier: "navy", label: "재활 시작", sub: "부종 감소\n통증 조절", mark: "당일" },
              { tier: "sky", label: "관절 가동", sub: "ROM 회복\n보행 훈련", mark: "2주" },
              { tier: "outline", label: "근력·균형", sub: "근력 강화\n협응 훈련", mark: "6주" },
              { tier: "outline", label: "기능 훈련", sub: "종목별 동작\n지구력 강화", mark: "3개월" },
              { tier: "gradient", label: "현장 복귀", sub: "테스트 통과\n복귀 확정", mark: "6~8개월" },
            ].map((s) => {
              const box =
                s.tier === "navy"
                  ? "bg-win-navy text-white shadow-win"
                  : s.tier === "sky"
                  ? "bg-win-sky text-white shadow-sky"
                  : s.tier === "gradient"
                  ? "bg-gradient-win text-white shadow-sky"
                  : "bg-white text-win-navy border-2 border-win-sky shadow-win";
              return (
                <div key={s.mark} className="flex flex-col items-center text-center px-2 relative">
                  <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center mb-4 z-10 ${box}`}>
                    <p className="text-xs font-bold">수술</p>
                    <p className="text-lg font-black">{s.mark}</p>
                  </div>
                  <p className="text-sm font-bold text-win-text-dark mb-1">{s.label}</p>
                  <p className="text-xs text-gray-500 whitespace-pre-line">{s.sub}</p>
                </div>
              );
            })}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-3 mb-10">
            {[
              { tier: "navy", mark: "당일", label: "재활 시작", detail: "부종 감소, 통증 조절, 관절 가동 시작" },
              { tier: "sky", mark: "6주", label: "근력·균형 강화", detail: "근력 강화, 균형·협응 훈련" },
              { tier: "outline", mark: "3개월", label: "기능 훈련", detail: "스포츠 특이적 동작·야외 테라스 훈련" },
              { tier: "gradient", mark: "6~8개월", label: "현장 복귀", detail: "메디컬 테스트 통과 후 최종 복귀 확정" },
            ].map((s) => {
              const box =
                s.tier === "navy"
                  ? "bg-win-navy text-white"
                  : s.tier === "sky"
                  ? "bg-win-sky text-white"
                  : s.tier === "gradient"
                  ? "bg-gradient-win text-white"
                  : "bg-white border-2 border-win-sky text-win-navy";
              return (
                <div key={s.mark} className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-blue-100">
                  <div className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center shrink-0 ${box}`}>
                    <p className="text-[9px] font-bold">수술</p>
                    <p className="text-sm font-black">{s.mark}</p>
                  </div>
                  <div className="pt-1">
                    <p className="font-bold text-win-text-dark">{s.label}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{s.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-2">자주 묻는 질문</h2>
          <p className="text-win-text-gray font-medium mb-10">
            스포츠 재활에 대해 환자분들이 가장 많이 묻는 질문에 답변드립니다.
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bento-card border border-blue-100 group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none outline-none">
                  <span className="font-black text-win-text-dark text-base pr-4">{faq.question}</span>
                  <i className="ph-bold ph-plus faq-icon text-win-sky text-xl shrink-0" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 font-medium leading-relaxed text-base border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
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
              { href: "/sports-rehab/surgery-center", icon: "ph-knife", label: "수술 센터", desc: "스포츠 수술 전문" },
              { href: "/sports-rehab/prp-iv", icon: "ph-syringe", label: "재생주사·회복수액", desc: "PRP·BMAC 재생치료" },
              { href: "/sports-rehab/pro-team", icon: "ph-trophy", label: "프로구단 주치의", desc: "스포츠 의학 전문" },
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
