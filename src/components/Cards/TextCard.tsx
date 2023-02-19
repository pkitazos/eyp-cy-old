import React, { FC } from "react";
import { Underline } from "../SVGs";

interface props {
  title: string;
  titleSize?: string;
  children: React.ReactNode;
  center?: boolean;
}

const TextCard: FC<props> = ({ title, titleSize, center, children }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className={`self-center ${titleSize} text-primary-800`}>{title}</div>
      <Underline className='-mt-2 w-16 rotate-[190deg] text-accent-900' />
      <div
        className={`${
          center ? "text-center" : "text-justify"
        } text-xl leading-relaxed`}
      >
        {children}
      </div>
    </div>
  );
};

export default TextCard;
