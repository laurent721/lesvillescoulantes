import React from 'react';
import { PerformanceNotice } from '../types/content';

interface SectionDetailsNoticeProps {
  notices: PerformanceNotice;
  fontSize: 'base' | 'lg' | 'xl';
}

export const SectionDetailsNotice: React.FC<SectionDetailsNoticeProps> = ({ notices, fontSize }) => {
  const bodyTextClass = {
    base: 'text-[16px] sm:text-[17px] leading-[1.95]',
    lg: 'text-[18px] sm:text-[19px] leading-[2.05]',
    xl: 'text-[20px] sm:text-[21px] leading-[2.15]'
  }[fontSize];

  return (
    <section id="notices" className="bg-[#142238] text-slate-100 py-16 sm:py-24 px-5 sm:px-8 border-b border-[#0C1626]">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3 leading-[1.3]">
          {notices.heading}
        </h2>

        {/* Lead notice */}
        {notices.lead && (
          <p className={`font-medium text-slate-300 pb-6 mb-10 border-b border-slate-700/80 text-justified ${bodyTextClass}`}>
            {notices.lead}
          </p>
        )}

        {/* Unified Notice Guidelines Box (배경색 흰색, 텍스트 검정색) */}
        <div className="bg-white border border-stone-200/90 p-6 sm:p-8 rounded-sm shadow-sm mb-10 divide-y divide-stone-200 text-stone-900">
          {notices.categories.map((cat, idx) => (
            <div key={idx} className={idx === 0 ? 'pb-7' : 'py-7'}>
              {cat.categoryTitle && (
                <h3 className="font-bold text-lg sm:text-xl text-stone-950 mb-4 tracking-tight">
                  {cat.categoryTitle}
                </h3>
              )}
              <ul className="space-y-3">
                {cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2.5 text-stone-950 font-bold"
                  >
                    <span className="font-extrabold text-stone-600 mt-0.5 select-none text-sm shrink-0">
                      ―
                    </span>
                    <span className={`text-justified tracking-[-0.015em] flex-1 break-all font-bold text-stone-950 ${bodyTextClass}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Emergency Evacuation Guide (통합 박스 내부 연결) */}
          {notices.emergencyGuide && notices.emergencyGuide.length > 0 && (
            <div className="pt-7">
              <h3 className="font-bold text-lg sm:text-xl text-stone-950 mb-3 tracking-tight">
                비상 대피 및 안전 수칙
              </h3>
              <ul className="space-y-2.5">
                {notices.emergencyGuide.map((eg, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-stone-950 font-bold">
                    <span className="font-extrabold text-stone-600 mt-0.5 select-none text-sm shrink-0">
                      ※
                    </span>
                    <span className={`text-justified tracking-[-0.015em] flex-1 break-all font-bold text-stone-950 ${bodyTextClass}`}>
                      {eg}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Inquiries & Operation info (제2 텍스트박스: 예외로 유지되는 독립 박스) */}
        <div className="bg-[#18263D] border border-[#2B3E60] p-6 rounded-sm text-slate-200 shadow-sm">
          <h4 className="font-bold text-base sm:text-lg text-white mb-2">
            공연 문의 및 고객 안내
          </h4>
          <div className="space-y-2 text-sm sm:text-base text-slate-300">
            <div>
              <span className="font-semibold text-white">이메일:</span>{' '}
              <a href={`mailto:${notices.inquiry.email}`} className="hover:underline text-sky-300 font-medium">
                {notices.inquiry.email}
              </a>
            </div>
            {notices.inquiry.operatingHours && (
              <div className="text-xs sm:text-sm text-slate-400 mt-2 pt-2 border-t border-[#2B3E60]/70">
                {notices.inquiry.operatingHours}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
