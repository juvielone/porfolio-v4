import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const profile_container = {
  hidden: { opacity: 0, y: "100vh" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.4 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const profile_img = {
  hidden: {},
};

export const icon_item = {
  hidden: { opacity: 0, left: "-3px", top: "2px" },
  show: {
    opacity: 1,
    left: "145px",
    top: "220px",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const icons = ["mongodb", "github", "googlemaps", "react", "tailwindcss"];

const Profile = () => {
  return (
    <motion.div
      className="mx-auto my-auto h-screen"
      variants={profile_container}
      initial="hidden"
      whileInView="show"
      exit="exit"
    >
      <motion.div>
        <Image
          className="w-36 h-34 rounded-full lg:h-92 lg:w-2/3 lg:ml-12 "
          src="/images/profile.png"
          alt="user_image"
          width={400}
          height={540}
        />
      </motion.div>

      <motion.div className="container_icons">
        {icons.map((icon, index) => (
          <motion.li
            key={index}
            className="profile_icons"
            style={{ "--i": index, "--j": icons.length + 3 }}
            variants={icon_item}
          >
            <motion.span>
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
      </motion.div>
    </motion.div>
  );
};

export default Profile;
