import RateIcon from "@/app/images/icon/rate";
import React from "react";
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
    <div className="p-3 hover:shadow-xl flex gap-4">
      <div>
        <img className="max-w-[200px]" src={props.images[0].image} alt={props.title} />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[#0066C0]">{props.title}</h1>
        <RateIcon />

        <strong>${props.price}</strong>
      </div>
    </div>
  );
};

export default ProductCards;
