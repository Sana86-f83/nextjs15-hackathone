import Image from "next/image";
import React from "react";
import { BsPlay } from "react-icons/bs";

const Active = () => {
  return (
    <div className="flex relative w-[1918px] h-[558px] mt-[120px]">
      <Image
        src={"/active/active-image.png"}
        alt={"active-page-image"}
        width={1981}
        height={558}
        className=""
      ></Image>
      <div className="absolute w-[705px] h-[340px] ml-[880px] mt-[130px]">
        <div className="absolute ml-[430px]  text-right ">
          <Image
            src={"/active/active-process-image.png"}
            alt={"active-process"}
            width={273}
            height={40}
          ></Image>
        </div>
        <h1 className=" w-[705px] h-[56px]  text-right mt-8 text-darkyellow tracking-wide  text-[46px] ">
          We
          <span className="h-[56px] text-white mt-6 ">
            {" "}
            Document Every Food{" "}
          </span>{" "}
        </h1>

        <h2 className=" w-[705px] h-[56px]  text-white tracking-wide text-right  text-[46px]">
          {" "}
          Bean Process untile it is saved{" "}
        </h2>
        <p className="w-[651px] h-[48px] text-white  mt-[32px] text-[16px] ml-[49px] font-normal text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna,{" "}
        </p>
        <div className="flex justify-between items-center ml-[330px]   w-[369px] h-[60px] text-white leading-8 text-[16px] font-bold  mt-[32px]">
          <button className="w-[190px] h-[60px] border-2 border-darkyellow rounded-full">
            Read More
          </button>
          <p className="flex justify-center items-center text-[36px] w-[60px] h-[60px] rounded-full bg-darkyellow">
            <BsPlay className="w-[24px] height-[24px]"/>
          </p>
          <p className="w-[83px] h-[24px] ">Play Video</p>
        </div>
      </div>
    </div>
  );
};

export default Active;
