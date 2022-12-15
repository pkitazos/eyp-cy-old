const stringToRoute: (label: string) => string = (label) => {
  const route = label.toLowerCase().split(" ").join("-");
  return route;
};
export default stringToRoute;
