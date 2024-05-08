import Image from "next/image";
import React from "react";
interface Type {
  id: number,
  image: string;
  title: string;
  children: {
    id:number,
    image: string,
    title: string,
  }[],
}
export const CategoryCard: React.FC<Type> = ({image, title, children }) => {
  return (
    <div className="flex justify-between p-3 w-auto items-center ">
      <div className="flex flex-col gap-5">
        <h1>{title}</h1>
        {
           children?.length <= 1 ? (
             <p>({children?.length} item)</p>
           ) : (
             <p>({children?.length} items)</p>
           )
          }
        

      </div>
      <div>
        <img className="w-[100px] max-h-[100px] lg:w-[100px]" src={image}  alt={title} />
        
      </div>
    </div>
  );
};
