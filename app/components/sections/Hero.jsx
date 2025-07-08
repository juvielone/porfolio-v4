import { useState } from "react";
import { motion } from "framer-motion";
import {
  hero_container,
  content_variant,
  social_line_variant,
} from "../../animations/variants";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { FolderOpenIcon } from "@heroicons/react/24/outline";
import Socials from "../Socials";

const Hero = () => {
  const [btnOneHover, setBtnOneHover] = useState(false);
  const [btnTwoHover, setBtnTwoHover] = useState(false);

  return (
    <motion.div
      className="grid w-full lg:grid-cols-12 
      mx-auto px-2 sm:px-6 py-8 
      min-h-[calc(100vh-9rem)]"
      variants={hero_container}
      initial="hidden"
      animate="show"
    >
      <div
        className="text-center lg:text-left
       lg:col-span-11 h-fit 2xl:my-auto "
      >
        {/* Hero Content */}
        <motion.h1
          className="text-primary-100 font_heading
          font-bold text-[clamp(2rem,4.5vw,4rem)]"
          variants={content_variant}
        >
          Juvielone Joshua Lagos
        </motion.h1>
        <motion.h3
          className="font_subheading text-[clamp(1em,1.2vw,1.5rem)] mt-5"
          variants={content_variant}
        >
          [ joo-vee-lohn ]{" "}
          <span className="font-bold italic ">full-stack developer</span>
        </motion.h3>
        <motion.p
          className="font_content w-3/4 
          mx-auto mt-5 text-[clamp(1rem,1.2vw,1.5rem)] lg:text-left lg:w-2/3 
          lg:ml-0 lg:leading-loose"
          variants={content_variant}
        >
          <span className="text-primary-100">01.</span> A full stack web
          developer, with experience in creating and managing static and dynamic
          pages through the web. I build and design modern intuitive websites
          and applications .
        </motion.p>
        {/* Hero CTA */}
        <motion.div
          className="mt-14 pb-10 lg:pb-16 font_content lg:flex"
          variants={content_variant}
        >
          {/* View Proj Btn */}
          <a href="#projects">
            <motion.button
              className="bg-primary-100 hover:bg-primary-200 text-white font-bold 
            mx-auto py-4 px-4 border border-transparent rounded w-48 flex lg:mx-0 text-base"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setBtnOneHover(true)}
              onMouseLeave={() => setBtnOneHover(false)}
            >
              View Projects
              <motion.span
                className="ml-3"
                animate={btnOneHover ? { rotate: -20 } : {}}
              >
                <BeakerIcon className="h-6 w-6 text-white" />
              </motion.span>
            </motion.button>
          </a>

          {/* Resume Btn */}
          <a
            href="https://drive.google.com/file/d/1h13MkD4GqAtVkEZEWcAb_uDFwIYOsx0u/view?usp=sharing"
            target="_blank"
          >
            <motion.button
              className="bg-transparent hover:bg-primary-100
           text-primary-100 font-semibold w-48 hover:text-white
            py-4 px-4 border border-primary-100 hover:border-transparent rounded
            mx-auto mt-3 flex lg:ml-10 lg:my-0"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setBtnTwoHover(true)}
              onMouseLeave={() => setBtnTwoHover(false)}
            >
              View Resume
              <motion.span
                className="ml-3"
                animate={btnTwoHover ? { scale: 1.06 } : {}}
              >
                <FolderOpenIcon className="h-6 w-6 " />
              </motion.span>
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Socials Links (Large Devices) */}
      <motion.div className="hidden lg:block items-center w-fit mt-[5rem] 2xl:my-auto">
        <Socials setting="lg:space-y-4" />
      </motion.div>
      {/* Dropdown Pulse */}
      <motion.div className="hidden lg:block absolute bottom-12 2xl:bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
        <motion.div className="w-6 h-10 rounded-full border-2 border-[#00ADB5] flex justify-center items-start p-1">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary-100 animate-pulse"></motion.div>
        </motion.div>
      </motion.div>

      {/* Social Links(Small Devices) */}
      <div className="lg:hidden  w-80 mx-auto pb-5">
        <Socials setting="grid grid-cols-4" />
      </div>
    </motion.div>
  );
};

export default Hero;
