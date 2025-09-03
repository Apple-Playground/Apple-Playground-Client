import SignInButton from "@/entities/signin-button/ui"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/shared/ui/navigation-menu"

export const Header = () => {
  return (
    <header className="w-full bg-primary p-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-foreground">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <SignInButton />
    </header>
  )
}
