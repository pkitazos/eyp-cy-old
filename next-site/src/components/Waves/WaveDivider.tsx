import type { FC } from "react";
import { Wave } from "~/components";
import { hashCode } from "~/utils";

interface props {
  waveLayers: singleWave;
  viewBox?: string;
}

const getWaveData = (w: singleWave) => {
  let layers = w.layers;
  let colors = w.colors;
  return layers.map(function (layer, i) {
    return [layer, colors[i]] as [string[], string];
  });
};

const WaveDivider: FC<props> = ({ waveLayers, viewBox = "0 0 1000 300" }) => {
  return (
    <>
      <svg id='visual' viewBox={viewBox}>
        {getWaveData(waveLayers).map(([path, color]) => (
          <Wave key={hashCode(path[0])} fill={color} pathArr={path} />
        ))}
      </svg>
    </>
  );
};

export default WaveDivider;
