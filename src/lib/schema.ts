import { doctors, getDoctorJsonLd } from "./doctors";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalOrganization", "MedicalClinic", "LocalBusiness"],
    name: "청주 윈윈정형외과",
    alternateName: ["윈윈정형외과", "윈윈정형외과 수술재활센터", "winwinosc"],
    "@id": "https://winwinosc.com/",
    url: "https://winwinosc.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://storage.googleapis.com/imageswinwin/winwin_logo.png",
    },
    image: [
      "https://storage.googleapis.com/imageswinwin/winwin-hospital.jpg",
      "https://storage.googleapis.com/imageswinwin/winwin-sterile-surgery.jpg",
      "https://storage.googleapis.com/imageswinwin/winwin-sports-rehab-center.jpg",
    ],
    slogan:
      "당일 수술·조기 보행·PRP 전 부위 — 족부·발목·무릎·어깨 원스톱",
    telephone: "+82-43-715-7591",
    faxNumber: "+82-43-715-7592",
    vatID: "375-78-00499",
    founder: {
      "@type": "Person",
      "@id": "https://winwinosc.com/about/doctors/park-eun-su",
      name: "박은수",
      jobTitle: "대표원장",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+82-43-715-7591",
        contactType: "customer service",
        areaServed: "KR",
        availableLanguage: "Korean",
      },
      {
        "@type": "ContactPoint",
        telephone: "+82-10-5785-7591",
        contactType: "reservations",
        name: "수술예약",
        areaServed: "KR",
        availableLanguage: "Korean",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "KRW",
    paymentAccepted: "현금, 신용카드, 체크카드",
    areaServed: [
      { "@type": "City", name: "청주시" },
      { "@type": "AdministrativeArea", name: "충청북도" },
    ],
    medicalSpecialty: [
      "OrthopedicSurgery",
      "SportsMedicine",
      "PhysicalTherapy",
      "PodiatricMedicine",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "흥덕구 강서로 126 하이마트 4~5층",
      addressLocality: "청주시",
      addressRegion: "충청북도",
      postalCode: "28378",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.6249655,
      longitude: 127.4304061,
    },
    hasMap: [
      "https://map.naver.com/p/entry/place/1475298812",
      "https://www.google.com/maps/place/%EC%9C%88%EC%9C%88%EC%A0%95%ED%98%95%EC%99%B8%EA%B3%BC/data=!3m1!4b1!4m6!3m5!1s0x3565297ff85ce76b:0xe7af47574521412a!8m2!3d36.6249655!4d127.4304061!16s%2Fg%2F11vk2jb2kw?entry=ttu",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "14:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "13:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "정형외과 수술·재활 서비스",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "관절센터",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "무릎 관절 치료 (ACL 재건, 골관절염, 반월판, 베이커낭종)" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "어깨 관절 치료 (회전근개 파열, 오십견, 충돌증후군, 석회성 건염)" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "팔꿈치 치료 (테니스 엘보, 골프 엘보, 골절)" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "손·손목 치료 (수근관 증후군, 방아쇠 손가락, 골절)" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "하지 근육 손상 치료 (햄스트링, 종아리)" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "척추센터",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "경추 치료 (거북목, 경추 디스크, 방사통, 근막통증증후군)" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "요추 치료 (척추관 협착증, 허리디스크, 요통, 척추측만증)" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "족부·발목센터",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "무지외반증 수술 (MICA·MITA·DCMO 교정술)" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "족저근막염·지방층증후군 치료" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "발목 인대 파열·아킬레스건 손상 수술" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "박리성 골연골염 관절경 BMAC 수술" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "평발·부주상골·지간신경종·통풍 치료" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "발·발가락 변형 교정 (단지증, 망치족, 내성발톱)" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "스포츠 재활센터",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "프로 선수 스포츠 수술·재활 (K리그·KLPGA·핸드볼 H리그 주치의)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "스포츠 수술 후 단계별 재활 프로그램" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "부상 예방 메디컬 테스트·운동처방" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "PRP·재생 주사 (전 부위)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "ESWT 체외충격파 치료" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "수술·비수술센터",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "당일 비입원 수술 (부분 마취·금식 없음)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "비수술 치료 (ESWT·PRP·주사치료·재활)" } },
          ],
        },
      ],
    },
    sameAs: [
      "https://www.winwinosc.com/",
      "https://pf.kakao.com/_wxeRxfG",
      "https://map.naver.com/p/entry/place/1475298812",
      "https://www.google.com/maps/place/%EC%9C%88%EC%9C%88%EC%A0%95%ED%98%95%EC%99%B8%EA%B3%BC/data=!3m1!4b1!4m6!3m5!1s0x3565297ff85ce76b:0xe7af47574521412a!8m2!3d36.6249655!4d127.4304061!16s%2Fg%2F11vk2jb2kw?entry=ttu",
      "https://ko.wikipedia.org/wiki/%EC%9C%88%EC%9C%88%EC%A0%95%ED%98%95%EC%99%B8%EA%B3%BC",
      "https://namu.wiki/w/%EC%9C%88%EC%9C%88%EC%A0%95%ED%98%95%EC%99%B8%EA%B3%BC",
      "https://www.youtube.com/channel/UChHUovIrucDuo249ygT5y2A",
      "https://blog.naver.com/stock5522",
      "https://www.instagram.com/winwin_osc",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1920",
      bestRating: "5",
      worstRating: "1",
    },
    description:
      "청주 윈윈정형외과는 스포츠 재활 특화 정형외과입니다. K리그 충북청주 FC·KLPGA 골프 투어·핸드볼 H리그 공식 주치의 병원으로, 프로 선수부터 생활 스포츠인까지 수술·재활 원스톱 서비스를 제공합니다. 족부·발목·무릎·어깨·척추 전문의 3인이 직접 집도하며, 당일 비입원 수술, PRP 전 부위, 관절경 BMAC 수술이 가능합니다.",
    knowsAbout: [
      "Sports Medicine",
      "Sports Rehabilitation",
      "Orthopedic Surgery",
      "Foot and Ankle Surgery",
      "Knee Arthroscopy",
      "Shoulder Arthroscopy",
      "PRP Therapy",
      "BMAC Surgery",
      "Minimally Invasive Surgery",
      "Athletic Injury Treatment",
    ],
    employee: doctors.map((doc) => getDoctorJsonLd(doc)),
  };
}

export function getFounderPersonJsonLd() {
  const founder = doctors.find((d) => d.id === "park-eun-su");
  if (!founder) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://winwinosc.com/about/doctors/park-eun-su#person",
    name: founder.name,
    alternateName: founder.nameEn,
    jobTitle: "대표원장",
    image: founder.image,
    description: founder.description,
    url: "https://winwinosc.com/about/doctors/park-eun-su",
    sameAs: founder.sameAs,
    knowsAbout: [
      "Foot and Ankle Surgery",
      "Hallux Valgus MICA/MITA/DCMO",
      "Achilles Tendon Rupture",
      "Ankle Arthroscopy",
      "BMAC Regenerative Surgery",
      "Sports Medicine",
    ],
    alumniOf: founder.education?.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu,
    })),
    worksFor: {
      "@type": "MedicalOrganization",
      "@id": "https://winwinosc.com/",
      name: "윈윈정형외과 수술재활센터",
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://winwinosc.com/#website",
    url: "https://winwinosc.com/",
    name: "윈윈정형외과 수술재활센터",
    publisher: {
      "@type": "MedicalOrganization",
      "@id": "https://winwinosc.com/",
    },
    inLanguage: "ko-KR",
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface ArticleJsonLdProps {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  authorDoctorId: string;
  section: string;
}

export function getArticleJsonLd(props: ArticleJsonLdProps) {
  const doctor = doctors.find((d) => d.id === props.authorDoctorId);
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": props.url,
    url: props.url,
    headline: props.headline,
    description: props.description,
    image: props.image,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
    inLanguage: "ko-KR",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://winwinosc.com/#website",
    },
    publisher: {
      "@type": "MedicalOrganization",
      "@id": "https://winwinosc.com/",
      name: "윈윈정형외과 수술재활센터",
    },
    author: doctor
      ? {
          "@type": "Physician",
          "@id": `https://winwinosc.com/about/doctors/${doctor.id}`,
          name: doctor.name,
          jobTitle: `${doctor.specialty} ${doctor.title}`,
          image: doctor.image,
          sameAs: doctor.sameAs,
          worksFor: {
            "@type": "MedicalOrganization",
            "@id": "https://winwinosc.com/",
          },
        }
      : undefined,
    mainEntityOfPage: props.url,
    articleSection: props.section,
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".geo-speakable"],
    },
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function getFaqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getMedicalConditionJsonLd(props: {
  name: string;
  alternateName: string[];
  description: string;
  anatomy: string;
  treatments: { name: string; type: "Surgical" | "Conservative" }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: props.name,
    alternateName: props.alternateName,
    description: props.description,
    associatedAnatomy: {
      "@type": "AnatomicalStructure",
      name: props.anatomy,
    },
    possibleTreatment: props.treatments.map((t) => ({
      "@type": "MedicalProcedure",
      name: t.name,
      procedureType: t.type,
    })),
  };
}

/**
 * 서버에서 직접 입력한 전체 JSON-LD(jsonLdOverride)를 렌더링용 배열로 정규화.
 * 값이 있으면 자동 생성 JSON-LD를 완전히 대체하기 위한 용도. 단일 객체도 배열로.
 */
export function normalizeJsonLdOverride(
  value: unknown,
): Record<string, unknown>[] | null {
  const isObj = (v: unknown): v is Record<string, unknown> =>
    !!v && typeof v === "object" && !Array.isArray(v);
  if (!value) return null;
  if (Array.isArray(value)) {
    const blocks = value.filter(isObj);
    return blocks.length ? blocks : null;
  }
  return isObj(value) ? [value] : null;
}

/**
 * override JSON-LD에서 작성자(author)를 추출. 최상위 블록과 @graph 노드를 훑어
 * 첫 번째 author(Person)의 name/jobTitle을 반환. 없으면 null.
 */
export function extractAuthorFromJsonLd(
  value: unknown,
): { name: string; jobTitle?: string } | null {
  const isObj = (v: unknown): v is Record<string, unknown> =>
    !!v && typeof v === "object" && !Array.isArray(v);
  const blocks = normalizeJsonLdOverride(value);
  if (!blocks) return null;

  const nodes: Record<string, unknown>[] = [];
  for (const block of blocks) {
    nodes.push(block);
    const graph = block["@graph"];
    if (Array.isArray(graph)) {
      for (const g of graph) if (isObj(g)) nodes.push(g);
    }
  }

  for (const node of nodes) {
    const author = node.author;
    if (!author) continue;
    const first = Array.isArray(author) ? author[0] : author;
    if (isObj(first)) {
      const name = first.name;
      if (typeof name === "string" && name.trim()) {
        const jobTitle = first.jobTitle;
        return {
          name: name.trim(),
          jobTitle:
            typeof jobTitle === "string" && jobTitle.trim()
              ? jobTitle.trim()
              : undefined,
        };
      }
    } else if (typeof first === "string" && first.trim()) {
      return { name: first.trim() };
    }
  }
  return null;
}
