import type { FC, ReactNode } from "react";

interface props {
  children: ReactNode[];
}

const WhatWeDoSection: FC<props> = ({ children }) => {
  return (
    <div className='flex flex-row flex-wrap justify-evenly gap-7'>
      {children}
    </div>
  );
};

export default WhatWeDoSection;
