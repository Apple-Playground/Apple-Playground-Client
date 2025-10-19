import { createSupabase } from "@/client";
import { type CreatePostInput, createPostSchema } from "@/entities/post/model";
import type { Database } from "../../../../types_db";

/**
 * 새 포스트를 생성합니다
 */
export const updatePost = async (
  postData: CreatePostInput,
  authorId: string,
): Promise<Database["public"]["Tables"]["posts"]["Row"]> => {
  const validatedData = createPostSchema.parse(postData);

  const supabase = await createSupabase();

  const { data, error } = await supabase
    .from("posts")
    .update({
      title: validatedData.title,
      content: validatedData.content,
      description: validatedData.description || null,
      tags: validatedData.tags || null,
      author_id: authorId,
      hearts: 0, // 초기 좋아요 수는 0
    })
    .single();

  if (error) {
    console.error("Error creating post:", error);
    throw new Error(`포스트 생성에 실패했습니다: ${error.message}`);
  }

  return data;
};
