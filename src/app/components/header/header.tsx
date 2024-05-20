import Image from "next/image";
import Logo from "@/app/images/logo.png";
import { IoIosMenu } from "react-icons/io";
import { LuLayers } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
// import categoryData from "@/app/services/getCategory"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryData } from "@/services/getCategory";
// import Layoutbottom from "../home-carusel/layout-bottom/layout-bottom";
import { ModeToggle } from "../../../components/mode-toggle";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
const HeaderIcon = dynamic(() => import("./header-icon"), { ssr: false });
const Layoutbottom = dynamic(
  () => import("../home-carusel/layout-bottom/layout-bottom"),
  { ssr: false }
);
export const Header = async () => {
  const data = await categoryData();
  return (
    <div className="w-full fixed dark:bg-[#020817]   bg-white z-50 ">
      <div className="container sm:flex sm:flex-col md:flex-row md:items-center justify-between hidden   items-center pt-2 ">
        <h1>Welcome to Worldwide Electronics Store</h1>
        <div>
          <ul className="flex items-center gap-3">
            <li>My account</li>
            <li>Checkout</li>
            <li>Shop</li>
            <li>Wishlist</li>
          </ul>
        </div>
      </div>
      {/* <div className="border border-b-0 mt-2 sm:block hidden w-[100%]"></div> */}
      <div className="p-5 flex items-center justify-between container">
        <Link href="/">
          <Image priority className="max-sm:w-[130px]" src={Logo} alt="logo" />
        </Link>
        <div className="xl:flex hidden items-center gap-3 ">
          <BiSupport size={35} />
          <div className="flex flex-col items-start">
            <span>Hotline Free:</span>
            <Link href="tel:06900678900">06-900-6789-00</Link>
          </div>
        </div>
        <div className="lg:flex hidden items-center border border-[#FCB700] rounded-3xl  ">
          <Select>
            <SelectTrigger className="w-[180px] border-none focus:outline-none bg-transparent">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {data?.results?.map((item) => (
                  <SelectItem value={item.title}>{item.title}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            placeholder="Search Products..."
            className="border-none focus:outline-none  dark:bg-[#020817]"
          />
          <Button className="bg-[#FCB700] rounded-e-3xl rounded-s-none h-[50px]">
            Search
          </Button>
        </div>
        <div className="lg:block hidden ">
          {/* <div className="flex items-center gap-5">
            <div className="flex items-center flex-col">
              <LuLayers size={35} />
              <span>Compare</span>
            </div>
            <div className="flex items-center flex-col">
              <CiStar size={35} />
              <span>Favorites</span>
            </div>
            <Link href="/cart" className="flex items-center flex-col">
              <SlHandbag size={35} />
              <Badge>{products.length}</Badge>
              <span>My Cart</span>
            </Link>
            <div className="">
              <ModeToggle />
            </div>
          </div> */}
          <HeaderIcon />
        </div>
        <div className="lg:hidden ">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant={"outline"}>
                {" "}
                <IoIosMenu className=" cursor-pointer" size={25} />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full w-[300px]   p-3  rounded-none ">
              <div className="flex justify-end ">
                <DrawerClose className=" " asChild>
                  <IoIosClose className="cursor-pointer " size={35} />
                </DrawerClose>
              </div>
              <Input
                placeholder="Search Product"
                className=" border-[#FCB700] rounded-none w-auto"
              />
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <Link href="/">Home</Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <Link href="/shop">Shop</Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="">
                    <Link href="/blog">Blog</Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="mt-3">
                <ModeToggle />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <Layoutbottom />
    </div>
  );
};
