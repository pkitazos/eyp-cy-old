import React, { FC } from "react";

interface props {
  pathArr: string[];
  fill: string;
  dur?: string;
}

const wave: FC<props> = ({ pathArr, fill, dur = "9s" }) => {
  return (
    <>
      <path fill={fill}>
        <animate
          attributeName='d'
          values={pathArr.join("; ")}
          dur={dur}
          repeatCount='indefinite'
        />
      </path>
    </>
  );
};

export default wave;
