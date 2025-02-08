"use client";

import React, { useEffect, useState } from "react";
import Heading from "../components/headingprops";
import { ClipLoader } from "react-spinners";

import Image from "next/image";
import Swal from "sweetalert2";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Link from "next/link";
import { client } from "@/sanity/lib/client"; // Import your sanity client
import Navbar2 from "../components/Navbar2";
import { addToCart } from "../actions/actions";
import { Product } from "@/type";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const ShopList = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to store products
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [searchText, setSearchText] = useState(""); // State for search text

  // Fetch products from Sanity using GROQ
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "food"] {
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
          "slug":slug.current,
          block,           
          inventoryts      
        }`;

        // Fetch the data from Sanity
        const data: Product[] = await client.fetch(query);
        console.log(data); // Log the data to check if it's coming through correctly

        // Set the products in the state
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty array ensures this only runs once when the component mounts

  // Filter products based on the search text
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });

    addToCart(product);
  };

  return (
    <div className="w-[1920px] h-auto bg-red-400 ">
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90 flex justify-center items-center z-50">
          <ClipLoader color="#FF9F0D" size={150} className="text-[24px]" />
        </div>
      )}
      <Navbar2 />

      <Heading Heading="Our Shop" home="Home" pagename="shop" />
      <div className="w-[1320px] m-auto mt-[120px]">
        <div className="w-[1320px] h-[2100px]  m-auto relative ">
          {/* imagesDiv-shoplist */}
          <div className="flex justify-between bg-gray-500 w-[848px] h-[46px] mt-[24px] ml-[30px]">
            <input
              className="bg-transparent absolute w-[802px] text-white h-[46px] rounded-l-md text-[20px] tracking-wide outline outline-1 outline-black/20 leading-6 pl-[20px]"
              type="text"
              placeholder="Search Product"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)} // Update search text on input change
            />
            <h4 className="w-[46px] h-[46px] ml-[802px] text-white my-auto bg-darkyellow">
              <HiMiniMagnifyingGlass className="text-[20px] w-[24px] h-[24px] mt-[12px] ml-[10px]" />
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3  w-[984px] gap-6 h-auto ml-[2px] mt-[20px]">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <p>Loading.....</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="w-[312px] h-[460px] mt-[24px] shadow-md hover:scale-105 shadow-gray-600"
                >
                  <Link href={`/shoplist/${product.slug}`}>
                    {product.image && product.image.asset ? (
                      <Image
                        src={product.image.asset.url}
                        alt={`cartimage${index + 1}`}
                        width={312}
                        height={267}
                        className="relative"
                      />
                    ) : (
                      <div className="w-[312px] h-[267px] bg-gray-300 flex justify-center items-center">
                        <p>No image available</p>
                      </div>
                    )}
                    <div className="px-2">
                      <h1 className="w-[160px] h-[26px] mt-[8px] text-[18px] font-bold tracking-tight">
                        {product.name}
                      </h1>
                      <p className="text-[14px] text-gray-500 mt-[8px]">
                        {product.description}
                      </p>

                      <p className="flex justify-between w-[116px] h-[24px] mt-[4px] text-[16px] font-normal text-darkyellow">
                        ${product.price}.00
                        {product.originalPrice && (
                          <span className="text-gray3 pl-[10px] line-through">
                            ${product.originalPrice}.00
                          </span>
                        )}
                      </p>
                      <div className=" flex justify-between items-center px-2">
                        <p className="text-[16px] text-gray-700 mt-[8px]">
                          {product.category}
                        </p>
                        <p
                          className={`text-[16px] mt-[8px] ${product.available ? "text-green-600" : "text-red-600"}`}
                        >
                          {product.available ? "Available" : "Out of Stock"}
                        </p>
                      </div>
                      <button
                        className="mt-[4px] w-full px-2 text-[18px] justify-end font-bold text-black bg-darkyellow hover:bg-black hover:text-white"
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        Add To Cart{" "}
                      </button>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="w-full text-center text-xl mt-4">
                No products found matching your search.
              </div>
            )}
            {/* rightside */}
            <div className="w-[321px] h-[1489px]  absolute ml-[990px] ">
              {/* Category filter */}
              <div className="w-[248px] h-[372px] ml-[30px] mt-[20px] bg-gray-400">
                <h1 className="w-[248px] h-[28px] text-[20px] pl-[23px] text-cheftextcolor font-bold">
                  Category
                </h1>
                {[
                  "Sandwiches",
                  "Burger",
                  "Chicken Chup",
                  "Drink",
                  "Pizza",
                  "Thi",
                  "Non Veg",
                  "Uncategorized",
                ].map((category, index) => (
                  <div
                    key={index}
                    className="flex ml-[30px] mt-[16px] w-[248px] h-[26px]"
                  >
                    <input
                      type="checkbox"
                      className="w-[14px] h-[14px] bg-transparent"
                    />
                    <h1 className="ml-[8px] w-[195px] h-[26px] -mt-[4px]">
                      {category}
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Image */}
            <div className="w-[248px] h-[286px] absolute mt-[420px] ml-[1006px]">
              <Image
                src={"/shoplist/sidebar-image1.png"}
                alt={"sidebar-image1"}
                width={248}
                height={286}
                className="ml-[18px]"
              />
              <div className="w-[248px] h-[286px] absolute ml-[30px] -mt-[286px]">
                <h1 className="w-[105px] h-[24px] text-[16px] font-bold leading-6 text-white ml-[23px] mt-[29px] tracking-wide">
                  Perfect Taste
                </h1>
                <h1 className="w-[181px] h-[28px] text-[16px] font-bold leading-8 text-white ml-[23px] mt-[4px] tracking-widest">
                  Classic Restaurant
                </h1>
                <p className="w-[58px] h-[24px] text-[16px] leading-6 text-darkyellow ml-[23px] mt-[13px] font-bold">
                  45.00$
                </p>
                <div className="flex w-[106px] h-[24px] mt-[109px] ml-[23px]">
                  <p className="w-[78px] h-[24px] text-white leading-6">
                    Shop Now
                  </p>
                  <FaRegArrowAltCircleRight className="w-[20px] h-[20px] text-white m-auto" />
                </div>
                {/* Filter by price */}
                <div className="w-[248px] px-1 h-[87px] bg-darkyellow  absolute mt-[70px]">
                  <h1 className="w-[248px] h-[28px] text-cheftextcolor text-[20px]">
                    Filter By Price
                  </h1>
                  <p className="w-[15px] h-[15px] mt-[12px] border-4 border-white rounded-full absolute"></p>
                  <p className="w-[242px] h-[6px] mt-[15px]"></p>
                  <p className="w-[15px] h-[15px] ml-[230px] absolute -mt-[10px] border-4 border-white rounded-full "></p>
                  <p className="flex justify-between w-[246px] h-[24px] text-black/70 leading-6 mt-[9px]">
                    From $0 to $8000
                    <span className="w-[38px] h-[24px]">Filter</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <div className="flex justify-between w-[306px] h-[51px] ml-[283px] mt-[120px]">
            <div className="w-[50px] h-[50px] border-2 border-black/20 text-darkyellow hover:bg-darkyellow hover:text-white">
              <MdKeyboardDoubleArrowLeft className="text-[28px] mx-auto mt-[10px]" />
            </div>
            <div className="text-center pt-[4px] w-[50px] h-[50px] text-darkyellow border-2 border-black/20 text-[28px] hover:text-white hover:bg-darkyellow">
              1
            </div>
            <div className="text-center pt-[4px] w-[50px] h-[50px] text-darkyellow border-2 border-black/20 hover:text-white text-[28px] justify-center hover:bg-darkyellow">
              2
            </div>
            <div className="text-center pt-[4px] w-[50px] h-[50px] text-darkyellow border-2 border-black/20 hover:text-white text-[28px] hover:bg-darkyellow">
              3
            </div>
            <div className="w-[50px] h-[50px] border-2 border-black/20 text-[28px] text-darkyellow hover:text-white hover:bg-darkyellow">
              <Link href={"/shopDetails"}>
                <MdKeyboardDoubleArrowRight className="text-[28px] mx-auto mt-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
