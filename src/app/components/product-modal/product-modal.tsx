"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "@/app/redux/reducer/cart-reducer";
import Link from "next/link";
import { addList } from "@/app/redux/reducer/wishlist-reducer";
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
  price: number;
  price_with_discount: null;
  quantity: number;
  userPrice: number;
  userCount: number;
}
const ProductModal = (props: Type) => {
  const [open, setOpen] = useState(false);
  const { products } = useSelector((state: any) => state.product);
  const { wishlists } = useSelector((state: any) => state.wishlist);
  const cart = products.find((item: any) => item.id == props.id);
  const dispatch = useDispatch();
  
  const AddCart = () => {
    dispatch(add(props));
  };

  const RemoveCart = () => {
    dispatch(remove(props));
  };
  const AddWishlist = () => {
    dispatch(addList(props));
  };
  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        size="icon"
        className=" rounded-full border bg-white hover:bg-[#FCB700]"
      >
        <IoEyeOutline color="black" size={25} />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[1000px] ">
          <div className="flex gap-10 items-start">
            <div className="w-[45%] ">
              <Image
                priority
                width={200}
                height={200}
                className="w-[400px] object-cover max-h-[60vh]"
                src={props.images[0].image}
                alt={props.title}
              />
            </div>
            <div className="flex flex-col gap-3 w-[65%] max-h-[80vh] overflow-auto">
              <h1 className="font-medium text-xl text-start">{props.title}</h1>
              <DialogTitle>${props.price}</DialogTitle>
              <div className="flex items-center gap-5">
                <Button
                  onClick={!cart ? () => AddCart() : () => RemoveCart()}
                  className={
                    !cart
                      ? "bg-[#FCB700] hover:bg-none rounded-[30px] w-[150px] "
                      : "bg-rose-500 hover:bg-none rounded-[30px] w-[150px] "
                  }
                >
                  {!cart ? "Add To Cart" : "Remove Cart"}
                </Button>

                <Link
                  href={`/product/${props.id}`}
                  className="hover:text-[#FCB700] transition-all duration-1000 "
                >
                  See all features
                </Link>
              </div>

              <p dangerouslySetInnerHTML={{ __html: props.other_detail }}></p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductModal;
