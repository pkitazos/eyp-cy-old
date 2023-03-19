import type { FC } from "react";
import { Underline } from "../SVGs";

interface props {
  title: string;
  className?: string;
}

const PageTitle: FC<props> = ({ title, className }) => {
  return (
    <>
      <div className={`flex flex-col ${className ?? "items-center"} gap-2`}>
        <h2 className='text-5xl font-semibold text-primary-800'>{title}</h2>
        <Underline className='mt-1 w-16 text-accent-900' />
      </div>
    </>
  );
};

export default PageTitle;
