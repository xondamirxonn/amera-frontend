interface CategoryType {
  count: number,
  next: string,
  previous: null | string,
  results: {
    id: number,
    title: string,
    image: string,
    children: {  
      id: number,
      title: string
    }[]
    
  }[]
}

export const categoryData = async (): Promise<CategoryType>  => {
  try {
    const res = await fetch("http://135.181.108.207/category/", {
      next: { revalidate: 10 },
    });
    const data = res.json()

    return data
  } catch (error) {
    throw new Error("Category Error")
  }
}