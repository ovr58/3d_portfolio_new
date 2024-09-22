import { transform } from "framer-motion";

export const textVariant = (delay=0.5) => {
  const transition = { type: "spring", duration: 0.8 }
  return {
    initial: {
      x: -100,
      y: 0,
      opacity: 0,
      transition: { ...transition, delay: delay },
    },
    animate: {
      x:  0,
      y:  0,
      opacity: 1,
      transition: { ...transition, delay: delay },
    },
    exit: {
      x: -100,
      y: 0,
      transition: { ...transition, delay: delay },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    initial: {
      x: 0,
      y: 0,
      opacity: 0,
      transition: { transition: { type: "spring", duration: 1.8 }, delay: delay },
    },
    animate: {
      x:  0,
      y:  0,
      opacity: 1,
      transition: { transition: { type: "spring", duration: 1.8 }, delay: delay },
    },
    exit: {
      x: 0,
      y: 0,
      opacity: 0,
      transition: { transition: { type: "spring", duration: 1.8 }, delay: delay },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
