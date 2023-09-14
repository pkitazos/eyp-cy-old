"use client";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import logo from "~/assets/logos/white-long.png";
import { cn, debounce } from "~/lib/utils";
import { Drawer } from "./drawer";
import { Dropdown } from "./dropdown";
import { Menu, X } from "lucide-react";

const HeaderLogo = () => {
  return (
    <a
      href="/"
      className="w-3/4 max-w-[15rem] xs:w-3/5 xs:max-w-[17rem] sm:w-2/5 sm:max-w-none md:w-1/3 lg:w-1/5 lg-xl:w-80 xl:w-80"
    >
      <Image
        width={600}
        height={100}
        className="my-2 h-auto cursor-pointer "
        src={logo}
        alt="EYP Cyprus logo"
      />
    </a>
  );
};

function MobileNav() {
  return (
    <Popover className="block lg:hidden">
      <Popover.Button>
        <Menu className="w-6 text-white" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-primary-700/70 backdrop-blur-md" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 h-[70vh] grid place-items-center"
          >
            <Popover.Button>
              <button className="absolute -top-[5vh] right-4">
                <X className="w-6 text-white" />
              </button>
            </Popover.Button>
            <nav className="flex flex-col gap-5">
              <a className="text-white text-2xl" href="/">
                Home
              </a>
              <Drawer
                mainItem="About Us"
                items={["Patrons & Partners", "Impact", "National Committee"]}
              />
              <Drawer
                mainItem="Events"
                items={[
                  "Pre-Selection Days",
                  "Days of EYP",
                  "Youth Summit",
                  "National Session",
                ]}
              />
              {/* <Drawer mainItem="Public Relations" items={["Press Releases"]} /> */}
              <a className="text-white text-2xl" href="/get-involved">
                Get Involved
              </a>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function DesktopNav() {
  return (
    <div className="hidden lg:flex items-center justify-end gap-4 text-xl font-semibold text-white xl:gap-10">
      <a
        href="/"
        className="cursor-pointer rounded-xl px-5 py-2 hover:bg-accent-900 hover:text-black"
      >
        Home
      </a>
      <Dropdown
        mainItem="About Us"
        items={["Patrons & Partners", "Impact", "National Committee"]}
      />
      <Dropdown
        mainItem="Events"
        items={[
          "Pre-Selection Days",
          "Days of EYP",
          "Youth Summit",
          "National Session",
        ]}
      />
      {/* <Dropdown mainItem="Public Relations" items={["Press Releases"]} /> */}
      <a
        className="cursor-pointer rounded-4xl bg-accent-900 px-6 py-3 text-black transition-all duration-300 hover:scale-[1.05] hover:rounded-2xl"
        href="/get-involved"
      >
        Get Involved
      </a>
    </div>
  );
}

export function Header() {
  const [isDocked, setIsDocked] = useState(true);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storeScroll = () => setIsDocked(window.scrollY === 0);
    const cb = debounce(storeScroll);

    document.addEventListener("scroll", cb, { passive: true });
    storeScroll();

    return () => document.removeEventListener("scroll", cb);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex h-[10vh] max-h-32 w-full flex-row items-center justify-between px-4 transition-all duration-150 xl:px-16",
        !isDocked && "bg-primary-800 shadow-md"
      )}
    >
      <HeaderLogo />
      <DesktopNav />
      <MobileNav />
    </div>
  );
}
