export interface Doctor {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  specialty: string;
  image: string;
  credentials: string[];
  sameAs: string[];
  medicalSpecialty: string[];
  description: string;
  education?: string[];
  career?: string[];
  publications?: { title: string; url: string }[];
  activities?: string[];
}

export const doctors: Doctor[] = [
  {
    id: "park-eun-su",
    name: "박은수",
    nameEn: "Park Eun-Su",
    title: "원장",
    specialty: "족부·발목 전문의",
    image: "https://storage.googleapis.com/imageswinwin/park-eun-su-doctor.jpg",
    credentials: [
      "무지외반증·발목 인대·연골 전문",
      "아킬레스건 파열 당일 수술",
      "관절경 BMAC 수술 가능",
      "MICA·MITA 최소침습 교정술",
      "프로축구 K리그 충북청주 FC 주치의",
      "대한스포츠의학회 스포츠 인증 전문의",
    ],
    sameAs: [
      "https://map.naver.com/p/entry/place/1475298812",
      "https://naver.me/GALlHZFl",
      "http://pf.kakao.com/_wxeRxfG",
      "https://www.koa.or.kr/",
      "https://www.aofas.org",
      "https://www.sportsmed.or.kr/",
      "https://www.aofoundation.org/",
      "https://www.woundcare.or.kr/",
    ],
    medicalSpecialty: ["OrthopedicSurgery", "PodiatricMedicine", "SportsMedicine"],
    description:
      "윈윈정형외과 족부·발목 전문의. 서울아산병원 정형외과 족부 족관절 임상강사, 이화여대병원 외래교수 출신. 무지외반증 MICA·MITA·DCMO 교정술, 아킬레스건 파열 당일 수술, 관절경 BMAC 수술을 전문으로 시행합니다. 프로축구 K리그 충북청주 FC 주치의.",
    education: [
      "이대목동병원 정형외과 전공의",
    ],
    career: [
      "서울아산병원 외래교수",
      "서울아산병원 정형외과 족부 족관절 임상강사",
      "이화여자대학교병원 외래교수",
      "이대목동병원 정형외과 전공의",
      "대한스포츠의학회 '스포츠 인증 전문의'",
      "전) 뿌리병원 5원장(족부, 스포츠)",
      "현) 프로축구 K리그 충북청주 FC 주치의",
    ],
    activities: [
      "23-25 핸드볼 H리그 주치의",
      "22-25 KLPGA 골프 투어 주치의",
      "2018년 평창 동계올림픽 Sports Medicine Summit Congress 참여",
      "2014년 인천 아시안게임 주치의",
      "국제축구연맹 FIFA Medical Diploma 수료",
      "서울아산병원 스포츠건강의학센터 수료",
      "대한인공관절센터 수료",
      "국제골절치료연구(AO Trauma) Basic & Advanced Course 수료",
      "Severance Arthroscopy 수료 (ISAKOS & AAC 승인)",
      "Fresh Cadaver Knee Arthroscopy Approved Course",
      "대한정형초음파학회 Advanced Course 수료",
      "근막통증주사(TPI) 자격증 (대한정형통증의학회)",
      "프롤로(Prolotherapy) 치료 및 도수치료(Full Spine Technique) 자격증",
      "노르웨이 근골격계 도수치료(Neurac) 과정 수료",
      "203특공여단 의무실장",
      "대한정형외과학회 정회원",
      "대한족부족관절학회 정회원",
      "미국족부족관절학회(AOFAS) 정회원",
      "대한스포츠의학회 평생회원",
      "대한류마티스학회 정회원",
      "대한정형초음파학회 평생회원",
      "대한창상학회 정회원",
      "국제인공관절학회(ISTA) 정회원",
      "국제골절외상학회(AOtrauma) 정회원",
    ],
  },
  {
    id: "gwak-gyu-wan",
    name: "곽규완",
    nameEn: "Gwak Gyu-Wan",
    title: "원장",
    specialty: "무릎·어깨 전문의",
    image: "https://storage.googleapis.com/imageswinwin/gwak-gyu-wan-doctor.jpg",
    credentials: [
      "관절염·인대 손상·회전근개 전문",
      "스포츠 수술·재활 전문의",
      "수술 후 재활 원스톱 관리",
      "선수·생활 스포츠인 복귀 최우선",
    ],
    sameAs: [
      "https://map.naver.com/p/entry/place/1475298812",
      "https://naver.me/GALlHZFl",
      "http://pf.kakao.com/_wxeRxfG",
      "https://www.footmed.or.kr/",
      "https://www.kaend.or.kr/",
      "https://www.sono.or.kr/",
      "https://www.sportsmed.or.kr/",
      "https://www.karm.or.kr/",
    ],
    medicalSpecialty: ["OrthopedicSurgery", "SportsMedicine"],
    description:
      "윈윈정형외과 무릎·어깨 전문의. 관절염, 십자인대 재건, 회전근개 봉합 수술 및 스포츠 재활을 전문으로 합니다. 프로 선수부터 생활 스포츠인까지 맞춤 치료.",
  },
  {
    id: "kim-min-kyung",
    name: "김민경",
    nameEn: "Kim Min-Kyung",
    title: "원장",
    specialty: "척추·통증 전문의",
    image: "https://storage.googleapis.com/imageswinwin/kim-min-kyung-doctor.jpg",
    credentials: [
      "신경인성 추적 통증 전문",
      "경추·요추 비수술 치료",
      "SNRB·MBB·LSEB 주사치료",
      "재활치료 협진 빠른 회복",
    ],
    sameAs: [
      "https://map.naver.com/p/entry/place/1475298812",
      "https://naver.me/GALlHZFl",
      "http://pf.kakao.com/_wxeRxfG",
      "https://pubmed.ncbi.nlm.nih.gov/26444030/",
      "https://pubmed.ncbi.nlm.nih.gov/26577035/",
    ],
    medicalSpecialty: ["Anesthesiology", "PainMedicine"],
    description:
      "윈윈정형외과 척추·통증 전문의. 연세대학교 의학전문대학원 졸업, 신촌세브란스병원 마취통증의학과 전문의. 경추·요추 비수술 치료, SNRB·MBB·LSEB 주사치료를 전문으로 시행합니다.",
    education: [
      "연세대학교 생명공학과 졸업 (학사)",
      "연세대학교 의학전문대학원 졸업 (의무석사)",
    ],
    career: [
      "연세대학교 신촌세브란스병원 인턴",
      "연세대학교 신촌세브란스병원 마취통증의학과 레지던트",
      "연세대학교 강남세브란스병원 마취통증의학과 전임의",
    ],
    publications: [
      {
        title: "Comparison of the effects of epinephrine and dexmedetomidine on the epidural space",
        url: "https://pubmed.ncbi.nlm.nih.gov/26444030/",
      },
      {
        title: "Effect of magnesium sulfate on epidural analgesia",
        url: "https://pubmed.ncbi.nlm.nih.gov/26577035/",
      },
    ],
    activities: [
      "연세대학교 생명공학 학사",
      "연세대학교 의학전문대학원 의무석사",
    ],
  },
];

export function getDoctorById(id: string): Doctor | undefined {
  return doctors.find((d) => d.id === id);
}

export function getDoctorJsonLd(doctor: Doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `https://winwinosc.com/about/doctors/${doctor.id}`,
    url: `https://winwinosc.com/about/doctors/${doctor.id}`,
    name: doctor.name,
    alternateName: doctor.nameEn,
    jobTitle: `${doctor.specialty} ${doctor.title}`,
    image: doctor.image,
    description: doctor.description,
    medicalSpecialty: doctor.medicalSpecialty,
    worksFor: {
      "@type": "MedicalOrganization",
      "@id": "https://winwinosc.com/",
      name: "윈윈정형외과 수술재활센터",
    },
    sameAs: doctor.sameAs,
    ...(doctor.education && {
      alumniOf: doctor.education.map((edu) => ({
        "@type": "EducationalOrganization",
        name: edu,
      })),
    }),
    ...(doctor.publications && {
      knowsAbout: doctor.publications.map((pub) => ({
        "@type": "ScholarlyArticle",
        name: pub.title,
        url: pub.url,
      })),
    }),
    address: {
      "@type": "PostalAddress",
      streetAddress: "충북 청주시 흥덕구 강서로 126 (강서동)",
      addressLocality: "청주시",
      addressRegion: "충청북도",
      postalCode: "28378",
      addressCountry: "KR",
    },
  };
}
