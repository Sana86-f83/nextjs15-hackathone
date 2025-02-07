import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Heading = ({
  Heading,
  home,
  pagename,
}: {
  Heading: string;
  home: string;
  pagename: string;
}) => {
  return (
<div className="w-[300px] md:w-[1920px] h-[410px]  m-auto">
  <div className="w-[300px] md:w-[1920px] h-[410px] opacity-100">
    <Image
      src={"/headerbg/headerbg-image.png"}
      alt={"headerbg-image"}
      width={1920}
      height={410}
      className="md:w-[1920px] h-[410px]  w-[300px] "
    />
  </div>
  <div className="relative">
    <h1 className="absolute w-[80%] md:w-[30%] h-[60px] flex justify-center items-center  -mt-[208px] text-[34px] md:text-[48px] text-white font-semibold left-[50%] transform -translate-x-[50%]">
      {Heading}
    </h1>
    <p className="absolute flex cursor-pointer  justify-center items-center w-[20%] h-[29px] left-[50%] transform -translate-x-[50%] -mt-[120px] text-white text-[20px] font-normal leading-7">
      {home}{" "}
      <span>
        <MdKeyboardArrowRight />
      </span>{" "}
      <span className="text-darkyellow">{pagename}</span>
    </p>
  </div>
</div>
  );
};

export default Heading;
