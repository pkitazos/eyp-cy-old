import type { FC } from "react";
import { Wave } from "~/components";

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

const WaveDivider: FC<props> = ({ waveLayers, viewBox = "0 0 1000 250" }) => {
  return (
    <>
      <svg id='visual' viewBox={viewBox}>
        {getWaveData(waveLayers).map(([path, color]) => (
          <Wave fill={color} pathArr={path} />
        ))}
      </svg>
    </>
  );
};

export default WaveDivider;
