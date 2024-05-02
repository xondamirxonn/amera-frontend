import React from "react";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { BannerCarusel } from "./components/home-carusel/banner-carusel";
import { getBanner } from "@/services/getBanner";
import { categoryData } from "@/services/getCategory";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCategoryId } from "./../services/getCategoryId";
import Link from "next/link";
import { BannerCarusel } from "./components/home-carusel/banner-carusel";
import { useParams } from "next/navigation";
const Home = async () => {
  // const {id} = useParams()
  // console.log(id)
  const data = await getBanner();
  const category = await categoryData();

  return (
    <div className="p-5">
      <div className=" flex items-start gap-5 ">
        <div className="w-[25%] border lg:block hidden shadow-xl p-3 max-h-[72.1vh] overflow-y-auto">
          <div className="flex items-end gap-3">
            <AiOutlineBars size={28} />

            <h1 className="uppercase font-bold">Shop By Deparment</h1>
          </div>
          <div className="border border-b mt-2 mb-2"></div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {category.results.map((item, index) => (
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  {item.children.length ? (
                    item.children.map((child) => (
                      <AccordionContent className={item.children.length >1 ? `border-t  w-full  ` : ""}>
                        <h1 className="mt-2">{child.title} </h1>
                      </AccordionContent>
                    ))
                  ) : (
                    <AccordionContent>No subcategory</AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
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
                {/* <Link href={item.description}>Link</Link> */}
                {/* <p dangerouslySetInnerHTML={{ __html: item.description }}></p> */}
                <h1>{item.title}</h1>
              </div>
            ))}
          </BannerCarusel>
        </div>
      </div>
    </div>
  );
};

export default Home;
