import Dropdown from "./Dropdown";
import headerLogo from "../assets/headerLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='sticky top-0 z-50'>
        <div className='w-full h-24 md:h-32 px-10 bg-white flex flex-row justify-between'>
          <div className='lg:w-max flex  flex-initial sm:flex-none justify-center items-center'>
            <img
              className='object-scale-down h-14 cursor-pointer'
              src={headerLogo}
              alt='header-logo'
            />
          </div>
          <nav
            className={`h-full hidden lg:w-max lg:flex justify-center lg:gap-5
            text-lg font-semibold text-primary-indigo-700 hover:text-primary-blue`}
          >
            <div className='h-full'>
              <div
                className={`w-max h-full flex items-center
                cursor-pointer `}
              >
                <Link to='/'>Home</Link>
              </div>
            </div>
            <div className='h-full'>
              <Dropdown
                mainItem='About Us'
                classes={`w-max h-full flex items-center 
                cursor-pointer`}
                items={["Patrons", "Impact", "National Committee"]}
              />
            </div>
            <div className='h-full'>
              <Dropdown
                mainItem='Events'
                classes={`w-max h-full flex items-center 
                cursor-pointer`}
                items={["Preselection", "National Session", "Youth Summit"]}
              />
            </div>
            <div className='h-full'>
              <div
                className={`w-max h-full flex items-center 
                cursor-pointer`}
              >
                <Link to='/contact-us'>Contact Us</Link>
              </div>
            </div>
            <div className='h-full flex items-center'>
              <div
                className={`w-max px-5 py-2 flex items-center bg-primary-dark-blue rounded-3xl
                text-white hover:bg-blue-400 cursor-pointer`}
              >
                <Link to='/get-involved'>Get Involved</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
