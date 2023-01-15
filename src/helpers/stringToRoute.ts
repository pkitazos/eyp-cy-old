const stringToRoute: (label: string) => string = (label) => {
  //TODO: replace & symbol with 'and'
  const route = label.toLowerCase().split(" ").join("-");
  return `/${route}`;
};
export default stringToRoute;
