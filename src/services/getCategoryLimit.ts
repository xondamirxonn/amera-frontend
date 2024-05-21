interface CategoryType {
  count: number;
  next: string;
  previous: null | string;
  results: {
    id: number;
    title: string;
    image: string;
    children: {
      image: string;
      id: number;
      title: string;
    }[];
  }[];
}

export const getCaregoryLimit = async (): Promise<CategoryType> => {
  try {
    const res = await fetch("http://135.181.108.207/category/?limit=8", {
      next: { revalidate: 10 },
    });
    
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Category Error");
  }
};