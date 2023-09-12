import { wavePaths } from "~/data";

const hashCode = (str: string) => {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const makePath: (arr: string[]) => string[] = (arr) => {
  let resultArr = arr.concat(arr.slice(0, -1).reverse());
  return resultArr;
};

const generateKeyTimes: (n: number) => string = (n) => {
  const stepSize = 1 / (n - 1);
  let keyTimesString = "";
  for (let i = 0; i < n - 1; i++)
    keyTimesString += `${(i * stepSize).toFixed(3)}; `;
  return `${keyTimesString} 1`;
};

const getWaveData = (w: singleWave) => {
  let layers = w.layers;
  let colors = w.colors;
  return layers.map(function (layer, i) {
    return [layer, colors[i]] as [string[], string];
  });
};

interface waveProps {
  pathArr: string[];
  fill: string;
}

const Wave = ({ pathArr, fill }: waveProps) => {
  let steps = pathArr.length * 2 - 1;
  let keyTimes = generateKeyTimes(steps);
  return (
    <path fill={fill}>
      <animate
        attributeName="d"
        values={makePath(pathArr).join("; ")}
        keyTimes={keyTimes}
        dur={`${steps}s`}
        repeatCount="indefinite"
      />
    </path>
  );
};

interface waveDividerProps {
  waveLayers: singleWave;
  viewBox?: string;
}

const WaveStack = ({
  waveLayers,
  viewBox = "0 0 1000 300",
}: waveDividerProps) => {
  return (
    <>
      <svg id="visual" viewBox={viewBox}>
        {getWaveData(waveLayers).map(([path, color]) => (
          <Wave key={hashCode(path[0])} fill={color} pathArr={path} />
        ))}
      </svg>
    </>
  );
};

const headerDiagonal = () => (
  <WaveStack waveLayers={wavePaths.headerDiagonal} viewBox="0 0 1000 650" />
);
const headerHorizontal = () => (
  <WaveStack waveLayers={wavePaths.headerHorizontal} />
);
const footer = () => (
  <WaveStack waveLayers={wavePaths.footer} viewBox="0 0 1000 250" />
);
const homeTop = () => <WaveStack waveLayers={wavePaths.homeTop} />;
const homeBottom = () => <WaveStack waveLayers={wavePaths.homeBottom} />;
const eventsTop = () => <WaveStack waveLayers={wavePaths.eventsTop} />;
const eventsBottom = () => <WaveStack waveLayers={wavePaths.eventsBottom} />;
const patronsTop = () => <WaveStack waveLayers={wavePaths.patronsTop} />;
const patronsBottom = () => <WaveStack waveLayers={wavePaths.patronsBottom} />;
const aboutTop = () => <WaveStack waveLayers={wavePaths.aboutTop} />;
const aboutBottom = () => <WaveStack waveLayers={wavePaths.aboutBottom} />;

export const WaveDivider = {
  headerDiagonal,
  headerHorizontal,
  footer,
  homeTop,
  homeBottom,
  eventsTop,
  eventsBottom,
  patronsTop,
  patronsBottom,
  aboutTop,
  aboutBottom,
} as const;
