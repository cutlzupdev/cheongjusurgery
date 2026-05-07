import type { Metadata } from "next";
import Link from "next/link";
import "../prose.css";

export const metadata: Metadata = {
  title: { absolute: "이용약관 — 윈윈정형외과 수술재활센터" },
  description: "윈윈정형외과 수술재활센터 이용약관",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <article className="pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-win-text-gray mb-6">
          <Link href="/" className="hover:text-win-navy">홈</Link>
          <span>/</span>
          <span className="text-win-navy font-semibold">이용약관</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-black text-win-text-dark mb-8">이용약관</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700 font-medium leading-relaxed">
          <h2 className="text-xl font-black text-win-text-dark mt-6 mb-4">제1장 총칙</h2>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제1조 목적</h3>
          <p>이 약관은 윈윈정형외과(이하 &lsquo;본원&rsquo;)에서 제공하는 서비스 이용조건 및 절차에 관한 사항과 기타 필요한 사항을 본원과 이용자의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.</p>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제2조 약관의 효력과 변경</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>이 약관은 이용자에게 공시함으로써 효력이 발생합니다.</li>
            <li>본원은 사정 변경의 경우와 영업상 중요사유가 있을 때 약관을 변경할 수 있으며, 변경된 약관은 전항과 같은 방법으로 효력이 발생합니다.</li>
          </ol>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제3조 약관 외 준칙</h3>
          <p>이 약관에 명시되지 않은 사항이 관계법령에 규정되어 있을 경우에는 그 규정에 따릅니다.</p>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">제2장 회원 가입과 서비스 이용</h2>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제1조 회원의 정의</h3>
          <p>회원이란 본원에서 회원으로 적합하다고 인정하는 일반 개인으로 본 약관에 동의하고 서비스의 회원가입 양식을 작성하고 &lsquo;ID&rsquo;와 &lsquo;비밀번호&rsquo;를 발급받은 사람을 말합니다.</p>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제2조 서비스 가입의 성립</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>서비스 가입은 이용자의 이용신청에 대한 본원의 이용승낙과 이용자의 약관내용에 대한 동의로 성립됩니다.</li>
            <li>회원으로 가입하여 서비스를 이용하고자 하는 희망자는 본원에서 요청하는 개인 신상정보를 제공해야 합니다.</li>
            <li>가입할 때 입력한 ID는 변경할 수 없으며, 한 사람에게 오직 한 개의 ID가 발급됩니다.</li>
            <li>본원은 다른 사람의 명의를 사용하거나, 허위 기재, 사회 안녕과 질서를 저해할 목적의 가입신청은 승낙하지 않습니다.</li>
          </ol>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제3조 서비스 이용 및 제한</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>서비스 이용은 연중무휴, 1일 24시간을 원칙으로 합니다.</li>
            <li>시스템 정기점검 등 필요한 경우 사전 통지 후 제한할 수 있습니다.</li>
            <li>온라인상담은 담당자의 사정에 따라 24시간 서비스가 불가능할 수 있습니다.</li>
          </ol>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제4조 서비스의 사용료</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>서비스는 회원으로 등록한 모든 사람들이 무료로 사용할 수 있습니다.</li>
            <li>유료화할 경우 유료화 실시 이전에 서비스에 공시합니다.</li>
          </ol>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">제3장 서비스 탈퇴, 재가입 및 이용 제한</h2>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제1조 서비스 탈퇴</h3>
          <p>회원이 서비스의 탈퇴를 원하면 회원 본인이 직접 전자메일을 통해 운영자에게 해지 신청을 요청해야 합니다.</p>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제2조 서비스 재가입</h3>
          <p>탈퇴한 사용자가 재가입을 원할 경우, 전자메일을 통해 운영자에게 재가입을 요청하면 됩니다.</p>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제3조 서비스 이용제한</h3>
          <p>본원은 회원이 다음 사항에 해당하는 행위를 하였을 경우, 사전통지 없이 이용계약을 해지하거나 서비스 이용을 중지할 수 있습니다.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>공공 질서 및 미풍 양속에 반하는 경우</li>
            <li>범죄적 행위에 관련되는 경우</li>
            <li>타인의 ID 및 비밀번호를 도용한 경우</li>
            <li>타인의 명예를 손상시키거나 불이익을 주는 경우</li>
            <li>같은 사용자가 다른 ID로 이중 등록을 한 경우</li>
            <li>서비스에 위해를 가하는 경우</li>
            <li>기타 관련 법령이나 본원에서 정한 이용조건에 위배되는 경우</li>
          </ul>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">제4장 서비스에 관한 책임의 제한</h2>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제1조 온라인상담</h3>
          <p>본원은 상담내용이 제3자에게 유출되지 않도록 최선을 다해 보안을 유지합니다. 상담에 대한 답변내용은 각 담당자의 지식을 바탕으로 한 주관적인 답변으로 본원의 서비스 의견을 대표하지는 않습니다.</p>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제2조 정보 서비스</h3>
          <p>서비스에서 제공되는 정보나 상담은 의학적 진단, 진료 혹은 치료를 대신하려는 목적이 아닙니다. 건강상태에 관한 의문점이 있다면 실제 전문의사를 찾아 진단을 받아야 합니다.</p>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">제5장 의무</h2>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제1조 회사의 의무</h3>
          <p>본원은 이 약관에서 정한 바에 따라 계속적, 안정적으로 서비스를 제공할 의무가 있습니다.</p>

          <h3 className="text-lg font-bold text-win-text-dark mt-6 mb-3">제2조 회원정보 보안의 의무</h3>
          <p>회원의 ID와 비밀번호에 관한 모든 관리의 책임은 회원에게 있습니다. 자신의 ID가 부정하게 사용된 경우, 회원은 반드시 본원에 그 사실을 통보해야 합니다.</p>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">제6장 분쟁조정</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>서비스 이용에 관한 분쟁은 최대한 쌍방합의에 의해 해결하도록 합니다.</li>
            <li>소송이 제기될 경우 회사의 소재지를 관할하는 법원을 관할법원으로 합니다.</li>
          </ol>

          <h2 className="text-xl font-black text-win-text-dark mt-10 mb-4">부칙</h2>
          <p className="text-sm text-gray-500">이 약관은 2023년 12월 15일 시행합니다.</p>
        </div>
      </div>
    </article>
  );
}
