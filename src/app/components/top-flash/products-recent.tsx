import React from "react";
import ProductCard from "../ProductCard/productCard";
import { TopFlashSlider } from "./top-flash-carusel";
import { getProductVariantLimit2 } from "@/services/getProductVariantLimit2";
// import { TopFlashSlider } from "./top-flash-carusel";

const ProductsRecent = async () => {
  const productData = await getProductVariantLimit2();
  return (
    <div >
      <TopFlashSlider>
        {productData.results.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </TopFlashSlider>
    </div>
  );
};

export default ProductsRecent;
