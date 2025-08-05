"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  about_container,
  about_profile,
  about_content,
  icon_container,
  icon_stagger,
  icon_item,
} from "../animations/variants";
import Image from "next/image";
import Tabs from "../components/custom/AboutTabs";

const About = () => {
  const webdev = ["react", "nextdotjs", "dotnet", "tailwindcss", "mern"];
  const languages = ["javascript", "java", "csharp"];
  const other = ["microsoft", "powerbi", "figma"];
  const [currentIcons, setCurrentIcons] = useState(webdev);

  const updateIcons = (newIcon) => {
    if (newIcon == "webdev") setCurrentIcons(webdev);
    if (newIcon == "languages") setCurrentIcons(languages);
    if (newIcon == "other") setCurrentIcons(other);
  };

  return (
    <motion.div
      id="aboutme"
      className=" grid pb-20 mt-20  lg:grid-cols-2 lg:mt-28 lg:pb-40"
      variants={about_container}
      initial="hidden"
      whileInView="show"
      exit="exit"
    >
      {/* Profile Image */}
      <motion.div className=" w-full" variants={about_profile}>
        <motion.div className=" w-2/3 mx-auto">
          <Image
            className="w-36 h-34 rounded-full mx-auto lg:w-11/12 "
            src="/images/profile.png"
            alt="user_image"
            width={400}
            height={540}
          />
        </motion.div>

        {/* Icons */}
        {/* <AnimatePresence>
          <motion.div
            key={currentIcons.join("-")}
            className="hidden lg:block container_icons"
            variants={icon_container}
            initial="hidden" // Ensure initial state is set
            whileInView="show" // Animate to "show" state
            exit="exit" // Animate when exiting
          >
            <motion.ul
              variants={icon_stagger}
              initial="hidden"
              whileInView="show"
              exit="exit"
            >
              {currentIcons.map((icon, index) => (
                <motion.li
                  key={`${icon}-${index}`}
                  className="profile_icons"
                  style={{ "--i": index, "--j": currentIcons.length + 3 }}
                  variants={icon_item}
                >
                  <motion.span
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.8 },
                    }}
                  >
                    <Image
                      className=" lg:h-12 lg:w-fit"
                      src={`/images/icons/${icon}.svg`}
                      alt="user_image"
                      width={400}
                      height={540}
                    />
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </AnimatePresence> */}
      </motion.div>

      {/* Content */}
      <motion.div className=" w-full my-auto text-center lg:w-full">
        <motion.h1
          className="text-primary-100 font_heading
        font-bold text-3xl mt-5 lg:text-left lg:m-0 lg:text-6xl"
          variants={about_content}
        >
          About Me
        </motion.h1>
        <div
          className="font_content w-full mx-auto  md:text-lg lg:mx-0
           lg:text-xl lg:text-left"
        >
          <motion.p className="mt-12 lg:mt-16" variants={about_content}>
            <span className="text-primary-100 ">02. </span>
            Hello! You can call me Juvie, and I enjoy creating and designing
            things on the web. My goal is to bring new ideas to the table and
            provide a unique approach that offers an efficient and creative user
            experience.
            <br />
          </motion.p>
          <motion.p className=" mt-2 lg:mt-5" variants={about_content}>
            <strong>Beyond the screen,</strong> my adventures range from hiking
            to cafe hopping. When I'm not exploring the outdoors, I’m diving
            into technologies that help me bring ideas to life.
          </motion.p>
          <motion.p className="mt-2 lg:mt-5" variants={about_content}>
            Here are a few tools I’ve been working with lately:
          </motion.p>
        </div>

        <Tabs
          setCurrentIcons={setCurrentIcons}
          webdev={webdev}
          languages={languages}
          other={other}
          updateIcons={updateIcons}
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
