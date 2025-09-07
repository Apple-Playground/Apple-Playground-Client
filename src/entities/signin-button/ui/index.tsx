import Image from "next/image";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { toast } from "sonner";
import { providerMap, signIn } from "@/auth";
import Github_Logo from "@/shared/assets/github.svg";
import { Button } from "@/shared/ui/button";

export default async function SignInButton() {
  return (
    <div>
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            try {
              await signIn(provider.id, { redirectTo: "/main" });
              toast.success("Sign in success!");
            } catch (error) {
              if (error instanceof AuthError) {
                toast.error("Sign in failed!");
                return redirect(`/error?error=${error.type}`);
              }
              throw error;
            }
          }}
        >
          <Button
            type="submit"
            variant={"default"}
            className="cursor-pointer px-[33px] py-0.25 bg-[#1F2937] hover:bg-[#101317]"
          >
            <Image src={Github_Logo} alt="github sign-in" className="size-5" />
            <span className="font-semibold">{provider.name}으로 로그인</span>
          </Button>
        </form>
      ))}
    </div>
  );
}
