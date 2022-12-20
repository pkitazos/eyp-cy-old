import React, { FC } from "react";
import { Link } from "react-router-dom";
import { stringToRoute } from "../helpers";

interface props {
  mainItem: string;
  items: string[];
  classes: string;
}

const Dropdown: FC<props> = ({ mainItem, items, classes }) => {
  return (
    <>
      <div className={`peer relative ${classes}`}>
        <Link to={stringToRoute(mainItem)}>{mainItem}</Link>
      </div>
      <div
        className='hidden absolute top-32 pt-1 z-5
        peer-hover:flex hover:flex flex-col w-max 
        text-primary-dark-blue font-semibold bg-primary-yellow-500 rounded-b-lg drop-shadow-lg'
      >
        {items.map((item, i) => (
          <div key={i} className='px-4 py-2 m-1 rounded-md hover:bg-yellow-200'>
            <Link to={stringToRoute(item)}>{item}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dropdown;
