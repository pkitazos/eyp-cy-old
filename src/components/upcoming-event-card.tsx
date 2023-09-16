import Image, { StaticImageData } from "next/image";
import { slugify } from "~/lib/utils";

interface props {
  title: string;
  date: string;
  description: string;
  imageURL: StaticImageData;
}

export const UpcomingEventCard = ({
  title,
  date,
  description,
  imageURL,
}: props) => {
  return (
    <a
      className="group max-w-[25rem] sm:w-60 lg:w-48 xl:w-60 flex sm:flex-col overflow-hidden rounded-2xl bg-slate-100 shadow-lg transition-all duration-300 hover:scale-[1.02]"
      href={`/events${slugify(title)}`}
    >
      <Image
        width={200}
        height={150}
        src={imageURL}
        className="hidden sm:block h-2/5 w-full object-cover"
        alt=""
      />
      <div className=" sm:h-3/5 p-6">
        <span className="bg-underliner-orange bg-[length:0%_105%] group-hover:bg-[length:100%_105%] bg-no-repeat transition-[background-size] duration-500">
          <span className="w-max text-xl font-semibold text-primary-800">
            {title}
          </span>
          <br />
          <span className="font-semibold">{date}</span>
        </span>
        <div className="block sm:hidden mt-1 h-1 w-8 bg-orange-500">&nbsp;</div>
        <p className="mt-2 sm:mt-3 pb-6 leading-normal">{description}</p>
      </div>
    </a>
  );
};
