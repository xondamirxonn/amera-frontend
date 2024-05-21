"use client";

import { add, remove } from "@/app/redux/reducer/cart-reducer";
import { removeList } from "@/app/redux/reducer/wishlist-reducer";
import { RootState } from "@/app/redux/store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import WishlistCard from "./wishlistCard";
import EmptyCart from "@/app/images/emptyCart.svg";
import Image from "next/image";

const WishlistComponent = () => {
  const { wishlists } = useSelector((state: RootState) => state.wishlist);

  return wishlists.length ? (
    <div className="grid grid-cols-1 gap-4  sm:grid-cols-2 lg:grid-cols-2 lg2:grid-cols-4 ">
      {wishlists.map((item) => (
        <WishlistCard {...item} key={item.id} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col gap-4 items-center lg:pt-[4%]">
      <Image
        priority
        src={EmptyCart}
        alt="cart"
        className="max-w-[300px]  mx-auto"
      />
      <h1 className="font-medium">No Product</h1>
      <Link href="/" className="bg-[#FCB700] p-2.5 text-white rounded-md">
        Home Page
      </Link>
    </div>
  );
};

export default WishlistComponent;
