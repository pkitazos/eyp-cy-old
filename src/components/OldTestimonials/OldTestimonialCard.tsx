import Image from "next/image";
import { QuoteLeftIcon, QuoteRightIcon } from "~/components";

// TODO: improve design
// TODO: make responsive

interface props {
  name: string;
  info: string;
  imageURL: string;
  children: React.ReactNode;
  className?: string;
}

const MobileLayout = (props: props) => {
  let { name, info, imageURL, children, className } = props;

  return (
    <div
      className={`${className}  flex h-max w-full flex-row rounded-2xl bg-white p-8 shadow-md lg:hidden`}
    >
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-row">
          <div className="flex flex-col items-start gap-2 md:basis-3/4 md:items-end">
            <h2 className="text-2xl font-bold text-primary-800">{name}</h2>
            <div>
              <div className="h-1.5 w-16 bg-accent-900">&nbsp;</div>
            </div>
            <h3 className="text-left text-lg font-semibold text-slate-700 md:text-right">
              {info}
            </h3>
          </div>
          <div className="hidden basis-1/4 items-center justify-center md:flex">
            <Image
              height={300}
              width={300}
              src={imageURL}
              alt="..."
              className="my-auto aspect-square w-3/4 rounded-full object-cover object-center"
            />
          </div>
        </div>
        <QuoteLeftIcon className="w-12 text-zinc-300" />
        <p className="text-justify text-base leading-relaxed md:text-xl">
          {children}
        </p>
        <div className="flex w-full justify-end">
          <QuoteRightIcon className="w-12 text-zinc-300" />
        </div>
      </div>
    </div>
  );
};

// TODO: sort out spacing of info in larger dimensions

const DesktopLayout = (props: props) => {
  let { name, info, imageURL, children, className } = props;

  return (
    <div
      className={`${className}  hidden h-max w-full flex-row rounded-2xl bg-white p-16 shadow-md lg:flex`}
    >
      <div className="flex basis-3/4 flex-col">
        <div className="flex basis-5/12 flex-row items-end justify-between gap-5 pb-16">
          <QuoteLeftIcon className="w-20 text-zinc-300" />
          <div className="flex flex-col items-end justify-end gap-2">
            <h2 className="row-span-1 text-2xl font-bold text-primary-800">
              {name}
            </h2>
            <div className="row-span-1">
              <div className="h-1.5 w-16 bg-accent-900">&nbsp;</div>
            </div>
            <h3 className="row-span-1 text-right text-lg font-semibold text-slate-700 ">
              {info}
            </h3>
          </div>
        </div>
        <div className="flex basis-7/12 items-start justify-center">
          <p className="text-justify text-lg leading-relaxed">{children}</p>
        </div>
      </div>
      <div className="flex basis-1/4 flex-col">
        <div className="flex basis-7/12 items-center justify-center">
          <Image
            height={300}
            width={300}
            src={imageURL}
            alt=""
            className="my-auto aspect-square w-2/3 rounded-full object-cover object-center"
          />
        </div>
        <div className=" flex basis-5/12 items-end justify-start pl-6">
          <QuoteRightIcon className="w-20 text-zinc-300" />
        </div>
      </div>
    </div>
  );
};

export const OldTestimonialCard = ({
  name,
  info,
  imageURL,
  children,
  className,
}: props) => {
  return (
    <>
      <DesktopLayout
        name={name}
        info={info}
        imageURL={imageURL}
        className={className}
      >
        {children}
      </DesktopLayout>
      <MobileLayout
        name={name}
        info={info}
        imageURL={imageURL}
        className={className}
      >
        {children}
      </MobileLayout>
    </>
  );
};
