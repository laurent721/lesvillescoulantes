import React from 'react';
import { ProgramSchedule, ProgramScheduleItem } from '../types/content';

interface SectionProgramScheduleProps {
  schedule?: ProgramSchedule;
  fontSize: 'base' | 'lg' | 'xl';
}

export const SectionProgramSchedule: React.FC<SectionProgramScheduleProps> = ({ schedule, fontSize }) => {
  if (!schedule || !schedule.items || schedule.items.length === 0) {
    return null;
  }

  const descTextClass = {
    base: 'text-sm sm:text-base',
    lg: 'text-base sm:text-[17px]',
    xl: 'text-[17px] sm:text-lg'
  }[fontSize];

  const firstGroupLabel = schedule.firstGroupLabel || '서울 부산';
  const firstGroupTime = schedule.firstGroupTime;
  const secondGroupLabel = schedule.secondGroupLabel || '부산';
  const secondGroupTime = schedule.secondGroupTime;

  // Helper to underline 30일* and 13일*
  const renderFormattedLabel = (label: string) => {
    const parts = label.split(/(30일\*|13일\*)/g);
    return parts.map((part, idx) => {
      if (part === '30일*' || part === '13일*') {
        return (
          <span key={idx} className="underline underline-offset-3 decoration-stone-700 font-bold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const renderItem = (item: ProgramScheduleItem, idx: number) => (
    <div key={idx} className="py-4 sm:py-5 border-b border-stone-300/70 space-y-1.5">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-bold text-base sm:text-lg text-stone-950 tracking-tight">
          {item.title}
        </h3>
        {item.duration && (
          <span className="inline-block text-xs font-semibold text-stone-600 bg-stone-200/80 px-2.5 py-0.5 rounded shrink-0">
            {item.duration}
          </span>
        )}
      </div>

      {item.description && (
        <p className={`text-stone-700 font-normal whitespace-nowrap overflow-x-auto sm:overflow-visible ${descTextClass}`}>
          {item.description}
        </p>
      )}
    </div>
  );

  return (
    <section id="schedule" className="bg-[#F8F6F1] text-stone-900 py-16 sm:py-24 px-5 sm:px-8 border-b border-stone-300/60">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-950 mb-3 leading-[1.3]">
          {schedule.heading}
        </h2>

        {/* Note if present */}
        {schedule.note && (
          <p className="text-xs sm:text-sm font-medium text-stone-600 pb-4 border-b border-stone-300/70">
            {schedule.note}
          </p>
        )}

        {/* Top line if note not present */}
        {!schedule.note && <div className="border-t border-stone-300/70" />}

        {/* 1. First Group Label (서울 부산) */}
        <div className="py-2.5 sm:py-3 text-center border-b border-stone-300/70">
          <span className="text-xs font-semibold text-stone-600 tracking-wider">
            {renderFormattedLabel(firstGroupLabel)}
          </span>
        </div>

        {/* 1. First Group Opening Time */}
        {firstGroupTime && (
          <div className="py-2.5 sm:py-3 text-center border-b border-stone-300/70">
            <span className="text-xs font-semibold text-stone-600 tracking-wider">
              {firstGroupTime}
            </span>
          </div>
        )}

        {/* Items List */}
        <div>
          {schedule.items.map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                {/* 2. Second Group Label between item 2 and item 3 */}
                {idx === 2 && (
                  <>
                    <div className="py-2.5 sm:py-3 text-center border-b border-stone-300/70">
                      <span className="text-xs font-semibold text-stone-600 tracking-wider">
                        {renderFormattedLabel(secondGroupLabel)}
                      </span>
                    </div>
                    {secondGroupTime && (
                      <div className="py-2.5 sm:py-3 text-center border-b border-stone-300/70">
                        <span className="text-xs font-semibold text-stone-600 tracking-wider">
                          {secondGroupTime}
                        </span>
                      </div>
                    )}
                  </>
                )}
                {renderItem(item, idx)}
              </React.Fragment>
            );
          })}
        </div>

        {/* Legend under last divider */}
        <div className="pt-2 text-right">
          <span className="text-xs font-medium text-stone-500">
            *본공연
          </span>
        </div>
      </div>
    </section>
  );
};
