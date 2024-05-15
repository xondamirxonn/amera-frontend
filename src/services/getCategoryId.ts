import React from "react";
interface CategoryType {
  count: number;
  next: string;
  previous: null | string;
  
    id: number;
    title: string;
    image: string;
    children: {
      image: string;
      id: number;
      title: string;
    }[];
}
export const getCategoriesId = async (
  id: string | undefined
): Promise<CategoryType> => {
  try {
    const res = await fetch(`http://135.181.108.207/category/${id}/`, {
      next: { revalidate: 10 },
    });
    const data = res.json();

    return data;
  } catch (error) {
    throw new Error("Category Error");
  }
};
