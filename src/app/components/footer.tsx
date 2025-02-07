import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { PiClockClockwise } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-[300px] md:w-[1920px] h-auto md:h-[740.15px] md:ml-[0px] ml-[10px] bg-black">
      <div className="h-auto md:h-[740.15px] w-[300px] md:w-[1920px]  mt-[48px] text-white bg-black">
        {/* // main Footer Div */}
        <div className="hidden h-[640.15px] w-[1320px]  ml-[300px]  md:flex relative text-white ">
          {/* top foooter items div */}
          <div className="h-[142.62px] relative w-[1170px] flex  ml-[59px] ">
            <div>
              <h1 className="h-[40px] w-[439px] flex  font-bold text-[32px] absolute">
                <span className="text-darkyellow flex h-[60px]">St</span>ill You
                Need Our Support ?
              </h1>
              <p className="h-[24px] w-[458px] text-[16px] mt-[57px] tracking-wide">
                Don’t wait make a smart & logical quote here. Its pretty easy.
              </p>
            </div>
            <div className="h-[56px] w-[459px]  ml-[260px] text-white flex items-center bg-darkyellow">
              <input
                type="Text"
                placeholder="Enter your Email"
                className="  text-[16px] font-normal ml-[20px] text-white bg-darkyellow border-none outline-none"
              ></input>
              <button className="h-[56px] w-[163px] bg-white text-[16px] ml-[90px] text-darkyellow">
                Subscribe Now
              </button>
            </div>
            <div>
              <hr className="h-[1px] w-[1170px] -ml-[1170px] flex justify-center items-center  bg-primarycoffe mt-[142px]"></hr>
            </div>
          </div>
          <div className="h-[367px] w-[1320px] absolute mt-[207px]  ">
            <div className="h-[363px] w-[312px] absolute flex ">
              {/* Footer --> About Us Div */}
              <h4 className="text-[24px] absolute font-bold">
                <Link href={"#"}>About Us</Link>
              </h4>
              <p className="h-[95px] w-[312px] absolute mt-[56px] tracking-wide bg-black">
                orporate clients and leisure travelers has been relying on
                Groundlink for dependab safe, and professional chauffeured car
                service in major cities across World.
              </p>
              <p className="h-[72px] w-[78px] mt-[177px] absolute bg-darkyellow">
                <PiClockClockwise className="h-[40px] w-[40px] mt-[16px] ml-[18px]" />
              </p>
              <p className="h-[25.84px] w-[137.77px] mt-[177px] absolute text-[18px] ml-[94.25px] ">
                Opening Houres
              </p>
              <p className="h-[25.84px] w-[137.77px] mt-[203px] absolute text-[14px] ml-[94.25px] ">
                Mon - Sat(8.00 - 6.00)
              </p>
              <p className="h-[25.84px] w-[137.77px] mt-[228.3px] absolute text-[14px] ml-[94.25px] ">
                Sunday - Closed
              </p>
            </div>
            {/* Div of UseFul Links */}
            <div className="h-[363px] w-[143.41px] absolute  ml-[445px] ">
              <h4 className="text-[24px] font-bold ">
                <Link href={"#"}>Useful Links </Link>
              </h4>
              <ul className="space-y-[24px] mt-[20px] text-[20px] font-normal">
                <li>
                  <Link href={"#"}>About</Link>
                </li>
                <li>
                  <Link href={"#"}>News</Link>
                </li>
                <li>
                  <Link href={"#"}>Partners</Link>
                </li>
                <li>
                  <Link href={"#"}>Team</Link>
                </li>
                <li>
                  <Link href={"#"}>Menu</Link>
                </li>
                <li>
                  <Link href={"#"}>Contacts</Link>
                </li>
              </ul>
            </div>
            {/* Div of Help?  */}
            <div className="h-[363px] w-[170px] absolute flex ml-[787px] ">
              <h4 className="text-[24px] font-bold ">
                <Link href={"#"}>Help? </Link>
              </h4>
              <ul className="space-y-[24px] mt-[56px] absolute text-[20px] font-normal">
                <li>
                  <Link href={"#"}>FAQ</Link>
                </li>
                <li>
                  <Link href={"#"}>Terms & conditions</Link>
                </li>
                <li>
                  <Link href={"#"}>Reporting</Link>
                </li>
                <li>
                  <Link href={"#"}>Documentation</Link>
                </li>
                <li>
                  <Link href={"#"}>Support Policy</Link>
                </li>
                <li>
                  <Link href={"#"}>Privacy</Link>
                </li>
              </ul>
            </div>
            {/* Div of Recent Post */}
            <div className="h-[363px] w-[244px] absolute flex ml-[1076px] ">
              <h4 className="text-[24px] font-bold ">
                <Link href={"#"}>Recent Post </Link>
              </h4>
              {/* Recent Post Image-1 working  */}
              <div className="h-[53px] w-[244px] absolute mt-[55px] ">
                <Image
                  src={"/footer/ist-image.png"}
                  alt="image1"
                  width={59}
                  height={48}
                  className=""
                ></Image>
                <div className="h-[53px] w-[168px] ml-[76px] -mt-[49px] ">
                  <p className="h-[24px] w-[96px] text-[16px] mt-[23]">
                    20 Feb 2022
                  </p>
                  <p className="h-[26px] w-[168px] text-[18px] mt-[3px] tracking-wide">
                    Keep Your Business
                  </p>
                </div>
              </div>
              {/* Recent Post Image-2 working  */}
              <div className="h-[53px] w-[244px] absolute mt-[123px] ">
                <Image
                  src={"/footer/2nd-image.png"}
                  alt="2nd-image"
                  width={59}
                  height={48}
                  className=""
                ></Image>
                <div className="h-[53px] w-[168px]  ml-[76px] -mt-[49px] ">
                  <p className="h-[24px] w-[96px] text-[16px] ">20 Feb 2022</p>
                  <p className="h-[26px] w-[168px] text-[18px] mt-[4px] tracking-wide">
                    Keep Your Business
                  </p>
                </div>
              </div>
              {/* Recent Post Image-3 working  */}
              <div className="h-[53px] w-[244px] absolute mt-[196px] ">
                <Image
                  src={"/footer/3rd-image.png"}
                  alt="3rd-image Image"
                  width={59}
                  height={48}
                  className=""
                ></Image>
                <div className="h-[53px] w-[168px] ml-[76px] -mt-[49px] ">
                  <p className="h-[24px] w-[96px] text-[16px] ">20 Feb 2022</p>
                  <p className="h-[26px] w-[168px] text-[18px] mt-[4px] tracking-wide">
                    Keep Your Business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[222.5px] h-[294.56px] ml-[1590.13px] -mt-[200.5px] absolute  ">
          <Image
            src={"/footer/bgend.png"}
            alt={"bgend-image"}
            width={222.5}
            height={294.56}
          ></Image>
        </div>

        {/* Last footer div darkyellow color */}
        <div className="h-[100px] w-[300px] md:w-[1920px]  text-center md:text-start md:flex   bg-darkyellow">
          <p className="h-[24px] mt-[38px] ml-[20px] md:ml-[300px] ">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>

          <div className="h-[34px]  w-[240px]  flex justify-around md:justify-between items-center mt-[33px] ml-[40px] md:ml-[721px] ">
            <div className="h-[34px] w-[36px] text-coloricon bg-white ">
              <FaFacebookF className="text-[22px] text-coloricon mt-[5.5px] ml-[6px] " />
            </div>
            <div className="h-[34px] w-[36px] text-coloricon bg-white ">
              <FaTwitter className="text-[22px] text-coloricon mt-[5.5px] ml-[6px] " />
            </div>
            <div className="h-[34px] w-[36px] text-coloricon bg-white ">
              <IoLogoInstagram className="text-[22px] text-coloricon mt-[5.5px] ml-[6px] " />
            </div>
            <div className="h-[34px] w-[36px] text-coloricon bg-white ">
              <FaYoutube className="text-[22px] text-darkyellow mt-[6px] ml-[6px]  " />
            </div>
            <div className="h-[34px] w-[36px] text-coloricon bg-white ">
              <FaPinterest className="text-[22px] text-coloricon mt-[5.5px] ml-[7px]  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
