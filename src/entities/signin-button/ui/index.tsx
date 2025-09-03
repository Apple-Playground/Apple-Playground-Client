import { redirect } from "next/navigation"
import { signIn, providerMap } from "@/auth"
import { AuthError } from "next-auth"
import { Button } from "@/shared/ui/button";

const SIGNIN_ERROR_URL = "/error"

export default async function SignInButton() {
  return (
    <div>
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server"
            try {
              await signIn(provider.id, {
                redirectTo: "/",
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
