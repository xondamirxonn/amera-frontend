import React from "react";
import SubcategoryCardImg from "./subcategory-card";
import ProductMultipleCarusel from "../Product-Multiple-Carusel/product-multiple-carusel";
import { getProductVariant } from "@/services/getProductVariant";
import ProductCards from "../ProductCard2/ProductCards";

const Products2 = async () => {
  const data = await getProductVariant();
  return (
    <div className="grid grid-cols-1 lg2:grid-cols-4 gap-12 w-full">
      <div className="lg2:col-span-2">
        <div className="flex items-center gap-5 pb-4">
          <h1 className="text-xl font-medium">Products</h1>
          <div className="border border-b w-full hidden lg2:block"></div>
        </div>
      </div>
      <div className="col-span-3">
        <ProductMultipleCarusel>
          {data.results.slice(0, 12).map((item) => (
            <div className="p-1 pb-2" key={item.id}>
              <ProductCards {...item} />
            </div>
          ))}
        </ProductMultipleCarusel>
      </div>
      <div className="hidden lg2:block col-span-1">
        <SubcategoryCardImg />
      </div>
    </div>
  );
};

export default Products2;
