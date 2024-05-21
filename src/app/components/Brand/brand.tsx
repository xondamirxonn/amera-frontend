import { getBrand } from "@/services/getBrand";
import React from "react";
import { BrandCarusel } from "./brand-carusel";
import Image from "next/image";

const Brand = async () => {
  const data = await getBrand();
  return (
    <div>
      <div className="flex items-center gap-3 pb-8">
        <h1 className="text-2xl font-bold ">Brands</h1>
        <div className="border border-b w-full"></div>
      </div>
      <BrandCarusel>
        {data.results.map((item) => (
          <div>
            <Image
              // priority
              
              width={200}
              height={200}
              className="w-[300px]  mx-auto min-h-[200px] max-h-[150px]  object-contain "
              src={item.image}
              alt={item.title}
            />
          </div>
        ))}
      </BrandCarusel>
    </div>
  );
};

export default Brand;
