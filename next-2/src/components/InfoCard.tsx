import { ReactNode } from "react";
import Image from "next/image";
import Title from "./Title";

interface props {
  title: string;
  reversed?: boolean;
  imageURL: string;
  children: ReactNode;
  className: string;
}

export default function InfoCard({
  title,
  reversed = false,
  imageURL,
  children,
  className,
}: props) {
  return (
    <>
      <div
        className={`linker flex ${
          reversed ? "flex-row-reverse" : "flex-row"
        } group`}
      >
        <div className="w-1/4 rounded-lg bg-pink-500">
          <Image
            width={250}
            height={250}
            src={imageURL}
            alt=""
            className="h-[97%] w-[97%] -translate-x-4 -translate-y-4 content-center rounded-lg object-cover transition-all duration-300 group-hover:-translate-x-5 group-hover:-translate-y-5"
          />
        </div>
        <div
          className={`m-8 mr-12 w-3/4 transition-all duration-300 group-hover:scale-[1.02] ${className}`}
        >
          <Title text={title} order={"h3"} />
          <p className="text-justify text-lg">{children}</p>
        </div>
      </div>
    </>
  );
}
