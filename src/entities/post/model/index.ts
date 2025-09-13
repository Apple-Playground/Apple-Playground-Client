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

export const postsSchema = z.array(postSchema);
export type Post = z.infer<typeof postSchema>;
