import { AppleIcon } from "lucide-react";
import SignInButton from "@/entities/signin-button/ui";
import { BubbleBackground } from "@/shared/ui/bubble";

export default function Home() {
  return (
    <BubbleBackground className="flex justify-center items-center bg-black min-h-screen py-8 px-4">
      <div className="flex flex-col items-center justify-center max-w-md text-white text-center z-20">
        <div className="p-4 mb-8 rounded-2xl bg-gray-800">
          <AppleIcon width={64} height={64} />
        </div>
        <h1 className="mb-4 font-pixel font-bold text-6xl">
          Apple Playground
        </h1>
        <h3 className="mb-10 text-gray-500">
          우리들의 놀이터
        </h3>
        <SignInButton />
      </div>
    </BubbleBackground>
  );
}
