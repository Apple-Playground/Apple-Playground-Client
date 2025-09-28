import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import { Skeleton } from "./skeleton";

const components = {
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <Image
      src={src || ""}
      alt={alt || ""}
      width={800}
      height={400}
      className="rounded-lg max-w-full h-auto my-6 shadow-md"
    />
  ),
};

interface MDXContentProps {
  content: string;
  className?: string;
}

export const MDXContent = ({ content, className = "" }: MDXContentProps) => {
  return (
    <Suspense
      fallback={
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-32 w-full" />
        </div>
      }
    >
      <article className={`prose prose-neutral dark:prose-invert max-w-none ${className}`}>
        <MDXRemote source={content} components={components} />
      </article>
    </Suspense>
  );
};
