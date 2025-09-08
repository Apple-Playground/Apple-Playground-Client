"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import Github_Logo from "@/shared/assets/github.svg";
import { Button } from "@/shared/ui/button";

interface Provider {
  id: string;
  name: string;
}

export default function SignInButton({ providers }: { providers: Provider[] }) {
  const handleSignIn = (providerId: string, providerName: string) => {
    const signInPromise = signIn(providerId, { redirectTo: "/main" });

    toast.promise(signInPromise, {
      loading: `${providerName}으로 로그인 중...`,
      success: "로그인 성공!",
      error: "로그인에 실패했습니다. 다시 시도해주세요.",
    });
  };

  return (
    <div>
      {providers.map((provider) => (
        <Button
          key={provider.id}
          onClick={() => handleSignIn(provider.id, provider.name)}
          variant={"default"}
          className="cursor-pointer px-[33px] py-0.25 bg-[#1F2937] hover:bg-[#101317]"
        >
          <Image src={Github_Logo} alt="github sign-in" className="size-5" />
          <span className="font-semibold">{provider.name}으로 로그인</span>
        </Button>
      ))}
    </div>
  );
}
