import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import { Skeleton } from "./skeleton";

/*** MDX 컴포넌트들을 정의 */
const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-bold mb-6 text-foreground leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-semibold mb-4 text-foreground leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl font-semibold mb-3 text-foreground leading-tight">
      {children}
    </h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-xl font-medium mb-2 text-foreground leading-tight">
      {children}
    </h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 text-muted-foreground text-base leading-relaxed">
      {children}
    </p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="mb-4 ml-6 list-disc text-muted-foreground">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="mb-4 ml-6 list-decimal text-muted-foreground">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-1 leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-muted/60 px-2 py-1 rounded text-sm font-mono text-foreground border">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-muted/30 p-4 rounded-lg overflow-x-auto mb-6 text-sm border shadow-sm">
      <code className="font-mono text-foreground">{children}</code>
    </pre>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 underline transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <Image
      src={src || ""}
      alt={alt || ""}
      width={800}
      height={400}
      className="rounded-lg max-w-full h-auto my-6 shadow-md"
    />
  ),
  hr: () => <hr className="my-8 border-border" />,
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border-collapse border border-border">
        {children}
      </table>
    </div>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border border-border px-4 py-2 bg-muted font-semibold text-left">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border border-border px-4 py-2">{children}</td>
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
      <article className={`mdx-content ${className}`}>
        <MDXRemote source={content} components={components} />
      </article>
    </Suspense>
  );
};
