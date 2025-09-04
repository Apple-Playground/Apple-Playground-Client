import { signOut } from "@/auth";
import { Button } from "@/shared/ui/button";

export default function SignOutButton() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit" className="cursor-pointer">
          Sign out
        </Button>
      </form>
    </div>
  );
}
