import React from 'react'

export const getCategoryId = async (id: number) => {

  try {
    const res = await fetch(`http://135.181.108.207/category/${id}/`);
    const data = res.json();

    return data;
  } catch (error) {
    throw new Error("Category Error");
  }
}
