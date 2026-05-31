# OS 분류 위키 사이트

운영체제 강의 과제 — 운영체제를 시대·용도·응용·구조·라이선스 다섯 축으로 분류·정리한 위키. AI-네이티브 OS 사례로 [GeulOS](https://github.com/wwoosshh/geul_OS) 소개.

## 기술 스택

- **Next.js 15** + **Nextra 4** + **React 19**
- 콘텐츠: Markdown + MDX
- 배포: **Vercel**
- 디자인: Wikipedia/MDN 풍 정보 밀도 우선 (AI 클리셰 회피)

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
```

## 빌드 / 배포

```bash
npm run build    # .next/ 정적/SSR 빌드
npm start        # production 서버
```

Vercel:
```bash
vercel deploy --prod
```

## 폴더 구조

```
src/
├── app/
│   ├── layout.jsx        # RootLayout (Nextra Layout wrap)
│   ├── [[...mdxPath]]/   # 모든 콘텐츠 catch-all 라우트
│   ├── not-found.jsx
│   └── globals.css       # Pretendard 폰트 + 학술 풍 색감
└── content/              # 실제 콘텐츠 (MDX)
    ├── index.mdx         # 홈
    ├── _meta.js          # 사이드바 순서
    ├── classification/   # 운영체제 분류 7 페이지
    ├── geulos/           # GeulOS 사례 6 페이지
    ├── references.mdx
    └── about.mdx
```

## 라이선스

본 콘텐츠는 학교 과제용 — 출처 표기 권장.
GeulOS 사례 절은 MIT or Apache-2.0.
