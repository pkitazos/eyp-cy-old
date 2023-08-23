import Image from "next/image";
import { slugify } from "~/utils";

// TODO: improve design

interface props {
  title: string;
  date: string;
  description: string;
  imageURL: string;
}

const UpcomingEventCard = ({ title, date, description, imageURL }: props) => {
  return (
    <a className="linker" href={`/events${slugify(title)}`}>
      <div className="group h-full w-60 max-w-xs overflow-hidden rounded-2xl bg-slate-100 shadow-lg transition-all duration-300 hover:scale-[1.02]">
        <Image
          width={200}
          height={150}
          src={imageURL}
          className="h-2/5 w-full object-cover"
          alt=""
        />
        <div className="h-3/5 p-6">
          <span className="underliner">
            <span className="w-max text-xl font-semibold text-primary-800">
              {title}
            </span>
            <br />
            <span className="font-semibold">{date}</span>
          </span>
          <p className="mt-3 pb-6 leading-normal">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default UpcomingEventCard;
