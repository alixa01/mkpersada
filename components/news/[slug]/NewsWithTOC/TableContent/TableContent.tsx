"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePinSection } from "@/hooks/usePinSection";

type Heading = {
  id: string;
  text: string;
};

type LenisInstance = {
  scrollTo: (
    target: HTMLElement | number | string,
    options?: { offset?: number }
  ) => void;
};

type LenisWindow = Window & {
  lenis?: LenisInstance;
};

function scrollSmooth(id: string) {
  if (typeof window === "undefined") return;

  const target = document.getElementById(id);
  if (!target) return;

  const yOffset = -80; // sesuaikan dengan tinggi navbar

  const win = window as LenisWindow;
  if (win.lenis) {
    win.lenis.scrollTo(target, { offset: yOffset });
    return;
  }

  const y = target.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

export default function TableContent({ headings }: { headings: Heading[] }) {
  const pinRef = usePinSection();
  const [activeId, setActiveId] = useState<string | null>(
    headings[0]?.id ?? null
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // area "aktif" kira-kira di tengah layar
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div ref={pinRef} className="mt-6 h-full">
      <h1 className="text-base font-semibold mb-4 text-slate-900">
        ON THIS PAGE
      </h1>

      <nav className="w-full">
        {headings.map((h) => {
          const isActive = activeId === h.id;

          return (
            <div
              key={h.id}
              className={`flex flex-row items-center space-x-2 mb-2 py-1 rounded-md group transition duration-200 ${
                isActive ? "bg-slate-700" : "hover:bg-slate-600"
              }`}>
              <ChevronRight
                className={`w-[6%] transition duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-slate-600 group-hover:text-white"
                }`}
              />
              <Link
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollSmooth(h.id);
                }}
                className={`w-[94%] h-full text-sm transition duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-slate-600 group-hover:text-white"
                }`}>
                {h.text}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
