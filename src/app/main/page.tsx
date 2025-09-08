import { Suspense } from "react";
import { getPosts } from "@/entities/post/api";
import { Header } from "@/widgets/header/ui";
import { Posts } from "@/widgets/posts/ui";

export default function Main() {
  const posts = getPosts();
  return (
    <>
      <Header />
      <main className="min-h-screen bg-grey-10 py-8 px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Posts posts={posts} />
        </Suspense>
      </main>
    </>
  );
}
