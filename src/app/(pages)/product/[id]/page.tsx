import { getProductId } from "@/services/getProductId";
import { NextPage } from "next";
import React from "react";
import dynamic from "next/dynamic";
const ProductSingle = dynamic(
  () => import("./../../../components/ProductSingle/ProductSingle"),
  { ssr: false }
);
const ProductPageId: NextPage<{ params: { id: string } }> = async ({
  params,
}) => {
  const data = await getProductId(params.id);

  return (
    <div className="mt-[8%] container">
      <div>
        {data ? (
          <ProductSingle
            key={params.id}
            id={Number(params.id)}
            images={data?.images}
            title={data?.title}
            price={Number(data?.price)}
            other_detail={data?.other_detail}
            quantity={Number(data?.quantity)}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductPageId;
