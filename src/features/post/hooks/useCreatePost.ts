import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreatePostInput } from "@/entities/post/model";

interface CreatePostResponse {
  message: string;
  post: {
    id: number;
    title: string;
    content: string;
    description: string | null;
    tags: string[] | null;
    author_id: string;
    created_at: string;
    hearts: number | null;
  };
}

/**
 * 새 포스트를 생성하는 API 호출 함수
 */
const createPostAPI = async (
  postData: CreatePostInput,
): Promise<CreatePostResponse> => {
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "포스트 생성에 실패했습니다.");
  }

  return response.json();
};

/**
 * 포스트 생성을 위한 React Query 훅
 */
export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPostAPI,
    onSuccess: () => {
      // 포스트 목록 쿼리를 무효화하여 새로고침
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.error("포스트 생성 오류:", error);
    },
  });
};
