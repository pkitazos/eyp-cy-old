import React, { FC } from "react";

interface props {
  name: string;
  title: string;
  imageURL?: string;
  info?: string;
}

const NCMemberCard: FC<props> = ({ name, title, imageURL, info }) => {
  return (
    <>
      <div className='flex w-60 flex-col'>
        <img
          src={imageURL}
          className='mb-4 h-60 w-60 rounded-full bg-teal-500 object-cover object-center'
        />
        <div className='mb-3 text-center text-lg'>{name}</div>
        <div className='break-normal text-center text-sm'>{title}</div>
      </div>
    </>
  );
};

export default NCMemberCard;
