import type { FC } from "react";
import { slugify } from "~/utils";

interface props {
  item: string; // make children?
  to?: string;
  prefix?: string;
  className?: string;
}

// TODO remove prefix @petro

const NavLink: FC<props> = ({ item, to, prefix = "", className }) => {
  if (prefix) {
    prefix = "/" + slugify(item);
  }
  return (
    <a
      className={`cursor-pointer rounded-xl px-5 py-2 hover:bg-accent-900 hover:text-black
        ${className}`}
      href={`${prefix}${to ? to : slugify(item)}`}
    >
      {item}
    </a>
  );
};

export default NavLink;
