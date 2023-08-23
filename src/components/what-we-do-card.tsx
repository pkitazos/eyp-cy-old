import Image from "next/image";
import type { ReactNode } from "react";

interface props {
  title: string;
  info: string;
  imageURL: string;
  children: ReactNode;
}

export function WhatWeDoCard({ title, info, imageURL, children: icon }: props) {
  return (
    <div className="group flex w-full sm:grid sm:grid-cols-2 sm:items-center md:w-64 md:grid-cols-1">
      <Image
        height={250}
        width={250}
        src={imageURL}
        alt=""
        className="col-span-1 hidden h-60 rounded-xl object-cover transition-all duration-200 group-hover:scale-[0.97] sm:block"
      />
      <div className="my-glass relative mx-2 rounded-xl px-8 py-6 transition-all duration-200 group-hover:scale-[1.02] sm:col-span-1 sm:-ml-4 md:-mx-1 md:-mt-14">
        <div className="absolute -left-3 -top-3 flex h-max items-center rounded-full bg-accent-900 p-4 sm:hidden">
          {icon}
        </div>
        <h3 className="self-center px-7 pb-4 text-center text-xl font-semibold sm:px-0">
          {title}
        </h3>
        <p className="text-center tracking-wide">{info}</p>
      </div>
    </div>
  );
}
