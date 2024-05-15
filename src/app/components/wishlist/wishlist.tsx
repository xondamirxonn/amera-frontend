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
window.scrollTo
  return (
    <div>
      {wishlists.map((item) => (
        // <div className="border lg:border-none lg:hover:shadow-lg transition-all duration-500 rounded-sm bg-white p-3 w-[300px]  md:w-[350px] lg:w-[280px]  flex flex-col justify-between min-h-[50vh] sm:min-h-[50vh] md:min-h-[35vh] lg:min-h-[30vh] relative  group overflow-hidden">
        //   <Link href={`/product/${item.id}`}>
        //     <div className=" mx-auto  overflow-clip ">
        //       <img
        //         className="w-[300px] mx-auto min-h-[250px] max-h-[200px]  object-contain duration-1000  group-hover:scale-[0.9]  "
        //         src={item?.images[0]?.image}
        //       />
        //       {/* <img
        //         className="w-[300px] mx-auto min-h-[250px] max-h-[200px]  object-contain absolute top-0  opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
        //         src={item?.images[0]?.image}
        //       /> */}
        //     </div>
        //     <div className="text-center ">
        //       <h1 title={item.title} className="text-[#0066C8] pt-2">
        //         {" "}
        //         {item?.title?.length >= 30
        //           ? item.title.slice(0, 30).split(" ").slice(0, -1).join(" ") +
        //             "..."
        //           : item.title}{" "}
        //       </h1>
        //       <strong>${item.price}</strong>
        //     </div>
        //   </Link>
        //   <div className="flex justify-center pt-2">
        //     <Button
        //       onClick={
        //         !cart ? () => AddCart(item.id) : () => RemoveCart(item.id)
        //       }
        //       className={
        //         !cart
        //           ? "bg-[#FCB700] hover:bg-none rounded-[30px] w-full "
        //           : "bg-rose-500 hover:bg-none rounded-[30px] w-full "
        //       }
        //     >
        //       {!cart ? "Add To Cart" : "Remove Cart"}
        //     </Button>
        //   </div>
        //   <div className="hidden sm:flex sm:flex-col sm:gap-3 absolute  sm:translate-x-[60px] sm:group-hover:translate-x-0  right-3      sm:duration-300 ">
        //     {/* <ProductModal {...item} /> */}
        //     <Button
        //       onClick={() => RemoveWishlist(item.id)}
        //       size="icon"
        //       className="
        //         bg-[#FCB700]
        //        rounded-full border "
        //     >
        //       <CiStar color="black" size={25} />
        //     </Button>
        //   </div>
        // </div>
        <WishlistCard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default WishlistComponent;
