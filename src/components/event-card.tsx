import Image, { StaticImageData } from "next/image";
import { cn, slugify } from "@/lib/utils";

interface props {
  title: string;
  children: string;
  imageURL: StaticImageData;
  className?: string;
}

export function EventTypeCard({
  title,
  children: description,
  imageURL,
  className,
}: props) {
  return (
    <>
      <a
        href={`/events${slugify(title)}`}
        className={cn(
          "flex h-max flex-col items-center gap-5 transition-all duration-300 hover:-translate-y-2.5 xs:hover:translate-y-0 sm:flex-row",
          className,
        )}
      >
        <div className="basis-1/4">
          <Image
            width={300}
            height={300}
            className="object-fit aspect-auto max-w-[16rem] px-4 transition-all duration-300 xs:hover:-translate-y-2.5"
            src={imageURL}
            alt=""
          />
        </div>
        <div className="flex w-2/3 basis-3/4 flex-col transition-all duration-300 xs:hover:-translate-y-2.5">
          <h2 className="text-xl font-semibold md:text-2xl xl:text-3xl xl:font-normal">
            {title}
          </h2>
          <p className="text-lg">{description}</p>
        </div>
      </a>
    </>
  );
}
