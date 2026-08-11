# Handoff: 김경림 취업용 포트폴리오 웹사이트 (v2)

> **Kim Kyung Rim — Personal Portfolio Site**
> Tone C · Light (SaaS Product 무드) · 확정 톤

---

## Overview

김경림(Kim Kyung Rim) 님의 취업용 개인 포트폴리오 웹사이트입니다.
9년 9개월의 커리어(서비스센터 리셉션 → 매장 운영 → ThinkWise SaaS 사용자 교육 → AI EduMentor · 청바지 정부과제)를 하나의 스토리로 담은 **정적 단일 페이지 웹사이트 + 프로젝트 상세 페이지 7개** 구조입니다.

핵심 메시지:
> **"복잡한 정보를 사용자가 실제로 쓰는 흐름으로 바꿔왔습니다."**
> — SaaS 운영, 사용자 교육, AI Workflow를 관통하는 한 문장

---

## About the Design Files

이 번들에 포함된 HTML/CSS/JS 파일들은 **디자인 레퍼런스(reference)** 로 만들어진 프로토타입입니다.
의도한 룩앤필과 동작을 그대로 보여주기 위해 순수 HTML + Vanilla JS로 만들어졌지만, **곧바로 프로덕션 배포용 코드로 사용하는 것도 가능한 완결된 정적 사이트**입니다.

즉, 두 가지 사용 시나리오를 모두 지원합니다:

**시나리오 A · 그대로 배포 (권장 · 김경림 님용)**
정적 파일이므로 GitHub Pages / Netlify / Vercel / Cloudflare Pages / S3 어디에나 그대로 올려 배포할 수 있습니다. 별도 빌드 · 서버 필요 없음. 실제 이 링크가 이력서에 첨부될 예정이라면 A가 정답입니다.

**시나리오 B · 프레임워크로 재구현**
이미 사용 중인 코드베이스(Next.js, Nuxt, Astro, Remix, SwiftUI, Flutter 등)에 통합해야 한다면, 이 HTML을 시각 · 인터랙션 사양서로 삼아 그 환경의 관용을 따라 다시 구현하세요. 프레임워크 없이 시작한다면 정적 사이트이므로 **Astro** 나 **Next.js (App Router · SSG)** 가 가장 자연스러운 선택입니다.

---

## Fidelity

**High-fidelity (hifi) · 픽셀-퍼펙트**

- 최종 컬러, 타이포그래피, 스페이싱, 인터랙션이 모두 확정된 상태
- 모든 카피는 실제 채용 담당자에게 노출될 최종 원고 (임시 lorem 없음)
- 브라우저에서 열면 그대로 배포 가능한 상태
- Fluid layout (min 320px ~ 1600px+ 대응 · CSS Grid + `clamp()` 기반)

---

## Screens / Views

### 1. `index.html` · 메인 랜딩 (Home)

**Purpose**: 단일 스크롤 페이지에서 김경림 님의 스토리 · 강점 · 경력 · 프로젝트 목록 · 연락 CTA까지 한 번에 전달.

**Layout**:
- 최대 폭 `1200px` 컨테이너 (`.container-wide`) 좌우 여백 32px
- Sticky top nav (60px 높이, 반투명 블러 배경)
- 세로 스크롤 8개 섹션 (`hero → philosophy → about → skills → career → projects → credentials → aspiration → contact`)
- Hero 오른쪽 프로필 카드는 데스크탑에서 grid 2컬럼, 태블릿(<960px)부터 1컬럼

**Sections (top → bottom)**:

| # | Anchor | 섹션명 | 주요 컴포넌트 |
|---|---|---|---|
| Hero | `#top` | Hero (Above the fold) | H1 카피, 배지(2026 · Available for hire), 서브카피, `[전화하기 010-9891-9709]` CTA, 프로필 이미지, 3개 stat (9.9yr / 7 roles / 7 projects) |
| 01 | `#philosophy` | Core Philosophy | Blockquote — "사람은 설명보다, 자신이 이해할 수 있는 언어에 반응한다." + 서브 카피 |
| 02 | `#about` | About + Strengths | About 본문 (2단 grid) + 3개 강점 카드 (Editorial list · num · title · body · evidence) |
| 03 | `#skills` | Skills Map | Capability → Action → Tools 3컬럼 row 5개 |
| 04 | `#career` | Career Timeline (2015-2026) | 좌: 기간 · 우: 회사/역할/설명/태그 · 주요 3사(심테크시스템 · 키플레이스 · 교학모터스)는 `CORE` 배지 |
| 05 | `#projects` | Selected Work (Featured 3 + Other 4) | Featured 대형 카드 3개 (커버 + PROBLEM/ROLE/RESULT 메타 + Impact 숫자) + Other 소형 카드 4개 |
| 06 | `#credentials` | 자격 · 학력 (2컬럼 compact) | Certifications 리스트 + Education 리스트 |
| 07 | Aspiration | 지향점 | 라이트 wash 배경 카드 — "운영·교육·AI를 하나의 workflow로 연결합니다" |
| 08 | `#contact` | Contact | H2 + 큰 전화 CTA 버튼 (이메일 없음 · 전화 only) |
| Footer | — | Footer | 저작권 · 버전 태그 |

**Components (핵심 재현 스펙)**

각 컴포넌트별 상세는 소스 CSS(`assets/styles/tone-c.css`, `assets/styles/tone-c-refinement.css`)를 우선 참조. 아래는 재구현에 필요한 요약:

- **Nav** (`.nav`): position sticky · top 0 · height 60px · background `rgba(251, 252, 249, 0.85)` + backdrop-filter blur(12px) · border-bottom 1px `var(--c-border)`. 스크롤 스파이로 링크에 `.active` 토글.
- **Hero H1** (`.display-1`): Pretendard 700 · `clamp(2.4rem, 5vw, 4rem)` · line-height 1.1 · letter-spacing -0.03em · 색 `#10160D`. 한글은 자동 (Pretendard가 처리).
- **Badge (2026)** (`.hero-badge`): background `var(--c-apple-soft)` · color `var(--c-apple-deep)` · padding 4px 10px · border-radius 999px · font-size 12px · JetBrains Mono, dot (`.live`) 좌측 (6px 원형 `--c-apple`).
- **Call CTA** (`.btn-call-lg`): background `#10160D` · color `#FBFCF9` · border-radius 14px · padding 14px 22px · box-shadow `--c-shadow-lg` · icon+label+number+arrow 가로 배치. Hover: `transform: translateY(-2px)`.
- **Portrait card** (`.hero-portrait`): 4:5 aspect-ratio · `border-radius: 20px` · overflow hidden · box-shadow `--c-shadow-lg` · 우측 상단에 `◉ REC` / `01:41:22` HUD 텍스트 (JetBrains Mono 11px 반투명).
- **Stats** (`.hero-portrait .stat`): 3열 grid · 각 셀 stat-num (Space Grotesk 32px 700) + stat-lbl (JetBrains Mono 11px `text-transform: uppercase`).
- **Philosophy blockquote** (`.philosophy-card`): center-align · Pretendard 400 · `clamp(1.6rem, 3.2vw, 2.4rem)` · em 태그는 색 `var(--c-apple-deep)` + font-style italic.
- **Strength item** (`.strength-item`): grid 40px + 1fr · num Space Grotesk 20px `--c-apple-deep` · title Pretendard 22px 700 · body Pretendard 16px `--c-text-2` line-height 1.7 · evidence는 별도 라인 (mono label `EVIDENCE` + 본문).
- **Skill row** (`.skill-row`): grid 2컬럼 (좌 capability, 우 tools) · gap 32px · border-bottom 1px dashed `--c-border` · 각 row 24px 상하 padding.
- **Timeline item** (`.timeline-item`): grid `160px 1fr` · gap 40px · 좌측 tl-period (mono 14px) · 우측 tl-body (company Pretendard 20px 700, role 14px `--c-text-2`, highlight 밑줄+wash 배경, description 15px, tags row). `.major`는 tl-key `CORE` 배지 + border-left 3px `--c-apple`.
- **Featured project card** (`.featured-card`): grid `340px 1fr` gap 32px · border 1px `--c-border` border-radius 20px · overflow hidden · hover translateY(-4px) + shadow-lg. 좌 커버 (aspect-ratio 4/5 object-cover) · 우 body (num, arrow, title 26px 700, subtitle mono 13px, tagline 16px `--c-text-2`, meta 3rows, impact 3-cell grid).
- **Other project card** (`.other-card`): flex 카드 · grid 2컬럼 (2x2 grid 전체) · 커버 aspect-ratio 3/2 · title 18px · hover 미묘한 wash.
- **Cred item / Edu item**: flex row · 이름 좌 · grade 우 (`--c-text-3`).
- **Aspiration card** (`.aspiration-card`): background `var(--c-apple-wash)` · border-left 4px `--c-apple` · padding 40px · border-radius 20px · h2 24px Pretendard 500.
- **Contact big CTA**: hero의 CTA와 동일 스타일, 크기만 확대 (padding 20px 28px, icon 26px).

**Content/Copy**: 모든 최종 원고는 `data/portfolio.js` 의 `PORTFOLIO_DATA` 오브젝트에 있음. 다국어 처리 시 이 파일 하나만 지역화.

---

### 2. `projects/<slug>.html` · 프로젝트 상세 페이지 (7종)

각 프로젝트는 독립 페이지로, `assets/styles/project.css` 를 공유합니다.

| Slug | 프로젝트명 | 스토리 축 |
|---|---|---|
| `thinkwise.html` | ThinkWise SaaS 사용자 교육 | 반복되는 CS 문의 → 온보딩 · 교육자료 개선 |
| `thinkwise-event.html` | ThinkWise 오프라인 이벤트 운영 | 커뮤니티 · 세미나 기획/운영 |
| `ai-education.html` | AI EduMentor 강의 (기업체 대상) | 실무자용 AI Workflow 커리큘럼 설계 |
| `ai-edumentor.html` | AI EduMentor 프로덕트 | 강의 자산을 프로덕트화 |
| `cheongbaji.html` | 청바지(NowYouth) 정부과제 | 청년 대상 서비스 · 데모 앱 라이브 링크 |
| `kiplace.html` | 키플레이스 매장 운영 (55개점) | 프랜차이즈 오퍼레이션 |
| `reception.html` | 서비스센터 리셉션 (커리어 시작점) | "사용자 이해"의 원점 |

**공통 레이아웃**:
- Sticky top nav (index와 동일, 브랜드만 클릭 시 `../index.html` 로 복귀)
- Hero: 프로젝트명 · 부제 · 태그라인 · 메타 (기간/역할/도구) · 커버 이미지
- 본문 5-8개 섹션 (문제 정의 → 접근 → 실행 → 결과) — 프로젝트마다 상이
- Bottom: prev/next 프로젝트 링크

---

## Interactions & Behavior

### 스크롤 인터랙션

**Reveal on scroll** — `.reveal` 클래스 요소는 초기 opacity 0 + translateY(20px), viewport 진입 시 `.is-visible` 클래스 추가되며 opacity 1 + translateY(0)로 애니메이션 (transition 0.6s ease-out). 딜레이 클래스 `.delay-1 ~ .delay-4` (각 100ms 단위).

구현: `assets/scripts/reveal.js` (IntersectionObserver 기반, 20줄 남짓).
초기 페인트 시엔 페이지 상단 첫 화면 요소를 스크롤 없이도 표시하기 위해 `setTimeout` 50ms 후 강제 체크하는 로직이 index.html 인라인 스크립트 마지막에 포함.

### 네비게이션 · 스크롤 스파이

- Anchor 링크 (`#philosophy`, `#about` 등) 스무스 스크롤은 CSS `scroll-behavior: smooth` (base.css)
- 스크롤 스파이: `window.scrollY + 140` 기준으로 현재 섹션 계산 → 해당 nav-link에 `.active` 클래스
- Sticky nav offset 고려하여 각 섹션에 `scroll-margin-top: 80px`

### Hover 상태

- 카드 (Project, Featured, Other): `transform: translateY(-4px)` + shadow-lg 강화
- CTA 버튼: `transform: translateY(-2px)` + subtle brightness
- 링크: color `--c-apple` → `--c-apple-deep` transition 200ms
- 이미지가 있는 카드는 커버 이미지에 `transform: scale(1.03)` transition 400ms

### 상태

- **로딩**: 이미지 `loading="lazy"` (Featured 카드 하위, other 카드, 프로젝트 페이지 본문 모든 이미지). 히어로 프로필만 eager.
- **에러**: 폼 없음 · API 없음 (순수 정적) → 처리할 에러 상태 없음
- **폼 검증**: 해당 없음 (연락 방식은 전화 CTA 하나)

### 반응형 브레이크포인트

| 폭 | 동작 |
|---|---|
| ≥ 1200px | 컨테이너 1200px 중앙 정렬 · 모든 grid 데스크탑 레이아웃 |
| 960 ~ 1199px | 컨테이너 100% (좌우 40px 패딩) · 대부분 grid 유지 |
| 640 ~ 959px | Hero 2컬럼 → 1컬럼 · About grid → 세로 · Featured card grid → 1컬럼 |
| < 640px | Nav links 숨김 (햄버거는 없음 — 페이지가 짧아 스크롤로 충분) · Timeline period/body → 세로 스택 · Skills row → 세로 |

메인 CSS는 `@media (max-width: 960px)` · `@media (max-width: 640px)` 두 개 브레이크포인트로 대부분 처리.

---

## State Management

정적 사이트이므로 클라이언트 사이드 상태는 최소한:

- **활성 네비 링크** — 스크롤 이벤트에 반응, DOM 클래스 토글만 사용 (React state 없음)
- **Reveal 클래스** — IntersectionObserver 콜백에서 클래스 추가
- **데이터 소스** — `data/portfolio.js` 의 `window.PORTFOLIO_DATA` 전역 (프레임워크 마이그레이션 시 import 문으로 대체)

**리액트/뷰 등으로 옮길 때 권장**:
- `PORTFOLIO_DATA` 를 `.json` 이나 CMS(Contentful/Sanity)로 이관 · 컴포넌트에 props로 주입
- Reveal은 `useInView` (framer-motion) 또는 `IntersectionObserver` hook
- 스크롤 스파이는 `useScrollSpy` 훅으로 추상화

---

## Design Tokens

### Colors — Tone C (Light · SaaS Product)

정의 위치: `assets/styles/tone-c.css` `:root { ... }`

**Neutrals**
```css
--c-bg:            #FBFCF9;   /* 페이지 배경 — 살짝 그린이 도는 오프화이트 */
--c-bg-2:          #F4F7EE;   /* soft apple wash (섹션 alt) */
--c-bg-3:          #EAF0DE;   /* deeper wash */
--c-panel:         #FFFFFF;
--c-panel-2:       #F8FAF3;
--c-panel-hover:   #F1F5E7;
--c-border:        #E4E8DC;
--c-border-strong: #CDD5BC;
--c-text:          #10160D;   /* 잉크 그린-블랙 */
--c-text-2:        #4B5445;
--c-text-3:        #858E7A;
--c-text-4:        #B4BAA5;
```

**Accent — Apple Green (핵심)**
```css
--c-apple:         #6BA83B;   /* 메인 청사과 */
--c-apple-2:       #7EBD48;   /* 밝은 hover */
--c-apple-3:       #8FCB4A;   /* 더 밝은 hover */
--c-apple-deep:    #4F8A28;   /* 진한 (강조 텍스트) */
--c-apple-soft:    #EEF7DE;   /* 은은한 wash 배경 */
--c-apple-soft-2:  #E1EFCB;   /* soft border/tag */
--c-apple-glow:    rgba(107, 168, 59, 0.22);
--c-apple-wash:    rgba(107, 168, 59, 0.06);
```

**Support**
```css
--c-mint:          #067A5E;
--c-mint-2:        #0A9E7A;
--c-mint-soft:     #E6F5F0;
--c-blue:          #2A6FDB;
--c-purple:        #7B5CFA;
--c-warn:          #C46A16;
```

### Typography

```css
--c-font-sans: 'Space Grotesk', 'Pretendard', -apple-system, system-ui, sans-serif;
--c-font-mono: 'JetBrains Mono', ui-monospace, Menlo, monospace;
--c-font-kr:   'Pretendard', -apple-system, 'Apple SD Gothic Neo', system-ui, sans-serif;
```

**Google Fonts / CDN 로드**:
- Pretendard: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css` (base.css 안에 이미 참조)
- Space Grotesk, JetBrains Mono: Google Fonts `@import` (base.css 안)

**Type scale (실제 사용 값)**

| 용도 | Font | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Display 1 (Hero H1) | Pretendard | `clamp(2.4rem, 5vw, 4rem)` | 700 | 1.1 | -0.03em |
| Display 2 (Section H2) | Pretendard | `clamp(1.6rem, 3vw, 2.4rem)` | 700 | 1.15 | -0.02em |
| Heading | Pretendard | 1.5rem | 700 | 1.3 | -0.015em |
| Body Large (Lede) | Pretendard | 1.125rem | 400 | 1.7 | 0 |
| Body | Pretendard | 1rem | 400 | 1.65 | 0 |
| Small | Pretendard | 0.875rem | 400 | 1.5 | 0 |
| Mono / Eyebrow | JetBrains Mono | 0.75rem | 500 | 1.4 | 0.05em |
| Numeric (Stats) | Space Grotesk | 2rem | 700 | 1 | -0.02em |

### Spacing

명시적인 spacing 토큰은 정의되어 있지 않고, 각 컴포넌트에 직접 값 사용. 일관된 스케일:

```
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 60 · 80 · 100 · 120 (px)
```

섹션 간 세로 padding: `padding: 100px 0` (desktop) → `padding: 60px 0` (< 640px)

### Border Radius

| 용도 | 값 |
|---|---|
| Pill (badge, tag, btn round) | 999px |
| Card / Panel | 20px |
| Small card | 14px |
| Chip / Small element | 8px |
| Image inside card | 16px |
| Btn CTA | 14px |

### Shadows

```css
--c-shadow-sm: 0 1px 2px rgba(15, 20, 32, 0.04);
--c-shadow-md: 0 4px 12px -2px rgba(15, 20, 32, 0.08);
--c-shadow-lg: 0 20px 40px -12px rgba(15, 20, 32, 0.12);
```

hover 시 카드는 lg로 격상.

### Motion

- Transition (color, background, transform): `0.2s ease` (마이크로) · `0.35s ease-out` (카드 hover)
- Reveal fade-in: `0.6s ease-out`
- Delay stagger: 100ms

---

## Assets

### 이미지 자산 (bundled)

프로젝트별 이미지 목록:

| 폴더 | 개수 | 용도 |
|---|---|---|
| `assets/profile/` | 5 | 프로필 사진 (`profile.jpg`가 현재 노출본, 나머지는 백업/원본) |
| `assets/thinkwise/` | 10 | ThinkWise 교육 · 인트로 · 자기소개서 캡처 |
| `assets/thinkwise_event/` | 6 | ThinkWise 이벤트/세미나 사진 |
| `assets/ai_education/` | 22 | AI 교육 커리큘럼 PPT 캡처 · 강의 현장 사진 · 리뷰 |
| `assets/ai_edumentor/` | 12 | AI EduMentor 프로덕트 관련 이미지 |
| `assets/cheongbaji/` | 5 | 청바지(NowYouth) 앱/영상 스틸 |
| `assets/kiplace/` | 4 | 키플레이스 매장 · 프로모션 |
| `assets/reception/` | 1 | 서비스센터 리셉션 시절 사진 |
| `assets/canada/` | 6 | 캐나다 워홀/어학 (활용도 낮음 · 필요시 사용) |

**프로필 사진**: `assets/profile/profile.jpg` (820×1024 · 크림 블라우스)
캐시 무효화를 위해 HTML에서 `?v=2` 쿼리스트링 부착. 프레임워크 마이그레이션 시엔 파일명 자체를 해시화(예: `profile.abc123.jpg`)해서 CDN 캐시 대응.

**이력서 PDF**: `assets/resume.pdf` (김경림_이력서.pdf 로 다운로드됨 · 142KB)

### 외부 리소스 (CDN에서 로드)

- Pretendard variable font · jsdelivr CDN
- Space Grotesk · JetBrains Mono · Google Fonts

---

## Files

> **참고**: `*.srcmap.json` 파일들은 디자인 툴에서 자동 생성되는 소스맵 사이드카입니다. **개발자는 무시하고 삭제해도 됩니다** — HTML 파일만 참조하세요.

이 번들에 포함된 실제 파일 구조:

```
design_handoff_portfolio_v2/
├── README.md                          ← 이 문서
├── index.html                         ← 메인 랜딩 페이지
├── data/
│   └── portfolio.js                   ← 모든 콘텐츠 원고 · 데이터
├── projects/                          ← 프로젝트 상세 페이지 7개
│   ├── thinkwise.html
│   ├── thinkwise-event.html
│   ├── ai-education.html
│   ├── ai-edumentor.html
│   ├── cheongbaji.html
│   ├── kiplace.html
│   └── reception.html
└── assets/
    ├── styles/
    │   ├── base.css                   ← reset + 폰트 로드 + 공통 유틸
    │   ├── tone-c.css                 ← 컬러 토큰 + 컴포넌트 (Tone C 확정)
    │   ├── tone-c-refinement.css      ← 최종 리파인먼트 · 상단이 tone-c.css 위에 덮어씀
    │   └── project.css                ← 프로젝트 상세 페이지 공통 스타일
    ├── scripts/
    │   └── reveal.js                  ← 스크롤 reveal (IntersectionObserver)
    ├── profile/                       ← 프로필 이미지
    ├── thinkwise/ · thinkwise_event/
    ├── ai_education/ · ai_edumentor/
    ├── cheongbaji/ · kiplace/ · reception/ · canada/
    └── resume.pdf                     ← 다운로드용 이력서
```

**로드 순서** (index.html 기준):
1. `<head>` 에서 base.css → tone-c.css → tone-c-refinement.css 순차 로드 (**순서 중요** · refinement가 덮어써야 함)
2. `<head>` 에서 `data/portfolio.js` 동기 로드 → `window.PORTFOLIO_DATA` 전역 노출
3. `<body>` 하단에서 `assets/scripts/reveal.js` 로드 후 인라인 스크립트가 `PORTFOLIO_DATA` 를 각 grid에 렌더
4. 인라인 스크립트가 마지막에 초기 reveal 상태 계산 + 스크롤 스파이 이벤트 바인딩

---

## 배포 가이드 (GitHub Pages / Netlify · 시나리오 A용)

가장 빠른 배포 절차 (김경림 님 본인 사용 기준):

### GitHub Pages

1. 이 폴더 내용을 새 GitHub repo에 push (repo명 예: `kim-kyungrim-portfolio`)
2. Repo Settings → Pages → Source를 `main` branch / `/ (root)` 로 지정
3. 몇 분 후 `https://<username>.github.io/kim-kyungrim-portfolio/` 에서 접속 가능
4. 커스텀 도메인 원하면 Settings → Pages → Custom domain에 도메인 입력 + DNS CNAME 설정

### Netlify (더 간단)

1. netlify.com 로그인 → "Add new site" → "Deploy manually"
2. 이 폴더를 통째로 드래그앤드롭
3. 즉시 `https://<random>.netlify.app` 링크 생성
4. Domain settings에서 원하는 서브도메인으로 변경 가능

### Vercel

1. vercel.com 로그인 → "Add New Project" → GitHub repo 연결 (Framework Preset: **Other**)
2. Build/Output settings 그대로 (빌드 없음) · Root directory 지정만
3. 배포 완료

---

## 재구현 체크리스트 (시나리오 B용)

프레임워크로 옮길 때 놓치기 쉬운 것들:

- [ ] `PORTFOLIO_DATA` 를 JSON/MDX/CMS로 이관 · 타입 정의 (TypeScript)
- [ ] Reveal은 CSS-only가 아닌 IntersectionObserver 필요 (Framer Motion `whileInView`도 가능)
- [ ] 스크롤 스파이 커스텀 훅 or `next-scroll-nav` 같은 라이브러리
- [ ] 이미지: Next.js 라면 `next/image`로 교체 · placeholder blur 추가 권장
- [ ] Sticky nav의 backdrop-blur는 Safari에서 `-webkit-backdrop-filter` prefix 필요
- [ ] 프로젝트 페이지 7개는 dynamic route (`/projects/[slug]`) + MDX로 이관 시 유지보수 훨씬 편함
- [ ] OG 이미지 · favicon · 메타 태그 (title/description/theme-color) 전부 있음 — `next/head` 등으로 이관
- [ ] Contact CTA는 `tel:01098919709` 링크 (별도 SMS/이메일 처리 없음)

---

## Change Log

- **v2** (2026-08-11) — 프로필 이미지 교체 (라벤더 트위드 → 크림 블라우스) · 캐시 무효화 `?v=2` 부착
- **v1.5** — Contact 섹션에서 이메일 제거 · 전화 CTA 단일화
- **v1** — Tone C (Light · SaaS 프로덕트) 확정 · 3가지 톤 비교 종료 후
- **초기 탐색** — Tone A (Editorial), Tone B (Warm), Tone C (Tech) 3안 병렬 진행

---

## Contact / Handoff Questions

이 핸드오프에 대한 질문은 이 프로젝트를 만든 디자인 대화에서 이어서 물어봐 주세요. 재구현 담당자가 참고해야 할 프로덕션 결정사항:

- **연락 CTA는 전화 하나만** (이메일 · 링크드인 · 깃허브 노출 안 함) — 김경림 님이 명시적으로 선택
- **핵심 색상은 청사과 그린(#6BA83B)** — 심테크시스템(ThinkWise)의 청사과 아이덴티티에서 영감
- **핵심 메시지 문장**은 여러 번의 조정 끝에 나온 최종본 — 함부로 수정하지 말 것
