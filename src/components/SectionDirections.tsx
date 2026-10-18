import React from 'react';
import { DirectionsSection } from '../types/content';

interface SectionDirectionsProps {
  directions?: DirectionsSection;
  fontSize: 'base' | 'lg' | 'xl';
}

export const SectionDirections: React.FC<SectionDirectionsProps> = ({ directions, fontSize }) => {
  if (!directions || !directions.venues || directions.venues.length === 0) {
    return null;
  }

  const bodyTextClass = {
    base: 'text-sm sm:text-base',
    lg: 'text-base sm:text-[17px]',
    xl: 'text-[17px] sm:text-lg'
  }[fontSize];

  return (
    <section id="directions" className="bg-[#F5F2EB] text-stone-900 py-16 sm:py-24 px-5 sm:px-8 border-b border-stone-300/60">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-950 mb-8 leading-[1.3]">
          {directions.heading}
        </h2>

        {/* Venues */}
        <div className="space-y-12">
          {directions.venues.map((venue, idx) => (
            <div key={idx} className="border-t border-stone-300/80 pt-6">
              {/* Venue Heading (큰글자, 볼드) */}
              <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold tracking-tight text-stone-950 mb-5 leading-snug">
                {venue.title}
              </h3>

              {/* Transportation details */}
              <div className="divide-y divide-stone-300/70 border-b border-stone-300/70">
                {venue.subway && (
                  <div className={`py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 ${bodyTextClass}`}>
                    <span className="font-bold text-stone-900 w-32 shrink-0">지하철 이용시:</span>
                    <span className="text-stone-850 break-all flex-1">{venue.subway}</span>
                  </div>
                )}
                {venue.bus && (
                  <div className={`py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 ${bodyTextClass}`}>
                    <span className="font-bold text-stone-900 w-32 shrink-0">버스 이용시:</span>
                    <span className="text-stone-850 break-all flex-1">{venue.bus}</span>
                  </div>
                )}
                {venue.car && (
                  <div className={`py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 ${bodyTextClass}`}>
                    <span className="font-bold text-stone-900 w-32 shrink-0">차량 이용시:</span>
                    <span className="text-stone-850 break-all flex-1">{venue.car}</span>
                  </div>
                )}
                {venue.taxi && (
                  <div className={`py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 ${bodyTextClass}`}>
                    <span className="font-bold text-stone-900 w-32 shrink-0">택시 이용시:</span>
                    <span className="text-stone-850 break-all flex-1">{venue.taxi}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
