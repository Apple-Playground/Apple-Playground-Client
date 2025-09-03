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

export const Header = async () => {
  const session = await auth();

  return (
    <header className="flex justify-between sw-full bg-primary p-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-background">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        {session?.user ? <SignOutButton /> : <SignInButton />}
        <UserAvatar />
      </NavigationMenu>
    </header>
  );
};
