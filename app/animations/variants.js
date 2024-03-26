// Loader Variants ====================================
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
    scale: "0.5",
    transition: { duration: 0.4 },
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

// Navbar ============================================
export const logo_variant = {
  hidden: { opacity: 0, scale: 0.4 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {},
  },
};

export const nav_link_container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.3,
    },
  },
};

export const nav_link = {
  hidden: { opacity: 0, y: "40vh" },
  show: { opacity: 1, y: 0 },
};

//Hero =============================================
export const hero_container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.5,
      staggerChildren: 0.4,
      delayChildren: 0,
    },
  },
};
export const content_variant = {
  hidden: { opacity: 0, y: "10vh" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
export const social_line_variant = {
  hidden: { pathLength: 0 },
  show: {
    pathLength: 1,
    transition: { delay: 0.2, duration: 0.8 },
  },
};
// Social Icons =========
export const social_container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Adjust the stagger duration as needed
    },
  },
};
export const social_variant = {
  hidden: { opacity: 0, y: "10vh", x: "-10vw" },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7 },
  },
};

//About =============================================
export const about_container = {
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
export const about_profile = {
  hidden: { opacity: 0, y: "50vh" },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const icon_container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.4,
      staggerChildren: 0.4,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const icon_stagger = {
  show: {
    transition: {
      staggerChildren: 0.3, // Adjust the stagger duration as needed
    },
  },
};

export const icon_item = {
  hidden: { opacity: 0, top: "12px" },
  show: {
    opacity: 1,
    top: "220px",
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, transition: { duration: 0.6 } },
};

export const about_content = {
  hidden: { opacity: 0, y: "10vh" },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const about_tab = {
  hidden: { opacity: 0, y: "30vh" },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

//Experience =============================================

export const exp_container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};

export const exp_heading = {
  hidden: { y: "18vh" },
  show: { y: 0, transition: { duration: 0.7 } },
};

export const timeline_container = {
  show: { transition: { staggerChildren: 0.5 } },
};
export const timeline_side_left = {
  hidden: { opacity: 0, y: "-10vh" },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};
export const timeline_side_right = {
  hidden: { opacity: 0, y: "-10vh" },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

//Projects =============================================

export const proj_container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, staggerChildren: 0.3 } },
};
export const proj_heading = {
  hidden: { y: "18vh" },
  show: { y: 0, transition: { duration: 0.7 } },
};

export const proj_slide = {
  hidden: { opacity: 0, y: "15vh" },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
export const proj_rotate = {
  hidden: { opacity: 0, rotate: 10 },
  show: { opacity: 1, rotate: 0, transition: { duration: 0.3 } },
};
