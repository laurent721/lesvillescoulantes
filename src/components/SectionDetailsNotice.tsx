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
    <section id="notices" className="bg-[#ECEEF2] text-stone-900 py-16 sm:py-24 px-5 sm:px-8 border-b border-stone-300/60">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-950 mb-3 leading-[1.3]">
          {notices.heading}
        </h2>

        {/* Lead notice */}
        {notices.lead && (
          <p className={`font-medium text-stone-700 pb-6 mb-10 border-b border-stone-300/80 text-justified ${bodyTextClass}`}>
            {notices.lead}
          </p>
        )}

        {/* Notice Categories (Pure Text Cards) */}
        <div className="space-y-8 mb-12">
          {notices.categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-stone-50/85 border border-stone-300/70 p-6 sm:p-7 rounded-sm shadow-2xs"
            >
              <h3 className="font-bold text-lg sm:text-xl text-stone-950 mb-4 tracking-tight">
                {cat.categoryTitle}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2.5 text-stone-850"
                  >
                    <span className="font-bold text-stone-500 mt-0.5 select-none text-sm shrink-0">
                      ―
                    </span>
                    <span className={`text-justified tracking-[-0.015em] flex-1 ${bodyTextClass}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Evacuation Guide (Pure Text) */}
        <div className="bg-stone-100/90 border border-stone-300 p-6 sm:p-7 rounded-sm mb-12">
          <h3 className="font-bold text-lg sm:text-xl text-stone-950 mb-3 tracking-tight">
            비상 대피 및 안전 수칙
          </h3>
          <ul className="space-y-2.5">
            {notices.emergencyGuide.map((eg, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-stone-800">
                <span className="font-bold text-stone-500 mt-0.5 select-none text-sm shrink-0">
                  ※
                </span>
                <span className={`text-justified tracking-[-0.015em] flex-1 ${bodyTextClass}`}>
                  {eg}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Inquiries & Operation info */}
        <div className="bg-white/80 border border-stone-300/80 p-6 rounded-sm text-stone-800">
          <h4 className="font-bold text-base sm:text-lg text-stone-950 mb-2">
            공연 문의 및 고객 안내
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-stone-700">
            <div>
              <span className="font-semibold text-stone-900">전화 문의:</span>{' '}
              <a href={`tel:${notices.inquiry.phone}`} className="hover:underline font-medium">
                {notices.inquiry.phone}
              </a>
            </div>
            <div>
              <span className="font-semibold text-stone-900">이메일:</span>{' '}
              <a href={`mailto:${notices.inquiry.email}`} className="hover:underline font-medium">
                {notices.inquiry.email}
              </a>
            </div>
            <div className="sm:col-span-2 text-xs sm:text-sm text-stone-500 mt-1">
              <span className="font-semibold text-stone-700">운영 시간:</span>{' '}
              {notices.inquiry.operatingHours}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
