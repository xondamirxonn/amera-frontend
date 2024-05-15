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
      <section className="flex pt-9 lg:flex-row flex-col gap-4 justify-center items-center">
        <div className="w-full ">
          <Image
            className="w-full  h-[20vh] lg:min-h-[150px]"
            priority
            src={Img1}
            alt="img1"
          />
        </div>
        <div className="w-full">
          <Image
            className="w-full  h-[20vh] lg:min-h-[150px]"
            priority
            src={Img2}
            alt="img2"
          />
        </div>
        <div className="w-full">
          <Image
            className="w-full  h-[20vh] lg:min-h-[150px]"
            priority
            src={Img3}
            alt="img3"
          />
        </div>
      </section>

      <section className="pt-8">
        <TopCategories />
      </section>
    </div>
  );
};

export default Home;
