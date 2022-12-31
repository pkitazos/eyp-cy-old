import React, { FC } from "react";
import { makePath, wavePaths } from "../helpers";

const Wave = ({ fill, pathArr }) => {
  return (
    <path fill={fill}>
      <animate
        attributeName='d'
        values={pathArr.join("; ")}
        keyTimes='0; 0.1; 0.2; 0.3; 0.4; 0.5; 0.6; 0.7; 0.8; 0.9; 1'
        dur='11s'
        repeatCount='indefinite'
      />
    </path>
  );
};

const Test: FC = () => {
  return (
    <svg viewBox='0 0 1057 676'>
      <Wave fill='#253AB0' pathArr={makePath(wavePaths.l4)} />
    </svg>
  );
};

export default Test;
