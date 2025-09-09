import { SidebarProvider, SidebarTrigger } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/widgets/app-sidebar/ui";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        {children}
      </SidebarProvider>
    </section>
  );
}