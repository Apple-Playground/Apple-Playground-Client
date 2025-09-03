import { redirect } from "next/navigation"
import { signIn, providerMap } from "@/auth"
import { AuthError } from "next-auth"
import { Button } from "@/components/ui/button";

const SIGNIN_ERROR_URL = "/error"

export default async function SignInPage(props: { searchParams: Promise<{ callbackUrl: string | undefined }> }) {
  const params = await props.searchParams;
  return (
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server"
            try {
              await signIn(provider.id, {
                redirectTo: params.callbackUrl ?? "",
              })
            } catch (error) {
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
              }
              throw error
            }
          }}
        >
          <Button type="submit" variant={"default"}>
            <span>Sign in with {provider.name}</span>
          </Button>
        </form>
      ))}
    </div>
  )
}
