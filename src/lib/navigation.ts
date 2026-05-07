export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

export const navigation: NavItem[] = [
  {
    label: "스포츠수술·재활",
    children: [
      { label: "수술 센터", href: "/sports-rehab/surgery-center" },
      { label: "프로구단 주치의", href: "/sports-rehab/pro-team" },
      { label: "재생주사/회복수액", href: "/sports-rehab/prp-iv" },
      { label: "재활치료", href: "/sports-rehab/rehabilitation" },
    ],
  },
  {
    label: "외상·골절",
    children: [
      { label: "족부·발목 골절", href: "/fracture/foot-ankle" },
      { label: "손·팔 골절", href: "/fracture/hand-arm" },
    ],
  },
  {
    label: "무릎",
    children: [
      { label: "무릎 관절염", href: "/knee/osteoarthritis" },
      { label: "반월판 연골 손상", href: "/knee/meniscus" },
      { label: "십자인대 손상", href: "/knee/acl-pcl" },
      { label: "무릎 힘줄염", href: "/knee/tendinitis" },
    ],
  },
  {
    label: "어깨",
    children: [
      { label: "회전근개 파열", href: "/shoulder/rotator-cuff" },
      { label: "오십견", href: "/shoulder/frozen-shoulder" },
      { label: "충돌증후군", href: "/shoulder/impingement" },
      { label: "석회성 건염", href: "/shoulder/calcific-tendinitis" },
      { label: "어깨 탈구·불안정증", href: "/shoulder/instability" },
    ],
  },
  {
    label: "족부",
    children: [
      { label: "무지외반증", href: "/foot/hallux-valgus" },
      { label: "류마티스 변형", href: "/foot/rheumatoid" },
      { label: "통풍", href: "/foot/gout" },
      { label: "엄지발가락관절염", href: "/foot/hallux-rigidus" },
      { label: "발가락변형", href: "/foot/toe-deformity" },
      { label: "지간신경종", href: "/foot/mortons-neuroma" },
      { label: "평발", href: "/foot/flatfoot" },
      { label: "부주상골", href: "/foot/accessory-navicular" },
      { label: "물혹", href: "/foot/ganglion" },
      { label: "족저근막염", href: "/foot/plantar-fasciitis" },
    ],
  },
  {
    label: "손·팔",
    children: [
      { label: "테니스·골프 엘보", href: "/hand-arm/tennis-golf-elbow" },
      { label: "힘줄염·방아쇠수지", href: "/hand-arm/tendinitis-trigger" },
      { label: "TFCC", href: "/hand-arm/tfcc" },
    ],
  },
  {
    label: "발목",
    children: [
      { label: "인대 파열·힘줄염", href: "/ankle/ligament-tendinitis" },
      { label: "아킬레스건염·파열", href: "/ankle/achilles" },
      { label: "박리성 골연골염", href: "/ankle/dissecans" },
      { label: "발목 관절염", href: "/ankle/osteoarthritis" },
    ],
  },
  {
    label: "척추",
    children: [
      { label: "목", href: "/spine/neck" },
      { label: "허리", href: "/spine/lumbar" },
    ],
  },
  {
    label: "병원·의료진",
    children: [
      { label: "병원 소개", href: "/about/clinic" },
      { label: "의료진 소개", href: "/about/doctors" },
    ],
  },
];
