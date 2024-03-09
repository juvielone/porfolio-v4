import Image from "next/image";
import TechIcons from "./TechIcons";

const ProjectContent = ({
  imageOrder,
  title,
  subtitle,
  content,
  icons,
  imageOne,
  imageTwo,
}) => {
  return (
    <>
      {/* Desc */}
      <div className="w-96 mx-auto mt-12 lg:mr-0 lg:mt-0 lg:ml-52">
        <h1 className="font_subheading font-bold">{title}</h1>
        <h2 className="font_subheading italic mt-5">{subtitle}</h2>
        <p className="font_content mt-5 lg:w-96">{content}</p>
        {/* Icons */}
        <div className="hidden lg:block mt-12">
          <TechIcons icons={icons} />
          {/* <Image
            priority
            src={icons}
            height={52}
            width={52}
            alt="Tech stack icons"
          /> */}
        </div>
      </div>
      {/* Proj Images & Buttons*/}
      <div className={imageOrder}>
        <div className="mt-5 mx-auto relative grid lg:mt-0 lg:grid-cols-4 lg:ml-20">
          <Image
            className="w-96  col-span-3 mx-auto lg:w-auto lg:h-80 lg:mt-1"
            src={imageOne}
            alt="user_image"
            width={1086}
            height={755}
          />
          <Image
            className="hidden lg:block lg:absolute lg:left-96 lg:top-4 lg:ml-12"
            src={imageTwo}
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
    </>
  );
};

export default ProjectContent;
