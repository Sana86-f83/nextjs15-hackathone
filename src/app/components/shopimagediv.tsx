import Image from "next/image";
import React from "react";

const ShopImages = ({images, name, price1,price2 }: { images:string ,name: string; price1: string,price2:string}) => {
  return (
    <div>
      <div className="w-[312px] h-[330px]  mt-[24px] ">
        <Image
          src={images}
          alt={"cartimage1"}
          width={312}
          height={330}
          className="relative"
        ></Image>
        <h1 className="w-[50%] h-[26px] mt-[8px] text-[18px] font-bold tracking-wide">
          {name}
        </h1>
        <p className="flex justify-between w-[116px] h-[24px] mt-[4px] text-[16px] font-normal  text-darkyellow">
          {price1} <span className=" text-gray3 line-through">{price2}</span>
        </p>
      </div>
    </div>
  );
};

export default ShopImages;
