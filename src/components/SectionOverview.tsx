import React from 'react';
import { ProductionMeta } from '../types/content';
import { Instagram } from 'lucide-react';

interface SectionOverviewProps {
  meta: ProductionMeta;
  fontSize: 'base' | 'lg' | 'xl';
}

export const SectionOverview: React.FC<SectionOverviewProps> = ({ meta, fontSize }) => {
  // Helper to safely render line breaks for <br> or \n
  const renderWithLineBreaks = (text?: string) => {
    if (!text) return null;
    const lines = text.split(/<br\s*\/?>|\n/i);
    return lines.map((line, idx) => (
      <React.Fragment key={idx}>
        {line.trim()}
        {idx < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  // Dynamic font sizing classes
  const bodyTextClass = {
    base: 'text-[17px] sm:text-[18px] leading-[1.95]',
    lg: 'text-[19px] sm:text-[20px] leading-[2.05]',
    xl: 'text-[21px] sm:text-[22px] leading-[2.15]'
  }[fontSize];

  const leadTextClass = {
    base: 'text-[20px] sm:text-[22px] leading-[1.8]',
    lg: 'text-[22px] sm:text-[24px] leading-[1.85]',
    xl: 'text-[24px] sm:text-[27px] leading-[1.9]'
  }[fontSize];

  return (
    <section id="overview" className="bg-[#183526] text-white py-16 sm:py-24 px-5 sm:px-8 border-b border-[#0F241A]">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-[1.25]">
          {renderWithLineBreaks(meta.title)}
        </h1>

        {/* Subtitle / Catchphrase */}
        <p className={`font-medium text-stone-200 pb-8 mb-10 border-b border-white/20 text-justified ${leadTextClass}`}>
          {renderWithLineBreaks(meta.subtitle)}
        </p>

        {/* Production Quick Overview Details (1-column layout, box removed) */}
        <div className="space-y-5 mb-14 text-stone-100">
          {meta.genre && (
            <div>
              <span className="text-xs font-semibold text-emerald-200/80 block mb-1">공연 장르</span>
              <p className="font-semibold text-base sm:text-lg text-white leading-relaxed">
                {renderWithLineBreaks(meta.genre)}
              </p>
            </div>
          )}
          <div>
            <span className="text-xs font-semibold text-emerald-200/80 block mb-1">공연 기간</span>
            <p className="font-semibold text-base sm:text-lg text-white leading-relaxed">
              {renderWithLineBreaks(meta.dates)}
            </p>
          </div>
          <div>
            <span className="text-xs font-semibold text-emerald-200/80 block mb-1">공연 장소</span>
            <p className="font-semibold text-base sm:text-lg text-white leading-relaxed">
              {renderWithLineBreaks(meta.venue)}
            </p>
          </div>
          {meta.mainPerformance && (
            <div>
              <span className="text-xs font-semibold text-emerald-200/80 block mb-1">본공연</span>
              <p className="font-semibold text-base sm:text-lg text-white leading-relaxed">
                {renderWithLineBreaks(meta.mainPerformance)}
              </p>
            </div>
          )}
          <div>
            <span className="text-xs font-semibold text-emerald-200/80 block mb-1">
              {meta.intermission ? '소요 시간 및 인터미션' : '소요 시간'}
            </span>
            <p className="font-semibold text-base sm:text-lg text-white leading-relaxed">
              {renderWithLineBreaks(meta.runningTime)}
              {meta.intermission ? ` · ${meta.intermission}` : ''}
            </p>
          </div>
          {meta.ageRating && (
            <div>
              <span className="text-xs font-semibold text-emerald-200/80 block mb-1">관람 등급</span>
              <p className="font-semibold text-base sm:text-lg text-white leading-relaxed">
                {renderWithLineBreaks(meta.ageRating)}
              </p>
            </div>
          )}
          <div>
            <span className="text-xs font-semibold text-emerald-200/80 block mb-1">예매</span>
            <p className="font-semibold text-base sm:text-lg text-white leading-relaxed">
              {renderWithLineBreaks(meta.ticketPrice)}
            </p>
          </div>
        </div>

        {/* Synopsis (Optional) */}
        {meta.synopsis && meta.synopsis.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 tracking-tight flex items-center gap-2">
              <span>시놉시스</span>
              <span className="text-xs font-normal text-emerald-200/80 tracking-normal">줄거리 개요</span>
            </h2>
            <div className="space-y-4">
              {meta.synopsis.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`text-stone-100 text-justified tracking-[-0.015em] ${bodyTextClass}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Creative Team -> 만든 사람들 */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
            만든 사람들
          </h2>
          <div className="border-t border-white/20 divide-y divide-white/15">
            {meta.credits.map((item, idx) => (
              <div key={idx} className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-base">
                <span className="font-semibold text-emerald-200/90 text-sm sm:text-base w-36 shrink-0">
                  {item.role}
                </span>
                <span className="font-bold text-white tracking-tight sm:text-right">
                  {item.names}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Collective Norujumping (문단의 짧은 줄글 형식 텍스트) */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              콜렉티브 노루점핑
            </h2>
            <a
              href="https://www.instagram.com/noroojumping/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="콜렉티브 노루점핑 인스타그램 바로가기"
              title="인스타그램 @noroojumping 바로가기"
              className="inline-flex items-center justify-center p-1.5 text-emerald-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-all hover:scale-105 active:scale-95 shadow-2xs"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          <div className="border-t border-white/20 pt-5 space-y-4">
            {typeof meta.collectiveIntro === 'string' && (
              <p className={`text-stone-100 text-justified tracking-[-0.015em] ${bodyTextClass}`}>
                {renderWithLineBreaks(meta.collectiveIntro)}
              </p>
            )}
            {Array.isArray(meta.collectiveIntro) &&
              meta.collectiveIntro.map((para, idx) => (
                <p key={idx} className={`text-stone-100 text-justified tracking-[-0.015em] ${bodyTextClass}`}>
                  {renderWithLineBreaks(para)}
                </p>
              ))}
            {!meta.collectiveIntro && meta.cast && meta.cast.length > 0 && (
              <p className={`text-stone-100 text-justified tracking-[-0.015em] ${bodyTextClass}`}>
                {meta.cast.map((c) => `${c.character} (${c.actor})`).join(' · ')}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
