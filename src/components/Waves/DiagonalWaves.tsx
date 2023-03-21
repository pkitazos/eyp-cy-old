import type { FC } from "react";
import { wavePaths } from "../../data";
import { Wave } from "..";

const DiagonalWaves: FC = () => {
  return (
    <>
      <div className='w-full'>
        <svg
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 1057 676'
          className='w-full overflow-visible'
        >
          <Wave fill='#66D4FF' pathArr={wavePaths.l4} />
          <Wave fill='#00b7ff' pathArr={wavePaths.l3} />
          <Wave fill='#3654FF' pathArr={wavePaths.l2} />
          <Wave fill='#253AB0' pathArr={wavePaths.l1} />
        </svg>
      </div>
    </>
  );
};

export default DiagonalWaves;
