import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Dropdown, NavLink } from ".";

const Header: FC = () => {
  return (
    <>
      <div className='px-16 h-[10vh] flex flex-row justify-between items-center'>
        <Link className='w-1/6' to='/'>
          <img
            className='cursor-pointer w-full h-auto'
            src='/logos/white-long.png'
            alt=' '
          />
        </Link>
        <div
          className={`flex justify-end items-center gap-10 
          text-white text-xl font-semibold`}
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
          <Dropdown mainItem='PR Section' items={["Press Releases"]} />

          <Link
            className={`py-3 px-6 cursor-pointer bg-accent-900 text-black 
            rounded-4xl hover:rounded-2xl hover:py-4 hover:px-7 transition-rounded duration-300`}
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
