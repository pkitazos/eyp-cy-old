import { FC, useState } from "react";
import { stringToRoute } from "~/utils";
import ChevronDown from "../SVGs/ChevronDown";
import "~/styles/Drawer.css";

interface props {
  mainItem: string;
  items: string[];
  prefix?: string;
}

const Drawer: FC<props> = ({ mainItem, items, prefix = "" }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className='-mr-8 collapse '>
        <input
          type='checkbox'
          className='peer'
          onChange={() => setExpanded(!expanded)}
        />
        <div
          className={`${
            expanded ? "line-through" : ""
          } collapse-title text-primary-content peer-checked:text-secondary-content flex flex-row gap-x-2 items-center justify-end`}
        >
          <ChevronDown
            className={`w-3 text-default-white ${
              expanded ? "-rotate-90" : ""
            } transition-all duration-200`}
          />
          <p> {mainItem}</p>
        </div>
        <div className='mr-3 collapse-content text-primary-content peer-checked:text-secondary-content flex flex-col gap-1.5 items-end'>
          <a
            className='px-5 hover:text-slate-300 cursor-pointer text-lg'
            href={stringToRoute(mainItem)}
          >
            {mainItem}
          </a>
          {items.map((item, i) => (
            <div key={i}>
              <a
                className='px-5 hover:text-slate-300 cursor-pointer text-lg'
                href={`${prefix}${stringToRoute(item)}`}
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
