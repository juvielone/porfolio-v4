"use client";
import Logo from "@public/assets/Logo";

const Footer = () => {
  return (
    <div className="bg-gray-700 mt-32 pb-16">
      <div
        className="pt-8 w-fit mx-auto text-white
       text-center font_content text-xl font-bold"
      >
        <p>Designed and Made by Juvielone Lagos️</p>
        <p>© {new Date().getFullYear()}</p>
      </div>

      <div className="w-fit mx-auto mt-8">
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
