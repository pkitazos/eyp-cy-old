import type { FC } from "react";

interface props {
  position: string;
  children: string;
}

const BoardPosition: FC<props> = ({ position, children: name }) => {
  return (
    <div className='flex flex-col gap-1 p-1'>
      <h2 className='text-base font-semibold text-slate-500 sm:text-lg'>
        {position}
      </h2>
      <h2 className='text-lg font-semibold sm:text-xl'>{name}</h2>
    </div>
  );
};

export default BoardPosition;
