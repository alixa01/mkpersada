import type { ReactNode } from "react";
import Navbar from "./components/Navbar/navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
// 300 → Light

// 400 → Regular

// 500 → Medium

// 600 → SemiBold

// 700 → Bold

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <main className="pt-20 h-[2000px]">{children}</main>
      </body>
    </html>
  );
}
