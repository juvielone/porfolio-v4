"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  HomeIcon,
  PlusIcon,
  CameraIcon,
  ClockIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const Test = () => {
  const [icons, setIcons] = useState(false);
  const varianter = {
    hidden: { opacity: 0, x: "-10vw" },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: "-10vw" },
  };

  const handleChange = () => {
    setIcons((prev) => !prev);
  };

  return (
    <div className="h-screen bg-red-300">
      <AnimatePresence>
        {icons ? (
          <motion.div
            className="absolute top-20 left-20 w-52 h-52 bg-yellow-300 mx-auto my-auto rounded-full"
            variants={varianter}
            key="boxy"
            initial="hidden"
            animate="show"
            exit="exit"
          ></motion.div>
        ) : (
          <motion.div
            className="absolute top-20 left-20 w-52 h-52 bg-blue-300 mx-auto my-auto"
            variants={varianter}
            key="boxer"
            initial="hidden"
            animate="show"
            exit="exit"
          >
            Hello
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => handleChange()}
        className="mx-auto px-5 py-5 rounded-full w-fit h-fit bg-purple-500"
      >
        Animate
      </button>
    </div>
  );
};

export default Test;
