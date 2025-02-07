import Image from "next/image";
import React from "react";

const MainpageMenu = () => {
  return (
    <div className=" hidden md:flex w-[1320px] h-[656px]  m-auto  ">
      <div className="relative flex mx-auto w-[148px] text-[32px] leading-10  h-[40px] ">
        <Image
          src={"/menu/Choose&pick.png"}
          alt={"menu-head"}
          width={148}
          height={40}
          className="ml-[550px]"
        ></Image>
      </div>
      <div className="flex absolute ml-[505px] mr-[263px]">
        <h1 className=" tracking-wide w-[358px] h-[56px] text-[48px] mt-[50px] text-darkyellow ">
          Fr<span className="text-white">om Our Menu </span>
        </h1>
      </div>
      {/* navbar */}
      <div className="absolute ml-[100px]  mt-[130px] w-[1056px] h-[58px] ">
        <ul className="flex justify-between  text-[20px] font-bold text-white cursor-pointer mt-[6px] ">
          <li className="text-darkyellow hover:underline hover:underline-offset-2  ">
            Breakfast
          </li>
          <li className="hover:underline hover:underline-offset-2>Lunch">
            Dinner
          </li>
          <li className="hover:underline hover:underline-offset-2>Lunch">
            Desert1
          </li>
          <li className="hover:underline hover:underline-offset-2>Lunch">
            Drink
          </li>
          <li className="hover:underline hover:underline-offset-2>Lunch">
            Snacks
          </li>
          <li className="hover:underline hover:underline-offset-2>Lunch">
            Suops
          </li>
        </ul>
      </div>
      <div className="flex relative  w-[1320px] h-[656px] -ml-[200px] ">
        <div className="flex mt-[240px] ">
          <Image
            src={"/menu/bg-plate-leaf.png"}
            alt={"bg-plate-leaf"}
            width={515}
            height={306}
            className="w-[515px] h-[306px] rotate-180 "
          ></Image>
          <Image
            src={"/menu/bg-plate-leaf.png"}
            alt={"bg-plate-leaf"}
            width={515}
            height={406}
            className="w-[515px] h-[406px] rotate-180 absolute "
          ></Image>

          <Image
            src={"/menu/plate-menu.png"}
            alt={"plate-image"}
            width={366}
            height={362}
            className=" w-[366px] h-[362px]  absolute ml-[90px] "
          ></Image>
        </div>
        {/* column-div1 */}
        <div className="flex flex-col w-[376px] h-[406px]  mt-[222px]">
          <div className="flex relative w-[376px] h-[79px] ">
            <div className="absolute flex w-[80px] h-[79px] ">
              <Image
                src={"/menu/image1.png"}
                alt={"image1"}
                width={80}
                height={79}
              ></Image>
            </div>

            <h1 className="flex absolute ml-[85px]  w-[123px] h-[28px] text-[20px]  text-white ">
              Lettuce Leaf
            </h1>
            <p className="flex absolute ml-[85px]  mt-[30px] w-[287px] text-white h-[22px] text-[14px] leading-5 font-normal">
              Lacus nisi, et ac dapibus velit in consequat.{" "}
            </p>
            <p className="absolute ml-[85px] mt-[54px] w-[49px] h-[26px] text-[18px] font-b0ld leading-6 text-darkyellow">
              12.5$
            </p>
          </div>
          {/* div2 */}
          <div className="flex  w-[376px] h-[79px] mt-[29px]  ">
            <div className="absolute flex w-[80px] h-[79px] ">
              <Image
                src={"/menu/image-2.png"}
                alt={"image-2"}
                width={80}
                height={70}
              ></Image>
            </div>

            <h1 className="flex absolute ml-[85px]  w-[154px] h-[28px] text-[20px]  text-white ">
              Fresh Breakfast{" "}
            </h1>
            <p className="flex absolute ml-[85px] text-white mt-[30px] w-[287px] h-[22px] text-[14px] leading-5 font-normal">
              Lacus nisi, et ac dapibus velit in consequat.{" "}
            </p>
            <p className="absolute ml-[85px] mt-[54px] w-[49px] h-[26px] text-[18px] font-b0ld leading-6 text-darkyellow">
              14.5${" "}
            </p>
          </div>
          {/* div3 */}
          <div className="flex  w-[376px] h-[79px] mt-[29px] ">
            <div className="absolute flex w-[80px] h-[79px] ">
              <Image
                src={"/menu/image3.png"}
                alt={"image-3"}
                width={80}
                height={70}
              ></Image>
            </div>

            <h1 className="flex absolute ml-[85px]  w-[108px] h-[28px] text-[20px]  text-white ">
              Mild Butter
            </h1>
            <p className="flex absolute ml-[85px] text-white mt-[30px] w-[287px] h-[22px] text-[14px] leading-5 font-normal">
              Lacus nisi, et ac dapibus velit in consequat.{" "}
            </p>
            <p className="absolute ml-[85px] mt-[54px] w-[49px] h-[26px] text-[18px] font-b0ld leading-6 text-darkyellow">
              12.5${" "}
            </p>
          </div>
          {/* div4 */}
          <div className="flex  w-[376px] h-[79px] mt-[29px]  ">
            <div className="absolute flex w-[80px] h-[79px] ">
              <Image
                src={"/menu/image4.png"}
                alt={"image-4"}
                width={80}
                height={70}
              ></Image>
            </div>

            <h1 className="flex absolute ml-[85px]  w-[117px] h-[28px] text-[20px]  text-white ">
              Fresh Bread{" "}
            </h1>
            <p className="flex absolute ml-[85px] text-white  mt-[30px] w-[287px] h-[22px] text-[14px] leading-5 font-normal">
              Lacus nisi, et ac dapibus velit in consequat.{" "}
            </p>
            <p className="absolute ml-[85px] mt-[54px] w-[49px] h-[26px] text-[18px] font-b0ld leading-6 text-darkyellow">
              12.5$
            </p>
          </div>
        </div>
        {/* column-div2-1 */}

        <div className="w-[376px] h-[406px] ml-[10px] mt-[223px] ">
          <div className="flex  w-[376px] h-[79px]  ">
            <div className="absolute flex w-[80px] h-[79px] ">
              <Image
                src={"/menu/image5.png"}
                alt={"image-5"}
                width={80}
                height={70}
              ></Image>
            </div>

            <h1 className="flex absolute ml-[85px]  w-[129px] h-[28px] text-[20px]  text-white ">
              Glow Cheese{" "}
            </h1>
            <p className="flex absolute ml-[85px] text-white mt-[30px] w-[287px] h-[22px] text-[14px] leading-5 font-normal">
              Lacus nisi, et ac dapibus velit in consequat.{" "}
            </p>
            <p className="absolute ml-[85px] mt-[54px] w-[49px] h-[26px] text-[18px] font-b0ld leading-6 text-darkyellow">
              12.5$
            </p>
          </div>
          {/* div2 */}
          <div className="flex  w-[376px] h-[79px] mt-[29px] ">
            <div className="absolute flex w-[80px] h-[79px] ">
              <Image
                src={"/menu/image6.png"}
                alt={"image-6"}
                width={80}
                height={70}
              ></Image>
            </div>

            <h1 className="flex absolute ml-[85px]  w-[118px] h-[28px] text-[20px]  text-white ">
              Italian Pizza{" "}
            </h1>
            <p className="flex absolute ml-[85px] text-white mt-[30px] w-[287px] h-[22px] text-[14px] leading-5 font-normal">
              Lacus nisi, et ac dapibus velit in consequat.{" "}
            </p>
            <p className="absolute ml-[85px] mt-[54px] w-[49px] h-[26px] text-[18px] font-b0ld leading-6 text-darkyellow">
              14.5${" "}
            </p>
          </div>
          {/* div3 */}
          <div className="flex  w-[376px] h-[79px] mt-[29px] ">
            <div className="absolute flex w-[80px] h-[79px] ">
              <Image
                src={"/menu/image7.png"}
                alt={"image-7"}
                width={80}
                height={70}
              ></Image>
            </div>

            <h1 className="flex absolute ml-[85px]  w-[103px] h-[28px] text-[20px]  text-white ">
              Sllice Beef{" "}
            </h1>
            <p className="flex absolute ml-[85px] text-white mt-[30px] w-[287px] h-[22px] text-[14px] leading-5 font-normal">
              Lacus nisi, et ac dapibus velit in consequat.{" "}
            </p>
            <p className="absolute ml-[85px] mt-[54px] w-[49px] h-[26px] text-[18px] font-b0ld leading-6 text-darkyellow">
              12.5$
            </p>
          </div>
          {/* div4 */}
          <div className="flex  w-[376px] h-[79px] mt-[29px]  ">
            <div className="absolute flex w-[80px] h-[79px] ">
              <Image
                src={"/menu/image8.png"}
                alt={"image-8"}
                width={80}
                height={70}
              ></Image>
            </div>

            <h1 className="flex absolute ml-[85px]  w-[155px] h-[28px] text-[20px]  text-white ">
              Mushaom Pizza{" "}
            </h1>
            <p className="flex absolute ml-[85px] text-white mt-[30px] w-[287px] h-[22px] text-[14px] leading-5 font-normal">
              Lacus nisi, et ac dapibus velit in consequat.{" "}
            </p>
            <p className="absolute ml-[85px] mt-[54px] w-[49px] h-[26px] text-[18px] font-b0ld leading-6 text-darkyellow">
              12.5$
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainpageMenu;
