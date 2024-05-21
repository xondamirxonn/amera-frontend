import { getSubcategory } from "@/services/getSubcategory";
import Image from "next/image";
import React from "react";

const SubcategoryCardImg = async () => {
  const data = await getSubcategory();
  return (
    <div className="">
      {data.results.slice(0, 1).map((item) => (
        <div className="">
          <Image
            priority
            width={200}
            height={200}
            className="w-[300px] mx-auto min-h-[250px] max-h-[200px]  object-contain   "
            src={item.image}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
};

export default SubcategoryCardImg;
