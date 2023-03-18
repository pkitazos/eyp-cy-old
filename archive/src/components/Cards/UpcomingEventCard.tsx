import React, { FC } from "react";
import { Link } from "react-router-dom";
import { stringToRoute } from "../../helpers";

interface props {
  title: string;
  date: string;
  description: string;
  imageURL: string;
}

const UpcomingEventCard: FC<props> = ({
  title,
  date,
  description,
  imageURL,
}) => {
  return (
    <Link to={stringToRoute(title)}>
      <div className='group w-60 max-w-xs h-full bg-slate-200 hover:scale-[1.02] transition-all duration-300 rounded-2xl overflow-hidden shadow-lg'>
        <img src={imageURL} className='h-2/5 w-full object-cover' />
        <div className='p-6 h-3/5'>
          <h3 className='w-max text-xl text-primary-800 font-semibold'>
            {title}
          </h3>
          <h4 className='text-blue-600'>{date}</h4>
          <div className='mt-3 mb-4 h-0.5 w-16 bg-primary-700 group-hover:bg-orange-600'>
            &nbsp;
          </div>
          <p className='pb-6 leading-normal'>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default UpcomingEventCard;
