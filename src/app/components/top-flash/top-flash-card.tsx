import React from "react";
import CountdownTimer from "./countdown";
import RateIcon from "@/app/images/icon/rate";
import Image from "next/image";
interface SubCategoryType {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
    image_id: number;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price_with_discount: null;
  quantity: number;
  price: number;
  userPrice: number;
  userCount: number;
}
const TopFlashCard = (props: SubCategoryType) => {
  return (
    <div className="shadow-md- p-4 flex flex-col w-full lg2:flex-row gap-4 mx-auto bg-white items-center ">
      <div>
        <Image
          priority
          width={200}
          height={200}
          className="w-[400px] lg2:w-[800px] object-contain mx-auto"
          src={props?.images[0]?.image}
          alt={props.title}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-[#0066C0] text-xl">{props.title}</h2>
        <RateIcon />
        <strong>${props.price}</strong>
        {/* <p dangerouslySetInnerHTML={{ __html: props.other_detail }}></p> */}
        <p
          dangerouslySetInnerHTML={{
            __html:
              props?.other_detail?.length >= 200
                ? props.other_detail
                    .slice(0, 200)
                    .split(" ")
                    .slice(0, -1)
                    .join(" ") + "..."
                : props.other_detail,
          }}
        ></p>

        <div className="">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default TopFlashCard;
