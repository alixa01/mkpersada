"use client";

import { motion } from "framer-motion";

const missionItems = [
  "Concern on customer's satisfaction",
  "Empowerment of resources",
  "Comply with any applied laws and regulations",
  "Improvement in health, safety and environment",
];

export default function VisionMissionSection() {
  return (
    <section
      id="vision-mission"
      className="text-slate-50 lg:pt-16 pt-10 px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="space-y-12">
        {/* contetn */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ scale: 1 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: "easeOut" },
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-3xl border border-slate-100/10 bg-slate-950/20 backdrop-blur-sm px-6 py-6 sm:px-8 sm:py-8 shadow-[0_22px_60px_rgba(15,23,42,0.6)]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-400/25 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 bottom-0 h-32 w-32 rounded-full bg-blue-500/25 blur-3xl" />

            <p className="text-2xl lg:text-3xl tracking-[0.25em] uppercase text-sky-200">
              Vision
            </p>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-50/95">
              To be the market leader company supplies and services for Oil,
              Gas, and Geothermal in Indonesia.
            </p>
          </motion.div>

          {/* mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ scale: 1 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: "easeOut", delay: 0.1 },
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl border border-slate-100/10 bg-slate-950/15 backdrop-blur-sm px-6 py-6 sm:px-8 sm:py-8">
            <p className="text-2xl lg:text-3xl  tracking-[0.25em] uppercase text-sky-200">
              Mission
            </p>

            <ul className="mt-4 space-y-3">
              {missionItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: 0.08 * index,
                  }}
                  className="flex gap-3 text-sm sm:text-[15px] text-slate-50/90">
                  <span className="mt-[4px] h-[6px] w-[6px] rounded-full bg-sky-300 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
