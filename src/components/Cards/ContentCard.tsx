import React, { FC } from "react";

interface props {
  title: string;
  imgSrc: string;
  children: React.ReactNode;
  reversed?: boolean;
  debugColour?: string;
}

const ContentCard: FC<props> = ({
  title,
  imgSrc,
  reversed,
  children,
  debugColour,
}) => {
  return (
    <div
      className={`flex ${
        reversed ? "flex-row-reverse" : "flex-row"
      } mx-24 gap-x-14 items-middle ${debugColour}`}
    >
      <div className='basis-5/12 flex'>
        <img src={imgSrc} alt='...' className='self-center rounded-xl' />
      </div>
      <div className='basis-7/12 flex flex-col justify-center items-middle gap-y-4'>
        <div className='self-center text-2xl text-primary-700'>{title}</div>
        <div className='h-0.5 w-24 self-center bg-primary-700'>&nbsp;</div>

        <div className='text-justify text-xl'>{children}</div>
      </div>
    </div>
  );
};

export default ContentCard;
