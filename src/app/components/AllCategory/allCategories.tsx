import React from "react";
import AllCategoriesCarusel from "./allCategories-carusel";
import { categoryData } from "@/services/getCategory";
import Link from "next/link"
const AllCategories = async () => {
  const data = await categoryData();
  return (
    <div className=" w-[300px] md:w-full  mx-auto ">
      <AllCategoriesCarusel>
        {data.results.map((item) => (
         <Link href={`/category/${item.id}`} className="">
           <div className="flex flex-col  items-center justify-center gap-3 shadow-md ">
            <div>
              <img
                className="max-w-[300px] w-[120px] h-[120px] max-h-[120px] object-contain"
                src={item.image}
                alt=""
              />
            </div>
            <h1 className="text-[#0066C0]">{item.title}</h1>
          </div>
         </Link>

        ))}
      </AllCategoriesCarusel>
    </div>
  );
};

export default AllCategories;
