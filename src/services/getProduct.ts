import React from "react";
interface Type {
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
export const getProduct = async (id: string | undefined): Promise<Type> => {
  try {
    const res = await fetch(`http://135.181.108.207/product_variant/${id}/`, {
      next: { revalidate: 10 },
    });


    const data = res.json();

    return data;
  } catch (error) {
    throw new Error("Product Error");
  }
};
