"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/custom/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Test from "./sections/Test";
import Loader from "./components/custom/Loader";
import Footer from "./components/custom/Footer";
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
          <div className="w-11/12 mx-auto">
            <Hero />
            {/* <Test /> */}
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </AnimatePresence>
  );
};

export default Home;
