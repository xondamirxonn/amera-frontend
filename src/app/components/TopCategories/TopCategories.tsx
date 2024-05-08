import { categoryData } from "@/services/getCategory"
import { CategoryCard } from "../CategoryCard/CategoryCard"

export const TopCategories = async () => {
  const data = await categoryData()
  const filter = data?.results?.filter((item) => item.children.length > 0)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {data.results.map((item) => (
        <div className="border bg-white">
          <CategoryCard {...item} key={item.id} />
        </div>
      ))}
    </div>
  );
}
