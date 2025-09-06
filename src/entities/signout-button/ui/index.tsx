import { signOut } from "@/auth";
import { Button } from "@/shared/ui/button";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default function SignOutButton() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          try {
            await signOut({ redirectTo: "/" });
            toast.success("Sign out success!");
          } catch (error) {
            if (error instanceof AuthError) {
              toast.error("Sign out failed!");
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
