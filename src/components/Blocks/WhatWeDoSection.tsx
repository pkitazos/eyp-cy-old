import type { FC, ReactNode } from "react";

interface props {
  children: ReactNode[];
}

const WhatWeDoSection: FC<props> = ({ children }) => {
  return (
    <div className='flex flex-col flex-wrap justify-evenly gap-7 px-6 md:flex-row md:px-0'>
      {children}
    </div>
  );
};

export default WhatWeDoSection;
