"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-blue-100/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 py-3.5 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
          aria-label="윈윈정형외과 홈"
        >
          <div className="leading-tight text-center">
            <span className="block text-xl font-black text-win-navy tracking-tight">
              윈윈정형외과
            </span>
            <span className="block text-[15px] font-extrabold text-win-sky tracking-widest">
              수술재활센터
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden xl:flex items-center space-x-1 font-semibold text-[13px] text-gray-700"
          aria-label="주요 메뉴"
        >
          {navigation.map((item) => (
            <div key={item.label} className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-win-navy transition-colors outline-none">
                {item.label}
                {item.children && (
                  <i className="ph-bold ph-caret-down text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                )}
              </button>
              {item.children && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-52 z-50">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-win-hover border border-blue-50 py-2 flex flex-col">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="px-4 py-2.5 hover:bg-blue-50 hover:text-win-navy text-sm transition-colors text-gray-600 font-medium"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="https://naver.me/GALlHZFl"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-win-navy hover:bg-win-navy-hover text-white px-5 py-2.5 rounded-full font-bold text-sm transition-colors items-center gap-2 shadow-win"
            aria-label="네이버 예약하기"
          >
            <i className="ph-bold ph-calendar-check text-base" aria-hidden="true" />
            예약하기
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden text-win-navy p-2 hover:bg-blue-50 rounded-full transition-colors"
            aria-label="모바일 메뉴 열기"
            aria-expanded={mobileOpen}
          >
            <i
              className={`ph-bold ${mobileOpen ? "ph-x" : "ph-list"} text-2xl`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-lg absolute w-full top-full left-0 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col px-5 py-5 space-y-1" aria-label="모바일 메뉴">
            {navigation.map((item) => (
              <details key={item.label} className="group/m border-b border-gray-100 pb-1">
                <summary className="flex justify-between items-center font-bold text-base text-win-navy cursor-pointer list-none py-3 outline-none">
                  {item.label}
                  <i className="ph-bold ph-caret-down text-sm group-open/m:rotate-180 transition-transform" />
                </summary>
                {item.children && (
                  <div className="flex flex-col pl-3 mt-1 mb-2 space-y-2.5 text-sm text-gray-600 border-l-2 border-win-sky ml-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="hover:text-win-navy font-medium"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </details>
            ))}
            <div className="flex flex-col gap-3 pt-4 mt-2">
              <a
                href="https://naver.me/GALlHZFl"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="bg-win-navy text-white px-5 py-4 rounded-xl font-bold text-center flex justify-center items-center gap-2"
                aria-label="네이버 예약하기"
              >
                <i className="ph-bold ph-calendar-check text-xl" aria-hidden="true" />
                진료 예약하기
              </a>
              <a
                href="tel:+82437157591"
                className="border-2 border-win-sky text-win-sky px-5 py-4 rounded-xl font-bold text-center flex justify-center items-center gap-2"
                aria-label="전화 상담"
              >
                <i className="ph-bold ph-phone text-xl" aria-hidden="true" />
                전화 상담
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
