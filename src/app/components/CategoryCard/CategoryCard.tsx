import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Type {
  id: number;
  image: string;
  title: string;
  children: {
    id: number;
    image: string;
    title: string;
  }[];
}
export const CategoryCard: React.FC<Type> = ({
  id,
  image,
  title,
  children,
}) => {
  return (
    <div className="flex justify-between p-3 w-auto items-center ">
      <div className="flex flex-col gap-5">
        <Link href={`/category/${id}`}>
          <h1 className="hover:text-[#FCB700] transition-all duration-300">
            {title}
          </h1>
        </Link>
        {children?.length <= 1 ? (
          <p>({children?.length} item)</p>
        ) : (
          <p>({children?.length} items)</p>
        )}
      </div>
      <div>
        <Image
          priority
          width={200}
          height={200}
          className="w-[100px] max-h-[100px] lg:w-[100px]"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};
