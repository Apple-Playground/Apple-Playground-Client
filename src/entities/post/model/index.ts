import { z } from "zod";

/**
 * Post 단일 객체 스키마
 */
export const postSchema = z.object({
  id: z.number().int(),
  author_id: z.string(),
  created_at: z.iso.datetime(),
  title: z.string(),
  description: z.string().nullable(),
  hearts: z.number().nullable(),
  tags: z.array(z.string()).nullable(),
  content: z.string(),
  users: z.object({
    name: z.string().nullable(),
    image: z.string().nullable(),
  }),
});

/**
 * 새 포스트 작성을 위한 입력 스키마
 */
export const createPostSchema = z.object({
  title: z
    .string()
    .min(1, "제목은 필수입니다")
    .max(200, "제목은 200자를 초과할 수 없습니다"),
  content: z
    .string()
    .min(1, "내용은 필수입니다")
    .max(50000, "내용은 50,000자를 초과할 수 없습니다"),
  description: z
    .string()
    .max(500, "설명은 500자를 초과할 수 없습니다")
    .nullable()
    .optional(),
  tags: z
    .array(z.string().min(1).max(50))
    .max(10, "태그는 최대 10개까지 가능합니다")
    .nullable()
    .optional(),
});

export const postsSchema = z.array(postSchema);
export type Post = z.infer<typeof postSchema>;
export type CreatePostInput = z.infer<typeof createPostSchema>;
