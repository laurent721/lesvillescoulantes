# 공연 디지털 프로그램북 (Digital Theatre Program Book)

QR코드 스캔을 통해 스마트폰 및 PC에서 간편하게 열람할 수 있는 **텍스트 중심의 고가독성 원페이지 반응형 공연 안내서**입니다.

---

## 🌟 주요 특징 및 구성

### 1. 4단계 카테고리 구성 (차분한 종이 톤 배경 분할)
- **제 1 부 · 표제 및 공연개요**: 공연명, 부제, 공연 기간/장소, 러닝타임/인터미션, 관람등급/가격, 상세 시놉시스, 제작 스태프(Creative) 및 출연진(Cast)
- **제 2 부 · 제작자의 말**: 제작총괄 겸 연출의 기획 의도 및 관람 환대사 (양쪽 정렬 및 고딕 서체)
- **제 3 부 · 드라마투르기의 말**: 작품의 미학적 분석, 기억과 부재의 서사에 관한 평론가의 비평적 성찰
- **제 4 부 · 공연상세 및 유의사항**: 티켓 수령/입장 안내, 관람 에티켓 및 커튼콜 촬영 규정, 배리어프리 안내, 비상 대피 수칙, 문의처

### 2. 고가독성 텍스트 디자인 철학
- **시각 피로 최소화**: 자극적인 형광·원색을 전면 배제하고 눈이 편안한 자연스러운 4종 뮤트 톤 페이퍼 배경 적용
- **고딕 서체 중심**: 프리텐다드(Pretendard) 기반 한국어 고딕 서체, 본문 18px 이상의 넉넉한 글자 크기
- **양쪽 정렬(Justify)**: `text-align: justify; word-break: keep-all;` 적용으로 활자가 단정하고 균형감 있게 정렬
- **넉넉한 행간(Line-Height)**: 장시간 모바일 스크롤 열람에도 눈이 피로하지 않도록 1.95~2.2배의 행간 유지
- **오브젝트 제한**: 불필요한 장식 이미지나 복잡한 애니메이션을 배제하고 오직 텍스트 본연의 힘에 집중

### 3. 별도 유료 호스팅 없는 2가지 배포 방식
1. **GitHub Pages 무료 정적 호스팅 (CI/CD 자동화)**
   - 리포지토리의 `main` 브랜치에 코드가 푸시되면 `.github/workflows/deploy.yml` 액션이 실행되어 무료로 GitHub Pages에 즉시 배포됩니다.
   - GitHub 설정: 저장소 Settings -> Pages -> Build and deployment Source를 `GitHub Actions`로 설정하면 끝납니다.
2. **단일 독립 HTML 파일 내보내기 (Zero Hosting)**
   - 페이지 상단 또는 운영자 도구의 **[단일 HTML 내보내기]**를 누르면 모든 CSS와 스타일, 텍스트가 번들링된 하나의 독립형 HTML 파일이 다운로드됩니다.
   - 서버 없이 더블클릭만으로 모든 모바일/PC 브라우저에서 오프라인으로 작동합니다.

### 4. 편리한 운영자 기능
- **실시간 QR 코드 생성기**: 관객 배포용 QR 코드 및 로비 비치용 인쇄 기능 제공
- **운영자 텍스트 편집기**: 웹 화면에서 즉시 4개 카테고리의 모든 글귀를 수정, 로컬 저장(LocalStorage) 및 초기화 가능
- **글자 크기 3단계 조절**: [보통 / 크게 / 특대] 지원으로 고령층 관객 및 어두운 극장 환경에서의 시인성 극대화

---

## 🛠 개발 및 실행 방법

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행 (포트 3000)
npm run dev

# 프로덕션 정적 빌드
npm run build

# 코드 문법 및 타입 검사
npm run lint

# 코드 포맷팅 (Prettier)
npm run format
```

---

## 📂 파일 구조

```
├── .github/workflows/deploy.yml  # GitHub Actions CI/CD 파이프라인
├── .prettierrc                   # Prettier 서식 설정
├── eslint.config.js              # ESLint 코드 검사 설정
├── index.html                    # 메인 HTML 템플릿
├── src/
│   ├── types/content.ts          # 프로그램북 데이터 타입 정의
│   ├── data/defaultContent.ts    # 4개 카테고리 기본 예시 텍스트
│   ├── components/
│   │   ├── Navigation.tsx        # 상단 네비게이션 및 컨트롤 바
│   │   ├── SectionOverview.tsx   # 제 1 부: 표제 및 공연개요
│   │   ├── SectionProducerNote.tsx # 제 2 부: 제작자의 말
│   │   ├── SectionDramaturgNote.tsx# 제 3 부: 드라마투르기의 말
│   │   ├── SectionDetailsNotice.tsx# 제 4 부: 공연상세 및 유의사항
│   │   ├── Footer.tsx            # 하단 푸터
│   │   ├── QRCodeModal.tsx       # QR코드 생성 및 인쇄 모달
│   │   └── ContentEditorModal.tsx# 운영자 텍스트 편집 모달
│   ├── utils/
│   │   └── standaloneHtmlGenerator.ts # 단일 무호스팅 HTML 생성기
│   ├── App.tsx                   # 메인 뷰 컴포넌트
│   ├── main.tsx                  # 리액트 진입점
│   └── index.css                 # 타이포그래피 및 색상 스타일링
```
