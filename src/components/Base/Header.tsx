import { FC, useState } from "react";
import { useMediaQuery } from "~/hooks";
import "~/styles/Header.css";
import { Drawer, Dropdown, NavLink } from ".";

const HeaderLogo = () => {
  return (
    <a
      href='/'
      className='w-3/4 max-w-[15rem] xs:max-w-[17rem] sm:max-w-none xs:w-3/5 sm:w-2/5 md:w-1/3 lg:w-1/5 lg-xl:w-80 xl:w-80'
    >
      <img
        className='h-auto my-2cursor-pointer '
        src='/logos/white-long.png'
        alt='EYP Cyprus logo'
      />
    </a>
  );
};

const DesktopNav = () => {
  return (
    <div className='flex items-center justify-end gap-4 xl:gap-10 text-xl font-semibold text-white'>
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
        className='transition-all cursor-pointer rounded-4xl bg-accent-900 py-3 px-6 text-black duration-300 hover:rounded-2xl hover:scale-[1.05]'
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
        className='h-8 right-8 absolute'
        onClick={() => setMenuVisibile(!menuVisibile)}
      >
        <div className={`${menuVisibile ? "open" : "close"} menu-btn`}>
          <div className='menu-btn__burger' />
        </div>
      </button>
      <div
        className={`menu-list flex flex-col px-10 pt-10 text-xl gap-3 items-end
        mt-[10vh] h-[90vh] bg-primary-600/75 ${menuVisibile ? "visible" : ""}`}
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
          prefix='events'
          items={[
            "Pre-Selection Days",
            "Days of EYP",
            "Youth Summit",
            "National Session",
          ]}
        />
        <Drawer
          prefix='public-relations'
          mainItem='Public Relations'
          items={["Press Releases"]}
        />

        <a
          className={`transition-rounded cursor-pointer rounded-4xl bg-accent-900 py-3
      px-6 text-black duration-300 hover:scale-[1.01]`}
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
      <div className='w-full fixed top-0 z-50 flex h-[10vh] flex-row items-center justify-between bg-primary-800 px-4 xl:px-16'>
        <HeaderLogo />
        {isDesktop ? <DesktopNav /> : <MobileNav />}
      </div>
    </>
  );
};

export default Header;
