import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
const Home = () => {
  return (
    <div className="bg-gray-300 md:bg-yellow-500 lg:bg-red-300 xl:bg-purple-300 2xl:bg-green-300">
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
