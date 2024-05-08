import React from "react";
import { BannerCarusel } from "../../home-carusel/banner-carusel";
import { getBanner } from "@/services/getBanner";

export const Banner = async () => {
  const data = await getBanner();
  return (
    <BannerCarusel>
      {data.results.map((item) => (
        <div className="">
          <img
            className="w-full max-h-[500px] min-h-[300px] xs:min-h-[300px] sm:h-[500px]  ml:h-[600px] object-cover bg-center"
            src={item.image}
            alt={item.title}
          />
          {/* <p dangerouslySetInnerHTML={{ __html: item.description }}></p> */}
          <h1>{item.title}</h1>
        </div>
      ))}
    </BannerCarusel>
  );
};
