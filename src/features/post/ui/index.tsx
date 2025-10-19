"use client";

import { useState } from "react";
import { toast } from "sonner";
import type { CreatePostInput } from "@/entities/post/model";
import { useCreatePost } from "@/features/post/hooks/useCreatePost";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export const PostForm = () => {

  const [formData, setFormData] = useState<CreatePostInput>({
    title: "",
    content: "",
    description: "",
    tags: [],
  });

  const [tagInput, setTagInput] = useState("");

  const createPostMutation = useCreatePost();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createPostMutation.mutateAsync(formData);
      toast.success("포스트가 성공적으로 생성되었습니다!");
      setFormData({ title: "", content: "", description: "", tags: [] });
      setTagInput("");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "포스트 생성에 실패했습니다.",
      );
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags?.filter((tag) => tag !== tagToRemove) || [],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">새 포스트 작성</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 제목 */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            제목 *
          </label>
          <Input
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="포스트 제목을 입력하세요"
            required
            maxLength={200}
          />
        </div>

        {/* 설명 */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2"
          >
            설명
          </label>
          <Input
            id="description"
            type="text"
            value={formData.description || ""}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                description: e.target.value || null,
              }))
            }
            placeholder="포스트에 대한 간단한 설명을 입력하세요"
            maxLength={500}
          />
        </div>

        {/* 태그 */}
        <div>
          <label htmlFor="tags" className="block text-sm font-medium mb-2">
            태그
          </label>
          <div className="flex gap-2 mb-2">
            <Input
              id="tags"
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="태그를 입력하고 추가 버튼을 클릭하세요"
              maxLength={50}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag();
                }
              }}
            />
            <Button type="button" onClick={addTag} variant="outline">
              추가
            </Button>
          </div>

          {formData.tags && formData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-primary hover:text-primary/80"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 내용 */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-2">
            내용 * (MDX 형식 지원)
          </label>
          <textarea
            id="content"
            value={formData.content}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, content: e.target.value }))
            }
            placeholder="MDX 형식으로 포스트 내용을 작성하세요..."
            required
            maxLength={50000}
            rows={20}
            className="w-full p-3 border border-input rounded-md resize-vertical font-mono text-sm"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Markdown 문법을 사용할 수 있습니다. 제목, 링크, 이미지, 코드 블록
            등을 활용해보세요.
          </p>
        </div>

        {/* 제출 버튼 */}
        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={createPostMutation.isPending}
            className="px-8"
          >
            {createPostMutation.isPending ? "생성 중..." : "포스트 생성"}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setFormData({
                title: "",
                content: "",
                description: "",
                tags: [],
              });
              setTagInput("");
            }}
          >
            초기화
          </Button>
        </div>
      </form>
    </div>
  );
};
