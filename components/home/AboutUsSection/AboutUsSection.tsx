"use client";

import { motion, Variants } from "framer-motion";

const statsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const statItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.015,
    },
  },
};

const textWord: Variants = {
  hidden: { opacity: 0.2, y: 2 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const text =
  "PT Mitra Kencana Persada (MKP) is a trusted provider of Artificial Lift Systems and Well Services for the oil, gas, and geothermal industries. Founded in 2000 and fully operational since 2018, MKP has collaborated with numerous partners, offering rental, services, and material supply. The company is firmly committed to QHSE standards, supported by certifications ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018.";

const words = text.split(" ");

export default function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="relative min-h-screen bg-gradient-to-bl from-black to-[#2A5B8C] overflow-hidden ">
      {/* main content */}
      <div className="relative z-10 flex flex-col justify-between md:flex-row gap-10 md:gap-16 lg:py-16 py-10 px-6 lg:px-8 mx-auto max-w-7xl">
        {/* left area */}
        <div className="w-full md:w-[60%] flex flex-col">
          {/* header */}
          <h2 className="mt-0 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight md:leading-[1.1] text-sub-text">
            About Us
          </h2>

          {/* sub text */}
          <motion.p
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 sm:mt-8 text-[18px] sm:text-[20px] md:text-[22px] leading-[1.55] text-sub-text/95 w-full max-w-[950px] text-justify">
            {words.map((word, index) => (
              <motion.span key={index} variants={textWord}>
                {word}
                {index < words.length - 1 && " "}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* right area: stats */}
        <motion.div
          variants={statsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-[40%] flex flex-col gap-5 sm:gap-6 md:gap-7 mx-auto md:items-end">
          {/* years */}
          <motion.div
            variants={statItem}
            animate={{
              scale: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4 sm:px-6 sm:py-5 shadow-[0_18px_50px_rgba(15,23,42,0.55)]">
            <h1 className="leading-none text-[56px] sm:text-[72px] md:text-[80px] font-semibold text-white">
              25+
            </h1>
            <h2 className="mt-1 text-[18px] sm:text-[20px] md:text-[22px] font-medium text-sub-text">
              years experience
            </h2>
            <p className="mt-1 text-[13px] sm:text-[14px] text-white/75">
              in energy sector
            </p>
          </motion.div>

          {/* projects */}
          <motion.div
            variants={statItem}
            animate={{
              scale: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4 sm:px-6 sm:py-5 shadow-[0_18px_50px_rgba(15,23,42,0.45)]">
            <h1 className="leading-none text-[56px] sm:text-[72px] md:text-[80px] font-semibold text-white">
              17+
            </h1>
            <h2 className="mt-1 text-[18px] sm:text-[20px] md:text-[22px] font-medium text-sub-text">
              existing projects
            </h2>
            <p className="mt-1 text-[13px] sm:text-[14px] text-white/75">
              in operation
            </p>
          </motion.div>

          {/* regions */}
          <motion.div
            variants={statItem}
            animate={{
              scale: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4 sm:px-6 sm:py-5 shadow-[0_18px_50px_rgba(15,23,42,0.35)]">
            <h1 className="leading-none text-[56px] sm:text-[72px] md:text-[80px] font-semibold text-white">
              5+
            </h1>
            <h2 className="mt-1 text-[18px] sm:text-[20px] md:text-[22px] font-medium text-sub-text">
              active regions
            </h2>
            <p className="mt-1 text-[13px] sm:text-[14px] text-white/75">
              across Indonesia
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* grid overlay */}
      <div className="absolute inset-0 bg-grid-white-soft opacity-40 pointer-events-none [mask-image:radial-gradient(circle,black_60%,transparent_100%)]" />

      {/* blob shapes */}
      <div className="pointer-events-none absolute -right-16 -top-16 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] bg-shape/15 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] bg-shape/15 blur-3xl rounded-full" />
    </section>
  );
}
