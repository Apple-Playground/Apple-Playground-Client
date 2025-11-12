import { Header } from "@/widgets/header/ui";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col w-full bg-primary-foreground ">
      <Header />
      {children}
    </section>
  );
}
