import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card"

export const Post = () => {

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
        <CardTitle className="line-clamp-1 text-ellipsis">React에서 unmount 애니메이션 적용하기</CardTitle>
        <CardDescription className="line-clamp-3 text-ellipsis">React에서 unmount 애니메이션 적용하기</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between text-xs p-0">
        <p>2025년 9월 4일</p>
        <p>이시우</p>
      </CardContent>
    </Card>
  )
}
