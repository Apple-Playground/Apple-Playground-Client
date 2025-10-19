import { SidebarProvider } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/widgets/app-sidebar/ui";
import { Header } from "@/widgets/header/ui";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* <SidebarProvider> */}
      {/* <AppSidebar /> */}
      <div className="flex flex-col w-full bg-primary-foreground ">
        <Header />
        {children}
      </div>
      {/* </SidebarProvider> */}
    </section>
  );
}
