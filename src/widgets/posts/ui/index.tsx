"use client";

import Autoplay from "embla-carousel-autoplay";
import { use } from "react";
import type { Post as PostType } from "@/entities/post/model";

import { Post } from "@/entities/post/ui";
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
    <>
      <h2 className="text-spring-green-55 font-pixel font-bold text-2xl">
        Featured
      </h2>
      {/* <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 10000 })]}>
        <CarouselPrevious />
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <Post />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Post />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Post />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Post />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Post />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel> */}
      <div className="grid mt-8 gap-8 ">
        {postsData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
