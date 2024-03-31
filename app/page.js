"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Test from "./components/sections/Test";
import Loader from "./components/Loader";
const Home = () => {
  const [loading, setLoading] = useState(true);

  // Run Intro per refresh
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="Logo">
          <Loader />
        </motion.div>
      ) : (
        <>
          {/* <Test /> */}
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </>
      )}
    </AnimatePresence>
  );
};

export default Home;
