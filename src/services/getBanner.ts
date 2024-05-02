interface BannerType {
  count: number,
  next: null | string,
  previous: null | string,
  results: {
    id: number,
    image: string,
    title: string,
    description: string
  }[]
}
export const getBanner = async (): Promise<BannerType> => {
  try {
    const res = await fetch("http://135.181.108.207/banner/", {
      next: {revalidate: 10}
    });
    const data = res.json()

    return data
  } catch (error) {
    throw new Error("Banner Error")
  }
}
