import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { AppleIcon, ChevronUp } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";
import UserAvatar from "@/entities/user/ui";
import { DropdownMenu } from "@/shared/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/sidebar";
import { sideBarList } from "../model/app-sidebar-list";

/**
 * @deprecated
 */
export const AppSidebar = async () => {
  const session = await auth();

  return (
    <Sidebar>
      <SidebarHeader className="pb-2 border-b-2">
        <Link href={"/main"} className="flex items-center gap-4 p-2">
          <div className="rounded-2xl">
            <AppleIcon width={24} height={24} />
          </div>
          <h1 className="text-primary font-sfPro font-bold text-lg">
            Apple Playground
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="gap-8">
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarList.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <UserAvatar /> {session?.user.name}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>My Page</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
