"use client";
import type { ReactNode } from "react";
import { Title } from "./title";

interface props {
  title: string;
  children: ReactNode;
  action?: () => void;
}

export function CategoryCard({ title, children: info, action }: props) {
  return (
    <div className=" flex h-max flex-col items-center gap-4 rounded-md bg-gray-200/50 px-4 py-6 shadow-sm hover:bg-gray-300/50 sm:px-8 sm:py-12">
      <div className="flex w-full justify-start">
        <Title
          className="font-semibold"
          text={title}
          order="h3"
          underline="text-wave-800 rotate-[176deg]"
        />
      </div>
      <p className="mb-4 text-justify text-lg md:text-xl">{info}</p>
      {/* <div className="flex justify-end md:justify-center 3xl:justify-end w-full 3xl:pr-20">
        <Button onClick={action} >Join</Button>
      </div> */}
    </div>
  );
}
