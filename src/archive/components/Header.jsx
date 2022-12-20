import Dropdown from "./Dropdown";
import headerLogo from "../assets/headerLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='sticky top-0 z-50 shadow-md'>
        <div className='w-full h-24 md:h-32 px-10 bg-white flex flex-row justify-between'>
          <div className='lg:w-max flex  flex-initial sm:flex-none justify-center items-center'>
            <img
              className='object-scale-down h-14 cursor-pointer'
              src={headerLogo}
              alt='header-logo'
            />
          </div>
          <nav
            className={`h-full hidden lg:w-max lg:flex justify-center lg:gap-5`}
          >
            <div className='h-full'>
              <div
                className={`w-max h-full flex items-center
                text-lg font-medium text-primary-indigo-700 hover:text-primary-blue
                cursor-pointer `}
              >
                <Link to='/'>HOME</Link>
              </div>
            </div>
            <div className='h-full'>
              <Dropdown
                mainItem='ABOUT US'
                classes={`w-max h-full flex items-center 
                text-lg font-medium text-primary-indigo-700 hover:text-primary-blue
                cursor-pointer`}
                items={["PATRONS", "IMPACT", "NATIONAL COMMITTEE"]}
              />
            </div>
            <div className='h-full'>
              <Dropdown
                mainItem='EVENTS'
                classes={`w-max h-full flex items-center 
                text-lg font-medium text-primary-indigo-700 hover:text-primary-blue
                cursor-pointer`}
                items={["PRESELECTION", "NATIONAL SESSION", "YOUTH SUMMIT"]}
              />
            </div>
            <div className='h-full'>
              <div
                className={`w-max h-full flex items-center
                text-lg font-medium text-primary-indigo-700 hover:text-primary-blue 
                cursor-pointer`}
              >
                <Link to='/contact-us'>CONTACT US</Link>
              </div>
            </div>
            <div className='h-full flex items-center'>
              <div
                className={`w-max px-5 py-2 flex items-center bg-primary-dark-blue rounded-3xl
                text-lg font-medium text-white hover:bg-primary-indigo-700 
                cursor-pointer`}
              >
                <Link to='/get-involved'>Get Involved</Link>
              </div>
            </div>
          </nav>
        </div>
        <div className='h-2 flex flex-row'>
          <div className='basis-4/12 bg-primary-dark-blue'>&nbsp;</div>
          <div className='basis-8/12 bg-primary-yellow-500'>&nbsp;</div>
        </div>
      </div>
    </>
  );
};

export default Header;
