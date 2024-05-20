import React from "react";
interface Type {
  count: 0;
  next: string | null;
  previous: string | null;
  results: {
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
    price: number;
    price_with_discount: null;
    quantity: number;
    userPrice: number;
    userCount: number;
  }[];
}
export const getProductVariant = async (): Promise<Type> => {
  try {
    const res = await fetch(`http://135.181.108.207/product_variant/`, {
      next: { revalidate: 10 },
    });

    console.log(res, "lorem");

    const data = res.json();

    return data;
  } catch (error) {
    throw new Error("Product Error");
  }
};
