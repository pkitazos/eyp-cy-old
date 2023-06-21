type boardPosition = { position: string; name: string };

type years =
  | 2007
  | 2008
  | 2009
  | 2010
  | 2011
  | 2012
  | 2013
  | 2014
  | 2015
  | 2016
  | 2017
  | 2018
  | 2019
  | 2020
  | 2021
  | 2022;

type yearString = `year_${years}`;

type singleWave = {
  layers: string[][];
  colors: string[];
};

type waveData = {
  [dividerName: string]: singleWave;
};
