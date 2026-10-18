/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { defaultProgramContent } from './data/defaultContent';
import { ProgramBookContent } from './types/content';
import { Navigation } from './components/Navigation';
import { SectionOverview } from './components/SectionOverview';
import { SectionProgramSchedule } from './components/SectionProgramSchedule';
import { SectionDirections } from './components/SectionDirections';
import { SectionProducerNote } from './components/SectionProducerNote';
import { SectionDramaturgNote } from './components/SectionDramaturgNote';
import { SectionDetailsNotice } from './components/SectionDetailsNotice';
import { QRCodeModal } from './components/QRCodeModal';
import { ContentEditorModal } from './components/ContentEditorModal';
import { generateStandaloneHtml } from './utils/standaloneHtmlGenerator';
import { SlidersHorizontal, QrCode, Download } from 'lucide-react';

const STORAGE_KEY = 'theatrical_program_content_v22';
const FONT_STORAGE_KEY = 'theatrical_program_fontsize_v1';

export default function App() {
  const [content, setContent] = useState<ProgramBookContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return defaultProgramContent;
  });

  const [fontSize] = useState<'base' | 'lg' | 'xl'>(() => {
    try {
      const savedFont = localStorage.getItem(FONT_STORAGE_KEY) as 'base' | 'lg' | 'xl';
      if (savedFont && ['base', 'lg', 'xl'].includes(savedFont)) {
        return savedFont;
      }
    } catch {
      // Fallback
    }
    return 'base';
  });

  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isQrModalOpen, setIsQrModalOpen] = useState<boolean>(false);
  const [isEditorModalOpen, setIsEditorModalOpen] = useState<boolean>(false);
  const [isFabOpen, setIsFabOpen] = useState<boolean>(false);

  // Content save handler
  const handleSaveContent = (newContent: ProgramBookContent) => {
    setContent(newContent);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
    } catch {
      // Ignore
    }
  };

  // Download standalone single-file HTML (zero hosting required)
  const handleDownloadStandaloneHtml = () => {
    const htmlString = generateStandaloneHtml(content);
    const blob = new Blob([htmlString], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const safeTitle = content.meta.title.replace(/[\s/\\?%*:|"<>]/g, '_');
    link.href = url;
    link.download = `${safeTitle}_프로그램북.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['overview', 'schedule', 'directions', 'producer', 'dramaturg', 'notices'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [content]);

  // Keyboard shortcuts for convenience
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If typing in input or textarea, do not trigger
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if ((e.key === 'e' || e.key === 'E') && (e.ctrlKey || e.metaKey || !e.shiftKey)) {
        e.preventDefault();
        setIsEditorModalOpen((prev) => !prev);
      }
      if (e.key === 'q' || e.key === 'Q') {
        e.preventDefault();
        setIsQrModalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900 font-sans antialiased selection:bg-stone-300 selection:text-stone-950">
      {/* 1. Top banner: Only centered category jump buttons */}
      <Navigation activeSection={activeSection} />

      {/* Main Single-Page Scroll Content */}
      <main className="flex-1 pb-16">
        {/* Category 1: 표제 및 공연개요 */}
        <SectionOverview meta={content.meta} fontSize={fontSize} />

        {/* Category: 공연프로그램 진행순서 */}
        <SectionProgramSchedule schedule={content.schedule} fontSize={fontSize} />

        {/* Category: 오시는 길 */}
        {content.directions && (
          <SectionDirections directions={content.directions} fontSize={fontSize} />
        )}

        {/* Category 2: 제작자의 말 */}
        <SectionProducerNote note={content.producerNote} fontSize={fontSize} />

        {/* Category 3: 드라마투르기의 말 */}
        <SectionDramaturgNote note={content.dramaturgNote} fontSize={fontSize} />

        {/* Category 4: 공연상세 및 유의사항 */}
        <SectionDetailsNotice notices={content.notices} fontSize={fontSize} />
      </main>

      {/* Note: The bottom banner has been completely removed as requested */}

      {/* Discreet floating helper button for operator management & QR (Hidden on mobile environment, desktop only) */}
      <div className="hidden md:block fixed bottom-5 right-5 z-40 no-print">
        {isFabOpen && (
          <div className="mb-2 flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
            <button
              onClick={() => {
                setIsEditorModalOpen(true);
                setIsFabOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-1.5 bg-stone-900 text-white rounded text-xs font-semibold shadow-md hover:bg-stone-800 transition-colors"
              title="페이지 내 텍스트 수정"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>텍스트 수정</span>
            </button>
            <button
              onClick={() => {
                setIsQrModalOpen(true);
                setIsFabOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-1.5 bg-stone-900 text-white rounded text-xs font-semibold shadow-md hover:bg-stone-800 transition-colors"
              title="모바일 접속 QR코드 보기"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>QR코드 안내</span>
            </button>
            <button
              onClick={() => {
                handleDownloadStandaloneHtml();
                setIsFabOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-1.5 bg-stone-900 text-white rounded text-xs font-semibold shadow-md hover:bg-stone-800 transition-colors"
              title="별도 호스팅 없는 단일 HTML 파일 다운로드"
            >
              <Download className="w-3.5 h-3.5" />
              <span>단일 HTML 내보내기</span>
            </button>
          </div>
        )}
        <button
          onClick={() => setIsFabOpen(!isFabOpen)}
          className="p-2.5 rounded-full bg-stone-800/80 hover:bg-stone-900 text-stone-200 hover:text-white shadow-md backdrop-blur-xs transition-all focus:outline-none focus:ring-2 focus:ring-stone-400"
          title="운영 및 QR 도구 열기 (단축키: E/Q)"
          aria-label="운영 도구"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* QR Code Modal for Online Access */}
      <QRCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        productionTitle={content.meta.title}
      />

      {/* Operator Live Content Editor Modal */}
      <ContentEditorModal
        isOpen={isEditorModalOpen}
        onClose={() => setIsEditorModalOpen(false)}
        content={content}
        onSaveContent={handleSaveContent}
        onDownloadHtml={handleDownloadStandaloneHtml}
      />
    </div>
  );
}
