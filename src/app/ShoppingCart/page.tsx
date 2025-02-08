"use client";
import Navbar2 from "../components/Navbar2";
import Heading from "../components/headingprops";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { PiCheckSquareOffsetBold } from "react-icons/pi";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { Product } from "@/type";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Get items from the cart on initial render
  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  // Remove item function
  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3885d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed", "Item has been removed.", "success");
      }
    });
  };

  // Quantity change function
  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  // Handle Increment
  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      const updatedInventory = (product.inventory ?? 0) + 1; // Default to 0 if inventory is undefined
      handleQuantityChange(id, updatedInventory);
    }
  };
  // Handle Decrement
  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && (product.inventory ?? 0) > 1) {
      handleQuantityChange(id, (product.inventory ?? 0) - 1);
    }
  };

  // Calculate total price
  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.inventory ?? 0),
      0
    );
  };

  const router = useRouter();
  // Handle Proceed function
  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed!",
          "success"
        );
        router.push("/checkout");
        // Clear the cart after proceeding (optional)
        setCartItems([]);
      }
    });
  };

  return (
    <div className="w-[1920px] h-[2300px] bg-gray5 relative">
      <Navbar2 />
      <Heading Heading="Shopping Cart" home="Home" pagename="Shopping Cart" />
      <div className="w-[1920px] h-[1770px] absolute ">
        <div className="w-[1320px] h-[950px] mx-auto mt-[120px] ">
          <div className="w-[1200px] h-[40px] text-black  font-bold bg-gray-500 px-4 py-1">
            <h1 className="w-[87.86px] h-[29px] text-[18px] font-bold ml-[20px]">
              Product
              <span className="ml-[360px] w-[58.55px] h-[29px] leading-8 font-bold text-[20px] ">
                Price
              </span>
              <span className="w-[94.5px] h-[29px] ml-[147px] font-bold text-[20px] ">
                Quantity
              </span>
              <span className="ml-[159px] w-[55px] h-[29px] font-bold text-[20px]">
                Total
              </span>
              <span className="ml-[140px] w-[121px] h-[29px] font-bold text-[20px] ">
                Remove
              </span>
            </h1>

            {cartItems.map((item) => (
              <div
                key={item._id}
                className="w-[1180px] h-[115px] mt-[32px] bg-gray5 shadow-md shadow-slate-500"
              >
                <div className="w-[225px] h-[97px]">
                  <div className="w-[93px] h-[97px]">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        className="w-[300x] h-[100px] object-cover rounded-lg "
                        width={300}
                        height={100}
                      />
                    )}
                    <h1 className="w-[153px] h-[24px] text-black absolute -mt-[93px] ml-[100px] ">
                      {item.name}
                    </h1>
                    <div className="flex w-[116px] h-[20px] -mt-[60px] ml-[100px]">
                      <MdStarRate className="w-[20px] h-[20px] text-darkyellow" />
                      <MdStarRate className="w-[20px] h-[20px] text-darkyellow" />
                      <MdStarRate className="w-[20px] h-[20px] text-gray3" />
                      <MdStarRate className="w-[20px] h-[20px] text-gray3" />
                      <MdStarRate className="w-[20px] h-[20px] text-gray3" />
                    </div>
                    <p className="w-[49px] h-[24px] ml-[438px] -mt-[9px] ">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="w-[110px] h-[41px] ml-[610px] -mt-[32px] flex">
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="flex w-[32px] h-[32px] items-center justify-center bg-gray-300 rounded-full"
                      >
                        -
                      </button>
                      <span className="w-[30px] h-[32px] mt-[6px] ml-[4px] text-center">
                        {item.inventory}{" "}
                        {/* Changed from quantity to inventory */}
                      </span>
                      <button
                        onClick={() => handleIncrement(item._id)}
                        className="flex w-[32px] h-[32px] items-center justify-center bg-gray-300 rounded-full"
                      >
                        +
                      </button>
                    </div>
                    <p className="w-[65px] h-[24px] ml-[850px] -mt-[34px] ">
                      ${(item.price * (item.inventory ?? 0)).toFixed(2)}{" "}
                      {/* Ensure inventory is not undefined */}
                    </p>

                    <div>
                      <RiDeleteBin3Fill
                        onClick={() => handleRemove(item._id)}
                        className="w-[40px] h-[40px] ml-[1090px] -mt-[36px] text-red-600 text-[48px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-[1330px] h-[338px] mt-[120px] m-auto shadow-md shadow-slate-600 px-2">
          <div className="w-[648px] h-[242px] border-2 border-gray3/10 rounded-md">
            <h1 className="w-[210px] h-[40px] text-cheftextcolor text-[32px] ">
              Coupon Code
            </h1>
            <p className="w-[472px] h-[52px] mt-[48px] text-gray3 tracking-wide ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non
            </p>
            <input
              type="text"
              placeholder="Enter Here Code"
              className="absolute border-2 border-gray3/10 bg-transparent rounded-md pl-[8px] text-[16px] w-[598px] h-[62px] mt-[24px] "
            />
            <p className="w-[89px] h-[60px] bg-darkyellow text-white absolute mt-[25px] ml-[508px] text-center pt-[20px] rounded-l-xl">
              Apply
            </p>
          </div>

          <div className="w-[648px] h-[337px] ml-[672px] absolute">
            <h1 className="w-[133px] h-[40px] text-[32px] text-cheftextcolor">
              Total Bill
            </h1>

            <div className="w-[648px] h-[185px] mt-[24px] pl-[20px] pr-[21px]">
              <div className="flex justify-between ">
                <h1 className="w-[126px] h-[28px] text-[20px] tracking-tight ">
                  Cart Subtotal
                </h1>

                <h2 className="w-[74px] h-[26px] ml-[407px] ">
                  ${calculatedTotal().toFixed(2)}
                </h2>
              </div>
              <div className="flex justify-between mt-[15px] ">
                <h1 className="w-[126px] h-[28px] text-[20px] tracking-tight ">
                  Shipping Cart
                </h1>

                <h2 className="w-[61px] h-[26px] ml-[407px] ">$00.00</h2>
              </div>
              <hr className="w-[600px] h-[4px] m-auto bg-gray3/10 mt-[24px]" />
              <div className="flex justify-between mt-[15px] bg-black text-white ">
                <h1 className="w-[127px] h-[28px] text-[20px] tracking-tight ">
                  Total Amount
                </h1>

                <h2 className="w-[77px] h-[26px] ml-[407px] text-black/90 text-white px-2">
                  ${calculatedTotal().toFixed(2)}
                </h2>
              </div>
            </div>

            <div
              onClick={handleProceed}
              className="w-[648px] h-[64px] bg-darkyellow mt-[24px] cursor-pointer"
            >
              <h1 className="flex w-[180px] h-[26px] mx-auto pt-[20px] text-white tracking-wider">
                Proceed to Checkout
                <span>
                  {" "}
                  <PiCheckSquareOffsetBold />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
