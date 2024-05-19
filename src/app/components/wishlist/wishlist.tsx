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

const WishlistComponent = () => {
  const { wishlists } = useSelector((state: RootState) => state.wishlist);

  return (
    <div className="grid grid-cols-1 gap-4 container sm:grid-cols-2 lg:grid-cols-2 lg2:grid-cols-4 ">
      {wishlists.map((item) => (
  
        <WishlistCard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default WishlistComponent;
