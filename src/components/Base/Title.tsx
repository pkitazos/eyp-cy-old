import type { FC } from "react";
import { Underline } from "..";

interface props {
  text: string;
  order: "h1" | "h2" | "h3";
  variant?: "dark" | "light";
  underlineColor?: string;
  underlineRotation?: string;
}

const Title: FC<props> = ({
  text,
  order,
  variant = "dark",
  underlineColor = "text-accent-900",
  underlineRotation = "rotate-180",
}) => {
  let size: string;
  let underlineWidth: string;
  let color: string;

  switch (order) {
    case "h1":
      size = "text-3xl xs:text-4xl md-lg:text-5xl";
      underlineWidth = "w-12 xs:w-14 md-lg:w-16";
      break;
    case "h2":
      size = "text-2xl xs:text-3xl md-lg:text-4xl";
      underlineWidth = "w-10 xs:w-12 md-lg:w-14";
      break;
    case "h3":
      size = "text-xl xs:text-2xl md-lg:text-3xl";
      underlineWidth = "w-9 xs:w-10 md-lg:w-12";
      break;
  }

  switch (variant) {
    case "dark":
      color = "text-primary-900";
      break;
    case "light":
      color = "text-white";
      break;
  }

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className={`${size} ${color} text-center font-semibold`}>{text}</h1>
        <Underline
          className={`mb-3 mt-1 xs:mb-4 md-lg:mb-6 ${underlineWidth}`}
          color={underlineColor}
          tilt={underlineRotation}
        />
      </div>
    </>
  );
};

export default Title;
