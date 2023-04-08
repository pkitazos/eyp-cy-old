import type { FC } from "react";
import { Underline } from "..";

interface props {
  title: string;
  titleSize?: string;
  titleColor?: string;
  titlePosition?: string;
  underlineWidth?: string;
  underlineColor?: string;
}

const Title: FC<props> = ({
  title,
  titleSize = "text-3xl",
  titleColor = "text-primary-800",
  titlePosition = "items-center",
  underlineWidth = "w-16",
  underlineColor = "text-accent-900",
}) => {
  return (
    <>
      <div className={`flex ${titlePosition} gap-2`}>
        <div className='flex flex-col items-center'>
          <h1
            className={`${titleSize} ${titleColor} text-center font-semibold `}
          >
            {title}
          </h1>
          <Underline
            className='mt-1'
            underlineWidth={underlineWidth}
            underlineColor={underlineColor}
          />
        </div>
      </div>
    </>
  );
};

export default Title;
