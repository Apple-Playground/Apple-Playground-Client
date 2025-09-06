import { Header } from "@/widgets/header/ui";
import { Posts } from "@/widgets/posts/ui";

export default function Main() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-8 px-4">
        <Posts />
      </main>
    </>
  );
}
