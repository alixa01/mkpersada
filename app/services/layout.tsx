import Navbar from "@/components/layout/Navbar";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar variant="fadeOut" />
      {children}
    </>
  );
}
