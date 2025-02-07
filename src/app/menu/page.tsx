import Image from "next/image";
import React from "react";
import { PiCoffeeLight } from "react-icons/pi";
import Clients1 from "../components/image4-client1";
import PartnersClient from "../components/partners&clients";
import Heading from "../components/headingprops";
import Layout from "../components/layout";

function MenuPage() {
  return (
    <div className="w-full h-auto px-4 py-4 md:w-[1920px]  md:h-[4490px] bg-white relative">
      <Layout isHomePage={false}></Layout>
      <Heading Heading="Our Menu" home="Home" pagename="menu" />

      {/* startermenu */}
      <div className="md:flex md:flex-row flex-col w-[300px] md:w-[1320px] h-auto  md:h-[628px]  mt-[20px] ml-[10px] md:mt-[120px]  md:ml-[300px] ">
        <div className="flex md:w-[448px] w-[300px] h-[362px] md:h-[628px]  ">
          <Image
            src={"/menupage/startermenu-image.png"}
            alt={"starterimage"}
            width={448}
            height={626}
          ></Image>
        </div>
        <div className="flex flex-col w-[300px]  md:w-[760px] h-[520px] md:h-[628px] ml-[0px] md:px-0 px-4 md:ml-[112px]">
          <PiCoffeeLight className="w-[24px] h-[24px] pl-[2px] mt-[10px] text-darkyellow" />
          <h1 className="w-[294px] h-[56px] text-[36px] md:text-[48px] text-cheftextcolor font-semibold">
            Starter Menu
          </h1>
          {/* textdiv-1 */}
          <div className=" w-[280px] md:w-[760px]   h-[90px] md:h-[111px] mt-[2px] md:mt-[24px] ">
            <p className="flex justify-normal  gap-4 md:gap-0 md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Alder Grilled Chinook Salmon
              <span className="flex  h-[32px] text-darkyellow ">32$</span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <p className="w-[63px] h-[24px] mt-[20px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              560 CAL
            </p>
          </div>
          {/* text div2 */}
          <div className=" w-[280px] md:w-[760px]   h-[90px] md:h-[111px] mt-[14px] md:mt-[24px] ">
          <p className="flex justify-normal  gap-4 md:gap-0 md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
          Berries and creme tart{" "}
              <span className="flex h-[32px] text-darkyellow ">43$ </span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
              Gorgonzola, ricotta, mozzarella, taleggio{" "}
            </p>
            <p className="w-[63px] h-[24px] mt-[20px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              700 CAL{" "}
            </p>
          </div>
          {/* textdiv3 */}
          <div className=" w-[280px] md:w-[760px]   h-[90px] md:h-[111px] mt-[14px] md:mt-[24px] ">
          <p className="flex justify-normal   md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Tormentoso Bush Pizza Pintoage{" "}
              <span className="flex  h-[32px] text-darkyellow ">14$ </span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] md:leading-normal leading-tight text-coloricon font-normal mt-[7px]">
              Ground cumin, avocados, peeled and cubed{" "}
            </p>
            <p className="md:w-[63px] w-[72px] h-[24px]  mt-[16px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              1000 CAL{" "}
            </p>
          </div>
          {/* textdiv4 */}
          <div className=" w-[280px] md:w-[760px]  h-[90px] md:h-[111px] mt-[14px] md:mt-[24px] ">
          <p className="flex justify-normal  gap-4 md:gap-0 md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Spicy Vegan Potato Curry{" "}
              <span className="flex  h-[32px] text-darkyellow ">35$ </span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
              Spreadable cream cheese, crumbled blue cheese{" "}
            </p>
            <p className="w-[63px] h-[24px] mt-[20px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              560 CAL{" "}
            </p>
          </div>
        </div>
      </div>
      {/* maincourse-div */}

      <div className="md:flex md:flex-row flex-col w-[300px] h-auto md:w-[1320px]  md:h-[628px] mt-[20px] ml-[10px] md:mt-[120px]  md:ml-[300px] ">
      <div className="flex flex-col w-[300px]  md:w-[760px] h-[520px] md:h-[628px]  md:px-0 px-4 ">
      <PiCoffeeLight className="w-[24px] h-[24px] pl-[2px] mt-[10px] text-darkyellow" />
        <h1 className="w-[294px] h-[56px] text-[36px] md:text-[48px] text-cheftextcolor font-semibold">
        Main Course{" "}
          </h1>
          {/* textdiv-1 */}
          <div className=" w-[280px] md:w-[760px]   h-[90px] md:h-[111px] mt-[2px] md:mt-[24px] ">
          <p className="flex justify-normal   md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
          Optic Big Breakfast Combo Menu{" "}
              <span className="flex    h-[32px] text-darkyellow ">32$</span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
              Toasted French bread topped with romano, cheddar{" "}
            </p>
            <p className="w-[63px] h-[24px] mt-[20px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              560 CAL
            </p>
          </div>
          {/* textdiv2 */}
          <div className=" w-[280px] md:w-[760px]  h-[90px] md:h-[111px] mt-[14px] md:mt-[24px] ">
          <p className="flex justify-normal md:gap-0 gap-2  md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Cashew Chicken With Stir-Fry{" "}
              <span className="flex h-[32px] text-darkyellow ">43$ </span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] md:leading-normal leading-tight text-coloricon font-normal mt-[7px]">
              Gorgonzola, ricotta, mozzarella, taleggio{" "}
            </p>
            <p className="md:w-[63px] w-[72px] h-[24px]  mt-[16px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              700 CAL{" "}
            </p>
          </div>
          {/* textdiv3 */}
          <div className=" w-[280px] md:w-[760px]  h-[90px] md:h-[111px] mt-[14px] md:mt-[24px] ">
          <p className="flex justify-normal md:gap-0 gap-2  md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Vegetables & Green Salad{" "}
              <span className="flex h-[32px] text-darkyellow">14$ </span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] md:leading-normal leading-tight text-coloricon font-normal mt-[7px]">
              Ground cumin, avocados, peeled and cubed{" "}
            </p>
            <p className="md:w-[63px] w-[72px] h-[24px]  mt-[16px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              1000 CAL{" "}
            </p>
          </div>
          {/* textdiv4 */}
          <div className=" w-[280px] md:w-[760px]  h-[90px] md:h-[111px] mt-[14px] md:mt-[24px] ">
          <p className="flex justify-normal  md:gap-0 gap-2 md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Spicy Vegan Potato Curry{" "}
              <span className=" flex  h-[32px] text-darkyellow ">35$ </span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] md:leading-normal leading-tight text-coloricon font-normal mt-[7px]">
              Spreadable cream cheese, crumbled blue cheese{" "}
            </p>
            <p className="md:w-[63px] w-[72px] h-[24px]  mt-[16px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              560 CAL{" "}
            </p>
          </div>
        </div>
        <div className="flex md:w-[448px] w-[300px] h-[362px] md:h-[626px] ml-[0px] md:ml-[112px] ">
          <Image
            src={"/menupage/main-course.png"}
            alt={"starterimage"}
            width={448}
            height={626}
          ></Image>
        </div>
      </div>
      {/* client1-component */}
      <Clients1 />
      {/* Desert */}
      <div className="md:flex md:flex-row flex-col w-[300px] md:w-[1320px] h-auto  md:h-[628px] mt-[20px] ml-[10px] md:mt-[120px]  md:ml-[300px] ">
      <div className="flex md:w-[448px] w-[300px] h-[362px] md:h-[628px]  ">
      <Image
            src={"/menupage/menudiv-desert.png"}
            alt={"starterimage"}
            width={448}
            height={626}
          ></Image>
        </div>
        <div className="flex flex-col w-[300px]  md:w-[760px] h-[520px] md:h-[628px] ml-[0px] md:px-0 px-4 md:ml-[112px]">
        <PiCoffeeLight className="w-[24px] h-[24px] pl-[2px] mt-[10px] text-darkyellow" />
        <h1 className="w-[294px] h-[56px] text-[36px] md:text-[48px] text-cheftextcolor font-semibold">
        Desert{" "}
          </h1>
          {/* textdiv-1 */}
          <div className=" w-[280px] md:w-[760px]   h-[90px] md:h-[111px] mt-[2px] md:mt-[24px] ">
          <p className="flex justify-normal  gap-4 md:gap-0 md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
          Alder Grilled Chinook Salmon
              <span className="flex  h-[32px] text-darkyellow ">32$</span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
              Toasted French bread topped with romano, cheddar{" "}
            </p>
            <p className="w-[63px] h-[24px] mt-[20px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              560 CAL
            </p>
          </div>
          {/* text div2 */}
          <div className=" w-[280px] md:w-[760px]   h-[90px] md:h-[111px] mt-[14px] md:mt-[24px] ">
          <p className="flex justify-normal  gap-4 md:gap-0 md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Creamy mascarpone cake{" "}
              <span className="flex h-[32px] text-darkyellow ">43$ </span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
              Gorgonzola, ricotta, mozzarella, taleggio{" "}
            </p>
            <p className="w-[63px] h-[24px] mt-[20px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              700 CAL{" "}
            </p>
          </div>
          {/* textdiv3 */}
          <div className=" w-[280px] md:w-[760px]   h-[90px] md:h-[111px] mt-[14px] md:mt-[24px] ">
          <p className="flex justify-normal  gap-2 md:gap-0 md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Pastry, blueberries, lemon juice{" "}
              <span className="flex  h-[32px] text-darkyellow ">14$ </span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] md:leading-normal leading-tight text-coloricon font-normal mt-[7px]">
              Ground cumin, avocados, peeled and cubed{" "}
            </p>
            <p className="md:w-[63px] w-[72px] h-[24px]  mt-[16px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              1000 CAL{" "}
            </p>
          </div>
          {/* textdiv4 */}
          <div className=" w-[280px] md:w-[760px]   h-[90px] md:h-[111px] mt-[14px] md:mt-[24px] ">
          <p className="flex justify-normal  gap-4 md:gap-0 md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Pain au chocolat{" "}
              <span className="flex  h-[32px] text-darkyellow ">35$ </span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
              Spreadable cream cheese, crumbled blue cheese{" "}
            </p>
            <p className="w-[63px] h-[24px] mt-[20px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              560 CAL{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Drinks */}

      <div className="md:flex md:flex-row flex-col w-[300px] md:w-[1320px] h-auto  md:h-[628px]  mt-[20px] ml-[10px] md:mt-[120px]  md:ml-[300px] ">
      <div className="flex flex-col w-[300px]  md:w-[760px] h-[520px] md:h-[628px]  md:px-0 px-4 ">
      <PiCoffeeLight className="w-[24px] h-[24px] pl-[2px] mt-[10px] text-darkyellow" />
      <h1 className="w-[294px] h-[56px] text-[36px] md:text-[48px] text-cheftextcolor font-semibold">
      Drinks{" "}
          </h1>
          {/* textdiv-1 */}
          <div className=" w-[280px] md:w-[760px]   h-[90px] md:h-[111px] mt-[2px] md:mt-[24px] ">
          <p className="flex justify-normal gap-4 md:gap-0  md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Caffè macchiato{" "}
              <span className="flex    h-[32px] text-darkyellow ">32$</span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
              Toasted French bread topped with romano, cheddar{" "}
            </p>
            <p className="w-[63px] h-[24px] mt-[20px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              560 CAL
            </p>
          </div>
          {/* text div2 */}
          <div className=" w-[280px] md:w-[760px]   h-[90px] md:h-[111px] mt-[14px] md:mt-[24px] ">
          <p className="flex justify-normal  gap-4 md:gap-0 md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Aperol Spritz Capacianno{" "}
              <span className="flex h-[32px] text-darkyellow ">43$ </span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
              Gorgonzola, ricotta, mozzarella, taleggio{" "}
            </p>
            <p className="w-[63px] h-[24px] mt-[20px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              700 CAL{" "}
            </p>
          </div>
          {/* textdiv3 */}
          <div className=" w-[280px] md:w-[760px]   h-[90px] md:h-[111px] mt-[14px] md:mt-[24px] ">
          <p className="flex justify-normal  gap-4 md:gap-0 md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Caffe Latte Campuri{" "}
              <span className="flex h-[32px] text-darkyellow">14$ </span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] md:leading-normal leading-tight text-coloricon font-normal mt-[7px]">
              Ground cumin, avocados, peeled and cubed{" "}
            </p>
            <p className="md:w-[63px] w-[72px] h-[24px]  mt-[16px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              1000 CAL{" "}
            </p>
          </div>
          {/* textdiv4 */}
          <div className=" w-[280px] md:w-[760px]   h-[90px] md:h-[111px] mt-[14px] md:mt-[24px] ">
          <p className="flex justify-normal  gap-4 md:gap-0 md:justify-between tracking-tight w-[760px] h-[20px] md:h-[42px] text-[18px]  md:text-[24px]  text-cheftextcolor">
              Tormentoso BushTea Pintoage{" "}
              <span className=" flex  h-[32px] text-darkyellow ">35$ </span>
            </p>
            <p className=" w-[250px] md:w-[368px] h-[24px] text-[16px] text-coloricon font-normal mt-[7px]">
              Spreadable cream cheese, crumbled blue cheese{" "}
            </p>
            <p className="w-[63px] h-[24px] mt-[20px] md:mt-[8px] text-gray3 text-[16px] font-normal">
              560 CAL{" "}
            </p>
          </div>
        </div>
        <div className="flex md:w-[448px] w-[300px] h-[362px] md:h-[628px] ml-[0px] md:ml-[112px] ">
        <Image
            src={"/menupage/menudrinks-image.png"}
            alt={"starterimage"}
            width={448}
            height={626}
          ></Image>
        </div>
      </div>
      <PartnersClient />
    </div>
  );
}

export default MenuPage;
