import { auth } from "@/auth";
import SignInButton from "@/entities/signin-button/ui";
import SignOutButton from "@/entities/signout-button/ui";
import UserAvatar from "@/entities/user/ui";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/shared/ui/navigation-menu";
import Image from "next/image";
import ApplePlaygroundLogo from "@/shared/assets/applePlaygroundLogo.png";

export const Header = async () => {
  const session = await auth();

  return (
    <header className="flex justify-between sw-full p-2 bg-primary">
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
      {session?.user ? <SignOutButton /> : <SignInButton />}
      <UserAvatar />
    </header>
  );
};
