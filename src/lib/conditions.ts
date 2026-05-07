import type { FaqItem } from "./schema";

export interface ConditionSymptom {
  title: string;
  description: string;
}

export interface Treatment {
  name: string;
  description: string;
  type: "surgical" | "conservative";
  highlight?: boolean;
  highlightLabel?: string;
  highlightStyle?: "purple" | "purple-name" | "blue-inline" | "green-badge" | "sky-inline";
  tag?: string;
  tagColor?: string;
  note?: string;
  points?: string[];
}

export interface TreatmentSection {
  note?: string;
  commonPoints?: string[];
}

export interface MedicalConditionSchema {
  name: string;
  alternateName: string[];
  description: string;
  anatomy: string;
  treatments: { name: string; type: "Surgical" | "Conservative" }[];
}

export interface SeverityGrade {
  range: string;
  label: string;
  note: string;
  color: "green" | "yellow" | "red";
}

export interface DifferentiationCard {
  icon: string;
  dark?: boolean;
  kicker?: string;
  title: string;
  description: string;
}

export interface StaffHighlight {
  name: string;
  role: string;
}

export interface PatientTestimonial {
  initial: string;
  label: string;
  source?: string;
  text: string;
}

export interface RecoveryTimelineStep {
  badge: string;
  badgeSubLabel?: string;
  badgeStyle: "navy" | "sky" | "outline" | "gradient";
  label: string;
  detail: string;
  detailMobile?: string;
}

export interface RecoveryTimelineGroup {
  label: string;
  icon: string;
  theme: "blue" | "red";
  steps: RecoveryTimelineStep[];
}

export interface Condition {
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  titleShort: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalPath: string;
  heroDescription: string;
  heroTitle?: string;
  heroSubtitle?: string;
  faqIntro?: string;
  badges: { label: string; color: string; icon: string }[];
  symptoms: ConditionSymptom[];
  symptomThreshold: string;
  symptomInfoBox?: string;
  definition: string;
  severityGrades?: SeverityGrade[];
  causes: { icon: string; title: string; description: string }[];
  conservativePriorityLabel?: string;
  conservativeTreatments: Treatment[];
  secondaryTreatments?: { name: string; description: string }[];
  conservativeNote?: string;
  conservativeAmberNote?: string;
  surgicalTreatments: Treatment[];
  surgicalCommonPoints?: string[];
  surgicalNote?: string;
  treatmentNote?: string;
  treatmentDiagnosisWarning?: { title: string; text: string };
  postConservativeNote?: string;
  recoverySteps?: { label: string; detail: string }[];
  recoveryIntro?: string;
  recoveryTimeline?: RecoveryTimelineStep[];
  recoveryGroups?: RecoveryTimelineGroup[];
  differentiationCards?: DifferentiationCard[];
  staffHighlights?: StaffHighlight[];
  patientTestimonials?: PatientTestimonial[];
  relatedConditions?: { slug: string; category: string; icon: string; label: string; subLabel: string }[];
  heroImage?: string;
  doctorId: string;
  faqs: FaqItem[];
  medicalCondition: MedicalConditionSchema;
  datePublished: string;
  dateModified: string;
}

export const conditions: Condition[] = [
  // ========== FOOT ==========
  {
    slug: "hallux-valgus",
    category: "foot",
    categoryLabel: "족부",
    title: "청주 무지외반증 치료 · 수술",
    titleShort: "무지외반증",
    metaTitle: "청주 무지외반증 치료 · 수술 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 무지외반증 증상·원인·치료법 완전 정리. MICA·MITA 최소 침습 수술부터 DCMO 교정 절골술까지, 전문의가 직접 집도. 조기 보행·빠른 재활.",
    keywords:
      "청주 무지외반증, 무지외반증 수술, 청주 족부전문, MICA 수술 청주, 무지외반증 교정",
    canonicalPath: "/foot/hallux-valgus",
    heroTitle: "청주 무지외반증",
    heroSubtitle: "족부 전문의의 정확한 진단과 맞춤형 수술",
    heroDescription:
      "무지외반증 수술은 방법이 다양합니다 — 어떤 방법이 내게 맞는지 족부 전문의가 직접 판단합니다. MICA·MITA 최소 침습 수술은 금식 없이 당일 수술이 가능하며, 흉터가 거의 남지 않습니다. DCMO 등 전통적인 안전한 수술 방식을 시행하여도, 수술 방식에 관계없이 짧은 입원, 통증 최소화, 조기 보행이 가능합니다.",
    badges: [
      { label: "금식 없음", color: "bg-win-navy text-white", icon: "ph-fork-knife" },
      { label: "짧은 입원", color: "bg-win-skyLight text-win-sky", icon: "ph-bed" },
      { label: "조기 보행", color: "bg-green-50 text-green-700", icon: "ph-person-simple-walk" },
      { label: "빠른 회복", color: "bg-purple-50 text-purple-700", icon: "ph-trend-up" },
    ],
    symptoms: [
      { title: "엄지발가락이 두 번째 발가락 쪽으로 휘어 있다", description: "육안으로 보이는 엄지 방향 변형" },
      { title: "엄지발가락 뿌리 안쪽에 뼈가 튀어나와 통증이 있다", description: "돌출 부위 압통·발적" },
      { title: "신발을 신으면 엄지 뿌리가 눌려 아프다", description: "신발 착용 시 통증 악화" },
      { title: "발 앞부분이 넓어져 신발 선택이 어렵다", description: "전족부 폭 증가" },
      { title: "오래 걸으면 발 앞쪽이 타는 듯이 아프다", description: "보행 시 전족부 작열감" },
      { title: "엄지발가락 변형이 점점 심해지고 있다", description: "진행성 변형 악화" },
    ],
    symptomThreshold: "2개 이상 해당하면 무지외반증을 의심할 수 있습니다.",
    definition:
      "무지외반증은 <strong>엄지발가락이 두 번째 발가락 방향으로 휘고 첫 번째 중족골이 안쪽으로 돌출되는 발 변형</strong>입니다. 유전적 요인과 볼이 좁은 신발 착용이 주요 원인이며, 방치 시 통증과 변형이 악화되어 보행 장애로 이어집니다. 청주를 비롯한 충북 지역의 여성과 중장년층에서 흔히 발생하며, 족부 전문의의 정확한 진단 후 수술 방법을 결정합니다.",
    causes: [
      { icon: "ph-dna", title: "유전적 요인", description: "가족력 있는 경우 발생 위험 높음, 발 구조 이상" },
      { icon: "ph-high-heel", title: "볼 좁은 신발", description: "하이힐·첨두화 장기 착용으로 변형 가속" },
      { icon: "ph-sneaker", title: "평발·낮은 아치", description: "발의 구조적 불안정이 엄지 방향 틀어짐 유발" },
      { icon: "ph-person-simple-run", title: "과사용·노화", description: "발 인대·근육 약화로 변형 진행" },
    ],
    conservativeTreatments: [
      { name: "교정기·특수 신발", description: "뼈 자체의 교정 효과는 없으며, 증상 완화와 변형 진행 억제가 목표", type: "conservative" },
      { name: "닥터포디·맞춤 인솔", description: "평발을 동반한 경우 발 아치 지지에 도움이 될 수 있음", type: "conservative" },
      { name: "물리 치료", description: "통증 완화, 근력 강화", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "MICA · MITA (최소 침습 교정술)", description: "2~3mm 미세 절개. 금식 없이 당일 수술 가능. 흉터 거의 없음. 수술 다음날부터 보행 가능.", type: "surgical", tag: "최소 침습", points: ["2~3mm 절개로 흉터 최소", "금식 없이 국소 마취", "수술 다음날부터 보행 가능"] },
      { name: "DCMO 교정 절골술", description: "심한 염증·변형에서도 시행 가능한 가장 안전한 절골술. 짧은 입원, 조기 보행은 최소 침습 교정술과 동일.", type: "surgical", tag: "가장 안전한 수술법", points: ["확실하고 정확한 교정 방식", "짧은 입원·조기 보행", "수술 다음날부터 보행 가능"] },
    ],
    surgicalCommonPoints: ["입원 후 당일 수술 (부분 마취, 금식 없음)", "수술 당일 보호 신발 착용, 다음날부터 보행 가능", "목발·통깁스 없음", "수술 후 통증 약 8시간 내 대부분 소실"],
    treatmentNote: "비수술 치료는 변형 진행을 늦출 수 있지만, <strong>이미 변형된 뼈는 수술로만 교정됩니다.</strong>",
  
    differentiationCards: [
      {
        icon: "ph-medal",
        dark: true,
        kicker: "충북권 족부 전문",
        title: "족부 전문의가 수술 방법 직접 결정",
        description: "변형 각도·뼈 구조에 따라 MICA·MITA·DCMO 중 가장 적합한 방법 선택. 불필요하게 비싼 수술 권유 없음.",
      },
      {
        icon: "ph-lightning",
        title: "짧은 입원·목발·통깁스 없음",
        description: "수술 방식에 관계없이 발바닥 보호 신발만 착용, 수술 다음 날부터 일상 보행 가능. 본원 3~5일 이내 퇴원 (양쪽 수술도 일주일 내 퇴원).",
      },
      {
        icon: "ph-scan",
        title: "MICA·MITA·DCMO 모두 시행",
        description: "다양한 무지외반 교정 수술을 직접 시행하는 족부 전문 병원.",
      },
    ],
    staffHighlights: [
      { name: "박은수 원장", role: "족부 전문의, MICA·MITA·DCMO 교정 수술 직접 집도" },
      { name: "곽규완 원장", role: "비수술 주사·재활 치료 담당" },
      { name: "김민경 원장", role: "비수술 주사·재활 치료 담당" },
    ],
    patientTestimonials: [
      {
        initial: "P",
        label: "P님 (45세, 청주 흥덕구)",
        source: "네이버 예약 후기",
        text: "10년 넘게 무지외반증으로 고생했어요. 신발 살 때마다 발이 안 들어가서 스트레스였는데, 윈윈에서 MICA 수술 받고 3일 만에 일상생활 복귀했습니다. 흉터도 거의 안 보여서 정말 만족해요. 진작 올 걸 그랬습니다.",
      },
      {
        initial: "L",
        label: "L님 (58세, 청주 서원구)",
        source: "네이버 예약 후기",
        text: "다른 병원에서 큰 수술 해야 한다고 해서 겁이 났는데, 윈윈에서 DCMO 수술 받았습니다. 목발 없이 보호 신발만 신고 3일만에 퇴원했어요. 지금은 편한 신발 신고 잘 다닙니다.",
      },
    ],
    recoveryIntro: "수술 방법에 따라 차이가 있을 수 있습니다. 아래는 일반적인 회복 일정입니다.",
    recoverySteps: [
      { label: "수술 당일", detail: "보호 신발 착용, 보행 가능" },
      { label: "1~2주", detail: "일상 복귀 가능" },
      { label: "4~6주", detail: "일반 신발 전환" },
      { label: "3개월", detail: "운동 복귀" },
    ],
    recoveryTimeline: [
      { badge: "당일", badgeSubLabel: "수술", badgeStyle: "navy", label: "보호 신발 보행", detail: "MICA 당일 보행\nDCMO 8시간 안정", detailMobile: "MICA 당일 보행 / DCMO 8시간 안정" },
      { badge: "3일", badgeStyle: "sky", label: "일상 보행 시작", detail: "보호 신발 착용\n일상생활 복귀", detailMobile: "보호 신발 착용, 일상생활 복귀" },
      { badge: "2주", badgeStyle: "outline", label: "봉합사 제거", detail: "외래 방문\n경과 확인", detailMobile: "외래 방문, 경과 확인" },
      { badge: "6주", badgeStyle: "outline", label: "일반 신발 착용", detail: "보호 신발 졸업\n편한 신발 전환", detailMobile: "보호 신발 졸업, 편한 신발 전환" },
      { badge: "3개월", badgeStyle: "gradient", label: "완전 복귀", detail: "스포츠·활동\n완전 복귀", detailMobile: "스포츠·활동 완전 복귀" },
    ],
    relatedConditions: [
      { slug: "hallux-rigidus", category: "foot", icon: "ph-bone", label: "엄지발가락관절염", subLabel: "엄지 관절 퇴행성 변화" },
      { slug: "toe-deformity", category: "foot", icon: "ph-sneaker", label: "발가락변형", subLabel: "갈퀴족·망치족 교정" },
      { slug: "rheumatoid", category: "foot", icon: "ph-hand-fist", label: "류마티스 변형", subLabel: "류마티스 발 변형 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/hallux-valgus.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 무지외반증 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 족부 전문의 박은수 원장이 MICA·MITA·DCMO 등 다양한 무지외반 교정 수술을 직접 시행합니다. 변형 각도와 뼈 구조를 분석해 환자에게 맞는 최적의 수술법을 결정합니다." },
      { question: "MICA·MITA와 DCMO 절골술 중 어떤 수술이 더 좋은가요?", answer: "최소침습(MICA·MITA)이 흉터 면에서는 유리하지만, 엄지 돌출 부위의 통증·염증이 심한지, 첫 번째 중족골과 두 번째 중족골 사이의 길이 차이가 있는지에 따라 DCMO가 더 안전하고 적합한 수술 방식일 수 있습니다. 따라서 경험이 많은 족부 전문의가 뼈의 구조를 직접 확인하고 수술법을 결정하는 것이 매우 중요합니다." },
      { question: "수술 후 얼마나 쉬어야 하나요?", answer: "MICA·MITA·DCMO 모두 수술 다음날부터 보행이 가능해 일상생활이 바로 가능합니다. 샌들 형태의 보호 신발을 6주간 착용해야 하지만 운전을 포함한 일상에는 지장이 없으며, 목발과 통깁스는 사용하지 않습니다." },
      { question: "재발 가능성이 있나요?", answer: "수술 방법 자체보다 수술 후 착용하는 신발 등 환경적 요인으로 재발이 생길 수 있습니다. 수술 후에도 볼이 넓고 아치가 받쳐진 신발을 착용하고, 아치 깔창을 사용하는 것이 재발 예방에 효과적입니다." },
      { question: "양발을 동시에 수술할 수 있나요?", answer: "양발 동시 수술 시 척추마취가 필요하고 수술 시간이 길어지며 소변줄을 해야 하는 경우가 많습니다. 부분 마취로 한쪽을 먼저 수술하고 다음날부터 걸으며 자신감을 얻은 뒤, 2~3일 후 반대편을 수술하는 방식이 전신 건강 리스크를 줄이고 빠른 회복에 도움이 됩니다. 이 경우에도 양쪽 모두 수술 후 일주일 내 퇴원이 가능합니다." },
    ],
    medicalCondition: {
      name: "무지외반증",
      alternateName: ["Hallux Valgus", "엄지발가락 변형"],
      description: "무지외반증은 엄지발가락이 두 번째 발가락 방향으로 휘고 첫 번째 중족골이 안쪽으로 돌출되는 발 변형입니다.",
      anatomy: "제1 중족지절 관절 (엄지발가락)",
      treatments: [
        { name: "MICA 최소 침습 교정술", type: "Surgical" },
        { name: "DCMO 교정 절골술", type: "Surgical" },
        { name: "교정기·맞춤 인솔", type: "Conservative" },
      ],
    },
    datePublished: "2025-01-15",
    dateModified: "2026-04-10",
  },
  // ========== KNEE ==========
  {
    slug: "osteoarthritis",
    category: "knee",
    categoryLabel: "무릎",
    title: "청주 무릎 관절염 치료 · 수술",
    titleShort: "무릎 관절염",
    metaTitle: "청주 무릎 관절염 치료 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 무릎 관절염 증상·원인·치료법 정리. PRP 주사·재생주사 비수술 치료부터 관절경 수술까지, 전문의가 직접 집도.",
    keywords: "청주 무릎 관절염, 무릎 관절염 치료, 청주 정형외과, PRP 주사 청주",
    canonicalPath: "/knee/osteoarthritis",
    heroTitle: "청주 무릎 관절염",
    heroSubtitle: "인공관절 전, 가장 효과 높은 비수술 치료",
    heroDescription:
      "무릎 관절염, 인공관절 수술 전에 시도할 수 있는 치료가 있습니다. 관절연골주사·콜라겐주사·재생주사·PRP주사까지, 단계별 주사 치료로 통증을 낮추고 연골 회복을 돕습니다. PRP 주사는 시행 가능한 병원이 많지 않습니다 — 윈윈정형외과에서 받으실 수 있습니다.",
    badges: [
      { label: "PRP 치료", color: "bg-purple-50 text-purple-700", icon: "ph-drop" },
      { label: "비수술 우선", color: "bg-orange-50 text-orange-600", icon: "ph-shield-check" },
    ],
    symptoms: [
      { title: "계단 오르내릴 때 무릎이 시리고 아프다", description: "특히 내리막 계단에서 통증이 심함" },
      { title: "아침에 무릎이 뻣뻣하고 풀리는 데 30분 이상 걸린다", description: "기상 후 관절 경직 지속" },
      { title: "앉았다 일어날 때 무릎에서 소리가 나거나 통증이 있다", description: "관절 마모 시 특징적 증상" },
      { title: "무릎이 부어 있거나 물이 찬 느낌이 든다", description: "관절 내 염증으로 인한 삼출액" },
      { title: "오래 걸으면 무릎 안쪽·바깥쪽이 아프다", description: "연골 손상 부위에 따라 통증 위치 다름" },
      { title: "X-ray에서 연골이 닳았다는 말을 들었다", description: "방사선 검사로 진단 확인" },
    ],
    symptomThreshold: "2개 이상 해당하면 무릎 관절염을 의심할 수 있습니다.",
    definition:
      "무릎 관절염은 <strong>관절 연골이 닳아 뼈와 뼈가 맞닿으면서 통증·부종·변형이 생기는 퇴행성 질환</strong>입니다. 중장년층에서 흔하며, 비만·과사용·이전 부상이 발병을 앞당깁니다. 방치 시 O자 다리 변형과 보행 장애로 이어지고 결국 인공관절 수술이 필요해질 수 있습니다. 청주를 비롯한 충북 지역 50대 이상 인구에서 가장 흔한 정형외과 질환 중 하나입니다.",
    causes: [
      { icon: "ph-person-arms-spread", title: "노화·퇴행", description: "연골 재생 능력 저하, 50대 이후 급격히 증가" },
      { icon: "ph-scales", title: "과체중", description: "무릎에 체중의 3~5배 하중, 연골 마모 가속" },
      { icon: "ph-person-simple-run", title: "반복 하중", description: "장거리 달리기·등산·쪼그리기 자세 누적" },
      { icon: "ph-bone", title: "이전 부상", description: "반월판·인대 손상 후 관절 불안정으로 이차 관절염" },
    ],
    conservativeTreatments: [
      { name: "관절연골주사 (히알루론산)", description: "관절 내 윤활 보충, 초기~중기 관절염에 효과적", type: "conservative" },
      { name: "콜라겐 주사", description: "연골 재생 지지, 관절 보호 효과", type: "conservative" },
      { name: "재생주사", description: "조직 재생 촉진 주사, 염증 억제", type: "conservative" },
      { name: "PRP 주사", description: "자기 몸에서 채혈을 통해 재생성분을 추출하여 주입 — 시행 가능한 병원이 드묾. 인공관절 전 가장 효과가 높은 치료로 알려져 있음", type: "conservative", highlight: true, highlightLabel: "★ 차별화" },
      { name: "재활치료", description: "근력 강화·보행 교정으로 관절 부하 감소", type: "conservative" },
      { name: "약물치료", description: "소염진통제, 연골 보호제", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "활액막 제거술", description: "관절 내 활액막 제거로 염증 감소, 초기~중기 적용", type: "surgical", tag: "관절경", points: ["최소 침습", "빠른 회복", "당일 또는 단기 입원"] },
      { name: "절골술 (O자 다리 교정)", description: "O자 변형 교정으로 체중 부하 분산", type: "surgical", tag: "교정술", points: ["관절 보존", "장기 효과", "말기 전 단계에 적합"] },
    ],
    surgicalCommonPoints: ["관절경 수술 최소 침습", "수술 후 조기 재활 시작", "박은수 원장 직접 집도"],
    conservativeNote: "⚠️ PRP 주사는 시행 가능한 병원이 많지 않습니다. 재활과 주사치료를 병행해야 효과가 가장 높습니다. 윈윈정형외과에서 직접 시행합니다.",
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 무릎 전문", title: "PRP 주사 직접 시행", description: "충북권에서 PRP 치료가 가능한 정형외과는 많지 않습니다. 윈윈정형외과에서는 박은수 원장이 원내 직접 시행합니다." },
      { icon: "ph-steps", title: "인공관절 전 단계별 비수술", description: "관절연골주사→콜라겐주사→재생주사→PRP까지 단계별 비수술 치료 프로토콜로 수술을 최대한 늦춥니다." },
      { icon: "ph-shield-check", title: "불필요한 수술 없는 병원", description: "비수술 치료를 최대한 시도한 후 수술 여부를 결정합니다. 섣부른 수술 권유는 하지 않습니다." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (58세, 청주 흥덕구)", source: "네이버 예약 후기", text: "다른 병원에서 인공관절 수술을 권유받고 마지막 기대로 윈윈에 왔어요. PRP 주사를 맞고 3개월이 지나니 통증이 절반 이하로 줄었습니다. 수술은 일단 미룰 수 있게 됐고, 지금도 꾸준히 관리받고 있어요." },
      { initial: "L", label: "L님 (63세, 청주 서원구)", source: "네이버 예약 후기", text: "등산을 오래 해서 무릎이 많이 망가진 상태였는데, 재생주사와 재활치료를 병행하니 확실히 걷는 게 편해졌습니다. 수술 없이 일상생활로 돌아올 수 있었어요. 원장님이 치료 계획을 꼼꼼하게 설명해 주셔서 믿음이 갔습니다." },
    ],
    recoveryIntro: "비수술 주사 치료 기준 회복 일정입니다. 치료 반응에 따라 개인차가 있을 수 있습니다.",
    recoverySteps: [
      { label: "치료 당일", detail: "PRP 주사 후 일상 복귀" },
      { label: "2~4주", detail: "통증 경감 체감" },
      { label: "3개월", detail: "관절 기능 개선" },
      { label: "6개월", detail: "재활 완료, 운동 복귀" },
    ],
    recoveryTimeline: [
      { badge: "1회", badgeSubLabel: "치료", badgeStyle: "navy", label: "효과 확인", detail: "통증 변화\n모니터링", detailMobile: "통증 변화 모니터링" },
      { badge: "3회", badgeSubLabel: "치료", badgeStyle: "sky", label: "통증 감소", detail: "주사 반응\n평가", detailMobile: "주사 반응 평가" },
      { badge: "5회", badgeSubLabel: "치료", badgeStyle: "outline", label: "보행 개선", detail: "일상생활\n불편 감소", detailMobile: "일상생활 불편 감소" },
      { badge: "3개월", badgeSubLabel: "치료", badgeStyle: "outline", label: "유지 관리", detail: "연골 보호\n지속", detailMobile: "연골 보호 지속" },
      { badge: "6개월", badgeSubLabel: "치료", badgeStyle: "gradient", label: "추시 평가", detail: "치료 지속\n여부 결정", detailMobile: "치료 지속 여부 결정" },
    ],
    relatedConditions: [
      { slug: "meniscus", category: "knee", icon: "ph-circle-dashed", label: "반월판 연골 손상", subLabel: "무릎 내 연골판 파열, 관절경 치료" },
      { slug: "tendinitis", category: "knee", icon: "ph-line-segments", label: "무릎 힘줄염", subLabel: "슬개건·대퇴사두근건 염증" },
      { slug: "osteoarthritis", category: "ankle", icon: "ph-sneaker", label: "발목 관절염", subLabel: "발목 연골 손상 전문 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/knee-osteoarthritis.webp",
    doctorId: "gwak-gyu-wan",
    faqs: [
      { question: "청주에서 무릎 관절염 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천합니다. PRP 주사를 포함한 단계별 비수술 치료가 가능하며, 관절·연골 재생 전문으로 직접 진료합니다. 인공관절 전 최선의 치료를 먼저 시도합니다." },
      { question: "PRP 주사가 무릎 관절염에 효과가 있나요?", answer: "인공관절 전 단계에서 효과가 가장 높은 치료 중 하나입니다. 자가혈에서 성장인자를 농축해 재생성분을 이용하여 관절에 주입하면 염증을 억제하고 연골을 보호합니다. 다만 시행 가능한 병원이 많지 않아 전문 정형외과에서 받으시는 것이 중요합니다." },
      { question: "무릎 관절염은 수술 없이 나을 수 있나요?", answer: "초기~중기는 비수술 치료로 충분히 통증을 관리하고 악화를 늦출 수 있습니다. 관절연골주사·PRP주사·재활치료 등을 단계별로 시도하며, 비수술 치료가 모두 실패한 말기에만 인공관절 수술을 검토합니다." },
      { question: "주사 치료는 얼마나 자주 받아야 하나요?", answer: "주사 종류에 따라 다릅니다. 히알루론산 주사는 보통 주 1회 3~5회 코스, PRP·재생주사는 상태에 따라 1~3회 시행 후 효과를 평가합니다. 전문의와 상담 후 개인 맞춤 치료 계획을 세우는 것이 중요합니다." },
      { question: "인공관절 수술은 언제 필요한가요?", answer: "비수술 치료를 모두 시도했음에도 일상생활이 불가능할 정도로 통증이 지속되고, 영상 검사에서 말기 연골 소실이 확인된 경우에 검토합니다. 윈윈정형외과에서는 불필요한 수술 권유 없이 비수술을 최대한 시도한 후 결정합니다." },
    ],
    medicalCondition: {
      name: "무릎 관절염",
      alternateName: ["Knee Osteoarthritis", "퇴행성 무릎 관절염"],
      description: "무릎 관절의 연골이 닳아 뼈끼리 부딪히면서 통증과 부종이 발생하는 퇴행성 질환입니다.",
      anatomy: "무릎 관절 (슬관절)",
      treatments: [
        { name: "PRP 재생 주사", type: "Conservative" },
        { name: "관절경 수술", type: "Surgical" },
        { name: "인공관절 치환술", type: "Surgical" },
      ],
    },
    datePublished: "2025-02-01",
    dateModified: "2026-04-10",
  },
  {
    slug: "meniscus",
    category: "knee",
    categoryLabel: "무릎",
    title: "청주 반월판 연골 손상 치료",
    titleShort: "반월판 연골 손상",

    metaTitle: "청주 반월판 연골 손상 치료 — 윈윈정형외과",
    metaDescription: "청주 정형외과 윈윈에서 반월판 연골 손상 치료. 관절경 봉합·절제 수술, 재활치료.",
    keywords: "청주 반월판, 반월판 연골, 무릎 연골 수술 청주",
    canonicalPath: "/knee/meniscus",
    heroTitle: "청주 반월판 연골 손상",
    heroSubtitle: "수술 후 빠른 재활, 조기 복귀",
    heroDescription: "반월판 연골 손상은 수술 후 재활이 예후를 결정합니다. 윈윈정형외과는 반월판 연골 부분 절제술 후 짧은 입원·빠른 재활을 통해 일상과 스포츠 복귀를 앞당깁니다. 스포츠 재활 전문 팀이 수술 당일부터 재활을 함께 설계합니다.",
    badges: [
      { label: "금식 없는 당일 수술", color: "bg-win-sky-light text-win-sky", icon: "ph-house" },
      { label: "조기 보행", color: "bg-green-50 text-green-700", icon: "ph-person-simple-walk" },
      { label: "스포츠 재활", color: "bg-blue-50 text-win-navy", icon: "ph-trophy" },
    ],
    symptoms: [
      { title: "무릎을 굽히거나 펼 때 잠기는 느낌이 든다", description: "연골 파편이 관절 사이에 끼어드는 증상" },
      { title: "계단·쪼그리기에서 무릎 안쪽 또는 바깥쪽이 아프다", description: "파열 위치에 따라 통증 부위 다름" },
      { title: "운동·부상 후 무릎이 갑자기 부어올랐다", description: "반월판 손상 시 급격한 부종 발생" },
      { title: "무릎에서 \u201C딱\u201D 소리가 나며 통증이 생겼다", description: "파열된 연골판 이동 시 잡음 발생" },
      { title: "무릎이 완전히 펴지지 않는다", description: "연골 파편 끼임으로 운동 범위 제한" },
      { title: "체중을 실으면 무릎이 불안정하게 느껴진다", description: "연골판 손상으로 관절 안정성 저하" },
    ],
    symptomThreshold: "2개 이상 해당하면 반월판 연골 손상을 의심할 수 있습니다.",
    definition: "반월판 연골은 무릎 관절 안쪽·바깥쪽에 위치한 <strong>C자형 연골로, 충격 흡수와 안정성을 담당</strong>합니다. 비틀림·압박 충격으로 찢어지거나 파열되면 통증·부종·잠김 증상이 나타나며, 방치 시 관절 연골이 추가 손상되어 조기 관절염으로 이어질 수 있습니다. 청주를 비롯한 충북 지역 운동인구·스포츠 활동층에서 자주 발생하는 정형외과 질환입니다.",
    causes: [
      { icon: "ph-soccer-ball", title: "스포츠 비틀림", description: "축구·농구·스키 중 갑작스러운 방향 전환으로 무릎에 비틀림 충격 발생" },
      { icon: "ph-person-simple", title: "과도한 쪼그리기", description: "장시간 쪼그린 자세나 무릎 과굴곡으로 연골판에 과부하 누적" },
      { icon: "ph-person-arms-spread", title: "퇴행성 파열", description: "연골 노화로 탄력이 줄어 경미한 동작에도 파열이 발생하는 경우" },
      { icon: "ph-warning-circle", title: "직접 충격", description: "교통사고·낙상으로 무릎 외측에 강한 충격이 가해져 발생" },
    ],
    conservativeTreatments: [
      { name: "안정·냉찜질·압박 고정", description: "급성기 부종 및 통증 조절", type: "conservative" },
      { name: "소염진통제", description: "염증 억제, 통증 완화", type: "conservative" },
      { name: "재활치료", description: "근력 강화·보행 교정으로 관절 안정성 회복", type: "conservative" },
      { name: "주사치료", description: "부종 조절 및 통증 관리", type: "conservative" },
    ],
    surgicalTreatments: [
      {
        name: "반월판 연골 부분 절제술 (관절경)",
        description: "파열 부위를 관절경으로 부분 절제하여 손상된 연골을 다듬는 수술로, 빠른 회복과 짧은 입원이 특징입니다.",
        type: "surgical",
        tag: "주치료",
        points: ["최소 침습 관절경 수술", "1~3일 입원 후 퇴원"],
      },
      {
        name: "반월판 봉합술",
        description: "파열 위치·크기에 따라 선택하는 수술로, 연골 보존이 가능합니다.",
        type: "surgical",
        points: ["파열 형태 평가 후 결정", "자연 치유력 활용", "한달간 비체중부하보행"],
      },
    ],
    surgicalCommonPoints: [
      "관절경 최소 침습 수술",
      "수술 당일~1일부터 재활 시작",
      "1~3일 입원 후 퇴원",
      "정형외과 전문의 직접 집도",
    ],
    treatmentNote: "⚠️ 잠김 증상이 있거나 파열이 크고 스포츠 복귀를 목표로 한다면 <strong>수술적 치료를 권장합니다.</strong>",
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 스포츠 재활", title: "수술 후 빠른 재활", description: "충북권 스포츠 수술·재활 전문 센터. 타원 통상 2주 후 재활 시작 대비, 본원은 수술 당일~1일부터 재활을 시작합니다." },
      { icon: "ph-lightning", title: "짧은 입원, 빠른 복귀", description: "관절경 반월판 부분 절제술 기준 1~3일 입원 후 퇴원이 가능합니다. 짧은 입원으로 빠르게 일상으로 돌아갑니다." },
      { icon: "ph-trophy", title: "스포츠 재활 전문팀", description: "수술 후 재활부터 스포츠 복귀까지 원스톱 관리. 목표에 맞는 맞춤 재활 프로그램을 설계합니다." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (32세, 청주 흥덕구)", source: "네이버 예약 후기", text: "풋살을 하다가 반월판이 파열됐는데, 수술 다음날부터 재활을 시작하고 2주 만에 혼자 걸어서 퇴원했어요. 6주 후엔 다시 운동을 시작할 수 있었습니다. 다른 병원에서는 한 달은 쉬어야 한다고 했는데 정말 빨랐어요." },
      { initial: "L", label: "L님 (45세, 청주 서원구)", source: "네이버 예약 후기", text: "계단을 내려오다가 무릎이 잠기는 느낌이 생겨서 내원했는데 반월판 파열이었어요. 수술 후 입원 기간이 짧아서 직장 복귀도 빨리 할 수 있었고, 재활치료 선생님들이 회복 과정을 꼼꼼하게 도와주셔서 만족스러웠습니다." },
    ],
    recoveryIntro: "수술 방법에 따라 차이가 있을 수 있습니다. 아래는 관절경 부분 절제술 기준 일반적인 회복 일정입니다.",
    recoverySteps: [
      { label: "수술 후 1~2일", detail: "보행 시작" },
      { label: "2~4주", detail: "일상 복귀" },
      { label: "3~4개월", detail: "스포츠 복귀" },
    ],
    recoveryTimeline: [
      { badge: "1~3일", badgeSubLabel: "수술", badgeStyle: "sky", label: "퇴원", detail: "경과에 따라\n퇴원", detailMobile: "경과에 따라 퇴원" },
      { badge: "~2주", badgeSubLabel: "수술", badgeStyle: "outline", label: "보행 정상화", detail: "일상 보행\n회복", detailMobile: "일상 보행 회복" },
      { badge: "2~6주", badgeSubLabel: "수술", badgeStyle: "outline", label: "재활·가벼운 운동", detail: "재활을 통해\n일상 및 가벼운 운동", detailMobile: "재활을 통해 일상 및 가벼운 운동" },
      { badge: "2개월", badgeSubLabel: "수술", badgeStyle: "gradient", label: "스포츠 복귀", detail: "스포츠 활동\n복귀 목표", detailMobile: "스포츠 활동 복귀 목표" },
    ],
    relatedConditions: [
      { slug: "acl-pcl", category: "knee", icon: "ph-bandaids", label: "십자인대 손상", subLabel: "전방·후방 십자인대 파열, 스포츠 재활 전문" },
      { slug: "osteoarthritis", category: "knee", icon: "ph-bone", label: "무릎 관절염", subLabel: "PRP 주사 포함 단계별 비수술 치료" },
      { slug: "rehabilitation", category: "sports-rehab", icon: "ph-trophy", label: "스포츠 재활", subLabel: "수술 후 원스톱 재활 프로그램" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/knee-meniscus.webp",
    doctorId: "gwak-gyu-wan",
    faqs: [
      { question: "청주에서 반월판 연골 손상 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천합니다. 관절경 반월판 수술 후 스포츠 재활 전문 팀이 함께 운영되며, 짧은 입원과 빠른 재활로 복귀를 앞당깁니다. 정형외과 전문의가 관절경 수술을 직접 집도합니다." },
      { question: "반월판 파열은 반드시 수술해야 하나요?", answer: "반월판 파열이 확인되면 대부분의 경우 수술적 치료가 필요합니다. 파열된 연골은 자연 회복이 어려우며, 통증·부종·잠김 증상이 지속되는 경우 수술을 통해 파열 부위를 정리해야 합니다. 파열 형태와 위치에 따라 부분 절제술 또는 봉합술을 선택하며, 전문의 진단 후 결정합니다." },
      { question: "수술 후 얼마나 쉬어야 하나요?", answer: "관절경 부분 절제술 후에는 보행이 비교적 빠르게 회복되며, 절제 범위가 작은 경우 1~2개월 내 스포츠 복귀도 가능합니다. 봉합술은 한달간 비체중부하보행이 필요하며, 운동 복귀는 3개월 이상 소요됩니다." },
      { question: "재발 가능성이 있나요?", answer: "재활을 충분히 완료하고 근력을 회복한다면 재파열 위험을 최소화할 수 있습니다. 수술 후 재활 프로그램을 끝까지 이수하는 것이 중요합니다." },
      { question: "관절경 수술이란 무엇인가요?", answer: "작은 구멍 2~3개를 통해 카메라와 수술 기구를 삽입해 치료하는 최소 침습 수술입니다. 절개가 작아 흉터가 적고 회복이 빠르며, 반월판 연골 수술에 표준적으로 사용됩니다." },
    ],
    medicalCondition: {
      name: "반월판 연골 손상",
      alternateName: ["Meniscus Tear", "무릎 연골 파열"],
      description: "무릎 관절 내 반월판(연골)이 찢어져 통증, 부종, 잠김 증상이 발생하는 질환입니다.",
      anatomy: "무릎 반월판 (Meniscus)",
      treatments: [
        { name: "관절경 봉합술", type: "Surgical" },
        { name: "관절경 부분 절제술", type: "Surgical" },
        { name: "재활치료", type: "Conservative" },
      ],
    },
    datePublished: "2025-02-01",
    dateModified: "2026-04-10",
  },
  {
    slug: "acl-pcl",
    category: "knee",
    categoryLabel: "무릎",
    title: "청주 십자인대 손상 치료 · 수술",
    titleShort: "십자인대 손상",
    metaTitle: "청주 십자인대 손상 치료 · 수술 — 윈윈정형외과",
    metaDescription: "청주 정형외과 윈윈에서 십자인대 손상(ACL/PCL) 치료. 재건술 및 스포츠 재활 전문.",
    keywords: "청주 십자인대, ACL 재건술, PCL 수술 청주, 무릎 인대 청주",
    canonicalPath: "/knee/acl-pcl",
    heroTitle: "청주 십자인대 손상",
    heroSubtitle: "스포츠 재활 전문, 빠른 복귀",
    heroDescription: "십자인대 손상은 수술만큼 재활이 중요합니다. 윈윈정형외과는 재활치료와 수술치료 모두 가능하며, 스포츠 재활 전문 팀이 복귀 목표에 맞는 프로그램을 직접 설계합니다. 타원 대비 빠른 스포츠 복귀를 목표로 합니다.",
    badges: [
      { label: "스포츠 재활", color: "bg-win-navy text-white", icon: "ph-person-simple-run" },
      { label: "당일 수술", color: "bg-win-sky-light text-win-sky", icon: "ph-house" },
      { label: "조기 보행", color: "bg-green-50 text-green-700", icon: "ph-person-simple-walk" },
    ],
    symptoms: [
      { title: "부상 순간 \u201C뚝\u201D 소리와 함께 무릎이 꺾였다", description: "십자인대 파열의 특징적 증상" },
      { title: "무릎이 빠지거나 흔들리는 느낌이 든다", description: "인대 손상으로 인한 관절 불안정성" },
      { title: "부상 직후 무릎이 심하게 부어올랐다", description: "혈관 손상으로 인한 급격한 혈종 형성" },
      { title: "계단 내려오기·방향 전환 시 무릎이 불안정하다", description: "일상 동작에서 반복되는 불안정감" },
      { title: "운동 중 무릎에 힘이 빠지는 느낌이 반복된다", description: "만성 불안정증으로 진행 중" },
      { title: "부상 후 통증이 가라앉았지만 불안정감이 남아 있다", description: "급성기 이후에도 기능 저하 지속" },
    ],
    symptomThreshold: "2개 이상 해당하면 십자인대 손상을 의심할 수 있습니다.",
    definition: "십자인대는 무릎 관절 내 전방(ACL)·후방(PCL) 십자인대로, <strong>무릎의 앞뒤 안정성을 유지합니다.</strong> 스포츠 중 급격한 방향 전환·착지 충격으로 파열되며, 파열 순간 \u201C뚝\u201D 소리와 급격한 부종이 특징입니다. 방치 시 만성 불안정증으로 이어져 반월판·연골 추가 손상과 조기 관절염을 유발합니다. 청주를 비롯한 충북 지역 스포츠 활동층·청장년층에서 빈번히 발생합니다.",
    causes: [
      { icon: "ph-soccer-ball", title: "급격한 방향 전환", description: "축구·농구·배드민턴 중 피벗 동작" },
      { icon: "ph-person-simple-run", title: "착지 충격", description: "점프 후 한쪽 무릎으로 착지" },
      { icon: "ph-snowflake", title: "스키·스노보드", description: "넘어질 때 무릎 비틀림 충격" },
      { icon: "ph-lightning", title: "직접 충돌", description: "타 선수·물체와의 정면 충돌" },
    ],
    conservativeTreatments: [
      { name: "재활치료", description: "근력 강화·고유감각 훈련으로 불안정성 보완. 부분 파열·활동량 낮은 환자는 재활로 충분히 관리 가능", type: "conservative", highlight: true, highlightLabel: "★ 필수", highlightStyle: "sky-inline" },
      { name: "보조기 착용", description: "관절 보호 및 안정성 보완", type: "conservative" },
      { name: "소염진통제", description: "급성기 통증 및 염증 조절", type: "conservative" },
      { name: "주사치료", description: "급성기 부종 조절, 통증 관리", type: "conservative" },
    ],
    surgicalTreatments: [
      {
        name: "전방십자인대 재건술 (ACL 재건)",
        description: "자가건 또는 동종건 이식, 관절경으로 시행하는 표준 수술",
        type: "surgical",
        tag: "주치료",
        points: ["관절경 최소 침습", "자가건 또는 동종건 선택", "수술 후 스포츠 재활 연계"],
      },
      {
        name: "후방십자인대 재건술 (PCL 재건)",
        description: "필요 시 시행, 반월판·연골 동반 손상 시 동시 수술 가능",
        type: "surgical",
        tag: "필요시",
        points: ["동반 손상 동시 처리"],
      },
    ],
    surgicalCommonPoints: [
      "관절경 최소 침습 수술",
      "수술 후 즉시 재활 시작",
      "스포츠 재활 전문팀 연계",
    ],
    treatmentNote: "⚠️ 비수술 치료는 부분 파열·활동량이 낮은 환자에게 적합합니다. <strong>완전 파열이거나 스포츠 복귀를 원한다면 전문의 진단 후 수술 여부를 결정합니다.</strong>",
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 스포츠 재활 전문", title: "충북권 스포츠 수술·재활 전문 센터", description: "수술 후 재활부터 현장 복귀까지 원스톱으로 관리합니다." },
      { icon: "ph-lightning", title: "타원 대비 빠른 복귀", description: "타원 통상 ACL 재건 후 9~12개월 복귀 대비, 본원 집중 재활로 6~8개월 목표. 재활 충실도에 따라 더 단축될 수 있습니다." },
      { icon: "ph-scan", title: "재활·수술 모두 원내 가능", description: "재활치료와 수술치료를 한 곳에서 결정하고 진행합니다. 전원 없이 연속적인 치료가 가능합니다." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (26세, 청주 흥덕구)", source: "네이버 예약 후기", text: "축구 중에 ACL이 완전히 파열됐어요. 재건술 후 스포츠 재활을 꾸준히 받았는데, 6개월 만에 다시 경기장에 설 수 있었습니다. 타 병원에서는 1년은 잡아야 한다고 했는데, 집중 재활 덕분에 훨씬 빨리 복귀할 수 있었어요." },
      { initial: "L", label: "L님 (38세, 청주 서원구)", source: "네이버 예약 후기", text: "달리기 중에 십자인대 부분 파열이 왔는데, 수술 없이 재활치료만으로도 회복이 됐어요. 처음엔 수술해야 하나 걱정했는데, 정확한 진단 후 재활로 충분하다는 판단을 해주셔서 감사했습니다. 지금은 마라톤도 다시 뛰고 있어요." },
    ],
    recoveryIntro: "수술 기준 타임라인입니다. 재활 충실도에 따라 기간이 단축될 수 있습니다.",
    recoverySteps: [
      { label: "수술 후 2주", detail: "보행 시작" },
      { label: "3개월", detail: "일상 복귀" },
      { label: "6~8개월", detail: "스포츠 복귀" },
    ],
    recoveryTimeline: [
      { badge: "당일~1주", badgeSubLabel: "수술", badgeStyle: "navy", label: "통증 조절 및 붓기 감소", detail: "통증·부종\n집중 관리", detailMobile: "통증·부종 집중 관리" },
      { badge: "1~2주", badgeSubLabel: "수술", badgeStyle: "sky", label: "보행 및 각도 운동", detail: "일상 보행\n각도 회복", detailMobile: "일상 보행 및 각도 회복" },
      { badge: "2~6주", badgeSubLabel: "수술", badgeStyle: "outline", label: "점진적 각도 증가", detail: "관절 가동 범위\n점진적 확장", detailMobile: "관절 가동 범위 점진적 확장" },
      { badge: "6주", badgeSubLabel: "수술", badgeStyle: "outline", label: "밸런스·코어 운동", detail: "밸런스·코어\n퍼포먼스 훈련", detailMobile: "밸런스 운동을 포함한 코어, 퍼포먼스 운동" },
      { badge: "3~6개월", badgeSubLabel: "수술", badgeStyle: "gradient", label: "스포츠 복귀", detail: "스포츠 복귀를 위한\n집중 재활", detailMobile: "스포츠 복귀를 위한 집중 재활" },
    ],
    relatedConditions: [
      { slug: "meniscus", category: "knee", icon: "ph-bone", label: "반월판 연골 손상", subLabel: "연골판 파열, 관절경 수술 및 재활" },
      { slug: "rehabilitation", category: "sports-rehab", icon: "ph-person-simple-run", label: "스포츠 재활", subLabel: "수술 후 복귀까지 원스톱 재활" },
      { slug: "ligament-tendinitis", category: "ankle", icon: "ph-sneaker", label: "발목 인대 파열·힘줄염", subLabel: "발목 인대 손상 전문 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/knee-acl.webp",
    doctorId: "gwak-gyu-wan",
    faqs: [
      { question: "청주에서 십자인대 손상 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천합니다. 재활치료와 수술치료 모두 가능하며, 스포츠 재활 전문팀이 복귀 목표에 맞는 맞춤 프로그램을 운영합니다." },
      { question: "십자인대 파열이면 무조건 수술해야 하나요?", answer: "반드시 그렇지는 않습니다. 부분 파열이거나 활동량이 낮은 경우에는 재활치료만으로 관리가 가능합니다. 완전 파열이거나 스포츠 복귀를 목표로 한다면 수술을 권장하며, 전문의 진단 후 결정합니다." },
      { question: "수술 없이 나을 수 있나요?", answer: "재활치료로 불안정성을 보완하고 근력을 회복하면 일상생활 복귀가 가능합니다. 다만 스포츠 활동이나 격렬한 운동 복귀를 원한다면 수술을 고려하는 것이 좋습니다." },
      { question: "수술 후 운동 복귀까지 얼마나 걸리나요?", answer: "집중 재활을 기준으로 6~8개월을 목표로 합니다. 재활 충실도와 개인 회복 속도에 따라 단축될 수 있습니다." },
      { question: "재파열 가능성이 있나요?", answer: "재활을 완료하고 근력 균형을 회복하면 재파열 위험을 최소화할 수 있습니다. 복귀 후 6개월간은 예방 훈련과 근력 관리를 꾸준히 이어가는 것을 권장합니다." },
    ],
    medicalCondition: {
      name: "십자인대 손상",
      alternateName: ["ACL/PCL Injury", "십자인대 파열"],
      description: "무릎 관절 내 전방·후방 십자인대가 파열되는 질환입니다.",
      anatomy: "전방·후방 십자인대",
      treatments: [
        { name: "ACL 재건술", type: "Surgical" },
        { name: "PCL 재건술", type: "Surgical" },
        { name: "재활치료", type: "Conservative" },
      ],
    },
    datePublished: "2025-02-01",
    dateModified: "2026-04-10",
  },
  {
    slug: "tendinitis",
    category: "knee",
    categoryLabel: "무릎",
    title: "청주 무릎 힘줄염 치료",
    titleShort: "무릎 힘줄염",
    metaTitle: "청주 무릎 힘줄염 치료 — 윈윈정형외과",
    metaDescription: "청주 정형외과 윈윈에서 무릎 힘줄염(슬개건염) 치료. PRP 주사, ESWT, 재활치료.",
    keywords: "청주 무릎 힘줄염, 슬개건염 치료, 점퍼스 니 청주",
    canonicalPath: "/knee/tendinitis",
    heroTitle: "청주 무릎 힘줄염,",
    heroSubtitle: "정확한 진단, PRP 재생 치료 ,스포츠 재활까지",
    heroDescription: "무릎 힘줄염은 원인 힘줄을 정확히 진단해야 효과적인 치료가 가능합니다. 윈윈정형외과는 약물치료·ESWT·염증 억제 주사·재생주사·콜라겐 주사·PRP 주사까지 단계별 치료를 제공합니다. PRP 주사는 시행 가능한 병원이 많지 않으며, 스포츠 재활 전문팀과 함께 빠른 복귀를 목표로 합니다.",
    badges: [
      { label: "PRP 치료", color: "bg-purple-50 text-purple-600", icon: "ph-drop" },
      { label: "비수술 우선", color: "bg-orange-50 text-orange-600", icon: "ph-shield-check" },
    ],
    symptoms: [
      { title: "무릎 아래(슬개건) 또는 위쪽(대퇴사두근건)이 아프다", description: "힘줄 위치에 따라 통증 부위 다름" },
      { title: "운동 후 무릎 앞쪽 통증이 지속된다", description: "활동 후 통증이 오래 지속되는 것이 특징" },
      { title: "계단·뛰기·점프 시 통증이 심해진다", description: "힘줄에 부하가 집중되는 동작에서 악화" },
      { title: "손으로 눌렀을 때 특정 부위가 콕 아프다", description: "해당 힘줄 부착부 압통 특징적" },
      { title: "아침 기상 시 무릎 앞쪽이 뻣뻣하고 아프다", description: "염증 부위 조직이 굳어 있는 상태" },
      { title: "스포츠 중 통증이 반복되어 운동을 줄이고 있다", description: "만성화로 진행 중인 증거" },
    ],
    symptomThreshold: "2개 이상 해당하면 무릎 힘줄염을 의심할 수 있습니다.",
    definition: "무릎 힘줄염은 <strong>슬개건·대퇴사두근건 등 무릎 주변 힘줄에 반복 자극이 쌓여 염증·미세 파열이 생기는 질환</strong>입니다. 점프·달리기·계단 사용이 잦은 스포츠 활동층에서 흔하며, 무릎 앞쪽 통증과 압통이 특징입니다. 방치 시 힘줄 부분 파열로 악화되고 스포츠 복귀가 어려워집니다. 청주를 비롯한 충북 지역 운동인구에서 자주 발생하며, 정확한 진단이 치료 성패를 결정합니다.",
    causes: [
      { icon: "ph-person-simple-run", title: "과사용·반복 충격", description: "달리기·점프·계단 반복으로 힘줄 누적 손상" },
      { icon: "ph-soccer-ball", title: "스포츠 훈련 급증", description: "훈련량을 갑자기 늘릴 때 힘줄 적응 실패" },
      { icon: "ph-sneaker", title: "잘못된 신발·자세", description: "쿠션 부족 신발, 잘못된 착지 자세" },
      { icon: "ph-barbell", title: "대퇴사두근 약화", description: "근력 불균형으로 힘줄에 과부하 집중" },
    ],
    conservativeTreatments: [
      { name: "약물치료", description: "소염진통제로 급성 염증 조절", type: "conservative" },
      { name: "ESWT (체외충격파)", description: "힘줄 내 석회·만성 염증 분해 효과", type: "conservative" },
      { name: "염증 억제 주사", description: "스테로이드 주사, 급성기 통증 신속 완화", type: "conservative" },
      { name: "재생주사", description: "힘줄 재생 촉진, 조직 회복", type: "conservative" },
      { name: "콜라겐 주사", description: "힘줄 구조 강화, 재파열 예방", type: "conservative" },
      { name: "PRP 주사", description: "자기 몸에서 채혈을 통해 재생성분을 추출하여 주입 — 시행 가능한 병원이 드묾. 인공관절 전 가장 효과가 높은 치료로 알려져 있음", type: "conservative", highlight: true, highlightLabel: "★ 차별화" },
      { name: "재활치료", description: "대퇴사두근·슬건 근력 강화, 편심성 운동 프로토콜", type: "conservative" },
    ],
    surgicalTreatments: [
      {
        name: "골극 및 염증 제거술",
        description: "절개를 통해 힘줄을 자극하는 자라난 뼈(골극)와 남은 염증 조직을 제거하여 파열을 막고 회복을 돕습니다.",
        type: "surgical",
        tag: "비수술 치료로 호전이 없을 시",
        points: [
          "체외충격파, 주사 등 비수술 치료에 반응이 없는 극소수의 경우에만 고려",
          "힘줄 부착부에 자라나 통증을 유발하는 뼈(골극) 집중 제거",
          "필요한 부위만 절개하여 진행하며, 수술 후 재활 필수",
        ],
      },
    ],
    conservativeNote: "⚠️ PRP 주사는 시행 가능한 병원이 많지 않습니다. 만성 힘줄염·반복 재발 환자에게 특히 효과적이며, 윈윈정형외과에서 직접 시행합니다.",
    surgicalCommonPoints: ["비수술 최우선 원칙", "정확한 진단 후 치료 결정", "수술 후 재활 프로그램 필수"],
    treatmentDiagnosisWarning: {
      title: "⚠️ 정확한 진단이 먼저입니다",
      text: "무릎 앞쪽 통증의 원인은 슬개건염·대퇴사두근건염·슬개대퇴증후군 등 여러 가지입니다. 정확한 진단 없이 치료하면 효과가 없을 수 있습니다.",
    },
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 무릎 힘줄염 전문", title: "정확한 진단 + PRP 직접 시행", description: "일반적인 염증·재생 주사 외에 PRP 치료의 옵션이 추가로 있습니다. 충북권에서 PRP 치료가 가능한 정형외과는 드뭅니다." },
      { icon: "ph-steps", title: "상황에 맞는 비수술 치료 선택", description: "약물치료·ESWT·염증주사·재생주사·콜라겐주사·PRP주사 등 다양한 옵션 중 꼭 단계적 순서가 아니더라도 상황에 맞는 적절한 주사 치료를 선택하여 진행합니다." },
      { icon: "ph-person-simple-run", title: "스포츠 재활 전문팀", description: "충북권 스포츠 재활 전문 센터. 복귀 목표에 맞는 맞춤 재활 프로그램으로 타원 대비 빠른 복귀를 목표로 합니다." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (29세, 청주 흥덕구)", source: "네이버 예약 후기", text: "축구 훈련 후 슬개건염이 반복됐는데, 다른 병원에서는 쉬라는 말만 들었어요. 윈윈에서 PRP 주사와 재활치료를 병행했더니 3개월 만에 다시 운동을 할 수 있었습니다. 정확한 진단을 먼저 해주신 덕분에 치료가 빨랐어요." },
      { initial: "L", label: "L님 (42세, 청주 서원구)", source: "네이버 예약 후기", text: "마라톤 훈련 중 무릎 앞쪽 통증이 생겨서 내원했는데, 초음파로 정확히 어느 힘줄인지 확인 후 ESWT와 재활을 받았어요. 치료를 받으면서도 강도를 조절해 훈련을 이어갈 수 있었고, 완쾌 후 마라톤 완주에 성공했습니다." },
    ],
    recoveryIntro: "치료 방법 및 개인 상태에 따라 차이가 있을 수 있습니다. 아래는 치료 횟수 기준 일반적인 회복 일정입니다.",
    recoverySteps: [
      { label: "치료 시작", detail: "PRP 주사 + 재활" },
      { label: "4~6주", detail: "통증 경감" },
      { label: "3개월", detail: "스포츠 복귀" },
    ],
    recoveryTimeline: [
      { badge: "1회", badgeSubLabel: "치료", badgeStyle: "navy", label: "효과 확인", detail: "통증 변화\n모니터링", detailMobile: "통증 변화 모니터링" },
      { badge: "3회", badgeSubLabel: "치료", badgeStyle: "sky", label: "통증 감소", detail: "주요 염증\n완화", detailMobile: "주요 염증 완화" },
      { badge: "5회", badgeSubLabel: "치료", badgeStyle: "outline", label: "가벼운 운동", detail: "일상 활동\n재개", detailMobile: "일상 활동 재개" },
      { badge: "1-2개월", badgeSubLabel: "치료", badgeStyle: "outline", label: "훈련 복귀", detail: "스포츠 훈련\n재개", detailMobile: "스포츠 훈련 재개" },
      { badge: "2-3개월", badgeSubLabel: "치료", badgeStyle: "gradient", label: "완전 복귀", detail: "경기·전력\n훈련 복귀", detailMobile: "경기·전력 훈련 복귀" },
    ],
    relatedConditions: [
      { slug: "osteoarthritis", category: "knee", icon: "ph-bone", label: "무릎 관절염", subLabel: "PRP 주사 포함 단계별 비수술 치료" },
      { slug: "acl-pcl", category: "knee", icon: "ph-bandaids", label: "십자인대 손상", subLabel: "재활·수술 모두 가능, 스포츠 재활 전문" },
      { slug: "rehabilitation", category: "sports-rehab", icon: "ph-person-simple-run", label: "스포츠 재활", subLabel: "복귀까지 원스톱 재활 프로그램" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/knee-tendonitis.webp",
    doctorId: "gwak-gyu-wan",
    faqs: [
      { question: "청주에서 무릎 힘줄염 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천합니다. 초음파 기반 정확한 진단 후 PRP·재생주사 등 단계별 비수술 치료가 가능하며, 스포츠 재활 전문팀이 복귀를 앞당깁니다." },
      { question: "PRP 주사가 힘줄염에 효과 있나요?", answer: "만성 힘줄염·반복 재발 환자에게 특히 효과적입니다. 자가혈에서 성장인자를 농축해 힘줄에 주입하면 염증을 억제하고 힘줄 재생을 촉진합니다. 다만 시행 가능한 병원이 많지 않아 전문 정형외과에서 받으시는 것이 중요합니다." },
      { question: "힘줄염은 수술 없이 나을 수 있나요?", answer: "대부분의 무릎 힘줄염은 비수술 치료로 회복이 가능합니다. ESWT·PRP주사·재활치료 등을 단계별로 시도하며, 비수술 치료가 모두 실패한 경우에만 수술을 검토합니다." },
      { question: "운동을 완전히 쉬어야 하나요?", answer: "완전 중단보다 강도 조절을 권장합니다. 재활치료를 병행하면서 적절한 수준의 활동을 유지하는 것이 회복에 더 효과적입니다." },
      { question: "재발 방지법이 있나요?", answer: "대퇴사두근 근력 강화와 스트레칭을 일상화하고, 훈련량을 급격히 늘리는 것을 피해야 합니다. 적절한 쿠션의 운동화 착용과 착지 자세 교정도 중요합니다." },
    ],
    medicalCondition: {
      name: "무릎 힘줄염",
      alternateName: ["Patellar Tendinitis", "슬개건염", "점퍼스 니"],
      description: "슬개골 아래 힘줄에 반복 미세 손상이 축적되어 통증이 생기는 질환입니다.",
      anatomy: "슬개건 (Patellar Tendon)",
      treatments: [
        { name: "PRP 주사", type: "Conservative" },
        { name: "ESWT 체외충격파", type: "Conservative" },
      ],
    },
    datePublished: "2025-02-15",
    dateModified: "2026-04-10",
  },
  // ========== SHOULDER ==========
  {
    slug: "rotator-cuff",
    category: "shoulder",
    categoryLabel: "어깨",
    title: "청주 회전근개 파열 치료 · 수술",
    titleShort: "회전근개 파열",
    metaTitle: "청주 회전근개 파열 치료 · 수술 — 윈윈정형외과",
    metaDescription: "청주 정형외과 윈윈에서 회전근개 파열 치료. PRP 주사 비수술부터 관절경 봉합 수술까지, 전문의 직접 집도.",
    keywords: "청주 회전근개 파열, 어깨 힘줄 파열, PRP 주사 청주, 어깨 수술 청주",
    canonicalPath: "/shoulder/rotator-cuff",
    heroTitle: "청주 회전근개 파열",
    heroSubtitle: "정확한 진단, PRP 재생 치료 ,스포츠 재활까지",
    heroDescription: "어깨 힘줄이 찢어졌다고 무조건 수술이 필요한 건 아닙니다. 파열 정도에 따라 ESWT·PRP 주사·재생주사로 수술 없이 회복 가능합니다. PRP 주사를 시행하는 정형외과는 많지 않습니다 — 윈윈에서 받으실 수 있습니다.",
    badges: [
      { label: "비수술 치료 우선", color: "bg-orange-50 text-orange-600", icon: "ph-leaf" },
      { label: "주사치료", color: "bg-purple-50 text-purple-600", icon: "ph-drop" },
      { label: "재활치료", color: "bg-green-50 text-green-700", icon: "ph-activity" },
    ],
    symptoms: [
      { title: "팔을 들어 올릴 때 어깨 앞·측면이 찌릿하게 아프다", description: "특히 팔을 머리 위로 올릴 때 통증" },
      { title: "밤에 누우면 어깨 통증이 심해져 잠을 못 잔다", description: "야간통으로 수면 방해" },
      { title: "팔을 옆으로 들 때 특정 각도(60~120도)에서 통증이 심하다", description: "통증 호(painful arc) 증상" },
      { title: "힘이 빠져 물건을 들거나 머리를 감기 어렵다", description: "어깨 근력 저하" },
      { title: "어깨에서 뚝 소리가 났거나, 그 이후로 통증이 생겼다", description: "외상 후 통증 지속" },
    ],
    symptomThreshold: "2개 이상 해당하면 회전근개 파열을 의심할 수 있습니다.",
    definition: "회전근개 파열은 <strong>어깨를 감싸는 4개 힘줄(회전근개)이 손상·파열되어 통증과 근력 저하가 생기는 질환</strong>입니다. 과도한 사용, 외상, 노화로 인해 힘줄이 점차 닳거나 갑자기 끊어지며, 방치 시 파열 범위가 확대되어 수술 가능성이 높아집니다. 청주를 비롯한 충북 지역의 스포츠 활동 인구와 중장년층에서 빈번하게 발생합니다.",
    causes: [
      { icon: "ph-barbell", title: "과사용·반복 동작", description: "수영·야구·테니스 등 팔을 위로 드는 스포츠 반복" },
      { icon: "ph-lightning", title: "외상", description: "넘어질 때 팔로 짚거나 충격을 받아 힘줄 파열" },
      { icon: "ph-clock-countdown", title: "노화·퇴행", description: "40대 이후 힘줄 혈류 감소, 탄성 저하로 파열 위험 증가" },
      { icon: "ph-bone", title: "견봉 충돌", description: "충돌증후군과 동반 발생, 견봉이 힘줄을 지속 마찰" },
    ],
    conservativeTreatments: [
      { name: "재생주사", description: "조직 재생 지지, 힘줄 회복 보조", type: "conservative" },
      { name: "콜라겐 주사", description: "힘줄 강도 회복·보호", type: "conservative" },
      { name: "염증 억제 주사", description: "급성 통증·염증 빠른 완화", type: "conservative" },
      { name: "PRP 주사", description: "자기 몸에서 채혈을 통해 재생성분을 추출하여 주입 — 시행 가능한 병원이 드묾. 인공관절 전 가장 효과가 높은 치료로 알려져 있음", type: "conservative", highlight: true, highlightLabel: "★ 차별화", highlightStyle: "purple-name" },
      { name: "ESWT (체외충격파)", description: "힘줄 혈류 개선, 석회 분쇄 병행 가능", type: "conservative" },
      { name: "재활 치료", description: "어깨 근력 회복·자세 교정, 스포츠 복귀 프로그램 포함", type: "conservative" },
      { name: "약물치료", description: "소염진통제, 근이완제", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "관절경 봉합술", description: "완전 파열·보존적 치료 실패 시 시행", type: "surgical", tag: "관절경", points: ["최소 절개 관절경 시술", "당일 또는 단기 입원", "수술 후 조기 재활 프로그램 연계"] },
      { name: "수술 후 재활 프로그램", description: "체계적 재활로 빠른 복귀", type: "surgical", tag: "조기 재활", points: ["어깨 가동 범위 단계별 회복", "스포츠 복귀 목표 재활", "근력 재건 전문 프로그램"] },
    ],
    surgicalCommonPoints: ["관절경 최소 절개 수술", "수술 후 보조기 착용 (4~6주)", "단기 입원 또는 당일 귀가 가능", "조기 재활로 빠른 회복"],
    conservativeNote: "PRP 주사는 시행 가능한 병원이 적습니다. 부분 파열·중등도 파열에서 수술 없이 회복 가능성을 높이는 치료입니다.",
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 비수술 어깨 전문", title: "충북권 PRP 주사 직접 시행", description: "충북권에서 회전근개 파열 치료에 PRP 주사를 직접 시행하는 정형외과는 드뭅니다. 자가혈 성장인자로 힘줄 재생을 촉진해 수술 가능성을 줄입니다." },
      { icon: "ph-magnifying-glass", title: "정확한 진단으로 불필요한 수술 없음", description: "초음파·MRI 판독으로 파열 범위를 정확히 확인 후 치료 방향 결정. 보존 치료로 회복 가능한 경우 수술 권유하지 않습니다." },
      { icon: "ph-person-simple-run", title: "스포츠 재활 전문", description: "일반 재활 대비 스포츠 복귀 기간 단축. 선수·동호인 스포츠 복귀 사례 다수, 체계적 재활 프로그램 운영." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (48세, 청주 흥덕구)", source: "네이버 예약 후기", text: "야구 동호회를 10년째 즐기는 48세 남성입니다. 어느 날 갑자기 어깨에서 뚝 소리가 나더니 팔을 들기가 힘들더라고요. 다른 병원에서 수술해야 한다고 했는데, 윈윈정형외과에서 초음파 검사를 해보니 부분 파열이라 PRP 주사 + 재활 치료로 시작했어요. 4개월 만에 야구 동호회 복귀했습니다. 수술 안 해도 됐네요." },
      { initial: "L", label: "L님 (55세, 청주 서원구)", source: "네이버 예약 후기", text: "55세 주부인데 밤마다 어깨가 너무 아파서 잠을 못 잔 게 3개월이 넘었어요. 병원에서 회전근개 파열이라는데 뭘 해야 할지 몰랐죠. 윈윈에서 재생주사 + ESWT 치료를 받았는데 2개월쯤 되니까 야간통이 사라졌어요. 수술 없이 이렇게 좋아질 줄 몰랐습니다." },
    ],
    recoveryIntro: "비수술 치료 기준 회복 일정입니다. 파열 정도와 치료 반응에 따라 차이가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "1회", badgeStyle: "navy", label: "통증 완화", detail: "주사 후 급성 통증 감소, 일상 복귀" },
      { badge: "3회", badgeStyle: "sky", label: "염증 감소", detail: "힘줄 재생 시작, 가동 범위 호전" },
      { badge: "5회", badgeStyle: "outline", label: "힘줄 회복", detail: "힘줄 강도 회복, 근력 재활 시작" },
      { badge: "1개월", badgeStyle: "outline", label: "근력 강화", detail: "스포츠 준비 운동 가능" },
      { badge: "3개월", badgeStyle: "gradient", label: "스포츠 복귀", detail: "운동·스포츠 완전 복귀" },
    ],
    relatedConditions: [
      { slug: "impingement", category: "shoulder", icon: "ph-arrows-in", label: "충돌증후군", subLabel: "회전근개 파열로 이어질 수 있는 전 단계" },
      { slug: "calcific-tendinitis", category: "shoulder", icon: "ph-diamond", label: "석회성 건염", subLabel: "힘줄 내 석회 침착으로 극심한 통증" },
      { slug: "frozen-shoulder", category: "shoulder", icon: "ph-lock", label: "오십견", subLabel: "어깨가 굳어 운동 범위 제한" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/rotator-cuff-tear.webp",
    doctorId: "gwak-gyu-wan",
    faqs: [
      { question: "청주에서 회전근개 파열 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. PRP 주사·재생주사·ESWT 등 비수술 치료를 원내에서 직접 시행합니다. 부분 파열은 수술 없이 회복을 목표로 치료하며, 완전 파열 시 관절경 수술 후 조기 재활로 빠른 복귀를 돕습니다." },
      { question: "부분 파열이면 수술 안 해도 되나요?", answer: "파열 범위와 증상에 따라 다릅니다. 부분 파열의 경우 PRP 주사·재생주사·ESWT·재활 치료로 수술 없이 회복 가능한 경우가 많습니다. 단, 파열이 진행되거나 보존 치료에 반응이 없으면 수술을 고려하게 됩니다. 정확한 진단 후 최적 치료 방향을 결정하는 것이 중요합니다." },
      { question: "PRP 주사가 힘줄 파열에 효과가 있나요?", answer: "자가혈에서 성장인자를 농축한 PRP 주사는 힘줄 재생을 촉진하는 효과가 있습니다. 특히 부분 파열과 만성 힘줄염에서 수술 없이 회복 가능성을 높이는 치료입니다. 다만 PRP 주사를 직접 시행하는 정형외과가 드물기 때문에 시행 가능한 병원을 확인하고 방문하시길 권장합니다." },
      { question: "수술 후 얼마나 쉬어야 하나요?", answer: "관절경 봉합 수술 후 보조기를 4~6주 착용하며, 가벼운 일상 활동은 4주 이후 가능합니다. 스포츠·운동 복귀는 단계적 재활 후 4~6개월을 목표로 합니다. 조기 재활 프로그램을 병행하면 회복 기간을 단축할 수 있습니다." },
      { question: "재발 가능성이 있나요?", answer: "치료 후 과도한 사용이나 외상이 있으면 재파열 가능성이 있습니다. 힘줄 회복 후 근력 강화 재활을 충분히 진행하고, 스포츠 복귀 후에도 준비 운동을 철저히 하는 것이 재발 예방의 핵심입니다." },
    ],
    medicalCondition: {
      name: "회전근개 파열",
      alternateName: ["Rotator Cuff Tear", "어깨 힘줄 파열"],
      description: "어깨를 감싸는 4개 힘줄이 손상·파열되어 통증과 근력 저하가 생기는 질환입니다.",
      anatomy: "회전근개 (어깨 힘줄)",
      treatments: [
        { name: "PRP 주사", type: "Conservative" },
        { name: "관절경 봉합술", type: "Surgical" },
        { name: "ESWT 체외충격파", type: "Conservative" },
      ],
    },
    datePublished: "2025-01-20",
    dateModified: "2026-04-10",
  },
  {
    slug: "frozen-shoulder",
    category: "shoulder",
    categoryLabel: "어깨",
    title: "청주 오십견 치료",
    titleShort: "오십견",
    metaTitle: "청주 오십견(동결견) 치료 — 윈윈정형외과",
    metaDescription: "청주 정형외과 윈윈에서 오십견(동결견) 치료. 주사치료, 도수치료, 재활운동으로 빠른 회복.",
    keywords: "청주 오십견, 동결견 치료, 어깨 굳음 청주",
    canonicalPath: "/shoulder/frozen-shoulder",
    heroTitle: "청주 오십견",
    heroSubtitle: "정확한 진단으로 굳은 어깨 빠르게 풀기",
    heroDescription: "오십견은 적절한 시기에 치료하면 수술 없이 충분히 회복됩니다. 염증 억제 주사로 통증을 낮추고, PRP·재생주사와 전문 재활로 관절 운동 범위를 회복합니다. 정확한 진단 없이 오십견으로만 방치했다가 회전근개 파열을 놓치는 경우가 있습니다 — 정확한 감별 진단이 먼저입니다.",
    badges: [
      { label: "주사치료", color: "bg-purple-50 text-purple-600", icon: "ph-drop" },
      { label: "비수술 치료 우선", color: "bg-orange-50 text-orange-600", icon: "ph-leaf" },
      { label: "재활치료", color: "bg-green-50 text-green-700", icon: "ph-activity" },
    ],
    symptoms: [
      { title: "팔을 들어 올리거나 뒤로 돌릴 때 어깨가 굳어 잘 움직이지 않는다", description: "전 방향으로 운동 범위 제한" },
      { title: "밤에 어깨 통증이 심해져 잠을 자기 어렵다", description: "야간통으로 수면 방해" },
      { title: "머리 감기, 옷 입기, 뒷주머니에 손 넣기 등 일상동작이 불편하다", description: "일상생활 장애" },
      { title: "특별한 부상 없이 수개월에 걸쳐 어깨가 서서히 굳었다", description: "외상 없는 서서히 진행" },
      { title: "양 어깨 운동 범위를 비교하면 아픈 쪽이 눈에 띄게 제한된다", description: "건측과 비교 시 차이 명확" },
    ],
    symptomThreshold: "2개 이상 해당하면 오십견을 의심할 수 있습니다.",
    definition: "오십견(유착성 관절낭염)은 어깨 관절을 감싸는 <strong>관절낭이 굳어 통증과 운동 범위 제한이 동시에 나타나는 질환</strong>입니다. 뚜렷한 외상 없이 서서히 진행되며, 방치 시 수개월에서 수년간 일상생활 장애로 이어질 수 있습니다. 청주를 비롯한 충북 지역의 40~60대 중장년층에서 흔히 발생하며, 회전근개 파열과 감별 진단이 중요합니다.",
    causes: [
      { icon: "ph-lock", title: "관절낭 유착", description: "이유 불명의 염증으로 관절낭이 수축·섬유화" },
      { icon: "ph-heartbeat", title: "기저 질환", description: "당뇨·갑상선 이상이 있으면 발생 위험 2~3배 증가" },
      { icon: "ph-bed", title: "장기 고정", description: "골절·수술 후 팔을 오래 쓰지 않으면 이차성 오십견 발생" },
      { icon: "ph-clock-countdown", title: "노화", description: "40대 이후 관절낭 유연성 저하로 유착 쉬워짐" },
    ],
    conservativeTreatments: [
      { name: "염증 억제 주사", description: "관절낭 내 스테로이드·프롤로 등 주사로 급성 통증 완화", type: "conservative" },
      { name: "재생주사", description: "조직 재생 지지, 관절 회복 보조", type: "conservative" },
      { name: "PRP 주사", description: "자기 몸에서 채혈을 통해 재생성분을 추출하여 주입 — 시행 가능한 병원이 드묾. 인공관절 전 가장 효과가 높은 치료로 알려져 있음", type: "conservative", highlight: true, highlightLabel: "★ 차별화" },
      { name: "콜라겐 주사", description: "관절낭 강도 회복·보호", type: "conservative" },
      { name: "ESWT (체외충격파)", description: "관절 주변 혈류 개선·유착 완화", type: "conservative" },
      { name: "재활 치료", description: "도수 치료·스트레칭으로 운동 범위 회복, 단계별 어깨 가동 운동", type: "conservative" },
      { name: "약물치료", description: "소염진통제, 근이완제", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "관절경 관절낭 유리술", description: "보존적 치료 3~6개월 실패 시 시행", type: "surgical", tag: "관절경", points: ["관절낭 유착 부분 관절경으로 제거", "단기 입원 가능", "수술 후 집중 재활 프로그램 연계"] },
      { name: "마취 하 도수 조작술", description: "마취 후 굳은 관절 수동으로 가동", type: "surgical", tag: "도수 조작", points: ["관절경 수술보다 단순한 시술", "전신 또는 부분 마취", "시술 후 즉시 재활 시작"] },
    ],
    surgicalCommonPoints: ["최소 침습 관절경 시술", "보존 치료 우선, 장기 실패 시만 수술 고려", "수술 후 즉시 재활 시작", "체계적 단계별 어깨 가동 운동 프로그램"],
    treatmentNote: "⚠️ 오십견과 회전근개 파열은 증상이 유사합니다. <strong>정확한 진단 없이 치료하면 효과가 없거나 악화될 수 있습니다.</strong>",
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 비수술 어깨 전문", title: "충북권 어깨 정확한 감별 진단", description: "충북권에서 오십견·회전근개 파열·충돌증후군을 초음파+이학적 검사로 정확히 구별해 치료하는 병원. 잘못된 진단으로 수개월을 낭비하지 않습니다." },
      { icon: "ph-drop", title: "PRP 주사 원내 직접 시행", description: "충북권에서 어깨 질환에 PRP 치료를 직접 시행하는 병원은 드뭅니다. 관절낭 염증 억제·재생에 효과적이며, 시행 가능한 윈윈에서 치료하세요." },
      { icon: "ph-person-simple-run", title: "스포츠 재활 전문", description: "단순 통증 관리를 넘어 어깨 기능 완전 회복까지 체계적 재활 프로그램 제공. 도수 치료 전문 치료사 상시 운영." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (52세, 청주 흥덕구)", source: "네이버 예약 후기", text: "6개월째 어깨가 굳어서 팔이 60도도 안 올라갔어요. 오십견이라고 그냥 두면 낫는다는 말만 믿다가 너무 힘들어서 윈윈정형외과에 갔더니, 초음파 검사로 정확히 진단해주고 염증 억제 주사 + 재활 치료를 시작했습니다. 3개월 만에 팔이 180도 올라가더라고요. 진작 올 걸 그랬어요." },
      { initial: "L", label: "L님 (58세, 청주 서원구)", source: "네이버 예약 후기", text: "당뇨가 있어서 어깨가 아주 심하게 굳었어요. 다른 병원에서 수술해야 한다고 했는데 무서워서 윈윈에 와봤습니다. PRP 주사 + 도수 치료로 천천히 풀어가니까 결국 수술 없이 일상으로 돌아왔어요. 당뇨 때문에 오십견이 더 심하다는 설명도 해주셔서 관리도 더 신경 쓰게 됐습니다." },
    ],
    recoveryIntro: "비수술 치료 기준 회복 타임라인입니다. 개인에 따라 차이가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "1회", badgeStyle: "navy", label: "통증 완화", detail: "주사 후 급성 통증 감소" },
      { badge: "3회", badgeStyle: "sky", label: "염증 감소", detail: "관절낭 염증 완화" },
      { badge: "6회", badgeStyle: "outline", label: "가동 범위 호전", detail: "어깨 운동 범위 점차 회복" },
      { badge: "2개월", badgeSubLabel: "약", badgeStyle: "outline", label: "기능 회복", detail: "일상 동작 가능" },
      { badge: "개월", badgeSubLabel: "4~6", badgeStyle: "gradient", label: "완전 해소", detail: "정상 운동 범위 회복" },
    ],
    relatedConditions: [
      { slug: "rotator-cuff", category: "shoulder", icon: "ph-arrows-out", label: "회전근개 파열", subLabel: "오십견과 증상 유사, 정확한 감별 필요" },
      { slug: "impingement", category: "shoulder", icon: "ph-warning", label: "충돌증후군", subLabel: "어깨 통증의 흔한 원인" },
      { slug: "instability", category: "shoulder", icon: "ph-shuffle", label: "어깨 탈구·불안정증", subLabel: "어깨 불안정으로 반복 탈구" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/frozen-shoulder.webp",
    doctorId: "gwak-gyu-wan",
    faqs: [
      { question: "청주에서 오십견 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 오십견·회전근개 파열·충돌증후군을 초음파와 이학적 검사로 정확히 감별하며, PRP 주사·재생주사·재활 치료를 포함한 비수술 치료를 원내에서 직접 제공합니다. 정확한 진단 없이 오십견으로만 치료받다가 회전근개 파열을 놓치는 경우가 있어, 감별 진단이 특히 중요합니다." },
      { question: "오십견은 그냥 두면 낫지 않나요?", answer: "자연 회복되기도 하지만 보통 1~3년이 소요되며, 그 기간 동안 심한 통증과 일상생활 장애를 감수해야 합니다. 적절한 치료를 받으면 수개월 내 회복이 가능하므로, 증상이 시작되면 조기에 진료를 받는 것이 좋습니다." },
      { question: "수술 없이 나을 수 있나요?", answer: "오십견의 대부분은 비수술 치료로 회복됩니다. 염증 억제 주사·PRP 주사·재활 치료로 통증 감소와 운동 범위 회복을 기대할 수 있습니다. 보존적 치료를 3~6개월 이상 진행해도 호전이 없는 경우에만 수술을 고려합니다." },
      { question: "오십견과 회전근개 파열은 어떻게 다른가요?", answer: "오십견은 전 방향으로 운동 범위가 제한되며 수동 운동도 어렵습니다. 회전근개 파열은 특정 동작에서 근력 저하가 동반되며 능동적 운동은 어려우나 수동 운동은 가능한 경우가 많습니다. 초음파 검사로 정확히 구별할 수 있습니다." },
      { question: "재발 가능성이 있나요?", answer: "오십견은 완치 후 재발이 드뭅니다. 단, 당뇨·갑상선 이상이 있으신 분은 반대쪽 어깨에서 발생할 가능성이 있으므로 기저 질환 관리가 중요합니다." },
    ],
    medicalCondition: {
      name: "오십견",
      alternateName: ["Frozen Shoulder", "동결견", "유착성 관절낭염"],
      description: "어깨 관절낭에 염증과 유착이 생겨 통증과 운동 제한이 발생하는 질환입니다.",
      anatomy: "어깨 관절낭",
      treatments: [
        { name: "관절강 내 주사", type: "Conservative" },
        { name: "도수치료·재활운동", type: "Conservative" },
        { name: "관절경 관절낭 유리술", type: "Surgical" },
      ],
    },
    datePublished: "2025-02-01",
    dateModified: "2026-04-10",
  },
  {
    slug: "impingement",
    category: "shoulder",
    categoryLabel: "어깨",
    title: "청주 어깨 충돌증후군 치료",
    titleShort: "어깨 충돌증후군",
    metaTitle: "청주 어깨 충돌증후군 치료 — 윈윈정형외과",
    metaDescription: "청주 어깨 충돌증후군 치료. ESWT, PRP 주사, 재활치료로 비수술 회복.",
    keywords: "청주 충돌증후군, 어깨 충돌 치료, 견봉하 충돌 청주",
    canonicalPath: "/shoulder/impingement",
    heroTitle: "청주 어깨 충돌증후군",
    heroSubtitle: "팔 들 때마다 아프다면 정확한 진단 먼저",
    heroDescription: "팔을 들어 올릴 때마다 어깨가 아프다면 충돌증후군을 의심할 수 있습니다. ESWT·PRP 주사·재활로 대부분 수술 없이 회복되며, 방치 시 회전근개 파열로 진행됩니다. 정확한 진단으로 회전근개 파열과 구별해 불필요한 치료를 피하는 것이 핵심입니다.",
    badges: [
      { label: "주사치료", color: "bg-purple-50 text-purple-600", icon: "ph-drop" },
      { label: "비수술 치료 우선", color: "bg-orange-50 text-orange-600", icon: "ph-leaf" },
      { label: "재활치료", color: "bg-green-50 text-green-700", icon: "ph-activity" },
    ],
    symptoms: [
      { title: "팔을 옆으로 들어 올릴 때 60~120도 구간에서 통증이 있다", description: "통증 호(painful arc) 증상" },
      { title: "어깨 위 앞쪽이 묵직하게 아프거나 뻐근하다", description: "지속적인 둔한 통증" },
      { title: "수영·배드민턴·야구 등 팔을 위로 쓰는 운동 후 통증이 심해진다", description: "스포츠 후 통증 악화" },
      { title: "팔을 내리면 통증이 줄고, 들면 다시 아프다", description: "특정 자세에서 통증 변화" },
      { title: "밤에 아픈 어깨 쪽으로 누우면 통증이 심해진다", description: "야간통, 수면 방해" },
    ],
    symptomThreshold: "2개 이상 해당하면 어깨 충돌증후군을 의심할 수 있습니다.",
    definition: "어깨 충돌증후군은 <strong>팔을 들어 올릴 때 회전근개 힘줄이 견봉(어깨뼈 돌출부)과 반복적으로 충돌해 염증과 통증이 생기는 질환</strong>입니다. 스포츠·반복 작업 등 팔을 위로 드는 동작이 많은 사람에게 흔히 발생하며, 방치 시 회전근개 파열로 이어질 수 있습니다. 청주를 비롯한 충북 지역의 스포츠 동호인과 직업적 반복 동작 종사자에서 자주 확인됩니다.",
    causes: [
      { icon: "ph-hand-waving", title: "반복 상지 동작", description: "수영·야구·배드민턴 등 팔을 위로 드는 스포츠" },
      { icon: "ph-wrench", title: "직업적 반복", description: "페인트공·용접사·선반 작업 등 팔 올리는 작업 반복" },
      { icon: "ph-bone", title: "견봉 형태 이상", description: "견봉이 굽어 있거나 두꺼운 경우 힘줄과 충돌 빈번" },
      { icon: "ph-barbell", title: "어깨 근력 불균형", description: "회전근개 약화로 어깨 관절 위치 이상, 충돌 공간 좁아짐" },
    ],
    conservativeTreatments: [
      { name: "염증 억제 주사", description: "견봉하 공간 내 주사로 급성 염증·통증 신속 완화", type: "conservative" },
      { name: "재생주사", description: "조직 재생 지지, 힘줄 손상 회복 보조", type: "conservative" },
      { name: "콜라겐 주사", description: "힘줄 보호·강화", type: "conservative" },
      { name: "PRP 주사", description: "자기 몸에서 채혈을 통해 재생성분을 추출하여 주입 — 시행 가능한 병원이 드묾. 인공관절 전 가장 효과가 높은 치료로 알려져 있음", type: "conservative", highlight: true, highlightLabel: "차별화" },
      { name: "ESWT (체외충격파)", description: "힘줄 혈류 개선, 만성 충돌증후군에 효과적", type: "conservative" },
      { name: "재활 치료", description: "회전근개 근력 강화·자세 교정으로 재충돌 방지", type: "conservative" },
      { name: "약물치료", description: "소염진통제, 근이완제", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "관절경 견봉성형술", description: "견봉 돌출 부분 제거로 충돌 공간 확보", type: "surgical", tag: "관절경", points: ["보존적 치료 6개월 이상 실패 시 시행", "관절경 최소 절개", "수술 후 재활 병행"] },
      { name: "수술 후 재활 프로그램", description: "수술 후 어깨 근력 재건으로 재충돌 방지", type: "surgical", tag: "재충돌 방지", points: ["회전근개 강화 운동", "자세 교정 재활", "스포츠 복귀 프로그램"] },
    ],
    surgicalCommonPoints: ["관절경 최소 절개 수술", "보존 치료 6개월 우선 진행", "수술 후 즉시 재활 시작", "스포츠 복귀 목표 재활 프로그램"],
    treatmentNote: "⚠️ 충돌증후군을 방치하면 <strong>회전근개 파열로 진행됩니다.</strong> 조기 치료와 재활로 힘줄을 보호하는 것이 중요합니다.",
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 어깨 전문", title: "충북권 어깨 충돌증후군 전문", description: "충북권에서 충돌증후군·회전근개 파열·오십견을 초음파 검사로 즉시 감별해 정확한 치료를 제공. 잘못된 치료로 시간을 낭비하지 않습니다." },
      { icon: "ph-drop", title: "PRP 주사 원내 직접 시행", description: "충북권에서 충돌증후군 치료에 PRP를 직접 시행하는 정형외과는 드뭅니다. 힘줄 재생·염증 억제 효과로 방치 시 파열로 진행하는 것을 막습니다." },
      { icon: "ph-person-simple-run", title: "스포츠 재활 전문", description: "운동·스포츠 복귀를 목표로 어깨 근력 균형 재건. 재충돌 방지 프로그램으로 재발 위험을 줄입니다." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (42세, 남성)", source: "네이버 예약 후기", text: "야구 동호회를 오래 했는데 어깨가 아파서 배트를 들기가 힘들었어요. 충돌증후군 진단을 받고 ESWT + 재활 치료를 시작했는데, 3개월 만에 다시 야구장에 나갈 수 있었습니다. 재활 선생님이 자세 교정도 같이 해주셔서 이제는 재발도 안 하더라고요." },
      { initial: "L", label: "L님 (50세, 여성)", source: "네이버 예약 후기", text: "직장에서 반복 작업을 하다 보니 수년째 어깨 통증이 있었어요. 다른 곳에서 치료해도 잘 안 됐는데, 윈윈에서 초음파로 보더니 충돌증후군이라고 하더라고요. PRP 주사 + 재생주사로 치료하니 통증이 70% 이상 줄었고, 결국 수술 안 해도 됐습니다." },
    ],
    recoveryIntro: "비수술 치료 기준 일정입니다. 치료 반응에 따라 차이가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "1회", badgeStyle: "navy", label: "통증 완화", detail: "주사 후 급성 통증 빠른 감소" },
      { badge: "3회", badgeStyle: "sky", label: "염증 감소", detail: "힘줄 염증 억제·혈류 개선" },
      { badge: "6회", badgeStyle: "outline", label: "가동 범위 개선", detail: "어깨 운동 범위 회복" },
      { badge: "1-2개월", badgeStyle: "outline", label: "근력 재건", detail: "회전근개 강화 재활" },
      { badge: "2-3개월", badgeStyle: "gradient", label: "스포츠 복귀", detail: "운동·스포츠 완전 복귀" },
    ],
    relatedConditions: [
      { slug: "rotator-cuff", category: "shoulder", icon: "ph-shooting-star", label: "회전근개 파열", subLabel: "충돌증후군이 방치되어 진행되는 상태" },
      { slug: "calcific-tendinitis", category: "shoulder", icon: "ph-diamond", label: "석회성 건염", subLabel: "힘줄 내 석회 침착으로 극심한 통증" },
      { slug: "frozen-shoulder", category: "shoulder", icon: "ph-anchor", label: "오십견", subLabel: "어깨가 굳어 전 방향 운동 범위 제한" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/shoulder-impingement.webp",
    doctorId: "gwak-gyu-wan",
    faqs: [
      { question: "청주에서 어깨 충돌증후군 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 충돌증후군·회전근개 파열·오십견을 초음파로 정확히 감별하며, PRP 주사·ESWT·재생주사 비수술 치료를 원내에서 직접 제공합니다. 스포츠 재활 전문 프로그램으로 운동·스포츠 복귀를 목표로 치료합니다." },
      { question: "수술 없이 나을 수 있나요?", answer: "대부분의 경우 비수술 치료로 회복 가능합니다. ESWT·PRP 주사·재생주사와 재활 치료 병행으로 충분한 경우가 많으며, 6개월 이상 보존 치료에 반응이 없을 때 수술을 고려합니다. 조기에 치료를 시작할수록 비수술로 해결될 가능성이 높습니다." },
      { question: "방치하면 어떻게 되나요?", answer: "힘줄이 지속적으로 견봉에 마찰되면 회전근개 부분 파열, 완전 파열로 진행될 수 있습니다. 파열이 발생하면 치료가 더 복잡해지고 회복 기간도 길어지므로, 초기에 정확한 진단과 치료를 받는 것이 중요합니다." },
      { question: "운동·스포츠는 언제 재개할 수 있나요?", answer: "치료 반응에 따라 다르지만, ESWT·PRP 치료와 재활을 병행하면 2~4개월 내 스포츠 복귀를 목표로 합니다. 어깨 근력 강화와 자세 교정 재활이 충분히 이루어진 후 복귀하는 것이 재발 방지에 중요합니다." },
      { question: "재발 가능성이 있나요?", answer: "어깨 자세·근력 불균형이 교정되지 않으면 재발 위험이 있습니다. 재활로 회전근개 근력을 충분히 강화하고 올바른 어깨 사용 습관을 형성하는 것이 재발 예방의 핵심입니다." },
    ],
    medicalCondition: {
      name: "어깨 충돌증후군",
      alternateName: ["Shoulder Impingement", "견봉하 충돌증후군"],
      description: "견봉 아래 공간이 좁아져 회전근개 힘줄이 충돌·마찰되면서 통증이 생기는 질환입니다.",
      anatomy: "견봉하 공간 (Subacromial Space)",
      treatments: [
        { name: "ESWT 체외충격파", type: "Conservative" },
        { name: "관절경 견봉 성형술", type: "Surgical" },
      ],
    },
    datePublished: "2025-02-10",
    dateModified: "2026-04-10",
  },
  {
    slug: "calcific-tendinitis",
    category: "shoulder",
    categoryLabel: "어깨",
    title: "청주 어깨 석회성 건염 치료",
    titleShort: "어깨 석회성 건염",
    metaTitle: "청주 석회성 건염 치료 — 윈윈정형외과",
    metaDescription: "청주 어깨 석회성 건염 치료. ESWT 체외충격파, 바늘을 이용한 석회 세척술로 빠른 통증 해결.",
    keywords: "청주 석회성 건염, 어깨 석회 치료, ESWT 청주",
    canonicalPath: "/shoulder/calcific-tendinitis",
    heroTitle: "청주 어깨 석회성 건염",
    heroSubtitle: "갑자기 극심한 어깨 통증, ESWT로 석회 분쇄",
    heroDescription: "어깨 힘줄 안에 석회(칼슘)가 쌓이면 갑자기 극심한 통증이 옵니다. 체외충격파(ESWT)로 석회를 분쇄하고, PRP·재생주사로 힘줄 회복을 돕습니다. 대부분 수술 없이 치료 가능하며, 정확한 위치 확인 후 치료해야 효과가 있습니다.",
    badges: [
      { label: "주사치료", color: "bg-purple-50 text-purple-600", icon: "ph-drop" },
      { label: "비수술 치료 우선", color: "bg-orange-50 text-orange-600", icon: "ph-leaf" },
      { label: "재활치료", color: "bg-blue-50 text-blue-600", icon: "ph-wave-sine" },
    ],
    symptoms: [
      { title: "갑자기 참을 수 없는 극심한 통증", description: "응급실을 가야 할 것 같은 극심한 통증" },
      { title: "어깨가 빨갛게 부어오르고 열감", description: "급성 염증 증상" },
      { title: "팔을 조금만 움직여도 어깨 통증", description: "거의 모든 동작에서 통증" },
      { title: "X-ray에서 어깨 힘줄에 하얀 점(석회)", description: "영상 검사에서 석회 확인" },
      { title: "밤에 통증이 특히 심해 수면 어려움", description: "야간 극심 통증" },
    ],
    symptomThreshold: "2개 이상 해당하면 어깨 석회성 건염을 의심할 수 있습니다.",
    definition: "석회성 건염은 <strong>어깨 회전근개 힘줄 안에 석회(칼슘)가 침착되어 극심한 통증과 운동 장애를 일으키는 질환</strong>입니다. 석회가 녹아 나오는 과정에서 급성 극심 통증이 발생하며, X-ray·초음파로 쉽게 확인됩니다. 청주를 비롯한 충북 지역의 30~60대에서 발생하며, 체외충격파(ESWT) 치료로 대부분 수술 없이 회복됩니다.",
    causes: [
      { icon: "ph-drop", title: "힘줄 혈류 저하", description: "산소 공급 부족 부위에 석회 침착 발생" },
      { icon: "ph-arrows-clockwise", title: "힘줄 재생 과정 이상", description: "힘줄 손상 회복 중 칼슘이 비정상적으로 침착" },
      { icon: "ph-barbell", title: "반복적 미세 손상", description: "어깨를 반복 사용하는 스포츠·직업에서 빈번" },
      { icon: "ph-heartbeat", title: "대사 이상", description: "갑상선·호르몬 불균형 시 석회 침착 위험 증가" },
    ],
    conservativeTreatments: [
      { name: "ESWT (체외충격파) ★핵심", description: "석회 분쇄 + 혈류 개선, 석회성 건염 1차 치료. 치료 횟수 3~5회로 효과 확인", type: "conservative", highlight: true, highlightLabel: "★핵심", highlightStyle: "blue-inline" },
      { name: "염증 억제 주사", description: "급성기 극심 통증 완화 목적, 즉각적 효과", type: "conservative" },
      { name: "재생주사", description: "힘줄 조직 회복 보조", type: "conservative" },
      { name: "콜라겐 주사", description: "힘줄 강도 회복·보호", type: "conservative" },
      { name: "PRP 주사", description: "자기 몸에서 채혈을 통해 재생성분을 추출하여 주입 — 시행 가능한 병원이 드묾. 인공관절 전 가장 효과가 높은 치료로 알려져 있음", type: "conservative", highlight: true, highlightLabel: "차별화" },
      { name: "재활 치료", description: "힘줄 회복 후 어깨 근력·가동 범위 재건", type: "conservative" },
      { name: "약물치료", description: "소염진통제 (급성기 통증 조절)", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "관절경 석회 제거술", description: "대형 석회 또는 ESWT 실패 시 시행", type: "surgical", tag: "관절경", points: ["관절경으로 석회 직접 제거", "수술 후 재활 병행"] },
      { name: "초음파 유도 석회 흡입술", description: "주사로 석회를 직접 흡입·분쇄", type: "surgical", tag: "초음파 유도", points: ["피부 절개 없이 시행", "국소 마취", "대형 석회에 효과적"] },
    ],
    surgicalCommonPoints: ["정확한 석회 위치 초음파 확인 후 시술", "ESWT 우선 치료, 실패 시만 침습적 치료", "수술 후 즉시 재활 시작", "PRP 주사로 재발 방지"],
    treatmentNote: "⚠️ 석회 위치를 정확히 확인한 후 ESWT를 시행해야 효과가 있습니다. <strong>위치 확인 없는 치료는 효과 없음.</strong>",
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 어깨 전문", title: "충북권 ESWT·PRP 정밀 치료", description: "충북권에서 석회 위치를 초음파로 정확히 확인 후 ESWT 정밀 조준 치료를 시행하는 병원. 위치 확인 없는 ESWT는 효과가 없습니다." },
      { icon: "ph-wave-sine", title: "정밀 위치 확인 후 ESWT", description: "초음파로 석회 위치·크기를 확인 후 정밀 조준 체외충격파 시행. ESWT 치료 후 PRP 주사로 힘줄 재생을 돕고 재발을 방지합니다." },
      { icon: "ph-drop", title: "PRP 주사 원내 직접 시행", description: "충북권에서 석회성 건염 치료 후 힘줄 재생을 위한 PRP 치료를 직접 시행하는 병원은 드뭅니다. 석회 치료 후 재발 방지 목적으로 활용합니다." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (45세, 청주 흥덕구)", source: "네이버 예약 후기", text: "갑자기 어깨가 너무 아파서 응급실 가기 직전이었어요. 열도 나고 빨갛게 부어서 큰 병이 생긴 줄 알았어요. 윈윈정형외과에서 X-ray 찍어보니 석회성 건염이라고 하더라고요. ESWT 5회 + 재생주사 치료로 2개월 만에 통증이 사라졌습니다. 수술 필요 없다고 하셔서 다행이었어요." },
      { initial: "L", label: "L님 (51세, 청주 서원구)", source: "네이버 예약 후기", text: "다른 병원에서 수술받아야 한다고 했는데, 윈윈에서 초음파로 정확한 위치 확인 후 ESWT + PRP 치료를 받았습니다. 처음엔 반신반의했는데 3개월 만에 석회가 많이 줄었다고 하고, 통증도 거의 없어졌어요. 수술 없이 해결됐습니다." },
    ],
    recoveryIntro: "비수술·ESWT 기준 일반적인 회복 일정입니다. 석회 크기·상태에 따라 차이가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "1회", badgeSubLabel: "치료", badgeStyle: "navy", label: "통증 완화", detail: "ESWT 후 급성 통증 감소 시작" },
      { badge: "3회", badgeSubLabel: "치료", badgeStyle: "sky", label: "석회 분쇄", detail: "석회 크기 감소 시작" },
      { badge: "5회", badgeSubLabel: "치료", badgeStyle: "outline", label: "크기 감소", detail: "초음파 확인 시 석회 흡수 진행" },
      { badge: "2개월", badgeSubLabel: "치료", badgeStyle: "outline", label: "힘줄 회복", detail: "힘줄 재생·근력 재활 시작" },
      { badge: "3~4개월", badgeSubLabel: "치료", badgeStyle: "gradient", label: "재발 방지", detail: "재활 완료·재발 방지 운동" },
    ],
    relatedConditions: [
      { slug: "impingement", category: "shoulder", icon: "ph-arrows-in-cardinal", label: "충돌증후군", subLabel: "석회성 건염과 동반 발생하는 어깨 통증" },
      { slug: "rotator-cuff", category: "shoulder", icon: "ph-activity", label: "회전근개 파열", subLabel: "힘줄 손상으로 파열까지 진행 가능" },
      { slug: "instability", category: "shoulder", icon: "ph-warning", label: "어깨 탈구·불안정증", subLabel: "어깨 구조적 불안정 질환" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/calcific-tendinitis.webp",
    doctorId: "gwak-gyu-wan",
    faqs: [
      { question: "청주에서 석회성 건염 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 초음파로 석회 위치·크기를 정확히 확인 후 정밀 ESWT 치료를 시행하며, PRP 주사로 힘줄 재생과 재발 방지까지 관리합니다. 박은수 원장이 어깨 관절 전문으로 ESWT·PRP를 직접 시행합니다." },
      { question: "체외충격파(ESWT)가 석회성 건염에 효과가 있나요?", answer: "석회성 건염의 1차 치료법으로 입증된 방법입니다. 석회 위치를 정확히 확인 후 시행할 경우 70~80%에서 효과를 보입니다. 치료 횟수는 보통 3~5회이며, 석회 크기에 따라 조절합니다. 위치 확인 없이 시행하면 효과가 없으므로 반드시 초음파 확인 후 시행해야 합니다." },
      { question: "수술 없이 나을 수 있나요?", answer: "ESWT·주사 치료로 대부분 수술 없이 회복 가능합니다. 대형 석회(>1.5cm)이거나 장기간 ESWT 치료에 반응이 없는 경우에만 관절경 석회 제거술을 고려합니다. 조기에 치료를 시작할수록 비수술로 해결될 가능성이 높습니다." },
      { question: "치료 후 재발할 수 있나요?", answer: "일부에서 석회가 재침착될 수 있습니다. ESWT 치료 후 PRP 주사로 힘줄 재생을 촉진하면 재발 가능성을 줄일 수 있습니다. 또한 힘줄 혈류를 개선하는 재활 운동과 대사 이상(갑상선 등) 관리가 중요합니다." },
      { question: "석회가 사라지는 데 얼마나 걸리나요?", answer: "ESWT 치료 후 수주~수개월에 걸쳐 점차 흡수됩니다. 통증 감소는 석회가 완전히 사라지기 전에 먼저 나타나는 경우가 많습니다. 초음파 추적 검사로 석회 크기 변화를 확인하면서 치료 방향을 조절합니다." },
    ],
    medicalCondition: {
      name: "석회성 건염",
      alternateName: ["Calcific Tendinitis", "어깨 석회 침착"],
      description: "어깨 회전근개 힘줄에 칼슘 결정이 침착되어 극심한 통증을 유발하는 질환입니다.",
      anatomy: "회전근개 힘줄",
      treatments: [
        { name: "ESWT 체외충격파", type: "Conservative" },
        { name: "석회 세척술", type: "Conservative" },
        { name: "관절경 석회 제거술", type: "Surgical" },
      ],
    },
    datePublished: "2025-02-10",
    dateModified: "2026-04-10",
  },
  {
    slug: "instability",
    category: "shoulder",
    categoryLabel: "어깨",
    title: "청주 어깨 탈구·불안정증 치료",
    titleShort: "어깨 탈구·불안정증",

    metaTitle: "청주 어깨 탈구·불안정증 치료 — 윈윈정형외과",
    metaDescription: "청주 어깨 탈구·불안정증 치료. 관절경 봉합술로 재탈구 예방.",
    keywords: "청주 어깨 탈구, 어깨 불안정증, 습관성 탈구 청주",
    canonicalPath: "/shoulder/instability",
    heroTitle: "청주 어깨 탈구·불안정증",
    heroSubtitle: "SLAP·Bankart, 비수술 치료를 통한 복귀",
    heroDescription: "어깨가 빠진 경험이 있거나, 들릴 때마다 불안하다면 관절와순 손상을 의심해야 합니다. SLAP·Bankart 병변은 정확한 진단 후 재활 또는 관절경 수술로 빠른 복귀가 가능합니다. PRP 주사로 손상된 조직의 회복을 돕고, 스포츠 재활 전문 프로그램으로 복귀 기간을 단축합니다.",
    badges: [
      { label: "PRP 치료", color: "bg-purple-50 text-purple-600", icon: "ph-drop" },
      { label: "재활치료", color: "bg-green-50 text-green-700", icon: "ph-activity" },
      { label: "스포츠 재활", color: "bg-blue-50 text-blue-600", icon: "ph-person-simple-run" },
    ],
    symptoms: [
      { title: "어깨가 빠진 경험이 있거나, 빠질 것 같은 느낌이 자주 든다", description: "탈구 또는 아탈구 반복" },
      { title: "팔을 들거나 던지는 동작에서 어깨 앞부분이 아프다", description: "투구·스윙 동작 시 통증" },
      { title: "어깨에서 걸리는 느낌이나 잠기는 느낌이 있다", description: "관절와순 손상 특유의 증상" },
      { title: "어깨가 불안정해 운동·스포츠를 마음껏 할 수 없다", description: "스포츠 활동 제한" },
      { title: "팔을 머리 위로 올리거나 외회전할 때 두려움이 생긴다", description: "공포 증상(apprehension sign)" },
    ],
    symptomThreshold: "2개 이상 해당하면 어깨 탈구·불안정증을 의심할 수 있습니다.",
    definition: "어깨 탈구·불안정증은 어깨 관절을 안정시키는 <strong>관절와순(Labrum)이 손상</strong>되어 어깨가 쉽게 빠지거나 불안정해지는 질환입니다. SLAP 병변(상부 관절와순 손상)과 Bankart 병변(전방 관절와순 손상)이 대표적이며, 습관성 탈구로 이어질 수 있습니다. 청주를 비롯한 충북 지역의 스포츠 활동 인구와 과격한 외상 경험자에서 주로 발생합니다.",
    causes: [
      { icon: "ph-lightning", title: "급성 외상 탈구", description: "넘어지거나 충돌 시 어깨가 빠지면서 관절와순 파열" },
      { icon: "ph-baseball", title: "반복 투구·스윙", description: "야구·배구·수영 등 반복 상지 동작으로 SLAP 손상" },
      { icon: "ph-person-simple-run", title: "과도한 가동 범위", description: "어깨 과신전 또는 과회전 스포츠에서 Bankart 병변" },
      { icon: "ph-arrows-clockwise", title: "습관성 탈구", description: "최초 탈구 후 치료 없이 방치하면 반복 탈구로 고착" },
    ],
    conservativeTreatments: [
      { name: "재생주사", description: "조직 재생 지지, 인대·관절와순 회복 보조", type: "conservative" },
      { name: "콜라겐 주사", description: "관절 안정성 지지·보호", type: "conservative" },
      { name: "염증 억제 주사", description: "급성기 통증·부종 완화", type: "conservative" },
      { name: "ESWT (체외충격파)", description: "주변 조직 혈류 개선", type: "conservative" },
      { name: "재활 치료", description: "어깨 안정화 근육 강화, 불안정성 보완, 스포츠 복귀 프로그램", type: "conservative", highlight: true, highlightLabel: "★핵심", highlightStyle: "green-badge" },
      { name: "약물치료", description: "소염진통제, 근이완제", type: "conservative" },
      { name: "PRP 주사", description: "자기 몸에서 채혈을 통해 재생성분을 추출하여 주입 — 시행 가능한 병원이 드묾. 인공관절 전 가장 효과가 높은 치료로 알려져 있음", type: "conservative", highlight: true, highlightLabel: "★차별화", highlightStyle: "purple-name" },
    ],
    surgicalTreatments: [
      { name: "관절경 Bankart 복원술", description: "전방 탈구·반복 탈구 시 시행", type: "surgical", tag: "관절경", points: ["관절와순 전방 복원", "수술 후 조기 재활 연계"] },
      { name: "관절경 SLAP 봉합술", description: "상부 관절와순 파열 시 시행", type: "surgical", tag: "SLAP 봉합", points: ["상부 관절와순 고정", "스포츠 투구 동작 복귀 목표", "단계적 재활 프로그램"] },
    ],
    surgicalCommonPoints: ["관절경 최소 절개 수술", "수술 후 즉시 재활 시작", "스포츠 복귀 목표 집중 재활 프로그램"],
    treatmentNote: "⚠️ 관절와순 손상 정도에 따라 <strong>재활만으로 회복 가능한 경우와 수술이 필요한 경우가 다릅니다.</strong> 정확한 진단 후 치료 방향 결정이 중요합니다.",
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 어깨 전문", title: "충북권 SLAP·Bankart 정밀 진단", description: "충북권에서 SLAP vs Bankart 병변을 정밀 MRI·이학적 검사로 감별해 최적 치료를 결정하는 병원. 관절와순 손상 위치와 범위에 따라 치료가 전혀 달라집니다." },
      { icon: "ph-drop", title: "PRP 주사 원내 직접 시행", description: "충북권에서 어깨 불안정증·관절와순 손상에 PRP를 직접 시행하는 정형외과는 드뭅니다. 조직 재생·수술 전 보존 치료 옵션으로 활용합니다." },
      { icon: "ph-person-simple-run", title: "스포츠 재활 전문 — 복귀 빠름", description: "스포츠 복귀를 목표로 어깨 안정화 근육 집중 강화. 일반 병원 대비 복귀 기간 단축, 선수·동호인 복귀 사례 다수." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (28세 남성, 청주)", source: "네이버 예약 후기", text: "야구를 하다가 어깨가 빠졌어요. SLAP 진단을 받았는데 수술이 무서워서 재활부터 해보고 싶었습니다. 윈윈정형외과에서 PRP 주사 + 재활 치료 조합으로 치료받았는데, 6개월 만에 다시 투구가 됐어요. 수술 없이 복귀해서 정말 다행입니다." },
      { initial: "L", label: "L님 (35세 여성, 청주)", source: "네이버 예약 후기", text: "배드민턴 치다가 반복 탈구가 됐어요. 결국 관절경 Bankart 수술을 받기로 했는데, 수술 후 윈윈의 재활 프로그램을 열심히 따라했더니 5개월 만에 다시 배드민턴을 칠 수 있었습니다. 지금은 재탈구가 없어요." },
    ],
    recoveryIntro: "비수술(재활) 기준 회복 일정입니다. 수술(관절경) 시 일정이 달라질 수 있습니다.",
    recoveryTimeline: [
      { badge: "1주", badgeStyle: "navy", label: "보조기·안정", detail: "급성기 안정·보조기 착용" },
      { badge: "1개월", badgeStyle: "sky", label: "근력 강화", detail: "어깨 안정화 근육 강화 시작" },
      { badge: "1-2개월", badgeStyle: "outline", label: "스포츠 연습", detail: "단계적 스포츠 동작 연습" },
      { badge: "2-4개월", badgeStyle: "outline", label: "복귀 준비", detail: "실전 스포츠 훈련 시작" },
      { badge: "4-6개월", badgeStyle: "gradient", label: "완전 복귀", detail: "스포츠·운동 완전 복귀" },
    ],
    relatedConditions: [
      { slug: "rotator-cuff", category: "shoulder", icon: "ph-person-arms-spread", label: "회전근개 파열", subLabel: "탈구 후 동반 발생하는 힘줄 손상" },
      { slug: "impingement", category: "shoulder", icon: "ph-arrows-in", label: "충돌증후군", subLabel: "어깨 불안정 시 동반되는 충돌 증상" },
      { slug: "surgery-center", category: "sports-rehab", icon: "ph-person-simple-run", label: "스포츠 수술·재활 센터", subLabel: "스포츠 복귀 전문 프로그램" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/shoulder-instability.webp",
    doctorId: "gwak-gyu-wan",
    faqs: [
      { question: "청주에서 어깨 탈구·SLAP 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. SLAP·Bankart 병변을 정밀 감별하여 재활 또는 관절경 수술 치료를 제공하며, PRP 주사로 수술 전 보존 치료도 가능합니다. 스포츠 재활 전문 프로그램으로 선수·동호인의 빠른 복귀를 돕습니다." },
      { question: "SLAP과 Bankart는 어떻게 다른가요?", answer: "SLAP은 상부 관절와순 손상으로 투구 동작 중 발생하며, Bankart는 전방 관절와순 손상으로 탈구 시 발생합니다. 치료 방향이 다르기 때문에 정밀 MRI와 이학적 검사로 정확히 구별해야 합니다." },
      { question: "수술 없이 나을 수 있나요?", answer: "부분 손상이거나 비습관성 탈구의 경우 재활 치료와 PRP 주사로 회복 가능한 경우가 있습니다. 반복 탈구나 완전 파열, 스포츠 활동 복귀를 원하는 경우에는 관절경 수술이 더 적합할 수 있습니다. 정확한 진단 후 개인 상황에 맞는 치료를 결정합니다." },
      { question: "수술 후 스포츠 복귀까지 얼마나 걸리나요?", answer: "관절경 수술 후 재활 프로그램을 병행하면 5~6개월 내 스포츠 복귀를 목표로 합니다. 재활을 충분히 진행하지 않으면 재탈구 위험이 높아지므로, 단계적 재활 완료 후 복귀하는 것이 중요합니다." },
      { question: "한 번 탈구하면 계속 빠지나요?", answer: "최초 탈구 후 치료 없이 방치하면 관절와순 손상이 회복되지 않아 재탈구 위험이 높아집니다. 특히 20대 젊은 환자는 재탈구율이 높으므로 조기 치료와 재활이 습관성 탈구 예방의 핵심입니다." },
    ],
    medicalCondition: {
      name: "어깨 탈구·불안정증",
      alternateName: ["Shoulder Instability", "습관성 어깨 탈구"],
      description: "어깨 관절이 반복적으로 빠지거나 빠질 듯한 느낌이 드는 질환입니다.",
      anatomy: "어깨 관절 (견관절)",
      treatments: [
        { name: "관절경 뱅카트 봉합술", type: "Surgical" },
        { name: "재활·근력 강화", type: "Conservative" },
      ],
    },
    datePublished: "2025-02-10",
    dateModified: "2026-04-10",
  },
  // ========== FOOT (additional) ==========
  {
    slug: "plantar-fasciitis",
    category: "foot",
    categoryLabel: "족부",
    title: "청주 족저근막염 치료",
    titleShort: "족저근막염",
    metaTitle: "청주 족저근막염 치료 — 윈윈정형외과",
    metaDescription: "청주 족저근막염 치료. ESWT 체외충격파, PRP 주사, 맞춤 인솔로 비수술 회복.",
    keywords: "청주 족저근막염, 발바닥 통증, ESWT 청주",
    canonicalPath: "/foot/plantar-fasciitis",
    heroTitle: "청주 족저근막염",
    heroSubtitle: "초음파·동적 보행검사로 정확한 치료",
    heroDescription: "아침 첫 발을 내디딜 때 뒤꿈치가 찌릿하게 아프다면 족저근막염이나 발뒤꿈치 지방층 증후군일 수 있습니다. 초음파와 동적 보행검사로 정확히 원인을 찾아야 합니다 — 족저근막염과 지방층 증후군은 치료가 다릅니다. 닥터포디 깔창·ESWT·재생주사로 대부분 수술 없이 치료됩니다.",
    badges: [
      { label: "비수술 우선", color: "bg-green-50 text-green-700", icon: "ph-leaf" },
    ],
    symptoms: [
      { title: "아침에 처음 일어나 발을 내디딜 때 뒤꿈치가 심하게 아프다", description: "족저근막염의 가장 전형적인 증상" },
      { title: "잠시 앉았다 일어나거나 오래 앉아 있다 걸으면 통증이 있다", description: "휴식 후 보행 시작 시 통증이 특징적" },
      { title: "오래 서 있거나 걸을수록 뒤꿈치 통증이 심해진다", description: "장시간 체중 부하가 증상을 악화" },
      { title: "발바닥 앞쪽을 누르면 통증이 있다", description: "족저근막 기시부 압통" },
      { title: "발뒤꿈치 패드가 납작하게 뭉쳐진 느낌이 있다", description: "지방층 증후군의 징후일 수 있습니다" },
      { title: "체중이 늘거나 장거리 보행 후부터 증상이 생겼다", description: "과부하가 주요 유발 요인" },
    ],
    symptomThreshold: "2개 이상 해당하면 족저근막염을 의심할 수 있습니다.",
    symptomInfoBox: "2개 이상 해당 시 전문 진료를 권장합니다. 족저근막염과 지방층 증후군은 증상이 비슷하지만 치료법이 다르므로 정확한 감별이 중요합니다.",
    definition: "족저근막염은 <strong>발바닥을 종방향으로 지지하는 족저근막에 반복 자극이 쌓여 염증과 통증이 생기는 질환</strong>이며, 발뒤꿈치 지방층 증후군은 발뒤꿈치 쿠션 역할을 하는 지방층이 얇아져 충격 흡수 능력이 떨어지는 별개의 질환입니다. 두 질환은 증상이 유사해 혼동되기 쉬우며, 초음파와 동적 보행검사로 정확히 구별해야 합니다. 청주를 비롯한 충북 지역의 중장년층·과체중·장시간 보행자에서 가장 흔한 발 통증 원인입니다.",
    causes: [
      { icon: "ph-person-simple-run", title: "과도한 보행·운동", description: "장거리 달리기·등산 등 반복 충격" },
      { icon: "ph-scales", title: "과체중", description: "족저근막·지방층에 지속 과부하" },
      { icon: "ph-sneaker", title: "평발·높은 아치", description: "발 구조 이상으로 근막 장력 불균형" },
      { icon: "ph-high-heel", title: "잘못된 신발", description: "쿠션 없는 신발·굽 높은 신발 장기 착용" },
      { icon: "ph-hourglass-high", title: "노화", description: "지방층 두께 감소, 근막 탄성 저하" },
    ],
    conservativeTreatments: [
      { name: "초음파 진단", description: "족저근막 두께·지방층 상태 정밀 확인. 족저근막염 vs 지방층 증후군 감별", type: "conservative", note: "※ 증상이 심한 경우 족저근막의 파열이 진단되기도 합니다. 이 경우 치료가 완전히 달라지며, 강제 휴식 및 비체중 부하 보행이 필요합니다." },
      { name: "동적 보행 검사", description: "보행 중 발뒤꿈치 압력 패턴 분석, 충격 집중 부위 파악", type: "conservative" },
      { name: "닥터포디 깔창·맞춤 인솔", description: "본원 직접 개발. 고가 깔창 대신 부담 없이 시작. 뒤꿈치 쿠션·아치 지지", type: "conservative" },
      { name: "ESWT(체외충격파)", description: "근막 혈류 개선, 통증 억제. 족저근막염 1차 치료", type: "conservative" },
      { name: "재생주사", description: "족저근막 조직 재생 촉진", type: "conservative" },
    ],
    secondaryTreatments: [
      { name: "재활 치료", description: "종아리·족저근막 스트레칭, 발 내재근 강화" },
      { name: "약물 치료", description: "소염진통제 단기 사용" },
      { name: "생활 습관 교육", description: "체중 조절, 스트레칭, 신발 선택 교육" },
    ],
    surgicalTreatments: [],
    treatmentNote: "<i class=\"ph-bold ph-warning text-base mr-1\" aria-hidden=\"true\"></i>족저근막염과 지방층 증후군은 치료 방법이 다릅니다. <strong>초음파 감별 없이 동일 치료를 받으면 효과가 없을 수 있습니다.</strong>",
    recoverySteps: [
      { label: "치료 시작", detail: "ESWT + 인솔" },
      { label: "4~6주", detail: "통증 경감" },
      { label: "3개월", detail: "완전 회복" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 족부 전문", title: "족저근막염 vs 지방층 증후군 정확한 감별", description: "충북권에서 초음파로 족저근막 두께와 지방층 상태를 동시에 확인해 정확히 구별하는 족부 전문 병원. 감별 없는 치료는 효과 없음." },
      { icon: "ph-lightning", title: "생활환경·신발까지 파악하는 정확한 진단", description: "원인을 정확히 아는 게 중요합니다. 생활환경, 직업, 신발 등의 문제점까지 파악해 장기적인 관리 방향을 함께 제시합니다." },
      { icon: "ph-scan", title: "정확한 진단으로 정확한 치료·관리까지", description: "단순 증상 완화에 그치지 않고, 정확한 진단을 토대로 치료·재활·생활 관리법을 포함한 장기적인 해결책을 제시합니다." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (50세, 청주 흥덕구)", source: "네이버 예약 후기", text: "2년째 뒤꿈치 통증으로 고생했는데, 윈윈에서 초음파 찍어보니 족저근막염이 아니라 지방층 증후군이었어요. 닥터포디 깔창이랑 ESWT 3개월 했더니 아침 통증이 싹 없어졌습니다. 다른 데서 족저근막염 치료만 받을 때는 안 나았거든요." },
      { initial: "L", label: "L님 (45세, 청주 서원구)", source: "네이버 예약 후기", text: "타원에서도 똑같은 치료를 했던 것 같은데, 근본적인 문제를 찾아 치료하니 원인이 중요하다는 걸 느꼈습니다." },
    ],
    recoveryIntro: "비수술 치료 기준 ESWT 횟수별 회복 과정입니다. 주 2회 권장 (너무 자주 시행 시 통증 증가 가능). 개인차가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "1–2주차", badgeStyle: "navy", label: "통증 완화 시작", detail: "초기 통증 감소\n보행 편안해짐", detailMobile: "초기 통증 감소, 보행 편안해짐" },
      { badge: "2–4주차", badgeStyle: "sky", label: "근막 이완", detail: "아침 통증 감소\n근막 유연성 개선", detailMobile: "아침 통증 감소, 근막 유연성 개선" },
      { badge: "4주차~", badgeStyle: "gradient", label: "보행 개선", detail: "장시간 보행 가능\n일상 활동 회복", detailMobile: "장시간 보행 가능, 일상 활동 회복" },
    ],
    relatedConditions: [
      { slug: "flatfoot", category: "foot", icon: "ph-sneaker", label: "평발", subLabel: "발 아치 교정" },
      { slug: "accessory-navicular", category: "foot", icon: "ph-bone", label: "부주상골", subLabel: "발 안쪽 뼈 돌출 치료" },
      { slug: "mortons-neuroma", category: "foot", icon: "ph-hand-fist", label: "지간신경종", subLabel: "발가락 사이 신경 통증" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/plantar-fasciitis.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 족저근막염 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 초음파·동적 보행검사로 족저근막염과 지방층 증후군을 정확히 감별 진단합니다. ESWT·닥터포디 깔창·재생주사 등 비수술 치료를 우선 시행합니다." },
      { question: "족저근막염과 지방층 증후군은 어떻게 다른가요?", answer: "족저근막염은 발바닥 근막의 염증이고, 지방층 증후군은 뒤꿈치 쿠션 패드의 손상입니다. 증상은 비슷하지만 치료법이 다르므로 초음파와 동적보행검사로 정확히 감별하는 것이 중요합니다." },
      { question: "수술 없이 나을 수 있나요?", answer: "수술적 치료를 권장하지 않으며, 대부분 비수술 치료로 개선됩니다. 닥터포디 깔창·ESWT·재생주사·재활을 단계적으로 시행하며, 생활 습관에 대한 관리 변화가 중요합니다." },
      { question: "닥터포디 깔창와 시중 깔창은 어떻게 다른가요?", answer: "본원이 직접 개발한 닥터포디 깔창는 족저근막 부하 분산과 뒤꿈치 지방층 보호에 특화된 치료용 인솔입니다. 일반 시중 깔창과 달리 치료 목적으로 설계되었습니다." },
      { question: "재발 방지 방법이 있나요?", answer: "체중 관리, 쿠션 좋은 신발 착용, 종아리·족저근막 스트레칭이 핵심입니다. 닥터포디 깔창를 꾸준히 착용하고 발 내재근 강화 운동을 병행하면 재발을 크게 줄일 수 있습니다." },
    ],
    medicalCondition: {
      name: "족저근막염",
      alternateName: ["Plantar Fasciitis", "발바닥 근막염"],
      description: "발바닥의 족저근막에 미세 손상과 염증이 생겨 통증이 발생하는 질환입니다.",
      anatomy: "족저근막 (Plantar Fascia)",
      treatments: [
        { name: "ESWT 체외충격파", type: "Conservative" },
        { name: "PRP 주사", type: "Conservative" },
      ],
    },
    datePublished: "2025-01-20",
    dateModified: "2026-04-10",
  },
  {
    slug: "flatfoot",
    category: "foot",
    categoryLabel: "족부",
    title: "청주 평발 치료",
    titleShort: "평발",
    metaTitle: "청주 평발 치료 — 윈윈정형외과",
    metaDescription: "청주 평발 치료. 맞춤 인솔(더티프로드), 재활운동, 필요 시 수술 교정.",
    keywords: "청주 평발, 평발 교정, 맞춤 인솔 청주",
    canonicalPath: "/foot/flatfoot",
    heroTitle: "청주 평발",
    heroSubtitle: "동적 보행검사·맞춤 재활로 아치 기능 회복",
    heroDescription: "평발은 발 아치가 낮아 발 전체가 바닥에 닿는 구조 문제입니다. 체중부하 X-ray·CT와 동적 보행검사로 정확한 상태를 파악하고, 닥터포디·맞춤 인솔·재활로 대부분 수술 없이 관리합니다. 비싼 맞춤 깔창 전에, 본원에서 직접 개발한 닥터포디로 부담 없이 시작할 수 있습니다.",
    badges: [
      { label: "비수술 우선", color: "bg-orange-50 text-orange-600", icon: "ph-shield-check" },
    ],
    symptoms: [
      { title: "발 안쪽 아치가 없고 발바닥 전체가 바닥에 닿는다", description: "아치 소실의 기본 징후" },
      { title: "오래 서 있거나 걸으면 발바닥·발목 안쪽이 쉽게 피로하고 아프다", description: "아치 기능 저하로 발 피로도 증가" },
      { title: "신발 안쪽 굽이 바깥쪽보다 더 빨리 닳는다", description: "과내회전의 간접 증거" },
      { title: "발목이 안쪽으로 기울어 보인다(과내회전)", description: "후경골건 약화와 관련" },
      { title: "무릎·허리 통증이 발 문제와 관련 있는지 궁금하다", description: "평발이 상위 관절에 영향을 줄 수 있습니다" },
      { title: "어릴 때부터 평발 진단을 받았거나 가족 중 평발이 있다", description: "유전적 요인이 큰 질환" },
    ],
    symptomThreshold: "2개 이상 해당하면 평발을 의심할 수 있습니다.",
    definition: "평발(편평족)은 <strong>발의 내측 종아치가 낮거나 소실되어 발바닥 전체가 지면에 닿는 발 구조 이상</strong>입니다. 유연성 평발과 강직성 평발로 구분되며, 방치 시 발목·무릎·허리 통증으로 이어집니다. 청주를 비롯한 충북 지역에서 체중부하 검사와 동적 보행분석을 통해 맞춤 치료를 받을 수 있습니다.",
    causes: [
      { icon: "ph-dna", title: "유전·선천성", description: "발 아치 형성 미흡 가족력" },
      { icon: "ph-bone", title: "후경골건 기능 부전", description: "아치 지지 핵심 힘줄 약화로 성인 평발" },
      { icon: "ph-scales", title: "과체중·임신", description: "발 아치에 지속적 과부하" },
      { icon: "ph-warning-circle", title: "외상·과사용", description: "발 인대·힘줄 손상 후 아치 무너짐" },
    ],
    conservativeTreatments: [
      { name: "닥터포디", description: "고가의 맞춤 깔창 효과를 대신 할 수 있는 본원 직접 개발 인솔을 통한 아치 지지", type: "conservative" },
      { name: "맞춤 인솔", description: "발 구조에 맞춰 제작. 닥터포디로 효과 부족 시 업그레이드", type: "conservative" },
      { name: "재활 치료", description: "발 내재근·후경골근 강화 운동. 발목 안정화, 아치 기능 회복", type: "conservative" },
      { name: "체중부하 X-ray·CT", description: "서 있는 상태에서 발 구조 정밀 측정. 아치 각도·거골 경사 정확히 평가", type: "conservative" },
      { name: "동적 보행 검사", description: "걸을 때 발 압력 패턴 분석. 발·무릎·허리 연결 문제 파악", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "아치 교정술", description: "재건술·절골술·거골하 관절 거동술 등. 보존 치료 실패 또는 중증 구조 변형 시 시행.", type: "surgical", tag: "중증 변형", tagColor: "bg-red-500/80 text-white", points: ["아치 구조 재건", "보존 치료 실패 시", "족부 전문의 직접 시행"] },
    ],
    surgicalCommonPoints: ["닥터포디·인솔·재활로 개선되지 않는 경우에만 수술 고려", "후경골건 완전 파열, 중증 구조 변형이 적응증", "족부 전문의가 구조 분석 후 수술 방법 결정"],
    treatmentNote: "인솔만으로 근본 해결이 어려운 경우 <strong>재활·근력 강화를 반드시 병행해야 합니다.</strong>",
    recoverySteps: [
      { label: "인솔 처방", detail: "즉시 착용 가능" },
      { label: "4~8주", detail: "증상 개선" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 닥터포디", title: "본원 직접 개발, 고가 깔창 대체", description: "충북권에서 맞춤 인솔보다 저렴한 자체 개발 닥터포디로 치료를 시작할 수 있는 병원. 평발 초기부터 부담 없이 치료 가능." },
      { icon: "ph-lightning", title: "체중부하 CT + 동적 보행 3단계 정밀 검사", description: "서 있는 상태 구조 확인 + 걸을 때 압력 분석으로 발 문제가 무릎·허리에 미치는 영향까지 파악." },
      { icon: "ph-scan", title: "맞춤 재활 치료", description: "인솔만 끼워주는 것이 아니라 발 근육 강화·보행 교정 재활 병행으로 아치 기능 실질적 회복." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (35세, 청주 흥덕구)", source: "네이버 예약 후기", text: "평발로 발바닥이랑 무릎이 항상 아팠어요. 윈윈에서 닥터포디 처방받고 재활 치료 3개월 했더니 통증이 70% 줄었습니다. 비싼 맞춤 깔창 안 해도 돼서 부담이 적었어요." },
      { initial: "L", label: "L님 (40대 부모, 청주 서원구)", source: "네이버 예약 후기", text: "아이가 평발이라 걱정돼서 데리고 갔는데, 동적 보행검사로 성장성 유연성 평발이라고 설명해 주셨어요. 닥터포디 착용하고 재활 운동 알려주셔서 안심하고 관리 중입니다." },
    ],
    recoveryIntro: "비수술 치료 기준 일반적인 회복 일정입니다. 개인 상태에 따라 차이가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "처방", badgeSubLabel: "인솔", badgeStyle: "navy", label: "착용 시작", detail: "닥터포디 처방\n재활 운동 시작", detailMobile: "닥터포디 처방, 재활 운동 시작" },
      { badge: "1-2주", badgeStyle: "sky", label: "통증 감소", detail: "발바닥·발목\n통증 완화", detailMobile: "발바닥·발목 통증 완화" },
      { badge: "1-3개월", badgeStyle: "outline", label: "보행 개선", detail: "걸음걸이\n안정화", detailMobile: "걸음걸이 안정화" },
      { badge: "3-6개월", badgeStyle: "gradient", label: "근력 강화", detail: "근력강화\n아치기능 유지", detailMobile: "근력강화, 아치기능 유지" },
    ],
    relatedConditions: [
      { slug: "accessory-navicular", category: "foot", icon: "ph-bone", label: "부주상골", subLabel: "발 안쪽 뼈 돌출 치료" },
      { slug: "plantar-fasciitis", category: "foot", icon: "ph-footprints", label: "족저근막염", subLabel: "발바닥 통증 치료" },
      { slug: "mortons-neuroma", category: "foot", icon: "ph-hand-fist", label: "지간신경종", subLabel: "발가락 사이 신경 통증" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/flatfoot.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 평발 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 닥터포디·맞춤 인솔·동적 보행검사를 모두 보유하고 있으며, 아치 교정 수술까지 원스톱으로 가능합니다." },
      { question: "어린이 평발도 치료가 필요한가요?", answer: "성장기 유연성 평발은 대부분 자연 교정됩니다. 통증이 있거나 변형이 심한 경우 닥터포디 착용과 재활 운동을 권장합니다. 동적 보행검사로 정확한 상태를 확인할 수 있습니다." },
      { question: "비싼 맞춤 깔창이 꼭 필요한가요?", answer: "먼저 본원이 직접 개발한 닥터포디로 시작합니다. 효과가 부족한 경우에만 맞춤 인솔로 업그레이드합니다. 무조건 비싼 것이 답은 아닙니다." },
      { question: "평발이 무릎·허리 통증을 일으키나요?", answer: "평발로 인한 과내회전이 무릎·골반·허리까지 영향을 줄 수 있습니다. 동적 보행검사로 발과 상위 관절의 연관성을 확인한 후 맞춤 치료 방향을 결정합니다." },
      { question: "수술이 필요한 평발은 어느 경우인가요?", answer: "닥터포디·인솔·재활 치료로 개선되지 않는 중증 구조 변형, 후경골건 완전 파열, 통증이 일상을 방해하는 경우에 수술을 고려합니다. 비수술 치료를 충분히 시도한 후 결정합니다." },
    ],
    medicalCondition: {
      name: "평발",
      alternateName: ["Flatfoot", "편평족"],
      description: "발의 안쪽 세로 아치가 낮거나 없어 발바닥 전체가 바닥에 닿는 상태입니다.",
      anatomy: "족부 아치 (Medial Longitudinal Arch)",
      treatments: [
        { name: "맞춤 인솔", type: "Conservative" },
        { name: "거골하 관절 제동술", type: "Surgical" },
      ],
    },
    datePublished: "2025-01-20",
    dateModified: "2026-04-10",
  },
  // ========== FOOT (continued) ==========
  {
    slug: "gout",
    category: "foot",
    categoryLabel: "족부",
    title: "청주 통풍 치료 · 주사",
    titleShort: "통풍",
    metaTitle: "청주 통풍 치료 · 주사 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 통풍 증상·원인·치료법 완전 정리. 당일 피검사·주사치료로 발작 통증 빠른 제어, 요산 결절 제거 수술까지.",
    keywords: "청주 통풍, 통풍 치료, 청주 족부전문, 통풍 주사",
    canonicalPath: "/foot/gout",
    heroTitle: "청주 통풍",
    heroSubtitle: "발작 당일 피검사·주사치료로 빠른 통증 제어",
    heroDescription:
      "통풍 발작은 참기 어려운 극심한 통증을 유발합니다 — 당일 피검사로 요산 수치를 즉시 확인합니다. 주사치료와 약물 치료로 발작 통증을 빠르게 제어하고, 심한 경우 요산 결절 제거 수술도 가능합니다. 반복되는 통풍 발작은 뼈와 관절을 파괴합니다 — 조기 치료와 꾸준한 관리가 핵심입니다.",
    badges: [
      { label: "비수술 우선", color: "bg-purple-50 text-purple-700", icon: "ph-hand-palm" },
      { label: "당일 피검사", color: "bg-red-50 text-red-600", icon: "ph-drop" },
    ],
    symptoms: [
      { title: "엄지발가락이나 발목이 갑자기 극심하게 아프고 빨갛게 부어올랐다", description: "통풍 발작의 가장 전형적인 증상입니다" },
      { title: "밤에 갑자기 발 통증이 시작되어 잠을 못 잔다", description: "통풍은 야간에 발작이 시작되는 경우가 많습니다" },
      { title: "건드리기만 해도 극심한 통증이 있다", description: "이불이 닿기만 해도 아플 수 있습니다" },
      { title: "이전에도 비슷한 발 통증이 있었다", description: "통풍은 반복적으로 발작하는 것이 특징입니다" },
      { title: "피검사에서 요산 수치가 높다고 들었다", description: "고요산혈증은 통풍의 주요 위험 요인입니다" },
      { title: "발·손가락·귀에 하얀 결절이 생겼다", description: "요산 결절(통풍석)은 만성 통풍의 징후입니다" },
    ],
    symptomThreshold: "2개 이상 해당하면 통풍을 의심할 수 있습니다.",
    symptomInfoBox: "2개 이상 해당 시 전문 진료를 권장합니다. 통풍 발작은 방치할수록 재발 빈도가 높아지고 관절이 파괴될 수 있습니다.",
    definition:
      "통풍은 <strong>혈액 내 요산 수치가 높아져 관절 내 요산 결정이 침착되면서 극심한 통증과 염증이 반복되는 대사 질환</strong>입니다. 엄지발가락 관절에서 가장 흔히 발생하며, 발목·아킬레스 등 족부에 발현 빈도가 높습니다. 족부 외에 모든 관절에도 통풍은 발생할 수 있습니다. 적절히 치료하지 않으면 요산 결절(통풍석)이 형성되고 관절·뼈가 파괴됩니다. 청주를 비롯한 충북 지역의 40~60대 남성에서 주로 나타나며, 피검사로 즉시 진단이 가능합니다.",
    causes: [
      { icon: "ph-wine", title: "음식·음주", description: "퓨린 함량 높은 음식·술이 요산 증가" },
      { icon: "ph-dna", title: "유전적 소인", description: "요산 배출 능력이 선천적으로 낮은 경우" },
      { icon: "ph-barbell", title: "비만·대사증후군", description: "체중 과다 시 요산 생성 증가" },
    ],
    conservativeTreatments: [
      { name: "당일 피검사", description: "내원 당일 요산 수치 즉시 확인, 발작 여부·중증도 빠른 판단", type: "conservative" },
      { name: "주사치료", description: "소염작용을 하는 혈관 주사를 통한 치료 — 발작 통증의 빠른 제어", type: "conservative" },
      { name: "약물 치료", description: "요산 생성 억제제(페브릭·페북소 등), 요산 배출 촉진제", type: "conservative" },
      { name: "생활 습관 교육", description: "식이 조절(소량의 고단백식이), 충분한 수분 섭취, 알코올 제한", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "요산 결절(통풍석) 제거술", description: "결절로 인해 통증이 심할 때 제거. 당일 수술 가능.", type: "surgical", tag: "당일 수술 가능", points: ["통풍석 완전 제거", "당일 수술 가능", "관절 압박 해소"] },
      { name: "뼈 변형 교정 수술", description: "중증 통풍으로 관절·뼈가 파괴된 경우 교정 수술.", type: "surgical", tag: "중증", points: ["파괴된 관절 재건", "정상 보행 회복", "족부 전문의 시행"] },
    ],
    treatmentNote: "통풍 발작은 24~48시간 내 치료가 통증 지속 기간을 크게 단축합니다. <strong>발작 즉시 내원하세요.</strong>",
    recoverySteps: [
      { label: "발작 당일", detail: "주사 치료·피검사" },
      { label: "1~2일", detail: "통증 경감" },
      { label: "1주", detail: "정상 보행 복귀" },
      { label: "지속 관리", detail: "요산 수치 유지" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 족부 전문", title: "당일 피검사로 즉시 진단", description: "내원 당일 요산 수치 확인, 당일 치료 시작 가능. 타원 예약 대기 없이 빠른 대응." },
      { icon: "ph-lightning", title: "발작 통증 당일 제어", description: "주사치료로 당일 통증 경감, 약물 처방까지 원스톱." },
      { icon: "ph-scan", title: "뼈 변형 방지 수술 연계", description: "단순 통증 관리에 그치지 않고 요산 결절·관절 파괴 단계까지 수술적 치료 가능." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (47세, 청주 흥덕구)", source: "네이버 예약 후기", text: "밤에 갑자기 발이 너무 아파서 걷지도 못하고 윈윈에 갔습니다. 당일 피검사로 통풍 확인하고 주사 맞으니 다음 날 바로 걸을 수 있었어요. 약도 바로 처방받아서 한 번에 해결됐습니다." },
      { initial: "L", label: "L님 (55세, 청주 서원구)", source: "네이버 예약 후기", text: "10년 넘게 통풍을 방치했더니 발가락에 하얀 덩어리가 생겼어요. 윈윈에서 결절 제거 수술 받고 깔끔하게 없어졌습니다. 이제 약 꾸준히 먹으면서 관리하고 있는데 발작이 안 와서 만족합니다." },
    ],
    recoveryIntro: "비수술 치료 기준 일반적인 회복 일정입니다.",
    recoveryTimeline: [
      { badge: "당일", badgeSubLabel: "발작", badgeStyle: "navy", label: "주사 치료·피검사", detail: "요산 수치 확인\n주사로 통증 제어", detailMobile: "요산 수치 확인, 주사로 통증 제어" },
      { badge: "1~2일", badgeStyle: "sky", label: "통증 경감", detail: "부종·통증 감소\n정상 보행 복귀", detailMobile: "부종·통증 감소, 보행 가능, 정상 보행 복귀" },
      { badge: "1주", badgeStyle: "outline", label: "피검사 재검", detail: "요산 생성 억제제 복용", detailMobile: "피검사 재검, 요산 생성 억제제 복용" },
      { badge: "1개월", badgeStyle: "outline", label: "약물 안정화", detail: "요산 수치 조절\n약물 용량 조정", detailMobile: "요산 수치 조절, 약물 용량 조정" },
      { badge: "관리", badgeSubLabel: "지속", badgeStyle: "gradient", label: "정기 피검사", detail: "1·2·3개월 간격\n정기 피검사로\n지속 관리", detailMobile: "1·2·3개월 간격 정기 피검사로 지속 관리" },
    ],
    relatedConditions: [
      { slug: "hallux-rigidus", category: "foot", icon: "ph-bone", label: "엄지발가락관절염", subLabel: "엄지 관절 퇴행성 변화" },
      { slug: "rheumatoid", category: "foot", icon: "ph-hand-fist", label: "류마티스 변형", subLabel: "류마티스 발 변형 치료" },
      { slug: "plantar-fasciitis", category: "foot", icon: "ph-footprints", label: "족저근막염", subLabel: "발바닥 통증 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/gout.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 통풍 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 당일 피검사로 요산 수치를 즉시 확인하고, 주사치료와 약물 처방까지 원스톱으로 받을 수 있습니다. 요산 결절이 심한 경우 제거 수술도 가능합니다." },
      { question: "통풍 발작이 왔을 때 어떻게 해야 하나요?", answer: "즉시 정형외과에 내원하세요. 주사치료로 24~48시간 내 통증이 크게 감소합니다. 자가 처치나 찜질은 오히려 악화시킬 수 있으니 전문 치료를 받는 것이 중요합니다." },
      { question: "통풍약은 평생 먹어야 하나요?", answer: "정기적인 피검사로 요산 수치가 지속적으로 안정하게 유지되고 식이 관리가 잘 될 경우, 약을 중단할 수도 있습니다." },
      { question: "통풍인지 봉와직염인지 어떻게 구별하나요?", answer: "피검사로 요산 수치를 확인하고, 초음파로 관절 내 결정 여부를 확인합니다. 본원에서는 당일 감별 진단이 가능하므로 증상 발생 시 바로 내원하시길 권장합니다." },
      { question: "재발 방지 방법이 있나요?", answer: "요산 수치를 6.0mg/dL 이하로 유지하는 것이 핵심입니다. 충분한 수분 섭취, 퓨린 함량 높은 음식 제한, 금주, 그리고 처방된 약물 복용을 꾸준히 하면 재발을 크게 줄일 수 있습니다." },
    ],
    medicalCondition: {
      name: "통풍",
      alternateName: ["Gout", "통풍성 관절염"],
      description: "혈액 내 요산 수치가 높아져 관절 내 요산 결정이 침착되는 대사 질환",
      anatomy: "제1 중족지절 관절 (엄지발가락)",
      treatments: [
        { name: "주사치료", type: "Conservative" },
        { name: "요산 결절 제거술", type: "Surgical" },
      ],
    },
    datePublished: "2025-01-20",
    dateModified: "2026-04-10",
  },
  {
    slug: "hallux-rigidus",
    category: "foot",
    categoryLabel: "족부",
    title: "청주 엄지발가락관절염 치료",
    titleShort: "엄지발가락관절염",
    metaTitle: "청주 엄지발가락관절염 치료 · 수술 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 엄지발가락관절염(무지강직증) 치료. 골극 제거부터 관절 고정술까지.",
    keywords: "청주 엄지발가락관절염, 무지강직증, hallux rigidus 청주",
    canonicalPath: "/foot/hallux-rigidus",
    heroTitle: "청주 엄지발가락관절염",
    heroSubtitle: "걸을 때마다 아픈 무지강직증, 전문의 치료",
    heroDescription:
      "엄지발가락이 굳어 걸을 때마다 아프다면 무지강직증을 의심할 수 있습니다. 골극 제거술로 통증을 제거하거나, 관절 보존·고정술로 발 기능을 회복합니다. 무지외반증·류마티스·발가락 변형과 동일하게 목발·통깁스 없이 조기 보행이 가능합니다.",
    badges: [
      { label: "당일 수술", color: "bg-win-navy text-white", icon: "ph-lightning" },
      { label: "금식 없음", color: "bg-win-skyLight text-win-sky", icon: "ph-fork-knife" },
      { label: "짧은 입원", color: "bg-blue-50 text-blue-700", icon: "ph-bed" },
      { label: "조기 보행", color: "bg-green-50 text-green-700", icon: "ph-person-simple-walk" },
    ],
    symptoms: [
      { title: "엄지발가락이 잘 구부러지지 않는다", description: "관절이 굳어가는 초기 증상입니다" },
      { title: "걸을 때 엄지발가락 관절이 아파 발뒤꿈치로만 걷게 된다", description: "보행 패턴이 변하면서 다른 부위 통증으로 이어질 수 있습니다" },
      { title: "엄지발가락 관절 위에 뼈가 튀어나온 느낌이 있다", description: "골극(뼈 가시)이 형성된 징후입니다" },
      { title: "딱딱한 신발이나 굽이 있는 신발을 신으면 더 아프다", description: "골극이 신발에 눌려 통증이 심해집니다" },
      { title: "오래 걸으면 엄지발가락 위아래가 아프고 붓는다", description: "관절 주변 염증이 동반됩니다" },
      { title: "발가락을 위로 젖혔을 때 통증이 심하다", description: "관절 운동 범위가 감소한 징후입니다" },
    ],
    symptomThreshold: "2개 이상 해당하면 엄지발가락관절염(무지강직증)을 의심할 수 있습니다.",
    symptomInfoBox: "2개 이상 해당 시 전문 진료를 권장합니다. 증상이 지속될수록 관절 손상이 진행되어 관절 보존이 어려워질 수 있습니다.",
    definition:
      "엄지발가락관절염(무지강직증)은 <strong>엄지발가락 첫 번째 관절의 연골이 닳아 골극(뼈 가시)이 형성되고 관절 운동이 제한되는 퇴행성 질환</strong>입니다. 걸을 때 엄지발가락이 구부러지지 않아 보행 패턴이 변하고 발 전체에 통증이 생깁니다. 청주를 비롯한 충북 지역의 중장년층과 스포츠 활동 인구, 경사진 곳에서 근무하는 환경의 직업 인구에서 발생하며, 조기 치료 시 관절 기능을 보존할 수 있습니다.",
    causes: [
      { icon: "ph-hourglass-high", title: "노화·퇴행", description: "관절 연골 노화로 점차 닳아 골극 형성" },
      { icon: "ph-warning-circle", title: "이전 외상", description: "엄지발가락 부상 이후 이차성 관절염 발생" },
      { icon: "ph-person-simple-run", title: "반복 과부하", description: "달리기·운동으로 관절에 반복적 충격" },
      { icon: "ph-sneaker", title: "발 구조 이상", description: "무지외반증·평발 동반 시 관절염 발생 촉진" },
    ],
    conservativeTreatments: [
      { name: "닥터포디·맞춤 인솔", description: "엄지 관절 부하 분산, 통증 완화", type: "conservative" },
      { name: "약물 치료", description: "소염진통제로 급성 통증 관리", type: "conservative" },
      { name: "재활 치료", description: "보행 패턴 교정, 주변 근육 강화", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "골극 제거술 (Cheilectomy)", description: "튀어나온 골극 제거, 관절 운동 범위 회복. 초기~중기에 효과적. 당일 수술 가능.", type: "surgical", tag: "관절 보존", points: ["골극 완전 제거", "관절 운동 범위 회복", "금식 없는 당일 수술"] },
      { name: "관절 고정술 (Fusion)", description: "말기 관절 파괴 시 통증 완전 제거, 관절 안정성 확보.", type: "surgical", tag: "말기", points: ["통증 완전 제거", "안정적 보행 확보", "목발·통깁스 없음"] },
    ],
    surgicalCommonPoints: ["입원 후 당일 수술 가능 (부분마취, 금식 없음)", "수술 후 다음날 보호 신발 착용 후 보행 가능", "목발·통깁스 없음", "수술 후 통증 약 8시간 내 대부분 소실"],
    treatmentNote: "비수술 치료는 통증을 줄이지만, <strong>골극이 형성된 관절은 수술로만 근본적 개선이 가능합니다.</strong>",
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 족부 전문", title: "족부 전문의가 수술 방법 직접 결정", description: "관절 손상 정도에 따라 골극 제거·보존술·고정술 중 최적 방법 선택. 불필요한 고정술 권유 없음." },
      { icon: "ph-lightning", title: "목발·통깁스 없는 수술", description: "수술 후 발바닥 보호 신발만 착용, 다음 날부터 일상 보행 가능. 타원 4주 목발 vs 본원 당일 보행." },
      { icon: "ph-scan", title: "무지외반증·류마티스와 동일한 조기 복귀", description: "수술 방식에 관계없이 보호 신발만 착용, 조기 보행·빠른 일상 복귀." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (53세, 청주 흥덕구)", source: "네이버 예약 후기", text: "엄지발가락이 굳어서 골프를 못 치게 됐어요. 윈윈에서 골극 제거술을 받았는데, 수술 다음날 보호 신발 신고 걸어서 퇴원했고 통증이 싹 없어져서 놀랐어요. 6주 보호 신발 착용 후 라운딩도 다시 나갈 수 있게 됐습니다." },
      { initial: "L", label: "L님 (61세, 청주 서원구)", source: "네이버 예약 후기", text: "걸을 때마다 엄지발가락이 아파서 발뒤꿈치로만 걸었어요. 관절이 많이 망가져서 고정술을 받았는데, 보호 신발만 신고 3일만에 퇴원했습니다. 목발도 안 쓰고 지금은 통증 없이 잘 걷고 있어요." },
    ],
    recoveryIntro: "수술 방법에 따라 차이가 있을 수 있습니다. 아래는 일반적인 회복 일정입니다.",
    recoverySteps: [
      { label: "수술 당일", detail: "보호 신발 보행" },
      { label: "2주", detail: "일상 보행" },
      { label: "6주", detail: "일반 신발 착용" },
      { label: "3개월", detail: "완전 복귀" },
    ],
    recoveryTimeline: [
      { badge: "다음날", badgeSubLabel: "수술", badgeStyle: "navy", label: "보호 신발 착용 보행", detail: "수술 후 다음날\n보호 신발 착용 후 보행 가능", detailMobile: "수술 후 다음날 보호 신발 착용 후 보행 가능" },
      { badge: "1주", badgeStyle: "sky", label: "통증 감소", detail: "수술 부위 통증\n대부분 소실", detailMobile: "수술 부위 통증 대부분 소실" },
      { badge: "2주", badgeStyle: "outline", label: "봉합사 제거", detail: "일상 보행 복귀", detailMobile: "봉합사 제거, 일상 보행 복귀" },
      { badge: "6주", badgeStyle: "outline", label: "일반 신발 착용", detail: "보호 신발 졸업\n편한 신발 전환", detailMobile: "보호 신발 졸업, 편한 신발 전환" },
      { badge: "3개월", badgeStyle: "gradient", label: "완전 복귀", detail: "스포츠·활동\n완전 복귀", detailMobile: "스포츠·활동 완전 복귀" },
    ],
    relatedConditions: [
      { slug: "hallux-valgus", category: "foot", icon: "ph-bone", label: "무지외반증", subLabel: "엄지발가락 변형 교정" },
      { slug: "gout", category: "foot", icon: "ph-drop", label: "통풍", subLabel: "통풍성 관절염 치료" },
      { slug: "rheumatoid", category: "foot", icon: "ph-hand-fist", label: "류마티스 변형", subLabel: "류마티스 발 변형 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/hallux-rigidus.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 엄지발가락관절염 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 족부 전문의 박은수 원장이 골극 제거술·관절 보존술·고정술을 직접 시행합니다. 관절 손상 정도에 따라 최적의 수술법을 결정합니다." },
      { question: "수술 없이 나을 수 있나요?", answer: "초기에는 바닥이 단단한 형태의 신발이나 인솔, 약물, 주사 치료가 도움이 될 수 있습니다. 하지만 골극이 형성되고 관절이 굳으면 수술로만 개선이 가능합니다. 조기에 진단받을수록 관절 보존 확률이 높아집니다." },
      { question: "관절 고정술을 하면 걷는 데 문제가 없나요?", answer: "수술 전, 관절이 망가지는 동안 가동범위는 이미 줄어들었고 통증이 심해 정상 보행이 어려웠기 때문에, 관절 고정술 후에는 통증이 확실하게 줄어들어 오히려 걷는게 더 편해지게 됩니다." },
      { question: "수술 후 목발이 필요한가요?", answer: "보호 신발만 착용하며 목발·통깁스는 사용하지 않습니다. 수술 다음 날부터 보행이 가능합니다." },
      { question: "무지외반증과 같이 있으면 어떻게 하나요?", answer: "두 질환을 동시에 교정할 수 있습니다. 족부 전문의가 X선과 진찰을 통해 최적의 수술 계획을 세우며, 한 번의 수술로 두 가지 문제를 해결합니다. 관절은 유합할 때 틀어진 무지 외반증도 같이 교정하게 됩니다." },
    ],
    medicalCondition: {
      name: "엄지발가락관절염",
      alternateName: ["Hallux Rigidus", "무지강직증"],
      description: "엄지발가락 첫 번째 관절의 연골이 닳아 골극이 형성되는 퇴행성 질환",
      anatomy: "제1 중족지절 관절",
      treatments: [
        { name: "골극 제거술", type: "Surgical" },
        { name: "관절 고정술", type: "Surgical" },
        { name: "맞춤 인솔", type: "Conservative" },
      ],
    },
    datePublished: "2025-01-20",
    dateModified: "2026-04-10",
  },
  {
    slug: "rheumatoid",
    category: "foot",
    categoryLabel: "족부",
    title: "청주 류마티스 발 변형 치료",
    titleShort: "류마티스 발 변형",
    metaTitle: "청주 류마티스 발 변형 치료 — 윈윈정형외과",
    metaDescription:
      "청주 정형외과 윈윈에서 류마티스 발 변형 치료. 약물치료부터 발가락 교정술까지.",
    keywords: "청주 류마티스 발 변형, 류마티스 족부, 청주 정형외과",
    canonicalPath: "/foot/rheumatoid",
    heroTitle: "청주 류마티스 발 변형",
    heroSubtitle: "수술로 정상 발 모양 되찾기",
    heroDescription:
      "류마티스 관절염은 발 모양을 변형시킵니다. 약물 치료로 진행을 막고, 이미 변형된 발은 교정술로 회복합니다. 수술 후에도 무지외반증과 동일하게 목발·통깁스 없이 조기 보행이 가능합니다. 류마티스 약물 치료를 병행하면서 발 변형을 함께 관리할 수 있습니다.",
    badges: [
      { label: "금식 없는 당일 수술", color: "bg-orange-50 text-orange-600", icon: "ph-lightning" },
      { label: "조기 보행", color: "bg-green-50 text-green-700", icon: "ph-person-simple-walk" },
    ],
    symptoms: [
      { title: "여러 발가락 관절이 동시에 붓고 아프다", description: "양쪽 발에 대칭적으로 나타나는 경우가 많습니다" },
      { title: "아침에 발이 뻣뻣하고 풀리는 데 1시간 이상 걸린다", description: "아침 강직은 류마티스 관절염의 대표 증상입니다" },
      { title: "발가락이 점점 휘거나 변형되고 있다", description: "갈퀴족·무지외반 등 복합 변형이 진행됩니다" },
      { title: "발바닥 앞쪽에 굳은살이 생기고 통증이 있다", description: "변형으로 체중 분산이 불균형해져 발생합니다" },
      { title: "류마티스 관절염 진단을 받았거나 의심된 적이 있다", description: "기존 류마티스 환자는 발 변형 동반 가능성이 높습니다" },
      { title: "발 변형 때문에 신발 신기가 어렵다", description: "변형이 진행되면 일반 신발 착용이 불가해집니다" },
    ],
    symptomThreshold: "2개 이상 해당하면 류마티스 발 변형을 의심할 수 있습니다.",
    definition:
      "류마티스 발 변형은 <strong>류마티스 관절염이 발 관절을 침범해 발가락 탈구·무지외반증·갈퀴족 변형 등이 동시에 나타나는 질환</strong>입니다. 염증이 반복되면 관절이 파괴되고 발 모양이 변형되어 통증과 보행 장애로 이어집니다. 청주를 비롯한 충북 지역에서 류마티스 관절염 환자의 약 90%가 발·발목 증상을 경험하며 족부 전문 치료가 필요합니다.",
    causes: [
      { icon: "ph-microscope", title: "자가면역 반응", description: "면역계가 관절 활막을 공격하여 만성 염증 및 연골이 파괴됩니다" },
      { icon: "ph-bone", title: "관절 구조 파괴", description: "장기 염증으로 관절·인대·힘줄이 손상되어 변형이 고착됩니다" },
      { icon: "ph-pill", title: "치료 부재", description: "류마티스 약물 치료 없이 방치 시 변형이 가속됩니다" },
    ],
    conservativeTreatments: [
      { name: "류마티스 약물 치료 (DMARDs)", description: "항류마티스 약물로 염증 억제·변형 진행 방지. 본원에서 직접 처방 가능", type: "conservative", highlight: true, highlightLabel: "★ 차별화", highlightStyle: "purple-name" },
      { name: "닥터포디·맞춤 인솔", description: "변형된 발 압력 분산, 통증 완화", type: "conservative" },
      { name: "재활 치료", description: "관절 가동 범위 유지, 근력 강화", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "발가락 교정술", description: "무지외반증·갈퀴족 등 복합 변형 동시 교정. 정상 발 모양으로 복원.", type: "surgical", tag: "변형 교정", points: ["복합 변형 동시 교정", "정상 발 모양 복원", "보호 신발 착용 조기 보행"] },
      { name: "관절 성형·절골 고정술", description: "파괴된 관절 재건 및 중증 변형 교정 후 핀·나사 고정.", type: "surgical", tag: "중증 변형", points: ["파괴된 관절 재건", "중증 변형 확실한 교정", "목발·통깁스 없음"] },
    ],
    surgicalCommonPoints: ["금식 없는 당일 수술 (조기보행 가능)", "수술 당일부터 보호 신발 착용 보행", "목발·통깁스 없음", "수술 후 통증 약 8시간 내 대부분 소실"],
    treatmentNote: "<strong>약물 치료로 염증을 억제할 수 있지만,</strong> 이미 변형된 뼈는 수술로만 교정됩니다.",
    recoverySteps: [
      { label: "수술 당일", detail: "보호 신발 보행" },
      { label: "2주", detail: "봉합사 제거" },
      { label: "6주", detail: "일반 신발" },
      { label: "3개월", detail: "완전 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 족부 전문", title: "류마티스 약물 치료 + 족부 수술 원스톱", description: "충북권에서 류마티스 내과 치료와 족부 교정 수술을 함께 받을 수 있는 병원. 약물로 염증 잡은 후 수술하면 회복이 빠릅니다." },
      { icon: "ph-lightning", title: "목발·통깁스 없는 교정 수술", description: "발가락 교정 후 다음 날부터 보호 신발로 보행 가능. 타원 6주 목발 vs 본원 당일 보행." },
      { icon: "ph-scan", title: "정상 발 모양 회복", description: "단순 통증 제거가 아닌 발 기능과 외형 동시 복원. 일반 신발 착용이 가능한 정상 발 모양으로 교정합니다." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (52세, 청주 흥덕구)", source: "네이버 예약 후기", text: "류마티스로 양쪽 발가락이 다 휘어서 신발을 못 신었어요. 윈윈에서 약물 치료로 염증 먼저 잡고 교정 수술 받았는데, 목발 없이 보호 신발만 신고 퇴원했습니다. 이제 편한 운동화도 신을 수 있어서 외출이 즐거워졌어요." },
      { initial: "L", label: "L님 (60세, 청주 서원구)", source: "네이버 예약 후기", text: "발가락 변형이 심해서 걸을 때마다 통증이 있었어요. 다른 병원에선 류마티스라 수술이 어렵다고 했는데, 윈윈에서 약 조절 후 수술 받았습니다. 2주 만에 일상 보행 복귀하고 발 모양도 많이 좋아져서 정말 감사합니다." },
    ],
    recoveryIntro: "수술 기준 회복 일정입니다. 변형 정도와 수술 범위에 따라 차이가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "당일", badgeSubLabel: "수술", badgeStyle: "navy", label: "보호 신발 보행", detail: "보호 신발 착용\n보행 시작", detailMobile: "보호 신발 착용 보행 시작" },
      { badge: "1-3일", badgeStyle: "sky", label: "일상 보행", detail: "일상 보행\n시작", detailMobile: "일상 보행 시작" },
      { badge: "2주", badgeStyle: "outline", label: "봉합사 제거", detail: "봉합사 제거\n경과 확인", detailMobile: "봉합사 제거, 경과 확인" },
      { badge: "6주", badgeStyle: "outline", label: "일반 신발", detail: "일반 신발\n착용 전환", detailMobile: "일반 신발 착용 전환" },
      { badge: "3개월", badgeStyle: "gradient", label: "완전 복귀", detail: "모든 활동\n완전 복귀", detailMobile: "모든 활동 완전 복귀" },
    ],
    relatedConditions: [
      { slug: "hallux-valgus", category: "foot", icon: "ph-sneaker", label: "무지외반증", subLabel: "엄지발가락 변형 교정" },
      { slug: "toe-deformity", category: "foot", icon: "ph-sneaker", label: "발가락변형", subLabel: "갈퀴족·망치족 교정" },
      { slug: "gout", category: "foot", icon: "ph-sneaker", label: "통풍", subLabel: "통풍성 관절염 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/rheumatoid.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 류마티스 발 변형 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 약물과 수술치료를 동시에 관리할 수 있는 곳입니다. 박은수 원장이 족부 교정 수술을 담당합니다." },
      { question: "류마티스 약이 있어도 수술이 필요한가요?", answer: "약물로 염증 진행은 억제할 수 있지만, 이미 변형된 뼈는 수술로만 교정이 가능합니다. 약물 치료로 염증을 조절한 후 수술하면 합병증 위험이 줄고 회복이 빨라집니다." },
      { question: "수술 후에도 목발이 필요한가요?", answer: "목발·통깁스는 사용하지 않습니다. 수술 다음 날부터 보호 신발만 신고 보행이 가능합니다. 6주 후 일반 신발로 전환합니다." },
      { question: "류마티스가 있으면 수술 위험이 높지 않나요?", answer: "류마티스 약물 치료로 염증을 충분히 조절한 후 수술하면 합병증 위험을 최소화할 수 있습니다. 수술 전 혈액 검사로 염증 수치를 확인하고 안전하게 진행합니다." },
      { question: "재발 가능성이 있나요?", answer: "류마티스 약물 치료를 꾸준히 받으면 재발 가능성이 크게 감소합니다. 수술 후에도 정기적인 류마티스 관리와 맞춤 인솔 착용이 재발 예방의 핵심입니다." },
    ],
    medicalCondition: {
      name: "류마티스 발 변형",
      alternateName: ["Rheumatoid Foot Deformity"],
      description: "류마티스 관절염이 발 관절을 침범해 변형이 나타나는 질환",
      anatomy: "발 관절 (중족지절 관절)",
      treatments: [
        { name: "발가락 교정술", type: "Surgical" },
        { name: "류마티스 약물 치료", type: "Conservative" },
      ],
    },
    datePublished: "2025-01-20",
    dateModified: "2026-04-10",
  },
  {
    slug: "toe-deformity",
    category: "foot",
    categoryLabel: "족부",
    title: "청주 발가락 변형 치료",
    titleShort: "발가락 변형",
    metaTitle: "청주 발가락 변형 치료 · 수술 — 윈윈정형외과",
    metaDescription:
      "청주 정형외과 윈윈에서 망치족·갈퀴족·단지증·내향성 발톱 치료. 당일 수술, 조기 보행.",
    keywords: "청주 발가락 변형, 망치족, 갈퀴족, 단지증, 내향성 발톱 청주",
    canonicalPath: "/foot/toe-deformity",
    heroTitle: "청주 발가락 변형",
    heroSubtitle: "목발·깁스 없이, 당일 수술로 콤플렉스 해결",
    heroDescription:
      "발가락이 굽어 있거나, 짧거나, 발톱이 파고들어 일상이 불편하다면 해결할 수 있습니다. 망치족·갈퀴족·굳은살·단지증·내향성 발톱까지 발가락 관련 모든 치료가 가능합니다. 목발·통깁스 없이 발바닥 보호 신발만 신고 수술 다음 날부터 보행이 가능합니다.",
    badges: [
      { label: "당일 수술 가능", color: "bg-win-navy text-white", icon: "ph-lightning" },
      { label: "금식 없는 수술", color: "bg-win-skyLight text-win-sky", icon: "ph-bowl-food" },
      { label: "조기 보행", color: "bg-green-50 text-green-700", icon: "ph-person-simple-walk" },
    ],
    symptoms: [
      { title: "발가락이 굽어(망치족·갈퀴족) 신발에 닿아 통증이 있다", description: "발가락 관절이 비정상적으로 굽어진 상태입니다" },
      { title: "발가락 관절 위에 굳은살이 생겨 반복적으로 재발한다", description: "뼈 돌출이나 압력 불균형이 원인일 수 있습니다" },
      { title: "발톱이 살을 파고들어 통증·염증이 생긴다", description: "내향성 발톱은 방치 시 감염으로 진행됩니다" },
      { title: "특정 발가락이 다른 발가락보다 유독 짧아 콤플렉스가 있다", description: "단지증은 수술로 길이 교정이 가능합니다" },
      { title: "오래 걸으면 발 앞부분이 특정 부위에서만 아프다", description: "보행 압력 불균형의 징후입니다" },
      { title: "발가락 모양 때문에 샌들·슬리퍼를 신기 꺼려진다", description: "외형 콤플렉스도 수술로 해결 가능합니다" },
    ],
    symptomThreshold: "2개 이상 해당하면 발가락 변형을 의심할 수 있습니다.",
    definition:
      "발가락 변형은 <strong>망치족(PIP 관절 굴곡 변형), 갈퀴족(DIP 관절 굴곡 변형), 굳은살, 단지증(발가락 짧음), 내향성 발톱</strong> 등 발가락의 구조적·외형적 이상을 통칭합니다. 보행 시 통증과 반복적인 굳은살·염증을 유발하며 동적 보행 검사를 통해 원인을 정확히 파악할 수 있습니다. 청주를 비롯한 충북 지역에서 신발 착용의 불편함과 외형 콤플렉스를 동시에 해결하는 족부 전문 치료가 가능합니다.",
    causes: [
      { icon: "ph-high-heel", title: "잘못된 신발", description: "볼 좁은 신발로 발가락 압박" },
      { icon: "ph-dna", title: "유전·구조 이상", description: "평발·무지외반증 동반" },
      { icon: "ph-warning", title: "외상·신경 질환", description: "근력 불균형으로 변형" },
      { icon: "ph-sneaker", title: "발 압력 불균형", description: "보행 압력 편중으로 변형 가속" },
    ],
    conservativeTreatments: [
      { name: "스트레칭·교정기", description: "초기 경도 변형 진행 억제, 발가락 위치 보조", type: "conservative" },
      { name: "닥터포디·맞춤 인솔", description: "발 압력 분산, 특정 부위 과부하 완화", type: "conservative" },
      { name: "약물 치료", description: "내향성 발톱 초기 염증·감염 조절", type: "conservative" },
      { name: "동적 보행 검사", description: "보행 중 압력 패턴 분석, 굳은살·통증 원인 정확히 파악", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "망치족·갈퀴족 교정술", description: "힘줄 연장 + 핀 고정으로 굽은 발가락 교정. 골극 제거 동시 가능.", type: "surgical", tag: "변형 교정", points: ["힘줄 연장·핀 고정", "굳은살 원인 골극 동시 제거", "보호 신발 착용 조기 보행"] },
      { name: "단지증 연장술", description: "짧은 발가락 뼈 절골 후 단계적 연장. 외형 콤플렉스 해결.", type: "surgical", tag: "길이 교정", points: ["발가락 길이 균형 회복", "외형 개선 + 기능 회복", "조기 보행 가능"] },
      { name: "발톱 부분절제술", description: "반복 재발 시 발톱 뿌리 포함 영구 제거.", type: "surgical", tag: "발톱 교정 프로그램 진행", points: ["당일 시술·귀가"] },
    ],
    surgicalCommonPoints: ["금식 없는 당일 수술 (부분 마취), 조기 보행", "수술 당일부터 보호 신발 착용 보행", "목발·통깁스 없음", "수술 후 통증 약 8시간 내 대부분 소실"],
    treatmentNote: "비수술 치료는 초기 변형 진행을 늦출 수 있지만, <strong>이미 고착된 변형과 반복 재발하는 굳은살은 수술로 해결합니다.</strong>",
    recoverySteps: [
      { label: "수술 당일", detail: "보호 신발 보행" },
      { label: "4~6주", detail: "핀 제거" },
      { label: "2개월", detail: "일반 신발" },
      { label: "3개월", detail: "완전 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 족부 전문", title: "동적 보행 검사로 굳은살 원인 파악", description: "충북권에서 동적 보행 검사 장비를 보유하고 굳은살의 보행 역학적 원인을 분석하는 정형외과. 원인 해결 없는 굳은살 제거는 반드시 재발." },
      { icon: "ph-lightning", title: "목발·깁스 없는 수술", description: "망치족·갈퀴족·단지증 수술 모두 발바닥 보호 신발 착용 후 다음 날 보행 가능." },
      { icon: "ph-scan", title: "발가락 콤플렉스 완벽 해결", description: "기능 회복 + 외형 개선 동시 목표, 단지증 연장 수술로 발가락 길이 불균형 교정." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (38세, 청주 흥덕구)", source: "네이버 예약 후기", text: "망치족으로 신발 신을 때마다 발가락 위가 눌려서 아팠어요. 윈윈에서 힘줄 연장술이랑 핀 고정술 받고 보호 신발 신고 다음 날 걸어서 퇴원했습니다. 6주 후 핀 뽑고 일반 신발 신는데 정말 편해요." },
      { initial: "L", label: "L님 (42세, 청주 서원구)", source: "네이버 예약 후기", text: "네 번째 발가락이 유독 짧아서 수년째 콤플렉스였어요. 윈윈에서 발가락 연장술 받고 길이가 맞춰지니 샌들도 자신 있게 신을 수 있게 됐습니다. 외형이 달라져서 정말 감사합니다." },
    ],
    recoveryIntro: "수술 방법에 따라 차이가 있을 수 있습니다. 아래는 일반적인 회복 일정입니다.",
    recoveryTimeline: [
      { badge: "당일", badgeSubLabel: "수술", badgeStyle: "navy", label: "보호 신발 착용 보행", detail: "수술 당일부터\n발바닥 보호 신발", detailMobile: "수술 당일부터 발바닥 보호 신발" },
      { badge: "1주", badgeStyle: "sky", label: "통증 감소", detail: "일상 보행\n통증 완화", detailMobile: "일상 보행, 통증 완화" },
      { badge: "4~6주", badgeStyle: "outline", label: "핀 제거", detail: "해당 시\n외래 방문", detailMobile: "해당 시 외래 방문" },
      { badge: "2개월", badgeStyle: "outline", label: "일반 신발 착용", detail: "보호 신발 졸업\n편한 신발 전환", detailMobile: "보호 신발 졸업, 편한 신발 전환" },
      { badge: "3개월", badgeStyle: "gradient", label: "완전 복귀", detail: "스포츠·활동\n완전 복귀", detailMobile: "스포츠·활동 완전 복귀" },
    ],
    relatedConditions: [
      { slug: "hallux-valgus", category: "foot", icon: "ph-bone", label: "무지외반증", subLabel: "엄지발가락 변형 교정" },
      { slug: "mortons-neuroma", category: "foot", icon: "ph-sneaker", label: "지간신경종", subLabel: "발가락 사이 신경 통증" },
      { slug: "rheumatoid", category: "foot", icon: "ph-hand-fist", label: "류마티스 변형", subLabel: "류마티스 발 변형 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/toe-deformity.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 발가락 변형 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 망치족·갈퀴족·단지증·내향성 발톱 등 발가락 관련 모든 수술이 가능하며, 족부 전문의 박은수 원장이 직접 시행합니다." },
      { question: "발가락 수술 후 목발이 필요한가요?", answer: "목발·통깁스는 사용하지 않습니다. 발바닥 보호 신발만 신고 수술 다음 날부터 보행이 가능합니다." },
      { question: "굳은살은 왜 계속 재발하나요?", answer: "뼈 돌출이나 보행 압력 불균형이 근본 원인입니다. 원인 교정 없이 표면만 제거하면 반드시 재발합니다. 동적 보행 검사로 원인을 파악한 후 교정하면 재발을 방지할 수 있습니다." },
      { question: "단지증 연장 수술은 안전한가요?", answer: "뼈 절골 후 단계적으로 연장하는 안전한 방법입니다. 수술 후 보호 신발로 조기 보행이 가능하며, 전체 회복 기간은 약 2~3개월입니다." },
      { question: "내향성 발톱은 수술이 꼭 필요한가요?", answer: "가벼운 경우 교정기·약물로 해결이 가능합니다. 반복 재발하거나 심하게 파고드는 경우에는 부분 또는 전체 절제술을 권장합니다. 당일 시술 후 바로 일상 복귀가 가능합니다." },
    ],
    medicalCondition: {
      name: "발가락 변형",
      alternateName: ["Toe Deformity", "망치족", "갈퀴족"],
      description: "발가락의 구조적·외형적 이상을 통칭",
      anatomy: "발가락 관절 (PIP·DIP 관절)",
      treatments: [
        { name: "힘줄 연장·핀 고정술", type: "Surgical" },
        { name: "맞춤 인솔·교정기", type: "Conservative" },
      ],
    },
    datePublished: "2025-01-20",
    dateModified: "2026-04-10",
  },
  {
    slug: "mortons-neuroma",
    category: "foot",
    categoryLabel: "족부",
    conservativePriorityLabel: "우선 시행",
    title: "청주 지간신경종 치료",
    titleShort: "지간신경종",
    metaTitle: "청주 지간신경종 치료 — 윈윈정형외과",
    metaDescription:
      "청주 정형외과 윈윈에서 지간신경종(모튼 신경종) 치료. 비수술 우선, 주사치료부터 절제술까지.",
    keywords: "청주 지간신경종, 모튼 신경종, 발 앞쪽 통증 청주",
    canonicalPath: "/foot/mortons-neuroma",
    heroTitle: "청주 지간신경종",
    heroSubtitle: "초음파·동적 보행검사로 비수술 우선 치료",
    heroDescription:
      "발 앞쪽에 전기가 오는 것 같은 통증, 발가락 저림이 있다면 지간신경종일 수 있습니다. 초음파·체중부하 CT·동적 보행검사로 원인을 정확히 파악한 후 주사 치료와 신발 교정을 먼저 시도합니다. 비수술 치료가 효과 없는 경우에만 신경종 절제술을 고려합니다.",
    badges: [
      { label: "비수술 우선", color: "bg-green-50 text-green-700", icon: "ph-leaf" },
      { label: "수술 비중 5%", color: "bg-blue-50 text-blue-700", icon: "ph-chart-pie-slice" },
    ],
    symptoms: [
      { title: "발 앞쪽 발가락 사이에 전기 오는 듯한 타는 느낌이 있다", description: "지간신경종의 가장 전형적인 증상입니다" },
      { title: "발 앞쪽에 무언가 끼어 있는 것 같은 이물감이 느껴진다", description: "신경 주위 섬유 조직 비대로 인한 증상입니다" },
      { title: "셋째·넷째 발가락 사이가 특히 아프다", description: "셋째 지간 공간에서 가장 흔히 발생합니다" },
      { title: "신발을 벗으면 통증이 줄어든다", description: "압박이 해소되면 증상이 완화되는 특징입니다" },
      { title: "발 앞쪽을 손으로 쥐어짜면 통증이 생긴다", description: "뮬더 클릭 테스트 양성 소견입니다" },
      { title: "굽 높은 신발을 신거나 오래 걸으면 증상이 심해진다", description: "볼 좁은 신발이 신경 압박을 악화시킵니다" },
    ],
    symptomThreshold: "2개 이상 해당하면 지간신경종을 의심할 수 있습니다.",
    symptomInfoBox: "2개 이상 해당 시 전문 진료를 권장합니다. 방치할 경우 신경 손상이 진행되어 치료가 어려워질 수 있습니다.",
    definition:
      "지간신경종은 <strong>발가락 사이를 지나는 신경 주위에 섬유 조직이 비정상적으로 증식해 신경을 압박하는 질환</strong>입니다. 볼 좁은 신발·하이힐 착용이 주요 원인이며, 셋째·넷째 발가락 사이에서 가장 흔히 발생합니다. 청주를 비롯한 충북 지역에서 초음파와 동적 보행검사를 통해 정확히 진단하고 비수술 치료를 우선합니다.",
    causes: [
      { icon: "ph-high-heel", title: "볼 좁은 신발·하이힐", description: "신경 반복 압박" },
      { icon: "ph-sneaker", title: "발 구조 이상", description: "평발·무지외반증 동반 시 압력 불균형" },
      { icon: "ph-person-simple-run", title: "반복 충격", description: "달리기·에어로빅" },
    ],
    conservativeTreatments: [
      { name: "주사 치료", description: "신경종 주위 조직 재생 주사. 통증 60~70% 감소 효과", type: "conservative" },
      { name: "신발 교정·추천", description: "볼 넓은 신발·중족골 패드로 신경 압박 해제. 맞춤 인솔 또는 닥터포디 인솔 병행", type: "conservative" },
      { name: "동적 보행 검사", description: "보행 중 발 압력 패턴 분석, 신경종 유발 압력 집중 부위 파악", type: "conservative" },
      { name: "초음파 진단", description: "신경종 크기·위치 정밀 확인, 주사 치료 정확도 향상", type: "conservative" },
      { name: "체중부하 CT", description: "체중 실은 상태 단층 촬영, 발 구조 3D 분석", type: "conservative" },
      { name: "ESWT (체외충격파 치료)", description: "충격파로 신경종 주변 염증 완화, 조직 재생 촉진", type: "conservative" },
      { name: "주사 치료", description: "초음파 유도 하 정밀 주사, 신경종 부위 직접 약물 주입", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "신경종 절제술", description: "비후된 신경 제거. 3~6개월 보존 치료 실패 시 시행. 부분 마취, 당일 수술.", type: "surgical", tag: "걸리는 느낌이 많이 들 때", points: ["신경종 완전 제거", "짧은 입원", "빠른 일상 복귀"] },
    ],
    surgicalCommonPoints: ["당일 수술, 금식 없음", "수술 당일부터 보호 신발 착용 보행", "목발·통깁스 없음", "수술 후 통증 약 8시간 내 대부분 소실"],
    treatmentNote: "비수술 치료로 <strong>60~70%에서 개선</strong>됩니다. 수술은 3~6개월 보존 치료 실패 시에만 고려합니다.",
    recoverySteps: [
      { label: "1회 주사", detail: "통증 완화 시작" },
      { label: "3회 주사", detail: "60~70% 개선" },
      { label: "3개월", detail: "재평가" },
      { label: "6개월", detail: "치료 종료 또는 수술" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 족부 전문", title: "초음파·체중부하 CT·동적 보행 3가지 검사", description: "충북권에서 지간신경종을 3가지 정밀 검사로 진단하는 족부 전문 병원. 원인 없이 치료하면 효과 없음." },
      { icon: "ph-lightning", title: "신발 교정 + 주사 치료 비수술 우선", description: "적절한 신발 선택 + 주사 치료 병행으로 수술 없이 60~70% 개선 가능." },
      { icon: "ph-scan", title: "관리질환이며, 수술은 필요한 경우에만", description: "지간신경종은 관리가 핵심인 질환입니다. 수술은 꼭 필요한 경우에만 시행합니다." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (43세, 청주 흥덕구)", source: "네이버 예약 후기", text: "하이힐 자주 신다가 발 앞쪽에 전기 오는 듯한 통증이 생겼어요. 윈윈에서 초음파로 지간신경종 확인하고 신발 교정이랑 주사 치료 3회로 증상이 다 없어졌습니다. 수술 안 해도 돼서 정말 다행이에요." },
      { initial: "L", label: "L님 (50세, 청주 서원구)", source: "네이버 예약 후기", text: "6개월 넘게 주사·물리치료 했는데 효과가 없어서 결국 신경종 절제 수술 받았습니다. 수술 후 통증이 완전히 사라지고 2주 만에 일상 복귀했어요. 진작 수술할 걸 그랬다는 생각이 듭니다. 이제 걸리는 느낌도 사라졌어요." },
    ],
    recoveryIntro: "비수술 치료 기준 일정입니다. 개인 차이에 따라 달라질 수 있습니다.",
    recoveryTimeline: [
      { badge: "1주", badgeStyle: "navy", label: "통증 완화 시작", detail: "첫 주사 치료 후\n증상 감소 시작", detailMobile: "첫 주사 치료 후 증상 감소 시작" },
      { badge: "1-3주", badgeStyle: "sky", label: "60~70% 통증 감소", detail: "주사 치료 병행\n증상 뚜렷한 개선", detailMobile: "주사 치료 병행, 증상 뚜렷한 개선" },
      { badge: "포디", badgeSubLabel: "닥터", badgeStyle: "outline", label: "신경 압박 해제", detail: "볼 넓은 신발\n닥터포디 인솔 착용", detailMobile: "볼 넓은 신발, 닥터포디 인솔 착용" },
      { badge: "2-3개월", badgeStyle: "gradient", label: "재평가", detail: "치료 효과 확인\n방향 결정", detailMobile: "치료 효과 확인, 방향 결정" },
    ],
    relatedConditions: [
      { slug: "toe-deformity", category: "foot", icon: "ph-sneaker", label: "발가락변형", subLabel: "망치족·갈퀴족 교정" },
      { slug: "plantar-fasciitis", category: "foot", icon: "ph-footprints", label: "족저근막염", subLabel: "발바닥 통증 치료" },
      { slug: "flatfoot", category: "foot", icon: "ph-sneaker", label: "평발", subLabel: "발 아치 교정" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/mortons-neuroma.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 지간신경종 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 초음파·체중부하 CT·동적 보행검사 장비를 모두 보유하고 있으며, 비수술 치료를 우선 시행합니다. 수술이 필요한 경우 족부 전문의가 직접 절제술을 시행합니다." },
      { question: "수술 없이 나을 수 있나요?", answer: "60~70%는 비수술 치료로 개선됩니다. 볼 넓은 신발 교정과 주사 치료를 병행하면 효과가 높습니다. 3~6개월 보존 치료에 반응이 없는 경우에만 수술을 고려합니다." },
      { question: "신발을 바꾸면 정말 좋아지나요?", answer: "볼이 넓은 신발, 앞이 잘 접히지 않는 단단한 신발 착용 시 변화가 큽니다. 닥터포디 인솔을 병행하면 효과가 더 높아집니다. 실내에서는 실내화 착용이 필수입니다." },
      { question: "지간신경종과 족저근막염은 어떻게 다른가요?", answer: "지간신경종은 발가락 사이에 전기 오는 듯한 타는 느낌이 특징이고, 족저근막염은 발뒤꿈치·발바닥 전체 통증이 특징입니다. 초음파 검사로 정확하게 감별 진단할 수 있습니다." },
      { question: "재발 가능성이 있나요?", answer: "신발 습관을 교정하지 않으면 재발 가능성이 있습니다. 수술 후에도 볼 넓은 신발 착용을 유지하고 맞춤 인솔을 사용하는 것이 재발 예방의 핵심입니다." },
    ],
    medicalCondition: {
      name: "지간신경종",
      alternateName: ["Morton's Neuroma", "모튼 신경종"],
      description: "발가락 사이 신경 주위에 섬유 조직이 증식해 신경을 압박하는 질환",
      anatomy: "족부 지간 신경",
      treatments: [
        { name: "신경종 절제술", type: "Surgical" },
        { name: "주사 치료", type: "Conservative" },
      ],
    },
    datePublished: "2025-01-20",
    dateModified: "2026-04-10",
  },
  {
    slug: "accessory-navicular",
    category: "foot",
    categoryLabel: "족부",
    title: "청주 부주상골 증후군 치료",
    titleShort: "부주상골 증후군",
    metaTitle: "청주 부주상골 치료 — 윈윈정형외과",
    metaDescription:
      "청주 정형외과 윈윈에서 부주상골 증후군 치료. ESWT·주사·인솔 비수술부터 Kidner 수술까지.",
    keywords: "청주 부주상골, 부주상골 증후군, Kidner 수술 청주",
    canonicalPath: "/foot/accessory-navicular",
    heroTitle: "청주 부주상골 증후군",
    heroSubtitle: "발 안쪽 뼈 돌출 통증, 비수술 치료 먼저",
    heroDescription:
      "발 안쪽 복숭아뼈 아래에 뼈가 튀어나와 신발에 눌려 아프다면 부주상골일 수 있습니다. 닥터포디·맞춤 인솔·ESWT·주사 치료로 대부분 수술 없이 통증을 조절합니다. 비수술 치료가 효과 없을 때만 부주상골 절제술(Kidner 수술)을 시행합니다.",
    badges: [
      { label: "비수술 우선", color: "bg-green-50 text-green-700", icon: "ph-leaf" },
    ],
    symptoms: [
      { title: "발 안쪽 복숭아뼈 아래에 뼈 돌출이 있고 그 부위가 아프다", description: "부주상골의 가장 전형적인 증상" },
      { title: "오래 걷거나 운동하면 발 안쪽이 쉽게 피로하고 통증이 온다", description: "후경골건에 부하가 걸려 발생" },
      { title: "신발 안쪽이 발 안쪽 돌출부를 압박해 불편하다", description: "뼈 돌출이 신발과 마찰" },
      { title: "평발과 동반된다는 말을 들었다", description: "부주상골과 평발은 높은 동반율" },
      { title: "어릴 때부터 발 안쪽이 볼록하게 튀어나온 것을 알고 있었다", description: "선천성 과잉 뼈는 성장기에 발견되는 경우가 많습니다" },
      { title: "스포츠·달리기 후 발 안쪽 통증이 심해진다", description: "반복적 충격이 증상을 악화" },
    ],
    symptomThreshold: "2개 이상 해당하면 부주상골 증후군을 의심할 수 있습니다.",
    symptomInfoBox: "2개 이상 해당 시 전문 진료를 권장합니다. 부주상골은 비수술 치료로 대부분 통증 조절이 가능합니다.",
    definition:
      "부주상골 증후군은 <strong>발 안쪽에 선천적으로 존재하는 과잉 뼈(부주상골)가 후경골건과 마찰을 일으켜 통증이 생기는 질환</strong>입니다. 전체 인구의 약 10~14%에서 발견되며, 평발과 함께 나타나는 경우가 많습니다. 청주를 비롯한 충북 지역에서 성장기 청소년과 스포츠 활동 인구에서 자주 확인됩니다.",
    causes: [
      { icon: "ph-dna", title: "선천성 과잉 뼈", description: "주상골에 붙은 여분의 뼈" },
      { icon: "ph-person-simple-run", title: "반복 충격", description: "달리기·발목 염좌 후 악화" },
      { icon: "ph-sneaker", title: "평발 동반", description: "아치 무너짐으로 후경골건 장력 증가" },
    ],
    conservativeTreatments: [
      { name: "닥터포디·맞춤 인솔", description: "아치 지지로 후경골건 부하 감소 부주상골 마찰 최소화", type: "conservative" },
      { name: "ESWT(체외충격파)", description: "부주상골 주변 혈류 개선 통증 완화", type: "conservative" },
      { name: "주사 치료", description: "부주상골 주위 염증 억제", type: "conservative" },
      { name: "재활 치료", description: "후경골근 강화 발목 안정화 운동", type: "conservative" },
      { name: "깁스·보조기 고정", description: "급성 통증기 단기 고정", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "부주상골 절제술(Kidner 수술)", description: "부주상골 제거 + 후경골건 재부착. 비수술 실패 시 시행.", type: "surgical", tag: "비수술 실패 시", points: ["부주상골 완전 제거", "후경골건 재부착", "보호 신발 착용 보행"] },
      { name: "후경골건 재건 + 뒷꿈치 교정", description: "힘줄 손상·심한 평발 동반 시 함께 시행.", type: "surgical", tag: "중증", points: ["힘줄 재건·아치 재건", "평발 동시 교정", "족부 전문의 시행"] },
    ],
    surgicalCommonPoints: ["당일 수술, 부분마취 가능", "약 6주간 목발 및 통깁스 보행 필요", "수술 후 통증 약 8시간 내 대부분 소실"],
    treatmentNote: "부주상골이 있다고 모두 수술이 필요한 것은 아닙니다. <strong>통증이 없으면 치료 불필요. 통증 시 비수술 우선.</strong>",
    recoverySteps: [
      { label: "치료 시작", detail: "인솔·ESWT" },
      { label: "3개월", detail: "일상 활동 복귀" },
      { label: "6개월", detail: "스포츠 복귀·재평가" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 족부 전문", title: "비수술 먼저, 수술은 마지막 선택", description: "충북권에서 부주상골 치료를 닥터포디·ESWT·재활 비수술로 먼저 충분히 시도하는 족부 전문 병원. 통증 있는 사람의 70%는 비수술로 해결." },
      { icon: "ph-lightning", title: "닥터포디·맞춤 인솔 + 맞춤 재활", description: "인솔 처방에 그치지 않고 후경골건 강화 재활 병행으로 근본적 원인 치료." },
      { icon: "ph-scan", title: "필요 시 Kidner 수술·힘줄 재건까지 원스톱", description: "비수술 실패 시 절제술부터 힘줄 재건 뒷꿈치 교정까지 한 병원에서 해결." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (16세 학생, 청주 흥덕구)", source: "네이버 예약 후기", text: "달리기 할 때마다 발 안쪽이 아파서 체육 시간이 싫었어요. 윈윈에서 닥터포디 처방받고 재활 운동 3개월 했더니 통증 없이 달릴 수 있게 됐습니다. 수술 안 해도 돼서 정말 다행이에요." },
      { initial: "L", label: "L님 (32세, 청주 서원구)", source: "네이버 예약 후기", text: "6개월 넘게 인솔이랑 주사 치료 했는데 효과가 없어서 결국 Kidner 수술 받았습니다. 발 안쪽 통증이 완전히 사라져서 만족합니다." },
    ],
    recoveryIntro: "비수술 치료 기준 회복 과정입니다. 개인 상태에 따라 차이가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "시작", badgeSubLabel: "치료", badgeStyle: "navy", label: "인솔·ESWT 시작", detail: "통증 완화 시작", detailMobile: "통증 완화 시작" },
      { badge: "2주~1개월", badgeStyle: "sky", label: "자극 감소", detail: "통증 빈도 감소\n보행 편안해짐", detailMobile: "통증 빈도 감소, 보행 편안해짐" },
      { badge: "1~2개월", badgeStyle: "outline", label: "일상 활동 복귀", detail: "재활 운동 병행\n일상 보행 정상화", detailMobile: "재활 운동 병행, 일상 보행 정상화" },
      { badge: "2~3개월", badgeStyle: "gradient", label: "스포츠 복귀·재평가", detail: "스포츠 활동 복귀\n수술 필요성 재평가", detailMobile: "스포츠 활동 복귀, 수술 필요성 재평가" },
    ],
    relatedConditions: [
      { slug: "flatfoot", category: "foot", icon: "ph-sneaker", label: "평발", subLabel: "발 아치 교정" },
      { slug: "plantar-fasciitis", category: "foot", icon: "ph-footprints", label: "족저근막염", subLabel: "발바닥 통증 치료" },
      { slug: "ligament-tendinitis", category: "ankle", icon: "ph-bandaids", label: "인대 파열·힘줄염", subLabel: "발목 힘줄 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/accessory-navicular.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 부주상골 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 닥터포디·ESWT·재활 비수술 치료와 Kidner 수술까지 원스톱으로 가능합니다. 족부 전문의 박은수 원장이 직접 시행합니다." },
      { question: "부주상골은 꼭 수술해야 하나요?", answer: "통증이 없으면 치료 자체가 불필요합니다. 통증이 있어도 비수술 치료로 약 70%가 개선됩니다. 6개월 이상 비수술 치료에 반응이 없는 경우에만 수술을 고려합니다." },
      { question: "성장기 아이도 수술이 필요한가요?", answer: "성장 중에는 비수술 치료를 우선합니다. 닥터포디와 재활 운동으로 대부분 관리가 가능하며, 성장 완료 후에도 증상이 지속되면 수술을 고려합니다." },
      { question: "수술 후 회복 기간은 얼마나 되나요?", answer: "수술 후 6주간 목발과 통깁스 착용. 정상 보행 2~3개월, 스포츠 복귀는 4~6개월을 목표로 합니다. 재활 치료를 병행하면 회복 기간을 단축할 수 있습니다." },
      { question: "평발과 함께 있으면 어떻게 치료하나요?", answer: "부주상골과 평발을 동시에 교정할 수 있습니다. 비수술 단계에서는 닥터포디로 아치를 지지하고, 수술 시에는 Kidner 수술과 뒷꿈치 교정술을 함께 시행합니다." },
    ],
    medicalCondition: {
      name: "부주상골 증후군",
      alternateName: ["Accessory Navicular Syndrome"],
      description: "발 안쪽 선천적 과잉 뼈가 통증을 유발하는 질환",
      anatomy: "주상골(발 안쪽)",
      treatments: [
        { name: "부주상골 절제술(Kidner)", type: "Surgical" },
        { name: "맞춤 인솔", type: "Conservative" },
      ],
    },
    datePublished: "2025-01-20",
    dateModified: "2026-04-10",
  },
  {
    slug: "ganglion",
    category: "foot",
    categoryLabel: "족부",
    title: "청주 발 물혹(결절종) 치료",
    titleShort: "발 물혹(결절종)",
    metaTitle: "청주 발 물혹(결절종) 치료 — 윈윈정형외과",
    metaDescription:
      "청주 정형외과 윈윈에서 발 물혹(결절종·갱글리온) 치료. 초음파 진단, 주사 흡인술·절제술.",
    keywords: "청주 발 물혹, 결절종, 갱글리온 청주",
    canonicalPath: "/foot/ganglion",
    heroTitle: "청주 발 물혹(결절종)",
    heroSubtitle: "초음파 정밀 진단, 재발률 낮은 절제술",
    heroDescription:
      "발등·발목에 물렁물렁한 혹이 만져진다면 결절종(갱글리온)일 가능성이 높습니다. 초음파로 크기·위치·내용물을 정밀 확인한 후 주사 흡인술 또는 절제술로 치료합니다.",
    badges: [
      { label: "금식 없음", color: "bg-win-navy text-white", icon: "ph-prohibit" },
      { label: "짧은 입원", color: "bg-win-skyLight text-win-sky", icon: "ph-bed" },
      { label: "조기 보행", color: "bg-emerald-50 text-emerald-600", icon: "ph-person-simple-walk" },
    ],
    symptoms: [
      { title: "발등·발목·발바닥에 둥글고 물렁물렁한 혹이 생겼다", description: "결절종의 전형적인 외관" },
      { title: "혹을 누르면 통증이 있거나 신발에 눌려 불편하다", description: "신발 압박으로 통증이 생깁니다" },
      { title: "혹의 크기가 커졌다 작아졌다 한다", description: "결절종의 특징적 소견" },
      { title: "혹 주변에 저림·당기는 느낌이 있다", description: "신경 압박 가능성" },
      { title: "언제부터인지 모르게 천천히 커졌다", description: "서서히 진행되는 양성 종양" },
      { title: "과거에 비슷한 혹이 생겼다가 사라진 적이 있다", description: "자연 소실과 재발이 반복될 수 있음" },
    ],
    symptomThreshold: "2개 이상 해당하면 발 물혹(결절종)을 의심할 수 있습니다.",
    symptomInfoBox: "2개 이상 해당 시 전문 진료를 권장합니다. 결절종은 자연 소실되기도 하지만 재발이 반복될 수 있습니다.",
    definition:
      "결절종(갱글리온)은 <strong>관절이나 힘줄 주위의 관절낭에서 점액이 빠져나와 낭종이 형성되는 양성 종양</strong>입니다. 발등·발목에 가장 흔히 발생하며, 크기가 변하고 자연 소실되기도 하지만 신발 압박이나 신경 압박으로 통증을 유발합니다. 청주를 비롯한 충북 지역에서 초음파로 정밀 진단 후 흡인술 또는 절제술로 치료합니다.",
    causes: [
      { icon: "ph-arrows-clockwise", title: "관절·힘줄 과사용", description: "반복 동작으로 관절낭에 점액 과잉 분비" },
      { icon: "ph-warning-circle", title: "외상", description: "발목 염좌나 충격 후 결절종 발생" },
      { icon: "ph-bone", title: "관절 이상", description: "관절 퇴행·관절염과 동반 발생" },
    ],
    conservativeTreatments: [
      { name: "초음파 정밀 진단", description: "낭종 크기·위치·내용물 확인, 악성 여부 감별, 치료 방향 결정", type: "conservative" },
      { name: "주사 흡인술", description: "주사기로 내용물 흡인, 당일 시술, 흉터 없음, 재발 가능성 있음", type: "conservative" },
      { name: "경과 관찰", description: "증상 없는 소형 결절종은 관찰 선택 가능", type: "conservative" },
    ],
    surgicalTreatments: [
      { name: "결절종 절제술", description: "낭종 + 뿌리(경부)까지 완전 제거. 주사 흡인 대비 재발률 현저히 낮음. 당일 수술 가능.", type: "surgical", tag: "재발률 10%↓", points: ["낭종·뿌리 완전 제거", "재발률 10% 미만", "금식 없음, 짧은 입원, 조기 보행, 빠른 회복"] },
    ],
    surgicalCommonPoints: ["짧은 입원, 조기 보행", "목발·통깁스 불필요", "최소 절개 봉합"],
    treatmentNote: "주사 흡인술은 재발률 50~70%입니다. <strong>재발이 반복되면 절제술을 권장합니다.</strong>",
    recoverySteps: [
      { label: "수술 당일", detail: "귀가" },
      { label: "3일", detail: "통증 감소" },
      { label: "2주", detail: "봉합사 제거" },
      { label: "4주", detail: "일반 신발 착용" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 족부 전문", title: "초음파로 정밀 진단 먼저", description: "충북권에서 결절종을 초음파로 정밀 확인하고 위치·크기에 맞는 최적 치료를 결정하는 족부 전문 병원." },
      { icon: "ph-lightning", title: "재발률 낮은 절제술", description: "낭종 뿌리(경부)까지 완전 제거. 주사 흡인술 재발률 50~70% 대비 절제술 10% 미만." },
      { icon: "ph-scan", title: "당일 시술·수술 가능", description: "흡인술은 당일 귀가, 절제술은 짧은 입원, 조기 보행." },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (40세, 청주 흥덕구)", source: "네이버 예약 후기", text: "발등에 물렁한 혹이 생겨서 신발 신을 때 계속 눌렸어요. 윈윈에서 초음파로 확인하고 당일 절제술 받았습니다. 2년 넘었는데 재발 없이 깔끔합니다." },
      { initial: "L", label: "L님 (35세, 청주 서원구)", source: "네이버 예약 후기", text: "다른 병원에서 주사로 물혹 빼는 치료를 두 번 받았는데 계속 재발했어요. 윈윈에서 뿌리까지 제거하는 절제술 받았더니 완전히 없어졌습니다. 진작 올 걸 그랬어요." },
    ],
    recoveryIntro: "결절종 절제술 기준 일반적인 회복 일정입니다.",
    recoveryTimeline: [
      { badge: "당일", badgeSubLabel: "수술", badgeStyle: "navy", label: "당일 수술, 짧은 입원", detail: "당일 수술\n짧은 입원" },
      { badge: "3일", badgeStyle: "sky", label: "통증 감소", detail: "수술 부위 통증\n대부분 소실", detailMobile: "수술 부위 통증 대부분 소실" },
      { badge: "2주", badgeStyle: "outline", label: "봉합사 제거", detail: "외래 방문\n경과 확인", detailMobile: "외래 방문, 경과 확인" },
    ],
    relatedConditions: [
      { slug: "plantar-fasciitis", category: "foot", icon: "ph-footprints", label: "족저근막염", subLabel: "발바닥 통증 치료" },
      { slug: "ligament-tendinitis", category: "ankle", icon: "ph-bandaids", label: "인대 파열·힘줄염", subLabel: "발목 힘줄 치료" },
      { slug: "accessory-navicular", category: "foot", icon: "ph-bone", label: "부주상골", subLabel: "발 안쪽 뼈 돌출 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/ganglion.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 발 물혹(결절종) 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 초음파로 정밀 진단 후 당일 흡인술 또는 절제술이 가능합니다. 재발률이 낮은 절제술을 직접 시행합니다." },
      { question: "그냥 놔두면 자연 치유가 되나요?", answer: "일부는 자연 소실되지만 재발이 반복되는 경우가 많습니다. 신발 압박이나 통증이 있으면 치료를 권장합니다. 초음파로 정확한 상태를 확인하는 것이 먼저입니다." },
      { question: "주사로 뽑는 것과 수술 중 어떤 게 낫나요?", answer: "주사 흡인술은 흉터가 없지만 재발률이 50~70%입니다. 절제술은 뿌리까지 제거하므로 재발률 10% 미만입니다. 재발을 원치 않으시면 절제술을 권장합니다." },
      { question: "수술 후 흉터가 남나요?", answer: "최소 절개로 봉합하며, 시간이 지나면 흉터가 거의 보이지 않습니다. 발등 결절종의 경우 절개 위치를 신발에 가려지는 곳으로 선택합니다." },
      { question: "악성 종양과 어떻게 구별하나요?", answer: "초음파로 내용물을 확인합니다. 결절종은 점액성 내용물이 특징적으로 확인됩니다. 소견이 불명확한 경우 MRI를 추가로 시행해 정확히 감별합니다." },
    ],
    medicalCondition: {
      name: "발 물혹(결절종)",
      alternateName: ["Ganglion Cyst", "갱글리온"],
      description: "관절·힘줄 주위에서 점액성 낭종이 형성되는 양성 종양",
      anatomy: "발등·발목 관절낭",
      treatments: [
        { name: "결절종 절제술", type: "Surgical" },
        { name: "주사 흡인술", type: "Conservative" },
      ],
    },
    datePublished: "2025-01-20",
    dateModified: "2026-04-10",
  },
  // ========== FRACTURE ==========
  {
    slug: "foot-ankle",
    category: "fracture",
    categoryLabel: "외상·골절",
    title: "청주 족부·발목 골절 치료",
    titleShort: "족부·발목 골절",
    metaTitle: "청주 족부·발목 골절 치료 · 수술 — 윈윈정형외과",
    metaDescription:
      "청주 정형외과 윈윈에서 족부·발목 골절 치료. 핀 고정술·ORIF·MIPO 당일 수술, 부분 마취·금식 없음.",
    keywords: "청주 족부 골절, 발목 골절 수술, 청주 골절 당일수술",
    canonicalPath: "/fracture/foot-ankle",
    heroTitle: "청주 족부·발목 골절",
    heroSubtitle: "금식 없는 당일 수술 병원",
    heroDescription:
      "발가락·발등·뒷꿈치·발목·정강이 골절, 당일 접수 후 수술까지 가능합니다. 부분 마취로 진행되며 금식이 필요 없고, 퇴원 시점부터 목발 없이 귀가하는 경우도 많습니다. 수술 스케줄 중에도 골절 문의는 항상 받습니다 — 먼저 전화 주세요.",
    faqIntro: "족부·발목 골절에 대해 환자분들이 가장 많이 묻는 질문에 답변드립니다.",
    badges: [
      { label: "당일 수술 가능", color: "bg-win-navy text-white", icon: "ph-lightning" },
      { label: "수술", color: "bg-win-skyLight text-win-sky", icon: "ph-house" },
      { label: "조기 보행", color: "bg-green-50 text-green-700", icon: "ph-person-simple-walk" },
    ],
    symptoms: [
      { title: "발을 딛을 때 극심한 통증", description: "체중 부하 시 날카로운 통증, 걷기가 어렵습니다" },
      { title: "발목·발등이 빠르게 부어오름", description: "부상 직후 급격한 부종, 신발 착용 불가" },
      { title: "멍이 넓게 퍼져 있음", description: "골절 부위 주변 광범위한 혈종 형성" },
      { title: "발가락·뒷꿈치 모양이 변형됨", description: "육안으로 형태가 달라진 경우 즉시 진료 필요" },
      { title: "체중을 실으면 통증 심해짐", description: "서 있기 어렵거나 보행 자체가 불가능" },
      { title: "낙상·충돌·운동 후 통증 지속", description: "외상 후 통증이 가라앉지 않으면 골절 의심" },
    ],
    symptomThreshold: "2개 이상 해당하면 족부·발목 골절을 의심할 수 있습니다.",
    definition:
      "족부·발목 골절은 <strong>발가락·발등·뒷꿈치·발목·정강이 뼈가 외력에 의해 부러지거나 금이 가는 손상</strong>입니다. 낙상, 스포츠 충돌, 교통사고 등이 주요 원인이며, 즉각적인 부종·멍·보행 불능이 특징입니다. 방치 시 뼈가 어긋난 채 유합되어 영구 변형·만성 통증으로 이어질 수 있습니다. 청주를 비롯한 충북 지역 활동성 인구에서 빈번히 발생하며, 신속한 처치가 예후를 결정합니다.",
    causes: [
      { icon: "ph-person-simple-run", title: "스포츠 부상", description: "달리기·축구·농구 중 착지 충격, 인대 동반 손상 빈번" },
      { icon: "ph-car", title: "교통사고·낙상", description: "직접 충격으로 발목·정강이 골절, 복합 손상 가능" },
      { icon: "ph-wheelchair", title: "골다공증", description: "뼈 밀도 저하로 경미한 충격에도 골절 발생" },
      { icon: "ph-sneaker-move", title: "피로 골절", description: "반복 하중 누적 → 미세 균열 → 완전 골절로 진행" },
      { icon: "ph-arrows-counter-clockwise", title: "비틀림 손상", description: "발목 꺾임 → 복숭아뼈·정강이 골절 동반" },
    ],
    conservativeTreatments: [
      { name: "깁스·부목 고정", description: "비전위·안정형 골절에 적용, 4~6주 고정 후 재활", type: "conservative" },
      { name: "ESWT (체외충격파)", description: "힘줄 인대 근육의 염증 감소, 치유 촉진", type: "conservative" },
      { name: "보조기 착용", description: "고정 후 단계별 체중 부하 허용, 보행 보조", type: "conservative" },
      { name: "재활치료", description: "고정 단계에서 가능한 범위의 재활 시행, 고정 해제 후 적극적인 근력,균현 회복, 재골절 예방", type: "conservative" },
    ],
    treatmentNote: "⚠️ 비전위 골절은 보존치료로 회복 가능하지만, <strong>전위·분쇄 골절은 수술적 치료가 필요합니다.</strong>",
    surgicalTreatments: [
      {
        name: "핀 고정술 (K-wire Fixation)",
        tag: "간단한 골절",
        description: "발가락 골절, 골절의 전위 정도가 심하지 않을 때 진행합니다.",
        type: "surgical",
        points: [
          "절개 없이 부분 마취로 진행, 당일 시술",
          "피부 밖으로 핀 돌출, 수술 후 4~6주 외래 제거",
          "발가락·발등 대부분의 단순 골절에 적합",
        ],
      },
      {
        name: "비/관혈적 정복 및 내고정술 (CRIF / ORIF)",
        tag: "전위·관절내",
        description: "발목·뒷꿈치·발등 전위 골절, 관절 내 골절에 적용합니다.",
        type: "surgical",
        points: [
          "골편 정확한 정복 후 금속판·나사로 내고정",
          "발목 관절면 회복, 만성 관절염 예방",
          "하지 부분 마취 원칙, 당일 수술 가능, 금식 없이 수술 가능",
        ],
      },
      {
        name: "최소 침습 금속판 고정술 (MIPO)",
        tag: "분쇄·정강이",
        description: "정강이 골절, 광범위 분쇄 골절에 적용합니다.",
        type: "surgical",
        points: [
          "작은 절개로 금속판 삽입, 연부조직 손상 최소화",
          "골유합 환경 보존, 조기 재활 가능",
          "복잡 골절에서도 안정적인 고정력",
        ],
      },
    ],
    surgicalCommonPoints: [
      "당일 수술 (하지 부분 마취, 금식 없음)",
      "수술 후 목발 없이 조기 보행 가능 (술식·부위에 따라 상이)",
      "수술 스케줄 중에도 골절 문의 항상 접수",
      "전화 문의 시 당일 우선 진료 연결",
    ],
    recoverySteps: [
      { label: "수술 당일", detail: "고정·조기 보행" },
      { label: "1주", detail: "실밥 제거" },
      { label: "1개월", detail: "보조기 제거" },
      { label: "3개월", detail: "스포츠 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 족부·발목 골절 전문", title: "족부 족관절 전문의 직접 집도", description: "충북권에서 족부·발목 골절 수술 전문의가 직접 집도합니다. 박은수 원장이 핀 고정술·ORIF·MIPO 전 술식을 담당하며, 초진부터 수술·재활까지 동일 의사가 관리합니다." },
      { icon: "ph-lightning", title: "당일 수술 원스톱 시스템", description: "접수 → 영상(X-ray/CT) → 수술을 당일 완료합니다. 타 병원의 입원 대기 없이 당일 처치가 가능하며, 수술 스케줄 중에도 골절은 우선 접수합니다." },
      { icon: "ph-person-simple-walk", title: "목발 없는 조기 보행", description: "타 병원 통상 6주 부분 체중 부하 vs 본원 수술 당일~1주 이내 보행 시작. 하지 부분 마취 원칙으로 금식 없이 수술하며 조기 보행을 지원합니다." },
    ],
    staffHighlights: [
      { name: "박은수", role: "족부 족관절 전문의 · 대표원장" },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (43세, 청주 흥덕구)", source: "네이버 예약 후기", text: "달리기를 즐기다가 발목을 삐끗한 줄 알았는데 골절이었어요. 많이 당황했는데 전화했더니 바로 오라고 하셔서 당일에 수술까지 마쳤습니다. 금식도 안 해도 된다고 해서 점심도 먹고 갔어요. 수술 후 며칠 지나니까 목발 없이 걸을 수 있었고, 생각보다 회복이 훨씬 빠릅니다. 잘 오길 잘했다 싶어요." },
      { initial: "L", label: "L님 (51세, 청주 서원구)", source: "네이버 예약 후기", text: "계단에서 미끄러져 뒷꿈치 골절이 됐는데, 대학병원 가면 입원해야 한다고 해서 고민이었어요. 윈윈정형외과는 당일 수술 가능하고 수술 전까지 입원 안 해도 된다고 해서 왔습니다. 수술 후 생각보다 빨리 걸을 수 있었고, 원장님이 처음부터 끝까지 직접 봐주셔서 믿음이 갔습니다." },
    ],
    recoveryIntro: "수술 방법에 따라 차이가 있을 수 있습니다. 아래는 일반적인 회복 일정입니다.",
    recoveryTimeline: [
      { badge: "다음 날", badgeSubLabel: "수술", badgeStyle: "navy", label: "고정·조기 보행", detail: "수술 후 보호 신발 착용\n부분 체중 부하 시작", detailMobile: "수술 후 보호 신발 착용, 부분 체중 부하 시작" },
      { badge: "2주", badgeSubLabel: "수술", badgeStyle: "sky", label: "실밥 제거", detail: "외래 방문\n골절 고정 상태 확인", detailMobile: "외래 방문, 골절 고정 상태 확인" },
      { badge: "2~6주", badgeSubLabel: "수술", badgeStyle: "outline", label: "체중 부하 보행", detail: "보조기 착용\n보행 범위 점진적 확대", detailMobile: "체중 부하 보행, 보조기 착용" },
      { badge: "~3개월", badgeSubLabel: "수술", badgeStyle: "outline", label: "보조기 제거", detail: "재활 치료\n골유합 확인", detailMobile: "재활 치료, 골유합 확인" },
      { badge: "3개월~", badgeSubLabel: "수술", badgeStyle: "gradient", label: "스포츠 복귀", detail: "달리기·스포츠 활동\n단계적 복귀", detailMobile: "달리기·스포츠 활동 단계적 복귀" },
    ],
    relatedConditions: [
      { slug: "hand-arm", category: "fracture", icon: "ph-hand", label: "손·팔 골절", subLabel: "손가락·손목·팔 골절 당일 수술" },
      { slug: "ligament-tendinitis", category: "ankle", icon: "ph-sneaker", label: "발목 인대 파열·힘줄염", subLabel: "발목 인대 손상·힘줄 통증 치료" },
      { slug: "plantar-fasciitis", category: "foot", icon: "ph-footprints", label: "족저근막염", subLabel: "발뒤꿈치 통증 비수술 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/fracture-foot-ankle.webp",
    doctorId: "park-eun-su",
    faqs: [
      {
        question: "청주에서 족부·발목 골절 잘 보는 정형외과는 어디인가요?",
        answer:
          "윈윈정형외과 수술재활센터입니다. 족부 족관절 전문의 박은수 원장이 직접 집도하며, 당일 수술도 가능합니다. 핀 고정술·ORIF·MIPO 등 다양한 술식을 갖추고 있으며, 하지 부분 마취로 금식 없이 당일 처치가 가능합니다.",
      },
      {
        question: "골절인지 삠인지 어떻게 구분하나요?",
        answer:
          "X-ray 촬영이 필수입니다. 심한 부종과 멍이 넓게 퍼지거나, 체중을 싣기 어려울 정도의 통증, 발목·발등 변형이 보이면 골절 가능성이 높습니다. 단순 삠과 구분이 어렵더라도 즉시 병원을 방문해 영상 검사를 받으시길 권장합니다.",
      },
      {
        question: "당일 수술이 정말 가능한가요?",
        answer:
          "비전위·단순 골절 기준으로 당일 수술이 가능합니다. 수술 스케줄 중에도 골절 문의는 항상 접수하고 있으므로, 내원 전 전화 문의(010-5785-7591)를 먼저 해주시면 신속하게 연결해 드립니다.",
      },
      {
        question: "수술 후 얼마 만에 걷나요?",
        answer:
          "술식과 골절 부위에 따라 다르지만, 수술 당일부터 1주 이내에 목발 없이 보행을 시작하는 경우도 있습니다. 타 병원의 통상 6주 부분 체중 부하 기간과 비교해 조기 보행이 큰 차별화 포인트입니다.",
      },
      {
        question: "재골절 위험이 있나요?",
        answer:
          "골밀도 관리와 재활을 완료한 후에는 위험이 크게 줄어듭니다. 수술 후 정기적인 추시 X-ray로 골유합 상태를 확인하고, 필요시 골다공증 치료를 병행하면 재골절 위험을 최소화할 수 있습니다.",
      },
    ],
    medicalCondition: {
      name: "족부·발목 골절",
      alternateName: ["Foot and Ankle Fracture"],
      description: "발가락·발등·뒷꿈치·발목 뼈의 골절",
      anatomy: "발가락·발등·뒷꿈치·발목",
      treatments: [
        { name: "핀 고정술", type: "Surgical" },
        { name: "ORIF", type: "Surgical" },
        { name: "MIPO", type: "Surgical" },
      ],
    },
    datePublished: "2025-01-15",
    dateModified: "2026-04-10",
  },
  {
    slug: "hand-arm",
    category: "fracture",
    categoryLabel: "외상·골절",
    title: "청주 손·팔 골절 치료",
    titleShort: "손·팔 골절",
    metaTitle: "청주 손·팔 골절 치료 · 수술 — 윈윈정형외과",
    metaDescription:
      "청주 정형외과 윈윈에서 손·팔 골절 치료. 핀 고정술·ORIF·MIPO 당일 수술, 부분 마취·금식 없음.",
    keywords: "청주 손 골절, 팔 골절 수술, 손목골절 당일수술 청주",
    canonicalPath: "/fracture/hand-arm",
    heroTitle: "청주 손·팔 골절",
    heroSubtitle: "금식 없는 당일 수술 병원",
    heroDescription:
      "손가락·손등·손목·팔 골절은 일상생활과 업무에 즉각적인 지장을 줍니다. 윈윈정형외과에서는 부분 마취로 당일 수술도 가능하며 금식이 필요 없습니다. 일반 예약 대기 없이 전화 문의 시 골절은 우선 진료로 연결됩니다.",
    badges: [
      { label: "당일 수술 가능", color: "bg-win-navy text-white", icon: "ph-lightning" },
      { label: "수술", color: "bg-win-skyLight text-win-sky", icon: "ph-house" },
    ],
    symptoms: [
      { title: "손가락·손목·팔에 극심한 통증", description: "부상 직후 날카로운 통증, 움직임이 어렵습니다" },
      { title: "부상 부위가 빠르게 부어오름", description: "충격 후 수분 내 급격한 부종 발생" },
      { title: "멍이 넓게 들었음", description: "피하 혈종이 광범위하게 퍼지는 경우 골절 의심" },
      { title: "손가락·손목 형태가 틀어짐", description: "육안으로 변형이 보이면 즉시 진료 필요" },
      { title: "손에 힘이 들어가지 않음", description: "쥐기 어렵거나 손목 운동이 제한됨" },
      { title: "낙상·충돌 후 통증이 지속됨", description: "외상 후 통증이 가라앉지 않으면 골절 의심" },
    ],
    symptomThreshold: "2개 이상 해당하면 손·팔 골절을 의심할 수 있습니다.",
    definition:
      "손·팔 골절은 <strong>손가락·손등·손목·팔 뼈가 외력에 의해 부러지거나 금이 가는 손상</strong>입니다. 낙상 시 손으로 바닥을 짚는 반사 동작이나 직접 충격이 주요 원인이며, 즉각적인 통증·부종·변형이 나타납니다. 방치 시 뼈가 비틀린 채 유합되어 손 기능 저하·만성 통증으로 이어질 수 있습니다. 청주를 비롯한 충북 지역의 직장인·스포츠 활동 인구에서 자주 발생하는 손상입니다.",
    causes: [
      { icon: "ph-person-simple-walk", title: "낙상 (손 짚기)", description: "넘어질 때 손으로 바닥을 짚어 손목·손가락 골절 발생" },
      { icon: "ph-soccer-ball", title: "스포츠 충돌", description: "구기 종목 공 충격, 격투기 타격으로 손·팔 골절" },
      { icon: "ph-car", title: "교통사고", description: "핸들·문 충격으로 손목·팔 골절, 복합 손상 가능" },
      { icon: "ph-wrench", title: "작업 중 부상", description: "무거운 물체 낙하, 기계 끼임으로 인한 골절" },
      { icon: "ph-wheelchair", title: "골다공증", description: "경미한 충격에도 손목 원위부 골절 발생 (콜레스 골절)" },
    ],
    conservativeTreatments: [
      { name: "깁스·부목 고정", description: "비전위·안정형 골절에 적용, 4~6주 고정 후 재활", type: "conservative" },
      { name: "보조기 착용", description: "고정 해제 후 단계적 기능 회복 지원", type: "conservative" },
      { name: "추시 X-ray 관찰", description: "골유합 경과 확인, 위치 이탈 여부 모니터링", type: "conservative" },
      { name: "재활치료", description: "고정 해제 후 손 근력·운동 범위 회복", type: "conservative" },
    ],
    treatmentNote: "⚠️ 비전위 골절은 보존치료로 회복 가능하지만, <strong>전위·분쇄 골절 또는 관절 내 골절은 수술적 치료가 필요합니다.</strong>",
    surgicalTreatments: [
      {
        name: "핀 고정술 (K-wire Fixation)",
        tag: "손가락",
        description: "손가락·손등 골절, 단순 전위 골절에 적용합니다.",
        type: "surgical",
        points: [
          "부분 마취로 당일 시술",
          "핀은 수술 후 4~6주 외래에서 간단히 제거",
          "손가락·손등 단순 골절에 가장 적합",
        ],
      },
      {
        name: "비/관혈적 정복 및 내고정술 (CRIF / ORIF)",
        tag: "손목·전위",
        description: "손목(요골 원위부·주상골)·팔 전위 골절, 관절 내 골절에 적용합니다.",
        type: "surgical",
        points: [
          "골편 정확한 정복 후 금속판·나사로 내고정",
          "손목 관절면 회복, 만성 관절염 예방",
          "부분 마취 원칙, 당일 수술 가능",
        ],
      },
      {
        name: "최소 침습 금속판 고정술 (MIPO)",
        tag: "전완·상완",
        description: "전완부·상완 골절, 분쇄 골절에 적용합니다.",
        type: "surgical",
        points: [
          "작은 절개로 금속판 삽입, 연부조직 손상 최소화",
          "골유합 환경 보존, 조기 재활 가능",
          "복잡한 팔 골절에서도 안정적인 고정",
        ],
      },
    ],
    surgicalCommonPoints: [
      "당일 수술 (부분 마취, 금식 없음)",
      "전화 문의 시 골절 우선 진료 연결",
      "수술 스케줄 중에도 골절 문의 항상 접수",
      "일반 예약 대기와 별도 운영",
    ],
    recoverySteps: [
      { label: "수술 당일", detail: "고정·부목" },
      { label: "2주", detail: "보조기 전환" },
      { label: "1개월", detail: "가벼운 손 사용" },
      { label: "2~3개월", detail: "완전 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 관절·골절 전문", title: "골절 우선 진료 시스템", description: "충북권에서 골절 당일 수술이 가능한 몇 안 되는 병원입니다. 전화 문의 시 일반 예약 대기 없이 골절 우선 진료로 연결하며, 박은수 원장이 직접 집도합니다." },
      { icon: "ph-lightning", title: "당일 수술 원스톱 시스템", description: "접수 → 영상(X-ray) → 수술을 당일 완료합니다. 타 병원의 입원 대기 없이 당일 처치가 가능하며, 부분 마취로 금식 없이 진행됩니다." },
      { icon: "ph-hand-waving", title: "빠른 손 기능 회복", description: "수술 후 2~4주 가벼운 사용 시작, 2~3개월 완전 복귀 목표. 재활치료를 병행해 타 병원 대비 손 기능 복귀를 앞당깁니다." },
    ],
    staffHighlights: [
      { name: "박은수", role: "골절·외상 전문의 · 대표원장" },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (34세, 청주 흥덕구)", source: "네이버 예약 후기", text: "출근길에 미끄러져 손목을 짚었는데 골절이라고 하더라고요. 당황해서 전화했더니 바로 오라고 하셔서 갔는데, 당일에 수술까지 다 해주셨어요. 금식도 필요 없다고 해서 아침도 먹고 갔습니다. 2주 지나니까 가벼운 건 쓸 수 있었고, 직장 복귀도 생각보다 빠르게 했어요." },
      { initial: "L", label: "L님 (42세, 청주 서원구)", source: "네이버 예약 후기", text: "배드민턴 치다가 손가락이 부러졌어요. 큰 병원 가면 기다려야 한다고 해서 윈윈정형외과에 전화했는데 바로 오라고 하셔서 갔습니다. 핀 고정술로 당일 수술했고, 나중에 외래에서 외부 노출 핀도 간단히 빼줬어요. 불안했는데 원장님이 처음부터 직접 봐주셔서 믿음이 갔습니다." },
    ],
    recoveryIntro: "수술 방법에 따라 차이가 있을 수 있습니다. 아래는 일반적인 회복 일정입니다.",
    recoveryTimeline: [
      { badge: "당일", badgeSubLabel: "수술", badgeStyle: "navy", label: "고정·부목", detail: "수술 후 부목 고정\n부분 마취 회복 후 귀가", detailMobile: "수술 후 부목 고정, 부분 마취 회복 후 귀가" },
      { badge: "2주", badgeSubLabel: "수술", badgeStyle: "sky", label: "실밥 제거", detail: "외래 방문\n봉합 확인 및 고정 상태 점검", detailMobile: "외래 방문, 봉합 확인 및 고정 상태 점검" },
      { badge: "2~4주", badgeSubLabel: "수술", badgeStyle: "outline", label: "보조기 전환", detail: "깁스에서 보조기로 전환\n손가락 운동 시작", detailMobile: "깁스에서 보조기로 전환, 손가락 운동 시작" },
      { badge: "4~6주", badgeSubLabel: "수술", badgeStyle: "outline", label: "가벼운 사용", detail: "깁스 제거\n재활 병행 일상 사용 가능", detailMobile: "깁스 제거, 재활 병행 일상 사용 가능" },
      { badge: "2~3개월", badgeSubLabel: "수술", badgeStyle: "gradient", label: "완전 복귀", detail: "모든 활동 복귀\n핀 제거(해당 시) 완료", detailMobile: "모든 활동 복귀, 핀 제거(해당 시) 완료" },
    ],
    relatedConditions: [
      { slug: "foot-ankle", category: "fracture", icon: "ph-sneaker", label: "족부·발목 골절", subLabel: "발가락·발목·정강이 골절 당일 수술" },
      { slug: "tennis-golf-elbow", category: "hand-arm", icon: "ph-tennis-ball", label: "테니스·골프 엘보", subLabel: "팔꿈치 통증 비수술·수술 치료" },
      { slug: "tendinitis-trigger", category: "hand-arm", icon: "ph-hand-pointing", label: "손·팔 힘줄염·방아쇠수지", subLabel: "손가락 걸림·힘줄 통증 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/fracture-hand-arm.webp",
    doctorId: "park-eun-su",
    faqIntro: "손·팔 골절에 대해 환자분들이 가장 많이 묻는 질문에 답변드립니다.",
    faqs: [
      {
        question: "청주에서 손·팔 골절 잘 보는 정형외과는 어디인가요?",
        answer: "윈윈정형외과 수술재활센터입니다. 박은수 원장이 골절·외상 전문으로 직접 집도하며, 당일 수술과 전화 우선 진료가 가능합니다. 핀 고정술·ORIF·MIPO 등 다양한 술식을 갖추고 있으며, 부분 마취로 금식 없이 당일 처치가 가능합니다.",
      },
      {
        question: "손목이 많이 부었는데 골절인가요, 삠인가요?",
        answer: "X-ray 촬영이 필수입니다. 부종과 멍이 빠르게 퍼지거나, 손목·손가락 형태가 변형됐거나, 손에 힘이 들어가지 않는다면 골절 가능성이 높습니다. 단순 삠처럼 보여도 골절일 수 있으니 즉시 병원을 방문하시길 권장합니다.",
      },
      {
        question: "전화로 문의하면 당일 진료가 되나요?",
        answer: "네, 가능합니다. 골절 의심 시 전화 문의(010-5785-7591)로 연락하시면 우선 진료로 연결해 드립니다. 일반 예약 대기와 별도로 운영되므로, 내원 전 먼저 전화 주세요.",
      },
      {
        question: "수술 후 손을 언제부터 쓸 수 있나요?",
        answer: "부위와 수술법에 따라 다르지만, 보통 2~4주 후 가벼운 일상적 사용이 가능하고, 완전 복귀는 2~3개월이 소요됩니다. 재활치료를 병행하면 회복 속도를 앞당길 수 있습니다.",
      },
      {
        question: "핀 제거는 언제 하나요?",
        answer: "보통 수술 후 4주 (드물게 6주) 뒤 제거합니다. 외부 노출 핀은 외래에서 간단히 제거하고, 내부 핀은 골유합 후 제거 수술을 진행합니다. 손은 고정보다 빠르게 관절 각도를 유지하는 재활을 하는 게 더 중요합니다.",
      },
    ],
    medicalCondition: {
      name: "손·팔 골절",
      alternateName: ["Hand and Arm Fracture"],
      description: "손가락·손등·손목·팔 뼈의 골절",
      anatomy: "손가락·손등·손목·팔",
      treatments: [
        { name: "핀 고정술", type: "Surgical" },
        { name: "ORIF", type: "Surgical" },
        { name: "MIPO", type: "Surgical" },
      ],
    },
    datePublished: "2025-01-15",
    dateModified: "2026-04-10",
  },

  // ========== ANKLE ==========
  {
    slug: "ligament-tendinitis",
    category: "ankle",
    categoryLabel: "발목",
    title: "청주 발목 인대 파열·힘줄염 치료 · 수술",
    titleShort: "발목 인대 파열·힘줄염",
    metaTitle: "청주 발목 인대 파열·힘줄염 치료 · 수술 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 발목 인대 파열·힘줄염 증상·원인·치료법 완전 정리. 재생주사·PRP·재활부터 인대 봉합술(MBO)·재건술까지. 수술 후 1주 만에 목발 없이 보행.",
    keywords: "청주 발목 인대 파열, 발목 힘줄염 치료, 청주 발목전문, 발목 인대 봉합술, 청주 정형외과, PRP 청주, 발목 불안정증",
    canonicalPath: "/ankle/ligament-tendinitis",
    heroTitle: "청주 발목 인대 파열·힘줄염",
    heroSubtitle: "수술 필요성 여부 정확한 판단, 빠른 회복",
    heroDescription:
      "발목 인대 파열과 힘줄염은 증상이 비슷하지만 치료가 전혀 다릅니다. 족부 전문의가 초음파로 정확히 감별한 후, 비수술로 될지 수술이 필요한지를 명확히 구분합니다. 수술이 필요한 경우 인대 봉합술(MBO) 혹은 PRP 주사와 전문 스포츠 재활 프로그램을 통해 많은 스포츠 선수들이 빠르게 현장에 복귀하고 있습니다.",
    badges: [
      { label: "PRP 치료", color: "bg-sky-50 text-sky-700", icon: "ph-drop" },
      { label: "조기 보행", color: "bg-green-50 text-green-700", icon: "ph-person-simple-walk" },
    ],
    symptoms: [
      { title: "발목을 삐끗한 후 통증과 부기가 좀처럼 가라앉지 않는다", description: "급성 염좌 후 흔한 증상" },
      { title: "발목 외측 또는 내측을 손가락으로 누르면 심하게 아프다", description: "인대 손상 부위 압통" },
      { title: "걷거나 뛸 때 발목이 불안정하게 꺾이는 느낌이 든다", description: "만성 불안정증의 신호" },
      { title: "발목 앞·뒤 힘줄 부위에 열감과 부기가 동반된 통증이 있다", description: "힘줄염의 특징적 증상" },
      { title: "발목 염좌 이후에도 통증이 수주 이상 지속된다", description: "인대 파열 가능성" },
      { title: "운동 복귀 후 발목이 반복적으로 꺾인다", description: "만성 불안정증 진행 중" },
    ],
    symptomThreshold: "2개 이상 해당하면 발목 인대 파열·힘줄염을 의심할 수 있습니다.",
    definition:
      "발목 인대 파열은 <strong>염좌 등 외상으로 외측(전거비인대·종비인대) 또는 내측 인대가 손상되어 불안정증과 통증이 생기는 질환</strong>입니다. 발목 힘줄염은 비골건·후경골건·신전건 등 발목 주변 힘줄에 반복 자극이 쌓여 염증이 발생하는 질환으로, 두 질환은 증상이 유사하나 치료 방향이 달라 정확한 감별이 필요합니다. 청주를 비롯한 충북 지역의 스포츠 활동 인구와 중장년층에서 자주 발생하며, 방치 시 만성 발목 불안정증·관절염으로 이어질 수 있습니다.",
    causes: [
      { icon: "ph-lightning", title: "급성 염좌", description: "발목이 갑자기 꺾이며 인대 과신전·파열" },
      { icon: "ph-person-simple-run", title: "스포츠 부상", description: "달리기·점프·방향 전환 중 발목 과부하" },
      { icon: "ph-arrows-clockwise", title: "반복 마찰", description: "힘줄과 뼈 사이 반복 압박으로 힘줄염 발생" },
      { icon: "ph-sneaker", title: "잘못된 신발", description: "지지력 없는 신발 장기 착용, 발목 안정성 저하" },
      { icon: "ph-hourglass-high", title: "노화·근력 저하", description: "발목 근력 약화로 인대·힘줄에 과부하 누적" },
    ],
    conservativeTreatments: [
      { name: "약물 치료", description: "소염진통제 단기 사용으로 급성 통증·염증 조절 (비수술 치료의 첫 단계)", type: "conservative" },
      { name: "재생주사", description: "인대·힘줄 조직 재생 촉진. 손상 부위 직접 투여", type: "conservative" },
      { name: "PRP 주사", description: "자가혈에서 추출한 성장인자로 치유 촉진. 일반 재생 주사에 효과 없거나 빠른 회복이 필요할 때 시행", type: "conservative" },
      { name: "ESWT (체외충격파)", description: "힘줄 혈류 개선, 만성 힘줄염 통증 억제", type: "conservative" },
      { name: "전문 스포츠 재활 치료", description: "발목 고유감각 훈련, 근력 강화, 스포츠 동작 분석·보행 교정. 선수 복귀 맞춤 재활 프로토콜 적용", type: "conservative" },
      { name: "보조기·테이핑", description: "급성기 발목 보호, 인대 치유 환경 조성", type: "conservative" },
    ],
    secondaryTreatments: [
      { name: "생활 습관 교육", description: "발목 안정화 운동, 신발 선택" },
    ],
    surgicalTreatments: [
      {
        name: "인대 봉합술 (MBO)",
        description: "끊어진 인대 직접 봉합. 수술 후 1주 만에 목발 없이 보행 시작.",
        type: "surgical",
        tag: "보존 재활 치료 호전 없을 시",
        points: [
          "보존 재활 치료 호전 없을 시, 완전 파열로 불안정성 진행시",
          "수술 후 1주 목발 없이 보행",
          "족부 전문의 직접 시행",
        ],
      },
      {
        name: "인대 재건술",
        description: "Internal brace 수술, 자가 또는 동종 힘줄로 인대 재건. 봉합술 후 재파열 등 심각한 불안정증 시 시행.",
        type: "surgical",
        tag: "수술 후 재파열 등 심한 상태일 때만",
      },
      {
        name: "활액막 제거술",
        description: "힘줄염 동반 활액막 비대 시 관절경으로 제거.",
        type: "surgical",
      },
    ],
    recoverySteps: [
      { label: "수술 당일", detail: "부분 마취·당일 퇴원" },
      { label: "1주", detail: "목발 없이 보행 시작" },
      { label: "3~5주", detail: "전체 체중 보행" },
      { label: "2~3개월", detail: "스포츠 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 족부 전문", title: "비수술·수술 정확히 감별", description: "충북권에서 발목 인대 파열 정도를 초음파로 정밀 평가해 비수술 vs 수술 치료를 정확히 구분하는 족부 전문 병원. 감별 없이 치료받으면 시간만 낭비." },
      { icon: "ph-drop", title: "PRP 주사까지 갖춘 비수술 프로토콜", description: "PRP 주사를 시행하는 곳은 흔치 않음. 재생주사·PRP·ESWT·재활을 단계별로 적용해 조직 회복 극대화." },
      { icon: "ph-person-simple-walk", title: "1주 만에 목발 없는 보행, 스포츠 선수들의 선택", description: "MBO 수술 후 1주 만에 목발 없는 보행이 가능하여 빠른 재활 시작으로 일상·운동 복귀가 빠릅니다. 많은 스포츠 선수가 내원하는 병원." },
    ],
    staffHighlights: [
      { name: "박은수", role: "족부 족관절 전문의 · 대표원장" },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (28세, 청주 흥덕구)", source: "네이버 예약 후기", text: "축구 중 발목을 심하게 삐끗한 후 타원에서 치료받았지만 계속 불안정감이 있어 내원했습니다. 초음파로 인대 완전 파열이 확인돼 MBO 봉합술을 받았는데, 1주 만에 보행 시작하고 2개월 만에 운동 복귀했습니다. 이렇게 빨리 뛸 수 있을지 몰랐어요." },
      { initial: "L", label: "L님 (42세, 청주 서원구)", source: "네이버 예약 후기", text: "2년째 발목 힘줄 통증으로 여러 병원을 다녀도 안 나아서 윈윈에 왔습니다. PRP·ESWT·재활 병행 치료로 4개월 만에 통증이 거의 사라졌어요. 수술 없이 일상 복귀해서 정말 만족합니다." },
      { initial: "K", label: "K님 (35세, 청주 청원구)", source: "네이버 예약 후기", text: "증상이 심하지 않은데 다른 병원에서 수술하라고 해서 고민되어 내원했습니다. 다행히 윈윈에서 비수술 치료가 가능하다고 하여 재활 치료를 받았고, 지금은 잘 회복해서 지내고 있습니다. 무조건 수술하지 않고 정확히 봐주셔서 감사했어요." },
    ],
    recoveryIntro: "수술(MBO 봉합술) 기준 회복 과정입니다. 개인차가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "당일", badgeSubLabel: "수술", badgeStyle: "navy", label: "당일 수술", detail: "금식 필요 없음\n당일 퇴원", detailMobile: "금식 필요 없음, 당일 퇴원" },
      { badge: "1주", badgeStyle: "sky", label: "전체중부하 보행", detail: "깁스 후\n목발 불필요", detailMobile: "깁스 후 목발 불필요" },
      { badge: "3~5주", badgeStyle: "outline", label: "일상 보행", detail: "깁스 유지하며\n재활 진행", detailMobile: "깁스 유지하며 재활 진행" },
      { badge: "~2·3개월", badgeStyle: "outline", label: "전문 재활 시작", detail: "깁스 제거 후\n가벼운 운동 가능", detailMobile: "깁스 제거 후 가벼운 운동 가능" },
      { badge: "3개월 이후", badgeStyle: "gradient", label: "스포츠 복귀", detail: "회복 속도에\n따라 복귀", detailMobile: "회복 속도에 따라 스포츠 복귀" },
    ],
    relatedConditions: [
      { slug: "achilles", category: "ankle", icon: "ph-lightning", label: "아킬레스건염·파열", subLabel: "아킬레스건 치료·수술" },
      { slug: "dissecans", category: "ankle", icon: "ph-bone", label: "박리성 골연골염", subLabel: "발목 연골 손상 치료" },
      { slug: "osteoarthritis", category: "ankle", icon: "ph-article", label: "발목 관절염", subLabel: "발목 관절염 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/ligament-tendinitis.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 발목 인대 파열 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 초음파로 인대 파열 정도를 정밀 감별하고, MBO 봉합술·PRP·전문 스포츠 재활 치료까지 가능한 족부 전문 병원입니다. 수술적 치료가 필요한지 여부를 정확하게 판단하여 그에 맞는 치료를 제시합니다. 수술 시에는 1주 만에 보행을 시작하고, 많은 스포츠 선수들이 치료 받고 있습니다." },
      { question: "발목을 삐끗했는데 꼭 수술이 필요한가요?", answer: "대부분의 발목 염좌는 비수술로 치료 가능합니다. 다만 완전 파열이나 만성 불안정증이 확인되면 수술을 고려합니다. 초음파로 손상 정도를 정확히 판단하는 것이 중요합니다." },
      { question: "힘줄염은 수술 없이 나을 수 있나요?", answer: "대부분 수술 없이 ESWT·재활 치료, 재생주사·PRP로 호전됩니다. 심한 경우에만 드물게 수술을 시행합니다." },
      { question: "MBO 수술 후 회복 기간은 얼마나 되나요?", answer: "수술 후 5~7일차 깁스 상태에서 목발 없이 일반 보행이 가능합니다. 한 달 정도 후 깁스를 제거하고 재활을 시작하여 일반 보행이 가능하고, 3개월차부터는 가벼운 운동, 이후 회복 속도에 따라 스포츠 복귀가 가능합니다." },
      { question: "PRP 주사가 일반 주사와 어떻게 다른가요?", answer: "PRP 주사는 자가혈에서 혈소판(성장인자)을 농축 추출하여 손상 부위에 투여합니다. 단순 진통 주사와 달리 조직 재생을 직접 촉진합니다. 일반 재생 주사에 효과가 없거나, 빠른 회복이 필요할 때 시행합니다." },
    ],
    medicalCondition: {
      name: "발목 인대 파열·힘줄염",
      alternateName: ["Ankle Ligament Tear & Tendinitis", "발목 염좌", "비골건염"],
      description: "발목 인대 파열은 외상으로 인대가 손상되어 불안정증과 통증이 생기는 질환이며, 발목 힘줄염은 반복 자극으로 힘줄에 염증이 발생하는 질환입니다.",
      anatomy: "발목 인대·힘줄",
      treatments: [
        { name: "인대 봉합술(MBO)", type: "Surgical" },
        { name: "인대 재건술", type: "Surgical" },
        { name: "PRP 주사", type: "Conservative" },
        { name: "ESWT 체외충격파", type: "Conservative" },
      ],
    },
    datePublished: "2025-03-01",
    dateModified: "2026-04-10",
  },
  {
    slug: "achilles",
    category: "ankle",
    categoryLabel: "발목",
    title: "청주 아킬레스건염·파열 치료 · 수술",
    titleShort: "아킬레스건염·파열",
    metaTitle: "청주 아킬레스건염·파열 치료 · 수술 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 아킬레스건염·파열 증상·원인·치료법 완전 정리. 부착부·비부착부 맞춤 치료, PRP·ESWT 비수술부터 당일 봉합술까지. 타원 6주 vs 본원 2주 보행.",
    keywords: "청주 아킬레스건염, 아킬레스건 파열 수술, 청주 발목전문, 아킬레스건 봉합술, 청주 정형외과, PRP 청주, 아킬레스건 치료",
    canonicalPath: "/ankle/achilles",
    heroTitle: "청주 아킬레스건염·파열",
    heroSubtitle: "당일 수술, 2주 만에 보행 시작",
    heroDescription:
      "아킬레스건 파열은 수술 타이밍이 회복 결과와 재활의 기간을 결정합니다. 본원은 파열 확인 즉시 당일 또는 최대한 빠른 일정으로 수술을 진행합니다. 타원이 수술 후 6주부터 보행을 시작할 때, 본원은 2주부터 보조기 착용 보행을 시작합니다.",
    badges: [
      { label: "당일 수술 가능", color: "bg-red-50 text-red-700", icon: "ph-clock-countdown" },
      { label: "조기 보행", color: "bg-green-50 text-green-700", icon: "ph-person-simple-walk" },
      { label: "PRP 치료", color: "bg-sky-50 text-sky-700", icon: "ph-drop" },
    ],
    symptoms: [
      { title: "뒤꿈치 위 아킬레스건 부위가 붓고 아프다", description: "건염의 초기 증상" },
      { title: "아침에 처음 걸을 때 아킬레스건이 뻣뻣하고 찌릿하다", description: "건 염증에 의한 조조 강직" },
      { title: "운동 중 또는 운동 후에 아킬레스건 통증이 심해진다", description: "활동 시 건 부하 증가" },
      { title: "발뒤꿈치 뼈 바로 위(부착부)를 누르면 심하게 아프다", description: "부착부 건염 의심" },
      { title: "발을 헛디뎠거나 뛰다가 \"뚝\" 소리와 함께 극심한 통증이 왔다", description: "급성 파열 가능성" },
      { title: "파열 후 발끝으로 서지 못하거나 걸음걸이가 크게 불편하다", description: "파열 후 보행 장애" },
    ],
    symptomThreshold: "2개 이상 해당하면 아킬레스건염·파열을 의심할 수 있습니다.",
    definition:
      "아킬레스건염은 <strong>종아리 근육과 발뒤꿈치 뼈를 연결하는 아킬레스건에 반복 자극이 쌓여 염증이 생기는 질환</strong>으로, 발생 위치에 따라 부착부형과 비부착부형으로 나뉘어 치료 방향이 다릅니다. 아킬레스건 파열은 급성 충격이나 만성 변성으로 건이 완전히 또는 부분적으로 끊어진 상태이며, 수술 시기가 빠를수록 회복이 빠르고 재활의 기간, 일상의 복귀 시간이 짧아집니다. 청주를 비롯한 충북 지역의 스포츠 활동 인구와 중장년층에서 자주 발생하는 심각한 하지 손상입니다.",
    causes: [
      { icon: "ph-person-simple-run", title: "과도한 운동", description: "달리기·점프 반복으로 건 과부하 누적" },
      { icon: "ph-trend-up", title: "갑작스런 강도 증가", description: "준비 없이 운동 강도 급격히 올릴 때 건 손상" },
      { icon: "ph-hourglass-high", title: "노화·건 변성", description: "건 탄성 감소로 작은 충격에도 파열 위험" },
      { icon: "ph-sneaker", title: "잘못된 신발", description: "뒤꿈치 쿠션 없는 신발 장기 착용" },
      { icon: "ph-lightning", title: "급성 외상", description: "순간적 과부하 또는 직접 충격으로 건 완전 파열" },
    ],
    conservativeTreatments: [
      { name: "약물 치료", description: "소염진통제 단기 사용으로 통증 및 염증 완화", type: "conservative" },
      { name: "ESWT (체외충격파)", description: "건 혈류 개선, 통증 억제. 부착부·비부착부에 따라 적용 부위와 방향 맞춤 설정", type: "conservative" },
      { name: "재생주사", description: "건 조직 재생 촉진. 건염 부위 직접 투여", type: "conservative" },
      { name: "PRP 주사", description: "자가혈 성장인자로 건 치유 촉진. PRP 주사까지 갖춘 곳은 드묾", type: "conservative" },
      { name: "재활 치료", description: "이심성 스트레칭, 종아리 근력 강화, 보행 교정", type: "conservative" },
    ],
    surgicalTreatments: [
      {
        name: "아킬레스 봉합술",
        description: "급성 파열 즉시 봉합. 수술이 늦을수록 절개범위가 커지고, 재활회복이 늦을 수 있음.",
        type: "surgical",
        tag: "당일 수술 원칙",
        tagColor: "bg-red-500 text-white",
        points: [
          "파열 확인 즉시 당일 수술",
          "타원 6주 vs 본원 2주 보행",
          "족부 전문의 직접 시행",
        ],
      },
      {
        name: "V-Y 봉합술",
        description: "수술의 시기가 늦어져 파열의 범위가 너무 넓은 경우 적용",
        type: "surgical",
      },
      {
        name: "FHL transfer (엄지 굴곡건 이식 재건술)",
        description: "만성 파열·반복 재파열·조직 결손 시 엄지 굴곡건을 이용한 아킬레스 재건",
        type: "surgical",
      },
      {
        name: "염증 부분제거술",
        description: "변성 건 조직 부분 제거. 보존 치료 실패 시",
        type: "surgical",
      },
    ],
    treatmentNote: "부착부 건염과 비부착부 건염은 치료법이 다릅니다. <strong>특히 스테로이드 주사는 부착부에 위험할 수 있어 초음파 확인 후 적용해야 합니다.</strong>",
    recoverySteps: [
      { label: "수술 당일", detail: "부분 마취·당일 퇴원" },
      { label: "2주", detail: "보조기 착용 보행 시작" },
      { label: "6주", detail: "일반 신발 보행" },
      { label: "4~6개월", detail: "스포츠 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 족부 전문", title: "파열 당일 수술 원칙", description: "충북권에서 아킬레스 파열 후 가능한 한 당일 수술을 진행하는 병원. 수술이 늦을수록 회복이 어렵고 절개범위가 커짐." },
      { icon: "ph-lightning", title: "타원 6주 vs 본원 2주 보행", description: "대부분의 병원이 수술 후 6주 후 보행을 시작하지만, 본원은 2주부터 보조기 착용 보행을 시작. 재활 속도가 현저히 빠르고 일상 복귀 시간 단축." },
      { icon: "ph-scan", title: "부착부·비부착부 맞춤 치료", description: "아킬레스 건염의 위치에 따라 ESWT 적용 방향·재활 프로토콜이 달라짐. 초음파로 위치를 정확히 확인 후 맞춤 치료 적용." },
    ],
    staffHighlights: [
      { name: "박은수", role: "족부 족관절 전문의 · 대표원장" },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (38세, 청주 흥덕구)", source: "네이버 예약 후기", text: "배드민턴 도중 '뚝' 소리와 함께 아킬레스가 파열됐습니다. 당일 수술을 받았는데, 2주 후 보조기 착용 보행을 시작하고 4개월 만에 운동에 복귀했어요. 다른 병원은 2주 입원이라고 했는데 3일째부터 통증 없고 입원기간이 일주일도 안됐어요." },
      { initial: "L", label: "L님 (52세, 청주 서원구)", source: "네이버 예약 후기", text: "1년째 아킬레스 뒤꿈치 부위 통증으로 여러 병원을 다녀도 낫지 않았습니다. 윈윈에서 비부착부 건염으로 정확히 진단받고 ESWT 6회와 PRP 주사를 받았더니 4개월 만에 통증이 80% 이상 호전됐어요. 수술 없이 일상 복귀해서 감사합니다." },
    ],
    recoveryIntro: "건염 비수술 치료 기준 회복 과정과 파열 수술 기준 회복 과정입니다.",
    recoveryGroups: [
      {
        label: "건염 비수술",
        icon: "ph-first-aid",
        theme: "blue",
        steps: [
          { badge: "1회", badgeStyle: "navy", label: "통증 완화 시작", detail: "초기 통증 감소" },
          { badge: "3회", badgeStyle: "sky", label: "염증 감소", detail: "건 조직 염증 완화" },
          { badge: "5회", badgeStyle: "outline", label: "재생 진행으로 보행 개선", detail: "보행 능력 회복" },
          { badge: "3개월", badgeStyle: "gradient", label: "스포츠 복귀", detail: "운동복귀" },
        ],
      },
      {
        label: "파열 수술",
        icon: "ph-knife",
        theme: "red",
        steps: [
          { badge: "당일", badgeSubLabel: "수술", badgeStyle: "navy", label: "당일 수술", detail: "부분 마취" },
          { badge: "2주", badgeStyle: "sky", label: "보조기 보행", detail: "보조기 착용\n보행 시작", detailMobile: "보조기 착용 보행 시작" },
          { badge: "4-8주", badgeStyle: "outline", label: "전체 체중 부하", detail: "보조기 각도\n조절", detailMobile: "보조기 각도 조절" },
          { badge: "2-3개월", badgeStyle: "outline", label: "일반 보행", detail: "보조기 없이\n정상 보행", detailMobile: "보조기 없이 정상 보행" },
          { badge: "6개월", badgeStyle: "gradient", label: "스포츠 복귀", detail: "본격적\n운동 복귀", detailMobile: "본격적 운동 복귀" },
        ],
      },
    ],
    relatedConditions: [
      { slug: "ligament-tendinitis", category: "ankle", icon: "ph-bandaids", label: "발목 인대 파열·힘줄염", subLabel: "발목 인대 치료·수술" },
      { slug: "dissecans", category: "ankle", icon: "ph-bone", label: "박리성 골연골염", subLabel: "발목 연골 손상 치료" },
      { slug: "plantar-fasciitis", category: "foot", icon: "ph-footprints", label: "족저근막염", subLabel: "발뒤꿈치 통증 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/achilles.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에 아킬레스 수술 빨리 할 수 있는 곳? 당일 수술 가능한 곳?", answer: "윈윈정형외과 수술재활센터는 아킬레스 파열 확인 즉시 당일 수술을 원칙으로 하는 충북권 족부 전문 병원입니다. 수술 일정을 최대한 빠르게 잡아 드리며, 부분 마취로 진행합니다. 수술이 빠를수록 절개범위가 작아지고 재활 기간도 짧아지므로, 파열이 의심되면 지체 없이 내원하시기 바랍니다." },
      { question: "아킬레스 파열됐는데 수술 없이 치료할 수 있나요?", answer: "부분 파열은 보조기 보존 치료가 가능합니다. 완전 파열은 수술이 권장되며 수술이 빠를수록 결과가 좋습니다." },
      { question: "수술 후 다시 운동할 수 있나요?", answer: "3개월부터 조깅이 가능하고, 6개월 후 스포츠에 복귀할 수 있습니다. 조기 재활이 운동 복귀 시기를 앞당깁니다." },
      { question: "아킬레스 파열 수술은 왜 빨리 해야 하나요?", answer: "시간이 지날수록 종아리 근육이 수축하여 파열된 단면이 말려 올라가 절개 범위가 넓어지고 봉합하기가 어려워지며 재활과 회복의 기간이 늘어날 수 있어, 가급적 빠른 수술이 빠른 회복을 좌우합니다." },
      { question: "건염과 파열을 어떻게 구별하나요?", answer: "초음파·MRI로 건 손상 범위를 정확히 확인합니다. 파열은 발끝서기 불가·Thompson 검사 양성이 특징적입니다." },
    ],
    medicalCondition: {
      name: "아킬레스건염·파열",
      alternateName: ["Achilles Tendinitis & Rupture", "아킬레스건 파열", "아킬레스 건염"],
      description: "아킬레스건염은 반복 자극으로 염증이 생기는 질환이고, 아킬레스건 파열은 건이 끊어지는 급성 손상입니다.",
      anatomy: "아킬레스건(종아리~발뒤꿈치)",
      treatments: [
        { name: "아킬레스 봉합술", type: "Surgical" },
        { name: "FHL transfer 재건술", type: "Surgical" },
        { name: "ESWT 체외충격파", type: "Conservative" },
        { name: "PRP 주사", type: "Conservative" },
      ],
    },
    datePublished: "2025-03-01",
    dateModified: "2026-04-10",
  },
  {
    slug: "dissecans",
    category: "ankle",
    categoryLabel: "발목",
    title: "청주 박리성·이단성 골연골염 치료 · 수술",
    titleShort: "박리성 골연골염",
    metaTitle: "청주 박리성·이단성 골연골염 치료 · 수술 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 발목 박리성·이단성 골연골염 증상·원인·치료법 완전 정리. 관절경적 미세천공술·BMAC 자가골수세포이식술. 관절경 BMAC 가능 국내 극소수 의사 직접 시행.",
    keywords: "청주 박리성 골연골염, 이단성 골연골염 수술, 청주 발목전문, BMAC 수술, 청주 정형외과, 관절경 미세천공술, 발목 연골 손상",
    canonicalPath: "/ankle/dissecans",
    heroTitle: "청주 박리성·이단성 골연골염",
    heroSubtitle: "BMAC 수술 관절경으로 치료 가능",
    heroDescription:
      "발목 통증이 오래 지속되는데 원인을 찾지 못했다면 박리성·이단성 골연골염을 의심해야 합니다. 진단도 어렵고 수술도 까다로운 질환으로, 족부 전문의 및 경험이 풍부한 의료진에게 치료를 받아야 합니다. 본원은 BMAC 자가골수세포이식술의 90%를 관절경으로 시행하며, 이 수술 영상이 스위스 본사 요청으로 전세계 외과의사에게 공유될 예정입니다.",
    badges: [
      { label: "박리성·이단성 골연골염", color: "bg-blue-50 text-blue-700", icon: "ph-bone" },
      { label: "BMAC (자가 골수 줄기세포 치료)", color: "bg-sky-50 text-sky-700", icon: "ph-drop-half" },
    ],
    symptoms: [
      { title: "발목 통증이 오래 지속되는데 정확한 원인을 모르겠다", description: "박리성 골연골염의 흔한 호소" },
      { title: "발목 앞·안쪽 깊숙한 곳이 아프고 운동 후 더 심해진다", description: "연골 손상 부위 통증" },
      { title: "발목을 구부리거나 펼 때 걸리는 느낌이 있다", description: "유리체에 의한 잠김 증상" },
      { title: "발목이 잠기거나 뚝뚝 소리가 난다", description: "연골 박리 진행 징후" },
      { title: "발목 염좌 이후 통증이 수개월 이상 지속된다", description: "외상 후 연골 손상 가능성" },
      { title: "발목 MRI에서 연골 또는 뼈 이상 소견을 들었다", description: "이미 진단 가능성" },
    ],
    symptomThreshold: "2개 이상 해당하면 박리성 골연골염을 의심할 수 있습니다.",
    definition:
      "박리성 골연골염(이단성 골연골염, OCD)은 <strong>발목 거골(talus) 연골 아래 뼈에 혈류 장애가 생겨 연골과 뼈 조각이 분리·박리되는 질환</strong>입니다. 진단이 어렵고 수술 난이도가 높아 족부 전문의 및 경험이 풍부한 의료진에게 치료가 필요하며, 방치 시 연골 손상이 진행되어 발목 관절염으로 이어집니다. 청주를 비롯한 충북 지역에서 반복적인 발목 통증의 원인으로 간과되기 쉬워 정확한 MRI 진단과 전문적 수술이 필요한 질환입니다.",
    causes: [
      { icon: "ph-person-simple-run", title: "발목 염좌·외상", description: "반복 염좌 후 거골 연골 아래 혈류 차단" },
      { icon: "ph-timer", title: "반복 충격", description: "점프·달리기 충격" },
      { icon: "ph-drop-half", title: "혈류 장애", description: "혈류 부족으로 뼈 괴사 후 연골 분리" },
      { icon: "ph-warning", title: "성장기 손상", description: "청소년기 발목 손상 후 발생 가능" },
    ],
    conservativeTreatments: [
      { name: "안정·체중 부하 제한", description: "보조기·목발로 발목 하중 제거. 소형 병변의 자연 치유 유도", type: "conservative" },
      { name: "약물·주사", description: "통증 조절 및 염증 억제", type: "conservative" },
    ],
    surgicalTreatments: [
      {
        name: "관절경적 미세천공술 (Microfracture)",
        description: "병변 부위에 미세 구멍을 만들어 골수 세포 유입 유도. 관절경으로 최소침습 진행.",
        type: "surgical",
        tag: "소형 병변",
        points: ["소형 병변에 효과적", "관절경 최소침습", "짧은 입원·빠른 회복"],
      },
      {
        name: "BMAC 자가골수세포이식술",
        description: "자가 골수에서 추출한 줄기세포를 이식해 연골 재생 유도. 만 15~50세 적용. 본원은 90% 관절경으로 시행. 실손 보험 가능.",
        type: "surgical",
        tag: "중·대형 병변",
        points: [
          "BMAC을 관절경만으로 시행하는 병원은 국내 극소수",
          "90% 관절경 최소침습",
          "실손 보험 가능",
        ],
      },
    ],
    recoverySteps: [
      { label: "수술 당일", detail: "관절경 최소침습 수술" },
      { label: "1~2개월", detail: "비체중 부하" },
      { label: "3개월", detail: "정상 보행" },
      { label: "6개월~", detail: "스포츠 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충청권 족부 전문", title: "박리성·이단성 관절경 BMAC 국내 극소수", description: "충청권에서 박리성·이단성 골연골염에 관절경 BMAC를 시행할 수 있는 유일한 병원. 대부분의 병원은 절개 수술 또는 아예 시행 불가." },
      { icon: "ph-globe", title: "스위스 본사가 인정한 수술 영상", description: "수술 재료 스위스 본사에서 박은수 원장 수술 영상을 직접 요청해 전세계 외과의사에게 공유 작업 진행 중. 국제적으로 검증된 기술력." },
      { icon: "ph-person-simple-walk", title: "관절경 최소침습 → 짧은 입원·빠른 회복", description: "절개 수술 대비 흉터 최소화, 짧은 입원으로 빠른 회복 가능. 실손 보험 가능으로 환자 부담 낮음." },
    ],
    staffHighlights: [
      { name: "박은수", role: "족부 족관절 전문의 · 대표원장" },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (25세, 청주 흥덕구)", source: "네이버 예약 후기", text: "반복적인 발목 통증으로 여러 병원을 다녔지만 원인을 못 찾았습니다. 윈윈에서 골연골염을 확인하고 관절경 미세천공술을 받았어요. 그동안 병원을 많이 다녔는데 제대로 진단이 되지 않아 오랜 시간 고생한 게 억울했어요." },
      { initial: "L", label: "L님 (35세, 청주 서원구)", source: "네이버 예약 후기", text: "관절경으로 BMAC 수술을 받았는데 흉터도 거의 없고, 회복도 빠르고 입원도 짧아서 놀랐어요. 일상 복귀가 이렇게 빠를 줄 몰랐습니다. 절개 안 하길 다행이었어요." },
    ],
    recoveryIntro: "수술 기준 회복 과정입니다. 개인차가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "당일", badgeSubLabel: "수술", badgeStyle: "navy", label: "당일 관절경 수술", detail: "관절경 최소침습\n수술 시행", detailMobile: "관절경 최소침습 수술 시행" },
      { badge: "4주", badgeStyle: "sky", label: "비체중 부하", detail: "깁스 유지\n비체중 부하 보행", detailMobile: "깁스 유지, 비체중 부하 보행" },
      { badge: "1~2개월", badgeStyle: "outline", label: "정상 보행", detail: "전체 체중 부하\n보행 및 재활", detailMobile: "전체 체중 부하 보행 및 재활" },
      { badge: "3개월", badgeStyle: "outline", label: "조깅 시작", detail: "가벼운\n운동 가능", detailMobile: "가벼운 운동 가능" },
      { badge: "1년", badgeStyle: "gradient", label: "연골 성숙", detail: "이식 연골\n완전 성숙", detailMobile: "이식 연골 완전 성숙" },
    ],
    relatedConditions: [
      { slug: "ligament-tendinitis", category: "ankle", icon: "ph-bandaids", label: "발목 인대 파열·힘줄염", subLabel: "발목 인대 치료·수술" },
      { slug: "osteoarthritis", category: "ankle", icon: "ph-article", label: "발목 관절염", subLabel: "발목 관절염 치료" },
      { slug: "achilles", category: "ankle", icon: "ph-lightning", label: "아킬레스건염·파열", subLabel: "아킬레스건 치료·수술" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/dissecans.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 박리성 골연골염 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 관절경으로 미세천공술·BMAC 자가골수세포이식술을 시행합니다. 국내에서 관절경 BMAC가 가능한 의사는 극소수입니다." },
      { question: "박리성·이단성 골연골염은 어떻게 진단하나요?", answer: "CT와 MRI로 연골과 골수 손상 범위를 정밀 평가합니다. X-ray만으로는 놓치기 쉬운 질환으로, 정확한 진단을 위해 CT·MRI 정밀 검사가 필요합니다." },
      { question: "수술 없이 나을 수 있나요?", answer: "소형 병변은 체중 부하 제한으로 자연 치유가 가능합니다. 중·대형 병변이거나 증상이 지속되면 수술이 필요합니다." },
      { question: "BMAC와 미세천공술 중 어느 것이 더 좋은가요?", answer: "병변 크기·위치·나이에 따라 다릅니다. 소형 병변은 미세천공술이 적합하며, 중·대형 병변은 미세천공술과 BMAC를 함께 시행하여 제거된 연골을 커버하는 방식이 더 효과적입니다. 전문의 상담이 필요합니다." },
      { question: "실손 보험이 적용되나요?", answer: "만 15~50세이며 병변 사이즈 및 손상 정도가 크다면 실손 보험 적용이 가능합니다. 구체적인 보장 범위는 담당 의사의 평가 내용에 따라 사전에 보험사에 확인하시길 권장합니다." },
    ],
    medicalCondition: {
      name: "박리성 골연골염",
      alternateName: ["Osteochondritis Dissecans", "이단성 골연골염", "OCD"],
      description: "발목 거골 연골 아래 뼈에 혈류 장애가 생겨 연골과 뼈 조각이 분리·박리되는 질환입니다.",
      anatomy: "발목 거골(talus) 연골",
      treatments: [
        { name: "관절경적 미세천공술", type: "Surgical" },
        { name: "BMAC 자가골수세포이식술", type: "Surgical" },
        { name: "안정·체중 부하 제한", type: "Conservative" },
      ],
    },
    datePublished: "2025-03-01",
    dateModified: "2026-04-10",
  },
  {
    slug: "osteoarthritis",
    category: "ankle",
    categoryLabel: "발목",
    title: "청주 발목 관절염 치료 · 수술",
    titleShort: "발목 관절염",
    metaTitle: "청주 발목 관절염 치료 · 수술 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 발목 관절염 증상·원인·치료법 완전 정리. PRP 주사치료부터 과상부 절골술(SMO)·인공관절 치환술·유합술까지. 연골 상태에 맞는 정밀 맞춤 치료.",
    keywords: "청주 발목 관절염, 발목 인공관절 수술, 청주 발목전문, 발목 절골술 SMO, 청주 정형외과, PRP 청주, 발목 유합술",
    canonicalPath: "/ankle/osteoarthritis",
    heroTitle: "청주 발목 관절염",
    heroSubtitle: "연골 상태별 맞춤 치료, SMO부터 인공관절까지",
    heroDescription:
      "발목 관절염은 연골 손상 단계와 발목 정렬 상태에 따라 치료가 완전히 달라집니다. 초기·중기에는 관절 주사·과상부 절골술(SMO)로 관절 수명을 연장하고, 말기에는 인공관절 치환술 또는 유합술로 통증을 해결합니다. 연골 상태를 정밀 평가한 후 가장 적합한 치료를 제시합니다.",
    badges: [
      { label: "PRP 치료", color: "bg-sky-50 text-sky-700", icon: "ph-drop" },
    ],
    symptoms: [
      { title: "발목 앞·안쪽이 지속적으로 아프고 부기가 반복된다", description: "관절 내 염증에 의한 반복 증상" },
      { title: "오래 걷거나 서 있으면 발목 통증이 점점 심해진다", description: "연골 마모에 의한 하중 통증" },
      { title: "아침에 발목이 뻣뻣해 첫 발을 내딛기가 힘들다", description: "관절 강직 증상" },
      { title: "발목을 구부리거나 펼 때 가동 범위가 줄어들었다", description: "관절 운동 범위 제한" },
      { title: "과거 발목 골절이나 인대 파열 이후 발목 통증이 지속된다", description: "외상 후 관절염 가능성" },
      { title: "발목 X-ray에서 관절 간격이 좁아졌다는 말을 들었다", description: "연골 마모 진행 중" },
    ],
    symptomThreshold: "2개 이상 해당하면 발목 관절염을 의심할 수 있습니다.",
    definition:
      "발목 관절염은 <strong>발목 연골이 닳거나 손상되어 뼈와 뼈가 마찰을 일으켜 통증·관절 변형·가동 범위 제한이 생기는 질환</strong>입니다. 외상 후 관절염(골절·인대 파열 후 속발)이 가장 흔하며, 방치 시 변형과 일상 활동 제한이 진행됩니다. 청주를 비롯한 충북 지역에서 연골 상태와 손상 정도에 따라 PRP 주사부터 인공관절까지 맞춤 치료를 받을 수 있습니다.",
    causes: [
      { icon: "ph-warning", title: "외상 후 관절염", description: "발목 골절·인대 파열 후 연골 손상 누적이 관절염으로 진행" },
      { icon: "ph-bone", title: "박리성 골연골염 후유증", description: "연골 손상이 치료 없이 방치되면 관절염으로 이어짐" },
      { icon: "ph-arrows-clockwise", title: "반복 충격·과사용", description: "장거리 보행·스포츠로 연골 마모" },
      { icon: "ph-hourglass-high", title: "노화", description: "관절 연골 탄성 감소, 뼈 재형성" },
      { icon: "ph-sneaker", title: "발 구조 이상", description: "평발·내반족 등 정렬 불량으로 발목 과부하" },
    ],
    conservativeTreatments: [
      { name: "약물 치료", description: "소염진통제, 연골 보호제", type: "conservative" },
      { name: "보조기·깔창", description: "발목 지지 및 충격 흡수, 정렬 보조", type: "conservative" },
      { name: "재활 치료", description: "발목 근력 강화, 가동 범위 회복, 보행 교정", type: "conservative" },
      { name: "주사 치료", description: "관절 내 히알루론산·스테로이드 주사로 통증 조절 및 염증 억제", type: "conservative" },
      { name: "PRP 주사", description: "자가혈 성장인자로 연골 보호 효과. 단순 진통 주사보다 조직 재생 촉진", type: "conservative" },
    ],
    surgicalTreatments: [
      {
        name: "과상부 절골술 (SMO)",
        description: "발목 정렬 교정. 내반·외반 변형 동반 시 연골 손상 부위의 하중 분산으로 관절 수명 연장.",
        type: "surgical",
        tag: "초·중기 관절염",
        points: ["관절 보존 우선 원칙", "젊은 환자에 유리", "인공관절·유합술 시기 연장"],
      },
      {
        name: "발목 인공관절 치환술",
        description: "손상된 연골을 인공관절로 교체. 발목 운동 범위 유지가 장점.",
        type: "surgical",
        tag: "말기 관절염",
        points: [
          "말기 관절염 적용, 발목 정렬이 올바른 환자에게 적용 가능",
          "운동 범위 유지",
          "족부 전문의 직접 시행",
        ],
      },
      {
        name: "발목 유합술",
        description: "발목 염증 부위를 고정하여 통증을 제거. 고정을 하여도 발목 기능 제한이 많지 않으며, 통증 부분에서는 가장 안정성이 높은 수술.",
        type: "surgical",
      },
    ],
    surgicalNote: "연골 상태·정렬 이상·나이·활동 수준에 따라 SMO → 인공관절 → 유합술 중 가장 적합한 치료를 결정합니다.",
    recoverySteps: [
      { label: "수술", detail: "수술 후 안정" },
      { label: "SMO 6주", detail: "통깁스 후 점진적 보행" },
      { label: "인공관절 6주", detail: "깁스 제거 후 보행" },
      { label: "3~6개월", detail: "일상 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 족부 전문", title: "연골 상태별 정밀 분류 후 맞춤 치료", description: "충북권에서 발목 관절염을 연골 손상 단계·정렬 이상·나이·활동 수준에 따라 SMO·인공관절·유합술 중 가장 적합한 치료를 제시하는 족부 전문 병원." },
      { icon: "ph-bone", title: "SMO로 관절 수명 연장", description: "중기 발목 관절염에서 인공관절·유합술 대신 절골술로 관절 수명을 연장. 젊은 환자에서 관절 보존 우선 원칙." },
      { icon: "ph-drop", title: "PRP 포함 단계적 비수술", description: "단순 진통 주사에 그치지 않고 PRP로 연골 보호까지 목표. 수술 전 최대한 보존 치료를 시도." },
    ],
    staffHighlights: [
      { name: "박은수", role: "족부 족관절 전문의 · 대표원장" },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (55세, 청주 흥덕구)", source: "네이버 예약 후기", text: "과거 발목 골절 이후 5년째 관절염 통증이 지속됐습니다. 연골 상태 정밀 평가 후 SMO 절골술을 받았는데, 수술 3개월 후 휘었던 다리가 펴진 걸 느낄 수 있었고 통증도 줄었어요. 이제야 걷는 게 편해졌습니다." },
      { initial: "L", label: "L님 (65세, 청주 서원구)", source: "네이버 예약 후기", text: "말기 발목 관절염으로 보행이 너무 어려웠습니다. 인공관절 치환술을 받고 2개월 후 계단 오르내리기가 가능해졌어요. 발목 운동 범위가 유지돼서 생활 만족도가 높습니다." },
      { initial: "K", label: "K님 (70세, 청주 청원구)", source: "네이버 예약 후기", text: "발목이 너무 아파 수술 외에는 방법이 없다고 해서 유합술을 받았습니다. 고정술이라고 해서 절뚝거리며 걸을 줄 알았는데, 수술 후에는 이전보다 훨씬 잘 걷고 통증도 거의 사라졌습니다. 걱정했던 것보다 훨씬 결과가 좋았어요." },
    ],
    recoveryIntro: "수술 기준 회복 과정입니다. 개인차가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "당일", badgeSubLabel: "수술", badgeStyle: "navy", label: "입원", detail: "수술 후\n안정", detailMobile: "수술 후 안정" },
      { badge: "6주", badgeSubLabel: "SMO·고정술", badgeStyle: "sky", label: "비체중 부하", detail: "통깁스", detailMobile: "통깁스" },
      { badge: "6주", badgeSubLabel: "인공관절", badgeStyle: "outline", label: "부분체중 부하", detail: "통깁스", detailMobile: "통깁스" },
      { badge: "6~3개월", badgeStyle: "outline", label: "일반 보행", detail: "깁스 제거 후\n정상 보행", detailMobile: "깁스 제거 후 정상 보행" },
      { badge: "6~1년", badgeStyle: "gradient", label: "최종 안정", detail: "골 유합·인공관절\n적응 완료", detailMobile: "골 유합·인공관절 적응 완료" },
    ],
    relatedConditions: [
      { slug: "dissecans", category: "ankle", icon: "ph-bone", label: "박리성 골연골염", subLabel: "발목 연골 손상 치료" },
      { slug: "ligament-tendinitis", category: "ankle", icon: "ph-bandaids", label: "발목 인대 파열·힘줄염", subLabel: "발목 인대 치료·수술" },
      { slug: "osteoarthritis", category: "knee", icon: "ph-article", label: "무릎 관절염", subLabel: "무릎 관절염 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/osteoarthritis.webp",
    doctorId: "park-eun-su",
    faqs: [
      { question: "청주에서 발목 관절염 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. PRP·주사 비수술 치료부터 SMO 절골술·인공관절 치환술·유합술까지 연골 상태별 맞춤 치료를 제공합니다." },
      { question: "발목 인공관절과 유합술 중 어느 것이 낫나요?", answer: "관절염 상태에서 정렬이 올바를 때는 인공관절, 각도 변형이 있는 상태일 때는 유합술이 안전합니다. 인공관절의 경우 관절의 가동범위를 살릴 수 있다는 장점은 있으나, 무릎·어깨와는 달리 발목은 부품 합병증율이 높은 편으로 정렬이 틀어졌다면 유합술이 더 안전한 치료의 선택이 될 수 있습니다. 연골 상태·나이에 따라 전문의와 함께 결정합니다." },
      { question: "수술 없이 발목 관절염을 관리할 수 있나요?", answer: "초기·중기는 PRP·히알루론산 주사·재활로 통증을 관리할 수 있습니다. 연골 손상이 심한 말기에는 수술이 필요합니다." },
      { question: "SMO 절골술은 어떤 경우에 하나요?", answer: "중기 관절염에 내반 또는 외반 변형이 동반된 경우 시행합니다. 정렬 교정으로 관절 수명을 연장해 인공관절이나 유합술을 미룰 수 있습니다." },
      { question: "발목 관절염도 무릎처럼 인공관절 수술이 가능한가요?", answer: "가능합니다. 발목 인공관절은 무릎보다 수술 빈도가 낮지만, 말기 관절염에서 운동 범위 유지를 원하는 경우 효과적입니다." },
    ],
    medicalCondition: {
      name: "발목 관절염",
      alternateName: ["Ankle Osteoarthritis", "발목 퇴행성 관절염", "외상 후 발목 관절염"],
      description: "발목 연골이 닳거나 손상되어 통증·관절 변형·가동 범위 제한이 생기는 질환입니다.",
      anatomy: "발목 관절(경골-거골)",
      treatments: [
        { name: "과상부 절골술(SMO)", type: "Surgical" },
        { name: "발목 인공관절 치환술", type: "Surgical" },
        { name: "발목 유합술", type: "Surgical" },
        { name: "PRP 주사", type: "Conservative" },
      ],
    },
    datePublished: "2025-03-01",
    dateModified: "2026-04-10",
  },

  // ========== SPINE ==========
  {
    slug: "neck",
    category: "spine",
    categoryLabel: "척추",
    title: "청주 목 디스크·협착증·거북목 치료",
    titleShort: "목 디스크·협착증·거북목",
    metaTitle: "청주 목 디스크·협착증·거북목 치료 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 목 디스크·경추 협착증·거북목 증상·원인·치료법 완전 정리. 비수술 우선. SNRB·MBB·경막외 다양한 주사 치료 + 전문 재활 병행. 통증 전문의 직접 진료.",
    keywords: "청주 목 디스크, 경추 협착증 치료, 청주 척추전문, 거북목 치료, 청주 정형외과, SNRB 청주, 목 비수술 치료",
    canonicalPath: "/spine/neck",
    heroDescription:
      "목 디스크·협착증·거북목은 대부분 수술 없이 치료할 수 있습니다. 척추는 수술에 신중해야 합니다.단순히 주사 한 방으로 끝내지 않고, SNRB·MBB·경막외 차단술 등 다양한 주사 치료를 증상에 맞게 선택한 후 전문 재활과 병행해 빠른 회복과 재발 방지까지 목표합니다.통증 전문의가 직접 진단하고 치료합니다.",
    heroTitle: "청주 목 디스크·협착증·거북목",
    heroSubtitle: "다양한 주사 + 전문 재활로 비수술 치료",
    badges: [
      { label: "비수술 우선", color: "bg-green-50 text-green-700", icon: "ph-leaf" },
    ],
    symptoms: [
      { title: "목이 뻣뻣하고 어깨·팔까지 저리거나 당기는 느낌이 있다", description: "경추 신경 압박 의심" },
      { title: "고개를 앞으로 오래 숙이면 목·어깨 통증이 심해진다", description: "자세 관련 통증" },
      { title: "팔·손가락이 저리거나 힘이 빠지는 느낌이 있다", description: "신경근 압박 증상" },
      { title: "두통이 자주 오거나 목 뒷부분이 무겁고 뻐근하다", description: "경추성 두통 가능성" },
      { title: "X-ray 또는 MRI에서 경추 디스크 탈출이나 협착 소견을 들었다", description: "이미 진단 가능성" },
      { title: "스마트폰·컴퓨터 장시간 사용 후 목 통증이 만성화되었다", description: "거북목 진행 가능" },
    ],
    symptomThreshold: "2개 이상 해당하면 목 디스크·협착증·거북목을 의심할 수 있습니다.",
    definition:
      "거북목(일자목)은 <strong>경추 정상 C자 곡선이 소실되어 머리가 앞으로 쏠리는 자세 이상</strong>입니다. 경추 디스크 탈출증은 경추 추간판이 돌출되어 신경근을 압박해 목·어깨·팔 방사통을 유발하는 질환이며, 경추 협착증은 척추관이 좁아져 신경을 압박하는 퇴행성 질환입니다. 청주를 비롯한 충북 지역에서 스마트폰·컴퓨터 장시간 사용 인구 증가로 경추 질환 발생이 빠르게 늘고 있습니다.",
    causes: [
      { icon: "ph-device-mobile", title: "잘못된 자세", description: "장시간 스마트폰·컴퓨터 사용, 고개 숙임으로 경추 과부하" },
      { icon: "ph-briefcase", title: "직업적 자세", description: "사무직·장시간 운전 등 경추 고정 자세 반복" },
      { icon: "ph-hourglass-high", title: "노화·퇴행", description: "추간판 수분 감소, 뼈 돌기 증식으로 협착 진행" },
      { icon: "ph-lightning", title: "외상", description: "교통사고·낙상 등 경추 충격" },
      { icon: "ph-barbell", title: "근육 약화", description: "경추 지지 근육 약화로 추간판에 과부하 집중" },
    ],
    conservativeTreatments: [
      { name: "SNRB (선택적 신경근 차단술)", description: "압박된 신경근에 직접 약물 투여. 디스크·협착증의 팔 방사통 즉시 완화. 진단적 가치도 겸함", type: "conservative" },
      { name: "MBB (내측지 차단술)", description: "경추 후관절에서 오는 목·어깨 통증 선택적 차단", type: "conservative" },
      { name: "LSEB (경막외 차단술)", description: "경막외 공간에 약물 투여. 광범위한 신경 통증 완화", type: "conservative" },
      { name: "재활 치료", description: "주사 치료 후 전문 재활 병행으로 빠른 회복. 경추 심부 근육 강화, 자세 교정, 일상 복귀 훈련", type: "conservative" },
    ],
    secondaryTreatments: [
      { name: "약물 치료", description: "소염진통제·근이완제 단기 사용" },
    ],
    conservativeAmberNote: "주사 치료만으로는 재발이 쉽습니다. <strong>주사 후 전문 재활을 병행해야 근본 원인을 해결하고 재발을 방지할 수 있습니다.</strong>",
    surgicalTreatments: [],
    recoverySteps: [
      { label: "1회 주사", detail: "급성 통증 즉시 완화" },
      { label: "2~3회 주사", detail: "통증 빈도·강도 감소" },
      { label: "4~6주 재활", detail: "근력 강화 본격 시작" },
      { label: "2~3개월", detail: "재발 방지·일상 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 척추 전문", title: "통증 전문의 직접 진료", description: "충북권에서 통증 전문의(김민경 원장)가 직접 경추 질환을 진단·치료하는 병원. SNRB·MBB·LSEB·경막외 차단술 등 다양한 주사 치료 모두 시행 가능." },
      { icon: "ph-first-aid", title: "다양한 주사 + 전문 재활 병행", description: "무조건 주사에만 의존하지 않고, 증상과 부위에 맞는 주사를 선택 후 전문 재활과 병행해 빠른 회복과 재발 방지까지 설계." },
      { icon: "ph-leaf", title: "비수술 우선 원칙", description: "경추 질환은 수술이 필요한 경우가 드뭅니다. 단계적 보존 치료로 대부분 충분히 치료 가능. 불필요한 수술 권유 없음." },
    ],
    staffHighlights: [
      { name: "김민경", role: "통증 전문의" },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (42세, 청주 흥덕구)", source: "네이버 예약 후기", text: "사무직 직장인으로 목 디스크 판정을 받고 수술 권유까지 받았지만 비수술 치료를 원해서 윈윈에 왔습니다. SNRB 주사와 전문 재활을 병행했더니 3개월 만에 팔 저림이 사라졌어요. 수술 없이 업무에 복귀해서 정말 다행입니다." },
      { initial: "L", label: "L님 (55세, 청주 서원구)", source: "네이버 예약 후기", text: "오랜 경추 협착증으로 어깨·팔까지 통증이 지속됐습니다. 상태에 맞는 MBB와 LSEB 단계 치료 후 재활을 병행했더니 6개월 만에 일상 통증이 70% 줄었어요. 이렇게 다양한 주사가 있는 줄 몰랐습니다." },
    ],
    recoveryIntro: "비수술 치료 기준 회복 과정입니다. 개인차가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "1회", badgeSubLabel: "주사", badgeStyle: "navy", label: "통증 완화", detail: "급성 통증\n감소", detailMobile: "급성 통증 감소" },
      { badge: "2~3회", badgeStyle: "sky", label: "안정화", detail: "통증 빈도\n강도 감소", detailMobile: "통증 빈도·강도 감소" },
      { badge: "4~6주", badgeStyle: "outline", label: "재활 본격", detail: "심부 근육\n강화 시작", detailMobile: "심부 근육 강화 시작" },
      { badge: "2개월", badgeStyle: "outline", label: "일상 복귀", detail: "업무·생활\n정상화", detailMobile: "업무·생활 정상화" },
      { badge: "3개월", badgeStyle: "gradient", label: "재발 방지", detail: "근력 유지\n자세 교정 정착", detailMobile: "근력 유지, 자세 교정 정착" },
    ],
    relatedConditions: [
      { slug: "lumbar", category: "spine", icon: "ph-barbell", label: "허리 디스크·협착증·측만증", subLabel: "허리 비수술 치료" },
      { slug: "impingement", category: "shoulder", icon: "ph-hand-fist", label: "어깨 충돌증후군", subLabel: "어깨 통증 치료" },
      { slug: "rotator-cuff", category: "shoulder", icon: "ph-article", label: "회전근개 파열", subLabel: "어깨 수술·재활" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/neck.webp",
    doctorId: "kim-min-kyung",
    faqs: [
      { question: "청주에서 목 디스크·거북목 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 통증 전문의가 직접 진료하며, SNRB·MBB·경막외 차단술 등 다양한 주사 치료와 전문 재활을 병행합니다." },
      { question: "목 디스크는 수술이 필요한가요?", answer: "마비 증상이 없으면 대부분 비수술로 치료 가능합니다. SNRB·경막외 차단술과 재활을 병행하면 수술 없이 회복할 수 있습니다." },
      { question: "SNRB(신경근 차단술)이 무엇인가요?", answer: "압박된 신경근에 직접 약물을 투여해 통증을 즉시 차단하는 시술입니다. 영상 유도 하에 정확한 부위에 시행하며 진단적 가치도 겸합니다." },
      { question: "주사 치료만 받으면 되나요, 재활도 해야 하나요?", answer: "주사는 통증 완화가 목표입니다. 재발 방지와 근본 회복을 위해서는 전문 재활 병행이 필수이며, 주사 단독보다 결과가 훨씬 좋습니다." },
      { question: "거북목도 치료가 가능한가요?", answer: "가능합니다. 경추 심부 근육 강화와 자세 교정 재활로 거북목을 개선하고 추간판 부하를 줄일 수 있습니다." },
    ],
    medicalCondition: {
      name: "목 디스크·협착증·거북목",
      alternateName: ["Cervical Disc Herniation", "경추 디스크 탈출증", "경추 협착증", "거북목"],
      description: "경추 디스크 탈출증·협착증·거북목을 포함하는 경추 질환군으로 대부분 비수술 치료가 가능합니다.",
      anatomy: "경추(목뼈)",
      treatments: [
        { name: "SNRB 선택적 신경근 차단술", type: "Conservative" },
        { name: "MBB 내측지 차단술", type: "Conservative" },
        { name: "LSEB 경막외 차단술", type: "Conservative" },
        { name: "재활 치료", type: "Conservative" },
      ],
    },
    datePublished: "2025-03-01",
    dateModified: "2026-04-10",
  },
  {
    slug: "lumbar",
    category: "spine",
    categoryLabel: "척추",
    title: "청주 허리 디스크·협착증·측만증 치료",
    titleShort: "허리 디스크·협착증·측만증",
    metaTitle: "청주 허리 디스크·협착증·측만증 치료 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 허리 디스크·요추 협착증·척추 측만증 증상·원인·치료법 완전 정리. 비수술 우선. SNRB·MBB·Caudal block 다양한 주사 + 전문 재활 병행.",
    keywords: "청주 허리 디스크, 요추 협착증 치료, 청주 척추전문, 측만증 재활, 청주 정형외과, SNRB 청주, 허리 비수술 치료",
    canonicalPath: "/spine/lumbar",
    heroTitle: "청주 허리 디스크·협착증·측만증",
    heroSubtitle: "다양한 주사 + 전문 재활로 비수술 치료",
    heroDescription:
      "허리 디스크·협착증·측만증은 대부분 수술 없이 치료할 수 있습니다.SNRB·MBB·Caudal block·LSEB 등 다양한 주사 치료를 증상에 맞게 선택하고, 전문 재활과 병행해 빠른 회복과 재발 방지까지 목표합니다.측만증은 수술 없이 전문 스포츠 재활로 진행 억제 및 통증 관리가 가능합니다.",
    badges: [
      { label: "비수술 우선", color: "bg-green-50 text-green-700", icon: "ph-leaf" },
    ],
    symptoms: [
      { title: "허리가 뻣뻣하고 아침에 일어설 때 통증이 심하다", description: "디스크·협착증 공통 증상" },
      { title: "엉덩이·허벅지·종아리가 저리거나 당기는 느낌이 있다", description: "신경근 압박에 의한 방사통" },
      { title: "오래 걷거나 서 있으면 다리가 저려서 쉬어야 한다", description: "협착증 의심 (신경인성 파행)" },
      { title: "앉았다 일어날 때 또는 허리를 숙일 때 통증이 심해진다", description: "디스크 압박 악화" },
      { title: "X-ray 또는 MRI에서 요추 디스크 탈출이나 협착 소견을 들었다", description: "이미 진단 가능성" },
      { title: "척추가 옆으로 휘어 있다는 말을 들었거나 어깨·골반 높이가 다르다", description: "측만증 의심" },
    ],
    symptomThreshold: "2개 이상 해당하면 허리 디스크·협착증·측만증을 의심할 수 있습니다.",
    definition:
      "요추 디스크 탈출증은 <strong>허리 추간판이 돌출되어 신경근을 압박해 허리 통증과 하지 방사통을 유발하는 질환</strong>입니다. 요추 협착증은 척추관이 좁아져 신경을 압박해 보행 시 다리가 저리는 신경인성 파행이 특징이며, 척추 측만증은 척추가 측방으로 10도 이상 휘어진 구조 이상입니다. 청주를 비롯한 충북 지역의 중장년층에서 가장 흔한 만성 통증 원인이며, 대부분 비수술 치료로 충분히 관리됩니다.",
    causes: [
      { icon: "ph-barbell", title: "과부하·잘못된 자세", description: "무거운 물건 들기, 구부정한 자세로 추간판 압력 증가" },
      { icon: "ph-hourglass-high", title: "노화·퇴행", description: "추간판 수분 감소, 인대 비후로 협착 진행" },
      { icon: "ph-lightning", title: "외상", description: "낙상·교통사고 등 요추 충격" },
      { icon: "ph-person-simple-run", title: "스포츠 부상", description: "반복 굴곡·신전 동작으로 추간판 손상" },
      { icon: "ph-dna", title: "구조적 이상", description: "측만증·척추 불안정증 등 구조 문제로 주변 조직 과부하" },
    ],
    conservativeTreatments: [
      { name: "SNRB (선택적 신경근 차단술)", description: "압박된 신경근에 직접 약물 투여. 급성 다리 방사통 즉시 완화. 진단적 기능도 겸함", type: "conservative" },
      { name: "MBB (내측지 차단술)", description: "요추 후관절에서 오는 허리 통증 선택적 차단", type: "conservative" },
      { name: "Caudal block (미추 경막외 차단술)", description: "미추 부위로 약물 투여해 광범위한 요추 신경통증 완화. 협착증에 효과적", type: "conservative" },
      { name: "LSEB (요추 경막외 차단술)", description: "요추 경막외 공간에 직접 약물 투여. 다리 방사통·협착증 통증에 효과적", type: "conservative" },
      { name: "재활 치료", description: "주사 치료 후 전문 재활 병행으로 빠른 회복. 요추 심부 근육 강화, 코어 안정화, 보행 교정", type: "conservative" },
      { name: "측만증 재활", description: "전문 스포츠 재활로 척추 측만 진행 억제 및 균형 회복. 수술 없이 관리", type: "conservative" },
    ],
    secondaryTreatments: [
      { name: "약물 치료", description: "소염진통제·근이완제 단기 사용" },
    ],
    postConservativeNote: "주사 치료는 통증 완화가 목적입니다. <strong>재발 방지와 근본 회복을 위해 전문 재활을 반드시 병행해야 합니다.</strong>",
    surgicalTreatments: [],
    recoverySteps: [
      { label: "1회 주사", detail: "급성 통증 즉시 완화" },
      { label: "2~3회 주사", detail: "통증 빈도·강도 감소" },
      { label: "4~6주 재활", detail: "코어 근육 강화 본격" },
      { label: "2~3개월", detail: "재발 방지·일상 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 척추 전문", title: "다양한 주사 모두 가능", description: "충북권에서 요추 질환에 SNRB·MBB·Caudal block·LSEB 등 다양한 척추 주사 치료를 모두 시행하는 통증 전문 병원. 증상 부위와 양상에 따라 가장 적합한 주사를 선택." },
      { icon: "ph-heartbeat", title: "주사 + 전문 재활 병행 → 빠른 회복", description: "주사에만 의존하지 않고 전문 재활과 병행해 허리 심부 근육을 강화. 주사 단독 치료보다 재발률 현저히 낮고 회복 속도 빠름." },
      { icon: "ph-person-simple-run", title: "측만증 전문 스포츠 재활", description: "수술이 필요 없는 측만증은 전문 스포츠 재활 프로그램으로 진행 억제 및 통증 관리. 청소년부터 성인까지 맞춤 재활 설계." },
    ],
    staffHighlights: [
      { name: "김민경", role: "통증 전문의" },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (50세, 청주 흥덕구)", source: "네이버 예약 후기", text: "요추 협착증으로 걷다가 다리가 저려서 100m마다 쉬어야 했습니다. Caudal block과 LSEB 단계 치료 후 코어 재활을 병행했더니 2개월 후 이제 가까운 마트도 다닙니다. 수술 없이 이렇게 좋아질 줄 몰랐습니다." },
      { initial: "L", label: "L님 (16세, 청주 서원구)", source: "네이버 예약 후기", text: "척추 측만증으로 부모님과 함께 내원했습니다. 수술이 필요한 각도가 아님을 확인하고 전문 스포츠 재활 프로그램을 시작했는데, 6개월 후 균형이 개선되고 통증도 사라졌어요. 수술 안 해도 된다는 말에 정말 안심했습니다." },
    ],
    recoveryIntro: "비수술 치료 기준 회복 과정입니다. 개인차가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "1회", badgeSubLabel: "주사", badgeStyle: "navy", label: "통증 완화", detail: "급성 통증\n감소", detailMobile: "급성 통증 감소" },
      { badge: "2~3회", badgeStyle: "sky", label: "안정화", detail: "통증 빈도\n강도 감소", detailMobile: "통증 빈도·강도 감소" },
      { badge: "4~6주", badgeStyle: "outline", label: "재활 본격", detail: "코어 근육\n강화 시작", detailMobile: "코어 근육 강화 시작" },
      { badge: "2개월", badgeStyle: "outline", label: "일상 복귀", detail: "보행·생활\n정상화", detailMobile: "보행·생활 정상화" },
      { badge: "3개월", badgeStyle: "gradient", label: "재발 방지", detail: "근력 유지\n자세 교정 정착", detailMobile: "근력 유지, 자세 교정 정착" },
    ],
    relatedConditions: [
      { slug: "neck", category: "spine", icon: "ph-device-mobile", label: "목 디스크·협착증·거북목", subLabel: "목 비수술 치료" },
      { slug: "plantar-fasciitis", category: "foot", icon: "ph-footprints", label: "족저근막염", subLabel: "발뒤꿈치 통증 치료" },
      { slug: "flatfoot", category: "foot", icon: "ph-sneaker", label: "평발", subLabel: "발 아치 교정" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/lumbar.webp",
    doctorId: "kim-min-kyung",
    faqs: [
      { question: "청주에서 허리 디스크 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. 통증 전문의가 직접 진료하며, SNRB·Caudal block·LSEB 등 다양한 주사 치료와 전문 재활을 병행합니다." },
      { question: "허리 디스크는 꼭 수술해야 하나요?", answer: "마비 증상이 없으면 대부분 비수술로 치료 가능합니다. 주사·재활 병행으로 수술 없이 회복하는 사례가 매우 많습니다." },
      { question: "측만증도 치료가 가능한가요?", answer: "가능합니다. 전문 스포츠 재활로 측만증 진행을 억제하고 통증을 관리합니다. 수술 없이 치료할 수 있는 경우가 많습니다." },
      { question: "주사 치료는 자주 맞아도 되나요?", answer: "증상과 반응에 따라 적절한 간격으로 시행합니다. 재활을 병행해 주사 횟수를 최소화하고 근본적인 회복을 목표로 합니다." },
    ],
    medicalCondition: {
      name: "허리 디스크·협착증·측만증",
      alternateName: ["Lumbar Disc Herniation", "요추 디스크 탈출증", "요추 협착증", "척추 측만증"],
      description: "요추 디스크 탈출증·협착증·측만증을 포함하는 요추 질환군으로 대부분 비수술 치료가 가능합니다.",
      anatomy: "요추(허리뼈)",
      treatments: [
        { name: "SNRB 선택적 신경근 차단술", type: "Conservative" },
        { name: "Caudal block 미추 경막외 차단술", type: "Conservative" },
        { name: "LSEB 요추 경막외 차단술", type: "Conservative" },
        { name: "재활 치료", type: "Conservative" },
      ],
    },
    datePublished: "2025-03-01",
    dateModified: "2026-04-10",
  },

  // ========== HAND-ARM ==========
  {
    slug: "tennis-golf-elbow",
    category: "hand-arm",
    categoryLabel: "손·팔",
    title: "청주 테니스·골프 엘보 치료",
    titleShort: "테니스·골프 엘보",
    metaTitle: "청주 테니스·골프 엘보 치료 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 테니스 엘보(외측 상과염)·골프 엘보(내측 상과염) 증상·원인·치료법 완전 정리. PRP·재생주사·ESWT 비수술 + 스포츠 재활 전문. 빠른 운동 복귀.",
    keywords: "청주 테니스엘보, 골프엘보 치료, 청주 팔꿈치전문, 테니스엘보 비수술, 청주 정형외과, PRP 주사 청주",
    canonicalPath: "/hand-arm/tennis-golf-elbow",
    heroTitle: "청주 테니스·골프 엘보",
    heroSubtitle: "PRP·재생주사, 스포츠 재활로 빠르게 복귀",
    heroDescription:
      "테니스 엘보(외측)와 골프 엘보(내측)는 발생 위치는 다르지만 모두 팔꿈치 힘줄 부착부 손상입니다. 정확히 어느 부위인지 감별한 후, PRP 주사·재생주사·ESWT·재활을 단계별로 적용합니다. PRP 주사까지 갖춘 곳은 드물며, 스포츠 재활 전문 프로그램으로 운동 복귀를 앞당깁니다.",
    badges: [
      { label: "PRP 치료", color: "bg-purple-50 text-purple-600", icon: "ph-drop" },
    ],
    symptoms: [
      { title: "팔꿈치 바깥쪽(외측)을 누르면 심하게 아프고 물건을 잡을 때 통증이 온다", description: "테니스 엘보 — 외측 상과 부위 압통이 특징입니다" },
      { title: "팔꿈치 안쪽(내측)이 아프고 악력이 약해졌다", description: "골프 엘보 — 내측 상과 부위 통증이 특징입니다" },
      { title: "손목을 뒤로 젖히거나 회전할 때 팔꿈치 통증이 유발된다", description: "손목 동작이 힘줄 부착부에 스트레스를 줍니다" },
      { title: "문고리를 돌리거나 병뚜껑을 열 때 팔꿈치가 아프다", description: "일상 동작에서 통증이 나타납니다" },
      { title: "테니스·골프·배드민턴 등 라켓 스포츠 후 팔꿈치 통증이 심해진다", description: "스포츠 활동이 주요 유발 요인입니다" },
      { title: "타이핑·마우스·공구 같은 반복 동작 후 팔꿈치가 아프다", description: "직업적 반복 동작도 원인이 됩니다" },
    ],
    symptomThreshold: "2개 이상 해당하면 테니스·골프 엘보를 의심할 수 있습니다.",
    definition:
      "테니스 엘보(외측 상과염)는 <strong>팔꿈치 바깥쪽 뼈 돌기에 부착된 손목 신전근 힘줄에 미세 손상이 반복되어 통증이 생기는 질환</strong>입니다. 골프 엘보(내측 상과염)는 팔꿈치 안쪽에 부착된 손목 굴곡근 힘줄에 염증이 생기는 질환으로, 발생 위치만 다를 뿐 치료 원칙은 같습니다. 청주를 비롯한 충북 지역의 스포츠 활동 인구와 반복 작업 직군에서 가장 흔한 팔꿈치 통증 원인입니다.",
    causes: [
      { icon: "ph-tennis-ball", title: "라켓 스포츠", description: "테니스·골프·배드민턴 중 반복 스윙으로 힘줄 부착부 과부하" },
      { icon: "ph-desktop", title: "반복 작업", description: "타이핑·마우스·공구 사용 등 일상 반복 동작" },
      { icon: "ph-hand-grabbing", title: "그립력 집중", description: "강한 악력 동작에서 힘줄 부착부에 스트레스 집중" },
      { icon: "ph-hourglass-high", title: "노화·힘줄 변성", description: "40~50대에서 힘줄 탄성 감소로 발생 빈도 증가" },
      { icon: "ph-trend-up", title: "급격한 강도 증가", description: "준비 운동 없이 운동 강도를 갑자기 올릴 때" },
    ],
    conservativeTreatments: [
      { name: "ESWT (체외충격파)", description: "힘줄 부착부 혈류 개선, 만성 통증 억제. 테니스·골프 엘보 1차 치료", type: "conservative" },
      { name: "염증 억제 주사", description: "국소 스테로이드로 급성 염증 신속 억제", type: "conservative" },
      { name: "재생주사", description: "힘줄 조직 재생 촉진. 만성 변성 힘줄 회복", type: "conservative" },
      { name: "콜라겐 주사", description: "손상된 힘줄 콜라겐 구조 보강", type: "conservative" },
      { name: "PRP 주사", description: "자가혈에서 추출한 성장인자로 힘줄 치유 극대화. PRP 주사까지 시행하는 곳은 드묾", type: "conservative" },
      { name: "재활 치료", description: "손목 신전근·굴곡근 이심성 운동, 그립력 재훈련. 스포츠 선수 맞춤 재활 프로그램", type: "conservative" },
      { name: "약물 치료", description: "소염진통제 단기 사용", type: "conservative" },
    ],
    treatmentNote: "스테로이드 주사는 반복 시 힘줄을 약화시킬 수 있습니다. <strong>PRP·재생주사로 힘줄을 실제로 재생하는 치료가 장기적으로 효과적입니다.</strong>",
    surgicalTreatments: [],
    recoverySteps: [
      { label: "ESWT·주사", detail: "급성 통증 억제" },
      { label: "2~4주", detail: "통증 감소·일상 동작 개선" },
      { label: "1~2개월", detail: "재활 운동·가벼운 운동 가능" },
      { label: "3~6개월", detail: "스포츠·활동 완전 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 팔꿈치 전문", title: "PRP 주사까지 갖춘 단계별 비수술", description: "충북권에서 테니스·골프 엘보에 PRP 주사를 시행하는 병원은 드묾. 염증 억제 → 재생주사 → 콜라겐 → PRP 단계별 적용으로 힘줄 완전 회복." },
      { icon: "ph-lightning", title: "외측·내측 정확히 감별 진단", description: "비슷한 증상이지만 발생 부위·손상 힘줄이 달라 감별 없이 치료하면 효과 없음. 초음파로 손상 부위를 정확히 확인 후 치료." },
      { icon: "ph-scan", title: "스포츠 재활 전문 → 빠른 운동 복귀", description: "단순 주사 처방에 그치지 않고 스포츠 선수·활동 인구에 맞춘 맞춤 재활 프로그램으로 빠른 현장 복귀 지원." },
    ],
    staffHighlights: [
      { name: "김민경", role: "손·팔 전문의" },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (45세, 청주 흥덕구)", source: "네이버 예약 후기", text: "테니스 동호회 활동 중 팔꿈치 바깥쪽이 점점 아팠어요. 다른 병원에서 스테로이드 주사를 맞아도 계속 재발했는데, 윈윈에서 초음파로 힘줄 변성을 확인하고 ESWT + PRP 주사 + 재활 3단계 치료를 받았습니다. 3개월 만에 테니스 복귀했어요." },
      { initial: "L", label: "L님 (52세, 청주 서원구)", source: "네이버 예약 후기", text: "골프 후 팔꿈치 안쪽이 1년째 아팠어요. 윈윈에서 골프 엘보 진단받고 재생주사랑 재활 치료를 병행했더니 4개월 만에 통증이 사라졌습니다. 이제 라운딩 다시 하고 있어요." },
    ],
    recoveryIntro: "비수술 치료 기준이며, 개인차가 있을 수 있습니다. 아래는 일반적인 회복 일정입니다.",
    recoveryTimeline: [
      { badge: "1회", badgeStyle: "navy", label: "통증 완화", detail: "ESWT·주사 치료\n급성 통증 억제", detailMobile: "ESWT·주사 치료, 급성 통증 억제" },
      { badge: "3회", badgeStyle: "sky", label: "힘줄 이완", detail: "통증 감소\n일상 동작 개선", detailMobile: "통증 감소, 일상 동작 개선" },
      { badge: "5회", badgeStyle: "outline", label: "운동 복귀", detail: "재활 운동 병행\n가벼운 운동 가능", detailMobile: "재활 운동 병행, 가벼운 운동 가능" },
      { badge: "3개월", badgeStyle: "outline", label: "재발 방지", detail: "이심성 운동 유지\n그립력 재훈련", detailMobile: "이심성 운동 유지, 그립력 재훈련" },
      { badge: "6개월", badgeStyle: "gradient", label: "완전 복귀", detail: "스포츠·활동\n완전 복귀", detailMobile: "스포츠·활동 완전 복귀" },
    ],
    relatedConditions: [
      { slug: "tendinitis-trigger", category: "hand-arm", icon: "ph-hand-fist", label: "손·팔 힘줄염·방아쇠수지", subLabel: "손·손목 힘줄 치료" },
      { slug: "tfcc", category: "hand-arm", icon: "ph-bone", label: "TFCC", subLabel: "손목 연골 손상 치료" },
      { slug: "rotator-cuff", category: "shoulder", icon: "ph-barbell", label: "회전근개 파열", subLabel: "어깨 힘줄 파열" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/tennis-golf-elbow.webp",
    doctorId: "gwak-gyu-wan",
    faqs: [
      { question: "청주에서 테니스 엘보 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. PRP 주사·재생주사·ESWT·스포츠 재활을 단계별로 적용합니다. PRP 주사까지 갖춘 충북권 정형외과는 드뭅니다." },
      { question: "테니스 엘보는 수술이 필요한가요?", answer: "대부분 비수술로 회복됩니다. PRP·ESWT·재활 병행으로 6개월 이내 회복하는 사례가 많습니다. 보존 치료 실패 시 수술을 고려합니다." },
      { question: "PRP 주사가 일반 주사보다 효과적인가요?", answer: "만성 힘줄염에서 PRP는 기존 스테로이드 주사보다 장기적 효과가 좋습니다. 자가 혈소판으로 힘줄 재생을 촉진합니다." },
      { question: "운동을 완전히 멈춰야 하나요?", answer: "급성기에는 부하를 줄이되 완전 휴식보다 적절한 재활 운동이 회복에 더 좋습니다. 재활 프로그램으로 빠른 복귀를 목표합니다." },
    ],
    medicalCondition: {
      name: "테니스·골프 엘보",
      alternateName: ["Tennis Elbow", "Golf Elbow", "외측 상과염", "내측 상과염"],
      description: "팔꿈치 힘줄 부착부에 반복 자극으로 통증이 생기는 질환으로 PRP·재생주사·ESWT 비수술 치료가 가능합니다.",
      anatomy: "팔꿈치 외측·내측 상과 (힘줄 부착부)",
      treatments: [
        { name: "PRP 주사", type: "Conservative" },
        { name: "ESWT 체외충격파", type: "Conservative" },
        { name: "재생주사", type: "Conservative" },
      ],
    },
    datePublished: "2025-03-01",
    dateModified: "2026-04-10",
  },
  {
    slug: "tendinitis-trigger",
    category: "hand-arm",
    categoryLabel: "손·팔",
    title: "청주 손·팔 힘줄염·방아쇠수지 치료",
    titleShort: "손·팔 힘줄염·방아쇠수지",
    metaTitle: "청주 손·팔 힘줄염·방아쇠수지 치료 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 손목·손가락 힘줄염·방아쇠수지 증상·원인·치료법 완전 정리. PRP·재생주사·ESWT 비수술 + 당일 수술로 빠른 회복.",
    keywords: "청주 방아쇠수지, 손목 힘줄염 치료, 청주 손팔전문, 드케르뱅 건염, 청주 정형외과",
    canonicalPath: "/hand-arm/tendinitis-trigger",
    heroTitle: "청주 손·팔 힘줄염·방아쇠수지",
    heroSubtitle: "주사로 쉽게 낫고, 수술도 비교적 간단",
    heroDescription:
      "손목·손가락 힘줄염과 방아쇠수지는 대부분 주사 치료로 쉽게 회복됩니다. PRP·재생주사·ESWT를 단계별로 적용하며, PRP 주사까지 갖춘 곳은 드뭅니다. 주사 치료에 반응하지 않는 방아쇠수지는 당일 수술로 완치할 수 있습니다.",
    badges: [
      { label: "PRP 치료", color: "bg-purple-50 text-purple-600", icon: "ph-drop" },
    ],
    symptoms: [
      { title: "손목 특정 부위(엄지 쪽·새끼 쪽)를 누르면 아프고 손목을 움직이면 통증이 있다", description: "손목 힘줄염의 전형적인 증상입니다" },
      { title: "손가락이 구부러진 채 펴지지 않거나 억지로 펼 때 \"딸깍\" 소리가 난다", description: "방아쇠수지의 대표 증상입니다" },
      { title: "아침에 일어나면 손가락이 굳고 뻣뻣하다", description: "활막 비대로 인한 아침 경직입니다" },
      { title: "손목이나 손가락 힘줄 부위에 열감과 부기가 동반된다", description: "염증 활동기의 증상입니다" },
      { title: "스마트폰·마우스·공구 같은 반복 사용 후 손·손목 증상이 심해진다", description: "반복 동작이 주요 악화 요인입니다" },
      { title: "임신·출산 후 또는 당뇨 병력이 있으면서 손가락 잠김 증상이 생겼다", description: "호르몬 변화·당뇨가 유발 요인입니다" },
    ],
    symptomThreshold: "2개 이상 해당하면 손·팔 힘줄염·방아쇠수지를 의심할 수 있습니다.",
    definition:
      "손·팔 힘줄염은 <strong>손목(드케르뱅 건염·손목 신전건염 등)과 손가락 굴곡건에 반복 자극이 쌓여 염증이 생기는 질환</strong>입니다. 방아쇠수지는 손가락 굴곡건 주위 활막이 비대해져 힘줄이 힘줄집을 통과할 때 걸려 손가락이 잠기거나 \"딸깍\" 소리가 나는 질환입니다. 청주를 비롯한 충북 지역의 주부·사무직·스포츠 활동 인구에서 자주 발생하며 주사 치료로 대부분 호전됩니다.",
    causes: [
      { icon: "ph-desktop", title: "반복 사용", description: "스마트폰·마우스·키보드·공구 등 손·손목 반복 사용" },
      { icon: "ph-baby", title: "임신·출산", description: "호르몬 변화로 힘줄 활막 비대 (방아쇠수지 유발)" },
      { icon: "ph-tennis-ball", title: "스포츠 과부하", description: "라켓·골프채 반복 그립으로 힘줄 손상" },
      { icon: "ph-hourglass-high", title: "노화·활막 퇴행", description: "힘줄 탄성 감소, 활막 두꺼워짐" },
      { icon: "ph-first-aid-kit", title: "기저 질환", description: "류마티스·당뇨 동반 시 힘줄염·방아쇠수지 빈도 증가" },
    ],
    conservativeTreatments: [
      { name: "염증 억제 주사", description: "힘줄 활막 염증 즉시 억제. 방아쇠수지 1~2회 주사로 호전되는 경우가 많음", type: "conservative" },
      { name: "재생주사", description: "힘줄 조직 재생 촉진", type: "conservative" },
      { name: "콜라겐 주사", description: "손상된 힘줄 구조 보강", type: "conservative" },
      { name: "PRP 주사", description: "자가혈 성장인자로 힘줄 치유 극대화. PRP 주사까지 시행하는 곳은 드묾", type: "conservative" },
      { name: "ESWT (체외충격파)", description: "힘줄 혈류 개선, 만성 힘줄염 통증 억제", type: "conservative" },
      { name: "재활 치료", description: "손·손목 힘줄 스트레칭, 내재근·파지력 재강화", type: "conservative" },
      { name: "약물 치료", description: "소염진통제 단기 사용", type: "conservative" },
      { name: "보조기", description: "급성기 손목·손가락 보호", type: "conservative" },
    ],
    treatmentNote: "스테로이드 주사는 반복 시 힘줄을 약화시킬 수 있습니다. <strong>방아쇠수지는 주사 치료로 대부분 호전되며, 3회 이상 주사에도 반응하지 않으면 수술을 고려합니다.</strong>",
    surgicalTreatments: [
      {
        name: "방아쇠수지 건초 절개술",
        tag: "당일 수술",
        description: "좁아진 힘줄집(A1 활차)을 절개해 힘줄 걸림 즉시 해소. 당일 시술. 빠르게 완치.",
        type: "surgical",
        points: ["A1 활차 절개·힘줄 해방"],
      },
    ],
    surgicalCommonPoints: [
      "부분 마취, 당일 시술 (금식 없음)",
      "간단한 절개로 흉터 최소",
      "수술 후 즉시 손가락 사용 가능",
      "2주 후 봉합사 제거",
    ],
    recoverySteps: [
      { label: "주사 치료", detail: "통증 즉시 완화" },
      { label: "1~2주", detail: "증상 호전 확인" },
      { label: "수술 당일", detail: "부분 마취 당일 수술" },
      { label: "2~4주", detail: "완전 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 손·팔 전문", title: "방아쇠수지 주사 우선 → 당일 수술 원스톱", description: "충북권에서 방아쇠수지를 주사 치료로 먼저 시도하고, 실패 시 당일 수술로 완치하는 원스톱 체계. 대부분 수술 없이 주사로 해결." },
      { icon: "ph-lightning", title: "PRP 주사까지 갖춘 비수술 단계별 치료", description: "손·팔 힘줄염에 PRP 주사를 시행하는 곳은 드묾. 염증 억제 → 재생주사 → 콜라겐 → PRP 단계별 적용으로 힘줄 완전 회복." },
      { icon: "ph-scan", title: "정확한 힘줄 감별 진단", description: "손목 엄지 쪽(드케르뱅)·새끼 쪽·손가락 굴곡건 등 힘줄 위치를 초음파로 정확히 확인 후 해당 부위 맞춤 치료." },
    ],
    staffHighlights: [
      { name: "김민경", role: "손·팔 전문의" },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (48세, 청주 흥덕구)", source: "네이버 예약 후기", text: "오른손 중지가 아침마다 구부러진 채 안 펴져서 불편했어요. 윈윈에서 방아쇠수지 진단받고 주사 치료 2회만에 증상이 완전히 사라졌습니다. 수술 없이 이렇게 빨리 나을 줄 몰랐어요." },
      { initial: "L", label: "L님 (55세, 청주 서원구)", source: "네이버 예약 후기", text: "손목 엄지 쪽(드케르뱅 건염)이 1년 넘게 아팠어요. 여러 주사 맞아도 효과 없다가 윈윈에서 PRP 주사랑 재활 치료 받으니 3개월 만에 통증이 사라졌습니다. 골프도 다시 하고 있어요." },
    ],
    recoveryIntro: "수술 기준 회복 일정입니다. 개인차가 있을 수 있습니다.",
    recoveryTimeline: [
      { badge: "당일", badgeSubLabel: "수술", badgeStyle: "navy", label: "당일 수술", detail: "부분 마취로\n진행", detailMobile: "부분 마취로 진행" },
      { badge: "1일", badgeStyle: "sky", label: "통증 감소", detail: "손가락 움직임\n시작", detailMobile: "손가락 움직임 시작" },
      { badge: "2주", badgeStyle: "outline", label: "봉합사 제거", detail: "일상 파지 활동\n시작", detailMobile: "일상 파지 활동 시작" },
      { badge: "4주", badgeStyle: "gradient", label: "완전 복귀", detail: "일상 파지 활동\n완전 가능", detailMobile: "일상 파지 활동 완전 가능" },
    ],
    relatedConditions: [
      { slug: "tennis-golf-elbow", category: "hand-arm", icon: "ph-tennis-ball", label: "테니스·골프 엘보", subLabel: "팔꿈치 힘줄 치료" },
      { slug: "tfcc", category: "hand-arm", icon: "ph-bone", label: "TFCC", subLabel: "손목 연골 손상" },
      { slug: "hand-arm", category: "fracture", icon: "ph-first-aid", label: "손·팔 골절", subLabel: "손·팔 골절 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/tendinitis-trigger.webp",
    doctorId: "gwak-gyu-wan",
    faqs: [
      { question: "방아쇠수지는 꼭 수술해야 하나요?", answer: "대부분 주사 치료로 회복됩니다. 주사 치료에 반응하지 않는 경우 당일 수술로 완치할 수 있으며, 수술 자체도 간단합니다." },
      { question: "손목 힘줄염과 방아쇠수지를 어떻게 구분하나요?", answer: "손목 힘줄염은 손목 부위 통증, 방아쇠수지는 손가락 잠김·딸깍 증상이 특징입니다. 초음파로 정확히 진단합니다." },
      { question: "PRP 주사가 일반 주사보다 효과적인가요?", answer: "만성 힘줄염에서 PRP는 재생 효과가 있습니다. 초기에는 염증 억제 주사가 빠르고, 만성에서는 PRP가 효과적입니다." },
      { question: "수술 후 언제부터 일상 생활이 가능한가요?", answer: "방아쇠수지 건초 절개술은 당일 수술 후 1~2일부터 손가락을 움직이기 시작하고, 2~4주 내 완전 복귀 가능합니다." },
    ],
    medicalCondition: {
      name: "손·팔 힘줄염·방아쇠수지",
      alternateName: ["Hand Tendinitis", "Trigger Finger", "드케르뱅 건염", "방아쇠수지"],
      description: "손목·손가락 굴곡건 힘줄염과 방아쇠수지를 포함하는 질환으로 대부분 주사 치료로 회복됩니다.",
      anatomy: "손목·손가락 굴곡건 및 활막",
      treatments: [
        { name: "방아쇠수지 건초 절개술", type: "Surgical" },
        { name: "PRP 주사", type: "Conservative" },
        { name: "염증 억제 주사", type: "Conservative" },
      ],
    },
    datePublished: "2025-03-01",
    dateModified: "2026-04-10",
  },
  {
    slug: "tfcc",
    category: "hand-arm",
    categoryLabel: "손·팔",
    title: "청주 TFCC 손상 치료",
    titleShort: "TFCC 손상",
    metaTitle: "청주 TFCC 손상 치료 — 윈윈정형외과 수술재활센터",
    metaDescription:
      "청주 정형외과 윈윈에서 TFCC(삼각섬유연골복합체) 손상 증상·원인·치료법 완전 정리. MRI 정밀 진단, PRP·재생주사·ESWT 비수술 + 스포츠 재활 전문. 빠른 운동 복귀.",
    keywords: "청주 TFCC, 삼각섬유연골 손상, 청주 손목전문, TFCC 비수술, 청주 정형외과, 손목 새끼손가락 통증",
    canonicalPath: "/hand-arm/tfcc",
    heroTitle: "청주 TFCC 손상",
    heroSubtitle: "정밀 진단, PRP·재생주사로 비수술 치료",
    heroDescription:
      "손목 새끼손가락 쪽이 아프고 손목을 돌릴 때 통증이 있다면 TFCC 손상을 의심해야 합니다. X-ray에서는 이상이 없는 경우가 많아 MRI로 정밀 확인해야 정확히 진단할 수 있습니다. PRP·재생주사·ESWT·재활을 단계별로 적용하며, PRP 주사까지 갖춘 곳은 드뭅니다.",
    badges: [
      { label: "PRP 치료", color: "bg-purple-50 text-purple-600", icon: "ph-drop" },
    ],
    symptoms: [
      { title: "손목 새끼손가락 쪽(척측)이 아프고 손목을 돌릴 때 통증이 심해진다", description: "TFCC 손상의 가장 전형적인 증상입니다" },
      { title: "손목을 비틀거나 악력을 쓸 때 손목 안쪽에서 딸깍 소리 또는 걸리는 느낌이 있다", description: "TFCC 불안정성의 징후입니다" },
      { title: "손목을 과하게 구부리거나 회전할 때 힘이 빠지는 느낌이 든다", description: "관절 안정성 감소의 증상입니다" },
      { title: "손목을 삐끗한 후 통증이 수개월 이상 지속된다", description: "TFCC 손상이 만성화된 경우입니다" },
      { title: "X-ray에서는 이상 없다는데 손목 통증이 계속된다", description: "TFCC는 X-ray에 보이지 않아 진단이 지연됩니다" },
      { title: "테니스·골프·배드민턴 후 손목 새끼손가락 쪽 통증이 심해진다", description: "스포츠 활동이 주요 악화 요인입니다" },
    ],
    symptomThreshold: "2개 이상 해당하면 TFCC 손상을 의심할 수 있습니다.",
    definition:
      "TFCC(삼각섬유연골복합체)는 <strong>손목 척골 쪽에 위치해 손목 관절을 안정시키고 충격을 흡수하는 연골·인대 복합 구조물</strong>입니다. 손목을 비틀거나 넘어질 때 손목을 짚으면 손상될 수 있으며, 초음파 검사 후 의심이 될 때 MRI로 정밀 진단해야 합니다. 청주를 비롯한 충북 지역의 스포츠 활동 인구와 손목을 많이 쓰는 직군에서 진단이 지연되어 만성화되는 경우가 많습니다.",
    causes: [
      { icon: "ph-warning-circle", title: "손목 염좌·낙상", description: "손목을 짚고 넘어질 때 TFCC 과신전 손상" },
      { icon: "ph-tennis-ball", title: "스포츠 부상", description: "라켓 스포츠·골프 등 손목 회전 반복 동작" },
      { icon: "ph-arrows-clockwise", title: "반복 과부하", description: "타이핑·공구 사용 등 손목 비틀기 반복" },
      { icon: "ph-hourglass-high", title: "퇴행성 변화", description: "나이에 따른 TFCC 연골 마모" },
      { icon: "ph-bone", title: "척골 충돌", description: "척골이 요골보다 길어 TFCC에 반복 압박 (척골 충돌 증후군)" },
    ],
    conservativeTreatments: [
      { name: "초음파·MRI 정밀 진단", description: "초음파로 먼저 확인 후 의심 시 MRI로 정밀 진단. TFCC 손상 부위·범위 파악", type: "conservative" },
      { name: "염증 억제 주사", description: "TFCC 주변 염증 즉시 억제", type: "conservative" },
      { name: "재생주사", description: "연골·인대 조직 재생 촉진", type: "conservative" },
      { name: "콜라겐 주사", description: "손상된 인대 구조 보강", type: "conservative" },
      { name: "PRP 주사", description: "자가혈 성장인자로 연골·인대 치유 극대화. PRP 주사까지 시행하는 곳은 드묾", type: "conservative" },
      { name: "ESWT (체외충격파)", description: "주변 혈류 개선, 만성 통증 억제", type: "conservative" },
      { name: "재활 치료", description: "손목 안정화 운동, 전완 회전 근력 강화. 스포츠 복귀 맞춤 재활", type: "conservative" },
      { name: "보조기 고정", description: "급성기 손목 보호 및 TFCC 치유 환경 조성", type: "conservative" },
    ],
    treatmentNote: "X-ray만으로 TFCC 손상을 확인할 수 없습니다. <strong>손목 척측 통증이 지속되면 MRI 정밀 진단이 필수입니다.</strong>",
    surgicalTreatments: [],
    recoverySteps: [
      { label: "주사·보조기", detail: "급성 통증 억제" },
      { label: "2~4주", detail: "염증 감소·가동 범위 회복" },
      { label: "1~2개월", detail: "재활 운동·전완 근력 강화" },
      { label: "3~6개월", detail: "스포츠 완전 복귀" },
    ],
    differentiationCards: [
      { icon: "ph-medal", dark: true, kicker: "충북권 손목 전문", title: "MRI로 TFCC 정확히 진단", description: "충북권에서 손목 통증의 원인으로 TFCC를 MRI·초음파로 정확히 진단하는 병원. X-ray만으로는 놓치는 경우가 많아 만성 손목 통증의 숨은 원인으로 남게 됨." },
      { icon: "ph-lightning", title: "PRP 주사까지 갖춘 비수술 단계별 치료", description: "PRP 주사를 시행하는 곳은 드묾. 재생주사·콜라겐·PRP·재활 단계별 치료로 연골·인대 회복 극대화." },
      { icon: "ph-scan", title: "스포츠 재활 전문 → 빠른 운동 복귀", description: "스포츠 선수의 TFCC 손상에 특화된 손목 안정화 재활 프로그램으로 빠른 경기 복귀 지원." },
    ],
    staffHighlights: [
      { name: "김민경", role: "손·팔 전문의" },
    ],
    patientTestimonials: [
      { initial: "P", label: "P님 (33세, 청주 흥덕구)", source: "네이버 예약 후기", text: "배드민턴 도중 손목을 삐끗한 뒤 6개월째 통증이 안 가셨어요. 다른 병원에서 X-ray 이상 없다고만 했는데, 윈윈에서 MRI 찍으니 TFCC 손상이었습니다. 재생주사 + PRP + 재활 치료 3개월로 운동 복귀했어요. 드디어 원인을 찾았습니다." },
      { initial: "L", label: "L님 (45세, 청주 서원구)", source: "네이버 예약 후기", text: "골프 후 손목 새끼손가락 쪽이 1년 넘게 아팠어요. 윈윈에서 TFCC 손상이랑 척골 충돌 증후군까지 진단받았습니다. 재생주사·ESWT 비수술 치료 4개월로 통증이 사라져서 정말 감사합니다." },
    ],
    recoveryIntro: "비수술 치료 기준이며, 개인차가 있을 수 있습니다. 아래는 일반적인 회복 일정입니다.",
    recoveryTimeline: [
      { badge: "1회", badgeStyle: "navy", label: "통증 완화", detail: "주사·보조기 적용\n급성 통증 억제", detailMobile: "주사·보조기 적용, 급성 통증 억제" },
      { badge: "3회", badgeStyle: "sky", label: "안정화", detail: "염증 감소\n손목 가동 범위 회복", detailMobile: "염증 감소, 손목 가동 범위 회복" },
      { badge: "5회", badgeStyle: "outline", label: "손목 강화", detail: "재활 운동 병행\n전완 회전 근력 강화", detailMobile: "재활 운동 병행, 전완 회전 근력 강화" },
      { badge: "3개월", badgeStyle: "outline", label: "운동 복귀", detail: "스포츠 활동\n단계적 복귀", detailMobile: "스포츠 활동, 단계적 복귀" },
      { badge: "6개월", badgeStyle: "gradient", label: "재발 방지", detail: "손목 안정화 유지\n완전 복귀", detailMobile: "손목 안정화 유지, 완전 복귀" },
    ],
    relatedConditions: [
      { slug: "tennis-golf-elbow", category: "hand-arm", icon: "ph-tennis-ball", label: "테니스·골프 엘보", subLabel: "팔꿈치 힘줄 치료" },
      { slug: "tendinitis-trigger", category: "hand-arm", icon: "ph-hand-fist", label: "손·팔 힘줄염·방아쇠수지", subLabel: "손·손목 힘줄 치료" },
      { slug: "ligament-tendinitis", category: "ankle", icon: "ph-sneaker", label: "인대 파열·힘줄염", subLabel: "발목 인대 치료" },
    ],
    heroImage: "https://storage.googleapis.com/imageswinwin/tfcc.webp",
    doctorId: "gwak-gyu-wan",
    faqs: [
      { question: "청주에서 TFCC 잘 보는 정형외과는 어디인가요?", answer: "윈윈정형외과 수술재활센터를 추천드립니다. MRI 정밀 진단 후 PRP·재생주사·ESWT·재활을 단계별로 적용합니다." },
      { question: "TFCC 손상은 수술 없이 나을 수 있나요?", answer: "부분 손상은 PRP·재생주사·보조기 치료로 비수술 회복이 가능합니다. 완전 파열·척골 충돌 증후군은 수술을 고려합니다." },
      { question: "X-ray에서 이상 없다고 했는데 TFCC 손상일 수 있나요?", answer: "TFCC는 연골·인대 구조물이라 X-ray에 보이지 않습니다. MRI로만 정확히 진단할 수 있습니다." },
      { question: "손목 통증이 수개월째 지속되는데 어떻게 해야 하나요?", answer: "장기 지속 손목 통증은 TFCC·인대 손상일 가능성이 높습니다. MRI 검사와 전문의 상담을 권장합니다." },
    ],
    medicalCondition: {
      name: "TFCC 손상",
      alternateName: ["TFCC Injury", "삼각섬유연골복합체 손상", "척골 충돌 증후군"],
      description: "손목 척골 쪽 삼각섬유연골복합체의 손상으로 손목 통증·불안정증이 생기는 질환입니다.",
      anatomy: "삼각섬유연골복합체 (손목 척골측)",
      treatments: [
        { name: "관절경적 TFCC 봉합술", type: "Surgical" },
        { name: "척골 단축 절골술", type: "Surgical" },
        { name: "PRP 주사", type: "Conservative" },
      ],
    },
    datePublished: "2025-03-01",
    dateModified: "2026-04-10",
  },
];

export function getCondition(category: string, slug: string): Condition | undefined {
  return conditions.find((c) => c.category === category && c.slug === slug);
}

export function getConditionsByCategory(category: string): Condition[] {
  return conditions.filter((c) => c.category === category);
}

export function getAllConditionPaths(): { category: string; slug: string }[] {
  return conditions.map((c) => ({ category: c.category, slug: c.slug }));
}
