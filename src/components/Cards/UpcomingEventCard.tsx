import type { FC } from "react";
import { slugify } from "../../utils";

// TODO: improve design

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
    <a href={slugify(title)}>
      <div className='group h-full w-60 max-w-xs overflow-hidden rounded-2xl bg-slate-100 shadow-lg transition-all duration-300 hover:scale-[1.02]'>
        <img src={imageURL} className='h-2/5 w-full object-cover' />
        <div className='h-3/5 p-6'>
          <h3 className='w-max text-xl font-semibold text-primary-800'>
            {title}
          </h3>
          <h4 className='text-blue-600'>{date}</h4>
          <div className='mb-4 mt-3 h-0.5 w-16 bg-primary-700 group-hover:bg-orange-600'>
            &nbsp;
          </div>
          <p className='pb-6 leading-normal'>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default UpcomingEventCard;
