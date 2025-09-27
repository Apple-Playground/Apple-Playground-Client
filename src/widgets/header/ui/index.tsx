"use client"

import { usePathname } from "next/navigation";
import { ModeToggle } from "@/shared/ui/mode-togle";
import { SidebarTrigger } from "@/shared/ui/sidebar";

export const Header = () => {
  const pageName = usePathname();
  console.log(pageName);
  return (
    <header className="flex justify-between items-center mr-2 ml-2 mt-2 pb-2 border-b-2">
      <SidebarTrigger className="cursor-pointer" />
      <h1 className="font-orbitron font-bold text-4xl">{pageName}</h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>
    </header>
  );
};
