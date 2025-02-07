'use client'

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface FoodCategoryResponse {
  heading: string;
  highlightedText: string;
  titleImage: {
    asset: {
      url: string;
    };
  };
  backgroundImage: {
    asset: {
      url: string;
    };
  };
  foodItems: {
    altText: string;
    image: {
      asset: {
        url: string;
      };
    };
  }[];
}

const Food_Category = () => {
  const [data, setData] = useState<FoodCategoryResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data: FoodCategoryResponse =
        await client.fetch(`*[_type == "foodCategory"][0] {
    heading,
    highlightedText,
    titleImage {
      asset->{
        url
      }
    },
    backgroundImage {
      asset->{
        url
      }
    },
    foodItems[0..3] {  // Fetching the first 4 items from foodItems array
      altText,
      image {
        asset->{
          url
        }
      }
    }
  }
  `);
      setData(data);
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-black w-[1920px]">
      <div className=" w-[1920px] h-[489px] flex flex-wrap lg:mt-0 mt-[450px] ">
        <div className="w-full h-auto lg:h-[489px] lg:w-[1792.31px] ml-[30px] lg:ml-[300px] text-white  ">
          <Image
            src={data.titleImage.asset.url}
            alt="Food Category Image"
            width={177}
            height={40}
            className="h-[40px] w-[177px] ml-[50px] lg:ml-[591px]"
          ></Image>
          <Image
            src={data.backgroundImage.asset.url}
            alt="background Image"
            width={532}
            height={444}
            className=" hidden lg:block h-[444px] w-[532px] absolute mt-[100px] ml-[1022px] "
          ></Image>
          <h1 className="h-[56px] w-[446px]  text-left flex  font-bold text-[32px] lg:text-[48px] lg:mt-[15px] lg:ml-[456px]">
            <span className="text-darkyellow flex h-[60px]">
              {data.highlightedText}
            </span>
            {data.heading}
          </h1>
          <div className="h-[329px] w-[1320px] mt-[57px] grid grid-cols-1 gap-4 lg:flex lg:justify-between">
            {data.foodItems.map((item, index) => (
              <div key={index} className="h-[328px] w-[305px]">
                <Image
                  src={item.image.asset.url}
                  alt={item.altText}
                  width={305}
                  height={328}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food_Category;
