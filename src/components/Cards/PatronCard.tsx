import React, { FC } from "react";

interface props {
  name: string;
  title: string;
  imgSrc?: string;
}

const PatronCard: FC<props> = ({ name, title, imgSrc }) => {
  return (
    <>
      <div className='w-60 flex flex-col'>
        <div className='mb-3 h-60 w-60 bg-teal-600 rounded-full'>&nbsp;</div>
        <div className='mb-3 text-lg text-center'>{name}</div>
        <div className='text-sm text-center text-gray-600 break-normal'>
          {title}
        </div>
      </div>
    </>
  );
};

export default PatronCard;
