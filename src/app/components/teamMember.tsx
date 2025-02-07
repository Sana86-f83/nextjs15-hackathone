import Image from "next/image";
import React from "react";

const TeamMember = () => {
  return (
    <div className="w-[1920px] h-[686px]  mt-[120px] ">
      <div className="w-[1920px] h-[460px]  m-auto  relative ">
        <Image
          src={"/mainpage-aboutus/teammember-bg.png"}
          alt={"aboutus/teammember-bg"}
          width={1920}
          height={460}
        ></Image>
      </div>
      <div className="w-[1920px] h-[460px] m-auto absolute bg-darkyellow/90 -mt-[460px]">
        <div className="w-[418px] h-[176px]  m-auto mt-[110px]">
          <h1 className="w-[324px] h-[56px] m-auto text-[48px] leading-tight text-white font-semibold">
            Team Member
          </h1>
          <p className="w-[418px] h-[48px] mt-[8px] text-[16px] font-normal text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
        </div>
        {/* chef4div */}
        <div className="flex justify-between items-center w-[1320px] h-[398px] m-auto  ">
          <div className="flex w-[312px] h-[398px] relative shadow-lg shadow-coloricon">
            <Image
              src={"/mainpage-aboutus/teamchefimage.png"}
              alt={"teamchef-image"}
              width={312}
              height={310}
            ></Image>
            <div className="felx  w-[312px] h-[88px] bg-white/90 mt-[310px] absolute">
              <h1 className="flex w-[110px]  font-semibold h-[28px] text-[20px] text-cheftextcolor mt-[16px] ml-[101px]  ">
                Mark Henry
              </h1>
              <p className=" w-[48px] h-[24px] text-coloricon ml-[132px] mt-[4px]">
                Owner
              </p>
            </div>
          </div>
          {/* div2 */}
          <div className="flex w-[312px] h-[398px] relative shadow-lg shadow-coloricon">
            <Image
              src={"/mainpage-aboutus/teamchefimage.png"}
              alt={"teamchef-image"}
              width={312}
              height={310}
            ></Image>
            <div className="felx  w-[312px] h-[88px] bg-white/90 mt-[310px] absolute">
              <h1 className="flex w-[118px] font-semibold h-[28px] text-[20px] text-cheftextcolor mt-[16px] ml-[101px]  ">
                Lucky Helen{" "}
              </h1>
              <p className=" w-[34px] h-[24px] text-coloricon ml-[132px] mt-[4px]">
                Chef
              </p>
            </div>
          </div>
          {/* div3 */}
          <div className="flex w-[312px] h-[398px] relative  shadow-lg shadow-coloricon">
            <Image
              src={"/mainpage-aboutus/teamchefimage.png"}
              alt={"teamchef-image"}
              width={312}
              height={310}
            ></Image>
            <div className="felx  w-[312px] h-[88px] bg-white/90 mt-[310px] absolute">
              <h1 className="flex w-[116px]  font-semibold h-[28px] text-[20px] text-cheftextcolor mt-[16px] ml-[101px]  ">
                Moon Henry{" "}
              </h1>
              <p className=" w-[60px] h-[24px] text-coloricon ml-[132px] mt-[4px]">
                Founder
              </p>
            </div>
          </div>
          {/* div4 */}
          <div className="flex w-[312px] h-[398px] relative  shadow-lg shadow-coloricon">
            <Image
              src={"/mainpage-aboutus/teamchefimage.png"}
              alt={"teamchef-image"}
              width={312}
              height={310}
            ></Image>
            <div className="felx  w-[312px] h-[88px] bg-white/90 mt-[310px] absolute">
              <h1 className="flex w-[124px]  font-semibold h-[28px] text-[20px] text-cheftextcolor mt-[16px] ml-[101px]  ">
                Tom Monrow{" "}
              </h1>
              <p className=" w-[69px] h-[24px] text-coloricon ml-[132px] mt-[4px]">
                Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
