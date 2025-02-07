"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";

const HomeNavbar = () => {
  const [isDropdownOpen, setIsDropDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsDropDown(!isDropdownOpen);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-[350px] md:w-[1920px] h-[174px] bg-black">
      <div className="relative z-50 w-[450px] md:ml-[300px] ml-[4px] md:w-[1420px] h-[87px] bg-black flex m-6 md:m-auto">
        {/* Foodtuck */}
        <div className="flex md:px-0 px-6 md:py-0 py-4 md:justify-normal justify-between mx-0 md:mx-auto w-[350px] h-[32px]">
          <h1 className="text-[24px] font-bold text-darkyellow font-sans bg-black pl-0 md:pl-[100px]">
            Food <span className="text-white font-sans">tuck</span>
          </h1>

          {/* Hamburger Icon */}
          <div
            className="flex justify-between cursor-pointer md:hidden bg-blue-400"
            onClick={toggleMenu} // Toggling the menu visibility
          >
            <FaBars size={30} className="text-darkyellow" />
          </div>
        </div>

        {/* Navbar links */}
        <div className="w-[567px] h-[24px] text-white text-[16px] absolute mt-[48px] cursor-pointer z-10">
          <ul className="hidden md:flex md:justify-between">
            <li className="cursor-pointer hover:underline hover:underline-offset-1">
              <Link href={"/"}>Home</Link>
            </li>
            <p className="h-[7px] w-[7px] rounded-full bg-darkyellow mt-[22px] -ml-[60px]" />
            <li className="cursor-pointer hover:underline hover:underline-offset-1">
              <Link href={"/menu"}>Menu</Link>
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-1">
              <Link href={"/blog"}>Blog</Link>
            </li>

            <div>
              <li
                className="cursor-pointer hover:underline hover:underline-offset-1"
                onClick={toggleDropdown}
              >
                <Link href={""}>Pages</Link>
              </li>

              <ul
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } absolute mt-5 bg-white text-black py-1 w-[130px] text-[16px] font-bold text-left rounded border-2  border-darkyellow`}
              >
                <li className="py-1 px-2 pl-4 hover:bg-darkyellow hover:text-white cursor-pointer">
                  <Link href={"/ourChef"}>Our Chef</Link>
                </li>
                <li className="py-1 px-2 pl-4 hover:bg-black hover:text-white cursor-pointer">
                  <Link href={"/checkout"}>CheckOut</Link>
                </li>
                <li className="py-1 px-2 pl-4 hover:bg-black hover:text-white cursor-pointer">
                  <Link href={"/faqpage"}>FAQ</Link>
                </li>
                <li className="py-1 px-2 pl-4 hover:bg-black hover:text-white cursor-pointer">
                  <Link href={"/signup"}>SignUp</Link>
                </li>
                <li className="py-1 px-2 pl-4 hover:bg-darkyellow hover:text-white cursor-pointer">
                  <Link href={"/signup/signIn"}>SignIn</Link>
                </li>
              </ul>
            </div>

            <li className="w-[64px] flex gap-1 cursor-pointer">
              <Link href={"/about"}>
                About
                <IoIosArrowDown className="flex -mt-[20px] ml-[46px] text-white " />
              </Link>
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-1">
              <Link href={"/shoplist"}>Shop</Link>
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-1">
              <Link href={"/not-found"}>Contact</Link>
            </li>
            <li className="text-[20px] -mt-[4px] text-darkyellow font-bold">
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </li>
          </ul>

          <div className="hidden md:flex  ">
            <input
              className="flex text-[18px] absolute bg-black w-[280px] h-[54px] pl-[20px] justify-between rounded-full ml-[898px] -mt-[50px]  border border-offset-2 border-primarycolor"
              type="text"
              placeholder="Search..."
            />
            <CiSearch className="absolute text-[32px] flex justify-between ml-[1134px] -mt-[40px] text-white bg-bgblack" />
          </div>
          <FaRegUser className="text-[28px] justify-end absolute ml-[1200px] -mt-[40px]" />
          <TiShoppingCart className="text-[28px] justify-end absolute ml-[1250px]  -mt-[40px]" />
          <div className="hidden md:flex absolute text-white font-bold h-[24px] w-[24px] ml-[1295px] -mt-[40px]">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {/* <HiOutlineShoppingBag className="hidden md:flex absolute text-white font-bold h-[24px] w-[24px] ml-[1295px] -mt-[40px]" /> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="menu absolute bg-gray-800 text-white   w-full h-[350px] z-10 flex flex-col items-center justify-center space-y-4"
          onClick={() => setIsOpen(false)} // Close menu when clicked anywhere outside
        >
          <ul className="bg-darkyellow text-black p-4 rounded-lg space-y-4 font-semibold">
            <li>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu}>
                Pages
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomeNavbar;
