import RateIcon from "@/app/images/icon/rate";
import React from "react";
import Link from "next/link";
interface ProductType {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
    image_id: number;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price_with_discount: null;
  quantity: number;
  price: number;
  userPrice: number;
  userCount: number;
}
const ProductCards = (props: ProductType) => {
  return (
    <div className="p-5 hover:shadow-md transition-all duration-500">
      <div className="flex gap-5 items-center">
        <div>
          <img
            className="max-w-[300px] w-[120px] h-[120px] max-h-[120px] object-contain"
            src={props.images[0].image}
            alt={props.title}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Link href={`/product/${props.id}/`} className="text-[#0066C0]">
            {props.title}
          </Link>
          <RateIcon />

          <strong>${props.price}</strong>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
