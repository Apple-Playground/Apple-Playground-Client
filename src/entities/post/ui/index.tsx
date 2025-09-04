import Image from "next/image"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card"

export const Post = () => {

  return (
    <Card className="relative overflow-hidden drop-shadow-xl pt-0">
      <div className="aspect-[16/9] relative bg-gray-500">
        <Image
          src={"https://placehold.co/600x400?font=roboto"}
          alt="image"
          fill
          unoptimized
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1 text-ellipsis">React에서 unmount 애니메이션 적용하기</CardTitle>
        <CardDescription className="line-clamp-3 text-ellipsis">React에서 unmount 애니메이션 적용하기</CardDescription>
      </CardHeader>
      <CardContent className="text-xs">
        <p>2025년 9월 4일</p>
      </CardContent>
      <CardFooter className="border-t text-xs">
        <p>이시우</p>
      </CardFooter>
    </Card>
  )
}
