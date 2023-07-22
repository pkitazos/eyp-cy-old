const generateKeyTimes: (n: number) => string = (n) => {
  const stepSize = 1 / (n - 1);
  let keyTimesString = "";
  for (let i = 0; i < n - 1; i++)
    keyTimesString += `${(i * stepSize).toFixed(3)}; `;
  return `${keyTimesString} 1`;
};

export default generateKeyTimes;
