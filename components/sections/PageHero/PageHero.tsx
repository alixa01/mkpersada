"use client";
import { usePinSection } from "@/hooks/usePinSection";
import { motion } from "framer-motion";

export default function PageHero({
  title,
  subtext,
}: {
  title?: string;
  subtext?: string;
}) {
  const pinRef = usePinSection();

  return (
    <div
      ref={pinRef}
      className="w-full h-[320px] relative overflow-hidden bg-[url('/hero/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center flex-col pt-[75px]">
      {/* text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex items-center justify-center text-sub-text text-3xl md:text-4xl  tracking-wide font-extrabold z-10">
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="flex items-center justify-center text-sub-text/90 text-xs md:text-sm tracking-wide font-normal z-10 max-w-xs text-center md:max-w-md">
        {subtext}
      </motion.p>

      {/* overlay */}
      <div className="w-full absolute inset-0 bg-gradient-to-t from-[#194670]/50 to-[#194670]"></div>
    </div>
  );
}
