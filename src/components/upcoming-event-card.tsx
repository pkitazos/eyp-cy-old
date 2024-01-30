import Image, { StaticImageData } from "next/image";
import { slugify } from "@/lib/utils";

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
      className="group flex max-w-[25rem] overflow-hidden rounded-2xl bg-slate-100 shadow-lg transition-all duration-300 hover:scale-[1.02] sm:w-60 sm:flex-col lg:w-48 xl:w-60"
      href={`/events${slugify(title)}`}
    >
      <Image
        width={200}
        height={150}
        src={imageURL}
        className="hidden h-2/5 w-full object-cover sm:block"
        alt=""
      />
      <div className=" p-6 sm:h-3/5">
        <span className="bg-underliner-orange bg-[length:0%_105%] bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_105%]">
          <span className="w-max text-xl font-semibold text-ocean-800">
            {title}
          </span>
          <br />
          <span className="font-semibold">{date}</span>
        </span>
        <div className="mt-1 block h-1 w-8 bg-orange-500 sm:hidden">&nbsp;</div>
        <p className="mt-2 pb-6 leading-normal sm:mt-3">{description}</p>
      </div>
    </a>
  );
};
