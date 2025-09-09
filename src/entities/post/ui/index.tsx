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
    <Card className="flex p-4">
      <div className="aspect-[16/9] relative bg-black/85 rounded-2xl overflow-hidden">
        <Image
          src={"https://placehold.co/600x400?font=roboto"}
          alt="image"
          fill
          unoptimized
          className="object-cover"
        />
      </div>
      <CardHeader className="p-2">
        <CardTitle className="line-clamp-1 text-ellipsis">
          {post.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-ellipsis">
          {post.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between p-2 text-xs">
        <span>{post.created_at.split("T")[0]}</span>
        <span>{post.author_id}</span>
      </CardContent>
    </Card>
  );
};

export const CarouselPost = ({ post }: { post: PostType }) => {
  return (
    <Card className="flex p-0 aspect-[16/9] relative overflow-hidden">
      <Image
        src={"https://placehold.co/600x400?font=roboto"}
        alt="image"
        fill
        unoptimized
        className="object-cover"
      />
      <div className="bg-black/40 absolute w-full h-full"></div>
      <div className="absolute p-2 w-full bottom-0">
        <CardHeader className="p-2">
          <CardTitle className="line-clamp-1 text-ellipsis">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-ellipsis">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between p-2 text-xs">
          <span>{post.created_at.split("T")[0]}</span>
          <span>{post.author_id}</span>
        </CardContent>
      </div>
    </Card>
  );
}