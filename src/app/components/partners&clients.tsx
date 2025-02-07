import Image from "next/image";
import React from "react";

const PartnersClient = () => {
  return (
    <div className="w-[300px] md:w-[1322px]   h-[960px] md:h-[275px] mt-[20px] md:mt-[120px] md:ml-[300px]  ml-[10px] m-auto">
      <div className="w-full  md:w-[1322px] h-auto md:h-[275px] ">
        <h3 className="w-[152.98px] h-[25.93px]  text-[18px] text-cheftextcolor font-normal m-auto ">
          Partners & Clients
        </h3>
        <h1 className="w-[672.9px] h-[55.86px] text-[20px] md:text-[48px] text-cheftextcolor m-auto text-start md:text-center font-semibold mt-[7.98px]">
          We work with the best pepole
        </h1>
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-3 w-[1322px] h-[129px] mt-[10px] md:-mt-[130.86px] ">
        <div className="w-[240.96px] h-[129.23px] md:ml-[0px] ml-[30px] ">
          <Image
            src={"/partners-client/partner-image1.png"}
            alt={"partners-client-image1"}
            width={240.96}
            height={129.23}
          ></Image>
        </div>
        <div className="w-[166.88px] h-[128.86px] ml-[69.99px] ">
          <Image
            src={"/partners-client/partner-image2.png"}
            alt={"partners-client-image2"}
            width={166.88}
            height={128.86}
          ></Image>
        </div>
        <div className="w-[143.98px] h-[127.01px] ml-[71.92px] ">
          <Image
            src={"/partners-client/partner-image3.png"}
            alt={"partners-client-image3"}
            width={143.98}
            height={127.01}
          ></Image>
        </div>
        <div className="w-[130.98px] h-[129.37px] ml-[73.1px] ">
          <Image
            src={"/partners-client/partner-image4.png"}
            alt={"partners-client-image4"}
            width={130.98}
            height={129.37}
          ></Image>
        </div>
        <div className="w-[167.97px] h-[129.17px] ml-[70.51px] ">
          <Image
            src={"/partners-client/partner-image5.png"}
            alt={"partners-client-image5"}
            width={167.97}
            height={129.17}
          ></Image>
        </div>
        <div className="w-[113.98px] h-[129.37px] ml-[70.66px] ">
          <Image
            src={"/partners-client/partner-image6.png"}
            alt={"partners-client-image6"}
            width={113.98}
            height={129.37}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default PartnersClient;
