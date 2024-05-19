import React from "react";
import { getSubcategory } from "./../../../services/getSubcategory";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { FaXmark } from "react-icons/fa6";
import { ImEqualizer } from "react-icons/im";


interface Type {
  subcategoryId: number;
}
const SubCategoryList = async ({ subcategoryId }: Type) => {
  const data = await getSubcategory();
  return (
    <div className="">
      <div className=" h-[80vh]   hidden lg:block   sticky w-[350px]   overflow-auto rounded-md border p-4">
        <ScrollArea>
          {data.results.map((item) => (
            <Link href={`/subcategory/${item.id}`} key={item.id}>
              <div className="mt-2 border-b py-2 mb-3">
                <h1
                  className={subcategoryId == item.id ? "text-[#FCB700]" : ""}
                >
                  {item.title}
                </h1>
              </div>
            </Link>
          ))}
        </ScrollArea>
      </div>
      <div className="block lg:hidden fixed z-50 pt-[300px]">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button className="rounded-s-none bg-white  border">
              <ImEqualizer color="gray" size={20} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="w-[300px] h-full overflow-auto rounded-t-none">
            {data.results.map((item) => (
              <Link href={`/subcategory/${item.id}`} key={item.id}>
                <div className="mt-2 border-b py-2 ">
                  <h1
                    className={`${
                      subcategoryId == item.id ? "text-[#FCB700] " : ""
                    } px-4`}
                  >
                    {item.title}
                  </h1>
                </div>
              </Link>
            ))}
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default SubCategoryList;
