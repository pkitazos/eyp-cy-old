import Dropdown from "./Dropdown";
import headerLogo from "../assets/headerLogo.png";

const Header = () => {
  return (
    <>
      <div className='sticky top-0 z-50 shadow-md'>
        <div className='w-full h-32 -mb-1 bg-white flex flex-row justify-around items-center'>
          <div className='basis-4/12 flex justify-center'>
            <img
              className='object-scale-down h-14 cursor-pointer'
              src={headerLogo}
              alt='header-logo'
            />
          </div>
          <nav
            className={`h-full basis-8/12 md:flex justify-center
            hidden md:gap-2 lg:gap-5`}
          >
            <div className='h-full'>
              <div
                className={`w-max h-full flex items-center
                text-lg font-medium text-primary-indigo hover:text-primary-blue
                cursor-pointer `}
              >
                HOME
              </div>
            </div>
            <div className='h-full'>
              <Dropdown
                label='ABOUT US'
                labelClasses={`w-max h-full flex items-center 
                text-lg font-medium text-primary-indigo hover:text-primary-blue
                cursor-pointer`}
                items={["PATRONS", "IMPACT", "NATIONAL COMMITTEE"]}
              />
            </div>
            <div className='h-full'>
              <Dropdown
                label='EVENTS & ACTIVITIES'
                labelClasses={`w-max h-full flex items-center 
                text-lg font-medium text-primary-indigo hover:text-primary-blue
                cursor-pointer`}
                items={["PRESELECTION", "NATIONAL SESSION", "YOUTH SUMMIT"]}
              />
            </div>
            <div className='h-full'>
              <div
                className={`w-max h-full flex items-center
                text-lg font-medium text-primary-indigo hover:text-primary-blue 
                cursor-pointer`}
              >
                CONTACT US
              </div>
            </div>
            <div className='h-full flex items-center'>
              <div
                className={`w-max px-5 py-2 flex items-center bg-primary-dark-blue rounded-3xl
                text-lg font-medium text-white hover:bg-primary-indigo 
                cursor-pointer`}
              >
                Get Involved
              </div>
            </div>
          </nav>
        </div>
        <div className='h-2 flex flex-row'>
          <div className='basis-4/12 bg-primary-dark-blue'>&nbsp;</div>
          <div className='basis-8/12 bg-primary-yellow z-10'>&nbsp;</div>
        </div>
      </div>
    </>
  );
};

export default Header;
