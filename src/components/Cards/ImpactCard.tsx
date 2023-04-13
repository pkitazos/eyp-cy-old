import type { FC } from "react";
import { MaskedImage, Title } from "~/components";

interface props {
  title: string;
  imageURL: string;
  children: React.ReactNode;
  reversed?: boolean;
  underlineColor?: string;
}

const ImpactCard: FC<props> = ({
  title,
  imageURL,
  reversed,
  children,
  underlineColor = "text-accent-900",
}) => {
  return (
    <div
      className={`flex ${
        reversed ? "sm:flex-row-reverse" : "sm:flex-row"
      } items-center gap-10`}
    >
      <div className='hidden h-full sm:flex lg:w-1/2 xl:w-2/5'>
        <MaskedImage imageURL={imageURL} />
      </div>
      <div className=' flex flex-col justify-center gap-y-4 lg:w-1/2 xl:w-3/5'>
        <Title text={title} order='h2' underlineColor={underlineColor} />
        <p className='text-justify text-lg leading-relaxed md:text-xl'>
          {children}
        </p>
      </div>
    </div>
  );
};

export default ImpactCard;
