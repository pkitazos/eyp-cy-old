import React, { FC } from "react";

interface props {
  name: string;
  info: string;
  imageURL: string;
  children: React.ReactNode;
  className?: string;
}

const TestimonialCard: FC<props> = ({
  name,
  info,
  imageURL,
  children,
  className,
}) => {
  return (
    <>
      <div
        className={`testimonial-card ${className}
       bg-slate-200 px-12 py-8 rounded-4xl h-max flex flex-row gap-8 shadow-md`}
      >
        <img
          src={imageURL}
          className='rounded-full object-cover aspect-square w-1/4 my-auto'
        />
        <div className='w-3/4 flex flex-col gap-3 justify-center'>
          <h2 className='text-2xl font-bold text-primary-800'>{name}</h2>
          <h3 className='-mt-4 text-lg font-semibold text-primary-800/50 '>
            {info}
          </h3>
          <div className='h-0.5 w-16 bg-primary-700'>&nbsp;</div>
          <p className='text-justify leading-relaxed'>{children}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
