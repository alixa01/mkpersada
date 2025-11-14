"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Services", href: "/services" },
  ];

  // Variants container navbar
  const navbarVariants: Variants = {
    closed: {
      width: "90%",
      height: 60,
      marginTop: 16,
      borderRadius: 24,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        when: "afterChildren",
      },
    },
    open: {
      width: "90%",
      height: 215,
      marginTop: 16,
      borderRadius: 24,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        when: "beforeChildren",
      },
    },
    scrolledClosed: {
      width: "100%",
      height: 60,
      marginTop: 0,
      borderRadius: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    scrolledOpen: {
      width: "100%",
      height: 215,
      marginTop: 0,
      borderRadius: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Variants icon menu/close
  const iconVariants: Variants = {
    menu: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    close: {
      opacity: 0,
      rotate: 90,
      scale: 0.75,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Variants dropdown container
  const dropdownVariants: Variants = {
    closed: {
      scaleY: 0,
      opacity: 0,
      transition: {
        scaleY: {
          duration: 0.3,
          ease: [0.7, 0, 1, 0.3],
        },
        opacity: {
          duration: 0.2,
        },
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      scaleY: 1,
      opacity: 1,
      transition: {
        scaleY: {
          duration: 0.2,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: {
          duration: 0.2,
        },
        when: "beforeChildren",
        delayChildren: 0.1,
        staggerChildren: 0.08,
      },
    },
  };

  // Variants menu items
  const itemVariants: Variants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center items-start h-auto  z-50">
      <motion.div
        className="bg-white shadow-sm flex flex-col justify-center overflow-hidden"
        variants={navbarVariants}
        initial="closed"
        animate={
          isScrolled
            ? open
              ? "scrolledOpen"
              : "scrolledClosed"
            : open
            ? "open"
            : "closed"
        }>
        {/* BAR ATAS: DESKTOP MENU + MOBILE BUTTON */}
        <div className="flex items-center justify-end md:justify-center h-[60px] min-h-[60px] px-6 md:px-10 lg:px-14 xl:px-20">
          {/* DESKTOP MENU */}
          <nav className="hidden md:flex justify-center items-center gap-6 lg:gap-10 xl:gap-12">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[14px] md:text-[15px] lg:text-[16px] text-[#1E293B] font-semibold tracking-[0.5%] hover:text-[#194670] transition-colors duration-200">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            className="md:hidden inline-flex items-center justify-center rounded-full p-2"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}>
            <div className="relative w-[26px] h-[26px]">
              <motion.div
                className="absolute inset-0"
                variants={iconVariants}
                initial="menu"
                animate={open ? "close" : "menu"}>
                <Menu size={26} color="#0f172a" />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                variants={iconVariants}
                initial="close"
                animate={open ? "menu" : "close"}>
                <X size={26} color="#0f172a" />
              </motion.div>
            </div>
          </motion.button>
        </div>

        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="md:hidden flex flex-col gap-6 items-start justify-center px-6 py-3"
              variants={dropdownVariants}
              initial="closed"
              animate="open"
              exit="closed">
              {menuItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="text-[18px] text-[#1E293B] font-semibold tracking-[0.5%] hover:text-[#194670] transition-colors duration-200"
                    onClick={() => setOpen(false)}>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
