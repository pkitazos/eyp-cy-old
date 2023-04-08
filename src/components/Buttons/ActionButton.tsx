import type { FC } from "react";

interface props {
  text: string;
}

const ActionButton: FC<props> = ({ text }) => {
  return (
    <button
      className={`w-max cursor-pointer rounded-full bg-accent-900 
        py-5 px-9 text-xl font-semibold text-black shadow-sm
        transition-all duration-300 hover:scale-110 
        md:text-2xl lg:py-5 lg:px-7`}
    >
      {text}
    </button>
  );
};

export default ActionButton;
