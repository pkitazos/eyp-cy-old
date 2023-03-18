import React, { FC, ReactNode } from "react";

interface props {
  title: string;
  children: ReactNode;
  image_URL?: string;
  className?: string;
}

const SessionElementCard: FC<props> = ({
  title,
  children,
  image_URL,
  className,
}) => {
  return (
    <>
      <div
        className={`${className}  flex h-max flex-row items-center gap-5 
        rounded-2xl bg-default-white px-8 py-8 transition-all duration-200 hover:scale-[1.01] hover:bg-sky-200/50`}
      >
        <img src={image_URL} className='' />
        <div>
          <h2 className='mb-4 text-3xl'>{title}</h2>
          <p className='text-justify text-lg'>{children}</p>
        </div>
      </div>
    </>
  );
};

export default SessionElementCard;
