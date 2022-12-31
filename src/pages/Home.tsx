import React, { FC } from "react";
import { makePath, wavePaths } from "../helpers";
import { Header, Wave } from "../components";

const Home: FC = () => {
  return (
    <>
      <div className='w-full'>
        <svg viewBox='0 0 1057 676'>
          <Wave fill='#66D4FF' pathArr={wavePaths.l4} />
          <Wave fill='#00b7ff' pathArr={wavePaths.l3} />
          <Wave fill='#3654FF' pathArr={wavePaths.l2} />
          <Wave fill='#253AB0' pathArr={wavePaths.l1} />
        </svg>
      </div>
      <div className={`w-full top-0 absolute flex flex-col`}>
        <Header />
        <div>
          <div className='mt-32 ml-28 text-white text-7xl font-bold'>
            Welcome to
          </div>
          <div className='ml-60 text-accent-900 text-7xl font-bold'>
            Young Europe
          </div>
          <div
            className={`mt-14 mx-auto w-max py-5 px-9 text-2xl font-semibold bg-accent-900 cursor-pointer
            rounded-full hover:py-6 hover:px-10 transition-all duration-300`}
          >
            Join Us
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
