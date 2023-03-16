import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Dropdown, NavLink } from ".";

const Header: FC = () => {
  return (
    <>
      <div className='flex h-[10vh] flex-row items-center justify-between px-16'>
        <Link className='w-1/6' to='/'>
          <img
            className='h-auto w-full cursor-pointer'
            src='/logos/white-long.png'
            alt=' '
          />
        </Link>
        <div
          className={`flex items-center justify-end gap-10 
          text-xl font-semibold text-white`}
        >
          <NavLink item='Home' to='/' />

          <Dropdown
            mainItem='About Us'
            items={["Patrons & Partners", "Impact", "National Committee"]}
          />
          <Dropdown
            mainItem='Events'
            items={[
              "Pre-Selection Days",
              "Days of EYP",
              "Youth Summit",
              "National Session",
            ]}
          />
          <Dropdown mainItem='Public Relations' items={["Press Releases"]} />

          <Link
            className={`transition-rounded cursor-pointer rounded-4xl bg-accent-900 py-3 
            px-6 text-black duration-300 hover:rounded-2xl hover:py-4 hover:px-7`}
            to='/get-involved'
          >
            Get Involved
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
