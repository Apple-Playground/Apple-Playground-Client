import { ModeToggle } from "@/shared/ui/mode-togle";
import { SidebarTrigger } from "@/shared/ui/sidebar";

export const Header = async () => {
  return (
    <header className="flex justify-between items-center pb-2 border-b-2">
      <SidebarTrigger />
      <h1 className="font-orbitron font-bold text-4xl">Home</h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>
    </header>
  );
};
