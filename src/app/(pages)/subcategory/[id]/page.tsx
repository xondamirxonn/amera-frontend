import { getCategoryId } from "@/services/getCategoryId";
import { NextPage } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import NoProduct from "@/app/images/noproduct.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const ProductCard = dynamic(
  () => import("@/app/components/ProductCard/productCard"),
  { ssr: false }
);

const SubCategorySingle: NextPage<{ params: { id: string } }> = async ({
  params,
}) => {
  const data = await getCategoryId(params.id);
  console.log(data, "product");
  return (
    <Suspense fallback={"Loading..."}>
      {data.results.length ? (
        <div className="pt-[3%] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-3   container">
          {data?.results?.map((item) => (
            <div className="min-w-[300px] sm:min-w-[250px] mx-auto">
              <ProductCard {...item} key={item.id} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center pt-[8%] flex-col gap-5">
          <Image className="w-[300px]" src={NoProduct} alt="image" />
          <h1 className="text-2xl font-medium">Product not found </h1>
          <Link href="/" className="bg-[#FCB700] p-3 rounded-md text-white">Home Page</Link>
        </div>
      )}
    </Suspense>
  );
};

export default SubCategorySingle;
