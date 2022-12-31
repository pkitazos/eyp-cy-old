import React, { FC } from "react";
import NavLink from "../NavLink";
import "./Extra.css";

interface props {
  mainItem: string;
  items: string[];
}

const Dropdown: FC<props> = ({ mainItem, items }) => {
  return (
    <>
      <div className='dropdown-container'>
        <NavLink item={mainItem} />
        <div className='dropdown-content'>
          {items.map((item, i) => (
            <div key={i}>
              <NavLink className='menu-item' item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
