"use client";

import { add, remove } from "@/app/redux/reducer/cart-reducer";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import { CiStar } from "react-icons/ci";

interface Type {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price: string;
  price_with_discount: null;
  quantity: number;
}

const ProductCard = (props: Type) => {
  console.log(props, "");
  const { products } = useSelector((state: any) => state.product);
  const cart = products.find((item: any) => item.id == props.id);
  const dispatch = useDispatch();

  const AddCart = () => {
    dispatch(add(props));
  };

  const RemoveCart = () => {
    dispatch(remove(props));
  };
  return (
    <div>
      <div className="">
        <div className="border rounded-sm bg-white p-3 w-[300px]  md:w-[350px] lg:w-[280px]  flex flex-col justify-between min-h-[50vh] sm:min-h-[50vh] md:min-h-[35vh] lg:min-h-[30vh] relative  group overflow-hidden">
          <div className=" mx-auto  overflow-clip">
            <img
              className="w-[300px] mx-auto min-h-[250px] max-h-[200px] object-contain duration-1000 group-hover:transition-all group-hover:scale-[0.9] "
              src={props?.images[0]?.image}
            />
          </div>
          <div className="text-center ">
            <h1 title={props.title} className="text-[#0066C8] pt-2">
              {" "}
              {props?.title?.length >= 30
                ? props.title.slice(0, 30).split(" ").slice(0, -1).join(" ") +
                  "..."
                : props.title}{" "}
            </h1>
            <strong>${props.price}</strong>
          </div>
          <div className="flex justify-center pt-2">
            <Button
              onClick={!cart ? () => AddCart() : () => RemoveCart()}
              className={
                !cart
                  ? "bg-[#FCB700] hover:bg-none rounded-[30px] w-full "
                  : "bg-rose-500 hover:bg-none rounded-[30px] w-full "
              }
            >
              {!cart ? "Add To Cart" : "Remove Cart"}
            </Button>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:gap-3 absolute sm:translate-x-[60px] sm:group-hover:translate-x-0 right-3   sm:duration-300 ">
            <Button
              size="icon"
              className="rounded-full border bg-white hover:bg-[#FCB700]"
            >
              <IoEyeOutline color="black" size={25} />
            </Button>
            <Button
              size="icon"
              className="rounded-full border bg-white hover:bg-[#FCB700]"
            >
              <CiStar color="black" size={25} />

            </Button>
          </div>
        </div>
      </div>

      {/* <div>
          <Link href="/cart" className="block lg:hidden ">
        <div className="border bg-white p-3 w-[300px]  md:w-[350px] lg:w-[280px]  flex flex-col justify-between min-h-[50vh] sm:min-h-[50vh] md:min-h-[35vh] lg:min-h-[30vh] relative  group overflow-hidden">
            <div className=" mx-auto  overflow-clip">
              <img
                className="w-[300px] mx-auto min-h-[250px] max-h-[200px] object-contain duration-1000 group-hover:transition-all group-hover:scale-[0.9] "
                src={props?.images[0]?.image}
              />
            </div>
            <div className="text-center ">
              <h1 title={props.title} className="text-[#0066C8] pt-2">
                {" "}
                {props?.title?.length >= 30
                  ? props.title.slice(0, 30).split(" ").slice(0, -1).join(" ") +
                    "..."
                  : props.title}{" "}
              </h1>
              <strong>${props.price}</strong>
            </div>

            <div className="flex justify-center pt-2">
              <Button
                onClick={!cart ? () => AddCart() : () => RemoveCart()}
                className={
                  !cart
                    ? "bg-[#FCB700] hover:bg-none rounded-[30px] w-full "
                    : "bg-rose-500 hover:bg-none rounded-[30px] w-full "
                }
              >
                {!cart ? "Add To Cart" : "Remove Cart"}
              </Button>
            </div>
        </div>
          </Link>
      </div> */}
    </div>
  );
};

export default ProductCard;
