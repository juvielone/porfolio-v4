import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Test from "./components/sections/Test";
const Home = () => {
  // <div className="bg-gray-300 md:bg-yellow-500 lg:bg-red-300 xl:bg-purple-300 2xl:bg-green-300">
  //   </div>
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {/* <Test /> */}
    </>
  );
};

export default Home;
