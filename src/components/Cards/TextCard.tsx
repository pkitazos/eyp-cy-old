import React, { FC } from "react";

interface props {
  title: string;
  titleSize?: string;
  children: React.ReactNode;
  center?: boolean;
}

const TextCard: FC<props> = ({ title, titleSize, center, children }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div className={`self-center ${titleSize} text-primary-800`}>{title}</div>
      <div className='h-0.5 w-24 self-center bg-primary-700'>&nbsp;</div>
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
