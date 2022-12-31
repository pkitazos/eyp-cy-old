import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Dropdown, NavLink } from ".";

const Header: FC = () => {
  return (
    <>
      <div className='h-[13vh] flex flex-row justify-between'>
        <img
          className='my-7 ml-16 cursor-pointer'
          src='/logos/white-long.png'
          alt=' '
        />
        <div
          className={`px-16 flex justify-end items-center gap-10 
          text-white text-xl font-semibold`}
        >
          <NavLink item='Home' to='/' />

          <Dropdown
            mainItem='About Us'
            items={["Patrons", "Impact", "National Committee"]}
          />
          <Dropdown
            mainItem='Events'
            items={["Pre-selections", "National Session", "Youth Summit"]}
          />

          <Link
            className={`py-3 px-6 cursor-pointer bg-accent-900 text-black 
            rounded-4xl hover:rounded-xl transition-rounded duration-300`}
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
