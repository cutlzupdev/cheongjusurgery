import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../public/images/hero.jpg";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mt-0 md:mt-8">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            <span className="badge bg-win-navy/10 text-win-navy">
              <i className="ph-bold ph-lightning" aria-hidden="true" /> 당일 수술
            </span>
            <span className="badge bg-green-50 text-green-700">
              <i className="ph-bold ph-drop" aria-hidden="true" /> PRP 재생 주사
            </span>
            <span className="badge bg-orange-50 text-orange-600">
              <i className="ph-bold ph-trophy" aria-hidden="true" /> 스포츠 재활 원스톱
            </span>
            <span className="badge bg-yellow-50 text-yellow-700">
              <i className="ph-bold ph-medal" aria-hidden="true" /> 시사매거진 선정 100대 명의
            </span>
          </div>

          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tight text-win-text-dark leading-[1.1] mb-6">
            청주 정형외과,
            <br className="hidden sm:block" />
            <span className="text-gradient">빠른 수술 · 빠른 복귀.</span>
          </h1>

          <p className="text-lg md:text-xl text-win-text-gray font-medium max-w-3xl mx-auto leading-relaxed mb-10">
            족부·발목·무릎·어깨·척추·골절 전문의가{" "}
            <strong className="text-win-text-dark">직접 치료</strong>합니다.
            <br className="hidden sm:block" />
            부분 마취, 당일 수술, PRP 치료, 스포츠 수술·재활 원스톱까지 —
            <br className="hidden sm:block" />
            청주 수술 병원의 새 기준,{" "}
            <strong className="text-win-navy">윈윈정형외과 수술재활센터</strong>
            입니다.
          </p>

          <div className="relative mx-auto max-w-5xl rounded-2xl md:rounded-[2.5rem] p-0 md:p-2 bg-gradient-to-br from-blue-100 to-sky-50 shadow-2xl mb-10 border border-blue-200/40">
            <div className="overflow-hidden rounded-2xl md:rounded-[2rem] bg-gradient-win aspect-[4/3] md:aspect-video relative">
              <Image
                src={heroImage}
                alt="윈윈정형외과 수술재활센터 의료진 팀"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1024px"
                className="object-cover"
                priority
                fetchPriority="high"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://naver.me/GALlHZFl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-win-navy hover:bg-win-navy-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-win hover:-translate-y-1"
              aria-label="네이버 예약하기"
            >
              <i className="ph-bold ph-calendar-check mr-2" aria-hidden="true" />
              진료 예약하기
            </a>
            <a
              href="tel:+82437157591"
              className="w-full sm:w-auto bg-white border-2 border-win-sky text-win-navy px-10 py-4 rounded-full font-bold text-lg transition-all hover:bg-win-sky-light flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              <i className="ph-bold ph-phone" aria-hidden="true" /> 043-715-7591
            </a>
            <a
              href="http://pf.kakao.com/_wxeRxfG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#FEE500] hover:bg-[#ebd300] text-[#191919] px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
              aria-label="카카오톡 상담"
            >
              <i className="ph-fill ph-chat-circle" aria-hidden="true" /> 카카오 상담
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="py-10 px-6 bg-white border-y border-blue-50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl font-black text-win-navy mb-1">당일</p>
            <p className="text-sm font-semibold text-win-text-gray">수술 가능</p>
          </div>
          <div>
            <p className="text-4xl font-black text-win-sky mb-1">무균</p>
            <p className="text-sm font-semibold text-win-text-gray">대학병원급 수술실</p>
          </div>
          <div>
            <p className="text-4xl font-black text-win-navy mb-1">수술</p>
            <p className="text-sm font-semibold text-win-text-gray">전문의 직접 치료</p>
          </div>
          <div>
            <p className="text-4xl font-black text-win-sky mb-1">모든 부위</p>
            <p className="text-sm font-semibold text-win-text-gray">PRP 재생주사</p>
          </div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY */}
      <section id="about" className="py-24 px-6 bg-win-bg">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-win-text-dark">
            윈윈정형외과의 약속
          </h2>
          <p className="text-xl text-win-text-gray font-medium max-w-3xl mx-auto leading-relaxed">
            수술이 끝이 아닙니다.{" "}
            <strong className="text-win-text-dark">일상과 운동으로의 빠른 복귀</strong>까지가 우리의
            목표입니다. 족부·발목·무릎·어깨·척추 전문의가 직접 진단하고 치료합니다.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bento-card p-10 bg-white">
            <div className="w-14 h-14 bg-win-sky-light text-win-sky rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <i className="ph-bold ph-magnifying-glass text-3xl" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-win-text-dark">01. 정확한 진단</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              <strong className="text-win-text-dark">
                체중부하 X-ray 와 CT, 보행검사, 고성능 정밀 초음파
              </strong>
              로 다른 병원에서 놓친 원인까지 정확히 파악합니다. 진단이 정확해야 치료가 빠릅니다.
            </p>
          </div>
          <div className="bento-card p-10 bg-win-navy text-white">
            <div className="w-14 h-14 bg-white/15 text-win-sky rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <i className="ph-bold ph-lightning text-3xl" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-black mb-4">02. 당일 수술</h3>
            <p className="text-gray-300 font-medium leading-relaxed">
              족부·발목·골절 대부분의 수술을{" "}
              <strong className="text-white">부분 마취, 금식 없이 당일</strong> 시행합니다.
            </p>
          </div>
          <div className="bento-card p-10 bg-white">
            <div className="w-14 h-14 bg-win-sky-light text-win-sky rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <i className="ph-bold ph-person-simple-run text-3xl" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-win-text-dark">03. 빠른 재활·복귀</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              수술 후 재활까지 원스톱으로 관리합니다. 치료사 또한 모두 전문가로 구성되어 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENT HIGHLIGHTS */}
      <section id="treatments" className="bg-white">
        <TreatmentBlock
          badge="스포츠 수술·재활 원스톱"
          badgeColor="bg-orange-50 text-orange-600"
          tagColor="bg-orange-50 text-orange-600"
          title="스포츠 수술·재활"
          descriptionNode={
            <>
              선수부터 생활 스포츠인까지. 수술 후 재활부터 부상 예방 교육, 메디컬 테스트까지{" "}
              <strong className="text-win-text-dark font-bold">원스톱</strong>으로 제공합니다.{" "}
              <strong className="text-win-text-dark font-bold">복귀 속도 최우선</strong>의 재활 프로그램.
            </>
          }
          tags={["수술 후 재활", "재생주사·PRP", "물리치료", "부상 예방 교육", "메디컬 테스트"]}
          href="/sports-rehab/surgery-center"
          ctaLabel="스포츠 재활 자세히 보기"
          image="https://storage.googleapis.com/imageswinwin/winwin-sports-rehab-performance.jpg"
          imageAlt="윈윈정형외과 스포츠 재활"
        />
        <TreatmentBlock
          reverse
          bg="bg-win-bg"
          badge="무릎·어깨 수술·재활"
          badgeColor="bg-win-sky-light text-win-sky"
          tagColor="bg-win-navy/8 text-win-navy"
          title="무릎 · 어깨"
          descriptionNode={
            <>
              관절염 PRP 주사부터 인대 재건, 회전근개 치료까지.{" "}
              <strong className="text-win-text-dark font-bold">스포츠 수술·재활 전문의</strong>가 수술 이후 복귀까지 전 과정을 함께합니다. 빠른 재활, 빠른 스포츠 복귀.
            </>
          }
          tags={["무릎 관절염", "반월판 연골", "십자인대", "회전근개 파열", "오십견", "석회성 건염"]}
          href="/knee/osteoarthritis"
          ctaLabel="무릎·어깨 자세히 보기"
          image="https://storage.googleapis.com/imageswinwin/winwin-sports-joint-rehab.jpg"
          imageAlt="윈윈정형외과 무릎·어깨 관절 스포츠 재활"
        />
        <TreatmentBlock
          badge="족부 수술 전문"
          badgeColor="bg-win-sky-light text-win-sky"
          tagColor="bg-win-navy/8 text-win-navy"
          title="족부 수술"
          descriptionNode={
            <>
              <strong className="text-win-text-dark font-bold">무지외반증 MICA·MITA·DCMO</strong> 교정술부터 발가락 변형, 족저근막염, 통풍까지. 모든 수술은{" "}
              <strong className="text-win-text-dark font-bold">최소 절개 수술</strong>을 포함하여, 모든 수술은 환자에게 적합한 방법의 선택을 원칙으로 합니다. 목발 없는 보행을 우선시하여 일상으로의 빠른 복귀를 지향합니다.
            </>
          }
          tags={["무지외반증", "족저근막염", "류마티스 변형", "지간신경종", "부주상골", "통풍"]}
          href="/foot/hallux-valgus"
          ctaLabel="족부 수술 자세히 보기"
          image="https://storage.googleapis.com/imageswinwin/winwin-minimally-invasive-foot-surgery.jpg"
          imageAlt="윈윈정형외과 최소침습 족부 수술 청주"
        />
        <TreatmentBlock
          reverse
          bg="bg-win-bg"
          badge="발목 수술·인대·연골"
          badgeColor="bg-win-navy/10 text-win-navy"
          tagColor="bg-win-navy/8 text-win-navy"
          title="발목 수술"
          descriptionNode={
            <>
              발목 인대, 아킬레스건 부터 관절 연골 손상까지 빠른 회복을 목표로 합니다. 골연골염의 경우 국내에서 관절경으로{" "}
              <strong className="text-win-text-dark font-bold">BMAC 수술</strong>이 가능한 몇 안 되는 병원입니다.
            </>
          }
          tags={["인대 파열", "아킬레스건 파열", "연골 손상 BMAC", "발목 관절염", "골연골염 BMAC"]}
          href="/ankle/ligament-tendinitis"
          ctaLabel="발목 수술 자세히 보기"
          image="https://storage.googleapis.com/imageswinwin/winwin-ankle-arthroscopy-bmac.jpg"
          imageAlt="윈윈정형외과 발목 관절경 BMAC 수술 청주"
        />
        <TreatmentBlock
          noBorder
          badge="척추·팔·손·외상골절"
          badgeColor="bg-win-navy/10 text-win-navy"
          tagColor="bg-win-navy/8 text-win-navy"
          title="척추 · 팔·손 · 골절"
          descriptionNode={
            <>
              목·허리 디스크는 <strong className="text-win-text-dark font-bold">비수술 우선, 재활 협진</strong>. 테니스·골프엘보는 PRP·ESWT로 빠른 회복. 척추·팔·손·외상골절 ,골절은{" "}
              <strong className="text-win-text-dark font-bold">진료시간 내 상시 접수, 부분 마취·금식 없이 당일 수술</strong> 가능합니다.
            </>
          }
          tags={["허리 디스크", "협착증", "테니스·골프 엘보", "방아쇠수지", "골절 당일 수술"]}
          href="/spine/lumbar"
          ctaLabel="척추·골절 자세히 보기"
          image="https://storage.googleapis.com/imageswinwin/winwin-spine-hand-fracture-care.jpg"
          imageAlt="윈윈정형외과 척추·손·골절 당일 수술 청주"
        />
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-24 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-win-text-dark mb-4">
              왜 윈윈정형외과인가?
            </h2>
            <p className="text-xl text-win-text-gray font-medium max-w-2xl mx-auto">
              충북권에서 이 모든 것을 한 병원에서 제공하는 곳은 드뭅니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DiffCard
              span="lg:col-span-2"
              dark
              icon="ph-star"
              label="충북권 희귀 역량"
              title="관절경 BMAC 수술 가능"
              descNode={
                <>
                  박리성 골연골염 수술을 대부분의 병원에서는 전개방으로 시행하지만, 본원은{" "}
                  <strong className="text-white">90% 관절경으로 수술</strong>합니다. 국내에서 관절경으로 BMAC 수술을 할 수 있는 의사는 극소수입니다.
                </>
              }
            />
            <DiffCard
              icon="ph-sneaker"
              title="자체 개발 닥터포디"
              descNode={
                <>
                  <strong className="text-win-text-dark">동적 보행 검사</strong>를 통하여 평발과 족저근막염의 원인을 정확히 찾고, 맞춤 인솔보다 저렴한 닥터포디를 자체 개발하여 치료합니다.
                </>
              }
            />
            <DiffCard
              icon="ph-shield-check"
              title="대학병원급 시설"
              descNode={
                <>
                  감염 예방을 위한 <strong className="text-win-text-dark">전용 무균 수술실</strong>을 운영합니다. 청결하고 안전한 수술 환경으로 합병증 위험을 최소화합니다.
                </>
              }
            />
            <DiffCard
              icon="ph-drop"
              title="PRP 모든 부위 제공"
              descNode={
                <>
                  무릎·어깨·발목·힘줄 등 모든 부위에{" "}
                  <strong className="text-win-text-dark">PRP 재생 주사</strong>를 제공합니다. 한 곳에서 모두 해결됩니다.
                </>
              }
            />
            <DiffCard
              icon="ph-person-simple-run"
              title="스포츠 전문의 보유"
              descNode={
                <>
                  스포츠 의학 전문의가 상주하여{" "}
                  <strong className="text-win-text-dark">선수·생활 스포츠인 맞춤 진료</strong>를 제공합니다. 수술부터 재활까지 원스톱 관리.
                </>
              }
            />
            <DiffCard
              icon="ph-medal"
              title="대한민국 100대 명의"
              descNode={
                <>
                  2024 대한민국 100대 명의(주간시사매거진)에 선정된{" "}
                  <strong className="text-win-text-dark">검증된 전문의</strong>가 직접 진단하고 치료합니다.
                </>
              }
            />
            <DiffCard
              icon="ph-scan"
              title="정밀 진단 장비 보유"
              descNode={
                <>
                  <strong className="text-win-text-dark">체중부하 X-ray·CT, 보행검사, 초음파</strong>로 구조적 원인까지 정확히 파악합니다.
                </>
              }
            />
            <DiffCard
              dark
              gradient
              icon="ph-check-circle"
              title="금식 없이, 부분 마취로"
              descNode={
                <>
                  대부분의 수술이 <strong className="text-white">전신 마취·금식 없이</strong> 진행됩니다. 수술 당일 식사 가능, 청결하고 신뢰할 수 있는 시설.
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 bg-white border-t border-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-win-text-dark mb-4">
              청결하고 신뢰할 수 있는 시설
            </h2>
            <p className="text-xl text-win-text-gray font-medium max-w-3xl mx-auto leading-relaxed">
              최신 의료 장비와 위생적인 대학병원급 무균 수술실을 갖춘{" "}
              <strong className="text-win-text-dark">전문 정형외과 수술재활센터</strong>입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { src: "https://storage.googleapis.com/imageswinwin/winwin-patients.jpg", alt: "윈윈정형외과 환자", span: "md:col-span-2 lg:col-span-2 aspect-[2/1]" },
              { src: "https://storage.googleapis.com/imageswinwin/winwin-sterile-surgery.jpg", alt: "무균 수술실", span: "aspect-square" },
              { src: "https://storage.googleapis.com/imageswinwin/winwin-sports-rehab-center.jpg", alt: "스포츠 재활센터", span: "aspect-square" },
              { src: "https://storage.googleapis.com/imageswinwin/winwin-hospital.jpg", alt: "병원 전경", span: "aspect-square" },
              { src: "https://storage.googleapis.com/imageswinwin/winwin-advanced-imaging-equipment.jpg", alt: "정밀 진단 장비", span: "aspect-square" },
            ].map((img) => (
              <div key={img.src} className={`bento-card ${img.span} overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="py-24 px-6 bg-win-navy-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 text-gray-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">전문의 소개</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">의료진이 직접 치료합니다</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DoctorCard href="/about/doctors/park-eun-su" image="https://storage.googleapis.com/imageswinwin/park-eun-su-doctor.jpg" specialty="족부·발목 전문의" name="정형외과 박은수 원장" items={["무지외반증·발목 인대·연골 전문", "골절도 당일 수술 가능", "관절경 BMAC 수술 가능", "MICA·MITA 최소침습 교정술"]} />
            <DoctorCard href="/about/doctors/gwak-gyu-wan" image="https://storage.googleapis.com/imageswinwin/gwak-gyu-wan-doctor.jpg" specialty="무릎·어깨 전문의" name="재활의학과 곽규완 원장" items={["관절염·인대 손상·회전근개 전문", "스포츠 수술·재활 전문의", "수술 후 재활 원스톱 관리", "선수·생활 스포츠인 복귀 최우선"]} />
            <DoctorCard href="/about/doctors/kim-min-kyung" image="https://storage.googleapis.com/imageswinwin/kim-min-kyung-doctor.jpg" specialty="척추·통증 전문의" name="통증의학과 김민경 원장" items={["신경인성 추적 통증 전문", "경추·요추 비수술 치료", "SNRB·MBB·LSEB 주사치료", "재활치료 협진 빠른 회복"]} />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-win-text-dark">실제 환자 후기</h2>
              <p className="text-xl text-win-text-gray font-medium">청주·충북 지역 환자분들의 생생한 경험을 확인하세요.</p>
            </div>
            <div className="bg-white px-7 py-4 rounded-2xl shadow-win flex items-center gap-4 border border-blue-50">
              <div className="flex text-yellow-400 text-2xl gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <i key={s} className="ph-fill ph-star" aria-hidden="true" />
                ))}
              </div>
              <p className="text-base font-black text-win-text-dark">
                네이버·구글 리뷰 <span className="text-win-text-gray font-normal ml-1 text-sm">(1,920개)</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { text: "오랫동안 발볼이 좁은 신발은 아예 못 신고 살았는데 올해 결국 수술을 결심했어요. 비용 걱정이 컸는데 실손 처리가 다 된다고 하더라고요. 제 발 상태에 맞는 방법을 설명해 주시고, 수술 다음 날 목발 없이 바로 걸었습니다. 서울까지 안 가도 됐네요.", init: "김", name: "김○○ 님 · 무지외반증", color: "bg-blue-100 text-win-navy" },
              { text: "주말에 계단에서 미끄러져 발에 금이 갔는데 당일에 수술을 받을 수 있다고 해서 바로 왔어요. 부분 마취라 금식도 없었고 생각보다 금방 끝났습니다. 퇴원할 때 통깁스 하고 바로 걸어서 나왔어요. 다른 병원에서 6주 못 딛는다는 얘기 들었던 것과는 완전히 달랐습니다.", init: "이", name: "이○○ 님 · 골절 수술", color: "bg-sky-100 text-win-sky" },
              { text: "축구하다 발목을 다쳤는데 수술이 필요한지 아닌지부터 명확히 설명해 주셨어요. 수술 후 붓기가 빠지자마자 입원 중에 재활을 바로 시작했고, 깁스 중에도 재활을 계속했습니다. 예상보다 훨씬 빨리 필드로 돌아올 수 있었어요.", init: "박", name: "박○○ 님 · 스포츠 손상", color: "bg-green-100 text-green-600" },
              { text: "무릎 MRI 찍다가 이단성 골연골염이라는 걸 우연히 발견했어요. 생소한 진단이라 많이 불안했는데 내시경으로 할 수 있다고 하더라고요. 한 달 통깁스 기간 빼고는 회복이 빠른 편이었고 실손도 됐습니다. 처음부터 끝까지 설명을 꼼꼼히 해주셔서 믿고 진행할 수 있었어요.", init: "최", name: "최○○ 님 · 이단성 골연골염", color: "bg-purple-100 text-purple-600" },
            ].map((r) => (
              <div key={r.name} className="bento-card p-7 flex flex-col justify-between h-full">
                <p className="text-gray-700 italic mb-5 leading-relaxed text-sm">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 ${r.color} rounded-full flex items-center justify-center font-black text-sm`}>{r.init}</div>
                  <div className="text-xs font-bold text-gray-600">{r.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / MAP */}
      <section id="contact" className="py-24 px-6 bg-win-navy-dark text-white border-t border-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="inline-block bg-white/10 text-gray-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
              오시는 길 · 진료 안내
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">청주 수술 병원 — 윈윈정형외과 찾아오기</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              충북 청주에 위치한 <strong className="text-white">윈윈정형외과 수술재활센터</strong>. 족부·발목·무릎·어깨·척추 전 분야 전문의가 상주합니다.{" "}
              <strong className="text-white">골절은 진료시간 내 상시 접수</strong> — 문의 주시면 우선 안내해 드립니다.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-stretch mb-12">
            <div className="w-full lg:w-5/12 flex flex-col gap-5">
              <div className="bg-white/6 p-6 rounded-2xl border border-white/10 flex items-center gap-5 hover:bg-white/10 transition-colors">
                <div className="p-4 bg-white/10 rounded-xl text-win-sky shrink-0"><i className="ph-bold ph-map-pin text-2xl" /></div>
                <div>
                  <strong className="block text-lg mb-1 font-black">주소</strong>
                  <a
                    href="https://map.naver.com/p/search/%EC%9C%88%EC%9C%88%EC%A0%95%ED%98%95%EC%99%B8%EA%B3%BC/place/1475298812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm not-italic hover:text-white transition-colors"
                  >
                    충북 청주시 흥덕구 강서로 126
                    <br />
                    하이마트 4~5층
                  </a>
                </div>
              </div>
              <div className="bg-white/6 p-6 rounded-2xl border border-white/10 flex items-center gap-5 hover:bg-white/10 transition-colors">
                <div className="p-4 bg-white/10 rounded-xl text-win-sky shrink-0"><i className="ph-bold ph-phone text-2xl" /></div>
                <div>
                  <strong className="block text-lg mb-1 font-black">전화 번호</strong>
                  <a href="tel:+82437157591" className="text-gray-300 text-sm hover:text-white transition-colors font-semibold">043-715-7591</a>
                  <br />
                  <span className="text-gray-500 text-xs">
                    수술예약{" "}
                    <a href="tel:+821057857591" className="hover:text-gray-300 transition-colors">010-5785-7591</a>
                  </span>
                </div>
              </div>
              <div className="bg-white/6 p-5 rounded-2xl border border-white/10 flex-grow">
                <h4 className="font-black text-base flex items-center gap-2 mb-5 text-win-sky"><i className="ph-bold ph-clock" /> 진료 시간</h4>
                <div className="space-y-3 text-sm text-gray-300 font-medium">
                  <div className="flex justify-between border-b border-white/8 pb-2"><span className="text-gray-400 text-xs uppercase">평일 (월~금)</span><span className="text-white font-semibold">08:30 ~ 18:00</span></div>
                  <div className="flex justify-between border-b border-white/8 pb-2"><span className="text-gray-400 text-xs uppercase">토요일</span><span className="text-white font-semibold">08:30 ~ 13:00</span></div>
                  <div className="flex justify-between border-b border-white/8 pb-2">
                    <span className="text-gray-400 text-xs uppercase">점심 시간</span>
                    <span className="text-gray-300">
                      12:30 ~ 14:00 <span className="text-gray-500 text-xs">(토 없음)</span>
                    </span>
                  </div>
                  <div className="flex justify-between pt-1"><span className="text-red-400 font-bold text-xs uppercase">일요일·공휴일</span><span className="text-red-400 font-bold">휴진</span></div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-700/50 min-h-[400px] flex flex-col">
              <iframe
                src="https://maps.google.com/maps?q=36.625053,127.430418&hl=ko&z=17&output=embed"
                width="100%"
                style={{ border: 0, display: "block", flex: 1, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                title="윈윈정형외과 수술재활센터 위치"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TreatmentBlock({ reverse, bg, badge, badgeColor, title, description, descriptionNode, tags, tagColor, plainBadges, noBorder, href, ctaLabel, image, imageAlt }: { reverse?: boolean; bg?: string; badge: string; badgeColor: string; title: string; description?: string; descriptionNode?: ReactNode; tags: string[]; tagColor?: string; plainBadges?: boolean; noBorder?: boolean; href: string; ctaLabel: string; image: string; imageAlt: string }) {
  const resolvedTagColor = tagColor || "bg-win-navy/8 text-win-navy";
  const badgeTextOnly = plainBadges ? badgeColor.replace(/bg-\S+\s*/g, "").trim() : badgeColor;
  const tagTextOnly = plainBadges ? resolvedTagColor.replace(/bg-\S+\s*/g, "").trim() : resolvedTagColor;
  return (
    <div className={`py-24 px-6 ${bg || ""} ${noBorder ? "" : "border-b border-gray-100"}`}>
      <div className={`max-w-7xl mx-auto flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16`}>
        <div className="w-full lg:w-1/2">
          {plainBadges ? (
            <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${badgeTextOnly}`}>{badge}</div>
          ) : (
            <div className={`inline-flex badge ${badgeColor} mb-5`}>{badge}</div>
          )}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-win-text-dark">{title}</h2>
          <p className="text-xl text-gray-500 mb-6 leading-relaxed font-medium">{descriptionNode ?? description}</p>
          <div className={`flex flex-wrap mb-8 ${plainBadges ? "gap-x-4 gap-y-2" : "gap-2"}`}>
            {tags.map((t) => (
              plainBadges
                ? <span key={t} className={`text-sm font-semibold ${tagTextOnly}`}>{t}</span>
                : <span key={t} className={`badge ${resolvedTagColor}`}>{t}</span>
            ))}
          </div>
          <Link href={href} className="inline-flex items-center gap-2 bg-win-navy text-white px-8 py-3 rounded-full font-bold hover:bg-win-navy-hover transition-colors shadow-win">
            {ctaLabel} <i className="ph-bold ph-arrow-right" />
          </Link>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-win-hover bg-gradient-to-br from-blue-50 to-sky-100 relative">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DiffCard({ span, dark, gradient, icon, label, title, desc, descNode }: { span?: string; dark?: boolean; gradient?: boolean; icon: string; label?: string; title: string; desc?: string; descNode?: ReactNode }) {
  const bg = gradient ? "bg-gradient-win text-white" : dark ? "bg-win-navy text-white" : "bg-white";
  const descColor = gradient ? "text-gray-200" : dark ? "text-gray-300" : "text-gray-600";
  const isWideBmac = dark && !gradient && span?.includes("col-span");
  return (
    <div className={`bento-card p-8 ${bg} ${span || ""}`}>
      {isWideBmac ? (
        <div className="flex flex-col gap-5 items-start">
          <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center shrink-0">
            <i className={`ph-bold ${icon} text-win-sky text-3xl`} />
          </div>
          <div>
            {label && <p className="text-win-sky text-sm font-bold mb-2 uppercase tracking-wide">{label}</p>}
            <h3 className="text-2xl font-black mb-3">{title}</h3>
            <p className={`font-medium leading-relaxed ${descColor}`}>{descNode ?? desc}</p>
          </div>
        </div>
      ) : (
        <>
          <div className={`w-14 h-14 ${dark || gradient ? "bg-white/15" : "bg-win-sky-light"} text-win-sky rounded-2xl flex items-center justify-center mb-5 shadow-sm`}>
            <i className={`ph-bold ${icon} text-3xl`} />
          </div>
          {label && <p className="text-win-sky text-sm font-bold mb-2 uppercase tracking-wide">{label}</p>}
          <h3 className={`text-xl font-black mb-3 ${dark || gradient ? "" : "text-win-text-dark"}`}>{title}</h3>
          <p className={`font-medium leading-relaxed ${descColor}`}>{descNode ?? desc}</p>
        </>
      )}
    </div>
  );
}

function DoctorCard({ href, image, specialty, name, items }: { href: string; image: string; specialty: string; name: string; items: string[] }) {
  return (
    <Link href={href} className="bg-white/8 rounded-[2rem] p-8 border border-white/10 hover:bg-white/12 transition-all block">
      <div className="w-32 h-32 rounded-2xl bg-gradient-win flex items-center justify-center mb-6 shadow-sky overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={`윈윈정형외과 ${specialty} ${name}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>
      <h3 className="text-2xl font-black mb-1">{specialty}</h3>
      <p className="text-win-sky font-semibold mb-5">{name}</p>
      <ul className="space-y-3 text-sm text-gray-300 font-medium">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2"><i className="ph-bold ph-check-circle text-win-sky mt-0.5 text-base" />{item}</li>
        ))}
      </ul>
    </Link>
  );
}
