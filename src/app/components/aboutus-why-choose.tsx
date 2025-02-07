import Image from "next/image";
import React from "react";
import { PiCoffeeThin, PiPersonThin, PiStudentLight } from "react-icons/pi";

const WhyChoose = () => {
  return (
    <div className="w-[1920px] h-[865px]">
    <div className="w-[1320px] h-[865px]  mt-[974px] m-auto">
      <div className="w-[579px] h-[112px]  m-auto">
        <h1 className="w-[361px] h-[56px] text-center m-auto text-[48px] font-bold font-wide text-cheftextcolor">
          Why Choose us
        </h1>
        <p className="w-[579px] h-[48px] text-center  mt-[8px] text-coloricon  text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.{" "}
        </p>
      </div>
      <div className="w-[1320px] h-[386px] mt-[56px] ">
        <Image
          src={"/mainpage-aboutus/whychoose-aboutus.png"}
          alt={"whychoose-aboutus"}
          width={1320}
          height={386}
        ></Image>
      </div>
      {/* best-chef 3box*/}
      <div className="flex justify-between items-center mt-[56px] w-[1320px] h-[253px] ">
        <div className="w-[359px] h-[225px] ">
          <div className=" m-auto w-[80px] h-[80px] text-cheftextcolor/50">
            <PiStudentLight className="text-[80px]" />
            <h1 className="w-[115px] h-[29px] text-cheftextcolor text-[24px] mt-[24px] -ml-[20px] ">
              Best Chef
            </h1>
            <p className="w-[359px] h-[76px]  text-center  text-coloricon  text-[16px] -ml-[140px] font-normal mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </p>
          </div>
        </div>
        <div className="w-[359px] h-[228px] ">
          <div className=" m-auto w-[80px] h-[80px] text-cheftextcolor/50">
            <PiCoffeeThin className="text-[80px]" />
            <h1 className="w-[155px] h-[32px] text-cheftextcolor text-[24px] mt-[24px] -ml-[40px] ">
              120 Item food{" "}
            </h1>
            <p className="w-[359px] h-[76px]  text-center  text-coloricon  text-[16px] -ml-[140px] font-normal mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </p>
          </div>
        </div>

        <div className="w-[359px] h-[253px] ">
          <div className=" m-auto w-[80px] h-[80px] text-cheftextcolor/50">
            <PiPersonThin className="text-[80px]" />
            <h1 className="w-[219px] h-[32px] text-cheftextcolor text-[24px] mt-[24px] pl-[6px] -ml-[70px] ">
              Clean Environment{" "}
            </h1>
            <p className="w-[359px] h-[76px]  text-coloricon text-center text-[16px] -ml-[140px] font-normal mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyChoose;
