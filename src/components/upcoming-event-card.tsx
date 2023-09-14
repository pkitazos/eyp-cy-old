import Image from "next/image";
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
      className="group w-60 overflow-hidden rounded-2xl bg-slate-100 shadow-lg transition-all duration-300 hover:scale-[1.02]"
      href={`/events${slugify(title)}`}
    >
      <Image
        width={200}
        height={150}
        src={imageURL}
        className="h-2/5 w-full object-cover"
        alt=""
      />
      <div className="h-3/5 p-6">
        <span className="bg-underliner-orange bg-[length:0%_105%] group-hover:bg-[length:100%_105%] bg-no-repeat transition-[background-size] duration-500">
          <span className="w-max text-xl font-semibold text-primary-800">
            {title}
          </span>
          <br />
          <span className="font-semibold">{date}</span>
        </span>
        <p className="mt-3 pb-6 leading-normal">{description}</p>
      </div>
    </a>
  );
};
