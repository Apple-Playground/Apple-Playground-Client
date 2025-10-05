import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { createPostSchema } from "@/entities/post/model";
import { createPost } from "@/features/post/api/createPost";

/**
 * POST /api/posts - 새 포스트 생성
 */
export async function POST(request: NextRequest) {
  try {
    // 인증 확인
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "인증이 필요합니다." },
        { status: 401 },
      );
    }

    // 요청 본문 파싱
    const body = await request.json();

    // 입력 데이터 유효성 검증
    const validatedData = createPostSchema.parse(body);

    // 포스트 생성
    const newPost = await createPost(validatedData, session.user.id);

    return NextResponse.json(
      {
        message: "포스트가 성공적으로 생성되었습니다.",
        post: newPost,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/posts error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "입력 데이터가 유효하지 않습니다.",
          details: error.issues,
        },
        { status: 400 },
      );
    }

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
