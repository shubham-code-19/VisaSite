"use client";

import Image from "next/image";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggler, setToggler] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`NavParent px-5 md:px-15 lg:px-20   py-1 md:py-5 ${
        isScrolled
          ? "fixed top-0 left-0 w-full bg-white border border-white/20 shadow-lg z-50  "
          : ""
      }`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-2 items-center">
          <Link href={"/"}>
          <figure className="w-[200px]">
            <img
              className="w-[70%] md:w-[100%] h-auto rounded-full object-cover"
              src="/img/travelCompanyLogo.png"
              width={200}
              height={100}
              alt="Site Logo"
            />
          </figure>
          </Link>
          <div className="flex gap-1 md:gap-1 items-center">
            <div className="hidden md:flex">
              <div className="px-4 py-1 rounded-full flex gap-2 items-center">
                <figure>
                  <img
                    className="w-7 h-7"
                    src="/img/asset 2.svg"
                    width={120}
                    height={120}
                    alt="Chat Icon"
                  />
                </figure>
                <a href="#">
                  <span className="opacity-80">Chat With us</span>
                </a>
              </div>
              <div className="hidden md:flex px-4 py-1 rounded-full  gap-2 items-center">
                <figure>
                  <img
                    className="w-5 h-7"
                    src="/img/asset 3.svg"
                    width={120}
                    height={120}
                    alt="Phone Icon"
                  />
                </figure>
                <a href="tel:0713412852914">
                  <span className="opacity-80  ">0713412 852914</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Link
                href="#"
                className="hidden md:block text-white font-bold bg-[#006251] px-3 py-2 md:px-5 md:py-2 rounded"
              >
                Login
              </Link>
              <div
                onClick={() => setToggler(!toggler)}
                className="bg-[#fff] cursor-pointer font-bold text-black p-3 rounded-full"
              >
                <LuMenu />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Contact Section */}
        <div className="flex md:hidden justify-between">
          <div className="hidden md:flex gap-2 items-center">
            <figure>
              <img
                className="w-full"
                src="/img/asset 2.svg"
                width={120}
                height={120}
                alt="Chat Icon"
              />
            </figure>
            <span className="opacity-80 text-md">Chat With Us</span>
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <figure>
              <img
                className="w-full"
                src="/img/asset 3.svg"
                width={120}
                height={120}
                alt="Phone Icon"
              />
            </figure>
            <span className="opacity-80">071341 852914</span>
          </div>
        </div>
      </div>
      <SideBar toggler={toggler} />
    </div>
  );
};

export default Navbar;
