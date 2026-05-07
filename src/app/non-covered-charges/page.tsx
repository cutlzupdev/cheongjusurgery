import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "비급여 항목 안내 — 윈윈정형외과 수술재활센터" },
  description:
    "윈윈정형외과 수술재활센터 비급여 진료비용 항목 안내. 상급병실료, 초음파 검사, 주사치료, 도수치료, 재활치료 등 비급여 항목과 비용을 확인하세요.",
  robots: { index: true, follow: true },
};

interface ChargeRow {
  no: number;
  code: string;
  name: string;
  price: string;
  minPrice?: string;
  maxPrice?: string;
  note?: string;
}

interface ChargeSection {
  category: string;
  rows: ChargeRow[];
}

const charges: ChargeSection[] = [
  {
    category: "상급병실료 차액",
    rows: [
      { no: 1, code: "V601", name: "VIP실(1인실)", price: "220,000", note: "1일 기준" },
      { no: 2, code: "V601", name: "2인실", price: "120,000", note: "1일 기준" },
    ],
  },
  {
    category: "식대",
    rows: [
      { no: 3, code: "", name: "환자식(1식)", price: "6,000" },
    ],
  },
  {
    category: "약제 및 치료재료",
    rows: [
      { no: 4, code: "INJECTION", name: "카모스텔침", price: "80,000" },
      { no: 5, code: "", name: "토네이브키트", price: "80,000" },
      { no: 6, code: "3PERIPHERA", name: "디카르발주사", price: "90,000" },
      { no: 7, code: "DOCOPAIN", name: "도코파인", price: "50,000" },
      { no: 8, code: "SILVER", name: "파피코스프레이", price: "60,000" },
      { no: 9, code: "", name: "석회흡인술(PRP)", price: "80,000" },
    ],
  },
  {
    category: "검사료",
    rows: [
      { no: 10, code: "RTSADR61", name: "아킬레스건 3D 초음파 검사", price: "60,000" },
      { no: 11, code: "", name: "근전도 검사(EMG/NCV)", price: "350,000" },
      { no: 12, code: "KT991211", name: "체지방 분석 검사", price: "70,000" },
      { no: 13, code: "", name: "근적외선분광분석(NIRS)", price: "110,000" },
      { no: 14, code: "B4490703", name: "히알루론산 관절 주사(20mL)", price: "70,000" },
      { no: 15, code: "BT90012", name: "히알루론산 관절 주사(관절경용)", price: "70,000" },
    ],
  },
  {
    category: "초음파 검사(Sono)",
    rows: [
      { no: 16, code: "E2277", name: "엘보 척골신경 초음파", price: "80,000" },
      { no: 17, code: "LC316", name: "DVT(심부정맥혈전) 검사", price: "80,000", minPrice: "80,000", maxPrice: "100,000" },
      { no: 18, code: "EB65", name: "Shoulder sono (어깨 초음파)", price: "100,000", minPrice: "100,000", maxPrice: "160,000", note: "양측 시 최대" },
      { no: 19, code: "EB63", name: "Elbow sono (팔꿈치 초음파)", price: "80,000", minPrice: "80,000", maxPrice: "100,000" },
      { no: 20, code: "EB47", name: "Wrist sono (손목 초음파)", price: "80,000", minPrice: "80,000", maxPrice: "100,000" },
      { no: 21, code: "EB45", name: "Hand/Finger sono (손·손가락 초음파)", price: "80,000", minPrice: "80,000", maxPrice: "100,000" },
      { no: 22, code: "EB64", name: "Knee sono (무릎 초음파)", price: "80,000", minPrice: "80,000", maxPrice: "160,000", note: "양측 시 최대" },
      { no: 23, code: "EB49", name: "Ankle sono (발목 초음파)", price: "80,000", minPrice: "80,000", maxPrice: "100,000" },
      { no: 24, code: "EB22", name: "Rib sono (늑골 초음파)", price: "70,000" },
      { no: 25, code: "EB41", name: "Guide Sono (초음파 유도)", price: "40,000" },
      { no: 26, code: "EBV61", name: "근골격 Cube Sono", price: "100,000" },
    ],
  },
  {
    category: "처치 및 수술료",
    rows: [
      { no: 27, code: "EB964", name: "프롤로주사(Shoulder)", price: "100,000" },
      { no: 28, code: "E2985", name: "어깨 유착 솔루션 주사(Hydrodilatation)", price: "60,000" },
    ],
  },
  {
    category: "도수·재활치료",
    rows: [
      { no: 29, code: "M5327", name: "도수치료 (30분/1회)", price: "100,000" },
      { no: 30, code: "M5202", name: "도수치료 (60분/1회)", price: "150,000" },
      { no: 31, code: "M5097", name: "운동재활치료 (1회)", price: "100,000" },
    ],
  },
  {
    category: "기타",
    rows: [
      { no: 32, code: "MD302", name: "비타민 수액 주사", price: "30,000" },
      { no: 33, code: "BM30209F", name: "바이오세라믹 Sq (Surg-Cure)", price: "70,000" },
      { no: 34, code: "BC12370U", name: "수갈관절 고분자 보조기(연구과)", price: "7,000" },
      { no: 35, code: "", name: "Fracture Walking Brace (골절 보행 보조기)", price: "70,000" },
      { no: 36, code: "32060", name: "Arm Sling (팔걸이)", price: "10,000" },
      { no: 37, code: "12091", name: "Cast Shoes (캐스트 슈즈)", price: "7,000" },
      { no: 38, code: "", name: "기타 보조기", price: "40,000" },
      { no: 39, code: "BK71201A", name: "3M Coban (탄력붕대)", price: "8,000" },
      { no: 40, code: "", name: "Gelosting Florist Sterile Fluid", price: "5,000" },
    ],
  },
];

export default function NonCoveredChargesPage() {
  return (
    <article className="pt-28 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-win-text-gray mb-6">
          <Link href="/" className="hover:text-win-navy">홈</Link>
          <span>/</span>
          <span className="text-win-navy font-semibold">비급여 항목 안내</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-black text-win-text-dark mb-4">
          윈윈정형외과 비급여 항목
        </h1>
        <p className="text-win-text-gray font-medium mb-8">
          아래는 본원에서 시행하는 비급여 진료 항목 및 비용 안내입니다.
          비용은 환자 상태 및 치료 내용에 따라 달라질 수 있으며, 자세한 내용은 전화 상담(043-715-7591)을 통해 확인하시기 바랍니다.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-win-navy text-white">
                <th className="px-3 py-3 text-left font-bold border border-win-navy-dark w-12">No</th>
                <th className="px-3 py-3 text-left font-bold border border-win-navy-dark">코드</th>
                <th className="px-3 py-3 text-left font-bold border border-win-navy-dark">명칭</th>
                <th className="px-3 py-3 text-right font-bold border border-win-navy-dark">비급여금액(원)</th>
                <th className="px-3 py-3 text-right font-bold border border-win-navy-dark">최저비용</th>
                <th className="px-3 py-3 text-right font-bold border border-win-navy-dark">최대비용</th>
                <th className="px-3 py-3 text-left font-bold border border-win-navy-dark">특이사항</th>
              </tr>
            </thead>
            <tbody>
              {charges.map((section) => (
                <>
                  <tr key={section.category}>
                    <td
                      colSpan={7}
                      className="px-3 py-3 bg-blue-50 font-black text-win-navy border border-gray-200 text-base"
                    >
                      {section.category}
                    </td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr key={row.no} className="hover:bg-gray-50 even:bg-gray-50/50">
                      <td className="px-3 py-2.5 border border-gray-200 text-center text-gray-500">
                        {row.no}
                      </td>
                      <td className="px-3 py-2.5 border border-gray-200 text-gray-500 font-mono text-xs">
                        {row.code}
                      </td>
                      <td className="px-3 py-2.5 border border-gray-200 font-semibold text-win-text-dark">
                        {row.name}
                      </td>
                      <td className="px-3 py-2.5 border border-gray-200 text-right font-bold text-win-navy">
                        {row.price}
                      </td>
                      <td className="px-3 py-2.5 border border-gray-200 text-right text-gray-600">
                        {row.minPrice || "-"}
                      </td>
                      <td className="px-3 py-2.5 border border-gray-200 text-right text-gray-600">
                        {row.maxPrice || "-"}
                      </td>
                      <td className="px-3 py-2.5 border border-gray-200 text-gray-500 text-xs">
                        {row.note || ""}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-win-bg rounded-2xl border border-blue-100">
          <h3 className="font-black text-win-text-dark mb-3">안내사항</h3>
          <ul className="space-y-2 text-sm text-gray-600 font-medium">
            <li className="flex items-start gap-2">
              <i className="ph-bold ph-info text-win-sky mt-0.5 shrink-0" />
              위 비용은 2023년 12월 기준이며, 변경될 수 있습니다.
            </li>
            <li className="flex items-start gap-2">
              <i className="ph-bold ph-info text-win-sky mt-0.5 shrink-0" />
              환자의 상태 및 치료 내용에 따라 실제 비용이 달라질 수 있습니다.
            </li>
            <li className="flex items-start gap-2">
              <i className="ph-bold ph-info text-win-sky mt-0.5 shrink-0" />
              자세한 비용 문의는 전화(043-715-7591)로 확인해 주시기 바랍니다.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
