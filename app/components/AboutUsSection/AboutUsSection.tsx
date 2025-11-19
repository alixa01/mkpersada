"use client";

import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const text =
  "PT Mitra Kencana Persada (MKP) is a trusted provider of Artificial Lift Systems and Well Services for the oil, gas, and geothermal industries. Founded in 2000 and fully operational since 2018, MKP has collaborated with numerous partners, offering rental, services, and material supply. The company is firmly committed to QHSE standards, supported by certifications ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018.";

const words = text.split("");

export default function AboutUsSection() {
  return (
    <section
      id="about us"
      className="relative flex flex-col md:flex-row w-full min-h-screen md:h-[700px] bg-gradient-to-bl from-primary to-[#2A5B8C] overflow-hidden">
      {/* blob shape */}
      <div className="absolute -right-8 sm:-right-12 md:-right-16 -top-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-shape/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-10 -left-8 sm:-left-12 md:-left-16 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-shape/10 blur-3xl rounded-full"></div>

      {/* left area */}
      <div className="w-full md:w-[60%] h-full flex flex-col px-6 sm:px-12 md:pl-16 xl:pl-[100px] py-12 md:py-0">
        {/* header */}
        <h2 className="mt-0 md:mt-24 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight md:leading-[53px] text-sub-text">
          about us
        </h2>

        {/* sub text */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-full sm:max-w-[600px] md:max-w-[680px] xl:max-w-[760px] mt-6 sm:mt-8 md:mt-[44px] text-[16px] sm:text-[20px] md:text-[24px] xl:text-[28px] font-medium sm:font-semibold text-justify leading-7 sm:leading-9 md:leading-[40px] xl:leading-[45px] text-sub-text tracking-[0.48px] sm:tracking-[0.6px] md:tracking-[0.72px] xl:tracking-[0.84px]">
          {words.map((word, index) => {
            const delay = index * 0.007;
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0.25 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: delay,
                  ease: "easeOut",
                }}>
                {word}
              </motion.span>
            );
          })}
        </motion.p>
      </div>

      {/* right area */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full md:w-[40%] h-full flex flex-col items-center gap-8 sm:gap-10 md:gap-14 px-6 sm:px-12 md:px-4 pb-12 md:pb-0 md:mt-24">
        {/* years */}
        <motion.div variants={fadeIn} className="flex flex-col w-full max-w-xs">
          <h1 className="leading-none pb-2 sm:pb-3 md:pb-4 text-[64px] sm:text-[80px] md:text-[96px] font-medium text-white">
            25+
          </h1>
          <h2 className="-mt-2 sm:-mt-3 md:-mt-4 text-[20px] sm:text-[23px] md:text-[26px] font-medium leading-7 sm:leading-8 tracking-[0.4px] sm:tracking-[0.46px] md:tracking-[0.52px] text-sub-text">
            years experience
          </h2>
          <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0.14px] sm:tracking-[0.15px] md:tracking-[0.16px] text-white/70">
            in energy sector
          </span>
        </motion.div>

        {/* projects */}
        <motion.div variants={fadeIn} className="flex flex-col w-full max-w-xs">
          <h1 className="leading-none pb-2 sm:pb-3 md:pb-4 text-[64px] sm:text-[80px] md:text-[96px] font-medium text-white">
            17+
          </h1>
          <h2 className="-mt-2 sm:-mt-3 md:-mt-4 text-[20px] sm:text-[23px] md:text-[26px] font-medium leading-7 sm:leading-8 tracking-[0.4px] sm:tracking-[0.46px] md:tracking-[0.52px] text-sub-text">
            existing projects
          </h2>
          <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0.14px] sm:tracking-[0.15px] md:tracking-[0.16px] text-white/70">
            in operation
          </span>
        </motion.div>

        {/* regions */}
        <motion.div variants={fadeIn} className="flex flex-col w-full max-w-xs">
          <h1 className="leading-none pb-2 sm:pb-3 md:pb-4 text-[64px] sm:text-[80px] md:text-[96px] font-medium text-white">
            5+
          </h1>
          <h2 className="-mt-2 sm:-mt-3 md:-mt-4 text-[20px] sm:text-[23px] md:text-[26px] font-medium leading-7 sm:leading-8 tracking-[0.4px] sm:tracking-[0.46px] md:tracking-[0.52px] text-sub-text">
            active regions
          </h2>
          <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[22px] sm:leading-[23px] md:leading-[24px] tracking-[0.14px] sm:tracking-[0.15px] md:tracking-[0.16px] text-white/70">
            across Indonesia
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
