import React from "react";
import ProductMultipleCarusel from "../Product-Multiple-Carusel/product-multiple-carusel";
import ProductCards from "../ProductCard2/ProductCards";
import SubcategoryCardImg from "./subcategory-card";
import { getProductVariantLimit } from "@/services/getProductVariantLimit";

const Products = async () => {
  const data = await getProductVariantLimit();
  return (
      <div className="grid grid-cols-1 lg2:grid-cols-4 gap-12 w-full">
      <div className="lg2:col-span-1">
        <div className="flex items-center gap-5 pb-4">
          <h1 className="text-xl font-medium">Products</h1>
          <div className="border border-b w-full hidden lg2:block"></div>
        </div>
        <div className="hidden lg2:block">
          <SubcategoryCardImg />
        </div>
      </div>
      <div className="lg2:col-span-3">
        <ProductMultipleCarusel>
          {data.results.map((item) => (
            <div className="p-1 pb-2" key={item.id}>
              <ProductCards {...item} />
            </div>
          ))}
        </ProductMultipleCarusel>
      </div>
    </div>
  );
};

export default Products;
