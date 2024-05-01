interface CategoryType {
  count: number,
  next: string,
  previous: null | string,
  results: {
    id: number,
    title: string,
    image: string,
    children: []
  }[]
}

export const categoryData = async (): Promise<Category>  => {
  try {
    const res = await fetch("http://135.181.108.207/category/");
    const data = res.json()

    return data
  } catch (error) {
    throw new Error("Category Error")
  }
}