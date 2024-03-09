import Image from "next/image";
import ProjectContent from "../ProjectContent";

const Projects = () => {
  return (
    <div className="mt-44 pb-10">
      <div
        className="text-primary-100 font_heading font-bold text-3xl
      mt-5 text-center lg:m-0 lg:text-6xl"
      >
        My Projects
      </div>

      <div className="mt-20 grid lg:grid-cols-2 lg:text-xl">
        <ProjectContent
          imageOrder={"lg:order-last"}
          title={"Share Prompt"}
          subtitle={"Full Stack Development"}
          content={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
        bibendum ultrices sagittis dictum massa. Viverra adipiscing sem odio
        et tortor viverra.`}
          icons={["nextdotjs", "tailwindcss", "mongodb"]}
          imageOne={"/images/projects/mockone-dt.png"}
          imageTwo={"/images/projects/mockone-mb.png"}
        />
      </div>

      <div className="mt-20 pb-20 grid lg:grid-cols-2 lg:text-xl">
        <ProjectContent
          imageOrder={"lg:order-first"}
          title={"Daily Guide Advisor"}
          subtitle={"Powered with Google Maps API "}
          content={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
        bibendum ultrices sagittis dictum massa. Viverra adipiscing sem odio
        et tortor viverra.`}
          icons={["react", "googlemaps", "mui"]}
          imageOne={"/images/projects/dailyguide-dt.png"}
          imageTwo={"/images/projects/dailyguide-mb.png"}
        />
      </div>

      <div className="mt-20 pb-20  grid lg:grid-cols-2 lg:text-xl">
        <ProjectContent
          imageOrder={"lg:order-last"}
          title={"Devfinder"}
          subtitle={"Powered with Github API "}
          content={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
        bibendum ultrices sagittis dictum massa. Viverra adipiscing sem odio
        et tortor viverra.`}
          icons={["react", "github", "sass"]}
          imageOne={"/images/projects/devfinder-dt.png"}
          imageTwo={"/images/projects/devfinder-mb.png"}
        />
      </div>
    </div>
  );
};

export default Projects;
