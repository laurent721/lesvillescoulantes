import { ProgramBookContent } from '../types/content';

/**
 * Generates a 100% self-contained, standalone single HTML file that can be opened
 * directly by double-clicking in any browser without requiring any web server hosting.
 * Matches user requirements: Centered category jump buttons only at the top, no bottom banner.
 */
export function generateStandaloneHtml(content: ProgramBookContent): string {
  const meta = content.meta;
  const schedule = content.schedule;
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
      --bg-overview: #FBF9F5;
      --bg-schedule: #F8F6F1;
      --bg-producer: #F3EFE9;
      --bg-dramaturg: #EAECE7;
      --bg-notice: #ECEEF2;
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
    #overview { background-color: var(--bg-overview); }
    #schedule { background-color: var(--bg-schedule); }
    #producer { background-color: var(--bg-producer); }
    #dramaturg { background-color: var(--bg-dramaturg); }
    #notices { background-color: var(--bg-notice); }

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
    /* Justified text specification */
    .justified-text {
      text-align: justify;
      text-justify: inter-word;
      word-break: keep-all;
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
      word-break: keep-all;
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
      word-break: keep-all;
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

      <h3 style="font-size: 1.45rem; font-weight: 700; margin: 3.5rem 0 1.25rem;">콜렉티브 노루점핑</h3>
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
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); letter-spacing: 0.05em;">${schedule.firstGroupLabel || '서울 부산'}</span>
      </div>

      <div>
        ${schedule.items.map((item, idx) => `
          ${idx === 2 ? `
          <!-- Second Group Label: 부산 -->
          <div style="padding: 0.65rem 0; text-align: center; border-bottom: 1px solid var(--border-subtle);">
            <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); letter-spacing: 0.05em;">${schedule.secondGroupLabel || '부산'}</span>
          </div>
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
      <p class="justified-text lead-paragraph">${notices.lead}</p>

      ${notices.categories
        .map(
          (cat) => `
        <div class="notice-card">
          <h4>${cat.categoryTitle}</h4>
          <ul>
            ${cat.items.map((it) => `<li>${it}</li>`).join('')}
          </ul>
        </div>
      `
        )
        .join('')}

      <div class="notice-card" style="background: rgba(230, 235, 240, 0.8);">
        <h4>비상 대피 및 안전 수칙</h4>
        <ul>
          ${notices.emergencyGuide.map((eg) => `<li>${eg}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-top: 2.5rem; padding: 1.5rem; border: 1px solid var(--border-subtle); background: white;">
        <h4 style="font-weight: 700; margin-bottom: 0.5rem;">공연 및 예매 문의</h4>
        <p style="font-size: 1rem; color: var(--text-muted);">전화: ${notices.inquiry.phone} · 이메일: ${notices.inquiry.email}</p>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-top: 0.25rem;">운영시간: ${notices.inquiry.operatingHours}</p>
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
