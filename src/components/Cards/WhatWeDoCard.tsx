import type { FC } from "react";

interface props {
  title: string;
  info: string;
  imageURL: string;
}

const WhatWeDoCard: FC<props> = ({ title, info, imageURL }) => {
  return (
    <div className='group grid w-64'>
      <img
        src={imageURL}
        className='h-60 object-cover rounded-xl group-hover:scale-[0.97] transition-all duration-200'
      />
      <div className='-mx-1 -mt-14 px-8 py-6 my-glass group-hover:scale-[1.02] transition-all duration-200 rounded-xl'>
        <h3 className='pb-4 text-xl font-semibold text-center'>{title}</h3>
        <p className='text-center tracking-wide'>{info}</p>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
