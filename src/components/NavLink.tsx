import React, { FC } from "react";
import { Link } from "react-router-dom";
import { stringToRoute } from "../helpers";

interface props {
  item: string;
  to?: string;
  className?: string;
}

const NavLink: FC<props> = ({ item, to, className }) => {
  return (
    <Link
      className={`py-2 px-5 cursor-pointer hover:bg-accent-900 hover:text-black rounded-xl
        ${className}`}
      to={to ? to : stringToRoute(item)}
    >
      {item}
    </Link>
  );
};

export default NavLink;
