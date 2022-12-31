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
        <NavLink className='z-5' item={mainItem} />
        <div className='pt-2 dropdown-content'>
          <div className='mt-2 z-2 p-2 rounded-xl top-9 bg-primary-900/60'>
            {items.map((item, i) => (
              <div key={i}>
                <NavLink className='w-max menu-item' item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
