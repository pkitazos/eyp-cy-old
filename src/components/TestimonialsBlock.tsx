import React, { useState } from "react";
import { CaretLeft, CaretRight, TestimonialCard } from ".";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      name: "name 1",
      info: "info 1",
      content: "content 1",
      imageURL: "/TheodoulosPhoto.jpg",
    },
    {
      name: "name 2",
      info: "info 2",
      content: "content 2",
      imageURL: "/TheodoulosPhoto.jpg",
    },
    {
      name: "name 3",
      info: "info 3",
      content: "content 3",
      imageURL: "/TheodoulosPhoto.jpg",
    },
  ];

  const handleLeftClick = () => {
    setIndex((prevIndex) => {
      return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    });
  };

  const handleRightClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className='grid grid-cols-12 gap-3'>
      <button
        className='justify-self-end col-span-1 w-1/3 text-slate-400 cursor-pointer hover:text-primary-600 transition-colors duration-200'
        onClick={handleLeftClick}
      >
        <CaretLeft />
      </button>
      <div className='col-span-10'>
        {testimonials.map((testimonial, i) => {
          return (
            <TestimonialCard
              key={i}
              className={`${i === index ? "active" : "inactive"} testimonial`}
              name={testimonial.name}
              info={testimonial.info}
              imageURL={testimonial.imageURL}
            >
              {testimonial.content}
            </TestimonialCard>
          );
        })}
      </div>
      <button
        className='justify-self-start col-span-1 w-1/3 text-slate-400 cursor-pointer hover:text-primary-600 transition-colors duration-200'
        onClick={handleRightClick}
      >
        <CaretRight />
      </button>
    </div>
  );
};

export default Testimonials;
