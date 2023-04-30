import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <h1 className="flex text-3xl font-medium mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Url Shortener
          </h1>
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start"></div>
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="h-10 w-10 rounded-full bg-white items-center justify-center border-2 border-green-400"
            >
              <p className="font-bold">P</p>
            </button>
            {profileOpen && (
              <div className="bg-white cursor-default mt-2 text-black font-semibold flex border-green-400 border-2 items-start flex-col justy-between absolute h-10 justify-center w-28 rounded-lg">
                <Link href={"/Profile"}>
                  <p className="ml-1  text-gray-400 transition duration-500 ease-in-out hover:text-black font-semibold tr04">
                    Urls
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
