"use client";
import { motion } from "framer-motion";
import Footer from "../components/custom/Footer";
import { useState } from "react";

const cnt_container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, staggerChildren: 0.3 } },
};

const cnt_heading = {
  hidden: { opacity: 0, y: "-10vh" },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const cnt_content = {
  hidden: { opacity: 0, y: "10vh" },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};
const cnt_btn = {
  hidden: { opacity: 0, scale: 0.7 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const cnt_bnt_icon = {
  x: 5,
  y: -6,
  rotate: -20,
  transition: { duration: 0.2 },
};

const Contact = () => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      id="contact"
      className="mt-20 lg:mt-32"
      variants={cnt_container}
      initial="hidden"
      whileInView="show"
    >
      <motion.h1
        variants={cnt_heading}
        className="w-fit mx-auto text-primary-100 
      font_heading font-bold text-3xl mt-20 lg:text-6xl"
      >
        Get In Touch
      </motion.h1>

      <motion.p
        className="font_content w lg:w-2/5 text-center 
      mx-auto mt-12 lg:text-xl"
        variants={cnt_content}
      >
        Hello, I’m currently exploring new opportunities and my inbox is always
        open for inquiries, or even just a friendly hello. <br />
        I’ll try my best to get back to you!
      </motion.p>

      <motion.div className="mt-14 w-fit mx-auto pb-10 lg:pb-16 font_content">
        <a href="mailto: juvielonejoshua27@gmail.com" target="_blank">
          <motion.button
            className="bg-primary-100 hover:bg-primary-200 text-white font-bold 
          py-4 px-4 border border-transparent rounded w-40 flex gap-4"
            variants={cnt_btn}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            Say Hello
            <motion.svg
              animate={hover ? cnt_bnt_icon : {}}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </motion.svg>
          </motion.button>
        </a>
      </motion.div>
      {/* <Footer /> */}
    </motion.div>
  );
};

export default Contact;
