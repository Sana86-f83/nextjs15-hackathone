import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import {
  PiArrowLineUpRightLight,
  PiChats,
  PiUserCirclePlus,
} from "react-icons/pi";

const BlogListImage = ({ heading }: { heading: string }) => {
  return (
    <div>
      <div className="w-[872px] h-[830px]  flex ">
        <div className="w-[872px] h-[520px] flex ">
          <Image
            src={"/bloglist/unsplash_lP5MCM6nZ5A.png"}
            alt="BlogList Image-1"
            height={520}
            width={872}
            className=""
          ></Image>

          <div className="w-[299px] h-[24px] absolute mt-[536px] flex   ">
            <BsCalendar2Date className="h-[24px] w-[24px] text-darkyellow" />
            <p className="pl-2 mt-[2px]">Feb 14, 2022 /</p>
            <PiChats className="ml-[10px] h-[24px] w-[24px] flex text-darkyellow" />
            <p className="pl-2 mt-[2px] flex">3 /</p>
            <PiUserCirclePlus className="ml-[10px] h-[24px] flex w-[24px] text-darkyellow " />
            <p className="pl-2 mt-[2px]">Admin</p>
          </div>

          <div className="absolute">
            <div className="w-[60px] h-[60px] mt-[24px] ml-[24px] flex absolute  text-center rounded-lg  shadow-md leading-tight bg-darkyellow">
              <p className="text-[18px] font-bold mt-[12px] ml-[19px] text-white ">
                14
              </p>
              <p className="text-[18px] font-normal mt-[32px] absolute ml-[14px] text-white ">
                Feb
              </p>
            </div>
            <h1 className="w-[604px] h-[32px] mt-[580px] flex text-[24px] font-bold ">
              {heading}{" "}
            </h1>
            <hr className="w-[694px] h-[2px] mt-[20px] border border-gray3"></hr>
            <p className="w-[647px] h-[96px] text-[16px] mt-[24px] tracking-wide text-coloricon">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, <br />
              no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat
            </p>
            <button className="w-[172px] h-[52px] mt-[20px] text-[16px] text-darkyellow flex justify-center items-center border border-darkyellow rounded-lg">
              <Link href={"/blogDetails"}> Read More </Link>
              <PiArrowLineUpRightLight className="ml-[10px] text-[22px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListImage;
