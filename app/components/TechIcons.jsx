"use client";
import Image from "next/image";
const TechIcons = ({ icons }) => {
  return (
    <>
      <div className="flex gap-4 ">
        {icons.map((iconName) => {
          return (
            <Image
              key={iconName}
              className="w-10"
              priority
              src={`/images/icons/${iconName}.svg`}
              height={52}
              width={52}
              alt="Follow us on Twitter"
            />
          );
        })}
      </div>
    </>
  );
};

export default TechIcons;
