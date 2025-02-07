"use client";
import Heading from "@/app/components/headingprops";
import Navbar2 from "@/app/components/Navbar2";
import ShopImages from "@/app/components/shopimagediv";
import { client } from "@/sanity/lib/client";
import { Product } from "@/type";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
// For a dynamic page component

import React, { useEffect, useState } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { CiHeart, CiTwitter, CiYoutube } from "react-icons/ci";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoIosGitCompare,
} from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { MdOutlineStar } from "react-icons/md";
import { PiBag, PiTote } from "react-icons/pi";
import { RingLoader } from "react-spinners";

export default function Slug({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [data, setData] = useState<Product | null>(null); // Updated type to Product | null
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Track the product quantity

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == 'food' && slug.current == "${slug}"]{
            _id,
            name,
            category,
            price,
            originalPrice,
            tags,
            image {
              asset -> {
                url
              }
            },
            description,
            available,
            block
          }[0]`;

        const fetchedData: Product = await client.fetch(query); // Assuming Product type is correctly defined
        setData(fetchedData); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-black z-50">
        <RingLoader color="#FF9F0D" size={100} speedMultiplier={1} />
      </div>
    );
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="w-[1920px] h-[2560px] bg-white relative">
      <Navbar2 />
      <Heading Heading="Shop Details" home="Home" pagename="Shop Details" />
      <div className="w-[1920px] h-[2560px]  absolute ">
        <div className="w-[1320px] h-[718px] mt-[120px] m-auto ">
          {/* leftside-images */}
          <div className="flex flex-col absolute justify-between w-[647px] h-[596px]  ">
            <div className="w-[132px] h-[129px]">
              <Image
                src={"/shop-details/shopdetail-image1.png"}
                alt={"shopdetail"}
                width={132}
                height={129}
              ></Image>
            </div>
            <div className="w-[132px] h-[129px]   ">
              <Image
                src={"/shop-details/shopdetail-image2.png"}
                alt={"shopdetail"}
                width={132}
                height={129}
              ></Image>
            </div>
            <div className="w-[132px] h-[129px]  ">
              <Image
                src={"/shop-details/shopdetail-image3.png"}
                alt={"shopdetail"}
                width={132}
                height={129}
              ></Image>
            </div>
            <div className="w-[132px] h-[129px] ">
              <Image
                src={"/shop-details/shopdetail-image4.png"}
                alt={"shopdetail"}
                width={132}
                height={129}
              ></Image>
            </div>
            <div className="flex absolute ml-[156px] w-[491px] h-[596px] ">
              {data.image.asset.url && (
                <Image
                  src={data.image.asset.url}
                  alt={data.name}
                  width={491}
                  height={596}
                />
              )}
            </div>
          </div>
          {/* right-side-text */}
          <div className="flex w-[608px] absolute h-[718px] ml-[703px]">
            <button className="w-[86px] h-[26px] text-center text-white rounded-md mt-[2px] bg-darkyellow">
              {data.available ? "In Stock" : "Out of Stock"}
            </button>

            <div className="flex w-[152px] h-[26px] ml-[280px]   text-gray3  ">
              <GoArrowLeft className="w-[24px] h-[24px] text-cheftextcolor" />
              <p className="  w-[39px] h-[26px] ml-[4px] text-cheftextcolor">
                <Link href={"/shoplist"}>Back</Link>{" "}
              </p>

              <p className="  w-[39px] h-[26px] ml-[16px]  text-cheftextcolor">
                <Link href={"/ShoppingCart"}>Next</Link>{" "}
              </p>
              <GoArrowRight className="w-[24px] h-[24px] text-cheftextcolor" />
            </div>
            {/* yummy chicken chup */}
          </div>
          <h1 className="flex absolute ml-[703px] w-[510px] h-[56px] mt-[34px] text-[48px] text-cheftextcolor font-bold ">
            {data.name}
          </h1>
          <p className="w-[608px] h-[97px] absolute ml-[703px] mt-[120px] tracking-wider ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
            in consequat.
          </p>
          <hr className="w-[610px] bg-gray-900 absolute ml-[703px] mt-[249px]" />
          <h1 className="w-[98px] h-[40px] text-black text-[32px] absolute ml-[703px] font-bold leading-10 mt-[281px]">
            ${data.price}.00
          </h1>

          <div className=" w-[333px] h-[24px]  mt-[337px] absolute ml-[703px]">
            <div className="flex justify-between mt-[2px] w-[116px] h-[20px] absolute text-darkyellow ">
              <MdOutlineStar className="w-[20px] h-[20px]" />{" "}
              <MdOutlineStar className="w-[20px] h-[20px]" />
              <MdOutlineStar className="w-[20px] h-[20px]" />
              <MdOutlineStar className="w-[20px] h-[20px]" />
              <MdOutlineStar className="w-[20px] h-[20px]" />
            </div>
            <div className="flex w-[203px] h-[24px] text-coloricon text-[16px] absolute ml-[134px] ">
              <p className="w-[16px] ">|</p>
              <p className="w-[76px] h-[24px] leading-6 text-[16px] ">
                5.0 Rating
              </p>
              <p className="w-[16px] ">|</p>
              <p className="w-[76px] h-[24px] leading-6 text-[16px] ">
                22 Review
              </p>
            </div>
            <p className="w-[175px] h-[26px] mt-[32px]  text-[18px] leading-7 tracking-wide">
              Dictum/cursus/Risus
            </p>
            <div className="w-[181px] h-[50px] flex justify-between mt-[25px]">
              <div className="w-[61px] h-[50px] border-2 border-gray3 ">
                <button
                  onClick={handleDecrement}
                  className="w-[20px] h-[20px] mx-auto flex justify-center text-black items-center mt-[15px]  text-[56px]"
                >
                  -
                </button>
              </div>
              <div className="w-[60px] h-[50px] border-2 border-gray3">
                <p className="w-[20px] h-[20px] font-light m-auto pt-[4px] text-black text-[32px]">
                  {quantity}
                </p>
              </div>
              <div className="w-[60px] h-[50px] border-2 border-gray3">
                <button
                  onClick={handleIncrement}
                  className="w-[20px] h-[20px] mx-auto flex justify-center text-black items-center mt-[15px]  text-[32px]"
                >
                  +
                </button>
              </div>
              <div className="w-[191px] h-[50px] absolute  bg-darkyellow ml-[197px] border-2 border-gray3/90 ">
                <PiBag className="w-[20px] h-[20px] text-white ml-[30px] mt-[12px] absolute" />

                <button className="w-[96px] h-[26px]  ml-[60px] mt-[12px] text-white">
                  <Link href={"/ShoppingCart"}> Add to Cart </Link>
                </button>
              </div>
              <hr className="w-[610px] bg-coloricon absolute  mt-[78px]" />
            </div>
            <div className="flex w-[278px] h-[26px] text-center  absolute mt-[48px]">
              <CiHeart className="w-[20px] h-[20px] text-[20px]" />
              <p className="w-[128px] h-[26px] text-[18px] font-normal text-cheftextcolor">
                Add to Wishlist
              </p>
              <IoIosGitCompare className="w-[20px] h-[20px] ml-[16px] items-center" />
              <p className="w-[78px] h-[26px] text-[18px] ml-[8px] font-normal text-cheftextcolor">
                Compare
              </p>
            </div>
            <p className="w-[138px] h-[26px] tracking-wide mt-[80px] ">
              Category: Pizza
            </p>
            <p className="w-[138px] h-[26px]  tracking-wide mt-[8px]">
              Tag: Our Shop
            </p>
            <div className="flex w-[250px] h-[26px]  mt-[4px] absolute">
              <p>Share : </p>
              <div className=" flex justify-around w-[184px] h-[24px]">
                <div className="w-[24px] h-[24px]  bg-cheftextcolor rounded-full ">
                  <CiYoutube className="w-[22px] h-[20px] pt-[6px]  text-white" />
                </div>
                <div className="w-[24px] h-[24px]  bg-cheftextcolor rounded-full ">
                  <BiLogoFacebook className="w-[24px] h-[24px] text-white " />
                </div>
                <div className="w-[24px] h-[24px]  bg-cheftextcolor rounded-full ">
                  <CiTwitter className="w-[24px] h-[22px] text-white  " />
                </div>
                <div className="w-[24px] h-[24px]  bg-cheftextcolor  rounded-full ">
                  <IoLogoInstagram className="w-[20px] h-[20px] text-white ml-[2px] mt-[2px]" />
                </div>
              </div>
            </div>
            <hr className="w-[610px] bg-gray3 absolute  mt-[40px]" />
          </div>
        </div>
        <div className="w-[1320px] h-[458px] flex mt-[16px]  text-[16px]  mx-auto">
          <div className="w-[165px] h-[50px] flex justify-center items-center bg-darkyellow">
            Description
          </div>
          <p className="mt-[13px] ml-[24px]">Reviews (24)</p>

          <section className="w-[1300px] h-[72px] absolute mt-[82px] tracking-wide">
            <PortableText value={data.block} />{" "}
          </section>
          <div className="w-[476px] h-[184px] mt-[274px] absolute text-[18px] ">
            Key Benefits
            <ul className="text-[14px] leading-8 list-disc pl-6">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
              <li>
                Vestibulum sed massa vel ipsum imperdiet malesuada id tempus
                nisl.
              </li>
              <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
              <li>Mauris eget diam magna, in blandit turpis.</li>
            </ul>
          </div>
        </div>
        <div className="w-[1320px] h-[401px]  mt-[120px] m-auto">
          <div className="flex justify-between w-[1320px] h-[39px] ">
            <h1 className="w-[255px] h-[39px]  text-[32px] text-cheftextcolor">
              Similar Products
            </h1>
            <div className="flex w-[88px] h-[39px] ">
              <IoIosArrowRoundBack className="w-[40px] h-[39px] bg-white rounded-full" />
              <IoIosArrowRoundForward className="w-[40px] h-[39px] bg-darkyellow rounded-full text-white" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <div className="w-[312px] h-[330px]  mt-[24px] ">
              <Image
                src={"/shoplist/shoplistimage1.png"}
                alt={"cartimage1"}
                width={312}
                height={267}
                className="relative"
              ></Image>
              <h1 className="w-[96px] h-[26px] mt-[8px]  text-[18px] font-bold tracking-tight">
                Fresh Lime
              </h1>
              <p className="flex justify-between w-[116px] h-[24px] mt-[4px] text-[16px] font-normal  text-darkyellow">
                $38.00
                <span className="text-gray3 line-through">$45.00</span>
              </p>
            </div>
            {/* 2nd-div */}
            <div className="">
              <ShopImages
                images={"/shoplist/shoplist-image2.png"}
                name="Chocolate Muffin"
                price1="$28.00"
                price2=""
              />
              <div className="flex  w-[146px] absolute h-[34px] -mt-[200px] justify-between items-center ml-[80px]">
                <LiaProjectDiagramSolid className="w-[40.14px] h-[34px] text-darkyellow bg-white" />
                <PiTote className="w-[40.14px] h-[34px] bg-darkyellow text-white" />
                <CiHeart className="w-[40.14px] h-[34px] text-darkyellow bg-white" />
              </div>
            </div>
            {/* div3 */}
            <ShopImages
              images={"/shoplist/shoplist-image3.png"}
              name="Burger"
              price1="$21.00"
              price2="$45.00"
            />
            {/* div-4 */}
            <div className="w-[312px] h-[330px]  mt-[24px] ">
              <Image
                src={"/shoplist/shoplistimage1.png"}
                alt={"cartimage1"}
                width={312}
                height={267}
                className="relative"
              ></Image>
              <h1 className="w-[96px] h-[26px] mt-[8px]  text-[18px] font-bold tracking-tight">
                Fresh Lime
              </h1>
              <p className="flex justify-between w-[116px] h-[24px] mt-[4px] text-[16px] font-normal  text-darkyellow">
                $38.00
                <span className="text-gray3 line-through">$45.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
