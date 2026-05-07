import type { Metadata } from "next";
import Link from "next/link";
import "../prose.css";

export const metadata: Metadata = {
  title: { absolute: "개인정보처리방침 — 윈윈정형외과 수술재활센터" },
  description: "윈윈정형외과 수술재활센터 개인정보처리방침",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-win-text-gray mb-6">
          <Link href="/" className="hover:text-win-navy">홈</Link>
          <span>/</span>
          <span className="text-win-navy font-semibold">개인정보처리방침</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-black text-win-text-dark mb-8">개인정보 처리방침</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700 font-medium leading-relaxed">
          <p>윈윈정형외과(이하 &lsquo;본원&rsquo;)은 귀하의 개인정보보호를 매우 중요시하며, 『개인정보보호법』을 준수하고 있습니다.</p>
          <p>본원은 개인정보 처리방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</p>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">1. 수집하는 개인정보의 항목 및 수집방법</h2>
          <p>본원은 회원가입 시 서비스 이용을 위해 필요한 최소한의 개인정보만을 수집합니다.</p>
          <p>귀하가 본원의 서비스를 이용하기 위해서는 회원가입 시 필수항목과 선택항목이 있는데, 메일수신여부 등과 같은 선택 항목은 입력하지 않더라도 서비스 이용에는 제한이 없습니다.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>[진료정보]</strong> 수집항목: 성명, 생년월일, 주소, 연락처, 진료기록<br />※ 의료법에 의해 고유식별 정보 및 진료정보를 의무적으로 보유하여야 함(별도 동의 불필요)</li>
            <li><strong>[홈페이지 회원가입 시 수집항목]</strong><br />필수항목: 성명, 아이디, 비밀번호, 주소, 연락처(전화번호, 휴대폰번호), 메일주소<br />선택항목: 생일, 문자 수신 여부, 메일 수신 여부, 관심분야</li>
            <li>서비스 이용 과정에서 자동 수집: 서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보</li>
            <li><strong>[수집방법]</strong> 홈페이지, 서면양식, 팩스, 전화, 상담 게시판, 이메일</li>
          </ul>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">2. 개인정보의 수집 및 이용목적</h2>
          <p>본원은 수집한 개인정보를 다음의 목적을 위해 활용합니다. 이용자가 제공한 모든 정보는 하기 목적에 필요한 용도 이외로는 사용되지 않으며 이용 목적이 변경될 시에는 사전 동의를 구할 것입니다.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>[진료정보]</strong> 진단 및 치료를 위한 진료서비스와 청구, 수납 및 환급 등의 원무서비스 제공</li>
            <li><strong>[홈페이지 회원정보]</strong><br />필수정보: 홈페이지를 통한 진료 예약, 예약조회 및 회원제 서비스 제공, 온라인 게시판 게시물 작성<br />선택정보: 이메일을 통한 병원소식, 질병정보 등의 안내, 설문조사, 개인 맞춤서비스</li>
          </ul>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">3. 개인정보의 보유 및 이용기간</h2>
          <p>본원은 개인정보의 수집목적 또는 제공받은 목적이 달성된 때에는 귀하의 개인정보를 지체 없이 파기합니다.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>[진료정보]</strong> 의료법에 명시된 진료기록 보관 기준에 준하여 보관</li>
            <li><strong>[홈페이지 회원정보]</strong> 회원가입을 탈퇴하거나 회원에서 제명된 때</li>
            <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
            <li>신용정보의 수집/처리 및 이용 등에 관한 기록: 3년</li>
            <li>본인 확인에 관한 기록: 6개월</li>
            <li>방문에 관한 기록: 3개월</li>
          </ul>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">4. 개인정보의 파기절차 및 그 방법</h2>
          <p>본원은 『개인정보의 수집 및 이용목적』이 달성된 후에는 즉시 파기합니다.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>[파기절차]</strong> 이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 즉시 파기합니다.</li>
            <li><strong>[파기방법]</strong> 전자적 파일형태는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
          </ul>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">5. 개인정보 제공 및 공유</h2>
          <p>본원은 귀하의 동의가 있거나 관련법령의 규정에 의한 경우를 제외하고는 어떠한 경우에도 귀하의 개인정보를 이용하거나 타인 또는 타 기업·기관에 제공하지 않습니다.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>국민건강보험법에 의해 건강보험심사평가원에 요양급여비용 청구를 위한 진료기록 제출</li>
            <li>통계작성·학술연구를 위하여 특정 개인을 알아볼 수 없는 형태로 가공하여 제공</li>
            <li>법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ul>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">6. 수집한 개인정보의 취급위탁</h2>
          <p>본원은 서비스 이행을 위해 개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>위탁업무 내용: 홈페이지 유지 관리, 접속기록 관리, 회원관리</li>
            <li>위탁 개인정보 항목: 이름, 주소, 전화번호</li>
            <li>개인정보 보유 및 이용기간: 위탁계약 종료 시까지</li>
          </ul>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">7. 이용자 및 법정대리인의 권리와 그 행사방법</h2>
          <p>만14세 미만 아동의 회원가입은 법정대리인의 동의를 구하고 있습니다. 아동의 법정대리인은 아동의 개인정보에 대한 열람, 정정 및 삭제를 요청할 수 있습니다.</p>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">8. 동의철회 / 회원탈퇴 방법</h2>
          <p>귀하는 회원가입 시 개인정보의 수집·이용 및 제공에 대해 동의하신 내용을 언제든지 철회하실 수 있습니다. 회원탈퇴는 홈페이지 마이페이지의 『회원탈퇴』를 클릭하여 신청하시면 신청일 기준 10일 이내 탈퇴가 완료됩니다.</p>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">9. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</h2>
          <p>본원은 귀하의 정보를 수시로 저장하고 찾아내는 &lsquo;쿠키(cookie)&rsquo;를 운용합니다. 귀하는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나 거부할 수 있습니다. 쿠키 설치를 거부하셨을 경우 일부 서비스 제공에 어려움이 있을 수 있습니다.</p>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">10. 개인정보관리책임자</h2>
          <p>귀하의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 본원은 개인정보관리책임자를 두고 있습니다.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>직위: 대표원장</li>
            <li>연락처: 043-715-7591</li>
          </ul>
          <p>기타 개인정보침해에 대한 신고나 상담이 필요하신 경우:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>개인분쟁조정위원회 (1336)</li>
            <li>정보보호마크인증위원회 (02-580-0533~4)</li>
            <li>대검찰청 사이버범죄수사단 (02-3480-3573)</li>
            <li>경찰청 사이버테러대응센터 (02-392-0330)</li>
          </ul>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">11. 개인정보의 안전성 확보조치</h2>
          <p>본원은 이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 기술적/관리적 대책을 강구하고 있습니다.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>비밀번호 암호화 저장 및 관리</li>
            <li>해킹 등에 대비한 보안 대책 (백업, 백신, 암호화 통신, 침입차단시스템)</li>
            <li>개인정보 취급 직원의 최소화 및 교육</li>
          </ul>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">12. 정책 변경에 따른 공지의무</h2>
          <p>이 개인정보처리방침은 법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는 변경되는 개인정보처리방침을 시행하기 최소 7일전에 본원 홈페이지를 통해 공지합니다.</p>
          <p className="text-sm text-gray-500 mt-6">시행일자: 2023년 12월 15일</p>
        </div>
      </div>
    </article>
  );
}
