import { motion } from "framer-motion";
import ProjectContent from "../components/custom/ProjectContent";
import { proj_container, proj_heading } from "../animations/variants";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="mt-44 pb-10"
      variants={proj_container}
      initial="hidden"
      whileInView="show"
    >
      <motion.div
        className="text-primary-100 font_heading font-bold text-3xl
        mt-5 text-center lg:m-0 lg:text-6xl"
        variants={proj_heading}
      >
        My Projects
      </motion.div>

      <div className="mt-20 grid lg:grid-cols-2 lg:text-xl">
        <ProjectContent
          imageOrder={"lg:order-last"}
          title={"Share Prompt"}
          subtitle={"Full Stack Development"}
          contentDirection={false}
          content={`A full-stack application that enables users to discover and share creative prompts, 
          featuring CRUD functionality integrated with Google Sign-In. 
          It allows users to filter, tag, copy, and paste prompts.`}
          icons={["nextdotjs", "tailwindcss", "mongodb"]}
          imageOne={"/images/projects/mockone-dt.png"}
          imageTwo={"/images/projects/mockone-mb.png"}
          gitLink={"https://github.com/juvielone/nextjs-prompts"}
          demoLink={"https://nextjs-prompts-kappa.vercel.app/"}
        />
      </div>

      <div className="mt-20 pb-20 grid lg:grid-cols-2 lg:text-xl">
        <ProjectContent
          imageOrder={"lg:order-first"}
          title={"Daily Guide Advisor"}
          subtitle={"Powered with Google Maps API "}
          content={`A web travel application using Google Maps. With Geolocation,
           Google Maps API. Fetching restaurants, hotels, and attractions based on the
            location from specialized Rapid APIs, data filtering, and much more`}
          icons={["react", "googlemaps", "mui"]}
          imageOne={"/images/projects/dailyguide-dt.png"}
          imageTwo={"/images/projects/dailyguide-mb.png"}
          gitLink={"https://github.com/juvielone/travel_advisor"}
          demoLink={"https://mydailyguide.netlify.app/"}
        />
      </div>

      <div className="mt-20 pb-20  grid lg:grid-cols-2 lg:text-xl">
        <ProjectContent
          imageOrder={"lg:order-last"}
          title={"Devfinder"}
          subtitle={"Powered with Github API "}
          content={`Devfinder is a web application that lets you search a piece of
           github developer information such as location, company, and their newly
            created repositories`}
          icons={["react", "github", "sass"]}
          imageOne={"/images/projects/devfinder-dt.png"}
          imageTwo={"/images/projects/devfinder-mb.png"}
          gitLink={"https://github.com/juvielone/devfinder"}
          demoLink={"https://devfinder-nine.vercel.app/"}
        />
      </div>

      <div className="mt-20 pb-20  grid lg:grid-cols-2 lg:text-xl">
        <ProjectContent
          imageOrder={"lg:order-last"}
          title={"Broadtech Business Solutions"}
          subtitle={"Frontend Development"}
          content={`Broadtech Business Solutions is a responsive website designed 
            for a telecommunications company. The project features custom styles,
            animations, and content, inspired by modern user interface and user
            experience principles.`}
          icons={["nextdotjs", "tailwindcss"]}
          imageOne={"/images/projects/broadtech-dt.png"}
          imageTwo={"/images/projects/broadtech-mb.png"}
          gitLink={"https://github.com/juvielone/broadtech"}
          demoLink={"https://broadtech-solutions.vercel.app/"}
        />
      </div>
    </motion.div>
  );
};

export default Projects;
