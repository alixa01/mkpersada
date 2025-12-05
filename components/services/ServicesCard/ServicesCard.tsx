"use client";

import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

export default function ServicesCard({
  name,
  description,
  items,
}: {
  name: string;
  description: string;
  items: Array<{
    name: string;
    image: string;
    width: string;
    height: string;
  }>;
}) {
  const words = description.split(" ");

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: ".pswp-gallery-artificial-lift",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-[#194670] to-[#0C2741] border-t border-slate-300/65 drop-shadow-md text-sub-text flex justify-center">
      <div className="w-full grid grid-cols-1 gap-8 px-6 py-12 sm:px-8 sm:py-16 lg:grid-cols-3 lg:px-10 lg:py-12">
        {/* Header */}
        <div className="flex items-start ">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-2xl sm:text-3xl lg:text-2xl font-semibold tracking-wide">
            {name}
          </motion.h2>
        </div>

        {/* Description */}
        <div className="text-base sm:text-lg lg:text-base">
          <motion.p
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="leading-relaxed">
            {words.map((word, index) => (
              <motion.span key={index} variants={textWord}>
                {word}
                {index < words.length - 1 && " "}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Product List */}
        <div className="w-full lg:px-6">
          <ul className="flex flex-col space-y-4 pswp-gallery-artificial-lift">
            {items.map((item, i) => (
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
                key={i}
                className="text-base sm:text-lg lg:text-base border-b border-slate-300/65 pb-2 flex items-center">
                <a
                  href={item.image}
                  data-pswp-width={item.width}
                  data-pswp-height={item.height}
                  className="flex w-full justify-between items-center hover:cursor-pointer hover:opacity-80 transition-opacity">
                  <span>{item.name}</span>
                  <ChevronRight width={20} />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
