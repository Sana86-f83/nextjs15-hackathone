import React from "react";

const FaqBox = ({ heading, sign = "+" }: { heading: string; sign: string }) => {
  return (
    <div className="w-[648px] h-[170px]  bg-darkyellow/10">
      <div className="w-[600px] h-[122px]   mt-[24px] absolute ml-[24px]">
        <h1 className="flex justify-between w-[600px] h-[26px]  text-[18px] tracking-wide text-black font-bold">
          {heading}
          <span className=" text-center text-[20px] w-[24px] h-[24px]">{sign}</span>
        </h1>
        <p className="w-[600px] h-[72px] text-[16px] leading-6 text-coloricon mt-[24px] text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
          modi ullam amet debitis libero veritatis enim repellat optio natus eum
          delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
        </p>
      </div>
    </div>
  );
};

export default FaqBox;
