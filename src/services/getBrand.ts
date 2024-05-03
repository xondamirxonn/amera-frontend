interface BrandType {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    image: string;
    title: string;
  }[];
}

export const getBrand = async (): Promise<BrandType> => {
  try {
    const res = await fetch("http://135.181.108.207/brand/", {
      next: { revalidate: 10 },
    });
    const data = res.json();

    return data;
  } catch (error) {
    throw new Error("Brand Error");
  }
};
