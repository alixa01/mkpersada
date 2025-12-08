"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  defaultNavbarVariants,
  servicesNavbarVariants,
} from "./NavbarVariants";

// Variants icon menu/close
const iconVariants: Variants = {
  menu: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
      ease: "easeOut",
    },
  },
  close: {
    opacity: 0,
    rotate: 45,
    scale: 0.75,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Variants dropdown container
const dropdownVariants: Variants = {
  closed: {
    scaleY: 0,
    opacity: 0,
    transition: {
      scaleY: { duration: 0.2, ease: "easeIn" },
      opacity: { duration: 0.2 },
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    scaleY: 1,
    opacity: 1,
    transition: {
      scaleY: { duration: 0.2, ease: "easeOut" },
      opacity: { duration: 0.2 },
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
      ease: "easeIn",
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const scrollToTop = () => {
  if (typeof window === "undefined") return;

  if (window.lenis) {
    window.lenis.scrollTo(0, {
      offset: 0,
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
};

type NavbarVariant = "scaleOut" | "fadeOut";

type NavbarProps = {
  variant?: NavbarVariant;
};

export default function Navbar({ variant }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const isFadeOut = variant === "fadeOut";
  // default navbar scroll state
  const [isScrolled, setIsScrolled] = useState(false);
  // services navbar scroll state
  const [isScrolledUp, setIsScrolledUp] = useState(true);

  // default navbar scroll effect
  useEffect(() => {
    if (isFadeOut) return;
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFadeOut]);

  // services navbar scroll effect
  useEffect(() => {
    if (!isFadeOut) return;
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      const threshold = 5;

      const isAtTop = currentScrollY <= 10;

      if (isAtTop) {
        setIsScrolledUp(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (Math.abs(diff) < threshold) return;

      if (currentScrollY < lastScrollY) {
        setIsScrolledUp(true);
      } else {
        setIsScrolledUp(false);
      }

      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", updateScrollDirection);

    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [isFadeOut]);

  const menuItems = [
    { name: "Home", href: "/", onclick: scrollToTop },
    { name: "News", href: "/news" },
    { name: "Services", href: "/services" },
  ];

  // pilih variants berdasarkan props variant
  const variants = isFadeOut ? servicesNavbarVariants : defaultNavbarVariants;

  // pilih navbar variants sesuai variant dan scroll state
  const initialState = isFadeOut ? "initial" : "closed";

  // animate state
  const animateState = isFadeOut
    ? isScrolledUp
      ? open
        ? "scrolledOpen"
        : "scrolledClosed"
      : open
      ? "open"
      : "closed"
    : isScrolled
    ? open
      ? "scrolledOpen"
      : "scrolledClosed"
    : open
    ? "open"
    : "closed";

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center items-start h-auto z-50">
      <motion.div
        className="bg-slate-100 backdrop-blur-xl flex flex-col overflow-hidden lg:px-40 px-6"
        variants={variants}
        initial={initialState}
        animate={animateState}>
        {/* BAR ATAS: DESKTOP MENU + MOBILE BUTTON */}
        <div className="flex items-center justify-between md:justify-center h-[60px] min-h-[60px] z-50">
          {/* LOGO,DESKTOP MENU,CTA */}
          <div className="basis-1/3 flex">
            <Link href={"/"} onClick={scrollToTop}>
              <Image
                src="/logo/logo-mkp.jpg"
                alt="PT Mitra Kencana Persada Logo"
                width={60}
                height={40}
                loading="eager"
                className="self-center sm:self-start w-[60px] h-auto md:w-[80px]"
              />
            </Link>
          </div>
          <nav className="hidden md:flex justify-center items-center flex-row gap-12 basis-1/3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={item.onclick}
                className="text-xs md:text-sm text-[#1E293B] font-semibold hover:text-[#194670] transition-colors duration-200">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="basis-1/3 flex"></div>
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
              className="md:hidden flex flex-col gap-3 items-start justify-center  py-3"
              variants={dropdownVariants}
              initial="closed"
              animate="open"
              exit="closed">
              {menuItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#1E293B] font-semibold hover:text-[#194670] transition-colors duration-200"
                    onClick={() => {
                      if (item.onclick) {
                        item.onclick();
                      }
                      setOpen(false);
                    }}>
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
