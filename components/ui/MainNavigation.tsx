"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const genericHamburgerLine = `block h-1 w-8 my-1 rounded-full duration-500 bg-white hover:cursor-pointer`;

  return (
    <>
      <nav className="grid grid-cols-nav px-2 py-3 border-b-4 border-white bg-gradient-to-r from-black to-gray-800 text-lg font-bold">
        {/* Burger menu */}
        <section className="flex lg:hidden items-center z-10">
          {/* X */}
          <div
            className="px-2 py-2 space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "rotate-45 translate-y-1 group-hover:opacity-100 absolute z-20"
                  : ""
              }`}
            ></span>
            <span
              className={`${genericHamburgerLine} ${
                isNavOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 absolute z-20"
                  : ""
              }`}
            ></span>
          </div>

          {/* Burger menu options */}
          <div
            className={
              isNavOpen
                ? "absolute top-0 left-0 bg-hamburger flex flex-col justify-evenly items-center w-72 h-full bg-black"
                : "hidden"
            }
          >
            <ul
              onClick={() => setIsNavOpen(false)}
              className="flex flex-col items-center justify-between"
            >
              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <Link
                  href="/projects"
                  className="text-white hover:bg-white hover:text-black hover:rounded-md px-2 py-1"
                >
                  Projects
                </Link>
              </li>
              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <Link
                  href="/events"
                  className="text-white hover:bg-white hover:text-black hover:rounded-md px-2 py-1"
                >
                  Events
                </Link>
              </li>
              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <Link
                  href="/projects"
                  className="text-white hover:bg-white hover:text-black hover:rounded-md px-2 py-1"
                >
                  About Us
                </Link>
              </li>
              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <Link
                  href="/events"
                  className="text-white hover:bg-white hover:text-black hover:rounded-md px-2 py-1"
                >
                  Contact Info
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Full menu */}
        <Link
          href="/"
          className="hidden lg:flex text-white px-2 py-3 border-b-2 border-blue-gradient-radial"
        >
          <span>DoctArt .</span>
        </Link>

        <div className="hidden lg:flex justify-center">
          <Link
            href="/projects"
            className="text-white hover:bg-white hover:text-black hover:rounded-md hover:animate-pulse px-2 py-3"
          >
            Projects
          </Link>
        </div>
        <div className="hidden lg:flex justify-center">
          <Link
            href="/events"
            className="text-white hover:bg-white hover:text-black hover:rounded-md hover:animate-pulse px-2 py-3"
          >
            Events
          </Link>
        </div>
        <div className="hidden lg:flex justify-center">
          <Link
            href="#about"
            className="text-white hover:bg-white hover:text-black hover:rounded-md hover:animate-pulse px-2 py-3"
          >
            About Us
          </Link>
        </div>
        <div className="hidden lg:flex justify-center">
          <Link
            href="#contact"
            className="text-white hover:bg-white hover:text-black hover:rounded-md hover:animate-pulse px-2 py-3"
          >
            Contact Info
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
