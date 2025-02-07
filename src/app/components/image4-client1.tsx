import Image from "next/image";
import React from "react";

const Clients1 = () => {
  return (
    <div className="w-full h-auto md:h-[550px] md:mt-[120px] mt-[760px]  relative">
      <Image
        src={"/image4-client1/background_image.png"}
        alt="background_image"
        width={1920}
        height={469}
        className="opacity-20 w-full md:block hidden"
      />
      <div className="mt-[20px] md:mt-[-370px] w-full md:w-[1319px] h-[247px] flex md:flex-row flex-col justify-start md:justify-between ml-[20px] md:ml-[300px] text-white">
        {/* Professional Chefs */}
        <div className="h-[247px] w-[218px] md:w-[218px] absolute md:mt-[0px] mt-[20px] ml-[24px] flex flex-col items-center">
          <div className="h-[120px] w-[120px]">
            <Image
              src={"/image4-client1/Professional Chefs.png"}
              alt="Professional Chefs Image"
              width={120}
              height={120}
            />
          </div>
          <p className="text-[24px] font-bold mt-[24px] text-center">
            Professional Chefs
          </p>
          <p className="text-[40px] font-bold mt-[23px] text-center">420</p>
        </div>

        {/* Items of Food */}
        <div className="h-[247px] w-[162px] md:w-[162px] ml-[50px] md:ml-[378px] mt-[280px] md:mt-[20px] flex flex-col items-center">
  <div className="h-[120px] w-[120px]">
    <Image
      src={"/image4-client1/Items Of Food.png"}
      alt="Items Of Food Image"
      width={120}
      height={120}
    />
  </div>
  <p className="text-[24px] font-bold mt-[24px] text-center">
    Items Of Food
  </p>
  <p className="text-[40px] font-bold mt-[23px] text-center">320</p>
</div>

        {/* Years of Experience */}
        <div className="h-[247px] w-[248px]  mt-[550px] md:mt-[0px] ml-[10px] md:ml-[702px] absolute flex flex-col items-center">
          <div className="h-[120px] w-[120px]">
            <Image
              src={"/image4-client1/Years Of Experienced.png"}
              alt="Years Of Experienced Image"
              width={120}
              height={120}
            />
          </div>
          <p className="text-[24px] font-bold mt-[24px] text-center">
            Years Of Experienced
          </p>
          <p className="text-[40px] font-bold mt-[23px] text-center">30+</p>
        </div>

        {/* Happy Customers */}
        <div className="h-[247px] w-[206px] md:w-[206px] ml-[20px] md:mt-[0px] mt-[850px] md:ml-[1113px] absolute flex flex-col items-center">
          <div className="h-[120px] w-[120px]">
            <Image
              src={"/image4-client1/Happy Customers.png"}
              alt="Happy Customers Image"
              width={120}
              height={120}
            />
          </div>
          <p className="text-[24px] font-bold mt-[24px] text-center">
            Happy Customers
          </p>
          <p className="text-[40px] font-bold mt-[23px] text-center">220</p>
        </div>
      </div>
    </div>
  );
};

export default Clients1;
