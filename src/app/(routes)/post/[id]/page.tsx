import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getPostById } from "@/entities/post/api/getPostById";
import PostDetail from "@/entities/post/ui/postDetail";
import { MDXContent } from "@/shared/ui/mdx-content";

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

  const queryClient = new QueryClient();

  const post = await queryClient.fetchQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(Number(id)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetail postId={id}>
        <MDXContent content={post.content} />
      </PostDetail>
    </HydrationBoundary>
  );
}
