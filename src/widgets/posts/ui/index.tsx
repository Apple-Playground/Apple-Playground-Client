"use client";

import Autoplay from "embla-carousel-autoplay";
import { use } from "react";
import type { Post as PostType } from "@/entities/post/model";
import { CarouselPost, Post } from "@/entities/post/ui";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";

type PostsProps = {
  posts: Promise<PostType[]>;
};

export const Posts = ({ posts }: PostsProps) => {
  const postsData = use(posts);
  return (
    <div className="flex flex-col w-full mt-2 gap-4">
      <h2 className="text-spring-green-55 font-pixel font-bold text-2xl">
        Featured
      </h2>
      <Carousel
        className="max-w-2xl"
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 2000 })]}
      >
        <CarouselContent>
          {postsData.map((post) => (
            <CarouselItem key={post.id}>
              <CarouselPost post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <h2 className="text-spring-green-55 font-pixel font-bold text-2xl">
        Posts
      </h2>
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {postsData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
