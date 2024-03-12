"use client";
import { motion } from "framer-motion";
import {
  main_svg_variant,
  svg_tip_variant,
  svg_body_variant,
  letter_variant,
} from "../animations/variants";

const Loader = ({ main, sub }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-500">
      <motion.div>
        <motion.svg
          variants={main_svg_variant}
          initial="hidden"
          animate="show"
          exit="exit"
          width="614"
          height="105"
          viewBox="0 0 374 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* TIP */}
          <motion.path
            d="M140.953 2.04527C135.771 5.44631 126.11 15.1859 122.172 21.0609C115.136 31.4932 109.724 47.0296 109.724 56.8474V61.4046H146.052V30.9515C146.052 14.1807 145.745 0.269231 145.36 0.034855C145.047 -0.19431 143.037 0.732772 140.953 2.04527Z"
            fill={main ? main : "#76EA6C"}
            variants={svg_tip_variant}
          />
          {/*BODY  */}
          <motion.path
            d="M0.510654 71.9201C-0.338305 72.769 -0.109138 79.0295 1.05232 85.4461C3.6044 99.743 11.1773 113.733 21.844 123.779C34.8284 136.071 48.0471 142.102 66.1304 144.186C82.9846 146.04 102.844 140.399 116.448 129.967C121.781 125.868 130.13 117.134 133.688 112.035C141.183 101.212 146.13 84.2847 145.36 72.3836C145.281 71.6857 141.183 71.4565 127.578 71.4565H109.88L109.11 76.8628C106.787 92.3211 94.344 105.076 78.8075 107.858C58.8648 111.337 38.6148 96.4982 36.4534 76.7118L35.9117 71.842L18.4429 71.6076C8.85961 71.5295 0.817945 71.6857 0.510654 71.9201Z"
            fill={main ? main : "#00ACB4"}
            variants={svg_body_variant}
          />

          {/* U */}
          <motion.path
            d="M201.361 121.012C216.106 121.012 225.747 111.496 225.747 98.3037V64.1943H212.799V97.361C212.799 104.142 208.674 109.288 201.361 109.288C193.887 109.288 189.846 104.101 189.846 97.361V64.1943H176.934V98.3037C176.934 112.314 187.554 121.012 201.361 121.012Z"
            fill={sub ? sub : "#EDEDED"}
            variants={letter_variant}
          />
          {/* V */}
          <motion.path
            d="M270.462 119.747L293.499 64.1528H279.817L264.744 102.715L264.541 102.757L249.468 64.1528H235.822L258.822 119.747H270.462Z"
            fill={sub ? sub : "#EDEDED"}
            variants={letter_variant}
          />
          {/* I */}
          <motion.path
            d="M317.38 119.746V64.1943H304.432V119.746H317.38Z"
            fill={sub ? sub : "#EDEDED"}
            variants={letter_variant}
          />
          {/* E */}
          <motion.path
            d="M373.169 119.746V108.226H346.575V96.9548H369.081V86.1683H346.575V75.6735H372.799V64.1943H333.627V119.746H373.169Z"
            fill={sub ? sub : "#EDEDED"}
            variants={letter_variant}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Loader;
