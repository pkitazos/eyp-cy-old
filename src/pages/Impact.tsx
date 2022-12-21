import React, { FC } from "react";
import { makePath, wavePaths, Wave } from "../helpers";

const Impact: FC = () => {
  return (
    <div className='w-full'>
      <svg viewBox='0 0 900 200'>
        <Wave fill='#3654FF' pathArr={makePath(wavePaths.l1)} />
        <Wave fill='#2B43CC' pathArr={makePath(wavePaths.l2)} />
        <Wave fill='#253AB0' pathArr={makePath(wavePaths.l3)} />
        <Wave fill='#1F3091' pathArr={makePath(wavePaths.l4)} />
      </svg>
    </div>
  );
};

export default Impact;
