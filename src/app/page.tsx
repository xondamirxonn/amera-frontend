// "use server"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerCarusel } from "./components/home-carusel/banner-carusel";
import { getBanner } from "@/services/getBanner";
import { categoryData } from "@/services/getCategory";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { getCategoryId } from "./../services/getCategoryId";
const Home = async () => {
  const data = await getBanner();
  const category = await categoryData();
  const categoryId = await getCategoryId();
  console.log(categoryId)
  return (
    <div className="p-5">
      <div className=" flex items-start gap-5 ">
        <div className="w-25% border lg:block hidden shadow-xl p-3 max-h-[70vh] overflow-y-auto">
          <div className="flex items-end gap-3">
            <AiOutlineBars size={28} />

            <h1 className="uppercase font-bold">Shop By Deparment</h1>
          </div>
          <div className="border border-b mt-2 mb-2"></div>
          <div>
            <HoverCard>
              {category.results.map((item) => (
                <HoverCardTrigger asChild>
                  <div className="border-b-2 p-3 flex items-center justify-between cursor-pointer hover:text-[#FCB700]">
                    <p >{item.title}</p>
                  
                    <MdOutlineNavigateNext size={20} />
                  </div>
                </HoverCardTrigger>
              ))}
              <HoverCardContent>
                {categoryId?.children?.map((item: any) => (
                  <h1>{item.title}</h1>
                ))}
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <div className="lg:w-[75%] w-full">
          <BannerCarusel>
            {data.results.map((item) => (
              <div className="">
                <img
                  className="w-full mt-14 sm:mt-3.5  h-[15vh] sm:h-[70vh]"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            ))}
          </BannerCarusel>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
