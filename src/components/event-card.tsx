import Image from "next/image";
import { slugify } from "~/utils";

interface props {
  title: string;
  info: string;
  imageURL: string;
}

export function EventTypeCard({ title, info, imageURL }: props) {
  return (
    <>
      <div className="flex h-max flex-col items-center gap-5 transition-all duration-300 hover:-translate-y-2.5 xs:flex-row xs:hover:translate-y-0">
        <Image
          width={300}
          height={300}
          className="object-fit aspect-auto w-1/3 px-4 transition-all duration-300 xs:hover:-translate-y-2.5"
          src={imageURL}
          alt={""}
        />
        <a
          href={`/events${slugify(title)}`}
          className="w-2/3 transition-all duration-300 xs:hover:-translate-y-2.5"
        >
          <h2 className="text-3xl">{title}</h2>
          <p className="text-lg">{info}</p>
        </a>
      </div>
    </>
  );
}
