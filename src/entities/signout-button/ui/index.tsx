import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { signOut } from "@/auth";
import { Button } from "@/shared/ui/button";

export default function SignOutButton() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          try {
            await signOut({ redirectTo: "/" });
          } catch (error) {
            if (error instanceof AuthError) {
              return redirect(`/error?error=${error.type}`);
            }
            throw error;
          }
        }}
      >
        <Button type="submit" className="cursor-pointer">
          Sign out
        </Button>
      </form>
    </div>
  );
}
