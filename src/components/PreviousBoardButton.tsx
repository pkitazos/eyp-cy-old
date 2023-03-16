import React, { FC } from "react";

interface props {
  year: string;
  previousBoardInfo?: string;
}

const PreviousBoardButton: FC<props> = ({ year }) => {
  return (
    <>
      <div className='cursor-pointer rounded-md bg-sky-200 px-7 py-2 text-xl hover:scale-105 hover:bg-sky-300'>
        {year}
      </div>
    </>
  );
};

export default PreviousBoardButton;
