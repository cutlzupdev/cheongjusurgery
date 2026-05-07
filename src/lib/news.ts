export interface NewsArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalPath: string;
  authorDoctorId: string;
  datePublished: string;
  dateModified: string;
  category: string;
  excerpt: string;
  content: string[];
  image?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "mica-minimally-invasive-surgery-2025",
    title: "MICA 최소 침습 수술이란? 무지외반증 치료의 새로운 기준",
    metaTitle: "MICA 최소 침습 수술이란? — 윈윈정형외과",
    metaDescription:
      "MICA(Minimally Invasive Chevron Akin) 수술은 무지외반증 교정의 최신 최소 침습 기법입니다. 1~2mm 절개로 당일 보행이 가능하며 흉터가 거의 남지 않습니다. 윈윈정형외과 박은수 원장이 직접 시행합니다.",
    keywords: "MICA 수술, 무지외반증 최소 침습, 무지외반증 당일 수술, 청주 MICA",
    canonicalPath: "/news/mica-minimally-invasive-surgery-2025",
    authorDoctorId: "park-eun-su",
    datePublished: "2025-03-10",
    dateModified: "2026-04-01",
    category: "족부 수술",
    excerpt:
      "MICA(Minimally Invasive Chevron Akin) 수술은 무지외반증 교정의 최신 최소 침습 기법입니다.",
    content: [
      "MICA(Minimally Invasive Chevron Akin) 수술은 무지외반증을 교정하는 최신 최소 침습 수술 기법입니다. 기존 절개 수술과 달리 1~2mm의 작은 구멍을 통해 뼈를 교정하기 때문에 흉터가 거의 남지 않으며, 수술 당일부터 보호 신발을 신고 보행이 가능합니다.",
      "전통적인 무지외반증 수술은 3~5cm 절개가 필요하고, 수술 후 통깁스와 목발 사용이 불가피했습니다. MICA 수술은 특수 기구를 사용하여 피부 절개를 최소화하고, C-arm(실시간 X-ray) 영상 유도 하에 정밀하게 뼈를 교정합니다.",
      "윈윈정형외과 박은수 원장은 족부·발목 전문의로서 MICA·MITA·DCMO 등 다양한 무지외반증 교정술을 시행하고 있습니다. 환자의 변형 각도, 뼈 구조, 생활 패턴을 종합적으로 분석하여 가장 적합한 수술법을 결정합니다.",
      "MICA 수술의 장점은 다음과 같습니다. 첫째, 금식 없이 부분 마취로 수술이 가능합니다. 둘째, 수술 당일 보행이 가능하며 입원이 필요 없습니다. 셋째, 1~2mm 절개로 미용적 결과가 우수합니다. 넷째, 기존 수술 대비 통증이 적고 회복이 빠릅니다.",
      "다만, 모든 무지외반증에 MICA가 적합한 것은 아닙니다. 중증 변형(HVA 40° 이상)이나 관절염이 동반된 경우에는 DCMO 절골술이나 관절 유합술이 더 적합할 수 있습니다. 족부 전문의의 정확한 진단 후 수술법을 결정하는 것이 중요합니다.",
    ],
    image: "https://storage.googleapis.com/imageswinwin/winwin-minimally-invasive-foot-surgery.jpg",
  },
  {
    slug: "prp-injection-guide-2025",
    title: "PRP 주사란? 효과·비용·부위별 가이드 — 2025년 최신",
    metaTitle: "PRP 주사 효과·비용·부위별 가이드 — 윈윈정형외과",
    metaDescription:
      "PRP(자가혈 혈소판 농축 혈장) 주사의 효과, 적용 부위, 비용, 치료 과정을 정리합니다. 윈윈정형외과는 전 부위 PRP 주사를 직접 시행합니다.",
    keywords: "PRP 주사, PRP 효과, PRP 비용, 자가혈 주사, 청주 PRP",
    canonicalPath: "/news/prp-injection-guide-2025",
    authorDoctorId: "gwak-gyu-wan",
    datePublished: "2025-04-01",
    dateModified: "2026-04-01",
    category: "재생 치료",
    excerpt:
      "PRP(자가혈 혈소판 농축 혈장) 주사는 환자 자신의 혈액에서 성장인자를 농축하여 손상 조직의 재생을 촉진하는 치료법입니다.",
    content: [
      "PRP(Platelet-Rich Plasma, 자가혈 혈소판 농축 혈장) 주사는 환자 자신의 혈액에서 혈소판과 성장인자를 농축하여 손상된 힘줄, 연골, 인대의 자연 재생을 촉진하는 최신 재생 치료법입니다.",
      "PRP 주사의 원리는 간단합니다. 소량의 혈액을 채취한 후 원심분리기로 혈소판을 농축합니다. 이 농축 혈장에는 일반 혈액의 3~5배 이상의 성장인자가 포함되어 있어 손상 조직의 치유를 가속합니다.",
      "PRP 주사는 무릎 관절염, 회전근개 파열(부분 파열), 아킬레스건염, 테니스·골프 엘보, 족저근막염 등 다양한 근골격계 질환에 적용됩니다. 윈윈정형외과는 전 부위 PRP 주사를 직접 시행하는 몇 안 되는 정형외과입니다.",
      "치료 과정은 약 30분 소요됩니다. 혈액 채취 → 원심분리(15분) → 초음파 유도 하 정확한 병변 부위에 주사합니다. 시술 후 바로 귀가 가능하며, 일상 활동에 제한이 없습니다.",
      "윈윈정형외과 곽규완 원장은 스포츠 수술·재활 전문의로서 PRP 주사 치료를 직접 시행합니다. 초음파를 통해 손상 부위를 정확히 확인하고, 최적의 위치에 PRP를 주입하여 치료 효과를 극대화합니다.",
    ],
    image: "https://storage.googleapis.com/imageswinwin/winwin-sports-joint-rehab.jpg",
  },
  {
    slug: "sports-rehabilitation-process",
    title: "스포츠 재활 치료 과정 — 수술 후 복귀까지의 여정",
    metaTitle: "스포츠 재활 치료 과정 — 윈윈정형외과",
    metaDescription:
      "스포츠 부상 후 재활 치료 과정을 단계별로 안내합니다. 수술 후 재활부터 스포츠 복귀까지, 윈윈정형외과 스포츠 재활 전문팀이 함께합니다.",
    keywords: "스포츠 재활, 수술 후 재활, 재활치료 과정, 청주 스포츠 재활",
    canonicalPath: "/news/sports-rehabilitation-process",
    authorDoctorId: "gwak-gyu-wan",
    datePublished: "2025-05-15",
    dateModified: "2026-04-01",
    category: "스포츠 재활",
    excerpt:
      "스포츠 부상 후 복귀까지의 재활 과정을 5단계로 안내합니다.",
    content: [
      "스포츠 부상 후 재활은 단순히 '쉬는 것'이 아닙니다. 체계적인 재활 프로그램을 통해 부상 이전의 기능을 회복하고, 재발을 예방하며, 더 나은 컨디션으로 복귀하는 것이 목표입니다.",
      "1단계: 급성기 관리 (0~2주). 부종과 통증을 관리하고, 관절 운동 범위를 유지합니다. 냉찜질, 압박, 전기치료 등을 시행합니다.",
      "2단계: 기초 재활 (2~6주). 점진적으로 관절 운동 범위를 회복하고, 기초 근력 훈련을 시작합니다. 수중 운동, 자전거 등 저충격 운동을 병행합니다.",
      "3단계: 기능적 재활 (6~12주). 체중 부하 운동, 밸런스 훈련, 고유감각 훈련을 진행합니다. 실제 스포츠 동작에 필요한 기초 움직임을 훈련합니다.",
      "4단계: 스포츠 특화 훈련 (3~6개월). 종목별 특화 동작 훈련, 민첩성·순발력 회복, 실전 시뮬레이션을 진행합니다.",
      "5단계: 복귀 및 예방 (6개월~). 경기 복귀 후 모니터링, 재발 예방 프로그램, 체력 유지 훈련을 지속합니다.",
      "윈윈정형외과 수술재활센터는 수술 전문의와 재활 전문팀이 긴밀히 협진하여, 수술부터 복귀까지 원스톱으로 관리합니다. 프로 선수부터 생활 스포츠인까지 맞춤 재활 프로그램을 제공합니다.",
    ],
    image: "https://storage.googleapis.com/imageswinwin/winwin-sports-rehab-performance.jpg",
  },
];

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}

export function getAllNewsSlugs(): string[] {
  return newsArticles.map((a) => a.slug);
}
