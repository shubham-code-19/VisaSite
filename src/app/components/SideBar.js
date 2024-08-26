
"use clinet"
import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBlog,
  FaUsers,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { BsBuildings } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { TbBuildingEstate } from "react-icons/tb";


const SideBar = ({ toggler }) => {
  return (
    <div className="">
      <div
        className={`SideBar ${
          toggler ? "-right-[200%] hidden " : "right-0 block"
        } border w-[100%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] h-screen top-30 md:top-20 absolute bg-gray-100 text-gray-800 z-50 shadow-2xl transition-all duration-500 ease-in-out md:rounded-l-2xl p-6`}
      >
      

        {/* Navigation Links */}
        {/* <ul className="flex flex-col gap-6 sm:gap-8 font-bold pt-5 text-md sm:text-lg">
          <li className="flex items-center gap-3 hover:text-blue-600 transition duration-300 ease-in-out">
          <Link href="/" className="flex  gap-3 items-center"><FaHome />  Home</Link>

            
          </li>
          <li  className="cursor-pointer flex items-center gap-3 hover:text-blue-600 transition duration-300 ease-in-out">
            <Link href="/about" className="flex  gap-3 items-center"><FaInfoCircle /> About Us</Link>
          </li>
          <li className="cursor-pointer flex items-center gap-3 hover:text-blue-600 transition duration-300 ease-in-out">
          <Link href="/contact" className="flex  gap-3 items-center"><FaEnvelope />  Contact Us</Link>

          </li>
          <li className="cursor-pointer flex items-center gap-3 hover:text-blue-600 transition duration-300 ease-in-out">
            <FaBlog /> Blogs
          </li>
          <li className="cursor-pointer flex items-center gap-3 hover:text-blue-600 transition duration-300 ease-in-out">
            <FaUsers /> Our Team
          </li>
          <div>
          <Link
                href="#"
                className=" md:hidden text-white font-bold bg-[#006251] px-3 py-2 md:px-5 md:py-2 rounded"
              >
                Login
              </Link>
          </div>
        </ul> */}


        {/* <div className="flex flex-col items-center mb-4 md:mt-8">
          <img
            src="/img/travelIconLogo.png" 
            alt="Site Logo"
            width={100}
            height={100}
            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mb-2"
          />
         
        </div> */}

        {/* <div className="mb-1 md:mb-8 text-center">
          <div className="flex flex-col md:flex-row md:justify-center  items-center gap-3 text-gray-600 mb-3">
            <FaPhoneAlt />
            <span>071341 852914</span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center  items-start  gap-3 text-gray-600">
            <FaMapMarkerAlt className="mt-" />
            <span>123 Street Name, City, <br /> Country</span>
          </div>
        </div> */}



        <div className="side-bar-content px-2 py-3 flex flex-col gap-5 md:gap-3">

          <div className="singleContent flex gap-2 items-center cursor-pointer">
            <div>
            <BsBuildings />

            </div>
            <div className="flex  justify-between items-center  w-full px-3 py-2 border-b-2">
              <h2>Contact Us</h2>
              <IoIosArrowForward />
            </div>
          </div>

          <div className="singleContent flex gap-2 items-center cursor-pointer ">
            <div>
            <MdOutlineSupportAgent />


            </div>
            <div className="flex  justify-between items-center  w-full px-3 py-2 border-b-2  ">
              <h2>Help and Support</h2>
              <IoIosArrowForward />
            </div>
          </div>

          <div className="singleContent flex gap-2 items-center cursor-pointer">
            <div>
            <IoNewspaperOutline />


            </div>
            <div className="flex  justify-between items-center  w-full px-3 py-2 border-b-2  ">
              <h2>Visa Blog</h2>
              <IoIosArrowForward />
            </div>
          </div>
            
       


          <Link href={"/about"} className="singleContent flex gap-2 items-center cursor-pointer  ">
            <div>
            <MdOutlineErrorOutline className="rotate-180" />



            </div>
            <div className="flex  justify-between items-center  w-full px-3 py-2 border-b-2">
              <h2>About Us</h2>
              <IoIosArrowForward  />
            </div>
          </Link>


       

          <div className="singleContent flex gap-2 items-center cursor-pointer">
            <div>
            <TbBuildingEstate />


            </div>
            <div className="flex  justify-between items-center  w-full px-3 py-2 border-b-2">
              <h2>Countries</h2>
              <IoIosArrowForward />
            </div>
          </div>


             <div className="flex justify-around md:flex-col items-center mb-4 md:mt-8 ">
            {/* <Link href={"/"}>
            <img
            src="/img/travelIconLogo.png" 
            alt="Site Logo"
            width={100}
            height={100}
            className="cursor-pointer w-10 h-10 sm:w-14 sm:h-14 object-cover rounded-full mb-2 opacity-20"
          />
            </Link> */}

<div>
          <Link
                href="#"
                className=" md:hidden text-white text-xs font-bold bg-[#006251] px-3 py-2  rounded"
              >
                Login
              </Link>
          </div>
         
        </div>




           <div className="mb-1 md:mb-8 text-center py-14 bgAdresssLogo relative text-md font-bold text-zinc-950">
          <div className="flex flex-col md:flex-row md:justify-center  items-center gap-3 text-gray-600 mb-3">
            <FaPhoneAlt />
            <span>071341 852914</span>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start justify-center    gap-3 text-gray-600">
            <FaMapMarkerAlt className="mt-1" />
            <span>123 Street Name, City, <br /> Country</span>
          </div>
        </div>



        </div>


          



        
      </div>
    </div>
  );
};

export default SideBar;
