import Image from "next/image";
import Tabs from "../AboutTabs";
const About = () => {
  return (
    <div className=" grid pb-20 mt-20  lg:grid-cols-2 lg:mt-20 lg:pb-44">
      <div className="mx-auto my-auto">
        <Image
          className="w-36 h-34 rounded-full lg:h-92 lg:w-2/3 lg:ml-12"
          src="/images/leme.jpg"
          alt="user_image"
          width={400}
          height={540}
        />
      </div>

      <div className="my-auto text-center lg:w-5/6">
        <h1 className="text-primary-100 font_heading font-bold text-3xl mt-5 lg:text-left lg:m-0 lg:text-6xl">
          About Me
        </h1>
        <p
          className="font_content w-96 mx-auto mt-12 md:text-lg lg:mx-0
         lg:mt-16 lg:text-xl lg:text-left lg:w-5/6"
        >
          <span className="text-primary-100 ">02. </span>
          I'm currently in my fourth year pursuing a BS in Information
          Technology at New Era University, Quezon City Manila. I enjoy creating
          and designing things that live on the internet. I have a deep
          understanding of modern design principles that are effective for
          enhancing the human experience.
        </p>
        <Tabs />
      </div>
    </div>
  );
};

export default About;
