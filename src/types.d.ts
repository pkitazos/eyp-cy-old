type singleWave = {
  layers: string[][];
  colors: string[];
};

type waveData = {
  [dividerName: string]: singleWave;
};

type ratioArr = [1, 1, 1] | [1, 2, 1];

interface imageObj {
  src: string;
  alt: string;
}

type gridFlow = "lhs" | "rhs";
