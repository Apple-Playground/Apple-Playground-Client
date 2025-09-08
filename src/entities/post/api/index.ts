import { createSupabase } from "@/client";

export const getPosts = async () => {
  const supabase = await createSupabase();

  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    console.error("Error fetching posts:", error);
    throw new Error("게시글을 불러오는 데 실패했습니다.");
  }

  return data;
};
