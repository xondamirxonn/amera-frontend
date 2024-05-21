import React from "react";
import AllCategoriesCarusel from "./allCategories-carusel";
import { categoryData } from "@/services/getCategory";
import Link from "next/link";
import Image from "next/image";
const AllCategories = async () => {
  const data = await categoryData();
  return (
  <div>
    <h1 className="text-xl font-medium pb-8">All Categories</h1>
      <div className=" w-[300px] md:w-full  mx-auto ">
      
      <AllCategoriesCarusel>
        {data.results.map((item) => (
          <Link href={`/category/${item.id}`} className="">
            <div className="flex flex-col  items-center justify-center gap-3 shadow-md ">
              <div>
                <Image
                  priority
                  width={200}
                  height={200}
                  className="max-w-[300px] w-[120px] h-[120px] max-h-[120px] object-contain"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <h1 className="text-[#0066C0]">{item.title}</h1>
            </div>
          </Link>
        ))}
      </AllCategoriesCarusel>
    </div>
  </div>
  );
};

export default AllCategories;
