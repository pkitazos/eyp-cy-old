import type { FC } from "react";
import { slugify } from "../../utils";

interface props {
  item: string;
  to?: string;
  prefix?: string;
  className?: string;
}

const NavLink: FC<props> = ({ item, to, prefix = "", className }) => {
  if (prefix) {
    prefix = "/" + prefix;
  }
  return (
    <a
      className={`cursor-pointer rounded-xl py-2 px-5 hover:bg-accent-900 hover:text-black
        ${className}`}
      href={`${prefix}${to ? to : slugify(item)}`}
    >
      {item}
    </a>
  );
};

export default NavLink;
