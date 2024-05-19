import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categoryData } from "@/services/getCategory";
import Link from "next/link";
import React from "react";
import { ImEqualizer } from "react-icons/im";
interface Type {
  categoryId: number;
}
export const CategoryList = async ({ categoryId }: Type) => {
  const data = await categoryData();
  return (
    <div className="">
      <div className="h-[80vh]   hidden lg:block   sticky w-[350px] z-50   overflow-auto rounded-md border p-4 ">
        <ScrollArea>
          {data.results.map((item) => (
            <Link href={`/category/${item.id}`} key={item.id}>
              <div className="mt-2 border-b py-2 mb-3">
                <h1 className={categoryId == item.id ? "text-[#FCB700]" : ""}>
                  {item.title}
                </h1>
              </div>
            </Link>
          ))}
        </ScrollArea>
      </div>
      <div className="block lg:hidden fixed z-50  pt-[300px]">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button className="rounded-s-none bg-white  border">
              <ImEqualizer color="gray" size={20} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="w-[300px] h-full overflow-auto rounded-t-none">
            {data.results.map((item) => (
              <Link href={`/category/${item.id}`} key={item.id}>
                <div className="mt-2 border-b py-2 ">
                  <h1
                    className={`${
                      categoryId == item.id ? "text-[#FCB700] " : ""
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
