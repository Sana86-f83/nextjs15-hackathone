import Image from "next/image";
import React from "react";
import { PiQuotesThin } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";

const Testimonials = ({color="text-black"}) => {
  return (
    <div className=" relative w-[1273px] h-[770px]  ml-[300px] mt-[120px]">
      <div className="w-[129px] h-[40px]">
        <Image
          src={"/testmonials/Testimonials.png"}
          alt={"heading-image"}
          width={129}
          height={40}
        ></Image>
      </div>
      <h1 className={` ${color} w-[599px]  h-[56px] font-bold tracking-tighter  text-[48px]  `}>
        What our client are saying
      </h1>
      <div className="relative flex justify-center items-center  w-[868.7px] rounded-lg bg-white/90 h-[451px]  ml-[225.86px] mt-[122.97px]">
        <Image
          src={"/testmonials/testmonials-bg.png"}
          alt={"bg-testmonials"}
          width={396}
          height={500}
          className="absolute opacity-95  ml-[770px] -rotate-3 mt-[200px]"
        ></Image>

        <div className="absolute w-[697px] h-[486px] -mt-[56.99px] ml-[85.95px] mr-[85.95px] mb-[31.99px]">
          <div className="w-[133px] h-[134px]  rounded-full  flex  mx-auto">
            <Image
              src={"/testmonials/profile-image.png"}
              alt={"profile-image"}
              width={133}
              height={134}
            ></Image>
          </div>
          <PiQuotesThin className="w-[47.97px]  ml-[324.8px] h-[47.97px] mt-[31.99px] text-darkyellow/90" />
          <p className="w-[697px] h-[104px]  text-gray-700 text-[18px] font-medium text-center mt-[31.99px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="flex justify-center items-center  ml-[280px] w-[152px] h-[24px] text-darkyellow text-[24px] mt-[31.99px]">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar className="text-gray-400" />
          </div>
          <h1 className="w-[159px] h-[32px] text-bgblack text-[24px] font-bold ml-[280px] mt-[16px]">
            Alamin Hasan
          </h1>
          <h1 className="w-[110px] h-[24px]  text-bgblack/40 text-[16px]  font-normal mt-[8px] ml-[300px]">
            Food Specialist
          </h1>
        </div>
      </div>
      <div className="flex justify-between w-[86px] h-[16px] ml-[630px] mt-[55.95px]  ">
        <p className="bg-darkyellow w-[15px] h-[16px] rounded-full"></p>
        <p className="bg-darkyellow/50 w-[15px] h-[16px] rounded-full"></p>
        <p className="bg-darkyellow/50 w-[15px] h-[16px] rounded-full"></p>
        <p className="bg-darkyellow/50 w-[15px] h-[16px] rounded-full"></p>
      </div>
    </div>
  );
};

export default Testimonials;
