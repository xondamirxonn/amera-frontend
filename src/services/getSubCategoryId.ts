import React from "react";
interface Type {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    id: number;
    is_available: boolean;
    title: string;
    images: {
      image: string;
      image_id: number
    }[];
    product: number;
    attribute_value: [];
    other_detail: string;
    price: number;
    price_with_discount: null;
    quantity: number;
    userPrice: number,
    userCount: number
  }[];
}
export const getCategoryId = async (id: string | undefined): Promise<Type> => {
  try {
    const res = await fetch(
      `http://135.181.108.207/product_variant/?product__category=${id}`,
      { next: { revalidate: 10 } }
    );
    const data = await res.json();


    return data;
  } catch (error) {
    throw new Error("Category Error");
  }
};
