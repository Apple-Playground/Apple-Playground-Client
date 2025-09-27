# 🍏 Apple Playground Client

Next.js 기반의 Apple Playground 클라이언트 레포지토리입니다.

## 🛠️ 기술 **스택**
- **Next.js 15** (App Router, Server/Client Components)
- **TypeScript**
- **Auth.js** (NextAuth v5, 소셜 로그인)
- **Supabase** (DB/인증)
- **Tailwind CSS**
- **MDX** 지원
- **Shadcn UI**

## 📁 주요 폴더 구조
```
src/
  app/                # 라우트 및 레이아웃
    (main)/           # 루트 제외 공통 레이아웃 적용
    api/              # API 라우트
    ...
  entities/           # 도메인별 UI/비즈니스 로직
  shared/             # 공통 컴포넌트/유틸
  widgets/            # 복합 UI 컴포넌트
```

## 🚀 개발 시작하기
1. 패키지 설치
```bash
npm install
```
2. 개발 서버 실행
```bash
npm run dev
```

## 📝 커밋 컨벤션
- feat: 기능 추가
- fix: 버그 수정
- refactor: 리팩토링
- style: 스타일/포맷팅
- docs: 문서
- chore: 기타 작업

## 🧑‍💻 주요 개발 가이드
- **Server Action**은 반드시 별도 파일로 분리
- MDX는 `src/shared/ui/mdx-content.tsx`에서 커스텀 렌더링
- Supabase 연동은 서버 컴포넌트에서 처리 (클라이언트 노출 X)

## 🏗️ 배포
- Vercel 연동 권장
- 환경변수는 `.env.local`에 설정

## 📚 참고
- [Next.js 공식 문서](https://nextjs.org/docs)
- [Supabase 공식 문서](https://supabase.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
