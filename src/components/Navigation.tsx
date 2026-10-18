import React, { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: '개요' },
    { id: 'schedule', label: '진행 순서' },
    { id: 'directions', label: '오시는 길' },
    { id: 'producer', label: '제작자의 말' },
    { id: 'dramaturg', label: '드라마투르기의 말' },
    { id: 'notices', label: '공연 안내' }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors no-print">
      {/* Reading Progress Indicator */}
      <div
        className="h-1 bg-stone-700 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Centered Category Quick Jump Navigation Only */}
      <div className="max-w-4xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-center">
        <nav
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-6 text-center w-full"
          aria-label="카테고리 이동 네비게이션"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-150 rounded text-center whitespace-nowrap ${
                  isActive
                    ? 'text-stone-950 font-bold bg-stone-200/80'
                    : 'text-stone-650 hover:text-stone-950 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
