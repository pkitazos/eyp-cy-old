import type { FC } from "react";
import { Underline } from "..";

interface props {
  title: string;
  imageURL: string;
  children: React.ReactNode;
  reversed?: boolean;
  underline?: string;
}

const ImpactFlipCard: FC<props> = ({
  title,
  imageURL,
  reversed,
  children,
  underline = "text-accent-900",
}) => {
  return (
    <div
      className={`flex ${
        reversed ? "flex-row-reverse" : "flex-row"
      } items-middle mx-24 gap-x-14`}
    >
      <div className='flex basis-5/12'>
        <img
          src={imageURL}
          alt='...'
          className='self-center rounded-xl object-cover object-center'
        />
      </div>
      <div className='items-middle flex basis-7/12 flex-col justify-center gap-y-4'>
        <div className='text-center text-2xl font-medium text-primary-800'>
          {title}
        </div>
        <Underline className={`w-10 self-center ${underline}`} />
        <div className='text-justify text-xl'>{children}</div>
      </div>
    </div>
  );
};

export default ImpactFlipCard;
