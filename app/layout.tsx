import type { ReactNode } from "react";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "PT Mitra Kencana Persada",
    template: "%s | PT Mitra Kencana Persada",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`relative overflow-hidden w-screen ${montserrat.className}`}>
        <SmoothScrollProvider />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
