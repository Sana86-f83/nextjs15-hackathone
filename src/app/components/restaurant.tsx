"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeroSection {
  backgroundImage: string;
  mainImage: string;
  verticalImage: string;
}

interface CTAButton {
  text: string;
  link: string;
}

interface ContentSection {
  taglineImage: string;
  headings: string[];
  description: string;
  ctaButton: CTAButton;
}

interface RestaurantPageData {
  heroSection: HeroSection;
  contentSection: ContentSection;
}

const Restaurant = () => {
  const [data, setData] = useState<RestaurantPageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(
        `*[_type == "restaurantPage"] {
          "heroSection": {
            "backgroundImage": heroSection.backgroundImage.asset->url,
            "mainImage": heroSection.mainImage.asset->url,
            "verticalImage": heroSection.verticalImage.asset->url
          },
          "contentSection": {
            "taglineImage": contentSection.taglineImage.asset->url,
            "headings": contentSection.headings,
            "description": contentSection.description,
            "ctaButton": {
              "text": contentSection.ctaButton.text,
              "link": contentSection.ctaButton.link
            }
          }
        }`
      );
      console.log("Fetched Data:", result);
      setData(result[0]); // Assuming you only have one restaurantPage document
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-[1920px] h-[730px] -mt-[120px] bg-black">
      {/* HERO DIV */}
      <div className="hidden lg:flex w-full h-auto lg:h-[818px] lg:w-[1920px] absolute ">
        <Image
          src={data.heroSection.backgroundImage}
          alt="Hero Background Image"
          width={1920}
          height={818}
          className="-mt-[120px] opacity-10"
        />
      </div>
      <div>
        {/* Right Side Image Div */}
        <div>
          <div className="absolute lg:h-[670px] w-[320px] h-[400px] md:w-[400px] md:h-[450px] md:mt-[100px]  lg:w-[877.8px] mt-[450px]  px-auto  lg:mt-[49px]">
            <Image
              src={data.heroSection.mainImage}
              alt="Main Display Image"
              width={877.8}
              height={670}
              className="ml-[30px] md:ml-[350px] lg:ml-[927px]"
            />
          </div>
          {/* Left Side Text Div */}
          <div className="lg:h-[356px] lg:w-[472px] w-full h-auto absolute pl-[40px] lg:pl-[0px] mt-[90px] text-white lg:ml-[359px] lg:mt-[144px]">
            <Image
              src={data.contentSection.taglineImage}
              alt="Its Quick & Amusing! Image"
              width={249}
              height={40}
            />
            <h1 className="h-[68px] w-[472px] lg:mt-[8px] mt-[12px] flex font-bold text-[40px] lg:text-[60px] absolute leading-tight tracking-tight ">
              <span className="text-darkyellow flex lg:h-[60px]">Th</span>e Art
              of speed
            </h1>
            <h1 className="h-[68px] w-[472px] mt-[60px] lg:mt-[88px] flex font-bold text-[40px] lg:text-[60px] absolute leading-tight tracking-tight ">
              food Quality
            </h1>
            <p className="h-[48px] justify-center w-[318px] lg:w-[418px] text-[16px] mt-[130px] lg:mt-[176px]">
              {data.contentSection.description}
            </p>
            <button className="lg:h-[60px] w-[120px] h-[35px] lg:w-[190px] text-white text-[16px] bg-darkyellow rounded-full mt-[50px] lg:mt-[32px]">
              <Link href={data.contentSection.ctaButton.link}>
                {data.contentSection.ctaButton.text}
              </Link>
            </button>
          </div>
          <div>
            <Image
              src={data.heroSection.verticalImage}
              alt="Vertical Image"
              width={25.28}
              height={492}
              className="hidden lg:flex lg:mt-[65px] lg:ml-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
