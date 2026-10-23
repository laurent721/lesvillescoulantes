import React, { useState } from 'react';
import { ProducerNote, LanguageCode } from '../types/content';

interface SectionProducerNoteProps {
  note: ProducerNote;
  fontSize: 'base' | 'lg' | 'xl';
}

export const SectionProducerNote: React.FC<SectionProducerNoteProps> = ({ note, fontSize }) => {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('ko');

  const bodyTextClass = {
    base: 'text-[17px] sm:text-[18px] leading-[2.05]',
    lg: 'text-[19px] sm:text-[20px] leading-[2.15]',
    xl: 'text-[21px] sm:text-[22px] leading-[2.25]'
  }[fontSize];

  // Resolve localized content
  const activeContent = (() => {
    if (currentLang === 'fr' && note.translations?.fr) {
      return {
        heading: note.translations.fr.heading,
        authorTitle: note.translations.fr.authorTitle ?? note.authorTitle,
        authorName: note.translations.fr.authorName ?? note.authorName,
        paragraphs: note.translations.fr.paragraphs,
        closing: note.translations.fr.closing ?? note.closing
      };
    }
    if (currentLang === 'en' && note.translations?.en) {
      return {
        heading: note.translations.en.heading,
        authorTitle: note.translations.en.authorTitle ?? note.authorTitle,
        authorName: note.translations.en.authorName ?? note.authorName,
        paragraphs: note.translations.en.paragraphs,
        closing: note.translations.en.closing ?? note.closing
      };
    }
    if (currentLang === 'ja' && note.translations?.ja) {
      return {
        heading: note.translations.ja.heading,
        authorTitle: note.translations.ja.authorTitle ?? note.authorTitle,
        authorName: note.translations.ja.authorName ?? note.authorName,
        paragraphs: note.translations.ja.paragraphs,
        closing: note.translations.ja.closing ?? note.closing
      };
    }
    return {
      heading: note.heading,
      authorTitle: note.authorTitle,
      authorName: note.authorName,
      paragraphs: note.paragraphs,
      closing: note.closing
    };
  })();

  return (
    <section id="producer" className="bg-[#F3EFE9] text-stone-900 py-16 sm:py-24 px-5 sm:px-8 border-b border-stone-300/60">
      <div className="max-w-3xl mx-auto">
        {/* Language conversion buttons: KR / FR / EN / JP */}
        <div className="flex items-center gap-1.5 mb-6">
          <div className="bg-stone-200/90 p-1 rounded inline-flex gap-1 text-xs font-semibold text-stone-700 border border-stone-300/70">
            <button
              onClick={() => setCurrentLang('ko')}
              className={`px-3 py-1 rounded transition-colors ${
                currentLang === 'ko'
                  ? 'bg-stone-900 text-white font-bold shadow-xs'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-300/60'
              }`}
              title="한국어 (KR)"
            >
              KR
            </button>
            <button
              onClick={() => setCurrentLang('fr')}
              className={`px-3 py-1 rounded transition-colors ${
                currentLang === 'fr'
                  ? 'bg-stone-900 text-white font-bold shadow-xs'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-300/60'
              }`}
              title="Français (FR)"
            >
              FR
            </button>
            <button
              onClick={() => setCurrentLang('en')}
              className={`px-3 py-1 rounded transition-colors ${
                currentLang === 'en'
                  ? 'bg-stone-900 text-white font-bold shadow-xs'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-300/60'
              }`}
              title="English (EN)"
            >
              EN
            </button>
            <button
              onClick={() => setCurrentLang('ja')}
              className={`px-3 py-1 rounded transition-colors ${
                currentLang === 'ja'
                  ? 'bg-stone-900 text-white font-bold shadow-xs'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-300/60'
              }`}
              title="日本語 (JP)"
            >
              JP
            </button>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-950 mb-3 leading-[1.3]">
          {activeContent.heading}
        </h2>

        {/* Author / Title */}
        <div className="text-sm sm:text-base font-semibold text-stone-700 pb-6 mb-8 border-b border-stone-300/80">
          {activeContent.authorTitle && (
            <>
              <span>{activeContent.authorTitle}</span>
              <span className="mx-2 text-stone-400">|</span>
            </>
          )}
          <span className="text-stone-950 font-bold">{activeContent.authorName}</span>
        </div>

        {/* Justified Paragraphs */}
        <div className="space-y-6">
          {activeContent.paragraphs.map((para, idx) => (
            <p
              key={idx}
              className={`text-stone-850 text-justified tracking-[-0.015em] ${bodyTextClass}`}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Closing signature */}
        {activeContent.closing && (
          <div className="mt-12 pt-6 border-t border-stone-300/80 text-right">
            <p className="text-base sm:text-lg font-bold text-stone-900">
              {activeContent.closing}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
