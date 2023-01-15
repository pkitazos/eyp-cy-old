import React, { FC } from "react";

interface props {
  title: string;
  titleSize?: string;
  children: React.ReactNode;
  center?: boolean;
}

const TextCard: FC<props> = ({ title, titleSize, center, children }) => {
  return (
    <div className='mx-10 flex flex-col justify-center items-middle gap-4'>
      <div className={`self-center ${titleSize} text-primary-700`}>{title}</div>
      <div className='h-0.5 w-24 self-center bg-primary-700'>&nbsp;</div>
      <div className={`${center ? "text-center" : "text-justify"} text-xl`}>
        {children}
      </div>
    </div>
  );
};

export default TextCard;
