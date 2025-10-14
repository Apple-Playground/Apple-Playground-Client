import { Suspense } from "react";
import { getPosts } from "@/entities/post/api/getPosts";
import { Posts } from "@/widgets/posts/ui";

export default function Page() {
  const posts = getPosts();
  return (
    <main className="w-full min-h-screen p-8">
      <Suspense fallback={<div>Loading...</div>}>
        <Posts posts={posts} />
      </Suspense>
    </main>
  );
}
