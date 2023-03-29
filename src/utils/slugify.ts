const slugify: (label: string) => string = (label) => {
  label = label.replace("&", "and");
  const route = label.toLowerCase().split(" ").join("-");
  return `/${route}`;
};
export default slugify;
