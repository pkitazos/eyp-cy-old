import type { FC } from "react";
import { slugify } from "~/utils";

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
    <a href={`/events${slugify(title)}`}>
      <div className='group h-full w-60 max-w-xs overflow-hidden rounded-2xl bg-slate-100 shadow-lg transition-all duration-300 hover:scale-[1.02]'>
        <img src={imageURL} className='h-2/5 w-full object-cover' />
        <div className='h-3/5 p-6'>
          <h3 className='w-max text-xl font-semibold text-primary-800 transition-all duration-200 group-hover:font-bold group-hover:text-primary-700'>
            {title}
          </h3>
          <h4 className=' underline decoration-secondary-900 decoration-wavy underline-offset-8 transition-all duration-200 group-hover:font-bold group-hover:decoration-primary-700'>
            {date}
          </h4>

          <p className='mt-3 pb-6 leading-normal'>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default UpcomingEventCard;
