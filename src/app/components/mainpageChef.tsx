import Image from "next/image";
import React from "react";

const MainpageChefs = () => {
  return (
    <div className="h-[730px] w-full  md:w-[1923px] bg-red-400   relative ml-[0px] md:ml-[0px] text-white mt-[950px] md:mt-[120px]">
      <Image
        src={"/chefs/Chefs.png"}
        alt="Chefs Image"
        width={59}
        height={40}
        className="h-[40px] w-[59px] ml-[128px] md:ml-[10px]"
      ></Image>
      <Image
        src={"/chefs/background.png"}
        alt="background Image"
        width={531}
        height={409.74}
        className="h-[409.74px] w-[531px] absolute mt-[100px] ml-[30px] md:ml-[30px] opacity-80"
      ></Image>
      <h1 className="h-[56px] w-[329px] flex  font-bold text-[42px] md:text-[48px] ml-[20px] md:ml-[800px]">
        <span className="text-darkyellow flex h-[60px]">Me</span>et Our Chef
      </h1>
      <div className="h-auto md:h-[391px] w-full md:w-[1320px] ml-[10px] md:gap-0 gap-10 md:ml-[303px] flex md:flex-row flex-col md:justify-between items-center  mt-[56px]">
        {/* div of chef D. Estwood */}
        <div className="h-[391px] w-[312px] ">
          <Image
            src={"/chefs/D.Estwood.png"}
            alt="D.Estwood Image"
            width={312}
            height={391}
            className=""
          ></Image>
        </div>

        {/* Div of chef D.Scoriesh */}
        <div className="h-[391px] w-[312px] ">
          <Image
            src={"/chefs/D.Scoriesh.png"}
            alt="D.Scoriesh Image"
            width={312}
            height={391}
            className=""
          ></Image>
        </div>

        {/* Div of chef M.William */}
        <div className="h-[391px] w-[312px] ">
          <Image
            src={"/chefs/M.William.png"}
            alt="M.William Image"
            width={312}
            height={391}
            className=""
          ></Image>
        </div>
        {/* Div of chef W.Readfroad */}
        <div className="h-[391px] w-[312px]">
          <Image
            src={"/chefs/W.Readfroad.png"}
            alt="W.Readfroad Image"
            width={312}
            height={391}
            className=""
          ></Image>
        </div>
      </div>

      <button className="h-[60px] w-[190px] mt-[56px] ml-[870px] text-white text-[16px] border-2 border-white bg-black rounded-full ">
        See More
      </button>
    </div>
  );
};

export default  MainpageChefs;
