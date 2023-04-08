import type { FC } from "react";
import { MaskedImage, Title, Underline } from "..";

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
        <Title
          title={title}
          titlePosition='justify-center'
          titleSize='text-xl xs:text-2xl md-lg:text-2xl '
          underlineWidth='w-9 xs:w-10 md-lg:w-12 rotate-[186deg] mb-3 xs:mb-4 md-lg:mb-6'
          underlineColor={underlineColor}
        />
        <p className='text-justify text-lg leading-relaxed md:text-xl'>
          {children}
        </p>
      </div>
    </div>
  );
};

export default ImpactCard;
