import type { FC } from "react";

interface props {
  name: string;
  description: string;
}

const PartnerCard: FC<props> = ({ name, description }) => {
  return (
    <div className='flex w-60 flex-col gap-5'>
      <img />
      <h2 className='text-2xl font-bold text-primary-700'>{name}</h2>
      <p className='text-lg'>{description}</p>
    </div>
  );
};

export default PartnerCard;
