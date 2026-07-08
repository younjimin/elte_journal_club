# ELTE Journal Club — 웹사이트

정적 HTML/CSS/JS 사이트. 빌드 도구 없음, 서버 없음, 로그인 없음.

## 폴더 구조

```
eltejc/
├── index.html          홈
├── articles.html        Articles 목록
├── tips.html             학생 팁 목록
├── projects.html         프로젝트 목록
├── activities.html       활동/이벤트 타임라인
├── css/style.css         전체 디자인
├── js/data.js            ★ 콘텐츠는 여기서만 관리 ★
└── js/main.js            렌더링 로직 (보통 건드릴 필요 없음)
```

## 새 글/프로젝트/활동 추가하는 법

`js/data.js` 파일 하나만 수정하면 됩니다.

1. `js/data.js`를 엽니다.
2. 추가하려는 종류(`ARTICLES`, `TIPS`, `PROJECTS`, `ACTIVITIES`) 배열을 찾습니다.
3. 파일 안의 주석에 있는 예시를 참고해서 `{ ... }` 객체 하나를 배열 안에 추가합니다 (쉼표 잊지 않기).
4. 저장 후 `index.html`을 브라우저로 열어서 확인합니다.
5. 문제없으면 git commit & push.

날짜순 정렬은 자동으로 처리되므로, 배열 안에 아무 순서로 추가해도 됩니다.

## 로컬에서 미리 보기

빌드가 필요 없는 순수 정적 사이트라 파일을 브라우저로 그냥 열어도 되지만,
`fetch` 등 일부 기능 때문에 막히면 아래처럼 로컬 서버를 켜서 보는 게 안전합니다.

```bash
cd eltejc
python3 -m http.server 8000
```

이후 브라우저에서 `http://localhost:8000` 접속.

## GitHub Pages로 배포하기

1. GitHub에 새 저장소 생성 (예: `elte-journal-club`).
2. 이 폴더(`eltejc/`) 안의 내용을 저장소 루트에 push.
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<계정명>/<저장소명>.git
   git push -u origin main
   ```
3. GitHub 저장소 → Settings → Pages → Source에서 `main` 브랜치, `/ (root)` 선택 후 저장.
4. 몇 분 후 `https://<계정명>.github.io/<저장소명>/` 에서 접속 가능.

도메인 연결은 나중에 필요해지면 그때 추가하면 됩니다 (Settings → Pages → Custom domain).

## 디자인 메모

- 폰트: 제목 Space Grotesk / 본문 Inter / 날짜·태그 JetBrains Mono
- 카테고리별 색상 스탬프(Tech Ethics / AI / Policy / Environment / Social)로 글 성격을 한눈에 구분
- 학술적이지 않도록 세리프체 대신 그로테스크 계열 사용, 저널/색인카드 느낌의 탭 내비게이션
