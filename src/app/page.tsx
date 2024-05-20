import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbTruckDelivery } from "react-icons/tb";
import Img1 from "@/app/images/img1.jpg";
import Img2 from "@/app/images/img2.jpg";
import Img3 from "@/app/images/img3.jpg";
import { getBrand } from "@/services/getBrand";
import Image from "next/image";
import { Information } from "./components/home/ServiceCard/information";
import { Banner } from "./components/home/Banner/Banner";
import { HomeSideMenu } from "./components/home/homeSideMenu/HomeSideMenu";
import { TopCategories } from "./components/TopCategories/TopCategories";
import TopFlash from "./components/top-flash/top-flash";
import Img4 from "@/app/images/img4.jpg";
import Img5 from "@/app/images/img5.jpg";
const Home = async () => {
  return (
    <div className="container">
      <div className=" flex items-start gap-5 pt-4">
        <div className="w-[25%] border lg:block hidden shadow-xl p-3  max-h-[72.1vh] overflow-y-auto">
          <HomeSideMenu />
        </div>
        <div className=" lg:w-[75%] w-full">
          <Banner />
        </div>
      </div>
      <section className="shadow-xl  p-4 mt-16 grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-4  ">
        <Information
          icon={<TbTruckDelivery color="yellow" size={35} />}
          title="FREE DELIVERY"
          description="For all oders over $120"
        />
        <Information
          icon={<TbTruckDelivery color="yellow" size={35} />}
          title="FREE DELIVERY"
          description="For all oders over $120"
        />
        <Information
          icon={<TbTruckDelivery color="yellow" size={35} />}
          title="FREE DELIVERY"
          description="For all oders over $120"
        />
        <Information
          icon={<TbTruckDelivery color="yellow" size={35} />}
          title="FREE DELIVERY"
          description="For all oders over $120"
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
    </div>
  );
};

export default Home;
