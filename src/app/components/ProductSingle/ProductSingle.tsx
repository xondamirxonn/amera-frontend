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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CiHeart } from "react-icons/ci";
import { addList, removeList } from "@/app/redux/reducer/wishlist-reducer";
import { FcLike } from "react-icons/fc";
import Image from "next/image";

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
  const { wishlists } = useSelector((state: RootState) => state.wishlist);
  const dispatch = useDispatch();
  const like = wishlists.find((item) => item.id == props.id);
  const AddCart = () => {
    dispatch(add(props));
  };

  const RemoveCart = () => {
    dispatch(remove({ id: props.id }));
  };

  const AddLike = () => {
    dispatch(addList(props));
  };

  const RemoveLike = () => {
    dispatch(removeList({ id: props.id }));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg2:gap-10 ">
        {/* {props?.images?.length === 1 ? (
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
        )} */}

        <Carousel
          showStatus={false}
          stopOnHover={false}
          swipeable={false}
          transitionTime={1000}
        >
          {props.images.map((item) => (
            <div className="flex">
              <img
                // priority
                width={200}
                height={200}
                className="max-h-[200px] object-contain lg2:max-h-[600px] "
                src={item.image}
                alt="image"
              />
            </div>
          ))}
        </Carousel>

        <div className="">
          {!like ? (
            <div className="flex justify-end items-center gap-2">
              <CiHeart onClick={() => AddLike()} className=" cursor-pointer" />

              <span className="hidden md:block">Add Wishlist</span>
            </div>
          ) : (
            <div className="flex justify-end items-center gap-2 ">
              <FcLike
                onClick={() => RemoveLike()}
                className=" cursor-pointer"
              />

              <span className="hidden md:block">in wishlist</span>
            </div>
          )}
          <h1 className="font-medium text-xl text-center lg:text-start pt-8">
            {props.title}
          </h1>
          <div className="text-start flex flex-col gap-5 ">
            <div className="flex item-center gap-3 pt-4">
              <span>Price:</span>
              <strong>${props.price}</strong>
            </div>
            <div className="flex item-center gap-3 ">
              <span>Quantity:</span>
              <strong>{props.quantity}</strong>
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
