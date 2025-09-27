import { Calendar, Heart, Tag } from "lucide-react";
import { getPostById } from "@/entities/post/api/getPostById";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { MDXContent } from "@/shared/ui/mdx-content";
import { Separator } from "@/shared/ui/separator";

type Params = Promise<{ id: string }>;

export default async function Detail({ params }: { params: Params }) {
  const { id } = await params;
  const post = await getPostById(Number(id));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-foreground leading-tight">
          {post.title}
        </h1>

        {post.description && (
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {post.description}
          </p>
        )}

        {/* Author and Meta Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={post.users.image || ""}
                alt={post.users.name || ""}
              />
              <AvatarFallback>
                {post.users.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium text-foreground">
              {post.users.name}
            </span>
          </div>

          <Separator orientation="vertical" className="h-6" />

          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.created_at)}</span>
          </div>

          {post.hearts !== null && (
            <>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="h-4 w-4" />
                <span>{post.hearts}</span>
              </div>
            </>
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-2 mb-6">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </header>

      <Separator className="mb-8" />

      {/* MDX Content */}
      <main>
        <MDXContent content={post.content} />
      </main>
    </div>
  );
}
