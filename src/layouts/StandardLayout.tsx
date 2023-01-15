import React, { FC } from "react";

interface props {
  children: React.ReactNode;
}

const StandardLayout: FC<props> = ({ children }) => {
  return (
    <>
      <div className='mx-5 sm:mx-7 md:mx-10 lg:mx-20 xl:mx-25'>{children}</div>
    </>
  );
};

export default StandardLayout;
