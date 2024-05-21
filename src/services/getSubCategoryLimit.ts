interface SubcategoryType {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    id: number;
    image: string;
    parent: {
      id: number;
      title: string;
    }[];
    title: string;
  }[];
}
export const getSubcategoryLimit = async (): Promise<SubcategoryType> => {
  try {
    const res = await fetch("http://135.181.108.207/api/subcategory/?limit=1", {
      next: { revalidate: 10 },
    });

    const data = res.json();
    return data;
  } catch (error) {
    throw new Error("Subcategory Error");
  }
};
