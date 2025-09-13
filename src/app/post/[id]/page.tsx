import { getPostById } from "@/entities/post/api/getPostById";

type Params = Promise<{ id: string }>;

export default async function Detail({ params }: { params: Params }) {
  const { id } = await params;
  const post = await getPostById(Number(id));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.created_at}</p>
      <p>{post.description}</p>
      <p>{post.hearts}</p>
      <p>{post.tags}</p>
      <p>{post.users.name}</p>
    </div>
  );
}
