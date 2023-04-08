const slugify: (label: string) => string = (label) => {
  let route = label.replace("&", "and").replace(" ", "-").toLowerCase();
  return `/${route}`;
};
export default slugify;
