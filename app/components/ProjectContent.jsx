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
        {/* Icons - Desktop*/}
        <div className="hidden lg:block mt-12">
          <TechIcons icons={icons} />
        </div>
      </div>
      {/* Proj Images & Buttons*/}
      <div className={imageOrder}>
        <div className="mt-5 mx-auto relative grid lg:mt-0 lg:grid-cols-4 lg:ml-20">
          <Image
            className="w-96 col-span-3 mx-auto lg:w-auto lg:h-80 lg:mt-1"
            src={imageOne}
            alt="user_image"
            width={1086}
            height={755}
          />
          {/* Icons -Mobile */}
          <div className="ml-28 shrink-0 lg:hidden">
            <TechIcons icons={icons} />
          </div>
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
          py-2 px-2 border border-transparent rounded w-40 flex gap-4"
          >
            <h2 className="ml-5 text-lg">Code</h2>
            <span>
              <svg
                className="w-6 fill-white lg:w-8"
                role="img"
                viewBox="0 0 24 24"
              >
                <svg role="img" viewBox="0 0 24 24">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </svg>
            </span>
          </button>
          <button
            className="bg-transparent hover:bg-gray-600
           text-gray-700 font-semibold w-40 hover:text-white
            py-2 px-2 border border-gray-700 hover:border-transparent rounded
            flex gap-4"
          >
            <h2 className="ml-5 w-fit text-lg">Demo</h2>
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectContent;
