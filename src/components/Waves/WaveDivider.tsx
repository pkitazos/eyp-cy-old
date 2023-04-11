import type { FC } from "react";
import { Wave } from "~/components";

interface props {
  waveLayers: waveLayers;
  colors: string[];
  viewBox?: string;
}

const WaveDivider: FC<props> = ({
  waveLayers,
  colors,
  viewBox = "0 0 1000 250",
}) => {
  return (
    <>
      <svg id='visual' viewBox={viewBox}>
        {Object.keys(waveLayers).map((waveLayer, i) => (
          <Wave fill={colors[i]} pathArr={waveLayers[waveLayer]} />
        ))}
      </svg>
    </>
  );
};

export default WaveDivider;
