import { getBrand } from "@/services/getBrand";
import React from "react";
import { BrandCarusel } from "./brand-carusel";

const Brand = async () => {
  const data = await getBrand();
  return (
    <div>
      <BrandCarusel>
        {data.results.map((item) => (
        <div>
            <img
            className="w-[300px] mx-auto min-h-[200px] max-h-[150px]  object-contain "
            src={item.image}
            alt=""
          />
        </div>
        ))}
      </BrandCarusel>
    </div>
  );
};

export default Brand;
