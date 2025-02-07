import Image from "next/image";
import React from "react";

const OurFoodMenu = () => {
  return (
    <div className="w-[1920px] h-[941px]  mt-[120px] ">
      <div className="w-[1320px] h-[941px] relative m-auto mt-[24px] ">
        <div className="w-[355px] h-[56px]  m-auto text-[48px] text-cheficoncolor ">
          <Image
            src={"/ourfoodmenu/leafbg.png"}
            alt={"heading-leafbg"}
            width={100}
            height={158}
            className="absolute -mt-[40px] ml-[100px] w-[140px] h-[158.56px] -rotate-45"
          ></Image>
          <Image
            src={"/ourfoodmenu/leafbg.png"}
            alt={"heading-leafbg"}
            width={100}
            height={158}
            className="absolute -mt-[40px] ml-[100px]  w-[100px] h-[158.56px] rotate-45"
          ></Image>
          <Image
            src={"/ourfoodmenu/leafbg.png"}
            alt={"heading-leafbg"}
            width={100}
            height={158}
            className="absolute -mt-[40px] ml-[100px]  w-[140px] h-[158.56px] -rotate-45"
          ></Image>

          <h1 className="w-[355px] h-[56px] text-chefcoloricon m-auto mt-[24px]">
            Our Food Menu
          </h1>
          <p className="w-[418px] h-[48px] -ml-[40px] mt-[8px]  text-[16px] text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
        </div>
        {/* navbar-menuitem */}
        <div className="absolute ml-[353px] mx-auto  mt-[100px] w-[622px] h-[28px] ">
          <ul className="flex justify-between  text-[20px] font-bold text-black cursor-pointer mt-[6px] ">
            <li className="text-darkyellow hover:underline hover:underline-offset-2  ">
              Breakfast
            </li>
            <li className="hover:underline hover:underline-offset-2>Lunch">
              Lunch
            </li>
            <li className="hover:underline hover:underline-offset-2>Lunch">
              Dinner
            </li>
            <li className="hover:underline hover:underline-offset-2>Lunch">
              Desert
            </li>
            <li className="hover:underline hover:underline-offset-2>Lunch">
              Drinks
            </li>
            <li className="hover:underline hover:underline-offset-2>Lunch">
              Snack
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[1320px] h-2 text-white mx-auto" />

      {/* menu-detail-list */}

      {/* textdiv-1 */}
      <div className="w-[1320px] h-[532px] grid grid-cols-2 -mt-[680px] m-auto ">
      <div className="w-[648px] h-[111px]     ">
        <p className="flex justify-between tracking-tight w-[648px] h-[42px]  text-[24px]  text-darkyellow">
          Alder Grilled Chinook Salmon
          <span className="flex  h-[32px] text-darkyellow ">32$</span>
        </p>
        <p className="w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="w-[63px] h-[24px] mt-[8px] text-gray3 text-[16px] font-normal">
          560 CAL
        </p>
      </div>
      {/* text div2 */}
      <div className="w-[648px] h-[111px]     ml-[10px]">
        <p className="flex justify-between tracking-tight w-[648px] h-[42px]  text-[24px]  text-cheftextcolor">
          Alder Grilled Chinook Salmon
          <span className="flex  h-[32px] text-darkyellow ">32$</span>
        </p>
        <p className="w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="w-[63px] h-[24px] mt-[8px] text-gray3 text-[16px] font-normal">
          560 CAL
        </p>
      </div>
      {/* textdiv3 */}
      <div className="w-[648px] h-[111px]    ">
        <p className="flex justify-between tracking-tight w-[648px] h-[42px]  text-[24px]  text-cheftextcolor">
          Alder Grilled Chinook Salmon
          <span className="flex  h-[32px] text-darkyellow ">32$</span>
        </p>
        <p className="w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="w-[63px] h-[24px] mt-[8px] text-gray3 text-[16px] font-normal">
          560 CAL
        </p>
      </div>
      {/* textdiv4 */}
      <div className="w-[648px] h-[111px]    ml-[10px]">
        <p className="flex justify-between tracking-tight w-[648px] h-[42px]  text-[24px]  text-cheftextcolor">
          Alder Grilled Chinook Salmon
          <span className="flex  h-[32px] text-darkyellow ">32$</span>
        </p>
        <p className="w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="w-[63px] h-[24px] mt-[8px] text-gray3 text-[16px] font-normal">
          560 CAL
        </p>
      </div>
      {/* rightside-menulist div2-1*/}
      <div className=" w-[648px] h-[111px]     ">
        <p className="flex justify-between tracking-tight w-[648px] h-[42px]  text-[24px]  text-cheftextcolor">
          Alder Grilled Chinook Salmon
          <span className="flex  h-[32px] text-darkyellow ">32$</span>
        </p>
        <p className="w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="w-[63px] h-[24px] mt-[8px] text-gray3 text-[16px] font-normal">
          560 CAL
        </p>
      </div>
      {/* div2-munulist */}
      <div className=" w-[648px] h-[111px]     ml-[10px]">
        <p className="flex justify-between tracking-tight w-[648px] h-[42px]  text-[24px]  text-cheftextcolor">
          Alder Grilled Chinook Salmon
          <span className="flex  h-[32px] text-darkyellow ">32$</span>
        </p>
        <p className="w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="w-[63px] h-[24px] mt-[8px] text-gray3 text-[16px] font-normal">
          560 CAL
        </p>
      </div>
            {/* div3-munulist */}

      <div className=" w-[648px] h-[111px]">
        <p className="flex justify-between tracking-tight w-[648px] h-[42px]  text-[24px]  text-cheftextcolor">
          Alder Grilled Chinook Salmon
          <span className="flex  h-[32px] text-darkyellow ">32$</span>
        </p>
        <p className="w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="w-[63px] h-[24px] mt-[8px] text-gray3 text-[16px] font-normal">
          560 CAL
        </p>
      </div>
            {/* div4-munulist */}

      <div className=" w-[648px] h-[111px]   ml-[10px]">
        <p className="flex justify-between tracking-tight w-[648px] h-[42px]  text-[24px]  text-cheftextcolor">
          Alder Grilled Chinook Salmon
          <span className="flex  h-[32px] text-darkyellow ">32$</span>
        </p>
        <p className="w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="w-[63px] h-[24px] mt-[8px] text-gray3 text-[16px] font-normal">
          560 CAL
        </p>
      </div>
      </div>
      {/* view-more */}
      <div className="m-auto w-[143px] h-[52px] mt-[76px] rounded-sm border-2 border-darkyellow ">
            <h1 className="m-auto pt-[10px] w-[79px] h-[32px] text-[16px] text-darkyellow  font-normal  ">View menu</h1>
           </div>

    </div>
  );
};

export default OurFoodMenu;
