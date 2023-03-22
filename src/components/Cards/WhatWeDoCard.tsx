import type { FC } from "react";

interface props {
  title: string;
  info: string;
  imageURL: string;
}

const WhatWeDoCard: FC<props> = ({ title, info, imageURL }) => {
  return (
    <div className='group grid w-full grid-cols-2 md:w-64 md:grid-cols-1'>
      <img
        src={imageURL}
        className='col-span-1 h-60 rounded-xl object-cover transition-all duration-200 group-hover:scale-[0.97]'
      />
      <div className='my-glass col-span-1 -ml-4 rounded-xl px-8 py-6 transition-all duration-200 group-hover:scale-[1.02] md:-mx-1 md:-mt-14'>
        <h3 className='pb-4 text-center text-xl font-semibold'>{title}</h3>
        <p className='text-center tracking-wide'>{info}</p>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
