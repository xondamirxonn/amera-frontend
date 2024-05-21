import dynamic from "next/dynamic";
import React from "react";

const WishlistComponent = dynamic(
  () => import("@/app/components/wishlist/wishlist"),
  { ssr: false }
);

const WishListPage = () => {
  return (
    <div className="container">
      <div className="pt-10">
        <h1 className="text-2xl text-center md:text-start font-medium">
          My Wishlist
        </h1>
        <div className="border border-b w-full mt-2 mb-3"></div>
      </div>
      <WishlistComponent />
    </div>
  );
};

export default WishListPage;
