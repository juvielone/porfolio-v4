const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:max-h-7xl pt-6 ">
      <div className=" text-center lg:text-left lg:mt-16">
        <h1 className="text-primary-100 font_heading font-bold lg:text-6xl md:text-4xl text-3xl mt-5">
          Juvielone Joshua Lagos
        </h1>
        <h3 className="font_subheading text-xl mt-5">
          [ joo-vee-lohn ]{" "}
          <span className="font-bold italic">web developer</span>
        </h3>
        <h2>
          <p className="font_content w-3/4 mx-auto mt-5 md:text-lg lg:text-left lg:w-1/2 lg:ml-0 lg:leading-loose">
            <span className="text-primary-100">01.</span> A full stack web
            developer, with experience in creating and managing static and
            dynamic pages through the web. I build and design modern intuitive
            websites and applications .
          </p>
        </h2>

        <div className="mt-14 pb-16 font_content">
          <button
            className="bg-primary-100 hover:bg-primary-200 text-white font-bold 
          py-4 px-4 border border-transparent rounded w-40"
          >
            View Projects
          </button>
          <button
            className="bg-transparent hover:bg-primary-100
           text-primary-100 font-semibold w-40 hover:text-white
            py-4 px-4 border border-blue-500 hover:border-transparent rounded
            ml-10"
          >
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
