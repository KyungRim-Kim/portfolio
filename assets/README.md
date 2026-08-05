# assets 폴더 사용 안내

이 폴더 하나가 포트폴리오에 들어가는 사진 전부입니다.
`index.html`은 아래 5개 파일명을 그대로 찾고 있으니, **파일명을 절대 바꾸지 말고** 같은 이름으로만 교체하세요.

## 파일 목록 (index.html이 실제로 참조하는 이름)

| 파일명 | 사용되는 곳 | 지금 들어있는 이미지 |
|---|---|---|
| `profile.jpg` | Cover, About Me | 업로드해주신 정장 프로필 사진 |
| `thinkwise-flow.jpg` | About Me, ThinkWise 프로젝트 | ThinkWise Web버전 입문과정 흐름도 |
| `insurance-cardnews.jpg` | About Me, 보험 AI교육 프로젝트, AI 역량(Before/After) | AI로 제작한 고객 배포용 카드뉴스 |
| `insurance-profile-sample.jpg` | 보험 AI교육 프로젝트 | AI로 생성한 강사 프로필 예시 이미지 |
| `keyplace-space.jpg` | 키플레이스 프로젝트 | 공간대여 홍보 사진 |

## 내 사진으로 교체하는 방법

1. 새 이미지를 준비합니다 (권장: JPG, 가로 1000~1600px, 용량 200KB 이하 — 로딩 속도를 위해)
2. 파일명을 위 표에 있는 **정확히 같은 이름**으로 바꿉니다 (예: 새 프로필 사진 → `profile.jpg`)
3. 이 폴더 안의 기존 파일을 덮어씁니다
4. GitHub에 업로드할 때도 이 폴더 통째로(`assets` 폴더 자체를) 드래그해서 올리면 기존 파일이 자동으로 교체됩니다

## GitHub에 올리는 방법 (다시 안내)

1. 저장소 페이지 → **Add file → Upload files**
2. 이 `assets` 폴더 아이콘 전체를 브라우저 업로드 영역에 드래그
3. 업로드 목록에 `assets/profile.jpg` 처럼 **`assets/`가 붙은 경로**로 나오는지 확인 후 **Commit changes**
4. 1분 후 강력 새로고침(`Ctrl+Shift+R` / `Cmd+Shift+R`)으로 확인

## 아직 채워지지 않은 자리

About Me 섹션의 "발표 · 강의 현장 사진" 한 자리는 아직 빈 플레이스홀더 상태입니다.
실제 발표/강의 사진을 주시면, 파일명(예: `about-presentation.jpg`)을 정해서 `index.html`에 바로 연결해 드릴게요.
