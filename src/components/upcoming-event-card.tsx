import Image, { StaticImageData } from "next/image";
import { slugify } from "~/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface props {
  title: string;
  date: string;
  description?: string;
  imageURL: StaticImageData;
  actionText?: string;
  actionURL?: string;
}

export const UpcomingEventCard = ({
  title,
  date,
  description,
  imageURL,
  actionText,
  actionURL,
}: props) => {
  return (
    <Wrapper title={title} hasAction={!!actionText}>
      <Image
        width={200}
        height={150}
        src={imageURL}
        className="hidden sm:block h-2/5 w-full object-cover"
        alt=""
      />
      <div className="flex flex-col justify-between sm:h-3/5 p-6">
        <div>
          <span className="bg-underliner-orange bg-[length:0%_105%] group-hover:bg-[length:100%_105%] bg-no-repeat transition-[background-size] duration-500">
            <span className="w-max text-xl font-semibold text-primary-800">
              {title}
            </span>
            <br />
            <span className="font-semibold">{date}</span>
          </span>
          <div className="block sm:hidden mt-1 h-1 w-8 bg-orange-500">
            &nbsp;
          </div>
          <p className="mt-2 sm:mt-3 pb-6 leading-normal text-justify tracking-tight">
            {description}
          </p>
        </div>
        {actionText && actionURL && (
          <Link className="w-full mt-3 flex justify-center" href={actionURL}>
            <Button
              className="w-full bg-accent-900 rounded-md font-bold hover:bg-accent-800 text-white text-lg"
              size="lg"
              variant="destructive"
            >
              {actionText}
            </Button>
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

function Wrapper({
  hasAction,
  title,
  children,
}: {
  hasAction: boolean;
  title: string;
  children: ReactNode;
}) {
  if (hasAction) {
    return (
      <div className="cursor-default group max-w-[25rem] sm:w-60 lg:w-48 xl:w-60 flex sm:flex-col overflow-hidden rounded-2xl bg-slate-100 shadow-lg transition-all duration-300 hover:scale-[1.02]">
        {children}
      </div>
    );
  }

  return (
    <Link
      className="group max-w-[25rem] sm:w-60 lg:w-48 xl:w-60 flex sm:flex-col overflow-hidden rounded-2xl bg-slate-100 shadow-lg transition-all duration-300 hover:scale-[1.02]"
      href={`/events${slugify(title)}`}
    >
      {children}
    </Link>
  );
}
