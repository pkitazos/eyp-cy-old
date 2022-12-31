import React, { FC } from "react";
import { makePath } from "../helpers";

interface props {
  pathArr: string[];
  fill: string;
}

const Wave: FC<props> = ({ fill, pathArr }) => {
  return (
    <path fill={fill}>
      <animate
        attributeName='d'
        values={makePath(pathArr).join("; ")}
        keyTimes='0; 0.1; 0.2; 0.3; 0.4; 0.5; 0.6; 0.7; 0.8; 0.9; 1'
        dur='11s'
        repeatCount='indefinite'
      />
    </path>
  );
};

export default Wave;
