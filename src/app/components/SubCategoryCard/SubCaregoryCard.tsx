import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Type {
  id: number;
  image: string;
  title: string;
}

export const SubCaregoryCard: React.FC<Type> = (props) => {
  return (
    <div>
      <div className=" rounded-sm bg-white p-3 w-[300px]  md:w-[350px] lg:w-[280px]  flex flex-col justify-between min-h-[30vh] sm:min-h-[50vh] md:min-h-[35vh] lg:min-h-[30vh] relative  group overflow-hidden shadow-md lg:shadow-none lg:hover:shadow-lg transition-all duration-500 ">
        <Link href={`/subcategory/${props.id}`}>
          <Image
            priority
            width={200}
            height={200}
            className=" mx-auto min-h-[250px] max-h-[200px]  object-contain duration-1000  group-hover:scale-[0.9] "
            src={props.image}
            alt={props.title}
          />
          <div className="text-center ">
            <h1 title={props.title} className="text-[#0066C8] pt-2">
              {" "}
              {props.title?.length >= 30
                ? props.title.slice(0, 30).split(" ").slice(0, -1).join(" ") +
                  "..."
                : props.title}{" "}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};
