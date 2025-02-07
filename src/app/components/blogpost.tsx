import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { PiChatDots } from "react-icons/pi";
import { PiShareNetworkLight } from "react-icons/pi";

const BlogPost = () => {
  return (
    <div className="w-[1320px] h-[732px]  flex m-auto mt-[120px] ">
      <div className="relative flex mx-auto w-[148px] text-[32px] leading-10  h-[40px] ">
        <Image
          src={"/blogpost/Blogpost.png"}
          alt={"menu-head"}
          width={148}
          height={40}
          className=""
        ></Image>
      </div>
      <div className="flex absolute ml-[429px] mr-[263px] ">
        <h1 className=" tracking-wide w-[456px] h-[56px]  text-[48px] mt-[50px] text-darkyellow ">
          La<span className="text-white">test News & Blog </span>
        </h1>
      </div>
      {/* equal-3-box1 */}
      <div className="absolute w-[1320px] h-[569px] mt-[163px]  flex justify-between ">
        <div className="flex flex-col w-[424px] h-[569px] border-2 border-grayborder">
          <div className="w-[421px] h-[349px] flex ">
            <Image
              src={"/blogpost/image1-blogpost.png"}
              alt={"blogpost-image1"}
              width={421}
              height={349}
            ></Image>
          </div>
          <p className="mt-[30px] text-darkyellow w-[133px] h-[24px] ml-[43px] text-[16px] font-normal leading-6">
            10 February 2022{" "}
          </p>
          <p className="mt-[16px] ml-[43px] w-[338px] h-[64px] text-[24px] text-white">
            Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
          </p>
          <p className="w-[86px] h-[24px] mt-[32px] text-white ml-[43px]">
            Learn More
          </p>
          <div className=" flex justify-between w-[76px] h-[22px] ml-[304px]  -mt-[22px] ">
            <p className="w-[20px] h-[20px] text-white">
              <FiThumbsUp />
            </p>
            <p className="w-[20px] h-[20px] text-darkyellow ">
              <PiChatDots />
            </p>
            <p className="w-[20px] h-[20px] text-white ">
              <PiShareNetworkLight />
            </p>
          </div>
        </div>
        {/* box2 */}
        <div className="flex w-[424px] h-[569px] border-2 border-grayborder">
          <div className="flex flex-col w-[424px] h-[569px] ">
            <div className="w-[421px] h-[349px] flex ">
              <Image
                src={"/blogpost/image2-blogpost.png"}
                alt={"blogpost-image2"}
                width={421}
                height={349}
              ></Image>
            </div>
            <p className="mt-[30px] text-darkyellow w-[133px] h-[24px] ml-[43px] text-[16px] font-normal leading-6">
              10 February 2022{" "}
            </p>
            <p className="mt-[16px] ml-[43px] w-[338px] h-[64px] text-[24px] text-white">
              Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A{" "}
            </p>
            <p className="w-[86px] h-[24px] mt-[32px] text-white ml-[43px]">
              Learn More
            </p>
            <div className=" flex justify-between w-[76px] h-[22px] ml-[304px]  -mt-[22px] ">
              <p className="w-[20px] h-[20px] text-white">
                <FiThumbsUp />
              </p>
              <p className="w-[20px] h-[20px] text-darkyellow ">
                <PiChatDots />
              </p>
              <p className="w-[20px] h-[20px] text-white ">
                <PiShareNetworkLight />
              </p>
            </div>
          </div>
        </div>
        {/* b0x3 */}
        <div className="flex w-[424px] h-[569px] border-2 border-grayborder">
          <div className="flex flex-col w-[424px] h-[569px] ">
            <div className="w-[421px] h-[349px] flex ">
              <Image
                src={"/blogpost/image3-blogpost.png"}
                alt={"blogpost-image3"}
                width={421}
                height={349}
              ></Image>
            </div>
            <p className="mt-[30px] text-darkyellow w-[133px] h-[24px] ml-[43px] text-[16px] font-normal leading-6">
              10 February 2022{" "}
            </p>
            <p className="mt-[16px] ml-[43px] w-[338px] h-[64px] text-[24px] text-white">
              Curabitur rutrum velit ac congue malesuada{" "}
            </p>
            <p className="w-[86px] h-[24px] mt-[32px] text-white ml-[43px]">
              Learn More
            </p>
            <div className=" flex justify-between w-[76px] h-[22px] ml-[304px]  -mt-[22px] ">
              <p className="w-[20px] h-[20px] text-white">
                <FiThumbsUp />
              </p>
              <p className="w-[20px] h-[20px] text-darkyellow ">
                <PiChatDots />
              </p>
              <p className="w-[20px] h-[20px] text-white ">
                <PiShareNetworkLight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
