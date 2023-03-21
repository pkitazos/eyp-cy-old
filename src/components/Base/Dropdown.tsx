import type { FC } from "react";
import "~/styles/Dropdown.css";
import { NavLink } from ".";

interface props {
  mainItem: string;
  items: string[];
  prefix?: string;
}

const Dropdown: FC<props> = ({ mainItem, items, prefix = "" }) => {
  return (
    <>
      <div className='dropdown-container'>
        <NavLink className='z-5' item={mainItem} />
        <div className='pt-2 dropdown-content'>
          <div className='mt-2 z-2 p-2 rounded-xl top-9 bg-primary-900/60'>
            {items.map((item, i) => (
              <div key={i}>
                <NavLink
                  className='w-max menu-item'
                  item={item}
                  prefix={prefix}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
