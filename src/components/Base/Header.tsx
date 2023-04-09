import { FC, useState } from "react";
import { useMediaQuery } from "~/hooks";
import "~/styles/Header.css";
import { Drawer, Dropdown } from ".";

const HeaderLogo = () => {
  return (
    <a
      href='/'
      className='w-3/4 max-w-[15rem] xs:w-3/5 xs:max-w-[17rem] sm:w-2/5 sm:max-w-none md:w-1/3 lg:w-1/5 lg-xl:w-80 xl:w-80'
    >
      <img
        className='my-2cursor-pointer h-auto '
        src='/logos/white-long.png'
        alt='EYP Cyprus logo'
      />
    </a>
  );
};

const DesktopNav = () => {
  return (
    <div className='flex items-center justify-end gap-4 text-xl font-semibold text-white xl:gap-10'>
      <a
        href='/'
        className='cursor-pointer rounded-xl px-5 py-2 hover:bg-accent-900 hover:text-black'
      >
        Home
      </a>

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

      <a
        className='cursor-pointer rounded-4xl bg-accent-900 px-6 py-3 text-black transition-all duration-300 hover:scale-[1.05] hover:rounded-2xl'
        href='/get-involved'
      >
        Get Involved
      </a>
    </div>
  );
};

const MobileNav = () => {
  const [menuVisibile, setMenuVisibile] = useState(false);

  return (
    <>
      <button
        className='absolute right-8 h-8'
        onClick={() => setMenuVisibile(!menuVisibile)}
      >
        <div className={`${menuVisibile ? "open" : "close"} menu-btn`}>
          <div className='menu-btn__burger' />
        </div>
      </button>
      <div
        className={`menu-list mt-[10vh] flex h-[90vh] flex-col items-end gap-3 bg-primary-600/75
        px-10 pt-10 text-xl ${menuVisibile ? "visible" : ""}`}
      >
        <a href='/' className='px-4 text-primary-content'>
          Home
        </a>
        <Drawer
          mainItem='About Us'
          items={["Patrons & Partners", "Impact", "National Committee"]}
        />
        <Drawer
          mainItem='Events'
          items={[
            "Pre-Selection Days",
            "Days of EYP",
            "Youth Summit",
            "National Session",
          ]}
        />
        <Drawer mainItem='Public Relations' items={["Press Releases"]} />

        <a
          className={`transition-rounded cursor-pointer rounded-4xl bg-accent-900 px-6
      py-3 text-black duration-300 hover:scale-[1.01]`}
          href='/get-involved'
        >
          Get Involved
        </a>
      </div>
    </>
  );
};

const Header: FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <div className='fixed top-0 z-50 flex h-[10vh] w-full flex-row items-center justify-between bg-primary-800 px-4 xl:px-16'>
        <HeaderLogo />
        {isDesktop ? <DesktopNav /> : <MobileNav />}
      </div>
    </>
  );
};

export default Header;
