import type { FC } from "react";
import { stringToRoute } from "../../utils";

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
      className={`py-2 px-5 cursor-pointer hover:bg-accent-900 hover:text-black rounded-xl
        ${className}`}
      href={`${prefix}${to ? to : stringToRoute(item)}`}
    >
      {item}
    </a>
  );
};

export default NavLink;
