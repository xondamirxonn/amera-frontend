import React from "react";
import { getSubcategory } from "@/services/getSubcategory";
import { getProductVariant } from "@/services/getProductVariant";
import dynamic from "next/dynamic";
import { getProductVariantLimit3 } from "@/services/getProductVariantLimit3";
// import ProductsRecent from "./products-recent";
const TopFlashCard = dynamic(() => import("./top-flash-card"), { ssr: false });
const ProductsRecent = dynamic(() => import("./products-recent"), {
  ssr: false,
});
const TopFlash = async () => {
  const data = await getProductVariantLimit3();

  return (
    <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 w-full">
      <div>
        <div className="flex gap-2 items-center text-xl">
          <h1 className="font-bold">Top Flash</h1>
          <span>Deals</span>
          <div className="border border-b w-[450px] hidden lg2:block"></div>
        </div>
        {data.results.map((item) => (
          <div className="pt-5">
            <TopFlashCard {...item} key={item.id} />
          </div>
        ))}
      </div>
      <div>
        <div className="flex gap-2 items-center text-xl">
          <h1 className="font-bold">Recent</h1>
          <span>Products</span>
          <div className="border border-b w-[450px] hidden lg2:block"></div>
        </div>
        <div className="pt-5">
          <ProductsRecent />
        </div>
      </div>
    </div>
  );
};

export default TopFlash;
