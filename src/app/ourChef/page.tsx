"use client";

import React, { useEffect, useState } from "react";
import Heading from "../components/headingprops";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { BiLoader } from "react-icons/bi";

interface Chef {
  name: string;
  position: string;
  experience: number;
  specialty: string;
  imageUrl: string;
  description: string;
  available: boolean;
}

const OurChef = () => {
  const [data, setData] = useState<Chef[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const chefs: Chef[] = await client.fetch(
        `*[_type == "chef"] {
          name,
          position,
          experience,
          specialty,
          "imageUrl": image.asset->url,
          description,
          available
        }`
      );
      setData(chefs);
    };

    fetchData();
  }, []);

  if (!data.length)
    return (
      <div className="mt-[300px] bg-white w-full mx-auto h-[800px] text-darkyellow text-6xl mb-[300px]">
        Loading...
        <BiLoader className=""/>
      </div>
    );

  return (
    <div className="w-[1920px] bg-white h-[2000px]">
      <Heading Heading="Our Chef" home="Home" pagename="Chef" />

      {/* Chef Images and Details Section */}
      <div className="grid grid-cols-4 gap-6 mt-20 w-[1440px] px-1 h-auto pl-[36px] mx-auto">
        {data.map((chef, index) => (
          <div key={index} className="relative group">
            {/* Chef Image */}
            <Image
              src={chef.imageUrl}
              alt={chef.name}
              width={312}
              height={400}
              className="w-[312px] h-[400px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover effect for Chef Details */}
            <div className="w-[312px] h-[400px] absolute inset-0 bg-black bg-opacity-60  text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold">{chef.name}</h3>
              <p className="mt-2 text-lg">{chef.position}</p>
              <p className="mt-2 text-sm text-gray-300">{chef.specialty}</p>
              <p className="mt-4 text-center">{chef.description}</p>
              <p className="mt-2 font-medium">
                {chef.experience} years of experience
              </p>
              <p className="mt-2">
                {chef.available ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurChef;
