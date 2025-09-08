import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import type { Post as PostType } from "../model";

export const Post = ({ post }: { post: PostType }) => {
  return (
    <Card className="relative overflow-hidden drop-shadow-xl p-4">
      <div className="aspect-[16/9] relative bg-black/85 rounded-2xl overflow-hidden">
        <Image
          src={"https://placehold.co/600x400?font=roboto"}
          alt="image"
          fill
          unoptimized
          className="object-cover"
        />
      </div>
      <CardHeader className="p-0">
        <CardTitle className="line-clamp-1 text-ellipsis">
          {post.title}
        </CardTitle>
        <CardDescription className="line-clamp-3 text-ellipsis">
          {post.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between text-xs p-0">
        <p>{post.created_at}</p>
        <p>{post.author_id}</p>
      </CardContent>
    </Card>
  );
};
