import { redirect } from "next/navigation";
import { signIn, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import { Button } from "@/shared/ui/button";
import Github_Logo from "@/shared/assets/github.svg";
import Image from "next/image";

const SIGNIN_ERROR_URL = "/error";

export default async function SignInButton() {
  return (
    <div>
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            try {
              await signIn(provider.id, {
                redirectTo: "/",
              });
            } catch (error) {
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
              }
              throw error;
            }
          }}
        >
          <Button type="submit" variant={"default"} className="cursor-pointer">
            <Image src={Github_Logo} alt="github sign-in" className="size-5" />
            <span>{provider.name}</span>
          </Button>
        </form>
      ))}
    </div>
  );
}
