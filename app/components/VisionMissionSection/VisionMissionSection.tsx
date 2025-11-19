"use client";

import { motion, Variants } from "framer-motion";

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const containerLineVision: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const containerLineMission: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const containerHeader: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.8 } },
};

const expandIn: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    originY: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const mission = [
  "Concern on customer's satisfaction",
  "Empowerment of resources",
  "Comply with any applied laws and regulations",
  "Improvement in health, safety and environment",
];

export default function VisionMissionSection() {
  return (
    <section
      id="vision-mission"
      className="relative overflow-hidden bg-gradient-to-br from-[#DDE8F5] via-[#C6D6EA] to-[#E9F1F9] min-h-[360px] md:h-[680px] px-4 sm:px-6 py-8 md:py-0">
      <div className="h-full w-full flex flex-col">
        {/* vision */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col md:flex-row md:h-[30%] justify-center mb-8 md:mb-0">
          <motion.div
            variants={containerHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:max-w-[30%] flex items-center justify-center md:justify-center mb-4 md:mb-0">
            <motion.div
              variants={scaleIn}
              className="flex justify-center items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[48px] font-extrabold text-[#0F3556]">
                vision
              </h1>
            </motion.div>
          </motion.div>

          {/* dots line vision - hidden on mobile */}
          <div className="hidden md:flex h-full w-full md:max-w-[7%]">
            <motion.div
              variants={containerLineVision}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="h-full w-full relative flex justify-center items-center">
              <motion.div
                variants={expandIn}
                className="h-full origin-top w-[2px] bg-[#2E4A78]/40"></motion.div>
              <motion.div
                variants={scaleIn}
                className="absolute w-4 h-4 rounded-full bg-[#0F3556] shadow-[0_0_4px_rgba(44,74,120,0.35)]"></motion.div>
            </motion.div>
          </div>

          {/* point vision*/}
          <div className="w-full md:max-w-[60%] flex justify-center">
            <motion.div
              variants={fadeIn}
              className="flex items-center justify-center text-center md:text-left px-2 sm:px-4">
              <p className="text-lg sm:text-xl md:text-2xl xl:text-[28px] font-semibold leading-relaxed md:leading-[42px] text-[#2E4A78]">
                To be the market leader company supplies and services for Oil,
                Gas, and Geothermal in Indonesia
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* mission */}
        <div className="flex flex-col md:flex-row md:h-[70%] justify-center mt-8 md:mt-0">
          {/* header */}
          <motion.div
            variants={containerHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:max-w-[30%] flex items-center justify-center md:justify-center mb-6 md:mb-0">
            <motion.div
              variants={scaleIn}
              className="flex justify-center items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[48px] font-extrabold text-[#0F3556]">
                mission
              </h1>
            </motion.div>
          </motion.div>

          {/* dots missions - hidden on mobile */}
          <div className="hidden md:flex h-full w-full md:max-w-[7%]">
            <motion.div
              variants={containerLineMission}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="h-full w-full relative flex justify-center items-center">
              <motion.div
                variants={expandIn}
                className="h-full origin-top w-[2px] bg-[#2E4A78]/40"></motion.div>
              <ul className="h-full absolute inset-0 flex flex-col justify-around items-center py-8">
                {mission.map((_, index) => (
                  <motion.li
                    variants={scaleIn}
                    key={`dot-${index}`}
                    className="w-4 h-4 rounded-full bg-[#0F3556] shadow-[0_0_4px_rgba(44,74,120,0.35)]"></motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full md:max-w-[60%] flex justify-center">
            <ul className="flex flex-col justify-around w-full space-y-4 md:space-y-0 md:py-8 px-2 sm:px-4">
              {mission.map((text, index) => (
                <motion.li
                  variants={fadeIn}
                  key={index}
                  className="text-base sm:text-lg md:text-xl xl:text-[28px] font-semibold text-[#345A85] leading-relaxed md:leading-[42px] flex items-start">
                  <span className="md:hidden mr-2 text-[#0F3556]">•</span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* blob shape */}
      <div className="absolute -right-8 sm:-right-12 md:-right-16 -bottom-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px] bg-shape2/20 blur-3xl rounded-full"></div>
      <div className="absolute -top-10 -left-8 sm:-left-12 md:-left-16 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px] bg-shape2/20 blur-3xl rounded-full"></div>
    </section>
  );
}
