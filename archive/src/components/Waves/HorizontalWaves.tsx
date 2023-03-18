import React, { FC } from "react";
import { Wave } from "..";
import { wavePaths } from "../../data";

const HorizontalWaves: FC = () => {
  return (
    <>
      <div className='w-full '>
        <div className='h-12 bg-primary-800'>&nbsp;</div>
        <svg viewBox='0 0 900 200'>
          <Wave fill='#66D4FF' pathArr={wavePaths.h1} />
          <Wave fill='#00b7ff' pathArr={wavePaths.h2} />
          <Wave fill='#3654FF' pathArr={wavePaths.h3} />
          <Wave fill='#253AB0' pathArr={wavePaths.h4} />
        </svg>
      </div>
    </>
  );
};

export default HorizontalWaves;
