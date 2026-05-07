export default function Footer() {
  return (
    <footer className="py-12 bg-[#00162e] text-center text-gray-500 text-sm px-6 border-t border-blue-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="font-semibold text-gray-400 mb-2">
          윈윈정형외과 수술재활센터
        </p>
        <address className="not-italic mb-6 tracking-wide leading-relaxed">
          <span>
            <a
              href="https://map.naver.com/p/search/%EC%9C%88%EC%9C%88%EC%A0%95%ED%98%95%EC%99%B8%EA%B3%BC/place/1475298812"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              충북 청주시 흥덕구 강서로 126 하이마트 4~5층
            </a>
          </span>
          <br />
          대표전화:{" "}
          <a href="tel:+82437157591" className="hover:text-gray-300 transition-colors">
            043-715-7591
          </a>
          {" "}|{" "}
          팩스:{" "}
          <a href="tel:+82437157592" className="hover:text-gray-300 transition-colors">
            043-715-7592
          </a>
          {" "}|{" "}
          수술예약:{" "}
          <a href="tel:+821057857591" className="hover:text-gray-300 transition-colors">
            010-5785-7591
          </a>
          <br />
          대표: <span>박은수</span>
          {" "}|{" "}
          사업자등록번호: <span>375-78-00499</span>
        </address>
        <p className="max-w-4xl leading-relaxed italic text-xs text-gray-600 mb-8 border-t border-gray-800 pt-6">
          <strong>윈윈정형외과 수술재활센터</strong>는{" "}
          <strong className="text-gray-400">청주 수술 병원</strong> 중
          족부·발목·무릎·어깨·척추·골절을 전문으로 하는 수술재활 전문 센터입니다.
          무지외반증 MICA·MITA·DCMO 교정술, 아킬레스건 파열 당일 수술, 관절경
          BMAC 수술(이단성 골연골염, 박리성 골연골염), PRP 모든 부위 가능, 무균
          전용 수술실, 스포츠 전문의 보유, 자체 개발 닥터포디 깔창 등을 통해{" "}
          <strong className="text-gray-400">충북권</strong> 최고 수준의 정형외과
          전문 치료를 제공합니다. 입원 후 당일 수술, 부분 마취, 금식 없는 수술이
          가능하며 스포츠 수술·재활 원스톱 서비스를 제공합니다.
        </p>
        <p className="font-light text-gray-600">
          &copy;윈윈정형외과 수술재활센터. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
