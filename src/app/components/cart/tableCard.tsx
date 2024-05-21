import { counts, remove } from '@/app/redux/reducer/cart-reducer';
import { addList, removeList } from '@/app/redux/reducer/wishlist-reducer';
import { RootState } from '@/app/redux/store';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { FaXmark } from 'react-icons/fa6';
import { FcLike } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';

const TableCard = () => {
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
    <div className="flex items-start justify-between">
      <Table className="border w-[90%]">
        <TableHead></TableHead>
        <TableHead></TableHead>
        <TableHead>Product</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Quantity</TableHead>
        <TableHead>Total</TableHead>
        <TableHead></TableHead>
        <TableBody className="border">
          {products.map((item) => {
            const like = wishlists.some(
              (wishlistItem) => wishlistItem.id === item.id
            );

            return (
              <TableRow key={item.id}>
                <TableCell>
                  <FaXmark
                    className="cursor-pointer"
                    onClick={() => ProductRemove(item.id)}
                  />
                </TableCell>
                <TableCell>
                  <Image
                    priority
                    width={200}
                    height={200}
                    className="max-w-[300px] w-[120px] h-[120px] max-h-[120px] object-contain"
                    src={item?.images[0]?.image}
                    alt={item.title}
                  />
                </TableCell>
                <TableCell>
                  <Link href={`/product/${item.id}`}>{item?.title}</Link>
                </TableCell>
                <TableCell>${parseInt(item.price.toString())}</TableCell>
                <TableCell>
                  <div className="flex gap-5 items-center mx-auto justify-between border p-1 max-w-[150px]">
                    <div>
                      <Button
                        className="w-[60px] h-[30px] bg-white text-black"
                        onClick={() => RemoveCount(item.id)}
                        disabled={item.userCount <= 1}
                      >
                        -
                      </Button>
                      <span>{item.userCount}</span>
                      <Button
                        className="w-[60px] h-[30px] bg-white text-black"
                        onClick={() => AddCount(item.id)}
                        disabled={item.userCount === item.quantity}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </TableCell>
                <TableCell>${item.userPrice}</TableCell>
                <TableCell>
                  <div className="flex justify-end items-center gap-2">
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
                    <span className="hidden md:block">
                      {like ? "In Wishlist" : "Add to Wishlist"}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="gap-3 w-[40%]">
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
            <div className="pt-2">
              <Button className="bg-[#FCB700] rounded-full w-full">
                Proceed To Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableCard