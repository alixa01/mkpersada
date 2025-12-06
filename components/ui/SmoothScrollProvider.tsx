"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export default function SmoothScrollProvider() {
  useEffect(() => {
    const isMobile =
      window.innerWidth < 768 ||
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      if (window.lenis) {
        window.lenis.destroy();
        window.lenis = undefined;
      }

      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.overflow = "auto";

      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    window.lenis = lenis;

    let frameId: number;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  return null;
}
