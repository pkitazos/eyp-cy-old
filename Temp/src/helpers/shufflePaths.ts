const shufflePaths: (paths: string[]) => string[] = (paths) => {
  let currentIndex = paths.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [paths[currentIndex], paths[randomIndex]] = [
      paths[randomIndex],
      paths[currentIndex],
    ];
  }

  return paths;
};

export default shufflePaths;
