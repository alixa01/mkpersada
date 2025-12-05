import { Variants } from "framer-motion";

export const defaultNavbarVariants: Variants = {
  closed: {
    width: "90%",
    height: 60,
    marginTop: 15,
    borderRadius: 24,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: "easeOut",
      when: "afterChildren",
    },
  },
  open: {
    width: "90%",
    height: 180,
    marginTop: 15,
    borderRadius: 24,
    transition: {
      duration: 0.4,
      ease: "easeIn",
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
      ease: "easeOut",
    },
  },
  scrolledOpen: {
    width: "100%",
    height: 180,
    marginTop: 0,
    borderRadius: 0,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

export const servicesNavbarVariants: Variants = {
  initial: {
    borderRadius: 24,
    marginTop: 15,
    width: "90%",
    height: 60,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: "easeOut",
      when: "afterChildren",
    },
  },
  closed: {
    borderRadius: 24,
    marginTop: 15,
    width: "90%",
    height: 60,
    y: -20,
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: "easeOut",
      when: "afterChildren",
    },
  },
  open: {
    borderRadius: 24,
    marginTop: 15,
    width: "90%",
    height: 180,
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeIn",
      when: "beforeChildren",
    },
  },
  scrolledClosed: {
    borderRadius: 24,
    marginTop: 15,
    width: "90%",
    height: 60,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  scrolledOpen: {
    borderRadius: 24,
    marginTop: 15,
    width: "90%",
    height: 180,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};
