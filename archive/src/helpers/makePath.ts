const makePath: (arr: string[]) => string[] = (arr) => {
  let resultArr = arr.concat(arr.slice(0, -1).reverse());
  return resultArr;
};

export default makePath;
