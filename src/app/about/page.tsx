import React from "react";
import Image from "next/image";
import { BsPlay } from "react-icons/bs";
import Testimonials from "../components/Testimonials";
import Heading from "../components/headingprops";
import Layout from "../components/layout";
import WhyChoose from "../components/aboutus-why-choose";
import OurFoodMenu from "../components/ourfoodmenu";
import TeamMember from "../components/teamMember";

const AboutUs = () => {
  return (
    <div className="h-[5126px] w-[1920px] bg-white relative">
      <div className="w-[1920px] bg-gray5 ">
      <Layout    isHomePage={false}></Layout>
        {/* headerimage */}
        <Heading Heading="About Us" home="Home" pagename="about" />
        {/* page-work */}
        <div className="flex h-[734px] w-[1320px]  ml-[300px] mt-[120px] absolute 400">
          {/* imagesdiv-leftdiv */}
          <div className=" w-[669px] h-[734pxpx]   relative ">
            <div className="flex w-[336px] h-[536px] rounded-md ">
              <Image
                src={"/mainpage-aboutus/aboutus-image1.png"}
                alt={"aboutus-image1"}
                width={336}
                height={536}
              ></Image>
            </div>
            <div className="w-[309px] h-[271px]  ml-[358px] -mt-[470px] absolute rounded-md">
              <Image
                src={"/mainpage-aboutus/aboutus-image2.png"}
                alt={"aboutus-image2"}
                width={309}
                height={271}
              ></Image>
            </div>
            <div className="w-[309px] h-[382px]  ml-[358px] -mt-[185px] rounded-md">
              <Image
                src={"/mainpage-aboutus/aboutus-image3.png"}
                alt={"aboutus-image3"}
                width={309}
                height={382}
              ></Image>
            </div>
          </div>
          {/* right-text-div */}
          <div className="h-[336pxpx] w-[526px]  mt-[184px] ml-[122px]">
            <h1 className="h-[26pxpx] w-[112px]  ">
              <Image
                src={"/mainpage-aboutus/heading.png"}
                alt={"heading-aboutus"}
                width={112}
                height={26}
              ></Image>
            </h1>

            <h1 className="w-[524px] h-[112px] text-[48px] text-cheftextcolor tracking-tight leading-10 font-bold mt-[8px]">
              Food is an important part Of a balanced Diet
            </h1>
            <p className="w-[526px] h-[96px]  text-[16px] font-normal mt-[16px] text-coloricon">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-between items-center    w-[379px] h-[60px] text-white  text-[16px] font-bold  mt-[32px]">
              <button className="w-[190px] h-[60px]  bg-darkyellow rounded-md">
                Show more
              </button>
              <p className="flex justify-center items-center text-[36px] w-[60px] h-[60px] rounded-full bg-darkyellow">
                <BsPlay className="w-[24px] height-[24px] text-white" />
              </p>
              <p className="w-[98px] font-bolder tracking-tight  h-[24px] text-cheftextcolor">
                Watch Video
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
      <WhyChoose />
      <TeamMember />
      <Testimonials color="text-black"/>
      <OurFoodMenu/>
    </div>
  );
};

export default AboutUs;
