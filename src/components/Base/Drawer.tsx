import { FC, useState } from "react";
import { slugify } from "~/utils";
import { ChevronDown } from "..";

interface props {
  mainItem: string;
  items: string[];
  prefix?: string;
}

const Drawer: FC<props> = ({ mainItem, items, prefix = "" }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className='collapse -mr-8 '>
        <input
          type='checkbox'
          className='peer'
          onChange={() => setExpanded(!expanded)}
        />
        <div
          className={`${
            expanded ? "line-through" : ""
          } collapse-title flex flex-row items-center justify-end gap-x-2 text-primary-content peer-checked:text-secondary-content`}
        >
          <ChevronDown
            className={`w-3 text-default-white ${
              expanded ? "-rotate-90" : ""
            } transition-all duration-200`}
          />
          <p> {mainItem}</p>
        </div>
        <div className='collapse-content mr-3 flex flex-col items-end gap-1.5 text-primary-content peer-checked:text-secondary-content'>
          <a
            className='cursor-pointer px-5 text-lg hover:text-slate-300'
            href={slugify(mainItem)}
          >
            {mainItem}
          </a>
          {items.map((item, i) => (
            <div key={i}>
              <a
                className='cursor-pointer px-5 text-lg hover:text-slate-300'
                href={`/${prefix}${slugify(item)}`}
              >
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Drawer;
