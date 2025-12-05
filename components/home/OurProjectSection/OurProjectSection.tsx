"use client";

import Image from "next/image";
import { FaMapMarker } from "react-icons/fa";
import { useState, useRef } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const coords = [
  {
    top: "12%",
    left: "8%",
    title: "Sumatera Utara",
    description: "Sumatera Utara",
    image: "/hero/hero-bg.jpg",
    href: "/",
  },
  {
    top: "24%",
    left: "14%",
    title: "Riau",
    description: "Riau",
    image: "/hero/hero-bg.jpg",
    href: "/",
  },
  {
    top: "36%",
    left: "16%",
    title: "Jambi",
    description: "Jambi",
    image: "/hero/hero-bg.jpg",
    href: "/",
  },
  {
    top: "44%",
    left: "19%",
    title: "Sumatera Selatan",
    description: "Sumatera Selatan",
    image: "/hero/hero-bg.jpg",
    href: "/",
  },
  {
    top: "61%",
    left: "24%",
    title: "Jakarta",
    description: "Jakarta",
    image: "/hero/hero-bg.jpg",
    href: "/",
  },
  {
    top: "62%",
    left: "27%",
    title: "Cirebon",
    description: "Cirebon",
    image: "/hero/hero-bg.jpg",
    href: "/",
  },
  {
    top: "45%",
    left: "72%",
    title: "Wapsalit",
    description: "Wapsalit",
    image: "/hero/hero-bg.jpg",
    href: "/",
  },
];
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, ease: "easeOut" } },
};

export default function OurProjectSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showPopup = (index: number) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setHoveredIndex(index);
  };

  const scheduleHidePopup = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 50);
  };

  return (
    <section id="our-project" className="max-w-7xl mx-auto h-fit">
      <div className="flex items-center flex-col gap-8 md:pt-16 pt-10">
        {/* map wrapper*/}
        <div className="relative w-full h-full">
          {/* map content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full h-full overflow-x-auto flex justify-center">
            <div className="relative h-full aspect-[5/2] min-w-[1200px]">
              {/* map pins */}
              {coords.map((pos, i) => {
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{ top: pos.top, left: pos.left }}
                    onMouseEnter={() => showPopup(i)}
                    onMouseLeave={scheduleHidePopup}>
                    <FaMapMarker
                      className="absolute z-10 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)] transition-transform duration-200 hover:scale-110"
                      color="#EF4444"
                      size={40}
                    />
                  </div>
                );
              })}

              <Image
                src="/map/id.svg"
                alt="Project Map"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* popup card */}
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                onMouseEnter={() => {
                  if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current);
                    hideTimeoutRef.current = null;
                  }
                }}
                onMouseLeave={scheduleHidePopup}
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute z-50 rounded-2xl text-slate-50 shadow-xl px-4 py-3 w-56 h-56"
                style={{
                  top: coords[hoveredIndex].top,
                  left: coords[hoveredIndex].left,
                  transform: "translate(-50%, -110%)",
                  backgroundImage: `url('${coords[hoveredIndex].image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
                <div className="absolute inset-0 bg-gradient-to-b from-[#194670]/40 to-[#194670]/80 rounded-2xl"></div>
                <div className="relative z-10 flex flex-col">
                  <p className="font-semibold text-lg uppercase tracking-wide text-sub-text">
                    {coords[hoveredIndex].title}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-sub-text">
                    {coords[hoveredIndex].description}
                  </p>
                  <Link
                    href={coords[hoveredIndex].href}
                    className="mt-4 w-10 h-10 rounded-full">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className=" w-full h-full flex justify-center items-center border rounded-full">
                      <motion.div className=" w-full h-full flex justify-center items-center">
                        <ArrowRight />
                      </motion.div>
                    </motion.span>
                  </Link>
                  {/* <button className="mt-3 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-[12px] drop-shadow-md">
                  Detail
                </button> */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
