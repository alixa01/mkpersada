import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: {
    default: "News",
    template: "%s | PT Mitra Kencana Persada",
  },
};

export default function NewsLayout({
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
