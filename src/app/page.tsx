import React from "react";
import  {Suspense} from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbTruckDelivery } from "react-icons/tb";
import Img1 from "@/app/images/img1.jpg";
import Img2 from "@/app/images/img2.jpg";
import Img3 from "@/app/images/img3.jpg";
import { getBrand } from "@/services/getBrand";
import Image from "next/image";
import { Information } from "./components/home/ServiceCard/information";
import { CiCreditCard1 } from "react-icons/ci";
import { PiHandCoins } from "react-icons/pi";
import { PiChats } from "react-icons/pi";
import { HomeSideMenu } from "./components/home/homeSideMenu/HomeSideMenu";
import { TopCategories } from "./components/TopCategories/TopCategories";
import TopFlash from "./components/top-flash/top-flash";
import Img4 from "@/app/images/img4.jpg";
import Img5 from "@/app/images/img5.jpg";
import Products from "./components/Top-Products/products";
import Products2 from "./components/Top-Products/products2";
import Img6 from "@/app/images/img6.jpg";
import Img7 from "@/app/images/img7.jpg";
import Img8 from "@/app/images/img8.jpg";
import Brand from "./components/Brand/brand";
import AllCategories from "./components/AllCategory/allCategories";
import Loading  from "./components/home/Banner/loading";
import dynamic from "next/dynamic"
const Banner = dynamic(() => import("./components/home/Banner/Banner"), {ssr:false})
const Home = async () => {
  return (
    <div className="container">
      <div className=" flex items-start gap-5 pt-4">
        <div className="w-[25%] border lg2:block hidden shadow-xl p-3  max-h-[72.1vh] overflow-y-auto">
          <Suspense fallback={<Loading />}>
            <HomeSideMenu />
          </Suspense>
        </div>
        <div className=" lg2:w-[75%] w-full">
          <Suspense fallback={<Loading />}>
            <Banner />
          </Suspense>
        </div>
      </div>
      <section className="pt-14 block lg2:hidden  ">
        <AllCategories />
      </section>
      <section className="shadow-xl  p-4 mt-16 grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-4  ">
        <Information
          icon={<TbTruckDelivery color="yellow" size={35} />}
          title="FREE DELIVERY"
          description="For all oders over $120"
        />
        <Information
          icon={<CiCreditCard1 color="yellow" size={35} />}
          title="SAFE PAYMENT"
          description="100% secure payment"
        />
        <Information
          icon={<PiHandCoins color="yellow" size={35} />}
          title="SHOP WITH CONFIDENCE"
          description="If goods have problems"
        />
        <Information
          icon={<PiChats color="yellow" size={35} />}
          title="24/7 HELP CENTER"
          description="Dedicated 24/7 support"
        />
      </section>
      <section className="grid pt-9 lg2:grid-cols-3  grid-cols-1 gap-4 w-full ">
        <Image className="w-full" priority src={Img1} alt="img1" />
        <Image className="w-full " priority src={Img2} alt="img2" />
        <Image className="w-full" priority src={Img3} alt="img3" />
      </section>
      <section className="pt-8">
        <TopCategories />
      </section>
      <section className="pt-14">
        <TopFlash />
      </section>
      <section className="grid grid-cols-1 lg2:grid-cols-2 gap-5 pt-8">
        <Image src={Img4} alt="banner-img" className="w-full" />
        <Image src={Img5} alt="banner-img" className="w-full" />
      </section>
      <section className="pt-8">
        <Products />
      </section>
      <section className="pt-8">
        <Products2 />
      </section>{" "}
      <section className="pt-8">
        <Products />
      </section>
      <section className="grid grid-cols-1 lg2:grid-cols-3 gap-5 pt-8">
        <Image src={Img6} alt="banner-img6" className="w-full" />
        <Image src={Img7} alt="banner-img7" className="w-full" />
        <Image src={Img8} alt="banner-img8" className="w-full" />
      </section>
      <section className="pt-10">
        <Brand />
      </section>
    </div>
  );
};

export default Home;
