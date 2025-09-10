import { Suspense } from "react";
import { getPosts } from "@/entities/post/api/getPosts";
import { Header } from "@/widgets/header/ui";
import { Posts } from "@/widgets/posts/ui";

export default function Main() {
  const posts = getPosts();
  return (
    <main className="w-full min-h-screen bg-primary-foreground p-8">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Posts posts={posts} />
      </Suspense>
    </main>
  );
}
