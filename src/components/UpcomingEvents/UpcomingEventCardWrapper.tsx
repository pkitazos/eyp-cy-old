import type { ReactNode } from "react";

interface props {
  children: ReactNode[];
}

const UpcomingEventCardWrapper = ({ children }: props) => {
  return (
    <div className="flex justify-end">
      <ul className="no-scrollbar flex h-max max-w-max flex-row justify-between gap-9 overflow-x-scroll p-5">
        {children.map((child, i) => {
          return (
            <li key={i} className="hide-right delay-card basis-1/4">
              {child}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UpcomingEventCardWrapper;
