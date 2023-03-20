import type { FC } from "react";
import { Dropdown, NavLink } from "..";
import "./Base.css";

const Header: FC = () => {
  return (
    <>
      <div className='w-full fixed top-0 z-50 flex h-[10vh] flex-row items-center justify-between bg-primary-800 px-16'>
        <a className='w-1/6' href='/'>
          <img
            className='h-auto w-full cursor-pointer'
            src='/logos/white-long.png'
            alt=' '
          />
        </a>
        <div className='flex items-center justify-end gap-10 text-xl font-semibold text-white'>
          <NavLink item='Home' to='/' />
          <Dropdown
            mainItem='About Us'
            items={["Patrons & Partners", "Impact", "National Committee"]}
          />
          <Dropdown
            mainItem='Events'
            prefix='events'
            items={[
              "Pre-Selection Days",
              "Days of EYP",
              "Youth Summit",
              "National Session",
            ]}
          />
          <Dropdown
            prefix='public-relations'
            mainItem='Public Relations'
            items={["Press Releases"]}
          />

          <a
            className={`transition-rounded cursor-pointer rounded-4xl bg-accent-900 py-3 
            px-6 text-black duration-300 hover:rounded-2xl hover:py-4 hover:px-7`}
            href='/get-involved'
          >
            Get Involved
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
