import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Test from "./components/sections/Test";
const Home = () => {
  return (
    <div className="bg-gray-300 md:bg-yellow-500 lg:bg-red-300 xl:bg-purple-300 2xl:bg-green-300">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Test /> */}
    </div>
  );
};

export default Home;
