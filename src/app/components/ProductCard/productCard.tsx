"use client";

import { add, remove } from "@/app/redux/reducer/cart-reducer";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import ProductModal from "../product-modal/product-modal";
import { RootState } from "@/app/redux/store";
import { addList, removeList } from "@/app/redux/reducer/wishlist-reducer";
import Image from "next/image";

interface Type {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
    image_id: number;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price: number;
  price_with_discount: null;
  quantity: number;
  userPrice: number;
  userCount: number;
}

const ProductCard = (props: Type) => {
  const { products } = useSelector((state: RootState) => state.product);
  const { wishlists } = useSelector((state: RootState) => state.wishlist);
  
  const cart = products.find((item) => item.id == props.id);
  const wishlist = wishlists.find((item) => item.id == props.id);
  const dispatch = useDispatch();

  const AddCart = () => {
    dispatch(add(props));
  };

  const RemoveCart = () => {
    dispatch(remove(props));
  };

  const AddWishlist = () => {
    dispatch(addList(props));
  };

  const RemoveWishlist = () => {
    dispatch(removeList(props));
  };
  return (
    <div>
      <div className="">
        <div className="border lg:border-none lg:hover:shadow-lg transition-all duration-500 rounded-sm bg-white p-3 w-[300px]  md:w-[350px] lg:w-[280px]  flex flex-col justify-between min-h-[50vh] sm:min-h-[50vh] md:min-h-[35vh] lg:min-h-[30vh] relative  group overflow-hidden mx-auto">
          <Link href={`/product/${props.id}`}>
            <div className=" mx-auto  overflow-clip ">
              <Image
                priority
                width={200}
                height={200}
                className="w-[300px] mx-auto min-h-[250px] max-h-[200px]  object-contain duration-1000  group-hover:scale-[0.9]  "
                src={props?.images[0]?.image}
                alt={props.title}
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
          </Link>
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
          <div className=" lg2:flex lg2:flex-col lg2:gap-3 absolute  lg2:translate-x-[60px] lg2:group-hover:translate-x-0  right-3  flex flex-col gap-3    lg2:duration-300 ">
            <div className="hidden lg2:block">
              <ProductModal {...props} />
            </div>
            <Button
              onClick={!wishlist ? AddWishlist : RemoveWishlist}
              size="icon"
              className={`${
                wishlist ? "bg-[#FCB700]" : "bg-white"
              } rounded-full border  `}
            >
              <CiStar color="black" size={25} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
