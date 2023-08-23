import { ReactNode } from "react";
import Image from "next/image";
import { Title } from ".";
import { cn } from "~/utils";

interface props {
  title: string;
  reversed?: boolean;
  imageURL: string;
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
          "flex group gap-2 items-center",
          reversed ? "flex-row-reverse" : "flex-row"
        )}
      >
        <div className="w-1/4 rounded-lg bg-pink-500">
          <Image
            width={250}
            height={250}
            src={imageURL}
            alt=""
            className={cn(
              "h-[97%] w-[97%] content-center rounded-lg object-cover transition-all duration-300",
              reversed
                ? "translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5"
                : "-translate-x-4 -translate-y-4 group-hover:-translate-x-5 group-hover:-translate-y-5"
            )}
          />
        </div>
        <div
          className={cn(
            "m-8 mr-12 w-3/4 transition-all duration-300 group-hover:scale-[1.02]",
            className
          )}
        >
          <Title text={title} order="h3" />
          <p className="text-justify text-lg">{children}</p>
        </div>
      </div>
    </>
  );
}
