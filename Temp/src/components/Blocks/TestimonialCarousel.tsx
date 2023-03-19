import React, { FC, ReactNode, useState } from "react";
import { CaretLeft, CaretRight } from "../SVGs";

interface props {
  children: ReactNode[];
}

const TestimonialCarousel: FC<props> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = children.length;

  return (
    <div className='flex'>
      <div className='relative flex'>
        <button
          onClick={() =>
            setCurrentIndex((prevState) => (prevState - 1 + length) % length)
          }
          className='absolute left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-slate-700 hover:text-slate-500'
        >
          <CaretLeft className='w-4' />
        </button>
        <div className='mx-auto w-10/12 overflow-hidden'>
          <div
            className='carousel-content flex items-center'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        <button
          onClick={() =>
            setCurrentIndex((prevState) => (prevState + 1) % length)
          }
          className='absolute right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-slate-700 hover:text-slate-500'
        >
          <CaretRight className='w-4' />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
