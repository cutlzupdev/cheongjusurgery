import Link from "next/link";
import type { Condition } from "@/lib/conditions";

export default function ConditionPage({ condition }: { condition: Condition }) {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-win-bg">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {condition.badges.map((b) => (
              <span key={b.label} className={`badge ${b.color}`}>
                <i className={`ph-bold ${b.icon}`} aria-hidden="true" /> {b.label}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-win-text-dark mb-5">
            {condition.heroTitle ?? condition.title.split(" — ")[0]}
            <br />
            <span className="text-gradient">
              {condition.heroSubtitle ?? "전문의의 정확한 진단, 내게 맞는 치료"}
            </span>
          </h1>

          <p className="geo-speakable text-xl text-win-text-gray font-medium leading-relaxed mb-8">
            {condition.heroDescription}
          </p>

          {/* Hero Image */}
          <div className="aspect-[16/7] overflow-hidden rounded-[2rem] shadow-win-hover bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center mb-10">
            {condition.heroImage ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={condition.heroImage}
                alt={`${condition.titleShort} — 윈윈정형외과`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full relative bg-gradient-win flex items-end overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 right-8 w-40 h-40 rounded-full border-[3px] border-white/60" />
                  <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full border-[3px] border-white/40" />
                  <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-white/20" />
                </div>
                {/* Text overlay */}
                <div className="relative z-10 p-6 md:p-10 w-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {condition.badges.map((b) => (
                      <span key={`hero-${b.label}`} className="badge bg-white/20 text-white text-xs backdrop-blur-sm">
                        <i className={`ph-bold ${b.icon}`} aria-hidden="true" /> {b.label}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
                    청주 {condition.titleShort}
                  </h2>
                  <p className="text-sm md:text-base text-blue-100 font-medium leading-relaxed max-w-2xl line-clamp-3">
                    {condition.heroDescription}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="py-10 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="bento-card p-6 md:p-8 border border-blue-100">
            <h2 className="text-2xl md:text-3xl font-black text-win-text-dark mb-1">이런 증상 있으신가요?</h2>
            <p className="text-win-text-gray font-medium mb-5">{condition.symptomThreshold}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {condition.symptoms.map((s) => (
                <div key={s.title} className="flex items-start gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50">
                  <i className="ph-bold ph-check-circle text-win-sky text-xl mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-win-text-dark text-base">{s.title}</p>
                    <p className="text-base text-gray-500 mt-0.5">{s.description}</p>
                  </div>
                </div>
              ))}
              {/* Info Box */}
              <div className="p-4 bg-win-sky-light rounded-2xl border border-win-sky/20 text-win-navy font-semibold text-sm flex items-start gap-2 sm:col-span-2">
                <i className="ph-bold ph-info text-lg mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  {condition.symptomInfoBox || (
                    <><strong>2개 이상</strong> 해당 시 전문 진료를 권장합니다. 증상이 지속될수록 치료가 복잡해질 수 있습니다.</>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITION (GEO Core) */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-6">
            {condition.titleShort}이란?
          </h2>
          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-win mb-8">
            <p className="geo-speakable text-lg text-win-text-dark font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: condition.definition }} />
          </div>
          {condition.severityGrades && condition.severityGrades.length > 0 && (
            <div className={`grid ${(['grid-cols-1','grid-cols-2','grid-cols-3','grid-cols-4'] as const)[Math.min(condition.severityGrades.length,4)-1]??'grid-cols-3'} gap-2 sm:gap-4`}>
              {condition.severityGrades.map((g) => {
                const color =
                  g.color === "green"
                    ? { num: "text-green-600", border: "border-green-100" }
                    : g.color === "yellow"
                    ? { num: "text-yellow-600", border: "border-yellow-100" }
                    : { num: "text-red-500", border: "border-red-100" };
                return (
                  <div key={g.label} className={`bento-card p-3 sm:p-5 text-center border ${color.border}`}>
                    <p className={`text-lg sm:text-3xl font-black ${color.num} mb-1 leading-tight`}>{g.range}</p>
                    <p className="text-xs sm:text-base font-bold text-gray-700">{g.label}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{g.note}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CAUSES */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-10">
            {condition.titleShort} 원인
          </h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${(['lg:grid-cols-1','lg:grid-cols-2','lg:grid-cols-3','lg:grid-cols-4','lg:grid-cols-5'] as const)[Math.min(condition.causes.length,5)-1]??'lg:grid-cols-5'} gap-5`}>
            {condition.causes.map((c) => (
              <div key={c.title} className="bento-card p-7 border border-blue-50">
                <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center mb-4">
                  <i className={`ph-bold ${c.icon} text-2xl`} />
                </div>
                <h3 className="font-black text-win-text-dark mb-2">{c.title}</h3>
                <p className="text-base text-gray-600 font-medium leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-10">
            {condition.titleShort} 치료 방법
          </h2>
          {condition.treatmentDiagnosisWarning && (
            <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 text-amber-800 font-medium text-base leading-relaxed mb-6">
              <p className="font-black text-amber-900 mb-1">{condition.treatmentDiagnosisWarning.title}</p>
              {condition.treatmentDiagnosisWarning.text}
            </div>
          )}
          <div className="grid grid-cols-1 gap-6">
            {/* Conservative */}
            {condition.conservativeTreatments.length > 0 && (
              <div className="bento-card p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center">
                    <i className="ph-bold ph-first-aid text-xl" />
                  </div>
                  <h3 className="text-xl font-black text-win-text-dark">비수술 치료</h3>
                  {condition.conservativePriorityLabel && (
                    <span className="badge bg-green-50 text-green-700 text-xs ml-2">{condition.conservativePriorityLabel}</span>
                  )}
                </div>
                <ul className="space-y-4">
                  {condition.conservativeTreatments.map((t) => (
                    <li key={t.name} className="flex items-start gap-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                      <i className="ph-bold ph-check-circle text-win-sky mt-0.5 text-xl shrink-0" />
                      <div>
                        <p className={`${
                          t.highlightStyle === "blue-inline" ? "font-black text-blue-600" :
                          t.highlightStyle === "purple-name" ? "font-black text-purple-600" :
                          "font-bold text-win-text-dark"
                        } text-base`}>
                          {t.name}
                          {t.highlight && t.highlightStyle !== "blue-inline" && (
                            <>
                              {t.highlightStyle === "green-badge" && (
                                <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full ml-1">{t.highlightLabel}</span>
                              )}
                              {t.highlightStyle === "sky-inline" && (
                                <span className="text-win-sky text-sm font-black ml-1">{t.highlightLabel}</span>
                              )}
                              {(t.highlightStyle === "purple-name" || t.highlightStyle === "purple" || !t.highlightStyle) && (
                                <span className={`ml-1 text-xs px-2 py-0.5 rounded-full font-black ${t.highlightStyle === "purple-name" ? "bg-purple-100 text-purple-600" : "bg-purple-100 text-purple-700"}`}>
                                  {t.highlightLabel || "★ 차별화"}
                                </span>
                              )}
                            </>
                          )}
                        </p>
                        <p className="text-base text-gray-500 mt-0.5">{t.description}</p>
                        {t.note && (
                          <p className="text-sm text-yellow-600 font-semibold mt-1">{t.note}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                {condition.secondaryTreatments && condition.secondaryTreatments.length > 0 && (
                  <div className={`grid grid-cols-1 ${condition.secondaryTreatments!.length > 1 ? "sm:grid-cols-3" : ""} gap-3 mt-5 mb-5`}>
                    {condition.secondaryTreatments.map((s) => (
                      <div key={s.name} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <p className="font-bold text-win-text-dark text-sm mb-1">{s.name}</p>
                        <p className="text-sm text-gray-500">{s.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                {condition.conservativeNote && (
                  <div className="mt-6 p-4 bg-purple-50 rounded-xl text-sm text-purple-800 font-medium border border-purple-100">
                    {condition.conservativeNote}
                  </div>
                )}
                {condition.treatmentNote && (
                  <div className="mt-5 p-4 bg-yellow-50 rounded-xl text-sm text-yellow-700 font-medium border border-yellow-100" dangerouslySetInnerHTML={{ __html: condition.treatmentNote }} />
                )}
                {condition.conservativeAmberNote && (
                  <div className="mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-800 font-semibold text-sm flex items-start gap-2">
                    <i className="ph-bold ph-warning text-lg mt-0.5 shrink-0" aria-hidden="true" />
                    <span dangerouslySetInnerHTML={{ __html: condition.conservativeAmberNote }} />
                  </div>
                )}
              </div>
            )}

            {condition.postConservativeNote && (
              <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 text-amber-800 font-semibold text-sm flex items-start gap-2">
                <i className="ph-bold ph-warning text-lg mt-0.5 shrink-0" aria-hidden="true" />
                <span dangerouslySetInnerHTML={{ __html: condition.postConservativeNote }} />
              </div>
            )}

            {/* Surgical */}
            {condition.surgicalTreatments.length > 0 && (
              <div className="bento-card p-8 bg-win-navy text-white border border-win-navy">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/15 text-win-sky rounded-xl flex items-center justify-center">
                    <i className="ph-bold ph-knife text-xl" />
                  </div>
                  <h3 className="text-xl font-black">수술 치료</h3>
                </div>
                <div className="space-y-5">
                  {condition.surgicalTreatments.map((t, i) => (
                    <div
                      key={t.name}
                      className={i < condition.surgicalTreatments.length - 1 ? "mb-5 pb-5 border-b border-white/10" : ""}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {t.tag && (
                          <span className={`${t.tagColor ?? "bg-win-sky text-white"} text-xs font-black px-2 py-0.5 rounded-full`}>
                            {t.tag}
                          </span>
                        )}
                        <p className="font-black text-base">{t.name}</p>
                      </div>
                      <p className="text-gray-100 text-base leading-relaxed font-medium">{t.description}</p>
                      {t.points && t.points.length > 0 && (
                        <ul className="mt-3 space-y-1.5 text-base text-gray-200">
                          {t.points.map((pt) => (
                            <li key={pt} className="flex items-center gap-1.5">
                              <i className="ph-bold ph-check text-win-sky" /> {pt}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
                {condition.surgicalCommonPoints && condition.surgicalCommonPoints.length > 0 && (
                  <div className="bg-white/8 rounded-xl p-4 text-base mt-5">
                    <p className="font-black text-win-sky mb-2">&#10003; 모든 수술 공통 사항</p>
                    <ul className="space-y-1.5 text-gray-100 text-sm">
                      {condition.surgicalCommonPoints.map((pt) => (
                        <li key={pt}>&#8226; {pt}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {condition.surgicalNote && (
                  <div className="mt-6 p-4 bg-white/10 rounded-xl text-sm text-gray-200 font-medium">
                    💡 {condition.surgicalNote}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION (왜 윈윈정형외과인가?) */}
      {condition.differentiationCards && condition.differentiationCards.length > 0 && (
        <section className="py-16 px-6 bg-white border-t border-blue-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-10">왜 윈윈정형외과인가?</h2>
            <div className={`grid grid-cols-1 ${(['md:grid-cols-1','md:grid-cols-2','md:grid-cols-3'] as const)[Math.min(condition.differentiationCards.length,3)-1]??'md:grid-cols-3'} gap-6 mb-10`}>
              {condition.differentiationCards.map((c) => (
                <div key={c.title} className={`bento-card p-8 ${c.dark ? "bg-win-navy text-white" : "border border-blue-100"}`}>
                  <div className={`w-12 h-12 ${c.dark ? "bg-white/15" : "bg-win-sky-light"} text-win-sky rounded-xl flex items-center justify-center mb-5`}>
                    <i className={`ph-bold ${c.icon} text-2xl`} aria-hidden="true" />
                  </div>
                  {c.kicker && (
                    <p className="text-win-sky text-sm font-bold uppercase tracking-wide mb-2">{c.kicker}</p>
                  )}
                  <h3 className={`text-xl font-black mb-3 ${c.dark ? "" : "text-win-text-dark"}`}>{c.title}</h3>
                  <p className={`text-base font-medium leading-relaxed ${c.dark ? "text-gray-300" : "text-gray-600"}`}>{c.description}</p>
                </div>
              ))}
            </div>

            {/*condition.staffHighlights && condition.staffHighlights.length > 0 && (
              <div className="bento-card p-7 border border-blue-100 bg-win-bg mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center shrink-0">
                    <i className="ph-bold ph-stethoscope text-xl" aria-hidden="true" />
                  </div>
                  <h3 className="font-black text-win-text-dark text-lg">담당 의료진</h3>
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-${Math.min(condition.staffHighlights.length, 3)} gap-4 text-sm`}>
                  {condition.staffHighlights.map((s) => (
                    <div key={s.name} className="bg-white rounded-xl p-4 border border-blue-50">
                      <p className="font-black text-win-navy text-base mb-1">{s.name}</p>
                      <p className="text-gray-600 font-medium">{s.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            )*/}

            {condition.patientTestimonials && condition.patientTestimonials.length > 0 && (
              <div className={`grid grid-cols-1 ${(['md:grid-cols-1','md:grid-cols-2','md:grid-cols-3'] as const)[Math.min(condition.patientTestimonials.length,3)-1]??'md:grid-cols-3'} gap-5`}>
                {condition.patientTestimonials.map((t) => (
                  <div key={t.label} className="bento-card p-7 border border-blue-50 bg-win-bg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-win-sky-light text-win-sky rounded-full flex items-center justify-center font-black text-sm shrink-0">
                        {t.initial}
                      </div>
                      <div>
                        <p className="font-black text-win-text-dark text-sm">{t.label}</p>
                        <div className="flex gap-0.5 mt-0.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <i key={i} className="ph-fill ph-star text-yellow-400 text-xs" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                      {t.source && <span className="ml-auto text-xs text-gray-400">{t.source}</span>}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">{t.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* RECOVERY */}
      <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-win-text-dark mb-3">
            {(condition.recoveryTimeline || condition.recoveryGroups) ? "치료 후 회복 과정" : "회복 과정"}
          </h2>
          {condition.recoveryIntro && (
            <p className="text-win-text-gray font-medium mb-10">{condition.recoveryIntro}</p>
          )}
          {condition.recoveryGroups && condition.recoveryGroups.length > 0 ? (
            <div className="space-y-10">
              {condition.recoveryGroups.map((group) => {
                const isRed = group.theme === "red";
                const lineClass = isRed ? "from-red-400 to-win-navy" : "from-win-sky to-win-navy";
                const cardBorderClass = isRed ? "border-red-100" : "border-blue-100";
                const getBadgeClass = (style: string, desktop: boolean) => {
                  if (style === "gradient") return `bg-gradient-win text-white ${desktop ? "shadow-sky" : ""}`;
                  if (isRed) {
                    if (style === "navy") return `bg-red-600 text-white ${desktop ? "shadow-win" : ""}`;
                    if (style === "sky") return `bg-red-400 text-white ${desktop ? "shadow-sky" : ""}`;
                    return `bg-white text-red-600 border-2 border-red-300 ${desktop ? "shadow-win" : ""}`;
                  }
                  if (style === "navy") return `bg-win-navy text-white ${desktop ? "shadow-win" : ""}`;
                  if (style === "sky") return `bg-win-sky text-white ${desktop ? "shadow-sky" : ""}`;
                  return `bg-white text-win-navy border-2 border-win-sky ${desktop ? "shadow-win" : ""}`;
                };
                return (
                  <div key={group.label}>
                    <div className={`inline-flex items-center gap-2 ${isRed ? "bg-red-50 text-red-700" : "bg-blue-50 text-win-sky"} font-black text-sm px-4 py-2 rounded-full mb-6`}>
                      <i className={`ph-bold ${group.icon}`} aria-hidden="true" /> {group.label}
                    </div>
                    {/* Desktop */}
                    <div className="hidden md:grid gap-0 relative" style={{ gridTemplateColumns: `repeat(${group.steps.length}, minmax(0, 1fr))` }}>
                      <div className={`absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r ${lineClass}`} />
                      {group.steps.map((step) => (
                        <div key={step.label} className="flex flex-col items-center text-center px-2 relative">
                          <div className={`w-20 h-20 ${getBadgeClass(step.badgeStyle, true)} rounded-2xl flex flex-col items-center justify-center mb-4 z-10`}>
                            {step.badgeSubLabel && <p className="text-[11px] font-bold">{step.badgeSubLabel}</p>}
                            <p className="text-[19px] font-black leading-tight">{step.badge}</p>
                          </div>
                          <p className="text-base font-bold text-win-text-dark mb-1">{step.label}</p>
                          <p className="text-base text-gray-500" dangerouslySetInnerHTML={{ __html: step.detail.replace(/\n/g, "<br>") }} />
                        </div>
                      ))}
                    </div>
                    {/* Mobile */}
                    <div className="md:hidden space-y-4">
                      {group.steps.map((step) => (
                        <div key={step.label} className={`flex items-start gap-4 bg-white rounded-2xl p-5 border ${cardBorderClass}`}>
                          <div className={`w-16 h-16 ${getBadgeClass(step.badgeStyle, false)} rounded-xl flex flex-col items-center justify-center shrink-0`}>
                            {step.badgeSubLabel && <p className="text-[9.5px] font-bold">{step.badgeSubLabel}</p>}
                            <p className="text-[15px] font-black">{step.badge}</p>
                          </div>
                          <div>
                            <p className="font-bold text-win-text-dark text-base">{step.label}</p>
                            <p className="text-base text-gray-500 mt-1">{step.detailMobile || step.detail.replace(/\n/g, " / ")}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : condition.recoveryTimeline && condition.recoveryTimeline.length > 0 ? (
            <>
              {/* Desktop horizontal timeline */}
              <div
                className="hidden md:grid gap-0 relative"
                style={{ gridTemplateColumns: `repeat(${condition.recoveryTimeline.length}, minmax(0, 1fr))` }}
              >
                <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-win-sky to-win-navy" />
                {condition.recoveryTimeline.map((step) => {
                  const badgeClass =
                    step.badgeStyle === "navy"
                      ? "bg-win-navy text-white shadow-win"
                      : step.badgeStyle === "sky"
                      ? "bg-win-sky text-white shadow-sky"
                      : step.badgeStyle === "gradient"
                      ? "bg-gradient-win text-white shadow-sky"
                      : "bg-white text-win-navy border-2 border-win-sky shadow-win";
                  return (
                    <div key={step.label} className="flex flex-col items-center text-center px-2 relative">
                      <div className={`w-20 h-20 ${badgeClass} rounded-2xl flex flex-col items-center justify-center mb-4 z-10`}>
                        {step.badgeSubLabel && <p className="text-[11px] font-bold">{step.badgeSubLabel}</p>}
                        <p className="text-[19px] font-black leading-tight">{step.badge}</p>
                      </div>
                      <p className="text-base font-bold text-win-text-dark mb-1">{step.label}</p>
                      <p className="text-base text-gray-500" dangerouslySetInnerHTML={{ __html: step.detail.replace(/\n/g, "<br>") }} />
                    </div>
                  );
                })}
              </div>

              {/* Mobile vertical timeline */}
              <div className="md:hidden space-y-4">
                {condition.recoveryTimeline.map((step) => {
                  const badgeClass =
                    step.badgeStyle === "navy"
                      ? "bg-win-navy text-white"
                      : step.badgeStyle === "sky"
                      ? "bg-win-sky text-white"
                      : step.badgeStyle === "gradient"
                      ? "bg-gradient-win text-white"
                      : "bg-white border-2 border-win-sky text-win-navy";
                  return (
                    <div key={step.label} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-blue-100">
                      <div className={`w-16 h-16 ${badgeClass} rounded-xl flex flex-col items-center justify-center shrink-0`}>
                        {step.badgeSubLabel && <p className="text-[9.5px] font-bold">{step.badgeSubLabel}</p>}
                        <p className="text-[15px] font-black">{step.badge}</p>
                      </div>
                      <div>
                        <p className="font-bold text-win-text-dark text-base">{step.label}</p>
                        <p className="text-base text-gray-500 mt-1">{step.detailMobile || step.detail.replace(/\n/g, " / ")}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : condition.recoverySteps && condition.recoverySteps.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {condition.recoverySteps.map((step, i) => (
                <div key={step.label} className="bento-card p-6 text-center border border-blue-50">
                  <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-full flex items-center justify-center mx-auto mb-3 font-black text-sm">
                    {i + 1}
                  </div>
                  <p className="font-black text-win-navy text-xl mb-1">{step.label}</p>
                  <p className="text-sm text-gray-600 font-medium">{step.detail}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* FAQ (GEO Core) */}
      <section className="py-16 px-6 bg-white border-t border-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-black text-win-text-dark ${condition.faqIntro ? "mb-3" : "mb-8"}`}>
            자주 묻는 질문
          </h2>
          {condition.faqIntro && (
            <p className="text-win-text-gray font-medium mb-10">{condition.faqIntro}</p>
          )}
          <div className="space-y-3">
            {condition.faqs.map((faq) => (
              <details key={faq.question} className="bento-card border border-blue-100 group">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-win-text-dark text-base">
                  <span>{faq.question}</span>
                  <i className="ph-bold ph-plus text-win-sky faq-icon shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      {condition.relatedConditions && condition.relatedConditions.length > 0 && (
        <section className="py-16 px-6 bg-win-bg border-t border-blue-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-win-text-dark mb-8">함께 보면 좋은 질환 · 정보</h2>
            <div className={`grid grid-cols-1 ${(['md:grid-cols-1','md:grid-cols-2','md:grid-cols-3'] as const)[Math.min(condition.relatedConditions.length,3)-1]??'md:grid-cols-3'} gap-5`}>
              {condition.relatedConditions.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.category}/${r.slug}`}
                  className="bento-card p-6 flex items-center gap-4 hover:border-win-sky border border-transparent group"
                  aria-label={`${r.label} 페이지로 이동`}
                >
                  <div className="w-12 h-12 bg-win-sky-light text-win-sky rounded-xl flex items-center justify-center shrink-0 group-hover:bg-win-sky group-hover:text-white transition-colors">
                    <i className={`ph-bold ${r.icon} text-xl`} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-black text-win-text-dark group-hover:text-win-navy transition-colors">{r.label}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{r.subLabel}</p>
                  </div>
                  <i className="ph-bold ph-arrow-right text-gray-300 group-hover:text-win-sky ml-auto transition-colors" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STICKY MOBILE CTA */}
      <div className="sticky-cta sm:hidden flex gap-3 w-[calc(100%-2rem)]" role="complementary" aria-label="빠른 예약 메뉴">
        <a
          href="tel:+82437157591"
          className="flex-1 bg-win-navy text-white py-4 rounded-full font-black text-sm flex items-center justify-center gap-2 shadow-win"
          aria-label="전화 상담"
        >
          <i className="ph-bold ph-phone text-lg" aria-hidden="true" /> 전화
        </a>
        <a
          href="https://map.naver.com/p/entry/place/1475298812"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-win text-white py-4 rounded-full font-black text-sm flex items-center justify-center gap-2 shadow-sky"
          aria-label="예약하기"
        >
          <i className="ph-bold ph-calendar-check text-lg" aria-hidden="true" /> 예약하기
        </a>
        <a
          href="http://pf.kakao.com/_wxeRxfG"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#FEE500] text-[#191919] py-4 rounded-full font-black text-sm flex items-center justify-center gap-2 shadow-lg"
          aria-label="카카오톡"
        >
          <i className="ph-fill ph-chat-circle text-lg" aria-hidden="true" /> 카카오
        </a>
      </div>
    </>
  );
}
