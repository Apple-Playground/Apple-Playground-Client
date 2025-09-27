import { Button } from "@/shared/ui/button";
import { signOutAction } from "../api/signout-action";

export default function SignOutButton() {
  return (
    <div>
      <form action={signOutAction}>
        <Button type="submit" className="cursor-pointer">
          Sign out
        </Button>
      </form>
    </div>
  );
}
