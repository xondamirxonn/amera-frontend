import { getCaregoryLimit } from "@/services/getCategoryLimit";
import { CategoryCard } from "../CategoryCard/CategoryCard"

export const TopCategories = async () => {
  const data = await getCaregoryLimit()
  return (
    <div>
      <div className="flex items-center gap-3 pb-4">
        <h1 className="font-medium text-xl">Top Categories</h1>
        <div className="border border-b w-[1240px] hidden lg2:block"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {data.results.map((item) => (
        <div className="border bg-white">
          <CategoryCard {...item} key={item.id} />
        </div>
      ))}
    </div>
    </div>
  );
}
