"use client";

import { ArrowRight, Mouse } from "lucide-react";
import { delay, motion, Variants } from "framer-motion";

const scrollContainerVariants: Variants = {
  animate: {
    y: [0, -6, 0],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const mouseVariants: Variants = {
  animate: {
    y: [0, -4, 0],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// fade down (inv bar)
const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// fade up (header, subtext)
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", delay },
  }),
};

// slace + fade (button)
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-[url('/hero/hero-bg.jpg')] bg-cover bg-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#194670]/50 to-[#194670]"></div>

      {/* content */}
      <div className="relative z-10 pt-[76px] flex flex-col items-center h-full px-4 sm:px-6 md:px-8">
        {/* innovating bar */}
        <motion.span
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center w-full max-w-[250px] sm:max-w-[270px] md:max-w-[300px] h-[32px] sm:h-[34px] md:h-[38px] mt-[45px] px-4 sm:px-5 py-2.5 rounded-full text-[10px] sm:text-[11px] md:text-[12px] font-semibold text-white tracking-[0.12px] bg-white/20 text-center border border-white/65 drop-shadow-soft backdrop-blur-[20px]">
          <p>Innovating Oil & Gas Services Since 2000</p>
        </motion.span>

        {/* content header */}
        <motion.h1
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="font-bold text-[36px] sm:text-[48px] md:text-[60px] xl:text-[72px] text-center text-white pt-[40px] sm:pt-[50px] md:pt-[60px] xl:pt-[65px] leading-tight sm:leading-tight md:leading-tight xl:leading-[80px] drop-shadow-soft px-4">
          PT Mitra Kencana Persada
        </motion.h1>

        {/* sub text */}
        <motion.p
          variants={fadeUp}
          custom={0.35}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[600px] xl:max-w-[720px] mt-6 sm:mt-8 md:mt-10 font-medium sm:font-semibold text-[14px] sm:text-[15px] md:text-[16px] xl:text-[18px] leading-6 sm:leading-6 md:leading-7 text-white/90 text-center drop-shadow-soft">
          PT Mitra Kencana Persada (MKP) is an experienced provider of
          Artificial Lift System and Well Surveillance Services for oil and gas
          industry including in geothermal sector. Our Scope of activities
          consists of providing rental and services include supply of goods and
          materials.
        </motion.p>

        {/* get started button */}
        <motion.button
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="mt-8 sm:mt-10 md:mt-12 xl:mt-[65px] w-[145px] sm:w-[155px] md:w-[160px] xl:w-[165px] h-10 sm:h-[42px] md:h-11 flex flex-row items-center justify-center gap-1 sm:gap-1.5 rounded-full bg-white drop-shadow-lg text-primary text-[14px] sm:text-[15px] md:text-[16px] font-semibold hover:bg-white/95 transition-colors">
          Get Started <ArrowRight size={18} className="sm:w-5 sm:h-5" />
        </motion.button>

        {/* scroll cue */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 flex items-center flex-col gap-2"
          variants={scrollContainerVariants}
          animate="animate">
          <span className="font-medium text-[10px] sm:text-xs text-white/75">
            Scroll to explore
          </span>
          <motion.div variants={mouseVariants} animate="animate">
            <Mouse className="opacity-75 w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
