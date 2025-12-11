import AdminSidebar from "@/components/admin/AdminSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata = {
  title: {
    default: "Admin",
    template: "%s | PT Mitra Kencana Persada",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full px-5 mt-3">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
