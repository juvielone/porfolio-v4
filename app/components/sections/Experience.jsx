import { Timeline } from "@public/assets/Timeline";
const Experience = () => {
  return (
    <div className="mt-24 lg:mt-28 ">
      <h1
        className="text-primary-100 font_heading font-bold text-3xl
       mt-5 text-center lg:m-0 lg:text-6xl"
      >
        Experience
      </h1>
      <div className="grid max-w-7xl mt-20 mx-auto  lg:grid-cols-2 lg:text-xl lg:pb-20 ">
        {/* Date*/}
        <div className="ml-20 w-40 lg:ml-96">
          <button
            className="bg-primary-100 hover:bg-primary-200 text-white font-bold 
          py-4 px-4 border border-transparent rounded w-40"
          >
            2022
          </button>
        </div>

        {/* Line */}
        <div className=" absolute ml-8 lg:left-1/2 lg:mx-0 ">
          {/* <span class="absolute inline-flex h-5 w-5 rounded-full bg-sky-400 opacity-75"></span>
          <div class="absolute ml-12.5 h-96 w-[5px] bg-green-300 mx-auto"></div> */}
          <Timeline />
        </div>

        {/* Job Content */}
        <div className="ml-20 mt-6 lg:mt-0">
          <h1 className="font_subheading font-bold ">
            Full Stack Developer (Intern)
          </h1>
          <h2 className="font_subheading italic mt-5">
            Achieve Without Borders (AWB)
          </h2>
          <p className="font_content mt-5 lg:w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
            bibendum ultrices sagittis dictum massa. Viverra adipiscing sem
            odioet tortor viverra.
          </p>
        </div>

        {/* Job Content */}
        <div className="  ml-20 mt-12 lg:mt-36 lg:ml-52">
          <h1 className="font_subheading font-bold ">
            DevOps | C# .NET Devloper (Intern)
          </h1>
          <h2 className="font_subheading italic mt-5">
            Willis Towers Watson (WTW)
          </h2>
          <p className="font_content mt-5 lg:w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
            bibendum ultrices sagittis dictum massa. Viverra adipiscing sem
            odioet tortor viverra.
          </p>
        </div>

        {/* Date*/}
        <div className=" ml-20 w-40 lg:mt-36 lg:mr-96">
          <button
            className="bg-primary-100 hover:bg-primary-200 mt-5 text-white font-bold 
          py-4 px-4 border border-transparent rounded w-40 lg:mt-0"
          >
            2023
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
