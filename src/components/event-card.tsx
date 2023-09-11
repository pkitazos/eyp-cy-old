import Image from "next/image";
import { cn, slugify } from "~/utils";

interface props {
  title: string;
  info: string;
  imageURL: string;
  className?: string;
}

export function EventTypeCard({ title, info, imageURL, className }: props) {
  return (
    <>
      <a
        href={`/events${slugify(title)}`}
        className={cn(
          "flex h-max flex-col items-center gap-5 transition-all duration-300 hover:-translate-y-2.5 sm:flex-row xs:hover:translate-y-0",
          className
        )}
      >
        <div className="basis-1/4">
          <Image
            width={300}
            height={300}
            className="object-fit aspect-auto px-4 transition-all duration-300 xs:hover:-translate-y-2.5"
            src={imageURL}
            alt=""
          />
        </div>
        <div className="basis-3/4 flex flex-col w-2/3 transition-all duration-300 xs:hover:-translate-y-2.5">
          <h2 className="text-3xl">{title}</h2>
          <p className="text-lg">{info}</p>
        </div>
      </a>
    </>
  );
}
