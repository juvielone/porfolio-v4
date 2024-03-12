// Loader Variants
export const main_svg_variant = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { ease: [0.6, 0.01, -0.05, 0.95] },
  },
  exit: {
    opacity: 0,
    y: "-40vh",
    x: "-40vw",
    scale: "0.7",
    transition: { duration: 0.3 },
  },
};

export const svg_tip_variant = {
  hidden: { opacity: 0, scale: 0.5, rotate: -200 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { delay: 0.2, duration: 0.6 },
  },
};

export const svg_body_variant = {
  hidden: { rotate: 200, opacity: 0 },
  show: { rotate: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
};

export const letter_variant = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  show: { y: 0, opacity: 1, transition: { duration: 1.0, type: "spring" } },
};
