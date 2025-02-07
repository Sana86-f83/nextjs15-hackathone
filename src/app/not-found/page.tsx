import React from "react";
import Heading from "../components/headingprops";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="w-[1920px] bg-white">
      <Heading Heading="404 Error" home="Home" pagename="404" />
      <div className="w-[1320px] h-[582px]  m-auto">
        <div className="w-[630px] h-[342px] mt-[120px] m-auto absolute ml-[347px] ">
          <h1 className="w-[161px] h-[104px] text-[96px] font-bold m-auto text-darkyellow">
            404
          </h1>
          <p className="w-[630px] h-[40px] text-center font-bold mt-[32px]  text-[32px] text-cheftextcolor">
            Oops! Look likes something going wrong
          </p>
          <p className="w-[490px] h-[52px] text-center m-auto mt-[24px]  text-[18px] font-normal leading-6 text-cheftextcolor/80">
            Page Cannot be found! we’ll have it figured out in no time.
            Menwhile, cheek out these fresh ideas:
          </p>
          <button className="w-[197px] h-[58px] bg-darkyellow mt-[32px] ml-[217px] text-white rounded-md">
            <Link href={"/"}>Go to home </Link></button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
