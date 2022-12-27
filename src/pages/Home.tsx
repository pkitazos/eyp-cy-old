import React, { FC } from "react";
import { makePath, wavePaths, Wave } from "../helpers";
import "./Test.css";

const Home: FC = () => {
  return (
    <>
      <div className='w-full'>
        <svg viewBox='0 0 1057 676'>
          {/* <Wave fill='#66D4FF' pathArr={makePath(wavePaths.l1)} />
          <Wave fill='#00B7FF' pathArr={makePath(wavePaths.l2)} />
          <Wave fill='#3654FF' pathArr={makePath(wavePaths.l3)} /> */}
          <Wave fill='#253AB0' pathArr={makePath(wavePaths.v5)} />
        </svg>
      </div>
      <div
        className={`my-2 px-16 w-full h-16 top-0 absolute 
                    flex justify-end items-center gap-10 
                    text-xl font-semibold`}
      >
        <div className='py-2 px-5 cursor-pointer hover:bg-accent-900 hover:text-black rounded-xl'>
          Home
        </div>
        <div className='py-2 px-5 cursor-pointer hover:bg-accent-900 hover:text-black rounded-xl'>
          About Us
        </div>
        <div className='py-2 px-5 cursor-pointer hover:bg-accent-900 hover:text-black rounded-xl'>
          Events
        </div>
        <div className='py-3 px-6 cursor-pointer bg-amber-400 text-black action-btn'>
          Get Involved
        </div>
      </div>
    </>
  );
};

export default Home;
