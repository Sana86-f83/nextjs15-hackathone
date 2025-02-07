"use client";

import React from "react";
import { useState } from "react";

import Navbar2 from "../components/Navbar2";
import Heading from "../components/headingprops";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Image from "next/image";
import {
  FaFacebookF,
  FaPinterest,
  FaRegEye,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { LiaTwitter } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io5";
import { RiPinterestFill } from "react-icons/ri";
import { BsCalendar2Date } from "react-icons/bs";
import { PiChats, PiQuotesThin, PiUserCirclePlus } from "react-icons/pi";
import { BiLogoFacebook } from "react-icons/bi";

const BlogDetail = () => {
  // Explicitly define the type of the 'comments' state as an array of strings
  const [comments, setComments] = useState<{ name: string; text: string;place:string }[]>(
    []
  );
  const [name, setName] = useState<string>("");
  const [place,setPlace] = useState<string>("");

  // State to hold the current comment input value
  const [commentInput, setCommentInput] = useState<string>("");

  // Function to handle comment submission
  const handleAddComment = () => {
    if (name.trim() && commentInput.trim()) {
      setComments([
        ...comments,
        { name: name.trim(), text: commentInput.trim(),place:place.trim() },
      ]);
      setName(""); // Clear name field
      setCommentInput(""); // Clear comment input field
      setPlace("");
    }
  };

  return (
    <div className="w-[1920px] h-[3878px] bg-white">
      <Navbar2 />
      <Heading Heading="Blog Details" home="Home" pagename="Blog Details" />
      <div className="w-[1320px] h-[3378px] mt-[87px] m-auto bg-white">
        <div className="w-[872px] h-[3378px]  mt-[87px] ">
          {/* right side div for sidebar items */}
          <div className="w-[424px] h-[2501px] flex justify-center ml-[896px] absolute">
            <div className="flex justify-between w-[422px] h-[70px] bg-darkyellow">
              <input
                className="text-[16px] tracking-wide outline outline-1 outline-black/20 leading-6 flex justify-between w-[345px] pl-[20px]"
                type="text"
                placeholder="Search your Keyword"
              ></input>
              <HiMiniMagnifyingGlass className="text-[24px] m-auto " />
            </div>
            {/* profile-div */}
            <div className=" absolute w-[424px] h-[423px] mt-[94px] border-2 border-black/20">
              <div className="w-[322px] h-[357px] ml-[54px] mt-[33px] ">
                <Image
                  src={"/bloglist/profile-image-bloglist.png"}
                  alt={"profile-image"}
                  width={116}
                  height={117}
                  className=" border-spacing-1 border-black
                  rounded-full mx-auto"
                ></Image>
                <div className="w-[169px] h-[87px]  mx-auto mt-[25px]">
                  <h1 className="w-[136px] h-[29px] text-cheftextcolor text-[20px] mx-auto font-bold ">
                    Prince Miyako
                  </h1>
                  <p className="w-[169px] h-[29px] text-[16px] mt-[3px] tracking-wider text-gray3 leading-6">
                    Blogger/Photographer
                  </p>
                  <div className="flex w-[166px] justify-between h-[21px] text-darkyellow ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <p className="w-[69px] h-[21px] text-[14px]  leading-5 text-gray3">
                      (1 Review)
                    </p>
                  </div>
                  <p className="w-[322px] h-[75px] text-center  text-gray3 mt-[8px] -ml-[79px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.Veritatis distinctio, odio eligendi suscipit
                    reprehenderit atque
                  </p>
                  <div className="w-[104px] h-[20px] text-cheftextcolor flex justify-between  mx-auto mt-[25px]">
                    <FaFacebookF className="w-[11px] h-[20px] " />
                    <LiaTwitter className="w-[18px] h-[20px] " />
                    <IoLogoInstagram className="w-[16px] h-[20px] " />
                    <RiPinterestFill className="w-[18px] h-[20px] " />
                  </div>
                </div>
              </div>
            </div>
            {/* recent-post */}
            <div className="absolute w-[423px] h-[592px]  mt-[541px] border-2 border-black/20">
              <h1 className="w-[116px] h-[28px] mt-[28px] text-[20px] text-cheftextcolor font-bold ml-[51px] ">
                Recent Post
              </h1>
              {/* cart1 */}

              <div className="flex justify-center w-[323px] h-[107px] ml-[50px] mt-[18px] ">
                <div className="w-[99px] h-[91px]">
                  <Image
                    src={"/bloglist/sidebarimage/recentpost-image1.png"}
                    alt={"recentpost-boximage1"}
                    width={99}
                    height={91}
                  ></Image>
                </div>
                <div className="w-[205px] h-[78px] ml-[18px] ">
                  <p className="w-[89px] h-[22px] text-[14px] bg-white justify-center">
                    June 22, 2020
                  </p>
                  <p className="flex w-[205px] h-[48px] mt-[7px]">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </p>
                </div>
              </div>
              <hr className="w-[322px] text-cheftextcolor h-[4px] ml-[50px] " />
              {/* cart2 */}
              <div className="flex justify-center w-[323px] h-[107px]  ml-[50px] mt-[24px]">
                <div className="w-[99px] h-[91px]">
                  <Image
                    src={"/bloglist/sidebarimage/recentpost-image2.png"}
                    alt={"recentpost-boximage2"}
                    width={99}
                    height={91}
                  ></Image>
                </div>
                <div className="w-[205px] h-[78px] ml-[18px] ">
                  <p className="w-[89px] h-[22px] text-[14px] bg-white justify-center">
                    June 22, 2020
                  </p>
                  <p className="flex w-[205px] h-[48px] mt-[7px]">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </p>
                </div>
              </div>
              <hr className="w-[322px] text-cheftextcolor h-[4px] ml-[50px] " />
              {/* cart2 */}
              <div className="flex justify-center w-[323px] h-[107px]  ml-[50px] mt-[24px]">
                <div className="w-[99px] h-[91px]">
                  <Image
                    src={"/bloglist/sidebarimage/recentpost-image3.png"}
                    alt={"recentpost-boximage3"}
                    width={99}
                    height={91}
                  ></Image>
                </div>
                <div className="w-[205px] h-[78px] ml-[18px] ">
                  <p className="w-[89px] h-[22px] text-[14px] bg-white justify-center">
                    June 22, 2020
                  </p>
                  <p className="flex w-[205px] h-[48px] mt-[7px]">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </p>
                </div>
              </div>
              <hr className="w-[322px] text-cheftextcolor h-[4px] ml-[50px] " />
              {/* cart2 */}
              <div className="flex justify-center w-[323px] h-[107px]  ml-[50px] mt-[24px]">
                <div className="w-[99px] h-[91px]">
                  <Image
                    src={"/bloglist/sidebarimage/recentpost-image4.png"}
                    alt={"recentpost-boximage4"}
                    width={99}
                    height={92}
                  ></Image>
                </div>
                <div className="w-[205px] h-[78px] ml-[18px] ">
                  <p className="w-[89px] h-[22px] text-[14px] bg-white justify-center">
                    June 22, 2020
                  </p>
                  <p className="flex w-[205px] h-[48px] mt-[7px]">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </p>
                </div>
              </div>
              <hr className="w-[322px] text-cheftextcolor h-[4px] ml-[50px] " />
            </div>
            {/* Filter by MEnu */}
            <div className="w-[423px] h-[487px] absolute mt-[1156px] border-2 border-black/20 ">
              <h1 className="w-[140px] h-[28px]  text-[20px] mt-[24px] ml-[56px] font-bold leading-7 text-cheftextcolor">
                Filter By Menu
              </h1>
              {/* filtermenucart-1-chicken-fry */}
              <div className="flex w-[311px] h-[62px]  ml-[56px] mt-[24px] ">
                <div className="w-[67px] h-[62px]">
                  <Image
                    src={"/bloglist/sidebarimage/filtermenu-image1.png"}
                    alt={"filtermenuimage1"}
                    width={67}
                    height={62}
                  ></Image>
                </div>
                <h1 className="flex w-[92px] h-[24px]  ml-[19px] mt-[16px] text-cheftextcolor">
                  Chicken Fry
                </h1>
                <p className=" ml-[116px] my-auto">26</p>
              </div>
              {/* filtermenucart-2-burger-food*/}
              <div className="flex w-[311px] h-[62px]  ml-[56px] mt-[16px]">
                <Image
                  src={"/bloglist/sidebarimage/filtermenu-image2.png"}
                  alt={"filtermenuimage2"}
                  width={67}
                  height={62}
                ></Image>
                <h1 className="flex w-[92px] h-[24px]  ml-[19px] mt-[16px] text-cheftextcolor">
                  Burger-Food
                </h1>
                <p className=" ml-[116px] my-auto">46</p>
              </div>
              {/* filtermenucart-3-Pizza */}
              <div className="flex w-[311px] h-[62px]  ml-[56px] mt-[16px]">
                <Image
                  src={"/bloglist/sidebarimage/filtermenu-image3.png"}
                  alt={"filtermenuimage3"}
                  width={67}
                  height={62}
                ></Image>
                <h1 className="flex w-[92px] h-[24px]  ml-[19px] mt-[16px] text-cheftextcolor">
                  Pizza
                </h1>
                <p className=" ml-[116px] my-auto">18</p>
              </div>
              {/* filtermenucart-4-FreshFruits*/}
              <div className="flex w-[311px] h-[62px]  ml-[56px] mt-[16px]">
                <Image
                  src={"/bloglist/sidebarimage/filtermenu-image4.png"}
                  alt={"filtermenuimage4"}
                  width={67}
                  height={62}
                ></Image>
                <h1 className="flex w-[92px] h-[24px]  ml-[19px] mt-[16px] text-cheftextcolor">
                  Fresh Fruits
                </h1>
                <p className=" ml-[116px] my-auto">36</p>
              </div>
              {/* filtermenucart-5-Vegetables*/}
              <div className="flex w-[311px] h-[62px]  ml-[56px] mt-[16px]">
                <Image
                  src={"/bloglist/sidebarimage/filtermenu-image5.png"}
                  alt={"filtermenuimage5"}
                  width={67}
                  height={62}
                ></Image>
                <h1 className="flex w-[92px] h-[24px]  ml-[19px] mt-[16px] text-cheftextcolor">
                  Vegetables
                </h1>
                <p className=" ml-[116px] my-auto">16</p>
              </div>

              <hr className="w-[322px] text-cheftextcolor h-[4px] ml-[50px] " />
              {/* Popular-Tags-box */}
              <div className="w-[423px] h-[307px]  mt-[52px] border-2 border-black/20 ">
                <div className=" w-[325px]  h-[244px]  ml-[55px]  absolute mt-[32px] ">
                  <h1 className="w-[127px] h-[28px] font-bold text-[20px] text-cheftextcolor">
                    Populer Tags
                  </h1>
                  <button className="w-[115px] h-[38px] mt-[16px] text-coloricon text-[16px] border-2 border-black/30">
                    Sandwich
                  </button>
                  <button className="w-[87px] h-[38px] mt-[16px] ml-[16px] text-coloricon text-[16px] border-2 border-black/30">
                    Tikka
                  </button>
                  <button className="w-[79px] h-[38px] mt-[16px] ml-[16px] text-coloricon text-[16px] border-2 border-black/30">
                    Bpq
                  </button>
                  <button className="w-[126px] h-[38px] mt-[16px]  text-coloricon text-[16px] border-2 border-black/30">
                    Restaurant
                  </button>
                  <button className="w-[158px] h-[38px] mt-[16px] ml-[16px] text-coloricon text-[16px] border-2 border-black/30">
                    Chicken Sharma{" "}
                  </button>
                  <button className="w-[95px] h-[38px] mt-[16px]  text-coloricon text-[16px] border-2 border-black/30">
                    Health{" "}
                  </button>
                  <button className="w-[109px] h-[38px] mt-[16px] ml-[16px] text-coloricon text-[16px] border-2 border-black/30">
                    FastFood{" "}
                  </button>
                  <button className="w-[88px] h-[38px] mt-[16px] ml-[16px] text-coloricon text-[16px] border-2 border-black/30">
                    Food{" "}
                  </button>
                  <button className="w-[89px] h-[38px] mt-[16px]  text-coloricon text-[16px] border-2 border-black/30">
                    Pizza{" "}
                  </button>
                  <button className="w-[97px] h-[38px] mt-[16px] ml-[16px] text-coloricon text-[16px] border-2 border-black/30">
                    Burger{" "}
                  </button>
                  <button className="w-[105px] h-[38px] mt-[16px] ml-[16px] text-coloricon text-[16px] border-2 border-black/30">
                    Chicken{" "}
                  </button>
                </div>
              </div>
              {/* Photo-Gallery */}
              <div className="w-[422px] h-[316px]  mt-[24px] border-2 border-black/20">
                <div className="w-[362px] h-[352px] ml-[38px] absolute">
                  <h1 className="w-[131px] h-[28px] text-[20px] font-bold mt-[32px]">
                    Photo Gallery
                  </h1>
                  <div className="w-[362px] h-[200px]  mt-[24px] grid grid-cols-3 justify-center">
                    <Image
                      src={"/bloglist/sidebarimage/photogallery-image1.png"}
                      alt={"photogallery-image1"}
                      width={110}
                      height={92}
                    ></Image>
                    <div className="bg-black">
                      <Image
                        src={"/bloglist/sidebarimage/photogallery-image2.png"}
                        alt={"photogallery-image2"}
                        width={110}
                        height={92}
                        className="ml-[4px] opacity-50"
                      ></Image>
                      <FaRegEye className="absolute -mt-[56px] ml-[45px] text-[28px] text-white" />
                    </div>
                    <Image
                      src={"/bloglist/sidebarimage/photogallery-image3.png"}
                      alt={"photogallery-image3"}
                      width={110}
                      height={92}
                      className="ml-[8px]"
                    ></Image>
                    <Image
                      src={"/bloglist/sidebarimage/photogallery-image4.png"}
                      alt={"photogallery-image4"}
                      width={110}
                      height={92}
                      className="mt-[16px] "
                    ></Image>
                    <Image
                      src={"/bloglist/sidebarimage/photogallery-image5.png"}
                      alt={"photogallery-image5"}
                      width={110}
                      height={92}
                      className=" mt-[16px] ml-[4px]"
                    ></Image>
                    <Image
                      src={"/bloglist/sidebarimage/photogallery-image6.png"}
                      alt={"photogallery-image6"}
                      width={110}
                      height={92}
                      className=" mt-[16px] ml-[8px]"
                    ></Image>
                  </div>
                </div>
              </div>
              {/* Followus */}
              <div className="w-[422px] h-[158px]  mt-[24px] border-2 border-black/20">
                <div className="w-[308px] h-[94px]  ml-[57px] mt-[24px] absolute">
                  <h1 className="w-[94px] h-[28px] text-cheftextcolor text-[20px] font-bold tracking-tight ">
                    Follow Us
                  </h1>
                  <div className="flex justify-between items-center w-[308px] h-[47px] mt-[19px]">
                    <div className=" w-[52px] h-[47px] bg-darkyellow/10 hover:bg-darkyellow">
                      <LiaTwitter className="w-[18px] h-[21] text-[24px] mx-auto mt-[10px]" />
                    </div>

                    <div className="  w-[52px] h-[47px] bg-darkyellow/10 hover:bg-darkyellow">
                      <FaYoutube className="w-[27px] h-[21px] text-[24px] mx-auto mt-[10px]" />
                    </div>
                    <div className="  w-[52px] h-[47px] bg-darkyellow/10  hover:bg-darkyellow">
                      <RiPinterestFill className="w-[23px] h-[21px] text-[24px] mx-auto mt-[10px] " />
                    </div>
                    <div className="  w-[52px] h-[47px] bg-darkyellow/10 hover:bg-darkyellow">
                      <IoLogoInstagram className="w-[21px] h-[21px] text-[24px] mx-auto mt-[10px]" />
                    </div>
                    <div className="  w-[52px] h-[47px] bg-darkyellow/10  hover:bg-darkyellow">
                      <FaFacebookF className="w-[15px] h-[21px] text-[24px] mx-auto mt-[10px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* leftSideDiv */}
          <div className="w-[872px] h-[845px]  absolute">
            <div className="w-[870px] h-[520px] absolute  ">
              <Image
                src={"/bloglist/blogdetails/blogdetails-image1.png"}
                alt={"BlogDetails-image1"}
                width={870}
                height={520}
              ></Image>
            </div>
            <div className="w-[299px] h-[24px] text-cheftextcolor mt-[536px] flex   ">
              <BsCalendar2Date className="h-[24px] w-[24px] text-darkyellow" />
              <p className="pl-2 mt-[2px]">Feb 14, 2022 /</p>
              <PiChats className="ml-[10px] h-[24px] w-[24px] flex text-darkyellow" />
              <p className="pl-2 mt-[2px] flex">3 /</p>
              <PiUserCirclePlus className="ml-[10px] h-[24px] flex w-[24px] text-darkyellow " />
              <p className="pl-2 mt-[2px]">Admin</p>
            </div>
            <h1 className="w-[604px] h-[32px] mt-[16px] text-cheftextcolor absolute flex text-[24px] font-bold ">
              10 Reasons To Do A Digital Detox Challenge{" "}
            </h1>
            <hr className="w-[695px] h-[2px] mt-[72px] bg-gray3" />
            <div>
              <p className="w-[872px] h-[96px] text-cheftextcolor text-[16px] mt-[34px]">
                Netus pretium tellus nulla commodo massa adipiscing in elementum
                magna congue condimentum placerat habitasse potenti ac orci a
                quisque tristique elementum et viverra at condimentum
                scelerisque eu mi. Elit praesent cras vehicula a ullamcorper
                nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a
                condimentum suspendisse hac integer leo erat aliquam ut
                himenaeos.
              </p>
              <p className="w-[872px] h-[72px] text-[16px] text-cheftextcolor mt-[16px] ">
                Ac haca ullamcorper donec ante habi tasse donec imperdiet
                eturpis varius per a augue magna hac.
                <br /> Nec hac et vestibulum duis a tincidunt per a aptent
                interdum purus feugiat a id aliquet erat <br /> himenaeos nunc
                torquent euismod adipiscing adipiscing dui gravida justo.
              </p>
            </div>
            <div className="w-[853px] h-[176px] bg-darkyellow  absolute mt-[56px]">
              <div className="flex w-[805px] h-[128px]  m-[24px] ">
                <PiQuotesThin className="w-[48px] h-[48px]  text-white" />
                <p className="w-[741px] h-[28px] text-[24px] leading-8 tracking text-white font-bold ml-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
              </div>
              <p className="w-[872px] h-[120px] text-cheftextcolor mt-[56px] ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </p>
              <p className="w-[424px] h-[366px]  absolute z-50 mt-[25px] ml-[448px]">
                <Image
                  src={"/shop-details/shopdetail-image6.png"}
                  alt=""
                  width={424}
                  height={366}
                  className=""
                ></Image>
              </p>
              <p className="w-[420px] h-[236px]  mt-[25px] text-cheftextcolor   ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et <br /> ea rebum.
              </p>
              <p className="w-[420px] h-[168px]  mt-[16px] text-cheftextcolor  ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing
              </p>
              <p className="w-[872px] h-[120px] mt-[24px] text-cheftextcolor   ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </p>
              <p className="w-[872px] h-[120px] mt-[16px] text-cheftextcolor  ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </p>
              <div className="w-[872px] h-[60px] mt-[33px] flex items-center text-cheftextcolor border-2 border-black/20">
                <div className="w-[297px] h-[24px] ml-[24px] flex ">
                  <h3 className="text-[16px] font-bold ">Tags:</h3>
                  <p className="ml-[8px]">Restaurant, Dinner, Pizza, Yummy, </p>
                </div>
                <div className="flex w-[187px] h-[24px] ml-[680px]   absolute ">
                  <p>Share: </p>
                  <div className=" flex justify-around w-[184px] h-[24px]">
                    <div className="w-[24px] h-[24px]   ">
                      <BiLogoFacebook className="w-[24px]  h-[24px]   " />
                    </div>
                    <div className="w-[24px] h-[24px]   ">
                      <FaTwitter className="w-[24px] h-[22px]  " />
                    </div>
                    <div className="w-[24px] h-[24px]   ">
                      <IoLogoInstagram className="w-[20px] h-[20px] mt-[2px] " />
                    </div>
                    <div className="w-[24px] h-[24px]   ">
                      <FaPinterest className="w-[18px] h-[24px]   " />
                    </div>
                  </div>
                </div>
              </div>
                            {/* Post a Comment Section */}
                            <div className="w-[872px] h-[484px] text-cheftextcolor mt-[56px]">
                <h1 className="w-[190px] h-[32px] font-bold text-[24px] text-cheftextcolor">
                  Post a Comment
                </h1>
                <hr className="w-[876px] h-[2px] text-cheftextcolor mt-[24px]" />

                <div className="flex justify-between w-[872px] h-[56px] mt-[24px]">
                  <input
                    type="text"
                    placeholder="Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-[424px] h-[56px] pl-[20px] text-[20px] tracking-wider border-2 border-neutral-300"
                  />
                  <input
                    type="email"
                    placeholder="Enter Your Place"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}

                    className="w-[424px] h-[56px] pl-[20px] text-[20px] tracking-wider border-2 border-neutral-300"
                  />
                </div>

                <div className="w-[872px] h-[244px] mt-[24px]">
                  <textarea
                    className="w-[872px] h-[244px] pt-[10px] pl-[5px] text-[20px] tracking-wider border-2 border-neutral-300"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Write your comment here..."
                  ></textarea>
                </div>

                <button
                  className="w-[212px] h-[56px] bg-darkyellow text-[20px] tracking-wider text-white mt-[24px]"
                  onClick={handleAddComment}
                >
                  Post a Comment
                </button>
              </div>

              {/* Comments List */}
              <div className="w-[872px] h-[472px] text-cheftextcolor mt-[55px]">
                <h4 className="text-[32px] font-bold">
                  Comments - {comments.length}
                </h4>

                <ul className="text-[20px] leading-8 pl-6">
                  {comments.map(
                    (comment: { name: string; text: string ;place:string}, index) => (
                      <li key={index}>
                        <strong>{comment.name}:</strong> {comment.text} <br/><strong>{comment.place}</strong> 
                      </li>
                    )
                  )}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
