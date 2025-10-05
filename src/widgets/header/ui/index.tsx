"use client";

import { usePathname } from "next/navigation";
import SignOutButton from "@/entities/signout-button/ui";
import { ModeToggle } from "@/shared/ui/mode-togle";
import { SidebarTrigger } from "@/shared/ui/sidebar";

export const Header = () => {
  const pageName = usePathname();

  return (
    <header className="flex justify-between items-center mr-2 ml-2 mt-2 pb-2 border-b-2">
      <SidebarTrigger className="cursor-pointer" />
      <h1 className="font-orbitron font-bold text-4xl">{pageName.split("/")[1]}</h1>
      <div className="flex items-center gap-4">
        <SignOutButton />
        <ModeToggle />
      </div>
    </header>
  );
};
