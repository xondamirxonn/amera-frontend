"use client";

import { add, remove } from "@/app/redux/reducer/cart-reducer";
import { Button } from "@/components/ui/button";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BannerCarusel } from "../home-carusel/banner-carusel";
import { ProductCarusel } from "../Product-carusel/product-carusel";
import ImageZoom from "../ImageZoom/ImageZoom";
import { RootState } from "@/app/redux/store";

interface Type {
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
  userCount: number;
  userPrice: number;
}

const ProductSingle: React.FC<Type> = (props) => {
  const { products } = useSelector((state: RootState) => state.product);
  const cart = products.find((item) => item.id == props.id);
  console.log(props);

  const dispatch = useDispatch();

  const AddCart = () => {
    dispatch(add(props));
  };

  const RemoveCart = () => {
    dispatch(remove({ id: props.id }));
  };
  return (
    // <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
    //   <div className="">
    //     <ProductCarusel>
    //       {props?.images?.map((item) => (
    //         <div>
    //           <div className="block lg:hidden ">
    //             <img
    //               className="  mx-auto md:h-[400px] md:object-cover h-[200px] object-contain"
    //               src={item.image}
    //             />
    //           </div>
    //           <div className="hidden lg:block">
    //             <ImageZoom
    //               smallImageSrc={item?.image}
    //               largeImageSrc={item?.image}
    //             />
    //           </div>
    //         </div>
    //       ))}
    //     </ProductCarusel>
    //     <div className="grid grid-cols-2 items-center pt-10 gap-5">
    //       {props?.images?.map((item) => (
    //         <img className="h-[15vh] object-contain" src={item.image} />
    //       ))}
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-4  w-full lg:w-[75%] text-md">
    //     <h1 className="font-medium text-2xl lg:text-start text-center">
    //       {props.title}
    //     </h1>
    //     <strong className="text-xl">${props.price}</strong>
    //     <p dangerouslySetInnerHTML={{ __html: props.other_detail }}></p>
    //     <h1>{props.quantity}</h1>

    //     <Button
    //       onClick={!cart ? () => AddCart() : () => RemoveCart()}
    //       className={
    //         !cart
    //           ? "bg-[#FCB700] hover:bg-none rounded-[30px] w-[150px] "
    //           : "bg-rose-500 hover:bg-none rounded-[30px] w-[150px] "
    //       }
    //     >
    //       {!cart ? "Add To Cart" : "Remove Cart"}
    //     </Button>
    //   </div>
    // </div>
    <div>
      <div className="grid grid-cols-1 ">
        {props?.images?.length === 1 ? (
          <img
            className="mx-auto md:h-[400px] md:object-cover h-[200px] object-contain"
            src={props?.images[0]?.image}
          />
        ) : (
          <ProductCarusel>
            {props?.images?.map((item) => (
              <div>
                <div className="block lg:hidden ">
                  <img
                    className="  mx-auto md:h-[400px] md:object-cover h-[200px] object-contain"
                    src={item.image}
                  />
                </div>
                <div className="hidden lg:block">
                  <ImageZoom
                    smallImageSrc={item?.image}
                    largeImageSrc={item?.image}
                  />
                </div>
              </div>
            ))}
          </ProductCarusel>
        )}
        <div className="">
          <h1 className="font-medium text-xl text-center pt-8">
            {props.title}
          </h1>
          <div className="text-start flex flex-col gap-5">
            <div className="flex item-center gap-3 pt-4">
              <span>Price:</span>
              <strong>${props.price}</strong>
            </div>
            <div dangerouslySetInnerHTML={{ __html: props.other_detail }}></div>
            <Button
              className={
                !cart
                  ? "bg-[#FCB700] hover:bg-none rounded-[30px] w-[150px] "
                  : "bg-rose-500 hover:bg-none rounded-[30px] w-[150px] "
              }
              onClick={!cart ? () => AddCart() : () => RemoveCart()}
            >
              {!cart ? "Add To Cart" : "Remove Cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
