import Image from "next/image";
import ProjectContent from "../ProjectContent";

const Projects = () => {
  return (
    <div className="mt-44 ">
      <div
        className="text-primary-100 font_heading font-bold text-3xl
      mt-5 text-center lg:m-0 lg:text-6xl"
      >
        My Projects
      </div>

      <div className="mt-16 grid lg:grid-cols-2 lg:text-xl">
        {/* Desc */}
        <div className="w-96 mx-auto mt-12 lg:mr-0 lg:mt-0 lg:ml-52">
          <h1 className="font_subheading font-bold">Share Prompt</h1>
          <h2 className="font_subheading italic mt-5">
            Full Stack Development
          </h2>
          <p className="font_content mt-5 lg:w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
            bibendum ultrices sagittis dictum massa. Viverra adipiscing sem odio
            et tortor viverra.
          </p>
          {/* Icons */}
          <div className="hidden lg:block mt-12">
            <Image
              priority
              src="/images/icons/github.svg"
              height={52}
              width={52}
              alt="Follow us on Twitter"
            />
          </div>
        </div>
        {/* Proj Images & Buttons*/}
        <div>
          <div className="mt-5 mx-auto relative grid lg:mt-0 lg:grid-cols-4 lg:ml-20">
            <Image
              className="w-96  col-span-3 mx-auto lg:w-auto lg:h-80 lg:mt-1"
              src="/images/projects/mockone-dt.png"
              alt="user_image"
              width={1086}
              height={755}
            />
            <Image
              className="hidden lg:block lg:absolute lg:left-96 lg:top-4 lg:ml-12"
              src="/images/projects/mockone-mb.png"
              alt="user_image"
              width={200}
              height={155}
            />
          </div>
          {/* Buttons */}
          <div className="mt-5 w-96 mx-auto grid grid-cols-2 gap-x-8 lg:mt-16">
            <button
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold 
          py-2 px-2 border border-transparent rounded w-40"
            >
              Hello
            </button>
            <button
              className="bg-transparent hover:bg-gray-600
           text-gray-700 font-semibold w-40 hover:text-white
            py-2 px-2 border border-gray-700 hover:border-transparent rounded
            "
            >
              Hello
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 grid lg:grid-cols-2 lg:text-xl">
        <ProjectContent
          imageOrder={"lg:order-last"}
          title={"Share Prompt"}
          subtitle={"Full Stack Development"}
          content={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
        bibendum ultrices sagittis dictum massa. Viverra adipiscing sem odio
        et tortor viverra.`}
          icons={["nextdotjs", "tailwindcss"]}
          imageOne={"/images/projects/mockone-dt.png"}
          imageTwo={"/images/projects/mockone-mb.png"}
        />
      </div>
    </div>
  );
};

export default Projects;
