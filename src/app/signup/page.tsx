import { AiOutlineUser } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoIosCheckmark } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Heading from "../components/headingprops";
import Navbar2 from "../components/Navbar2";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="w-[1920px] h-[1274px] bg-gray5 relative">
      <Navbar2 />
      <Heading Heading="Sign Up" home="Home" pagename="Sign Up" />
      <div className="flex flex-col mt-[120px] w-[424px] h-[624px] ml-[743px] shadow-md">
        <h1 className="w-[76px] h-[28px] mt-[16px] ml-[37px] text-cheftextcolor text-[20px] font-bold ">
          Sign Up
        </h1>
        <div className="relative w-[360px] h-[44px]  mt-[32px] ml-[32px]">
          <input
            type="text"
            placeholder="Name"
            className="w-[360px] h-[44px]  pl-[46px] text-[18px]  bg-gray5  outline outline-gray-400/10 rounded-sm text-coloricon/5"
          />
          <AiOutlineUser className="text-[24px] ml-[16px] -mt-[36px] absolute text-coloricon/50" />
        </div>
        <div className="relative w-[360px] h-[44px]  mt-[16px] ml-[32px] ">
          <input
            type="text"
            placeholder="Email"
            className="w-[360px] h-[44px]  pl-[46px] text-[18px]   bg-gray5  outline outline-gray-400/10 rounded-sm  text-coloricon/5"
          />
          <FaRegEnvelope className="text-[24px] ml-[16px] -mt-[36px] absolute text-coloricon/40" />
        </div>
        <div className="relative w-[360px] h-[44px]  mt-[16px] ml-[32px] ">
          <input
            type="text"
            placeholder="Password"
            className="w-[360px] h-[44px]  pl-[42px] text-[18px]  bg-gray5  outline outline-gray-400/10 rounded-sm  text-coloricon/5"
          />
          <CiLock className="text-[24px] ml-[16px] -mt-[36px] absolute text-coloricon/80" />
        </div>
        <div className="relative flex w-[129px] h-[22px]  mt-[16px] ml-[42px]">
          <IoIosCheckmark className="w-[20px] h-[20px] bg-darkyellow text-white" />
          <p className="absolute ml-[24px] w-[101px] h-[22px] text-cheftextcolor pt-[1px] text-[14px] tracking-tight">
            Remember me ?
          </p>
        </div>
        <button className="w-[360px] h-[44px] text-[16px] font-normal tracking-wider leading-10 bg-darkyellow text-white text-center ml-[32px] mt-[32px] rounded-sm">
          <Link href={"/signup/signIn"}> Sign Up </Link>
        </button>
        <p className="w-[113px] h-[22px]  ml-[279px] mt-[16px] text-[14px] font-light text-gray3">
          Forget password?
        </p>
        <div className="flex items-center justify-center my-4 w-[360px] h-[32px] mt-[16px] ml-[32px]">
          <div
            className="h-px bg-gray-400 font-thin text-[0.5px]"
            style={{ width: "168px" }}
          ></div>
          <span className=" text-[14px] font-normal py-[6px] px-[3px] text-coloricon w-[32px] h-[32px] border-2 border-gray-400/30">
            OR
          </span>
          <div className="h-px bg-gray-400" style={{ width: "161px" }}></div>
        </div>
        <div className=" relative w-[360px] h-[44px]  ml-[32px] mt-[16px]   bg-gray5  outline outline-gray-400/10 rounded-sm ">
          <FcGoogle className="w-[20px] h-[20px] ml-[16px] mt-[12px] " />
          <p className="absolute ml-[108px] -mt-[20px]  w-[144px] h-[24px] text-[16px] font-normal text-coloricon">
            Sign up with Google
          </p>
        </div>
        <div className=" relative w-[360px] h-[44px]  ml-[32px] mt-[16px]   bg-gray5  outline outline-gray-400/10 rounded-sm">
          <FaApple className="w-[20px] h-[20px] ml-[16px] mt-[12px] " />
          <p className="absolute ml-[108px] -mt-[20px]  w-[144px] h-[24px] text-[16px] font-normal text-coloricon">
            Sign up with Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
