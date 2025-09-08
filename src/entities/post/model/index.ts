// src/entities/post/model.ts

import { z } from "zod";

// 단일 'Post' 객체에 대한 스키마
export const postSchema = z.object({
  id: z.number().int(), // id는 정수여야 함
  author_id: z.string(),
  created_at: z.string().datetime(), // ISO 8601 날짜 형식인지 검증
  title: z.string(),
  description: z.string().nullable(), // null일 수 있음
  hearts: z.number().nullable(),
  tags: z.array(z.string()).nullable(), // 문자열 배열이거나 null일 수 있음

  // Supabase의 Json 타입은 내용물이 무엇이든 될 수 있으므로,
  // z.any() 또는 더 구체적인 스키마(예: z.record(z.any()))를 사용할 수 있습니다.
  content: z.any(),
});

// 'Post' 객체들의 배열에 대한 스키마
export const postsSchema = z.array(postSchema);

// Zod 스키마로부터 TypeScript 타입을 자동으로 추론합니다.
// 이제 이 타입을 UI 컴포넌트에서 재사용할 수 있습니다.
export type Post = z.infer<typeof postSchema>;
