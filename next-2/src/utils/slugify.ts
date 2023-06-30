const slugify: (label: string) => string = (label) => {
  let route = label.replaceAll("&", "and").replaceAll(" ", "-").toLowerCase();
  return `/${route}`;
};
export default slugify;
