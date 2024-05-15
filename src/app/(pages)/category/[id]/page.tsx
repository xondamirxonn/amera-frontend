import { CategoryList } from "@/app/components/CategoryList/CategoryList";
import { SubCaregoryCard } from "@/app/components/SubCategoryCard/SubCaregoryCard";
import { getCategoriesId } from "@/services/getCategoryId";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import NoProduct from "@/app/images/noproduct.svg";

const CategorySingle: NextPage<{ params: { id: string } }> = async ({
  params,
}) => {
  const data = await getCategoriesId(params.id);
  console.log(data);
  return (
    <div className="flex w-full container pt-[3%]">
      <div className="w-[25%] fixed z-50">
        <CategoryList categoryId={Number(params.id)} />
      </div>
      <div className="lg:ml-[30%] ml-auto mr-auto">
        {data.children.length ? (
          <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3   gap-5  container ">
            {data?.children?.map((child) => (
              <div className="min-w-[300px] sm:min-w-[250px] mx-auto">
                <SubCaregoryCard {...child} key={child.id} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center lg:mx-[350px]  items-center pt-[8%] flex-col gap-5">
            <Image className="w-[300px]" src={NoProduct} alt="image" />
            <h1 className="text-2xl font-medium">SubCategory not found </h1>
            <Link href="/" className="bg-[#FCB700] p-3 rounded-md text-white">
              Home Page
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySingle;
