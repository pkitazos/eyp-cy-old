import React, { FC } from "react";

const Breadcrumbs: FC = () => {
  return (
    <>
      <div className='flex p-3'>
        <div className='px-2 text-slate-500'>Home</div>
        <div className='px-2'>&gt; </div>
        <div className='px-2 text-slate-500'>Public Relations </div>
        <div className='px-2'>&gt; </div>
        <div className='px-2 font-semibold text-primary-800'>
          Press Releases
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
