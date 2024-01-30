import Image, { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface props {
  title: string;
  reverse?: boolean;
  children: ReactNode;
  imageURL: StaticImageData;
  className?: string;
}

export function SessionElementCard({
  title,
  reverse,
  children,
  imageURL,
  className,
}: props) {
  return (
    <div
      className={cn(
        "group flex flex-col-reverse gap-4",
        reverse ? "md:flex-row-reverse" : "md:flex-row",
        className,
      )}
    >
      <div className="my-auto max-h-40 min-h-[8rem] w-1/2 rotate-3 place-self-end rounded-lg bg-pink-500 transition-transform duration-300 group-hover:rotate-6 md:max-h-56 md:w-1/3 md-lg:max-h-60 3xl:w-1/4">
        <Image
          width={250}
          height={250}
          src={imageURL}
          alt=""
          className="h-[97%] w-[97%] -translate-x-4 -translate-y-4 -rotate-3 content-center rounded-lg object-cover transition-all duration-300 group-hover:-rotate-6"
        />
      </div>
      <div className="w-full p-8 transition-all duration-300 group-hover:scale-[1.02] md:w-2/3 3xl:w-3/4">
        <div className={cn("flex", reverse && "md:justify-end")}>
          <h2 className="mb-4 bg-underliner-secondary bg-[length:0%_105%] bg-no-repeat text-xl font-semibold transition-[background-size] duration-500 group-hover:bg-[length:100%_105%] xl:text-3xl">
            {title}
          </h2>
        </div>
        <p className="text-justify text-lg">{children}</p>
      </div>
    </div>
  );
}
