import type { FC } from "react";
import { stringToRoute } from "../../utils";

interface props {
  title: string;
  info: string;
  image_url: string;
}

const EventTypeCard: FC<props> = ({ title, info, image_url }) => {
  return (
    <>
      <div className='flex h-max flex-row items-center gap-5'>
        <img
          className='object-fit aspect-auto w-1/3 px-4 transition-all duration-300 hover:-translate-y-2.5'
          src={image_url}
        />
        <a
          href={`/events${stringToRoute(title)}`}
          className='w-2/3 transition-all duration-300 hover:-translate-y-2.5'
        >
          <h2 className='text-3xl'>{title}</h2>
          <p className='text-lg'>{info}</p>
        </a>
      </div>
    </>
  );
};

export default EventTypeCard;
