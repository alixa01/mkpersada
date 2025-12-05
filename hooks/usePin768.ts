"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function usePin768() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top top",
      end: "bottom center",
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        gsap.to(ref.current, { marginTop: 40, duration: 0.3 });
      },
      onLeave: () => {
        gsap.to(ref.current, { marginTop: 0, duration: 0.3 });
      },
      onEnterBack: () => {
        gsap.to(ref.current, { marginTop: 40, duration: 0.3 });
      },
      onLeaveBack: () => {
        gsap.to(ref.current, { marginTop: 0, duration: 0.3 });
      },
    });
  }, []);

  return ref;
}
