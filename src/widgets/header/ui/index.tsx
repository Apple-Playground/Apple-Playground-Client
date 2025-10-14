import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { AppleIcon } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";
import SignOutButton from "@/entities/signout-button/ui";
import UserAvatar from "@/entities/user/ui";
import { Button } from "@/shared/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { ModeToggle } from "@/shared/ui/mode-togle";
import { SidebarTrigger } from "@/shared/ui/sidebar";

export const Header = async () => {
  const session = await auth();

  return (
    <header className="flex justify-between items-center mr-2 ml-2 mt-2 pb-2 border-b-2">
      {/* <SidebarTrigger className="cursor-pointer" /> */}
      <Link href={"/main"} className="flex items-center gap-4 p-2">
        <div className="rounded-2xl">
          <AppleIcon width={36} height={36} />
        </div>
        <h1 className="font-sfPro font-bold text-4xl">Apple Playground</h1>
      </Link>

      <div className="flex items-center gap-4">
        <Button>
          <Link href={"/write"}>새 글 작성</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserAvatar />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{session?.user.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem><ModeToggle /></DropdownMenuItem>
            <DropdownMenuItem><SignOutButton /></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
