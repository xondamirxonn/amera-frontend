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

const CartCard = () => {
  const { products, totalPrice, count } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch();
  console.log(products);
  const RemoveCount = (id: number) => {
    dispatch(counts({ type: "remove", id }));
  };

  const AddCount = (id: number) => {
    dispatch(counts({ type: "add", id }));
  };
  const ProductRemove = (id: number) => {
    dispatch(remove({ id }));
  };
  return (
    <div>
      {products.length ? (
        <div>
          <div className=" lg:hidden container grid grid-cols-1 gap-4">
            {products.map((item) => (
              <div key={item.id} className="border flex flex-col p-3 ">
                <div className="flex justify-end ">
                  <FaXmark
                    size={20}
                    onClick={() => ProductRemove(item.id)}
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex gap-3 items-start">
                  <div>
                    <img
                      className="max-w-[300px] w-[120px] h-[120px] max-h-[120px] object-contain"
                      src={item?.images[0]?.image}
                      alt=""
                    />
                  </div>
                  <div className="pt-4">
                    <h1>{item?.title}</h1>
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
            ))}
            <div className="border p-2  fixed bottom-[48px] z-50  left-0 right-0 bg-white">
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
          <div className="hidden lg:block container pt-[3%] ">
            <div className="flex items-start justify-between">
              <Table className="border w-[90%]">
                <TableHead></TableHead>
                <TableHead></TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total</TableHead>
                <TableBody className="border">
                  {products.map((item) => (
                    <TableRow>
                      <TableCell>
                        <FaXmark
                          className="cursor-pointer"
                          onClick={() => ProductRemove(item.id)}
                        />
                      </TableCell>
                      <TableCell>
                        <img
                          className="max-w-[300px] w-[120px] h-[120px] max-h-[120px] object-contain"
                          src={item?.images[0]?.image}
                          alt={item.title}
                        />
                      </TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>${parseInt(item.price.toString())}</TableCell>
                      <TableCell>
                        <div className="flex gap-5 items-center justify-between border p-1 max-w-[150px]">
                          
                            <div>
                              <Button
                                className="w-[30px] h-[30px] bg-white text-black"
                                onClick={() => RemoveCount(item.id)}
                                disabled={item.userCount <= 1}
                              >
                                -
                              </Button>
                              <span>{item.userCount}</span>
                              <Button
                                className="w-[30px] h-[30px] bg-white text-black"
                                onClick={() => AddCount(item.id)}
                                disabled={item.userCount === item.quantity}
                              >
                                +
                              </Button>
                            </div>
                        
                        </div>
                      </TableCell>
                      <TableCell>${item.userPrice}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="   gap-3 w-[40%] ">
                <div className="fixed border flex flex-col min-h-[200px] w-[350px] p-2">
                  <h1 className="font-medium text-2xl border-b border-black pb-1.5">
                    Cart Totals
                  </h1>
                  <div className="flex flex-col gap-3">
                    <div className="pt-5 flex flex-col gap-5">
                      <div className="flex items-center justify-between">
                        <h2>Your Order</h2>
                        <span>{count}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h2>Total</h2>
                        <strong>${totalPrice}</strong>
                      </div>
                    </div>
                    <div className="pt-2 ">
                      <Button className="bg-[#FCB700] rounded-full  w-full">
                        Proceed To Checkout
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center lg:pt-[4%]">
          <Image
            priority
            src={EmptyCart}
            alt="cart"
            className="max-w-[300px]  mx-auto"
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