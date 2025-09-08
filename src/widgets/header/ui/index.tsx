import Image from "next/image";
import { auth } from "@/auth";
import SignOutButton from "@/entities/signout-button/ui";
import UserAvatar from "@/entities/user/ui";
import ApplePlaygroundLogo from "@/shared/assets/applePlaygroundLogo.png";
import { ModeToggle } from "@/shared/ui/mode-togle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/shared/ui/navigation-menu";

export const Header = async () => {
  const session = await auth();

  return (
    <header className="flex justify-between w-full p-2 bg-primary fixed top-0 z-10">
      <h1 className="flex items-center gap-2 text-xl font-bold text-background">
        <Image src={ApplePlaygroundLogo} alt="logo" width={32} height={32} />
      </h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-background">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        {session?.user && <SignOutButton />}
        <UserAvatar />
        <ModeToggle />
      </div>
    </header>
  );
};
