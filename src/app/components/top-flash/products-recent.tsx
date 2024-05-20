import { getProductVariant } from "@/services/getProductVariant";
import React from "react";
import ProductCard from "../ProductCard/productCard";
import { TopFlashSlider } from "./top-flash-carusel";
// import { TopFlashSlider } from "./top-flash-carusel";

const ProductsRecent = async () => {
  const productData = await getProductVariant();
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
