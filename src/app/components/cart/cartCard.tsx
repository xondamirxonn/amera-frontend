"use client";

import { counts, remove } from "@/app/redux/reducer/cart-reducer";
import { RootState } from "@/app/redux/store";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { FaXmark } from "react-icons/fa6";
import EmptyCart from "@/app/images/emptyCart.svg";
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { addList, removeList } from "@/app/redux/reducer/wishlist-reducer";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
// import TableCard from "./tableCard";
import dynamic from "next/dynamic";
const TableCard = dynamic(() => import("./tableCard"), { ssr: false });
const CartCard = () => {
  const { products, totalPrice, count } = useSelector(
    (state: RootState) => state.product
  );
  const { wishlists } = useSelector((state: RootState) => state.wishlist);
  const dispatch = useDispatch();

  const RemoveCount = (id: number) => {
    dispatch(counts({ type: "remove", id }));
  };

  const AddCount = (id: number) => {
    dispatch(counts({ type: "add", id }));
  };

  const ProductRemove = (id: number) => {
    dispatch(remove({ id }));
  };

  const AddLike = (item: any) => {
    dispatch(addList(item));
  };

  const RemoveLike = (item: any) => {
    dispatch(removeList({ id: item.id }));
  };

  return (
    <div>
      {products.length ? (
        <div>
          <div className="lg:hidden grid grid-cols-1 gap-4">
            {products.map((item) => {
              const like = wishlists.some(
                (wishlistItem) => wishlistItem.id === item.id
              );

              return (
                <div key={item.id} className="border flex flex-col p-3">
                  <div className="flex items-center justify-end  gap-4">
                    <div className="">
                      {!like ? (
                        <CiHeart
                          onClick={() => AddLike(item)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <FcLike
                          onClick={() => RemoveLike(item)}
                          className="cursor-pointer"
                        />
                      )}
                    </div>
                    <div className="flex justify-end">
                      <FaXmark
                        size={20}
                        onClick={() => ProductRemove(item.id)}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div>
                      <Image
                        priority
                        width={200}
                        height={200}
                        className="max-w-[300px] w-[120px] h-[120px] max-h-[120px] object-contain"
                        src={item?.images[0]?.image}
                        alt={item.title}
                      />
                    </div>
                    <div className="pt-4">
                      <Link href={`/product/${item.id}`}>{item?.title}</Link>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <div className="flex gap-5 items-center border p-1">
                      <Button
                        className="w-[30px] h-[30px] bg-white text-black"
                        onClick={() => RemoveCount(item.id)}
                        disabled={item.userCount <= 1}
                      >
                        -
                      </Button>
                      <span>{item?.userCount}</span>
                      <Button
                        className="w-[30px] h-[30px] bg-white text-black"
                        onClick={() => AddCount(item.id)}
                        disabled={item.userCount === item.quantity}
                      >
                        +
                      </Button>
                    </div>
                    <div className="flex justify-end flex-col">
                      <div className="text-xs flex items-center gap-3">
                        <span>Price:</span>
                        <p>${item?.price}</p>
                      </div>
                      <strong className="text-end">${item?.userPrice}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="border p-2 fixed bottom-[48px] z-50 left-0 right-0 bg-white">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs">Total Price:</span>
                  <h1>${totalPrice}</h1>
                </div>
                <div>
                  <Button className="bg-[#FCB700]">Formalize</Button>
                </div>
              </div>
            </div>

            <div className="border p-3 mb-20">
              <h1>Your Order</h1>
              <p>products ({count})</p>
              <div className="flex justify-between items-center">
                <span>Total: </span>
                <strong>${totalPrice}</strong>
              </div>
            </div>
          </div>
          <div className="hidden lg:block pt-[3%]">
            <TableCard />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center lg:pt-[4%]">
          <Image
            priority
            src={EmptyCart}
            alt="cart"
            className="max-w-[300px] mx-auto"
          />
          <h1 className="font-medium">No Product</h1>
          <Link href="/" className="bg-[#FCB700] p-2.5 text-white rounded-md">
            Home Page
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartCard;
