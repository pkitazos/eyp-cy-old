import React, { FC } from "react";
import { Wave } from "..";
import { wavePaths } from "../../helpers";

const FooterWaves: FC = () => {
  return (
    <>
      <div className='w-full '>
        <svg viewBox='0 0 1000 250'>
          <Wave fill='#00b7ff' pathArr={wavePaths.f1} />
          <Wave fill='#3654FF' pathArr={wavePaths.f2} />
          <Wave fill='#253AB0' pathArr={wavePaths.f3} />
        </svg>
      </div>
    </>
  );
};

export default FooterWaves;
