import { ProgramBookContent } from '../types/content';

/**
 * Generates a 100% self-contained, standalone single HTML file that can be opened
 * directly by double-clicking in any browser without requiring any web server hosting.
 * Matches user requirements: Centered category jump buttons only at the top, no bottom banner.
 */
export function generateStandaloneHtml(content: ProgramBookContent): string {
  const meta = content.meta;
  const schedule = content.schedule;
  const directions = content.directions;
  const producer = content.producerNote;
  const dramaturg = content.dramaturgNote;
  const notices = content.notices;

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${meta.title} - 디지털 프로그램북</title>
  <meta name="description" content="${meta.subtitle}">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    :root {
      --font-gothic: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
      --bg-overview: #183526;
      --bg-schedule: #F8F6F1;
      --bg-directions: #F5F2EB;
      --bg-producer: #F3EFE9;
      --bg-dramaturg: #EAECE7;
      --bg-notice: #142238;
      --text-main: #1D2127;
      --text-muted: #525966;
      --border-subtle: rgba(29, 33, 39, 0.12);
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html {
      scroll-behavior: smooth;
      font-family: var(--font-gothic);
      background-color: var(--bg-overview);
      color: var(--text-main);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    body {
      line-height: 1.95;
      word-break: keep-all;
      overflow-wrap: break-word;
    }
    /* Fixed centered top navigation */
    .top-nav {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(251, 249, 245, 0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--border-subtle);
      padding: 0.75rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .top-nav .nav-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
      list-style: none;
      font-size: 0.925rem;
      font-weight: 600;
      flex-wrap: wrap;
      text-align: center;
      margin: 0 auto;
    }
    .top-nav a {
      color: var(--text-muted);
      text-decoration: none;
      padding: 0.35rem 0.75rem;
      border-radius: 4px;
      transition: all 0.15s ease;
      white-space: nowrap;
    }
    .top-nav a:hover {
      color: var(--text-main);
      background: rgba(0, 0, 0, 0.05);
    }
    /* Language switcher styles */
    .lang-switch-box {
      display: inline-flex;
      gap: 4px;
      background: rgba(0, 0, 0, 0.06);
      padding: 4px;
      border-radius: 4px;
      margin-bottom: 1.5rem;
      border: 1px solid var(--border-subtle);
    }
    .lang-btn {
      padding: 4px 12px;
      border: none;
      background: transparent;
      font-size: 0.825rem;
      font-weight: 600;
      color: var(--text-muted);
      cursor: pointer;
      border-radius: 3px;
      font-family: inherit;
      transition: all 0.15s ease;
    }
    .lang-btn.active {
      background: #1D2127;
      color: #FFFFFF;
    }
    /* Content sections */
    section {
      padding: 5rem 1.5rem;
      transition: background-color 0.2s ease;
    }
    @media (min-width: 768px) {
      section {
        padding: 6.5rem 3rem;
      }
    }
    .container {
      max-width: 860px;
      margin: 0 auto;
    }
    /* Muted section backgrounds */
    #overview { background-color: var(--bg-overview); color: #FFFFFF; }
    #overview .section-title { color: #FFFFFF; }
    #overview .lead-paragraph { color: #E2E8F0; border-color: rgba(255,255,255,0.2); }
    #overview .meta-item-label { color: #A7F3D0; }
    #overview .meta-item-value { color: #FFFFFF; }
    #overview .list-row { border-color: rgba(255,255,255,0.15); }
    #overview .list-row .role { color: #A7F3D0; }
    #overview .list-row .names { color: #FFFFFF; }
    #overview .justified-text { color: #F1F5F9; }
    #schedule { background-color: var(--bg-schedule); }
    #directions { background-color: var(--bg-directions); }
    #producer { background-color: var(--bg-producer); }
    #dramaturg { background-color: var(--bg-dramaturg); }
    #notices { background-color: var(--bg-notice); color: #F1F5F9; }
    #notices .section-title { color: #FFFFFF; }

    /* Category indicator */
    .category-kicker {
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
      display: block;
    }
    .section-title {
      font-size: 2.15rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.35;
      margin-bottom: 1.5rem;
      color: var(--text-main);
    }
    @media (min-width: 768px) {
      .section-title {
        font-size: 2.65rem;
      }
    }
    /* Justified text specification (character-level wrap for uniform tracking) */
    .justified-text {
      text-align: justify;
      text-justify: inter-word;
      word-break: break-all;
      overflow-wrap: break-word;
      font-size: 1.125rem;
      line-height: 2.05;
      color: var(--text-main);
      letter-spacing: -0.015em;
      margin-bottom: 1.5rem;
    }
    .lead-paragraph {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.95;
      margin-bottom: 2rem;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 1.75rem;
    }
    /* Meta details (1-column, no box) */
    .meta-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      margin: 2.5rem 0 3.5rem;
    }
    .meta-item-label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-muted);
      margin-bottom: 0.25rem;
    }
    .meta-item-value {
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--text-main);
    }
    .list-block {
      margin: 2rem 0;
      border-top: 1px solid var(--border-subtle);
    }
    .list-row {
      display: grid;
      grid-template-columns: 120px 1fr;
      padding: 1rem 0;
      border-bottom: 1px solid var(--border-subtle);
      gap: 1rem;
      font-size: 1.05rem;
    }
    .list-row .role {
      color: var(--text-muted);
      font-weight: 600;
    }
    .list-row .names {
      font-weight: 600;
    }
    .cast-card {
      padding: 1.25rem 0;
      border-bottom: 1px solid var(--border-subtle);
    }
    .cast-title {
      font-size: 1.15rem;
      font-weight: 700;
      margin-bottom: 0.35rem;
    }
    .cast-desc {
      font-size: 1.05rem;
      line-height: 1.85;
      color: var(--text-muted);
      text-align: justify;
      word-break: break-all;
    }
    .notice-card {
      margin-bottom: 2.5rem;
      background: rgba(255, 255, 255, 0.6);
      padding: 2rem;
      border: 1px solid var(--border-subtle);
    }
    .notice-card h4 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
    }
    .notice-card ul {
      padding-left: 1.25rem;
    }
    .notice-card li {
      margin-bottom: 0.85rem;
      font-size: 1.05rem;
      line-height: 1.95;
      text-align: justify;
      word-break: break-all;
    }
  </style>
</head>
<body>

  <!-- Top Banner: Centered category jump buttons only -->
  <header class="top-nav">
    <nav>
      <ul class="nav-links">
        <li><a href="#overview">개요</a></li>
        <li><a href="#schedule">진행 순서</a></li>
        ${directions ? '<li><a href="#directions">오시는 길</a></li>' : ''}
        <li><a href="#producer">제작자의 말</a></li>
        <li><a href="#dramaturg">드라마투르기의 말</a></li>
        <li><a href="#notices">공연 안내</a></li>
      </ul>
    </nav>
  </header>

  <!-- 1. 표제 및 공연개요 -->
  <section id="overview">
    <div class="container">
      <h1 class="section-title">${meta.title}</h1>
      <p class="lead-paragraph justified-text">${meta.subtitle}</p>

      <div class="meta-list">
        ${meta.genre ? `<div>
          <div class="meta-item-label">공연 장르</div>
          <div class="meta-item-value">${meta.genre}</div>
        </div>` : ''}
        <div>
          <div class="meta-item-label">공연 기간</div>
          <div class="meta-item-value">${meta.dates}</div>
        </div>
        <div>
          <div class="meta-item-label">공연 장소</div>
          <div class="meta-item-value">${meta.venue}</div>
        </div>
        ${meta.mainPerformance ? `<div>
          <div class="meta-item-label">본공연</div>
          <div class="meta-item-value">${meta.mainPerformance}</div>
        </div>` : ''}
        <div>
          <div class="meta-item-label">${meta.intermission ? '소요 시간 및 인터미션' : '소요 시간'}</div>
          <div class="meta-item-value">${meta.runningTime}${meta.intermission ? ` · ${meta.intermission}` : ''}</div>
        </div>
        ${meta.ageRating ? `<div>
          <div class="meta-item-label">관람 등급</div>
          <div class="meta-item-value">${meta.ageRating}</div>
        </div>` : ''}
        <div>
          <div class="meta-item-label">예매</div>
          <div class="meta-item-value">${meta.ticketPrice}</div>
        </div>
      </div>

      ${meta.synopsis && meta.synopsis.length > 0 ? `
      <h3 style="font-size: 1.45rem; font-weight: 700; margin: 3rem 0 1.25rem;">시놉시스 (줄거리)</h3>
      ${meta.synopsis
        .map(
          (para) =>
            `<p class="justified-text">${para}</p>`
        )
        .join('')}
      ` : ''}

      <h3 style="font-size: 1.45rem; font-weight: 700; margin: 3.5rem 0 1.25rem;">만든 사람들</h3>
      <div class="list-block">
        ${meta.credits
          .map(
            (c) =>
              `<div class="list-row"><div class="role">${c.role}</div><div class="names">${c.names}</div></div>`
          )
          .join('')}
      </div>

      <div style="display: flex; align-items: center; gap: 0.65rem; margin: 3.5rem 0 1.25rem;">
        <h3 style="font-size: 1.45rem; font-weight: 700; margin: 0; color: #FFFFFF;">콜렉티브 노루점핑</h3>
        <a href="https://www.instagram.com/noroojumping/" target="_blank" rel="noopener noreferrer" aria-label="콜렉티브 노루점핑 인스타그램 바로가기" title="인스타그램 @noroojumping 바로가기" style="display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 6px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25); color: #A7F3D0; text-decoration: none;">
          <svg style="width: 17px; height: 17px;" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
      </div>
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 1.25rem;">
        ${Array.isArray(meta.collectiveIntro)
          ? meta.collectiveIntro.map(p => `<p class="justified-text">${p}</p>`).join('')
          : `<p class="justified-text">${meta.collectiveIntro || (meta.cast ? meta.cast.map(c => `${c.character} (${c.actor})`).join(' · ') : '')}</p>`
        }
      </div>
    </div>
  </section>

  ${schedule && schedule.items && schedule.items.length > 0 ? `
  <!-- 공연프로그램 진행순서 -->
  <section id="schedule">
    <div class="container">
      <h2 class="section-title">${schedule.heading}</h2>
      ${schedule.note ? `<p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-subtle);">${schedule.note}</p>` : ''}
      
      <!-- First Group Label: 서울 부산 -->
      <div style="padding: 0.65rem 0; text-align: center; border-bottom: 1px solid var(--border-subtle);">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); letter-spacing: 0.05em;">${(schedule.firstGroupLabel || '서울 부산').replace(/(30일\*|13일\*)/g, '<u>$1</u>')}</span>
      </div>
      ${schedule.firstGroupTime ? `
      <!-- First Group Opening Time -->
      <div style="padding: 0.65rem 0; text-align: center; border-bottom: 1px solid var(--border-subtle);">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); letter-spacing: 0.05em;">${schedule.firstGroupTime}</span>
      </div>
      ` : ''}

      <div>
        ${schedule.items.map((item, idx) => `
          ${idx === 2 ? `
          <!-- Second Group Label: 부산 -->
          <div style="padding: 0.65rem 0; text-align: center; border-bottom: 1px solid var(--border-subtle);">
            <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); letter-spacing: 0.05em;">${(schedule.secondGroupLabel || '부산').replace(/(30일\*|13일\*)/g, '<u>$1</u>')}</span>
          </div>
          ${schedule.secondGroupTime ? `
          <!-- Second Group Opening Time -->
          <div style="padding: 0.65rem 0; text-align: center; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; gap: 0.4rem; flex-wrap: wrap;">
            ${schedule.secondGroupTime.includes('예약 바로가기') ? `
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); letter-spacing: 0.05em;">${schedule.secondGroupTime.replace(/\(?예약\s*바로가기\)?/, '').replace(/[()]/g, '').trim()}</span>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9VpeO6wbViSfXhaesFTfxp6i1n_mP6pn74_GTVzNfZtygZQ/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; font-weight: 700; color: #1C1917; background: #E7E5E4; padding: 0.15rem 0.55rem; border-radius: 4px; text-decoration: none; border: 1px solid rgba(0,0,0,0.15);">
                예약 바로가기 ↗
              </a>
            ` : `
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); letter-spacing: 0.05em;">${schedule.secondGroupTime}</span>
            `}
          </div>
          ` : ''}
          ` : ''}
          <div style="padding: 1.15rem 0; border-bottom: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 0.35rem;">
            <div style="display: flex; align-items: baseline; gap: 0.75rem; justify-content: space-between; flex-wrap: wrap;">
              <strong style="font-size: 1.15rem; color: var(--text-main);">${item.title}</strong>
              ${item.duration ? `<span style="font-size: 0.825rem; font-weight: 600; color: var(--text-muted); background: rgba(0,0,0,0.06); padding: 0.2rem 0.5rem; border-radius: 4px;">${item.duration}</span>` : ''}
            </div>
            ${item.description ? `<p style="margin: 0; padding-left: 0; color: #4B463E; font-size: 1rem; line-height: 1.7; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.description}</p>` : ''}
          </div>
        `).join('')}
      </div>
      <div style="padding-top: 0.5rem; text-align: right; font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">
        *본공연
      </div>

      <!-- Notice Box (흰색 배경 텍스트 박스, 볼드 효과) -->
      <div style="margin-top: 1.5rem; background: #FFFFFF; border: 1px solid rgba(0,0,0,0.12); padding: 1.25rem 1.5rem; border-radius: 2px;">
        <div style="text-align: center; margin-bottom: 0.65rem;">
          <span style="font-size: 0.75rem; font-weight: 600; color: #78716C; letter-spacing: 0.05em;">안내</span>
        </div>
        <p style="margin: 0; font-weight: 700; color: #1C1917; font-size: 0.95rem; line-height: 1.7; word-break: break-all;">
          ${schedule.noticeBox || '퍼포먼스 2의 진행을 위해 관객 여러분께서는 뜨개실을 지참해 주세요. 뜨개실은 대바늘용으로, 길면 길수록 좋습니다.'}
        </p>
      </div>
    </div>
  </section>
  ` : ''}

  <!-- 오시는 길 -->
  ${directions && directions.venues && directions.venues.length > 0 ? `
  <section id="directions">
    <div class="container">
      <h2 class="section-title">${directions.heading || '오시는 길'}</h2>
      <div style="display: flex; flex-direction: column; gap: 2.5rem;">
        ${directions.venues.map((venue) => `
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
            <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 1.25rem; color: var(--text-main);">${venue.title}</h3>
            <div style="border-bottom: 1px solid var(--border-subtle);">
              ${venue.subway ? `
                <div style="padding: 0.75rem 0; border-top: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 0.35rem;">
                  <strong style="font-size: 0.95rem; color: var(--text-main);">지하철 이용시:</strong>
                  <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                    ${venue.subway.split(/<br\s*\/?>|\n/).map(l => l.trim()).filter(Boolean).map(line => `<span style="font-size: 1rem; color: var(--text-main); word-break: break-all; line-height: 1.6;">${line}</span>`).join('')}
                  </div>
                </div>
              ` : ''}
              ${venue.bus ? `
                <div style="padding: 0.75rem 0; border-top: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 0.35rem;">
                  <strong style="font-size: 0.95rem; color: var(--text-main);">버스 이용시:</strong>
                  <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                    ${venue.bus.split(/<br\s*\/?>|\n/).map(l => l.trim()).filter(Boolean).map(line => `<span style="font-size: 1rem; color: var(--text-main); word-break: break-all; line-height: 1.6;">${line}</span>`).join('')}
                  </div>
                </div>
              ` : ''}
              ${venue.car ? `
                <div style="padding: 0.75rem 0; border-top: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 0.35rem;">
                  <strong style="font-size: 0.95rem; color: var(--text-main);">차량 이용시:</strong>
                  <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                    ${venue.car.split(/<br\s*\/?>|\n/).map(l => l.trim()).filter(Boolean).map(line => `<span style="font-size: 1rem; color: var(--text-main); word-break: break-all; line-height: 1.6;">${line}</span>`).join('')}
                  </div>
                </div>
              ` : ''}
              ${venue.taxi ? `
                <div style="padding: 0.75rem 0; border-top: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 0.35rem;">
                  <strong style="font-size: 0.95rem; color: var(--text-main);">택시 이용시:</strong>
                  <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                    ${venue.taxi.split(/<br\s*\/?>|\n/).map(l => l.trim()).filter(Boolean).map(line => `<span style="font-size: 1rem; color: var(--text-main); word-break: break-all; line-height: 1.6;">${line}</span>`).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- 2. 제작자의 말 -->
  <section id="producer">
    <div class="container">
      <!-- Language switcher: KR / FR / EN -->
      <div class="lang-switch-box">
        <button class="lang-btn active" onclick="switchLang('producer', 'ko', this)">KR</button>
        <button class="lang-btn" onclick="switchLang('producer', 'fr', this)">FR</button>
        <button class="lang-btn" onclick="switchLang('producer', 'en', this)">EN</button>
      </div>

      <!-- KO Content -->
      <div id="producer-ko" class="lang-content">
        <h2 class="section-title">${producer.heading}</h2>
        <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-muted); margin-bottom: 2.25rem;">
          ${producer.authorTitle ? `${producer.authorTitle} ` : ''}<strong>${producer.authorName}</strong>
        </div>
        ${producer.paragraphs.map((p) => `<p class="justified-text">${p}</p>`).join('')}
        ${producer.closing ? `<div style="text-align: right; margin-top: 2.5rem; font-weight: 600; font-size: 1.05rem; color: var(--text-muted);">${producer.closing}</div>` : ''}
      </div>

      <!-- FR Content -->
      <div id="producer-fr" class="lang-content" style="display: none;">
        <h2 class="section-title">${producer.translations?.fr?.heading || producer.heading}</h2>
        <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-muted); margin-bottom: 2.25rem;">
          <strong>${producer.translations?.fr?.authorName || producer.authorName}</strong>
        </div>
        ${(producer.translations?.fr?.paragraphs || producer.paragraphs).map((p) => `<p class="justified-text">${p}</p>`).join('')}
        ${producer.translations?.fr?.closing ? `<div style="text-align: right; margin-top: 2.5rem; font-weight: 600; font-size: 1.05rem; color: var(--text-muted);">${producer.translations.fr.closing}</div>` : ''}
      </div>

      <!-- EN Content -->
      <div id="producer-en" class="lang-content" style="display: none;">
        <h2 class="section-title">${producer.translations?.en?.heading || producer.heading}</h2>
        <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-muted); margin-bottom: 2.25rem;">
          <strong>${producer.translations?.en?.authorName || producer.authorName}</strong>
        </div>
        ${(producer.translations?.en?.paragraphs || producer.paragraphs).map((p) => `<p class="justified-text">${p}</p>`).join('')}
        ${producer.translations?.en?.closing ? `<div style="text-align: right; margin-top: 2.5rem; font-weight: 600; font-size: 1.05rem; color: var(--text-muted);">${producer.translations.en.closing}</div>` : ''}
      </div>
    </div>
  </section>

  <!-- 3. 드라마투르기의 말 -->
  <section id="dramaturg">
    <div class="container">
      <!-- Language switcher: KR / FR / EN -->
      <div class="lang-switch-box">
        <button class="lang-btn active" onclick="switchLang('dramaturg', 'ko', this)">KR</button>
        <button class="lang-btn" onclick="switchLang('dramaturg', 'fr', this)">FR</button>
        <button class="lang-btn" onclick="switchLang('dramaturg', 'en', this)">EN</button>
      </div>

      <!-- KO Content -->
      <div id="dramaturg-ko" class="lang-content">
        <h2 class="section-title">${dramaturg.heading}</h2>
        ${dramaturg.subheading ? `<p style="font-size: 1.2rem; font-weight: 600; color: var(--text-muted); margin-bottom: 1rem;">${dramaturg.subheading}</p>` : ''}
        <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-muted); margin-bottom: 2.5rem;">
          ${dramaturg.authorTitle ? `${dramaturg.authorTitle} ` : ''}<strong>${dramaturg.authorName}</strong>
        </div>
        ${dramaturg.paragraphs.map((p) => `<p class="justified-text">${p}</p>`).join('')}
        ${dramaturg.closing ? `<div style="text-align: right; margin-top: 2.5rem; font-weight: 600; font-size: 1.05rem; color: var(--text-muted);">${dramaturg.closing}</div>` : ''}
      </div>

      <!-- FR Content -->
      <div id="dramaturg-fr" class="lang-content" style="display: none;">
        <h2 class="section-title">${dramaturg.translations?.fr?.heading || dramaturg.heading}</h2>
        <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-muted); margin-bottom: 2.5rem;">
          <strong>${dramaturg.translations?.fr?.authorName || dramaturg.authorName}</strong>
        </div>
        ${(dramaturg.translations?.fr?.paragraphs || dramaturg.paragraphs).map((p) => `<p class="justified-text">${p}</p>`).join('')}
        ${dramaturg.translations?.fr?.closing ? `<div style="text-align: right; margin-top: 2.5rem; font-weight: 600; font-size: 1.05rem; color: var(--text-muted);">${dramaturg.translations.fr.closing}</div>` : ''}
      </div>

      <!-- EN Content -->
      <div id="dramaturg-en" class="lang-content" style="display: none;">
        <h2 class="section-title">${dramaturg.translations?.en?.heading || dramaturg.heading}</h2>
        <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-muted); margin-bottom: 2.5rem;">
          <strong>${dramaturg.translations?.en?.authorName || dramaturg.authorName}</strong>
        </div>
        ${(dramaturg.translations?.en?.paragraphs || dramaturg.paragraphs).map((p) => `<p class="justified-text">${p}</p>`).join('')}
        ${dramaturg.translations?.en?.closing ? `<div style="text-align: right; margin-top: 2.5rem; font-weight: 600; font-size: 1.05rem; color: var(--text-muted);">${dramaturg.translations.en.closing}</div>` : ''}
      </div>
    </div>
  </section>

  <!-- 4. 공연상세 및 유의사항 -->
  <section id="notices">
    <div class="container">
      <h2 class="section-title">${notices.heading}</h2>
      ${notices.lead ? `<p class="justified-text lead-paragraph" style="color: #CBD5E1; border-color: rgba(255,255,255,0.15);">${notices.lead}</p>` : ''}

      <!-- Unified Notice Guidelines Box (배경색 흰색, 텍스트 검정색 볼드) -->
      <div style="background: #FFFFFF; border: 1px solid #CBD5E1; padding: 2rem; margin-bottom: 2rem; border-radius: 2px; color: #0F172A;">
        ${notices.categories
          .map(
            (cat, idx) => `
          <div style="${idx > 0 ? 'margin-top: 1.75rem; padding-top: 1.75rem; border-top: 1px solid #E2E8F0;' : ''}">
            ${cat.categoryTitle ? `<h4 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1.25rem; color: #0F172A;">${cat.categoryTitle}</h4>` : ''}
            <ul style="padding-left: 0; list-style: none;">
              ${cat.items.map((it) => `<li style="margin-bottom: 0.85rem; font-size: 1.05rem; line-height: 1.95; text-align: justify; word-break: break-all; display: flex; gap: 0.65rem; color: #0F172A; font-weight: 700;"><span style="font-weight: 800; color: #475569; flex-shrink: 0;">―</span><span>${it}</span></li>`).join('')}
            </ul>
          </div>
        `
          )
          .join('')}

        ${notices.emergencyGuide && notices.emergencyGuide.length > 0 ? `
          <div style="margin-top: 1.75rem; padding-top: 1.75rem; border-top: 1px solid #E2E8F0;">
            <h4 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1.25rem; color: #0F172A;">비상 대피 및 안전 수칙</h4>
            <ul style="padding-left: 0; list-style: none;">
              ${notices.emergencyGuide.map((eg) => `<li style="margin-bottom: 0.85rem; font-size: 1.05rem; line-height: 1.95; text-align: justify; word-break: break-all; display: flex; gap: 0.65rem; color: #0F172A; font-weight: 700;"><span style="font-weight: 800; color: #475569; flex-shrink: 0;">※</span><span>${eg}</span></li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>

      <!-- Inquiries (Exception: Separate Box) -->
      <div style="padding: 1.5rem; border: 1px solid #2B3E60; background: #18263D; border-radius: 2px;">
        <h4 style="font-weight: 700; margin-bottom: 0.5rem; color: #FFFFFF;">공연 문의</h4>
        <p style="font-size: 1rem; color: #CBD5E1;">이메일: ${notices.inquiry.email}</p>
        ${notices.inquiry.operatingHours ? `<p style="font-size: 0.875rem; color: #94A3B8; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.1);">${notices.inquiry.operatingHours}</p>` : ''}
      </div>
    </div>
  </section>

  <script>
    function switchLang(sectionId, lang, btn) {
      var section = document.getElementById(sectionId);
      if (!section) return;
      var contents = section.querySelectorAll('.lang-content');
      contents.forEach(function(el) { el.style.display = 'none'; });
      var target = document.getElementById(sectionId + '-' + lang);
      if (target) target.style.display = 'block';
      var buttons = section.querySelectorAll('.lang-btn');
      buttons.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
    }
  </script>
</body>
</html>`;
}
