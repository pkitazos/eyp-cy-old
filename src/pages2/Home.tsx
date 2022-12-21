import React, { FC, useState } from "react";
import "./Home.css";
import { animated, useSpring } from "@react-spring/web";
import { wavePaths } from "../helpers/wavePaths";

const Home: FC = () => {
  let [activeWave, setActiveWave] = useState(0);

  const animationProps = useSpring({
    l1: wavePaths.l1[activeWave],
    l2: wavePaths.l2[activeWave],
    l3: wavePaths.l3[activeWave],
    l4: wavePaths.l4[activeWave],
  });

  const moveWave = () => {
    if (activeWave == 5) setActiveWave(0);
    else setActiveWave(++activeWave);
  };
  // setInterval(moveWave, 1000);

  return (
    <>
      <div className='w-full bg-white'>
        <svg
          id='visual'
          viewBox='0 0 900 200'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          version='1.1'
        >
          {/* <animated.path d={animationProps.l1} fill='#00b7ff' />
          <animated.path d={animationProps.l2} fill='#008fec' />
          <animated.path d={animationProps.l3} fill='#0366d2' />
          <animated.path d={animationProps.l4} fill='#253ab0' /> */}
          <animated.path d={animationProps.l1} fill='#3654FF' />
          <animated.path d={animationProps.l2} fill='#2B43CC' />
          <animated.path d={animationProps.l3} fill='#253AB0' />
          <animated.path d={animationProps.l4} fill='#1F3091' />
        </svg>
      </div>
      {/* <div className='top-0 absolute h-screen w-full bg-slate-400/30'></div> */}
    </>
  );
};

export default Home;
