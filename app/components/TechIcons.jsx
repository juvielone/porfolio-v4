"use client";
import Image from "next/image";
const TechIcons = ({ icons }) => {
  return (
    <>
      <div>
        {icons.map((iconName) => {
          return (
            <Image
              key={iconName}
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
