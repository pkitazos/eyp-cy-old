import Image, { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface props {
  title: string;
  reversed?: boolean;
  imageURL: StaticImageData;
  children: ReactNode;
  className?: string;
}

export function InfoCard({
  title,
  reversed = false,
  imageURL,
  children,
  className,
}: props) {
  return (
    <>
      <div
        className={cn(
          "group flex flex-col-reverse items-center gap-4",
          reversed ? "md:flex-row-reverse" : "md:flex-row",
        )}
      >
        <div className="w-2/3 rounded-lg bg-pink-500 xs:w-1/2 md:w-1/4">
          <Image
            width={250}
            height={250}
            src={imageURL}
            alt=""
            className={cn(
              "h-[97%] w-[97%] content-center rounded-lg object-cover transition-all duration-300",
              reversed
                ? "translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5"
                : "-translate-x-4 -translate-y-4 group-hover:-translate-x-5 group-hover:-translate-y-5",
            )}
          />
        </div>
        <div
          className={cn(
            "m-8 mr-12 flex w-full flex-col items-center transition-all duration-300 group-hover:scale-[1.02] xs:w-11/12 sm:w-10/12 md:w-3/4",
            className,
          )}
        >
          <h3 className="text-center text-xl font-semibold text-ocean-900 sm:text-2xl">
            {title}
          </h3>
          <div className="my-6 h-1 w-8 bg-wave-900">&nbsp;</div>
          <p className="text-justify text-lg">{children}</p>
        </div>
      </div>
    </>
  );
}
