"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { proj_container, proj_slide } from "../../animations/variants";

const TechIcons = ({ icons }) => {
  return (
    <>
      <motion.div
        variants={proj_container}
        initial="hidden"
        whileInView="show"
        className="flex gap-4 "
      >
        {icons.map((iconName) => {
          return (
            <motion.span key={iconName} variants={proj_slide}>
              <Image
                key={iconName}
                className="w-10"
                priority
                src={`/images/icons/${iconName}.svg`}
                height={52}
                width={52}
                alt="Follow us on Twitter"
              />
            </motion.span>
          );
        })}
      </motion.div>
    </>
  );
};

export default TechIcons;
