import { motion } from "framer-motion";

export const Timeline = () => {
  const timeline_svg_container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.4,
        staggerChildren: 0.5,
      },
      exit: { opacity: 0, transition: { duration: 0.3 } },
    },
  };
  const timeline_svg = {
    hidden: { pathLength: 0 },
    show: {
      pathLength: 1,
      transition: { duration: 1.6 },
    },
  };
  const timeline_circle = {
    hidden: { opacity: 0, scale: 0.4 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.svg
      variants={timeline_svg_container}
      initial="hidden"
      whileInView="show"
      width="25"
      height="643"
      viewBox="0 0 25 643"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.line
        variants={timeline_svg}
        x1="12.1484"
        y1="18.5979"
        x2="12.1484"
        y2="350.098"
        stroke="#222831"
        stroke-width="2"
      />
      <motion.ellipse
        initial="hidden"
        whileInView="show"
        variants={timeline_circle}
        cx="12.9787"
        cy="11.5153"
        rx="11.9787"
        ry="11.5153"
        fill="#00ADB5"
      />
      <motion.ellipse
        variants={timeline_circle}
        cx="12.6277"
        cy="350.613"
        rx="11.9787"
        ry="11.5153"
        fill="#00ADB5"
      />
      <motion.line
        variants={timeline_svg}
        x1="12.1484"
        y1="363.13"
        x2="12.1484"
        y2="605.557"
        stroke="#222831"
        stroke-width="2"
      />
    </motion.svg>
  );
};
