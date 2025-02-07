"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { PiTote } from "react-icons/pi";
import Link from "next/link";

const Navbar2 = () => {
  // State for controlling dropdown visibility
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [isPageDropdownOpen, setIsDropDown] = useState(false);

  // Toggling dropdowns
  const togglePageDropdown = () => setIsDropDown(!isPageDropdownOpen);

  const toggleShopDropdown = () => setShopDropdownOpen(!isShopDropdownOpen);

  return (
    <div className=" hidden md:block absolute w-[350px] md:w-[1920px] h-[90px] ">
      <div className="flex justify-between items-center w-[1320px] h-[32px] ml-[30px] md:ml-[300px] mt-[29px] ">
        <h1 className="w-[109px] h-[32px] text-[24px] font-bold tracking-wide text-white">
          Food
          <span className="text-darkyellow">tuck</span>
        </h1>
        <ul className="flex justify-normal md:justify-between cursor-poniter  w-[300px]  md:w-[508px] h-[24px] text-white text-[16px] font-normal ml-[342px] ">
          <li className="text-darkyellow">
            <Link href={"/"}>Home </Link>
          </li>
          <li>
            {" "}
            <Link href={"/menu"}>Menu </Link>
          </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-1 ">
              <Link href={"/blog"}>Blog </Link>
            </li>
          <div>
            <li
              className="cursor-pointer hover:underline hover:underline-offset-1 "
              onClick={togglePageDropdown}
            >
              <Link href={""}>Pages</Link>
            </li>
            <ul
              className={`${
                isPageDropdownOpen ? "block" : "hidden"
              } absolute  mt-5  bg-white text-black py-1 w-[130px] text-[16px] font-bold  text-left rounded border-2 border-darkyellow ;`}
            >
              <li className="py-1 px-2 pl-4 hover:bg-darkyellow hover:text-white cursor-pointer">
                <Link href={"/ourChef"}>Our Chef</Link>
              </li>
              <li className="py-1 px-2  pl-4 hover:bg-black hover:text-white cursor-pointer">
                <Link href={"/checkout"}>CheckOut</Link>
              </li>
              <li className="py-1 px-2 pl-4  hover:bg-black hover:text-white cursor-pointer">
                <Link href={"/faqpage"}>FAQ</Link>
              </li>
              <li className="py-1 px-2 pl-4  hover:bg-black hover:text-white cursor-pointer">
                <Link href={"/signup"}> SignUp</Link>
              </li>
            </ul>
          </div>
          <li>
            {" "}
            <Link href={"/about"}>About</Link>
          </li>
          <div>
            {" "}
            <li
              className="cursor-pointer hover:underline hover:underline-offset-1 "
              onClick={toggleShopDropdown}
            >
              <Link href={"/shoplist"}>Shop</Link>
            </li>
            <ul
              className={`${
                isShopDropdownOpen ? "block" : "hidden"
              } absolute  mt-5  bg-white text-black py-1 w-[150px] text-[16px] font-bold  text-left rounded border-2 border-darkyellow ;`}
            >
              <li className="py-1 px-2 pl-4 hover:bg-darkyellow hover:text-white cursor-pointer">
                <Link href={"/shopDetails"}>Shop Details</Link>
              </li>
              <li className="py-1 px-2  pl-4 hover:bg-black hover:text-white cursor-pointer">
                <Link href={"/ShoppingCart"}>Shopping Cart</Link>
              </li>
            </ul>
          </div>
          <li>
            {" "}
            <Link href={"/not-found"}>Contact</Link>
          </li>
        </ul>
        <div className="flex justify-between  text-white items-center w-[104px] h-[24px]  ml-[357px]">
          <Link href={""}>
            {" "}
            <CiSearch className="w-[24px] h-[24px] cursor-pointer" />{" "}
          </Link>
          <Link href={""}>
            <AiOutlineUser className="w-[24px] h-[24px] text-white/80 cursor-pointer" />
          </Link>
          <Link href={""}>
            <PiTote className="w-[24px] h-[24px] cursor-pointer" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
